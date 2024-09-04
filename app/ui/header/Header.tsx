import Link from 'next/link';

export default function Header() {
  return (
    <header className='flex justify-between align-center p-4 shadow'>
      <Link href='/'>J10E</Link>
      <div>menu</div>
    </header>
  );
}
