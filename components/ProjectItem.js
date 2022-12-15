import Image from "next/image";
import Link from "next/link";
import { toThousand } from "../helpers/index";

const ProjectItem = ({
  date,
  image,
  title,
  publisher,
  amountCollected,
  amountTotal,
  isHorizontal,
}) => {
  return (
    <Link href="/detail">
      <div
        className={`${
          isHorizontal ? "flex flex-row items-center p-3 mb-3" : "w-200px mr-3"
        } flex-shrink-0 text-xs bg-white rounded-lg overflow-hidden`}
      >
        <div
          className={`${
            isHorizontal ? "rounded-lg overflow-hidden" : ""
          } relative`}
        >
          <Image
            src={image}
            width={isHorizontal ? 150 : 200}
            height={isHorizontal ? 95 : 100}
            alt="project image"
          />
          <div className="bg-gray4 absolute top-0 left-0 m-3 rounded text-8px px-2 text-white">
            {date}
          </div>
        </div>
        <div className="flex-1 p-3">
          <div className="font-bold">{title}</div>
          <div className="text-10px">{publisher}</div>
          <div
            className={`${
              isHorizontal ? "mt-4" : "mt-2"
            } bg-gray5 h-1 w-full rounded-full mb-1`}
          >
            <div
              className="bg-primary rounded-full h-1"
              style={{ width: `${(amountCollected / amountTotal) * 100}%` }}
            ></div>
          </div>
          <div className="flex flex-row items-center justify-between">
            <div className="font-bold">
              {toThousand(amountCollected)}{" "}
              <span className="font-normal text-10px">collected</span>
            </div>
            <div className="font-semibold text-primary">
              {(amountCollected / amountTotal) * 100}%
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProjectItem;
