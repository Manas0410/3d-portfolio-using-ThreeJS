import React, { useState } from "react";

const useAlert = () => {
  const [Alert, setAlert] = useState({
    show: false,
    textr: "",
    type: "danger",
  });

  const showAlert = (text, type = "danger") => {
    setAlert({
      show: true,
      text: text,
      type: type,
    });
  };

  const hideAlert = () => {
    setAlert({
      show: false,
      text: "",
      type: "danger",
    });
  };

  return { alert, showAlert, hideAlert };
};

export default useAlert;
