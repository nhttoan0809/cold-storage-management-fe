/*
  Auto-generated by Spline
*/

import useSpline from "@splinetool/r3f-spline";
import { OrthographicCamera } from "@react-three/drei";
import { PALLETURL } from "../../constant/pallet";
import convertToWarehouseSize from "../../utilityFunc/convertToWarehouseSize";
import defaultPositionPallet from "../../utilityFunc/defaultPositionPallet";
import convertPosToReaclPos from "../../utilityFunc/convertPosToReaclPos";

export default function Pallet601524Scene({
  warehouseSize,
  useCamera,
  positionPallet,
}) {
  const { nodes, materials } = useSpline(PALLETURL);
  const size = convertToWarehouseSize(warehouseSize);
  const defPos = defaultPositionPallet(Object.values(size), [60, 15, 34]);
  const position = convertPosToReaclPos(positionPallet);
  return (
    <>
      {nodes && materials && (
        <group
          name="Pallet_60-15-34"
          position={[
            defPos[0] + position[0],
            defPos[1] + position[2],
            defPos[2] + position[1],
          ]}
        >
          <group name="GroupX2" position={[0, 1, 0]}>
            <mesh
              name="CubeX_1-12"
              geometry={nodes["CubeX_1-12"].geometry}
              material={materials["CubeX_1-12 Material"]}
              castShadow
              receiveShadow
              position={[0, 16.5, -7]}
            />
            <mesh
              name="CubeX_1-22"
              geometry={nodes["CubeX_1-22"].geometry}
              material={materials["CubeX_1-22 Material"]}
              castShadow
              receiveShadow
              position={[0, -5.7, -7]}
            />
            <mesh
              name="CubeX_1-32"
              geometry={nodes["CubeX_1-32"].geometry}
              material={materials["CubeX_1-32 Material"]}
              castShadow
              receiveShadow
              position={[0, 5.6, -7]}
            />
            <mesh
              name="CubeX_1-41"
              geometry={nodes["CubeX_1-41"].geometry}
              material={materials["CubeX_1-41 Material"]}
              castShadow
              receiveShadow
              position={[0, -16.5, -7]}
            />
            <mesh
              name="CubeX_2-12"
              geometry={nodes["CubeX_2-12"].geometry}
              material={materials["CubeX_2-12 Material"]}
              castShadow
              receiveShadow
              position={[0, 16.5, 0]}
            />
            <mesh
              name="CubeX_2-22"
              geometry={nodes["CubeX_2-22"].geometry}
              material={materials["CubeX_2-22 Material"]}
              castShadow
              receiveShadow
              position={[0, -5.7, 0]}
            />
            <mesh
              name="CubeX_2-32"
              geometry={nodes["CubeX_2-32"].geometry}
              material={materials["CubeX_2-32 Material"]}
              castShadow
              receiveShadow
              position={[0, 5.6, 0]}
            />
            <mesh
              name="CubeX_2-41"
              geometry={nodes["CubeX_2-41"].geometry}
              material={materials["CubeX_2-41 Material"]}
              castShadow
              receiveShadow
              position={[0, -16.5, 0]}
            />
            <mesh
              name="CubeX_3-12"
              geometry={nodes["CubeX_3-12"].geometry}
              material={materials["CubeX_3-12 Material"]}
              castShadow
              receiveShadow
              position={[0, 16.5, 7]}
            />
            <mesh
              name="CubeX_3-22"
              geometry={nodes["CubeX_3-22"].geometry}
              material={materials["CubeX_3-22 Material"]}
              castShadow
              receiveShadow
              position={[0, -5.7, 7]}
            />
            <mesh
              name="CubeX_3-32"
              geometry={nodes["CubeX_3-32"].geometry}
              material={materials["CubeX_3-32 Material"]}
              castShadow
              receiveShadow
              position={[0, 5.6, 7]}
            />
            <mesh
              name="CubeX_3-41"
              geometry={nodes["CubeX_3-41"].geometry}
              material={materials["CubeX_3-41 Material"]}
              castShadow
              receiveShadow
              position={[0, -16.5, 7]}
            />
          </group>
          <group name="GroupY2">
            <mesh
              name="CubeY_1-12"
              geometry={nodes["CubeY_1-12"].geometry}
              material={materials["CubeY_1-12 Material"]}
              castShadow
              receiveShadow
              position={[-29.5, 0, -7]}
            />
            <mesh
              name="CubeY_1-22"
              geometry={nodes["CubeY_1-22"].geometry}
              material={materials["CubeY_1-22 Material"]}
              castShadow
              receiveShadow
              position={[-10, 0, -7]}
            />
            <mesh
              name="CubeY_1-32"
              geometry={nodes["CubeY_1-32"].geometry}
              material={materials["CubeY_1-32 Material"]}
              castShadow
              receiveShadow
              position={[10, 0, -7]}
            />
            <mesh
              name="CubeY_1-41"
              geometry={nodes["CubeY_1-41"].geometry}
              material={materials["CubeY_1-41 Material"]}
              castShadow
              receiveShadow
              position={[29.5, 0, -7]}
            />
            <mesh
              name="CubeY_2-1 1"
              geometry={nodes["CubeY_2-1 1"].geometry}
              material={materials["CubeY_2-1 1 Material"]}
              castShadow
              receiveShadow
              position={[-29.5, 0, 7]}
            />
            <mesh
              name="CubeY_2-22"
              geometry={nodes["CubeY_2-22"].geometry}
              material={materials["CubeY_2-22 Material"]}
              castShadow
              receiveShadow
              position={[-10, 0, 7]}
            />
            <mesh
              name="CubeY_2-32"
              geometry={nodes["CubeY_2-32"].geometry}
              material={materials["CubeY_2-32 Material"]}
              castShadow
              receiveShadow
              position={[10, 0, 7]}
            />
            <mesh
              name="CubeY_2-41"
              geometry={nodes["CubeY_2-41"].geometry}
              material={materials["CubeY_2-41 Material"]}
              castShadow
              receiveShadow
              position={[29.5, 0, 7]}
            />
          </group>
          <group name="GroupZ2" position={[0, 1, 0]}>
            <mesh
              name="CubeZ_1-12"
              geometry={nodes["CubeZ_1-12"].geometry}
              material={materials["CubeZ_1-12 Material"]}
              castShadow
              receiveShadow
              position={[-29.5, 16.5, 0]}
            />
            <mesh
              name="CubeZ_1-22"
              geometry={nodes["CubeZ_1-22"].geometry}
              material={materials["CubeZ_1-22 Material"]}
              castShadow
              receiveShadow
              position={[-10, 16.5, 0]}
            />
            <mesh
              name="CubeZ_1-32"
              geometry={nodes["CubeZ_1-32"].geometry}
              material={materials["CubeZ_1-32 Material"]}
              castShadow
              receiveShadow
              position={[10, 16.5, 0]}
            />
            <mesh
              name="CubeZ_1-41"
              geometry={nodes["CubeZ_1-41"].geometry}
              material={materials["CubeZ_1-41 Material"]}
              castShadow
              receiveShadow
              position={[29.5, 16.5, 0]}
            />
            <mesh
              name="CubeZ_2-12"
              geometry={nodes["CubeZ_2-12"].geometry}
              material={materials["CubeZ_2-12 Material"]}
              castShadow
              receiveShadow
              position={[-29.5, 5.6, 0]}
            />
            <mesh
              name="CubeZ_2-22"
              geometry={nodes["CubeZ_2-22"].geometry}
              material={materials["CubeZ_2-22 Material"]}
              castShadow
              receiveShadow
              position={[-10, 5.6, 0]}
            />
            <mesh
              name="CubeZ_2-32"
              geometry={nodes["CubeZ_2-32"].geometry}
              material={materials["CubeZ_2-32 Material"]}
              castShadow
              receiveShadow
              position={[10, 5.6, 0]}
            />
            <mesh
              name="CubeZ_2-41"
              geometry={nodes["CubeZ_2-41"].geometry}
              material={materials["CubeZ_2-41 Material"]}
              castShadow
              receiveShadow
              position={[29.5, 5.6, 0]}
            />
            <mesh
              name="CubeZ_3-12"
              geometry={nodes["CubeZ_3-12"].geometry}
              material={materials["CubeZ_3-12 Material"]}
              castShadow
              receiveShadow
              position={[-29.5, -5.7, 0]}
            />
            <mesh
              name="CubeZ_3-22"
              geometry={nodes["CubeZ_3-22"].geometry}
              material={materials["CubeZ_3-22 Material"]}
              castShadow
              receiveShadow
              position={[-10, -5.7, 0]}
            />
            <mesh
              name="CubeZ_3-32"
              geometry={nodes["CubeZ_3-32"].geometry}
              material={materials["CubeZ_3-32 Material"]}
              castShadow
              receiveShadow
              position={[10, -5.7, 0]}
            />
            <mesh
              name="CubeZ_3-41"
              geometry={nodes["CubeZ_3-41"].geometry}
              material={materials["CubeZ_3-41 Material"]}
              castShadow
              receiveShadow
              position={[29.5, -5.7, 0]}
            />
            <mesh
              name="CubeZ_4-11"
              geometry={nodes["CubeZ_4-11"].geometry}
              material={materials["CubeZ_4-11 Material"]}
              castShadow
              receiveShadow
              position={[-29.5, -16.5, 0]}
            />
            <mesh
              name="CubeZ_4-21"
              geometry={nodes["CubeZ_4-21"].geometry}
              material={materials["CubeZ_4-21 Material"]}
              castShadow
              receiveShadow
              position={[-10, -16.5, 0]}
            />
            <mesh
              name="CubeZ_4-31"
              geometry={nodes["CubeZ_4-31"].geometry}
              material={materials["CubeZ_4-31 Material"]}
              castShadow
              receiveShadow
              position={[10, -16.5, 0]}
            />
            <mesh
              name="CubeZ_4-4"
              geometry={nodes["CubeZ_4-4"].geometry}
              material={materials["CubeZ_4-4 Material"]}
              castShadow
              receiveShadow
              position={[29.5, -16.5, 0]}
            />
          </group>
        </group>
      )}
      {useCamera && (
        <OrthographicCamera
          name="1"
          makeDefault={true}
          zoom={11.73}
          far={100000}
          near={-100000}
          position={[577.35, 577.35, 577.35]}
          rotation={[-Math.PI / 4, 0.62, Math.PI / 6]}
          scale={1}
        />
      )}
    </>
  );
}