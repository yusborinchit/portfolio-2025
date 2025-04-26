import { motion, useMotionValue, useSpring } from "motion/react";
import { useEffect, useRef } from "react";

export default function Background() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 80, damping: 15 });
  const springY = useSpring(mouseY, { stiffness: 80, damping: 15 });

  const prev = useRef({ x: 0, y: 0 });

  const rotate = useMotionValue(0);
  const springRotate = useSpring(rotate, { stiffness: 80, damping: 20 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const deltaX = e.clientX - prev.current.x;
      const deltaY = e.clientY - prev.current.y;

      rotate.set((deltaX - deltaY) * 2);
      mouseX.set(e.clientX - 100);
      mouseY.set(e.clientY - 100);

      prev.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="hidden sm:inline relative w-full h-full overflow-hidden">
      <motion.div
        style={{
          x: springX,
          y: springY,
          rotate: springRotate,
        }}
        className="pointer-events-none fixed top-0 left-0 size-46 blur-3xl -z-10 bg-[radial-gradient(ellipse_at_center,_var(--color-accent-dark),_transparent)] opacity-30"
      ></motion.div>
    </div>
  );
}
