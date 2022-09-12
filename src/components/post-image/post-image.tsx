import Image from "next/image";

import Screenshot from "./post2.png";

export const PostImage = () => {
  return (
    <div className='flex justify-center mx-auto mb-20 md:mt-24 md:w-4/5'>
      <Image src={Screenshot} alt='Post' />
    </div>
  );
};
