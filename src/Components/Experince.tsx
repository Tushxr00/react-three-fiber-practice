import {
  AccumulativeShadows,
  BakeShadows,
  ContactShadows,
  Float,
  Html,
  MeshReflectorMaterial,
  OrbitControls,
  PivotControls,
  RandomizedLight,
  SoftShadows,
  Text,
  TransformControls,
  useHelper,
} from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { useRef } from "react";
import * as THREE from "three";
import { useControls } from "leva";
import { Perf } from "r3f-perf";

const Experince = () => {
  const cubeRef = useRef(null);
  const directLightRef = useRef(null);
  useFrame((state, delta) => {
    // const time = state.clock.elapsedTime;
    // cubeRef.current.position.x = 2 + Math.sin(time);
    cubeRef.current.rotation.y += delta * 0.5;
  });
  useHelper(directLightRef, THREE.DirectionalLightHelper, 0.5, "red");

  return (
    <>
      <Perf position="top-left" />
      {/* <BakeShadows /> */}
      <SoftShadows />
      {/* <AccumulativeShadows
        position={[0, -0.99, 0]}
        scale={10}
        // color="316d39"
        opacity={0.8}
        frames={Infinity}
        temporal
        blend={50}
      > */}
      {/* <directionalLight position={[1, 2, 3]} castShadow /> */}
      {/* <RandomizedLight
          position={[1, 2, 3]}
          amount={8}
          radius={1}
          ambient={0.5}
          intensity={1}
          bias={0.001}
        />
      </AccumulativeShadows> */}
      <ContactShadows position={[0, -0.99, 0]} scale={10} />
      <directionalLight
        ref={directLightRef}
        position={[1, 2, 3]}
        intensity={1}
        castShadow
        shadow-mapSize={[1024, 1024]}
        shadow-camera-near={1}
        shadow-camera-far={10}
        shadow-camera-top={5}
        shadow-camera-right={5}
        shadow-camera-bottom={-5}
        shadow-camera-left={-5}
      />
      <ambientLight intensity={0.5} />
      <OrbitControls makeDefault />

      <mesh scale={1} position-x={2} castShadow ref={cubeRef}>
        <boxGeometry scale={1.5} />

        <meshStandardMaterial color="mediumpurple" wireframe={false} />
      </mesh>
      <mesh position={[-2, 0, 0]} scale={1} castShadow>
        <sphereGeometry args={[0.7, 32, 32]} />
        <meshStandardMaterial color={"orange"} wireframe={false} />
      </mesh>

      <mesh
        // receiveShadow
        position-y={-1}
        rotation-x={-Math.PI * 0.5}
        scale={10}
      >
        <planeGeometry />
        <meshStandardMaterial color="greenYellow" />
      </mesh>
    </>
  );
};

export default Experince;
