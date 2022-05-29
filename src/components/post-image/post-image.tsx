import Image from "next/image";

import Screenshot from "./post.png";

export const PostImage = () => {
  return (
    <div className='flex justify-center mx-auto md:mt-24 md:w-4/5'>
      <Image
        src={Screenshot}
        alt='Post'
        // layout='responsive'
        // objectFit='contain'
      />
    </div>
  );
};
