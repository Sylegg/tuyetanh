"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { RemoteImage } from "@/components/RemoteImage";
import { SectionShell } from "@/components/SectionShell";
import { people } from "@/data/wedding";

export function BrideGroom() {
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <SectionShell id="couple" title="Cô dâu & Chú rể">
      <div className="editorial-couple-layout">
        <span className="editorial-petal editorial-petal-one" />
        <span className="editorial-petal editorial-petal-two" />
        <span className="editorial-petal editorial-petal-three" />
        <span className="editorial-spark editorial-spark-one" />
        <span className="editorial-spark editorial-spark-two" />
        {people.map((person, index) => {
          const isBride = index === 0;

          return (
            <motion.article
              className={`editorial-person-card ${isBride ? "is-bride" : "is-groom"}`}
              key={person.role}
              initial={{ opacity: 0, y: isMobile ? 24 : 42 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: isMobile ? 0.5 : 0.9, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="editorial-image">
                <RemoteImage
                  src={person.image}
                  alt={`Chân dung ${person.role}`}
                  sizes="(min-width: 720px) 46vw, 82vw"
                />
              </div>
              <div className="editorial-vignette" />
              <div className="editorial-caption">
                <p>{person.role}</p>
                <h3>{person.name}</h3>
                <span>Ngày sinh - {person.birthday}</span>
                <blockquote>{person.quote}</blockquote>
              </div>
            </motion.article>
          );
        })}
      </div>
    </SectionShell>
  );
}
