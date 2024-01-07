import { Canvas } from "@react-three/fiber";
import { Experience } from "./Experience";
import "../index.css";

function Loading() {
  return (
    <>
      <Canvas
        className="canvas"
        shadows
        camera={{ position: [0, -10, 0], fov: 70 }}
      >
           <color
        attach="background"
        args={['#272a39']}
      />
        <Experience />
      </Canvas>
      <div className="text">
            <span> .</span>
            <span>.</span>
            <span>.</span>
      </div>
    </>
  );
}

export default Loading;
