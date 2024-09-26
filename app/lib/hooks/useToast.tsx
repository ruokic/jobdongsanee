import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

type ToastType = {
  message: string;
  duration: number;
  createdAt: string;
};

interface ToastProps extends ToastType {
  handleDeleteToast: (createdAt: string) => void;
}

function ToastItem({
  message,
  duration,
  createdAt,
  handleDeleteToast,
}: ToastProps) {
  const timeoutID = setTimeout(() => {
    handleDeleteToast(createdAt);
  }, duration);
  useEffect(
    () => () => {
      clearTimeout(timeoutID);
    },
    [timeoutID]
  );

  return (
    <button
      className='min-w-60 p-2 bg-gray-500 text-white rounded-lg border-2 border-white'
      type='button'
      onClick={() => handleDeleteToast(createdAt)}
    >
      {message}
    </button>
  );
}

export default function useToast() {
  const [toasts, setToasts] = useState<Array<ToastType>>([]);
  const [portal, setPortal] = useState<Element | null>(null);

  useEffect(() => {
    setPortal(document.querySelector('.toast-container') || null);
  }, []);

  const addToast = (data: Partial<ToastType>) => {
    const newToast = {
      message: '',
      duration: 5000,
      createdAt: new Date().toJSON(),
      ...data,
    };
    setToasts((prev) => prev.concat(newToast));
  };
  const handleDeleteToast = (key: string) => {
    setToasts((prev) => prev.filter(({ createdAt }) => createdAt !== key));
  };

  function Toast() {
    return portal
      ? createPortal(
          toasts.map((toast) => (
            <ToastItem
              key={toast.createdAt}
              message={toast.message}
              duration={toast.duration}
              createdAt={toast.createdAt}
              handleDeleteToast={handleDeleteToast}
            />
          )),
          portal
        )
      : null;
  }

  return { Toast, addToast };
}
