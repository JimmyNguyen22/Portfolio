import React from "react";
import { AiOutlineClose } from "react-icons/ai";

export const Modal = ({ isVisible, onClose, children }) => {
  if (!isVisible) return null;

  const handleClose = (e) => {
    if (e.target.id === "wrapper") onClose();
  };

  return (
    <div
      className="fixed inset-0 top-[-50px] bg-black bg-opacity-25  flex justify-center items-center"
      id="wrapper"
      onClick={handleClose}
    >
      <div className="md:w-[600px] w-[90%] mx-auto flex flex-col">
        <button
          className="text-white text-3xl place-self-end"
          onClick={() => onClose()}
        >
          <AiOutlineClose></AiOutlineClose>
        </button>
        <div>{children}</div>
      </div>
    </div>
  );
};
