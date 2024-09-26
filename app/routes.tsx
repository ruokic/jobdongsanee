import CloverIcon from '@icons/clover.svg';
import UtensilsIcon from '@icons/utensils.svg';

const routes = [
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

export default routes;
