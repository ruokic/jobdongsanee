import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

import XIcon from '@icons/x.svg';

interface ModalProps {
  contents?: React.ReactNode;
}

export default function useModal() {
  const [portal, setPortal] = useState<Element | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setPortal(document.querySelector('.modal') || null);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    document.body.style.overflow = 'auto';
  };

  function Modal({ contents }: ModalProps) {
    if (!isOpen) return null;
    if (!portal) return null;
    return createPortal(
      <div className='fixed inset-0 w-screen h-screen flex flex-col justify-center items-center bg-black/50 z-50 overflow-hidden'>
        <div className='relative bg-white p-4 pt-12 rounded min-w-60 min-h-32'>
          <button
            className='absolute top-4 right-4'
            onClick={closeModal}
            type='button'
          >
            <XIcon className='w-6 h-6 fill-gray-500' />
          </button>
          {contents}
        </div>
      </div>,
      portal
    );
  }

  return { Modal, openModal, closeModal };
}
