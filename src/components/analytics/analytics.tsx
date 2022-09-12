import Image from "next/image";

const Analytics = () => {
  return (
    <div className='pb-20 mt-32 w-full md:w-full'>
      <h3 className='px-4 font-medium'>Analytics</h3>
      <div className='flex flex-wrap p-4 pt-0 font-normal text-gray-700'>
        <div className='mt-6 w-full md:pr-6 md:w-1/2'>
          With Umami integration - a analytics tool, you can track all analytics
          of your blog based on your content. You can also compare how your
          posts performed in comparison to a previous duration. Since all
          analytics are internal, none of the tracking will be blocked by ad
          blockers. This ensures that you get accurate analytics.
          <br />
          <br />
        </div>
        <div className='flex flex-1 justify-center mt-14 w-full lg:mt-0 lg:w-1/2'>
          &nbsp;
          <Image
            src={"/images/analytics.png"}
            width='650px'
            height='300px'
            alt='Analytics'
          />
          &nbsp;
        </div>
      </div>
    </div>
  );
};
export default Analytics;
