import React from "react";
import { createPortal } from "react-dom";

type FullscreenModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

const FullscreenModal = ({
  isOpen,
  onClose,
  children,
}: FullscreenModalProps) => {
  if (!isOpen) {
    return null;
  }

  return createPortal(
    <div className="fixed inset-0 bg-[#5D6670] bg-opacity-90 z-50 flex justify-center items-center">
      <div className="bg-white rounded-lg p-8 max-w-lg w-full relative">
        <button
          className="absolute top-4 right-4 hover:bg-slate-500 rounded-full w-6 hover:text-white"
          onClick={onClose}
        >
          x
        </button>
        <div className="bg-white p-4 rounded-lg">{children}</div>
      </div>
    </div>,
    document.body
  );
};

export default FullscreenModal;
