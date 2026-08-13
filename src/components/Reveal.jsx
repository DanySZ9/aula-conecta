import { useEffect, useRef, useState } from "react";

/**
 * Wraps content and animates it into view (fade + rise) the first time it
 * enters the viewport. Respects prefers-reduced-motion via the global CSS
 * rule that collapses all transition/animation durations.
 */
export default function Reveal({
  children,
  className = "",
  as: Tag = "div",
  delay = 0,
  y = 24,
  ...rest
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`transition-all duration-700 ease-out will-change-transform ${
        visible ? "opacity-100 translate-y-0" : "opacity-0"
      } ${className}`}
      style={{
        transitionDelay: visible && delay ? `${delay}ms` : undefined,
        transform: visible ? undefined : `translateY(${y}px)`,
      }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
