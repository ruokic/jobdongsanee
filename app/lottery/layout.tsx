import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '::: 로또번호 추첨기 :::',
};

export default function LotteryLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
