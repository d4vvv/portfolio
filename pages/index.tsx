import Head from "next/head";
import { Inter } from "next/font/google";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Canvas className="h-96">
          <OrbitControls />
          <mesh rotation={[90, 0, 20]}>
            <boxBufferGeometry attach="geometry" args={[3, 3, 3]} />
            <meshLambertMaterial attach="material" color="pink" />
          </mesh>
          <ambientLight intensity={0.4} />
          <directionalLight position={[-2, 5, 2]} intensity={1} />
        </Canvas>
      </main>
    </>
  );
}
