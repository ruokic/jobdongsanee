'use client';
import ContentBox from './ui/home/ContentBox';
import Banner from './ui/home/Banner';

import CloverIcon from '../public/icons/clover.svg';
import UtensilsIcon from '../public/icons/utensils.svg';

const data = [
  { title: '로또 번호 추첨', url: '/lottery', icon: CloverIcon },
  { title: '메뉴 추천', url: '/omakase', icon: UtensilsIcon },
];

export default function Home() {
  return (
    <>
      <Banner />
      <div className='p-4 flex flex-wrap gap-4 justify-center'>
        {data.map(({ title, url, icon }) => (
          <ContentBox key={url} title={title} url={url} Icon={icon} />
        ))}
      </div>
    </>
  );
}
