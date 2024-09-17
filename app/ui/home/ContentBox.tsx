'use client';

import React from 'react';

import { useRouter } from 'next/navigation';

interface IContentBox {
  title: string;
  url: string;
  icon: React.ReactElement<SVGSVGElement>;
}

export default function ContentBox({ title, url, icon }: IContentBox) {
  const router = useRouter();

  return (
    <button
      className='h-32 w-32 p-2 flex flex-col justify-center items-center border rounded gap-4 active:bg-neutral-100'
      onClick={() => router.push(url)}
      type='button'
    >
      <div className='w-8 h-8'>{icon}</div>
      <span>{title}</span>
    </button>
  );
}
