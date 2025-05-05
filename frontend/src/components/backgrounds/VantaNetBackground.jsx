import { useEffect, useRef, useState } from "react";
import NET from "vanta/dist/vanta.net.min";
import * as THREE from "three";

const VantaNetBackground = () => {
  const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        NET({
          el: vantaRef.current,
          THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0x36c336,
          lineColor: 0xff3f81,  
          backgroundColor: 0x95c595,

          points: 10.0,        // reduce el número de puntos => menos actividad
          maxDistance: 20.0,   // distancia máxima entre líneas (menor = más suaves)
          spacing: 15.0, 
          showDots: true     // muestra los puntos
        })
      );
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div ref={vantaRef} className="w-full h-screen absolute top-0 left-0 -z-10" />
  );
};

export default VantaNetBackground;
