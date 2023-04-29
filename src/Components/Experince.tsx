import { MeshProps, ThreeElements, useFrame } from "@react-three/fiber";
import React, { useRef } from "react";

const Experince = () => {
  const groupRef = useRef();
  const cubeRef = useRef(null);
  useFrame((state, delta) => {
    // console.log({ delta });
    groupRef.current.rotation.y += delta;
    // cubeRef.current.rotation.y += delta;
  });
  return (
    <>
      {/* <mesh>
        <torusKnotGeometry />
        <meshNormalMaterial />
      </mesh> */}
      <group ref={groupRef}>
        <mesh position={[2.5, 0, 0]} scale={1.5} ref={cubeRef}>
          <boxGeometry scale={1.5} />

          <meshBasicMaterial color="mediumpurple" wireframe={false} />
        </mesh>
        <mesh position={[-2.5, 0, 0]} scale={1.5}>
          <sphereGeometry args={[0.7, 32, 32]} />
          <meshBasicMaterial color="orange" wireframe />
        </mesh>
      </group>
      <mesh position-y={-1} rotation-x={-Math.PI * 0.5} scale={10}>
        <planeGeometry />
        <meshBasicMaterial color="greenYellow" />
      </mesh>
    </>
  );
};

export default Experince;
