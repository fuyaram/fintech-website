// type
import { ProjectContentProps } from '@interfaces/departments/ProjectContent';

// library
import Image from 'next/image';
import { Fragment } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

// code
const ProjectContent = ({
  htmlContent,
  projectImage,
  collaborations,
}: ProjectContentProps) => {
  const hasImage = projectImage.length > 0;

  return (
    <div className="m-5">
      <div className="flex flex-wrap justify-between ">
        <div
          className="flex flex-col gap-y-3 overflow-x-auto xl:w-1/2 [&>a]:underline [&>ul]:list-inside [&>ul]:list-disc"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: htmlContent,
          }}
        />
        {hasImage && (
          <div className="mt-5 lg:w-1/2">
            <Carousel
              showStatus={false}
              showArrows
              showThumbs={false}
              autoPlay
              swipeable
              emulateTouch
              infiniteLoop
              dynamicHeight={false}
              className="lg:ml-16"
            >
              {projectImage.map((image) => (
                <div key={image.src} className="rounded-lg">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    height={270}
                    width={400}
                    className="rounded-lg "
                  />
                </div>
              ))}
            </Carousel>
          </div>
        )}
      </div>
      {/* members */}
      {/* <div className="mt-7 flex">
        <div className="rounded-lg  border-primary">
          <h2 className="my-2 mx-5 text-lg font-semibold md:text-xl lg:text-2xl ">
            Members
          </h2>
        </div>
      </div>
      <div className="mt-3 flex flex-wrap rounded-lg border-[1px] border-gray-600">
        {members.map(({ src, alt, memberName }) => (
          <Fragment key={memberName}>
            <div className=" m-5 flex flex-wrap text-sm  lg:text-xl">
              <Image
                src={src}
                alt={alt}
                height={80}
                width={80}
                className="rounded-full"
              />
              <h3 className="mt-7 ml-3">{memberName}</h3>
            </div>
          </Fragment>
        ))}
      </div> */}
      {collaborations.length > 0 && (
        <>
          <div className="mt-7 flex">
            <div className="rounded-lg  border-primary">
              <h2 className="mx-5 my-2 text-lg font-semibold md:text-xl lg:text-2xl ">
                Collaborations
              </h2>
            </div>
          </div>
          <div className="mt-3 flex flex-wrap rounded-lg border-[1px] border-gray-600 ">
            {collaborations.map(({ src, alt, companyName }) => (
              <Fragment key={companyName}>
                <div className=" m-5 flex flex-wrap text-sm  lg:text-xl">
                  <Image
                    src={src}
                    alt={alt}
                    height={80}
                    width={80}
                    className="rounded-full"
                  />
                  <h3 className="ml-4 flex h-full items-center font-bold">
                    {companyName}
                  </h3>
                </div>
              </Fragment>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default ProjectContent;
