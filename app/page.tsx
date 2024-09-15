'use client';
import ContentBox from './ui/home/ContentBox';
import Banner from './ui/home/Banner';

import CloverIcon from '../public/icons/clover.svg';
import UtensilsIcon from '../public/icons/utensils.svg';

const data = [
  {
    title: '로또 번호 추천',
    url: '/lottery',
    icon: <CloverIcon className='fill-green-500' />,
  },
  {
    title: '메뉴 추천',
    url: '/omakase',
    icon: <UtensilsIcon className='fill-slate-400' />,
  },
];

export default function Home() {
  return (
    <>
      <Banner />
      <div className='p-4 flex flex-wrap gap-4 justify-center'>
        {data.map(({ title, url, icon }) => (
          <ContentBox key={url} title={title} url={url} icon={icon} />
        ))}
      </div>
    </>
  );
}
