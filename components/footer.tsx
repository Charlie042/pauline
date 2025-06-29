"use client";
import { AnimatePresence, motion } from "motion/react";
import { Instagram, Facebook, Twitter, Linkedin } from "lucide-react";
import Link from "next/link";

const Footer = () => {
    const socialMedia = [
        {
            name: "Instagram",
            icon: <Instagram className="w-4 h-4" />,
            link: "https://www.instagram.com/pauline_malize/"
        },
        {
            name: "Facebook",
            icon: <Facebook className="w-4 h-4" />,
            link: "https://www.facebook.com/pauline_malize/"
        },
        {
            name: "Twitter",
            icon: <Twitter className="w-4 h-4" />,
            link: "https://www.twitter.com/pauline_malize/"
        },
        {
            name: "Linkedin",   
            icon: <Linkedin className="w-4 h-4" />,
            link: "https://www.linkedin.com/in/pauline_malize/"
        }
    ]
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="flex justify-center items-center w-full h-full bg-neutral-100 mt-10 py-5">
          <div className="flex justify-center items-center gap-5 w-full h-full">
            {socialMedia.map((item) => (
              <Link href={item.link} key={item.name} className="text-neutral-500 hover:text-neutral-900 transition-all duration-300">
                {item.icon}
              </Link>
            ))}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Footer;