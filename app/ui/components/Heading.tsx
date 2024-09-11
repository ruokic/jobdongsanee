import classNames from 'classnames';

interface HeadingProps {
  type?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span';
  text: string;
}

export default function Heading({ type = 'span', text }: HeadingProps) {
  switch (type) {
    case 'h1':
      return <h1 className={classNames('text-5xl')}>{text}</h1>;
    case 'h2':
      return <h2 className={classNames('text-4xl')}>{text}</h2>;
    case 'h3':
      return <h3 className={classNames('text-3xl')}>{text}</h3>;
    case 'h4':
      return <h4 className={classNames('text-2xl')}>{text}</h4>;
    case 'h5':
      return <h5 className={classNames('text-xl')}>{text}</h5>;
    case 'h6':
      return <h6 className={classNames('text-lg')}>{text}</h6>;
    default:
      return <span>{text}</span>;
  }
}
