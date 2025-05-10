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

interface SlideInProps {
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

function SlideIn({
  initial,
  animate,
  transition,
  whileInView,
  viewport,
  children,
}: Readonly<SlideInProps>) {
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

interface SlideInFromDirectionProps {
  children: React.ReactNode;
}

export function SlideInFromRight({
  children,
}: Readonly<SlideInFromDirectionProps>) {
  return (
    <SlideIn
      initial={{ opacity: 0, translateX: "10rem" }}
      whileInView={{ opacity: 1, translateX: 0 }}
      viewport={{ once: true, amount: "some" }}
      transition={{ duration: 0.85, ease: "easeOut" }}
    >
      {children}
    </SlideIn>
  );
}

export function SlideInFromLeft({
  children,
}: Readonly<SlideInFromDirectionProps>) {
  return (
    <SlideIn
      initial={{ opacity: 0, translateX: "-10rem" }}
      whileInView={{ opacity: 1, translateX: 0 }}
      viewport={{ once: true, amount: "some" }}
      transition={{ duration: 0.85, ease: "easeOut" }}
    >
      {children}
    </SlideIn>
  );
}

export function SlideInFromTop({
  children,
}: Readonly<SlideInFromDirectionProps>) {
  return (
    <SlideIn
      initial={{ opacity: 0, translateY: "-10rem" }}
      whileInView={{ opacity: 1, translateY: 0 }}
      viewport={{ once: true, amount: "some" }}
      transition={{ duration: 0.85, ease: "easeOut" }}
    >
      {children}
    </SlideIn>
  );
}

export function SlideInFromBottom({
  children,
}: Readonly<SlideInFromDirectionProps>) {
  return (
    <SlideIn
      initial={{ opacity: 0, translateY: "10rem" }}
      whileInView={{ opacity: 1, translateY: 0 }}
      viewport={{ once: true, amount: "some" }}
      transition={{ duration: 0.85, ease: "easeOut" }}
    >
      {children}
    </SlideIn>
  );
}
