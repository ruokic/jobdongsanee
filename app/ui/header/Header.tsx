import Link from 'next/link';

import HouseIcon from '@icons/house.svg';

export default function Header() {
  return (
    <header className='flex justify-between items-center p-4 shadow bg-sky-300 text-white'>
      <Link href='/'>
        <HouseIcon className='w-6 h-6 fill-white' />
      </Link>
    </header>
  );
}
