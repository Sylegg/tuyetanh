"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { SectionShell } from "@/components/SectionShell";
import { loveStory } from "@/data/wedding";

export function LoveStory() {
  return (
    <SectionShell id="story" eyebrow="Chuyện chúng mình" title="Album Kỷ Niệm">
      <div className="album-stack">
        {loveStory.map((item, index) => {
          const isEven = index % 2 === 0;

          return (
            <motion.article 
              className={`album-card ${isEven ? "tilt-left" : "tilt-right"}`}
              key={item.index}
              initial={{ opacity: 0, y: 50, rotate: isEven ? -4 : 4 }}
              whileInView={{ opacity: 1, y: 0, rotate: isEven ? -2 : 2 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
            >
              {/* Polaroid-style Washi tape on top for a realistic scrapbook look */}
              <div className="album-card-tape" />

              {/* The Photo Container inside the card */}
              <div className="album-card-photo-wrapper">
                <Image
                  src={item.image}
                  alt={`Kỷ niệm ${item.index}`}
                  className="album-card-image"
                  placeholder="blur"
                />
              </div>

              {/* The Poem Area (directly underneath the photo inside the same frame) */}
              <div className="album-card-content">

                
                {/* Delicate Divider */}
                <div className="album-card-divider">
                  <span className="divider-dot"></span>
                  <span className="divider-heart">♥</span>
                  <span className="divider-dot"></span>
                </div>

                {/* Poem lines */}
                <div className="album-card-poem">
                  {item.poem.map((line, lineIdx) => (
                    <p key={lineIdx} className="album-card-poem-line">
                      {line}
                    </p>
                  ))}
                </div>


              </div>
            </motion.article>
          );
        })}
      </div>
    </SectionShell>
  );
}
