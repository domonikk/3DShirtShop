import React from "react";
import { easing } from "maath";
import { useSnapshot } from "valtio";
import { useFrame } from "@react-three/fiber";
import { Decal, useGLTF, useTexture } from "@react-three/drei";

import state from "../store";

const Shirt = () => {
  const snap = useSnapshot(state);
  const { nodes, materials } = useGLTF("/shirt_baked.glb");

  const logoTexture = useTexture(snap.logoDecal);
  const logoTexture2 = useTexture(snap.logoDecal2);
  const fullTexture = useTexture(snap.fullDecal);
  const fullTexture2 = useTexture(snap.fullDecal2);
  const fullTexture3 = useTexture(snap.fullDecal3);

  useFrame((state, delta) =>
    easing.dampC(materials.lambert1.color, snap.color, 0.25, delta)
  );

  const stateString = JSON.stringify(snap);

  return (
    <group key={stateString}>
      <mesh
        castShadow
        geometry={nodes.T_Shirt_male.geometry}
        material={materials.lambert1}
        material-roughness={1}
        dispose={null}
      >
        {snap.isFullTexture && (
          <Decal
            position={[0, 0, 0]}
            rotation={[0, 0, 0]}
            scale={0.7}
            map={fullTexture}
          />
        )}

        {snap.isFullTexture2 && (
          <Decal
            position={[0, 0, 0]}
            rotation={[0, 0, 0]}
            scale={0.7}
            map={fullTexture2}
          />
        )}

        {snap.isFullTexture3 && (
          <Decal
            position={[0, 0, 0]}
            rotation={[0, 0, 0]}
            scale={0.7}
            map={fullTexture3}
          />
        )}

        {snap.isLogoTexture && (
          <Decal
            position={[0, 0.04, 0.12]}
            rotation={[0, 0, 0]}
            scale={0.3}
            map={logoTexture}
            depthTest={false}
            depthWrite={true}
          />
        )}
        {snap.isLogoTexture2 && (
          <Decal
            position={[0, 0.04, 0.12]}
            rotation={[0, 0, 0]}
            scale={0.2}
            map={logoTexture2}
            depthTest={false}
            depthWrite={true}
          />
        )}
      </mesh>
    </group>
  );
};

export default Shirt;
