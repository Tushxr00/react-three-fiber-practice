import { Canvas, RootState } from "@react-three/fiber";
import { Leva } from "leva";
import * as THREE from "three";

import Experince from "@/Components/Experince";

export default function Home() {
  const cameraSettings: any = {
    fov: 45,
    // zoom: 30,
    near: 0.1,
    far: 200,
    position: [3, 2, 6],
  };

  // const created = ({ scene }: RootState) => {
  //   // console.log("created", gl);
  //   // gl.setClearColor("#ff0000");
  //   scene.background = new THREE.Color("purple");
  // };

  return (
    <div className="w-screen h-screen ">
      {/* <Leva /> */}
      <Canvas
        dpr={[1, 2]}
        gl={{
          antialias: true,
          toneMapping: THREE.ACESFilmicToneMapping,
          outputEncoding: THREE.sRGBEncoding,
        }}
        camera={cameraSettings}
        // onCreated={created}
      >
        <color args={["ivory"]} attach={"background"} />
        <Experince />
      </Canvas>
    </div>
  );
}
