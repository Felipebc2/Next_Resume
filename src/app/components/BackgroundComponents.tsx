'use client';

import dynamic from 'next/dynamic';

const GradientBG = dynamic(() => import("../components/gradientBG"), {
  ssr: false,
  loading: () => <div style={{ background: "#000" }} />
});

const DarkVeil = dynamic(() => import("@/blocks/Backgrounds/DarkVeil/DarkVeil"), {
  ssr: false
});

export default function BackgroundComponents() {
  return (
    <>
      <GradientBG />
      <DarkVeil />
    </>
  );
}
