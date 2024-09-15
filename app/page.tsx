import ContentBox from './ui/home/ContentBox';
import Banner from './ui/home/Banner';

const data = [
  { title: '로또 번호 추첨', url: '/lottery' },
  { title: '메뉴 추천', url: '/omakase' },
];

export default function Home() {
  return (
    <>
      <Banner />
      <div className='p-4 flex flex-wrap gap-4 justify-center'>
        {data.map(({ title, url }) => (
          <ContentBox key={url} title={title} url={url} />
        ))}
      </div>
    </>
  );
}
