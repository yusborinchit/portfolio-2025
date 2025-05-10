import ButterflyNailsMockup from "../assets/mockups/butterfly-nails.webp";
import RoboticDrumsMockup from "../assets/mockups/robotic-drums.webp";

export const clients = [
  {
    type: "Freelance Project",
    title: "Butterfly Nails",
    techs: [
      "Next.js",
      "TailwindCSS",
      "Drizzle",
      "PostgreSQL",
      "Framer Motion",
      "TypeScript",
    ],
    description:
      "Landing page for a boutique nail salon, featuring an integrated online booking system.",
    deploy: "#",
    repo: "#",
    image: ButterflyNailsMockup,
  },
  {
    type: "Freelance Project",
    title: "Robotic Drums",
    techs: ["Astro", "TailwindCSS", "Framer Motion", "TypeScript"],
    description:
      "Landing page for Robotic Drums, an educational music & robotics project. Designed to improve clarity, visual appeal, and user experience.",
    deploy: "#",
    repo: "#",
    image: RoboticDrumsMockup,
  },
];
