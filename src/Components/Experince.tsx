import { extend, useFrame, useThree } from "@react-three/fiber";
import React, { useRef } from "react";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import useCustomObject from "./CustomObject";
import CustomObject from "./CustomObject";

extend({ OrbitControls });

const Experince = () => {
  const groupRef = useRef();
  const cubeRef = useRef(null);
  const { camera, gl } = useThree();
  useFrame((state, delta) => {
    // console.log(state.camera);
    // console.log(state.clock.elapsedTime);
    // const angel = state.clock.elapsedTime;
    // state.camera.position.x = Math.sin(angel) * 8;
    // state.camera.position.z = Math.cos(angel) * 8;
    // state.camera.lookAt(0, 0, 0);
    // console.log({ delta });

    // groupRef.current.rotation.y += delta;
    cubeRef.current.rotation.y += delta;
  });

  return (
    <>
      <orbitControls args={[camera, gl.domElement]} />
      <directionalLight position={[1, 2, 3]} intensity={1.5} />
      <ambientLight intensity={0.5} />
      {/* <mesh>
        <torusKnotGeometry />
        <meshNormalMaterial />
      </mesh> */}
      <group ref={groupRef}>
        <mesh position={[2.5, 0, 0]} scale={1.5} ref={cubeRef}>
          <boxGeometry scale={1.5} />

          <meshStandardMaterial color="mediumpurple" wireframe={false} />
        </mesh>
        <mesh position={[-2.5, 0, 0]} scale={1.5}>
          <sphereGeometry args={[0.7, 32, 32]} />
          <meshStandardMaterial color="orange" wireframe={false} />
        </mesh>
      </group>
      <mesh position-y={-1} rotation-x={-Math.PI * 0.5} scale={10}>
        <planeGeometry />
        <meshStandardMaterial color="greenYellow" />
      </mesh>
      <CustomObject />
    </>
  );
};

export default Experince;
