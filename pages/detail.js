import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Button from "../components/Button";
import Header from "../components/Header";
import ProjectItem from "../components/ProjectItem";
import { toThousand } from "../helpers";

const Detail = () => {
  const amountCollected = 75000000;
  const amountTotal = 100000000;

  return (
    <div className="bg-gray-300 font-lato text-black">
      <Head>
        <title>Detail - SEAL Crowdfunding</title>
        <meta
          name="description"
          content="Alone we can do so little; together we can do so much"
        />
      </Head>
      <div className="max-w-500px mx-auto bg-gray3 p-8">
        <Header title="Fundraising Detail" url="/home" />
        <div className="relative rounded-lg overflow-hidden">
          <Image
            src="http://placekitten.com/500/300"
            width={500}
            height={300}
            alt="project image"
          />
          <div className="bg-gray4 absolute top-0 right-0 m-4 rounded text-xs py-1 px-2 text-white">
            17 days left
          </div>
        </div>
        <div className="font-bold text-base mt-4">
          Helping Children for Studying
        </div>
        <div className="text-gray1 text-xs mb-4">Kids Nation Foundation</div>
        <div className="bg-gray5 h-1 w-full rounded-full mb-1">
          <div
            className="bg-primary rounded-full h-1"
            style={{ width: `${(amountCollected / amountTotal) * 100}%` }}
          ></div>
        </div>
        <div className="mt-3 flex flex-row items-center justify-between pb-5 border-b border-gray5">
          <div>
            <div className="text-xs mb-1">Raised so far</div>
            <div className="font-bold">
              {toThousand(amountCollected)}{" "}
              <span className="font-normal text-gray1">
                ({(amountCollected / amountTotal) * 100}%)
              </span>
            </div>
          </div>
          <div className="text-right">
            <div className="text-xs mb-1">Target</div>
            <div className="font-bold">{toThousand(amountTotal)}</div>
          </div>
        </div>
        <div className="font-bold text-base mt-4 mb-3">About Fundraising</div>
        <div className="text-gray1 text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          ultrices risus eu suscipit convallis. Ut ac mauris sit amet quam
          bibendum iaculis. Nunc nec justo efficitur arcu sodales efficitur non
          ut enim. Sed luctus magna ultricies neque sodales dictum. Aenean
          auctor sed diam eu dapibus. Quisque finibus luctus convallis. Donec in
          ligula leo. Suspendisse eget odio sit amet risus lobortis consectetur
          in quis orci. Fusce sed orci urna. Maecenas porta est porta massa
          rhoncus.
        </div>
        <div className="flex flex-1 mt-10">
          <Button text="Donate" url="/payment" />
        </div>
      </div>
    </div>
  );
};

export default Detail;
