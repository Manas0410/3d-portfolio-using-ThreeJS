import { Suspense, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Canvas } from "@react-three/fiber";
import { Fox } from "../models/Fox";
import Loader from "../Components/Loader";
import useAlert from "../hooks/useAlert";
import Alert from "../Components/Alert";
import { contactgithub, contactgmail, contactlinkedin } from "../assets/icons";
import ContactIcon from "../Components/ContactIcon";

const Contact = () => {
  const { alert, showAlert, hideAlert } = useAlert();
  const formRef = useRef(null);

  const [Form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [IsLoading, setIsLoading] = useState();
  const [currentAnimation, setcurrentAnimation] = useState("idle");

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleFocus = () => setcurrentAnimation("walk");
  const handleBlur = () => setcurrentAnimation("idle");
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setcurrentAnimation("hit");
    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: Form.name,
          to_name: "manas",
          from_email: Form.email,
          to_email: "manasshrivastava0410@gmail.com",
          message: Form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setIsLoading(false);
        showAlert({ showAlert: true, message: "Message sent successfully " });
        setcurrentAnimation("idle");
        setForm({
          name: "",
          email: "",
          message: "",
        });
      })
      .catch((err) => {
        setIsLoading(false);
        console.log(err);
        setcurrentAnimation("idle");
        showAlert({
          showAlert: true,
          message:
            "I could not receive your message buddy, Please send me a mail",
          type: "danger",
        });
      });
  };

  return (
    <section className="relative flex lg:flex-row flex-col max-container">
      {alert.show && <Alert {...alert} />}
      <div className="flex-1 min-w-[50%] flex flex-col relative">
        <h1 className="head-text">Get in Touch</h1>

        <form
          className="w-full flex flex-col gap-7 mt-14"
          onSubmit={handleSubmit}
        >
          <label className="text-block-500 font-semibold">
            Name
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="input"
              required
              onChange={handleChange}
              value={Form.name}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <label className="text-block-500 font-semibold">
            Email
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="input"
              required
              onChange={handleChange}
              value={Form.email}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <label className="text-block-500 font-semibold">
            Enter Message
            <textarea
              type="text"
              name="message"
              placeholder="Let me know how can i help you."
              className="input"
              required
              onChange={handleChange}
              value={Form.message}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <button
            type="submit"
            className="btn"
            onFocus={handleFocus}
            onBlur={handleBlur}
            disabled={IsLoading}
          >
            {IsLoading ? "Sending..." : "Send Message"}
          </button>
        </form>
        <h3 className="text-xl font-semibold mt-12">Contact me via ...</h3>
        <nav className=" flex justify-between items-end  w-full flex-wrap">
          <div className="flex flex-col items-start">
            <p className="m-0 text-xs max-sm:my-4">+91 7007022949</p>
            <p className="m-0 text-xs max-sm:my-4">
              manasshrivastava0410@gmail.com{" "}
            </p>
          </div>
          <div className=" flex gap-6">
            <ContactIcon
              icon={contactgithub}
              color={"gray"}
              link={"https://github.com/Manas0410"}
            />
            <ContactIcon
              icon={contactgmail}
              link={"mailto:manasshrivastava0410@gmail.com?subject=Hii Manas!"}
            />
            <ContactIcon icon={contactlinkedin} color={"#0077b5"} />
          </div>
        </nav>
      </div>
      <div className="lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px] relative">
        <Canvas camera={{ position: [0, 0, 5], fov: 75, near: 0.5, far: 1000 }}>
          <directionalLight intensity={2.5} position={[0, 0, 1]} />
          <ambientLight intensity={0.8} />
          <Suspense fallback={<Loader />}>
            <Fox
              currentAnimation={currentAnimation}
              position={[0.5, 0.35, 0]}
              rotation={[12.6, -0.6, 0]}
              scale={[0.5, 0.5, 0.5]}
            />
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
};

export default Contact;
