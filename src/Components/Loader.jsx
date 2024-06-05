import { Html } from "@react-three/drei";

const Loader = () => {
  return (
    <Html>
      <div className="object-center">
        <div className="h-20 w-20 border-opacity-20 border-blue-500 border-t-blue-500 rounded-full animate-spin"></div>
      </div>
    </Html>
  );
};

export default Loader;

// used Html because it will be used inside canvas tag and only 3d onj could render inside canvas
