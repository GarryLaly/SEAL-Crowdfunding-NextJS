import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Button from "../components/Button";
import Header from "../components/Header";
import ProjectItem from "../components/ProjectItem";
import InfoBox from "../components/InfoBox";
import TextInput from "../components/TextInput";
import { toThousand } from "../helpers";

const Payment = () => {
  const [amount, setAmount] = useState(0);

  return (
    <div className="bg-gray-300 font-lato h-screen text-black">
      <Head>
        <title>Payment - SEAL Crowdfunding</title>
        <meta
          name="description"
          content="Alone we can do so little; together we can do so much"
        />
      </Head>
      <div className="max-w-500px mx-auto h-full bg-gray3 p-8">
        <div className="flex flex-col h-full justify-between">
          <div className="flex flex-col flex-1">
            <Header title="Payment" url="/detail" />
            <div className="font-bold text-base mb-4">Donation for</div>
            <ProjectItem
              date="10 days left"
              image="http://placekitten.com/200/120"
              title="Helping Children for Studying"
              publisher="Kids Nation Foundation"
              amountCollected={75000000}
              amountTotal={100000000}
              isHorizontal={true}
            />
            <div className="mt-8 font-bold text-base mb-4">Payment info</div>
            <div className="bg-white p-6 rounded-lg mb-4">
              <TextInput
                label="Donation amount"
                type="number"
                placeholder="Type amount here...."
                value={amount}
                setValue={setAmount}
                marginBottom={0}
              />
            </div>
            <InfoBox label="Payment method" value="Manual Transfer" />
          </div>
          <div className="flex mt-10">
            <Button text="Confirm" url="/payment-confirm" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
