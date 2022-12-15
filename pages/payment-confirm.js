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
import StatusBar from "../components/StatusBar";
import { useRouter } from "next/router";

const PaymentConfirm = () => {
  const router = useRouter();
  const { status } = router.query || {};

  return (
    <div className="bg-gray-300 font-lato h-screen text-black">
      <Head>
        <title>Checkout Detail - SEAL Crowdfunding</title>
        <meta
          name="description"
          content="Alone we can do so little; together we can do so much"
        />
      </Head>
      <div className="max-w-500px mx-auto h-full bg-gray3 p-8">
        <div className="flex flex-col h-full justify-between">
          <div className="flex flex-col flex-1">
            <Header title="Checkout Detail" url="/detail" />
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
            <div className="flex flex-row items-center justify-between mb-4 mt-8">
              <div className="font-bold text-base">Payment info</div>
              <StatusBar status={status || "waiting"} />
            </div>
            <InfoBox label="Donation Amount" value={toThousand(1000000)} />
            <InfoBox label="Payment method" value="Manual Transfer" />
            <InfoBox label="Reference number" value="#12312321" />
          </div>
          {status !== "success" && (
            <div className="flex mt-10">
              <Button
                text="Already Paid Donation"
                url="/payment-confirm?status=success"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PaymentConfirm;
