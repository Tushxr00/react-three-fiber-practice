import Experince from "@/Components/Experince";
import { Canvas } from "@react-three/fiber";
import * as THREE from "three";

export default function Home() {
  const cameraSettings = {
    fov: 45,
    // zoom: 30,
    near: 0.1,
    far: 200,
    position: [3, 2, 6],
  };
  return (
    <div className="w-screen h-screen ">
      <Canvas
        gl={{
          antialias: true,
          toneMapping: THREE.CineonToneMapping,
        }}
        camera={cameraSettings}
      >
        <Experince />
      </Canvas>
    </div>
  );
}
