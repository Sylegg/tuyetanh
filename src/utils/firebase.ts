"use client";

import { initializeApp, type FirebaseApp } from "firebase/app";
import { getDatabase, onValue, push, ref, type Database } from "firebase/database";

export type Wish = {
  id: string;
  name: string;
  message: string;
  attendance?: string;
  guests?: number;
  createdAt: number;
};

let app: FirebaseApp | null = null;
let database: Database | null = null;

function hasFirebaseConfig() {
  return Boolean(
    process.env.NEXT_PUBLIC_FIREBASE_API_KEY &&
      process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL &&
      process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  );
}

function getDb() {
  if (!hasFirebaseConfig()) return null;

  if (!app) {
    app = initializeApp({
      apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
      authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
      databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
      projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
      storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
      messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
      appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
    });
  }

  database ??= getDatabase(app);
  return database;
}

export function subscribeWishes(callback: (wishes: Wish[]) => void) {
  const db = getDb();

  if (!db) {
    const stored = window.localStorage.getItem("wedding-wishes");
    callback(stored ? (JSON.parse(stored) as Wish[]) : []);
    return () => undefined;
  }

  return onValue(ref(db, "wishes"), (snapshot) => {
    const value = snapshot.val() as Record<string, Omit<Wish, "id">> | null;
    callback(
      Object.entries(value ?? {})
        .map(([id, wish]) => ({ id, ...wish }))
        .sort((a, b) => b.createdAt - a.createdAt),
    );
  });
}

export async function submitWish(wish: Omit<Wish, "id" | "createdAt">) {
  const entry: Omit<Wish, "id"> = { ...wish, createdAt: Date.now() };
  const db = getDb();

  if (!db) {
    const stored = window.localStorage.getItem("wedding-wishes");
    const wishes = stored ? (JSON.parse(stored) as Wish[]) : [];
    const next = [{ id: crypto.randomUUID(), ...entry }, ...wishes].slice(0, 30);
    window.localStorage.setItem("wedding-wishes", JSON.stringify(next));
    window.dispatchEvent(new Event("wedding-wishes-updated"));
    return;
  }

  await push(ref(db, "wishes"), entry);
}
