// type
import { DepartmentCardProps } from '@interfaces/home/DepartmentCard';

// library
import Link from 'next/link';
import Image from 'next/image';
import { WingType } from '@data/homeData';

const DepartmentCard = ({
  coverImage,
  cardDescription,
  name,
  path,
  wingType,
}: DepartmentCardProps) => {
  return (
    <Link href={`/departments/${path}`}>
      <a className="flex basis-[75%] flex-col rounded-[20px] shadow-[0_2px_30px_3px_rgba(0,0,0,0.1)] sm:basis-[330px]">
        <div className="flex justify-center">
          <div className="relative h-[130px] w-full sm:h-[205px] sm:w-[330px]">
            <Image
              src={coverImage.src}
              alt={coverImage.alt}
              layout="fill"
              objectFit="cover"
              className="rounded-t-[20px]"
            />
          </div>
        </div>
        <div className="min-h-[135px] grow rounded-b-lg pl-4 sm:min-h-[256px] sm:pl-6">
          <div className="mr-12 mt-3 flex h-[50px] items-center sm:min-h-[92px]">
            <h3
              className={`font-semibold sm:text-2xl ${
                wingType === WingType.Technical
                  ? 'text-[#004C98]'
                  : 'text-[#009494]'
              }`}
            >
              {name}
            </h3>
          </div>
          <p className="mb-8 mr-4 text-xs font-medium text-[#303030] sm:mr-12 sm:text-base sm:leading-5">
            {cardDescription}
          </p>
        </div>
      </a>
    </Link>
  );
};

export default DepartmentCard;
