import classNames from 'classnames';

interface ButtonProps {
  label?: string;
  size?: 'sm' | 'md' | 'lg';
  primary?: boolean;
  warning?: boolean;
  disabled?: boolean;
  isLoading?: boolean;
  onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function Button({
  label = 'Button',
  size = 'md',
  primary = false,
  warning = false,
  disabled = false,
  isLoading = false,
  onClick,
}: ButtonProps) {
  return (
    <button
      type='button'
      className={classNames(
        'rounded cursor-pointer leading-none disabled:opacity-50',
        {
          'text-xs py-2 px-4': size === 'sm',
          'text-sm py-2.5 px-5': size === 'md',
          'text-base py-3 px-6': size === 'lg',

          'text-white bg-red-500 active:bg-red-600': warning,
          'text-white bg-blue-500 active:bg-blue-600': !warning && primary,
          'text-black bg-white active:bg-slate-200 shadow':
            !warning && !primary,
        }
      )}
      onClick={onClick}
    >
      {label}
    </button>
  );
}
