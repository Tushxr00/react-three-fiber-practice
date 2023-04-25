import { Canvas } from "@react-three/fiber";

export default function Home() {
  return (
    <div className="w-screen h-screen ">
      <Canvas>
        {/* <group>
        <mesh>
          <boxGeometry attach={"geometry"} />
          <meshBasicMaterial color="blue" />
        </mesh>
        <mesh>
          <boxGeometry attach={"geometry"} />
          <meshBasicMaterial color="blue" />
        </mesh>
      </group> */}
        <mesh>
          <torusKnotGeometry />
          <meshNormalMaterial />
        </mesh>
      </Canvas>
    </div>
  );
}
