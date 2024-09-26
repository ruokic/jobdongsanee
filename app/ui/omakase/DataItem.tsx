import MinusCircleIcon from '@icons/minus-circle.svg';

interface DataItemProps {
  content: string;
  weight: number;
  handleDeleteData: (targetContent: string) => void;
}

export default function DataItem({
  content,
  weight,
  handleDeleteData,
}: DataItemProps) {
  return (
    <div
      key={content}
      className='grid grid-cols-6 items-center gap-4 p-2 w-full rounded shadow'
    >
      <button type='button' onClick={() => handleDeleteData(content)}>
        <MinusCircleIcon className='fill-red-500 w-4 h-4' />
      </button>
      <span className='col-span-4'>{content}</span>
      <span>{weight}</span>
    </div>
  );
}
