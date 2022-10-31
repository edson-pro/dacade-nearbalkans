import Head from "next/head";
import Link from "next/link";
import { Fragment, useState } from "react";
import Button from "../components/Button";
export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>NEAR dev 101</title>
        <meta
          name="description"
          content="Get NEAR Certified with NEAR Balkans and Dacade."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="hero bg-white px-6 mx-auto pt-0 lg:pt-28 container-wrapper lg:px-0 font-primary relative h-[600px] lg:h-[500px] w-full">
        <div class="text-center lg:max-w-4xl mx-auto pt-12">
          <h1 class="lg:text-7xl lg:w-full w-48 mx-auto font-medium text-3xl text-title-color">
            Get{" "}
            <span class="bg-gradient-to-t from-[#9092fb] to-[#7bdde2] text-transparent bg-clip-text ">
              NEAR
            </span>{" "}
            Certified!
          </h1>
          <p class=" pt-5 pb-24 lg:text-xl text-lg text-text-color leading-7">
            We, in NEAR Balkans, know how important it is to have regional and
            local support. Now you can become NEAR certified in a regional
            language of preference and connect with our team to support your
            further growth within the NEAR ecosystem.
          </p>
          <div class="mx-auto text-center ">
            <a href="#learning">
              <svg
                width={28}
                height={28}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mx-auto"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M26.25 14c0-6.765-5.485-12.25-12.25-12.25S1.75 7.235 1.75 14 7.235 26.25 14 26.25 26.25 20.765 26.25 14ZM0 14C0 6.268 6.268 0 14 0s14 6.268 14 14-6.268 14-14 14S0 21.732 0 14Zm13.125-6.125a.875.875 0 0 1 1.75 0v10.138l3.756-3.757a.875.875 0 1 1 1.238 1.238l-5.25 5.25a.875.875 0 0 1-1.238 0l-5.25-5.25a.875.875 0 1 1 1.238-1.238l3.756 3.757V7.875Z"
                  fill="#676767"
                  opacity="0.3"
                />
              </svg>
            </a>
          </div>
        </div>
        <div class="hero__gradient hero__gradient--right"></div>
        <div class="hero__gradient hero__gradient--left"></div>
      </div>

      <div id="learning" className="my-16 content-wrapper mx-auto ">
        <h4
          className="text-center text-title-color
          font-medium text-3xl lg:text-5xl leading-7 lg:leading-[55px]
          -tracking-tighter"
        >
          Making your NEAR <br /> learning easy.
        </h4>
      </div>
      <div className="create-wallet max-w-5xl grid-cols-1 grid mt-32 px-5  lg:grid-cols-2 gap-5 mx-auto ">
        <div className="flex  lg:order-1 order-2 items-center lg:items-start flex-col justify-center font-primary text-center lg:text-left">
          <h1 className="text-title-color font-medium text-2xl text-center lg:text-left lg:text-4xl leading-[44px] tracking-[-0.02em]">
            Open NEAR wallet
          </h1>
          <p className="text-text-color my-2 font-normal text-base lg:text-lg lg:leading-6 pt-[6px]">
            <span className="hidden lg:block">
              Opening a NEAR wallet is the first step and
              <br /> essential part of joining the NEAR community
              <br /> as well as starting this course.
            </span>
            <span className="block lg:hidden">
              Opening a NEAR wallet is the first step and an essential part of
              joining the NEAR community as well as starting this course.
            </span>
          </p>
          <Link href="/create-wallet" className="mt-5 block">
            <Button variant="outlined">Create Wallet</Button>
          </Link>
        </div>
        <div className="create-wallet__right h-full relative lg:order-2 order-1 w-full flex justify-center lg:justify-end items-center">
          <img
            className="lg:w-[290px] z-10 relative lg:h-[290px] w-[180px] h-[180px]"
            src="/images/m.png"
            alt=""
          />
          <div class="create-wallet__right-gradient"></div>
        </div>
      </div>
      <div className="max-w-5xl  mt-16 mx-auto ">
        <div className="flex  items-center  justify-center">
          <svg
            width={164}
            height={132}
            className="hidden lg:block"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M162.489 120.017c-1.318 1.354-6.103 10.6-6.633 10.823m0 0c-.452.191-3.298-5.156-5.992-10.538m5.992 10.538c5.012-24.418-17.84-38.27-35.281-47.719-21.097-11.429-38.904-16.188-56.95-24.111C37.13 47.379 3.943 29.436 1.568 1.984"
              stroke="#676767"
              strokeWidth={2}
              strokeMiterlimit="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className="complete-course relative grid grid-cols-1 lg:grid-cols-2 gap-5">
          <div className="justify-center lg:justify-start items-center flex  z-10 relative ">
            <img
              className="lg:w-[296px] lg:h-[296px] w-[180px] h-[180px]"
              src="/images/target.svg"
              alt=""
            />

            <div class="complete-course__gradient "></div>
          </div>
          <div className="flex items-center lg:items-start flex-col justify-center ">
            <h1 class="text-title-color font-medium text-2xl lg:text-4xl leading-[44px] tracking-[-0.02em] relative">
              Complete the course
            </h1>
            <p class="text-text-light-color text-lg leading-6 mt-6">
              In three simple modules, learn:
            </p>
            <div>
              <div className="flex gap-x-3 gap-y-2 lg:items-end items-center lg:flex-row flex-col mt-6">
                <div className="lg:h-8 lg:w-8 h-5 w-5">
                  <img src="/images/media_essential.png" alt="" />
                </div>
                <p className="text-text-light-color font-normal text-base lg:text-lg lg:leading-6 ">
                  Essential NEAR concepts
                </p>
              </div>{" "}
              <div className="flex gap-x-3 gap-y-[10px] lg:items-end items-center lg:flex-row flex-col mt-6">
                <div className="lg:h-8 lg:w-8 h-5 w-5">
                  <img src="/images/media_contract.png" alt="" />
                </div>
                <p className="text-text-light-color font-normal text-base lg:text-lg lg:leading-6 ">
                  How to write smart contracts on NEAR
                </p>
              </div>{" "}
              <div className="flex gap-x-3 gap-y-[10px] lg:items-end items-center lg:flex-row flex-col mt-6">
                <div className="lg:h-8 lg:w-8 h-5 w-5">
                  <img src="/images/media_code.png" alt="" />
                </div>
                <p className="text-text-light-color font-normal text-base lg:text-lg lg:leading-6 ">
                  How to build dapps on the NEAR blockchain
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-5xl  mt-16 mx-auto ">
        <div className="flex flex-col items-center justify-center">
          <svg
            className="hidden lg:block"
            width={164}
            height={132}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.511 120.017c1.318 1.354 6.103 10.6 6.633 10.823m0 0c.452.191 3.298-5.156 5.992-10.538M8.144 130.84c-5.012-24.418 17.84-38.27 35.281-47.719C64.522 71.692 82.33 66.933 100.376 59.01c26.494-11.631 59.68-29.574 62.055-57.026"
              stroke="#676767"
              strokeWidth={2}
              strokeMiterlimit="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <div className="my-5 px-4">
            <div className="text-center mx-auto">
              <h1 className="text-title-color  text-center font-medium text-2xl lg:text-4xl leading-[44px] tracking-[-0.02em] relative">
                Claim NEAR certificate
              </h1>
              <p className="text-text-color font-normal text-lg leading-6 text-center">
                <span className="hidden lg:block">
                  Upon course completion, receive the NEAR dev 101
                  <br /> certificate as an NFT on your NEAR wallet.
                </span>
                <span className="block lg:hidden">
                  Upon course completion, receive the NEAR dev 101 certificate
                  as an NFT on your NEAR wallet.
                </span>
              </p>
            </div>
            <div className="max-w-2xl mx-auto my-8 px-3">
              <img src="/images/certificate.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className=" start-course grid-cols-1 px-10 lg:px-32  relative lg:grid-cols-2 grid mb-20 mt-32 gap-5 mx-auto ">
        <div className="flex lg:order-1 order-2 items-center lg:items-start flex-col justify-center font-primary text-center lg:text-left">
          <h1 className="text-title-color font-medium text-2xl text-center lg:text-left lg:text-4xl leading-[44px] tracking-[-0.02em]">
            NEAR Development 101
          </h1>

          <div className="my-3">
            <Button variant="outlined">Start the course</Button>
          </div>
        </div>
        <div className="h-full relative z-50  lg:order-2 order-1 w-full flex justify-center lg:justify-end items-center">
          <img
            className="lg:w-[400px] lg:h-[400px] w-[180px] h-[180px]"
            src="/images/ml.png"
            alt=""
          />
        </div>
        <div className="start-course__gradient "></div>
      </div>
    </Fragment>
  );
}
