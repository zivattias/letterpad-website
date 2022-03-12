import Image from "next/image";

export const TechnologyLogos = () => {
  return (
    <div className='flex flex-col gap-12 pt-20 px-4 md:flex-row md:gap-4 md:pt-40'>
      <h3>Technologies</h3>
      <div className='flex justify-around w-full'>
        <Image
          src='/images/logos/nextjs.svg'
          height={40}
          width={100}
          alt='NextJS'
        />
        <Image
          src='/images/logos/prisma.svg'
          height={40}
          width={80}
          alt='PrismaJS'
        />
        <Image
          src='/images/logos/graphql.svg'
          height={40}
          width={80}
          alt='GraphQL'
        />
      </div>
      <div className='flex justify-around w-full'>
        <Image
          src='/images/logos/react.svg'
          height={40}
          width={80}
          alt='React'
        />
        <Image
          src='/images/logos/apollo.svg'
          height={40}
          width={80}
          alt='ApolloJS'
        />
        <Image
          src='/images/logos/tinymce.svg'
          height={40}
          width={80}
          alt='TinyMCE'
        />
      </div>
    </div>
  );
};
