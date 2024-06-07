import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useRef, useState } from "react";
import Loader from "../Components/Loader";
import Island from "../models/island";
import Sky from "../models/Sky";
import Plane from "../models/Plane";
import Bird from "../models/Bird";
import HomeInfo from "../Components/HomeInfo";
import sakura from "../assets/sakura.mp3";
import { soundoff, soundon } from "../assets/icons";

const Home = () => {
  const audioRef = useRef(new Audio(sakura));
  audioRef.current.volume = 0.2;
  audioRef.current.loop = true;
  const [IsPlayingMusic, setIsPlayingMusic] = useState(true);

  useEffect(() => {
    if (IsPlayingMusic) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [IsPlayingMusic]);

  const [CurrentStage, setCurrentStage] = useState(1);

  // moving by drag nd drop feature
  const [IsRotating, setIsRotating] = useState();

  //   for island
  const adjustIslandForScreenSize = () => {
    let screenscale = null;
    let screenPosition = [0, -6.5, -43];
    let rotation = [0.1, 4.7, 0];

    if (window.innerWidth < 768) {
      screenscale = [0.9, 0.9, 0.9];
    } else {
      screenscale = [1, 1, 1];
    }
    return [screenscale, screenPosition, rotation];
  };
  const [screenscale, screenPosition, rotation] = adjustIslandForScreenSize();

  //   for plane
  const adjustPlaneForScreenSize = () => {
    let ScreenScale, ScreenPosition;
    if (window.innerWidth < 768) {
      ScreenScale = [1.5, 1.5, 1.5];
    } else {
      ScreenScale = [3, 3, 3];
      ScreenPosition = [0, -4, -4];
    }
    return [ScreenScale, ScreenPosition];
  };

  const [planeScale, planePosition] = adjustPlaneForScreenSize();
  return (
    <section className="w-full h-screen relative">
      <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
        {CurrentStage && <HomeInfo CurrentStage={CurrentStage} />}
      </div>
      <Canvas
        className={`w-full h-screen bg-transparent ${
          IsRotating ? "cursor-grabbing" : "cursor-grab"
        }`}
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
          {/* position [x ,y ,z] intensity is power of light */}
          {/* directional is sunlight */}
          <directionalLight position={[1, 1, 1]} intensity={2} />
          {/* throws light on all objects equally without casting shadows */}
          <ambientLight intensity={0.5} />
          {/* emits light to all directions from a single point */}
          {/* <pointLight /> */}
          {/* same as point light but it adds angle also */}
          {/* <spotLight /> */}
          {/* illuminates the scene with a gridient */}
          <hemisphereLight
            skyColor="#b1e1ff"
            groundColor="#000000"
            intensity={1}
          />
          <Bird />
          <Sky IsRotating={IsRotating} />
          <Island
            position={screenPosition}
            scale={screenscale}
            rotation={rotation}
            IsRotating={IsRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
          />
          <Plane
            IsRotating={IsRotating}
            scale={planeScale}
            position={planePosition}
            rotation={[0, 20, 0]}
          />
        </Suspense>
      </Canvas>
      <div className="absolute bottom-2 left-2">
        <img
          src={!IsPlayingMusic ? soundoff : soundon}
          alt="sound"
          className="h-10 w-10 cursor-pointer object-contain"
          onClick={() => {
            setIsPlayingMusic(!IsPlayingMusic);
          }}
        />
      </div>
    </section>
  );
};

export default Home;
