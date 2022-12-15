import Head from "next/head";
import Header from "../components/Header";
import { toThousand } from "../helpers";
import StatusBar from "../components/StatusBar";
import HistoryItem from "../components/HistoryItem";

const MyDashboard = () => {
  const historyList = [
    {
      refNumber: "#12312321",
      projectTitle: "Wildfire Forest",
      donationAmount: 1000000,
      paymentStatus: "waiting",
    },
    {
      refNumber: "#11111111",
      projectTitle: "Wildfire Forest",
      donationAmount: 800000,
      paymentStatus: "success",
    },
  ];

  return (
    <div className="bg-gray-300 font-lato h-screen text-black">
      <Head>
        <title>My Dashboard - SEAL Crowdfunding</title>
        <meta
          name="description"
          content="Alone we can do so little; together we can do so much"
        />
      </Head>
      <div className="max-w-500px mx-auto h-full bg-gray3 p-8">
        <Header title="My Dashboard" url="/home" />
        <div className="font-bold text-base mb-4">History Payment</div>
        {historyList.map((item, index) => (
          <HistoryItem
            key={index}
            refNumber={item.refNumber}
            projectTitle={item.projectTitle}
            donationAmount={item.donationAmount}
            paymentStatus={item.paymentStatus}
          />
        ))}
      </div>
    </div>
  );
};

export default MyDashboard;
