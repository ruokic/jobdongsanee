'use client';

import { useRouter } from 'next/navigation';

interface IContentBox {
  title: string;
  url: string;
}

export default function ContentBox({ title, url }: IContentBox) {
  const router = useRouter();
  return (
    <button
      className='h-32 w-32 flex flex-col justify-center items-center border rounded-lg active:bg-neutral-100'
      onClick={() => router.push(url)}
    >
      {title}
    </button>
  );
}
