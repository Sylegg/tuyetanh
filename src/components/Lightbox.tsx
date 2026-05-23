"use client";

import { X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { RemoteImage } from "@/components/RemoteImage";

type LightboxProps = {
  image: string | null;
  onClose: () => void;
};

export function Lightbox({ image, onClose }: LightboxProps) {
  return (
    <AnimatePresence>
      {image && (
        <motion.div
          className="fixed inset-0 z-40 grid place-items-center bg-black/80 p-4 backdrop-blur-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <button
            className="absolute right-5 top-5 rounded-full border border-white/20 bg-white/10 p-3 text-white"
            onClick={onClose}
            aria-label="Đóng ảnh xem trước"
          >
            <X size={20} />
          </button>
          <motion.div
            className="relative h-[86vh] w-full max-w-4xl overflow-hidden rounded-[24px] shadow-2xl"
            initial={{ scale: 0.92, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.96, opacity: 0 }}
            onClick={(event) => event.stopPropagation()}
          >
            <RemoteImage src={image} alt="Ảnh cưới xem trước" sizes="90vw" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
