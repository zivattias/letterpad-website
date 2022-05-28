import { ReactNode } from "react";

const Yes = () => (
  <div className='flex justify-center'>
    <svg
      className='w-6 h-6 text-gray-800'
      fill='none'
      stroke='currentColor'
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='2'
        d='M5 13l4 4L19 7'
      ></path>
    </svg>
  </div>
);

const No = () => (
  <div className='flex justify-center'>
    <svg
      className='w-6 h-6 text-gray-300'
      fill='none'
      stroke='currentColor'
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='2'
        d='M6 18L18 6M6 6l12 12'
      ></path>
    </svg>
  </div>
);

type Node = {
  value: ReactNode;
  description: string;
};

type IProps = Record<
  string,
  {
    letterpad: Node;
    medium: Node;
    ghost: Node;
  }
>;

const features: IProps = {
  "No Paywall & Popups": {
    letterpad: {
      value: <Yes />,
      description: "Its free",
    },
    medium: {
      value: <No />,
      description: "",
    },
    ghost: {
      value: <No />,
      description: "",
    },
  },
  "Markdown and Inline Editor": {
    letterpad: {
      value: <Yes />,
      description: "",
    },
    medium: {
      value: <No />,
      description: "",
    },
    ghost: {
      value: <Yes />,
      description: "",
    },
  },
  "AI Grammar Check": {
    letterpad: {
      value: <Yes />,
      description: "",
    },
    medium: {
      value: <No />,
      description: "",
    },
    ghost: {
      value: <No />,
      description: "",
    },
  },
  "Syntax Highlighting": {
    letterpad: {
      value: <Yes />,
      description: "",
    },
    medium: {
      value: <No />,
      description: "",
    },
    ghost: {
      value: <Yes />,
      description: "",
    },
  },
  "Blog Appearance and Customisation": {
    letterpad: {
      value: <Yes />,
      description: "",
    },
    medium: {
      value: <No />,
      description: "",
    },
    ghost: {
      value: <Yes />,
      description: "",
    },
  },
  "Create Static Pages": {
    letterpad: {
      value: <Yes />,
      description: "eg. about, contact",
    },
    medium: {
      value: <No />,
      description: "",
    },
    ghost: {
      value: <Yes />,
      description: "",
    },
  },
  "Share Post Drafts": {
    letterpad: {
      value: <Yes />,
      description: "",
    },
    medium: {
      value: <Yes />,
      description: "User should be logged in",
    },
    ghost: {
      value: <Yes />,
      description: "",
    },
  },
  Community: {
    letterpad: {
      value: <No />,
      description: "In progress",
    },
    medium: {
      value: <Yes />,
      description: "",
    },
    ghost: {
      value: <Yes />,
      description: "",
    },
  },
  "Open Source": {
    letterpad: {
      value: <Yes />,
      description: "",
    },
    medium: {
      value: <No />,
      description: "",
    },
    ghost: {
      value: <Yes />,
      description: "",
    },
  },
  Analytics: {
    letterpad: {
      value: <Yes />,
      description: "",
    },
    medium: {
      value: <Yes />,
      description: "",
    },
    ghost: {
      value: <Yes />,
      description: "",
    },
  },
  "Custom Domain Mapping": {
    letterpad: {
      value: <Yes />,
      description: "",
    },
    medium: {
      value: <No />,
      description: "",
    },
    ghost: {
      value: <Yes />,
      description: "",
    },
  },
  Comments: {
    letterpad: {
      value: <Yes />,
      description: "Third Party",
    },
    medium: {
      value: <Yes />,
      description: "In Built",
    },
    ghost: {
      value: <Yes />,
      description: "Third Party",
    },
  },
};

export const Comparison = () => {
  return (
    <div className='flex flex-col px-4 w-full'>
      <h3 className='pb-8'>Comparison</h3>
      Every Platform has its own benefits. Every CMS has its own pros and cons.
      The below comparison will help you better in choosing the right platform
      for your blog.
      <div className='flex items-center px-4 h-20 border-b border-gray-200'>
        <div className='w-60'></div>
        <div className='flex-grow text-sm text-center md:text-lg md:font-semibold'>
          Letterpad
        </div>
        <div className='flex-grow text-sm text-center md:text-lg md:font-semibold'>
          Medium
        </div>
        <div className='flex-grow text-sm text-center md:text-lg md:font-semibold'>
          Ghost
        </div>
      </div>
      <div className='flex items-center px-4 h-12 bg-gray-100 border-b border-gray-200'>
        <div className='font-medium'>Feature Group</div>
      </div>
      {Object.keys(features).map((title) => {
        const { letterpad, ghost, medium } = features[title];
        return (
          <div
            key={title}
            className='flex items-center px-4 py-8 h-12 border-b border-gray-200'
          >
            <div className='w-60 text-sm'>{title}</div>
            <div className='flex flex-col flex-grow justify-center w-0 text-center'>
              {letterpad.value}
              <div className='text-slate-600 hidden text-sm md:block'>
                {letterpad.description}
              </div>
            </div>
            <div className='flex flex-col flex-grow justify-center w-0 text-center'>
              {medium.value}
              <div className='text-slate-600 hidden text-sm md:block'>
                {medium.description}
              </div>
            </div>
            <div className='flex flex-col flex-grow justify-center w-0 text-center'>
              {ghost.value}
              <div className='text-slate-600 hidden text-sm md:block'>
                {ghost.description}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
