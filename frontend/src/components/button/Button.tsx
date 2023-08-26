import React from 'react';
import className from 'classnames';

type IButtonProps = {
  xl?: boolean;
  children: string;
  classProps?: string; // Made optional
  onClick?: () => void;
  onMouseEnter?: () => void; // Step 1: Add onMouseEnter prop
  onMouseLeave?: () => void;
};

const Button = (props: IButtonProps) => {
  const btnClass = className({
    btn: true,
    'btn-xl': props.xl,
    'btn-base': !props.xl,
    'btn-primary': true,
  });

  return (
    <button className={`${props.classProps || ''} ${btnClass}`} onClick={props.onClick} 
    onMouseEnter={props.onMouseEnter} // Step 2: Apply onMouseEnter prop
    onMouseLeave={props.onMouseLeave}>
      {props.children}

      <style jsx>
        {`
          .btn {
            @apply inline-block rounded-md text-center;
          }

          .btn-base {
            @apply text-lg font-semibold py-2 px-4;
          }

          .btn-xl {
            @apply font-extrabold text-xl py-4 px-6;
          }

          .btn-primary {
            @apply text-white bg-primary-500;
          }

          .btn-primary:hover {
            @apply bg-primary-600 cursor-pointer;;
          }

          .btn-secondary {
            @apply text-primary-500 border border-primary-500 bg-white;
          }

          .btn-secondary:hover {
            @apply bg-primary-600 bg-primary-200 cursor-pointer;;
          }
          .btn-tertiary {
            @apply text-primary-500 border border-primary-500 bg-white;
          }

          .btn-tertiary:hover {
            @apply bg-primary-600 bg-primary-200 cursor-pointer;;
          }
        `}
      </style>
    </button>
  );
};

export { Button };