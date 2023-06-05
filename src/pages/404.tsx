import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Button from "@/@common/Button";

const PageNotFound = () => {
  const router = useRouter();

  return (
    <div className="bg-[#FAFAFA]  h-screen flex items-center justify-center relative">
      <div className="top-0 left-0 bg-orange h-[50vh] bg-opacity-80 w-[50vw] absolute z-0" />
      <div className="top-1/2 left-1/2 bg-orange h-[50vh] bg-opacity-80 w-[50vw] absolute z-0" />
      <div className="z-20 flex flex-col justify-center items-center gap-1 border-orange bg-[#FAFAFA]  border-4 border-opacity-30 rounded-lg px-44 py-20">
        <h2 className="text-[78px] font-bold text-orange text-opacity-50">
          404
        </h2>
        <p className="text-2xl text-heading">Something went Wrong</p>
        <Button
          onClick={() => router.push("/")}
          className="py-2 px-8 my-4"
          childrenClassName="!font-bold !leading-6 !text-base"
          type="primary"
        >
          <span>GO BACK HOME</span>
        </Button>
      </div>
    </div>
  );
};

export default PageNotFound;
