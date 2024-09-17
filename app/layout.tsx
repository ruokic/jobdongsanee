import type { Metadata } from 'next';
import React from 'react';
import { Inter } from 'next/font/google';
import './globals.css';

import Header from '@ui/header/Header';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: '::: 잡동사니 도구 모음 :::',
  description: '쓸모 없는 것도 언젠간 쓸 데가 있다',
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
