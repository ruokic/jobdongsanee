import ContentBox from './ui/home/ContentBox';
import Banner from './ui/home/Banner';

export default function Home() {
  return (
    <>
      <Banner />
      <div className='p-4 flex flex-wrap gap-4 justify-center'>
        <ContentBox title={'로또번호추첨기'} url={'/lottery'} />
        <ContentBox title={'Content'} url={'/'} />
        <ContentBox title={'Content'} url={'/'} />
        <ContentBox title={'Content'} url={'/'} />
      </div>
    </>
  );
}
