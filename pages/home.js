import Head from "next/head";
import Image from "next/image";
import Button from "../components/Button";

const Home = () => {
  return (
    <div className="bg-gray-300 h-screen font-lato text-black">
      <Head>
        <title>Home - SEAL Crowdfunding</title>
        <meta
          name="description"
          content="Alone we can do so little; together we can do so much"
        />
      </Head>
      <div className="max-w-500px mx-auto bg-gray3 h-full p-8">
        <div className="flex flex-row items-center justify-between mb-10">
          <div>
            <div className="text-sm">Good morning,</div>
            <div className="font-bold text-sm">Garry!</div>
          </div>
          <Image
            src="/icons/ic_profile.png"
            width={26}
            height={25}
            className="cursor-pointer"
          />
        </div>
        <div>
          <div className="font-bold text-base mb-4">Urgent Fundraising</div>
          <div className="max-w-200px text-xs bg-white rounded-lg overflow-hidden">
            <div className="relative">
              <Image
                src="http://placekitten.com/200/100"
                width="200"
                height="100"
              />
              <div className="bg-gray4 absolute top-0 left-0 m-3 rounded text-8px px-2 text-white">
                12 days left
              </div>
            </div>
            <div className="p-3">
              <div className="font-bold">Helping Children for Studying</div>
              <div className="text-10px">Kids Nation Foundation</div>
              <div className="mt-2 bg-gray5 h-1 w-full rounded-full mb-1">
                <div
                  className="bg-primary rounded-full h-1"
                  style={{ width: "75%" }}
                ></div>
              </div>
              <div className="flex flex-row items-center justify-between">
                <div className="font-bold">
                  Rp 1.735.000{" "}
                  <span className="font-normal text-10px">collected</span>
                </div>
                <div className="font-semibold text-primary">75%</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
