"use client";

import { useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { PerspectiveCamera, Stars, Sparkles } from "@react-three/drei";
import * as THREE from "three";

export default function Scene() {
  const starsRef1 = useRef<THREE.Group>(null);
  const starsRef2 = useRef<THREE.Group>(null);
  const starsRef3 = useRef<THREE.Group>(null);
  const starsRef4 = useRef<THREE.Group>(null);
  const { mouse } = useThree();

  useFrame((state, delta) => {
    // 複数のStarsグループをそれぞれ異なる速度で回転
    if (starsRef1.current) {
      starsRef1.current.rotation.x += delta * 0.01;
      starsRef1.current.rotation.y += delta * 0.02;
      starsRef1.current.rotation.x += mouse.y * delta * 0.1;
      starsRef1.current.rotation.y += mouse.x * delta * 0.1;
    }

    if (starsRef2.current) {
      starsRef2.current.rotation.x += delta * 0.005;
      starsRef2.current.rotation.y += delta * 0.01;
      starsRef2.current.rotation.x += mouse.y * delta * 0.05;
      starsRef2.current.rotation.y += mouse.x * delta * 0.05;
    }

    if (starsRef3.current) {
      starsRef3.current.rotation.x += delta * 0.002;
      starsRef3.current.rotation.y += delta * 0.003;
      starsRef3.current.rotation.x += mouse.y * delta * 0.02;
      starsRef3.current.rotation.y += mouse.x * delta * 0.02;
    }

    if (starsRef4.current) {
      starsRef4.current.rotation.x += delta * 0.001;
      starsRef4.current.rotation.y += delta * 0.002;
      starsRef4.current.rotation.x += mouse.y * delta * 0.01;
      starsRef4.current.rotation.y += mouse.x * delta * 0.01;
    }
  });

  return (
    <>
      <color attach="background" args={["#000"]} />
      <fog attach="fog" args={["#000", 5, 40]} />

      <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={75} />

      {/* 星空 - 複数のサイズの星 */}
      {/* 小さめの星 */}
      <group ref={starsRef1}>
        <Stars
          radius={225}
          depth={75}
          count={3000}
          factor={9}
          saturation={0.5}
          fade
          speed={1}
        />
      </group>

      {/* 中くらいの星 */}
      <group ref={starsRef2}>
        <Stars
          radius={375}
          depth={120}
          count={2000}
          factor={13.5}
          saturation={0.6}
          fade
          speed={0.5}
        />
      </group>

      {/* 大きな星 */}
      <group ref={starsRef3}>
        <Stars
          radius={525}
          depth={150}
          count={1000}
          factor={18}
          saturation={0.7}
          fade
          speed={0.3}
        />
      </group>

      {/* 超大きな星 */}
      <group ref={starsRef4}>
        <Stars
          radius={750}
          depth={225}
          count={500}
          factor={22.5}
          saturation={0.8}
          fade
          speed={0.2}
        />
      </group>

      {/* Cursorのようなレインボーグラデーションの星 - 画面内に入るように調整 */}

      {/* 青/スカイブルー系 */}
      <Sparkles
        count={600}
        scale={30}
        size={3}
        speed={0.3}
        color="#00BFFF" // ディープスカイブルー
        position={[0, 0, 0]}
      />

      <Sparkles
        count={500}
        scale={25}
        size={2.7}
        speed={0.4}
        color="#1E90FF" // ドジャーブルー
        position={[0, 0, 1]}
      />

      <Sparkles
        count={400}
        scale={20}
        size={2.25}
        speed={0.5}
        color="#4169E1" // ロイヤルブルー
        position={[0, 0, 2]}
      />

      {/* 紫/ピンク系 */}
      <Sparkles
        count={500}
        scale={28}
        size={2.7}
        speed={0.4}
        color="#9370DB" // ミディアムパープル
        position={[0, 0, 0]}
      />

      <Sparkles
        count={400}
        scale={23}
        size={2.25}
        speed={0.5}
        color="#BA55D3" // ミディアムオーキッド
        position={[0, 0, 1]}
      />

      <Sparkles
        count={300}
        scale={18}
        size={1.8}
        speed={0.6}
        color="#DA70D6" // オーキッド
        position={[0, 0, 2]}
      />

      {/* 赤/オレンジ系 */}
      <Sparkles
        count={500}
        scale={26}
        size={2.55}
        speed={0.5}
        color="#FF4500" // オレンジレッド
        position={[0, 0, 0]}
      />

      <Sparkles
        count={400}
        scale={21}
        size={2.1}
        speed={0.6}
        color="#FF7F50" // コーラル
        position={[0, 0, 1]}
      />

      <Sparkles
        count={300}
        scale={16}
        size={1.65}
        speed={0.7}
        color="#FFA500" // オレンジ
        position={[0, 0, 2]}
      />

      {/* 緑系 */}
      <Sparkles
        count={400}
        scale={24}
        size={2.4}
        speed={0.4}
        color="#00FA9A" // ミディアムスプリンググリーン
        position={[0, 0, 0]}
      />

      <Sparkles
        count={300}
        scale={19}
        size={1.95}
        speed={0.5}
        color="#3CB371" // ミディアムシーグリーン
        position={[0, 0, 1]}
      />

      {/* 黄色系 */}
      <Sparkles
        count={400}
        scale={22}
        size={2.25}
        speed={0.6}
        color="#FFD700" // ゴールド
        position={[0, 0, 0]}
      />

      <Sparkles
        count={300}
        scale={17}
        size={1.8}
        speed={0.7}
        color="#FFFF00" // 黄色
        position={[0, 0, 1]}
      />

      <ambientLight intensity={0.2} />
    </>
  );
}
