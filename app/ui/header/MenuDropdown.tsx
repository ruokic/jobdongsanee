'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { useState, useEffect } from 'react';

import routes from '@app/routes';

import BarsIcon from '@icons/bars.svg';

export default function MenuDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const closeDropdown = () => {
    setIsOpen(false);
  };
  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    if (isOpen) document.addEventListener('click', closeDropdown);
    return () => {
      document.removeEventListener('click', closeDropdown);
    };
  }, [isOpen]);

  return (
    <div className='relative'>
      <button type='button' onClick={toggleDropdown} className=''>
        <BarsIcon className='w-6 h-6 fill-white' />
      </button>
      {isOpen && (
        <div className='absolute -right-4 mt-4 w-36 bg-white shadow overflow-hidden'>
          {routes
            .filter(({ url }) => url !== pathname)
            .map(({ title, url, icon }) => (
              <Link key={title} href={url} className='text-sm text-gray-700'>
                <div className='flex items-center gap-2 p-2 hover:bg-gray-100'>
                  <div className='w-4 h-4'>{icon}</div>
                  <span>{title}</span>
                </div>
              </Link>
            ))}
        </div>
      )}
    </div>
  );
}
