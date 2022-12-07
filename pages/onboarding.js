import Head from "next/head";
import Image from "next/image";
import Button from "../components/Button";

const Onboarding = () => {
  return (
    <div className="bg-gray-300 h-screen font-lato text-black">
      <Head>
        <title>Onboarding - SEAL Crowdfunding</title>
        <meta
          name="description"
          content="Alone we can do so little; together we can do so much"
        />
      </Head>
      <div className="max-w-500px mx-auto bg-white h-full flex flex-col justify-between items-center px-8 py-24">
        <div>
          <div className="font-bold text-2xl text-center max-w-300px mx-auto mb-5">
            Alone we can do so little; together we can do so much
          </div>
          <div className="text-center text-gray1 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            vehicula aliquam consequat. Aliquam et nisi libero
          </div>
        </div>
        <Image src="/logo.png" width={259} height={259} alt="logo" />
        <Button url="/login" text="Get Started" />
      </div>
    </div>
  );
};

export default Onboarding;
