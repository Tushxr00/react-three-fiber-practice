import React from "react";

const Experince = () => {
  return (
    <>
      {/* <mesh>
        <torusKnotGeometry />
        <meshNormalMaterial />
      </mesh> */}
      <mesh position={[2.5, 0, 0]} scale={1.5}>
        <boxGeometry scale={1.5} />

        <meshBasicMaterial color="mediumpurple" wireframe={false} />
      </mesh>
      <mesh position={[-2.5, 0, 0]} scale={1.5}>
        <sphereGeometry args={[0.7, 32, 32]} />
        <meshBasicMaterial color="orange" wireframe />
      </mesh>
      <mesh position-y={-1} rotation-x={-Math.PI * 0.5} scale={10}>
        <planeGeometry />
        <meshBasicMaterial color="greenYellow" />
      </mesh>
    </>
  );
};

export default Experince;
