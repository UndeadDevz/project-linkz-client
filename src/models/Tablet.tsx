import React from "react";
import { Html, useGLTF, Text } from "@react-three/drei";
// @ts-ignore
import tablet from "../assets/tablet.glb";
import { HeaderImage } from "@/components/preview/HeaderImage";
import { TitlePreview } from "@/components/preview/TitlePreview";
import { LinkPreview } from "@/components/preview/linkPreview/LinkPreview";
import { HeaderPreview } from "@/components/preview/HeaderPreview";
import { useEditorContext } from "@/hooks/useEditorContext";
import { useStyleContext } from "@/context/StyleContext";
// @ts-ignore

const Tablet = (props) => {
  const { nodes, materials } = useGLTF(tablet);

  const componentMap = {
    link: LinkPreview,
    header: HeaderPreview,
  };

  const { items, title, photo } = useEditorContext();
  const { appearance } = useStyleContext();

  return (
    <group {...props}>
      <group
        rotation={[-Math.PI / 100, 0, 1.575]}
        position-y={0.1}
        scale={[1.98, 2.3, 1.98]}
      >
        {" "}
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_2.geometry}
          material={materials.bigbutton}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_3.geometry}
          material={materials.bottom}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_4.geometry}
          material={materials.screen}
        >
          <Html
            transform
            rotation={[0, 0, -1.575]}
            scale={0.15}
            occlude
            style={{ opacity: 1 }}
          >
            <div className="overflow-auto scrollbar-none">
              <HeaderImage photoprop={photo} />
              <TitlePreview title={title} appearanceProp={appearance} />
              {items
                .filter((el) => el.enabled)
                .map((item) => {
                  // @ts-ignore
                  const PreviewComponent = componentMap[item.type];

                  if (!PreviewComponent) {
                    return null; // Maneja un caso por defecto si es necesario
                  }
                  return (
                    <PreviewComponent
                      item={item}
                      key={item.id}
                      style={appearance}
                    />
                  );
                })}
            </div>
          </Html>
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_5.geometry}
          material={materials.screws}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_6.geometry}
          material={materials.smallbuttons}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_7.geometry}
          material={materials.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_8.geometry}
          material={materials.top2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_9.geometry}
          material={materials.top3}
        />
      </group>
    </group>
  );
};

export default Tablet;
