export const Features = () => {
  return (
    <div className='w-full md:w-full'>
      <h3 className='px-4'>Features</h3>
      <div className='flex flex-wrap'>
        <div className='w-full md:w-4/12'>
          <div className='flex relative flex-col mt-4'>
            <div className='flex-auto px-4 py-5'>
              <h6 className='text-l mb-1 font-semibold'>Fast and Flexible</h6>
              <p className='text-blueGray-500 mb-4 text-sm'>
                Letterpad uses Graphql which makes your blog faster due to
                minimal data fetching. This also makes it possible to create a
                client with any language.
              </p>
            </div>
          </div>
          <div className='flex relative flex-col min-w-0'>
            <div className='flex-auto px-4 py-5'>
              <h6 className='text-l mb-1 font-semibold'>Image CDN</h6>
              <p className='text-blueGray-500 mb-4 text-sm'>
                Letterpad provides services like UnSplash and Cloudinary to
                provide optimsed images for screens of different size.
              </p>
            </div>
          </div>
        </div>
        <div className='w-full md:w-4/12'>
          <div className='flex relative flex-col mt-4 min-w-0'>
            <div className='flex-auto px-4 py-5'>
              <h6 className='text-l mb-1 font-semibold'>Integrations</h6>
              <p className='text-blueGray-500 mb-4 text-sm'>
                It can easily be integrated with Cloudinary for image cdn,
                Unsplash, Mysql, Postgress, Sqlite, Sentry, Google Analytics
                etc.
              </p>
            </div>
          </div>
          <div className='flex relative flex-col min-w-0'>
            <div className='flex-auto px-4 py-5'>
              <h6 className='text-l mb-1 font-semibold'>Clean Permalinks</h6>
              <p className='text-blueGray-500 mb-4 text-sm'>
                All links in Letterpad is automatically created with clean,
                readable, well-structured permalinks which are easily
                understood.
              </p>
            </div>
          </div>
        </div>
        <div className='w-full md:w-4/12'>
          <div className='flex relative flex-col mt-4 min-w-0'>
            <div className='flex-auto px-4 py-5'>
              <h6 className='text-l mb-1 font-semibold'>Build audience</h6>
              <p className='text-blueGray-500 mb-4 text-sm'>
                With the subscribers features, you will be able to develop your
                audience with time. They will be notified with every post you
                publish.
              </p>
            </div>
          </div>
          <div className='flex relative flex-col min-w-0'>
            <div className='flex-auto px-4 py-5'>
              <h6 className='text-l mb-1 font-semibold'>Multiuser Platform</h6>
              <p className='text-blueGray-500 mb-4 text-sm'>
                Letterpad allows multi registration which allows you to have
                multiple users with a single installation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
