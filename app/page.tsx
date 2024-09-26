import routes from '@app/routes';

import ContentBox from '@ui/home/ContentBox';
import Banner from '@ui/home/Banner';

export default function Home() {
  return (
    <>
      <Banner />
      <div className='p-4 flex flex-wrap gap-4 justify-center'>
        {routes.map(({ title, url, icon }) => (
          <ContentBox key={url} title={title} url={url} icon={icon} />
        ))}
      </div>
    </>
  );
}
