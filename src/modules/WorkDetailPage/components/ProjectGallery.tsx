import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';

const ProjectGallery = ({ images }: { images: { src: string; className: string }[] }) => {
  return (
    <div className="container mx-auto px-4 pb-20">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        {images.map((img, index) => (
          <motion.div
            key={index}
            className={`relative aspect-[16/9] rounded-[40px] overflow-hidden border border-white/10 ${img.className}`}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <Image src={img.src} alt={`Gallery image ${index + 1}`} fill className="object-cover" />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProjectGallery;
