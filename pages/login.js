import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import Button from "../components/Button";
import TextInput from "../components/TextInput";

const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const actionLogin = () => {
    console.log("email", email);
    console.log("password", password);
    router.push("/home");
  };

  return (
    <div className="bg-gray-300 h-screen font-lato text-black">
      <Head>
        <title>Login - SEAL Crowdfunding</title>
        <meta
          name="description"
          content="Alone we can do so little; together we can do so much"
        />
      </Head>
      <div className="max-w-500px mx-auto bg-primary h-full pt-20">
        <div className="bg-white flex flex-col justify-center items-center px-8 py-24 h-full rounded-tl-40px rounded-tr-40px">
          <Image
            src="/logo.png"
            width={137}
            height={137}
            alt="logo"
            className="mb-6"
          />
          <div className="mb-6">
            <div className="font-bold text-3xl text-center max-w-300px mx-auto mb-3">
              Welcome Back
            </div>
            <div className="text-center text-gray1 text-base">
              Login for continue
            </div>
          </div>
          <TextInput
            label="Email"
            type="email"
            icon="/icons/ic_user.png"
            placeholder="Type email here...."
            value={email}
            setValue={setEmail}
          />
          <TextInput
            label="Password"
            type="password"
            placeholder="Type password here...."
            value={password}
            setValue={setPassword}
          />
          <div className="w-full mt-6">
            <Button text="Login" onClick={actionLogin} />
          </div>
          <div className="mt-7 mx-auto">
            <Link href="/register" className="text-center text-sm text-blue1">
              Don???t Have an Account?{" "}
              <span className="font-bold text-primary">Register</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
