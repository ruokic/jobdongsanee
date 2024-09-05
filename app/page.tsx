import ContentBox from './ui/home/ContentBox';
import Banner from './ui/home/Banner';

export default function Home() {
  return (
    <main className='flex flex-col gap-4'>
      <Banner />
      <div className='p-4 flex flex-wrap gap-4 justify-center'>
        <ContentBox />
        <ContentBox />
        <ContentBox />
        <ContentBox />
      </div>
    </main>
  );
}
