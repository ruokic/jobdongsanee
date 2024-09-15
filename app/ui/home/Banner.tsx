import Heading from '../components/Heading';

import MugHotIcon from '../../../public/icons/mug-hot.svg';

export default function Banner() {
  return (
    <div className='w-full h-64 flex flex-col justify-center items-center gap-2 shadow'>
      <Heading type='h4' text='실례지만 커피 한 잔 사주십쇼' />
      <MugHotIcon className='w-8 h-8 fill-yellow-900' />
    </div>
  );
}
