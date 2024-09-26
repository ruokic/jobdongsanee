import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: '::: 점심 뭐 먹지??? :::',
};

export default function LotteryLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
