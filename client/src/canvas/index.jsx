import { Canvas } from "@react-three/fiber";
import { Environment, Center } from "@react-three/drei";

import Backdrop from "./Backdrop";
import CameraRig from "./CameraRig";
import Shirt from "./Shirt";

const CanvasMode = () => {
  return (
    <Canvas
      shadows
      camera={{ position: [0, 0, 0], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
      className="w-full max-w-full h-full transition-all ease-in"
    >
      <Environment preset="city" />

      <CameraRig>
        <Center>
          <Shirt />
        </Center>
      </CameraRig>
    </Canvas>
  );
};

export default CanvasMode;
