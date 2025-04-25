import {
  motion,
  type AnimationControls,
  type TargetAndTransition,
  type Transition,
  type VariantLabels,
} from "motion/react";
import { type RefObject } from "react";

interface Props {
  initial?: boolean | TargetAndTransition | VariantLabels;
  animate?: boolean | TargetAndTransition | VariantLabels | AnimationControls;
  transition?: Transition;
  whileInView?: TargetAndTransition | VariantLabels;
  viewport?: {
    root?: RefObject<Element | null>;
    once?: boolean;
    margin?: string;
    amount?: "some" | "all" | number;
  };
  children: React.ReactNode;
}

export default function SlideIn({
  initial,
  animate,
  transition,
  whileInView,
  viewport,
  children,
}: Readonly<Props>) {
  return (
    <motion.div
      initial={initial}
      animate={animate}
      transition={transition}
      whileInView={whileInView}
      viewport={viewport}
    >
      {children}
    </motion.div>
  );
}
