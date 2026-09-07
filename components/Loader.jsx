"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function Loader() {
  const [loading, setLoading] = useState(true);
  const [fading, setFading] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setLoading(true);
    setFading(false);

    const fadeTimer = setTimeout(() => {
      setFading(true);
    }, 600);

    const removeTimer = setTimeout(() => {
      setLoading(false);
    }, 1100);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, [pathname]);

  if (!loading) return null;

  return (
    <div className={`evx-loader ${fading ? "loaded" : ""}`} style={{ zIndex: 99999 }}>
      <div className="evx-loader-text">EVX</div>
      <div className="evx-loader-bar"></div>
    </div>
  );
}