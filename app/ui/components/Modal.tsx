import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

interface ModalProps {
  handleClose: () => void;
  children: React.ReactNode;
}

export default function Modal({ handleClose, children }: ModalProps) {
  const [portal, setPortal] = useState<Element | null>(null);
  useEffect(() => {
    setPortal(document.querySelector('.modal') || null);
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);
  if (!portal) return;
  return createPortal(
    <div
      onClick={handleClose}
      className='fixed inset-0 w-screen h-screen flex flex-col justify-center items-center bg-black/50 z-50 overflow-hidden'
    >
      <div
        onClick={(e: React.MouseEvent<HTMLDivElement>) => {
          e.stopPropagation();
        }}
        className='bg-white p-4 rounded'
      >
        {children}
      </div>
    </div>,
    portal
  );
}
