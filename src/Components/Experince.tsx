import React from "react";

const Experince = () => {
  return (
    <>
      {/* <mesh>
        <torusKnotGeometry />
        <meshNormalMaterial />
      </mesh> */}
      <mesh
        // scale={[1, 1, 1]}\
        position={[2.5, 0, 0]}
        // rotation={[0, 3, 0]}
        scale={1.5}
      >
        <sphereGeometry args={[1.5, 32, 32]} />
        {/* <meshBasicMaterial args={[{ color: "red", wireframe: true }]} /> */}
        <meshBasicMaterial color="mediumpurple" wireframe={true} />
      </mesh>
    </>
  );
};

export default Experince;
