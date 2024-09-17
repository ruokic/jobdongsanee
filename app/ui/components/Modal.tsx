import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

import XIcon from '@icons/x.svg';

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
  if (!portal) return null;
  return createPortal(
    <div className='fixed inset-0 w-screen h-screen flex flex-col justify-center items-center bg-black/50 z-50 overflow-hidden'>
      <div className='relative bg-white p-4 rounded'>
        <button
          className='absolute top-[-1.5rem] right-[-1.5rem]'
          onClick={handleClose}
          type='button'
        >
          <XIcon className='w-6 h-6 fill-black' />
        </button>
        {children}
      </div>
    </div>,
    portal
  );
}
