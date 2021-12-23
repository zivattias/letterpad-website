import Image from 'next/image';

const WhyLetterpad = () => {
  return (
    <div className='mt-20 w-full md:w-full'>
      <h3 className='px-4'>Why Letterpad ?</h3>
      <div className='flex flex-wrap mt-4 p-4'>
        <div className='w-full md:pr-6 md:w-1/2'>
          Letterpad has no distractions, no sidebars, plugins or widgets, with
          nothing to setup or customize, it only has the essentials for a pure
          reading and writing experience.
          <br />
          <br />
          With the composing tool you have just the right amount of
          formatting.It enables users to spend more time producing and editing
          content, with a fully responsive dashboard that supports mobile and
          tablet devices. Letterpad gives you the choice of writing in Markdown
          or in Rich Text.
        </div>
        <div className='w-full lg:w-1/2'>
          <Image
            src='/images/client.png'
            width='450px'
            height='300px'
            alt='Letterpad Client'
            className='shadow-lg'
          />
        </div>
      </div>
    </div>
  );
};
export default WhyLetterpad;
