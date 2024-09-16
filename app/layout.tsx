import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

import Header from '@ui/header/Header';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: '::: 잡동사니 도구 모음 :::',
  description: '뭐가 필요할지 몰라서 다 준비해봤어, 니가 원하는 것은 빼고',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ko'>
      <body className={inter.className}>
        <Header />
        <main className='flex flex-col gap-4 items-center'>{children}</main>
        <div className='modal' />
      </body>
    </html>
  );
}
