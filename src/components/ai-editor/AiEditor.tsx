import Image from "next/image";

import AiImage from "./aiEditor.png";

const AiEditor = () => {
  return (
    <div className='w-full md:w-full'>
      <h3 className='px-4 font-medium'>Language and Grammar Suggestions</h3>
      <div className='flex flex-col flex-wrap gap-8 justify-center p-4 pt-0 font-normal text-gray-600 lg:flex-row'>
        <div className='flex mt-6'>
          Letterpad editor is integrated with the Language Tool, which suggests
          you with alternative words, grammatical errors, puntuation mistakes,
          etc. It can also detect the context from your text, so all the
          suggestions are relevant to your story.
        </div>
        <div className='flex flex-1 justify-center mt-16 lg:mt-0'>
          <br />
          <div className='p-20 shadow-xl'>
            <Image src={AiImage} objectFit='contain' alt='Editor Suggestions' />
          </div>
        </div>
      </div>
    </div>
  );
};
export default AiEditor;
