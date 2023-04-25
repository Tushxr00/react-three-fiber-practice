import Experince from "@/Components/Experince";
import { Canvas } from "@react-three/fiber";

export default function Home() {
  return (
    <div className="w-screen h-screen ">
      <Canvas>
        <Experince />
      </Canvas>
    </div>
  );
}
