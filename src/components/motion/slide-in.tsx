import {
  domAnimation,
  LazyMotion,
  useReducedMotion,
  type AnimationControls,
  type TargetAndTransition,
  type Transition,
  type VariantLabels,
} from "motion/react";
import * as m from "motion/react-m";
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
  const reducedMotion = useReducedMotion();

  return reducedMotion ? (
    <div>{children}</div>
  ) : (
    <LazyMotion features={domAnimation}>
      <m.div
        initial={initial}
        animate={animate}
        transition={transition}
        whileInView={whileInView}
        viewport={viewport}
      >
        {children}
      </m.div>
    </LazyMotion>
  );
}
