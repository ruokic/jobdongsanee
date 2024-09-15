'use client';

import { useRouter } from 'next/navigation';

interface IContentBox {
  title: string;
  url: string;
  Icon: React.ReactNode<SVGSVGElement>;
}

export default function ContentBox({ title, url, Icon }: IContentBox) {
  const router = useRouter();
  return (
    <button
      className='h-32 w-32 flex flex-col justify-center items-center border rounded gap-4 active:bg-neutral-100'
      onClick={() => router.push(url)}
    >
      <Icon className='w-8 h-8' />
      {title}
    </button>
  );
}
