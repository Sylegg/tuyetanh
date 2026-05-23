"use client";

import { motion } from "framer-motion";
import { RemoteImage } from "@/components/RemoteImage";
import { SectionShell } from "@/components/SectionShell";
import { people } from "@/data/wedding";

export function BrideGroom() {
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
              initial={{ opacity: 0, y: 42, scale: 0.95, rotate: isBride ? -6 : 6 }}
              whileInView={{ opacity: 1, y: 0, scale: 1, rotate: isBride ? -4 : 4 }}
              viewport={{ once: true, amount: 0.34 }}
              transition={{ duration: 0.9, delay: index * 0.16, ease: [0.22, 1, 0.36, 1] }}
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
