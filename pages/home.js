import Head from "next/head";
import Image from "next/image";
import Button from "../components/Button";
import ProjectItem from "../components/ProjectItem";

const Home = () => {
  const urgentFundraising = [
    {
      date: "10 days left",
      image: "http://placekitten.com/200/100",
      title: "Helping Children for Studying",
      publisher: "Kids Nation Foundation",
      amountCollected: 75000000,
      amountTotal: 100000000,
    },
    {
      date: "12 days left",
      image: "http://placekitten.com/200/100",
      title: "Wildfire in The Downtown",
      publisher: "United Foundation",
      amountCollected: 100000000,
      amountTotal: 100000000,
    },
    {
      date: "17 days left",
      image: "http://placekitten.com/200/100",
      title: "Wildfire Forest",
      publisher: "Oxygen Foundation",
      amountCollected: 50000000,
      amountTotal: 100000000,
    },
    {
      date: "24 days left",
      image: "http://placekitten.com/200/100",
      title: "Earthquake in Uptown",
      publisher: "VFT Foundation",
      amountCollected: 10000000,
      amountTotal: 100000000,
    },
  ];

  const newestFundraising = [
    {
      date: "10 days left",
      image: "http://placekitten.com/200/120",
      title: "Helping Children for Studying",
      publisher: "Kids Nation Foundation",
      amountCollected: 75000000,
      amountTotal: 100000000,
    },
    {
      date: "12 days left",
      image: "http://placekitten.com/200/120",
      title: "Wildfire in The Downtown",
      publisher: "United Foundation",
      amountCollected: 100000000,
      amountTotal: 100000000,
    },
    {
      date: "17 days left",
      image: "http://placekitten.com/200/120",
      title: "Wildfire Forest",
      publisher: "Oxygen Foundation",
      amountCollected: 50000000,
      amountTotal: 100000000,
    },
    {
      date: "24 days left",
      image: "http://placekitten.com/200/120",
      title: "Earthquake in Uptown",
      publisher: "VFT Foundation",
      amountCollected: 10000000,
      amountTotal: 100000000,
    },
    {
      date: "10 days left",
      image: "http://placekitten.com/200/120",
      title: "Helping Children for Studying",
      publisher: "Kids Nation Foundation",
      amountCollected: 75000000,
      amountTotal: 100000000,
    },
    {
      date: "12 days left",
      image: "http://placekitten.com/200/120",
      title: "Wildfire in The Downtown",
      publisher: "United Foundation",
      amountCollected: 100000000,
      amountTotal: 100000000,
    },
    {
      date: "17 days left",
      image: "http://placekitten.com/200/120",
      title: "Wildfire Forest",
      publisher: "Oxygen Foundation",
      amountCollected: 50000000,
      amountTotal: 100000000,
    },
    {
      date: "24 days left",
      image: "http://placekitten.com/200/120",
      title: "Earthquake in Uptown",
      publisher: "VFT Foundation",
      amountCollected: 10000000,
      amountTotal: 100000000,
    },
    {
      date: "10 days left",
      image: "http://placekitten.com/200/120",
      title: "Helping Children for Studying",
      publisher: "Kids Nation Foundation",
      amountCollected: 75000000,
      amountTotal: 100000000,
    },
    {
      date: "12 days left",
      image: "http://placekitten.com/200/120",
      title: "Wildfire in The Downtown",
      publisher: "United Foundation",
      amountCollected: 100000000,
      amountTotal: 100000000,
    },
    {
      date: "17 days left",
      image: "http://placekitten.com/200/120",
      title: "Wildfire Forest",
      publisher: "Oxygen Foundation",
      amountCollected: 50000000,
      amountTotal: 100000000,
    },
    {
      date: "24 days left",
      image: "http://placekitten.com/200/120",
      title: "Earthquake in Uptown",
      publisher: "VFT Foundation",
      amountCollected: 10000000,
      amountTotal: 100000000,
    },
    {
      date: "10 days left",
      image: "http://placekitten.com/200/120",
      title: "Helping Children for Studying",
      publisher: "Kids Nation Foundation",
      amountCollected: 75000000,
      amountTotal: 100000000,
    },
    {
      date: "12 days left",
      image: "http://placekitten.com/200/120",
      title: "Wildfire in The Downtown",
      publisher: "United Foundation",
      amountCollected: 100000000,
      amountTotal: 100000000,
    },
    {
      date: "17 days left",
      image: "http://placekitten.com/200/120",
      title: "Wildfire Forest",
      publisher: "Oxygen Foundation",
      amountCollected: 50000000,
      amountTotal: 100000000,
    },
    {
      date: "24 days left",
      image: "http://placekitten.com/200/120",
      title: "Earthquake in Uptown",
      publisher: "VFT Foundation",
      amountCollected: 10000000,
      amountTotal: 100000000,
    },
  ];

  return (
    <div className="bg-gray-300 font-lato text-black">
      <Head>
        <title>Home - SEAL Crowdfunding</title>
        <meta
          name="description"
          content="Alone we can do so little; together we can do so much"
        />
      </Head>
      <div className="max-w-500px mx-auto bg-gray3 p-8">
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
            alt="icon"
          />
        </div>
        <div>
          <div className="font-bold text-base mb-4">Urgent Fundraising</div>
          <div className="flex flex-row overflow-x-auto flex-nowrap">
            {urgentFundraising.map((item, index) => (
              <ProjectItem
                key={index}
                date={item.date}
                image={item.image}
                title={item.title}
                publisher={item.publisher}
                amountCollected={item.amountCollected}
                amountTotal={item.amountTotal}
              />
            ))}
          </div>
          <div className="font-bold text-base mt-6 mb-4">
            Newest Fundraising
          </div>
          {newestFundraising.map((item, index) => (
            <ProjectItem
              key={index}
              date={item.date}
              image={item.image}
              title={item.title}
              publisher={item.publisher}
              amountCollected={item.amountCollected}
              amountTotal={item.amountTotal}
              isHorizontal={true}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
