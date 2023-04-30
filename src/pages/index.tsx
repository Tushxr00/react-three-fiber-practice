import Experince from "@/Components/Experince";
import { Canvas } from "@react-three/fiber";

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
      <Canvas camera={cameraSettings}>
        <Experince />
      </Canvas>
    </div>
  );
}
