import Experince from "@/Components/Experince";
import { Canvas } from "@react-three/fiber";

export default function Home() {
  return (
    <div className="w-screen h-screen ">
      <Canvas
        orthographic
        camera={{
          fov: 45,
          zoom: 30,
          near: 0.1,
          far: 200,
          position: [3, 2, 6],
        }}
      >
        <Experince />
      </Canvas>
    </div>
  );
}
