import { useEffect, useRef, useState } from "react";
import RINGS from "vanta/dist/vanta.rings.min.js";
import * as THREE from "three";

const VantaNetBackground = () => {
  const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        RINGS({
          el: vantaRef.current,
          THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          scale: 1.00,
          scaleMobile: 1.00,
          color: 0x88ff00,
          backgroundColor: 0x202428,
          backgroundAlpha: 1
        })
      );
    }

    return () => {
    if (vantaEffect) vantaEffect.destroy();
    };
   }, [vantaEffect]);

    return (
  <div ref={vantaRef} className="flex blur-[px] fixed w-full h-screen absolute top-0 left-0 -z-10" />
);
};

export default VantaNetBackground;