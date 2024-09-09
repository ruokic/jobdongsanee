export const metadata: Metadata = {
  title: '::: 로또번호 추첨기 :::',
  description: '뭐가 필요할지 몰라서 다 준비해봤어, 니가 원하는 것은 빼고',
};

export default function LotteryLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
