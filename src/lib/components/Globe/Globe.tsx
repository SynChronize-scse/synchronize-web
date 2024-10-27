import { HTMLAttributes, useEffect, useRef, useState } from "react";
import { World } from "./GlobePrimitive";
import { cn, isMobileDevice } from "$lib/utils";

interface GlobeProps {
  className?: HTMLAttributes<HTMLDivElement>["className"];
}

export function Globe({ className }: GlobeProps) {
  const globeConfig = {
    pointSize: 4,
    globeColor: "#000",
    showAtmosphere: true,
    atmosphereColor: "#FFFFFF",
    atmosphereAltitude: 0.1,
    emissive: "#062056",
    emissiveIntensity: 0.1,
    shininess: 0.9,
    polygonColor: "rgba(255,255,255,1)",
    ambientLight: "#38bdf8",
    directionalLeftLight: "#ffffff",
    directionalTopLight: "#ffffff",
    pointLight: "#ffffff",
    arcTime: 1000,
    arcLength: 0.9,
    rings: 1,
    maxRings: 3,
    initialPosition: { lat: 22.3193, lng: 114.1694 }, // TODO: Change to INDIA
    autoRotate: true,
    autoRotateSpeed: 0.5,
  };

  const container = useRef<HTMLDivElement>(null);

  const [renderControls, setRenderControls] = useState<boolean>(false);

  useEffect(() => {
    let observer: IntersectionObserver;
    if (isMobileDevice()) {
      observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setRenderControls(() => true);
          } else {
            setRenderControls(() => false);
          }
        });
      });

      if (container.current) {
        observer.observe(container.current);
      }
    } else {
      setRenderControls(() => true);
    }

    return () => {
      observer?.disconnect();
    };
  }, []);

  return (
    <div ref={container} className={cn("relative overflow-hidden", className)}>
      {renderControls && <World data={[]} globeConfig={globeConfig} />}
    </div>
  );
}

export default Globe;
