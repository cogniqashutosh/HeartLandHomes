"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, animate } from "framer-motion";

export default function AnimatedStat({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [display, setDisplay] = useState("0");

  const numericMatch = value.match(/[\d,]+/);
  const target = numericMatch ? parseInt(numericMatch[0].replace(/,/g, ""), 10) : 0;
  const suffix = numericMatch ? value.slice(numericMatch.index! + numericMatch[0].length) : value;

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(0, target, {
      duration: 1.6,
      ease: "easeOut",
      onUpdate(v) {
        setDisplay(Math.round(v).toLocaleString());
      },
    });
    return () => controls.stop();
  }, [isInView, target]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}
