import { useState, useEffect } from "react";

export const Modal = (children: React.ReactNode) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  if (isOpen) {
    return (
      <div
        className={isOpen ? "h-full w-full bg-slate-950 opacity-50" : ""}
        onClick={toggle}
      >
        {children}
      </div>
    );
  }
};
