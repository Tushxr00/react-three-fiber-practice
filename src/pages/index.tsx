import Experince from "@/Components/Experince";
import { Canvas } from "@react-three/fiber";
import * as THREE from "three";

export default function Home() {
  const cameraSettings: any = {
    fov: 45,
    // zoom: 30,
    near: 0.1,
    far: 200,
    position: [3, 2, 6],
  };
  return (
    <div className="w-screen h-screen bg-blue-300">
      <Canvas
        dpr={[1, 2]}
        gl={{
          antialias: true,
          toneMapping: THREE.ACESFilmicToneMapping,
          outputEncoding: THREE.sRGBEncoding,
        }}
        camera={cameraSettings}
      >
        <Experince />
      </Canvas>
    </div>
  );
}
