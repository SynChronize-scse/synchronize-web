import { HTMLAttributes } from "react";
import { World } from "./GlobePrimitive";
import { cn } from "$lib/utils";

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

  return (
    <div className={cn("relative overflow-hidden", className)}>
      <World data={[]} globeConfig={globeConfig} />
    </div>
  );
}

export default Globe;
