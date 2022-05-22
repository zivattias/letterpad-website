import Image from "next/image";

import Screenshot from "./post.png";

export const PostImage = () => {
  return (
    <div className='mx-auto shadow-xl md:mt-24 md:w-4/5'>
      <Image src={Screenshot} alt='Post' />
    </div>
  );
};
