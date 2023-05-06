import {
  Html,
  OrbitControls,
  PivotControls,
  TransformControls,
} from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { useRef } from "react";

const Experince = () => {
  const groupRef = useRef();
  const cubeRef = useRef(null);
  useFrame((state, delta) => {
    // console.log(state.camera);
    // console.log(state.clock.elapsedTime);
    // const angel = state.clock.elapsedTime;
    // state.camera.position.x = Math.sin(angel) * 8;
    // state.camera.position.z = Math.cos(angel) * 8;
    // state.camera.lookAt(0, 0, 0);
    // console.log({ delta });
    // groupRef.current.rotation.y += delta;
    // cubeRef.current.rotation.y += delta;
  });

  return (
    <>
      <directionalLight position={[1, 2, 3]} intensity={1.5} />
      <ambientLight intensity={0.5} />
      {/* <mesh>
        <torusKnotGeometry />
        <meshNormalMaterial />
      </mesh> */}
      <OrbitControls makeDefault />
      {/* <group ref={groupRef}> */}
      {/*  */}

      <mesh
        // position={[2.5, 0, 0]}
        scale={1.5}
        position-x={2}
        ref={cubeRef}
      >
        <boxGeometry scale={1.5} />

        <meshStandardMaterial color="mediumpurple" wireframe={false} />
      </mesh>
      <TransformControls object={cubeRef} mode="translate" />
      {/*  */}

      {/*  */}
      <PivotControls
        anchor={[0, 0, 0]}
        depthTest={false}
        lineWidth={4}
        axisColors={["#9381ff", "#ff4d6d", "#7ae582"]}
        scale={100}
        fixed={true}
      >
        <mesh position={[-2.5, 0, 0]} scale={1.5}>
          <sphereGeometry args={[0.7, 32, 32]} />
          <meshStandardMaterial color="orange" wireframe={false} />
          <Html
            position={[1, 1, 0]}
            wrapperClass="label"
            center
            distanceFactor={6}
          >
            {`That's a sphere`}
          </Html>
        </mesh>
      </PivotControls>
      {/*  */}
      {/* </group> */}
      <mesh position-y={-1} rotation-x={-Math.PI * 0.5} scale={10}>
        <planeGeometry />
        <meshStandardMaterial color="greenYellow" />
      </mesh>
    </>
  );
};

export default Experince;
