import React from "react";
import { FaStar } from "react-icons/fa";
import { HiOutlineLightningBolt } from "react-icons/hi";

export default function HomeHero() {
  return (
    <section className="w-full min-h-[720px] bg-gradient-to-br from-brand-light to-brand-dark">
      {/* Text Part */}

      <div className="relative w-full min-h-[720px] flex flex-col items-center text-white">
        {/* Main part of the hero */}
        <div className="max-w-7xl w-full flex-1 px-8 flex flex-col items-center lg:flex-row">
          {/* Text part */}
          <div className="lg:w-1/2 pt-24 lg:pt-0 flex flex-col items-center lg:justify-center">
            <p className="uppercase mb-3 text-center text-brand-dark font-soleil-bold">
              We help you grow your company
            </p>
            <p className="text-white text-center lg:text-left font-soleil-bold text-4xl mb-12">
              Business loans with{" "}
              <span className="inline-block lg:inline">
                <Highlight>low interest</Highlight>
                and <Highlight>no burocracy</Highlight>
              </span>
            </p>
            <div className="flex itens center mb-9 p-2 rounded-md bg-brand-dark bg-opacity-20">
              <input
                placeholder={`How much do you need?`}
                type="number"
                className="w-[240px] text-center mr-2 h-14 rounded-md bg-white bg-opacity-60 placeholder:text-brand-dark placeholder:text-center placeholder:text-sm text-brand-dark focus:outline-none focus:placeholder:text-transparent"
              />
              <button className="bg-brand-light text-sm font-soleil-bold rounded-md text-brand-dark px-4">
                Simulate Loan
              </button>
            </div>
            <p>
              Want to be an investor and have yieldings of up to 30%?{" "}
              <a href="/#howitworks" className="font-soleil-bold underline">
                Find out more
              </a>
            </p>
          </div>
          {/* Phone with app part */}
          <div className="relative lg:w-1/2">
            <p className="absolute top-16 left-20">
              <HiOutlineLightningBolt className="mr-2 mb-0.5 inline text-2xl " />
              Have your own digital wallet!
            </p>
            <img
              className="z-30 md:w-[450px] lg:w-[550px]"
              src="/hero-app.png"
            />
          </div>
        </div>
        {/* Footer of the Hero */}

        <div className=" z-10 w-full border-t border-white border-opacity-50 flex justify-center">
          <div className="max-w-7xl w-full h-28 flex items-center p-2 ">
            <div className="flex-1 flex items-center justify-center p-2">
              <div className="p-2 rounded-full border mr-2">
                <img src="/icons/dividends.svg" />
              </div>
              Competitive Interest Rates
            </div>
            <div className="w-[1px] opacity-50 bg-white h-2/5" />
            <div className="flex-1 flex items-center justify-center p-2">
              <div className="p-2 rounded-full border mr-2">
                <img src="/icons/pay-date.svg" />
              </div>
              Pay over 24 months
            </div>
            <div className="flex-1 flex flex-col items-center justify-center p-2">
              <div>Customer ratings</div>
              <div className="font-soleil-regular text-xs">
                <span className="flex">
                  <FaStar className="text-brand-light mr-0.5" />
                  <FaStar className="text-brand-light mr-0.5" />
                  <FaStar className="text-brand-light mr-0.5" />
                  <FaStar className="text-brand-light mr-0.5" />
                  <FaStar className="text-brand-light mr-2" />
                  4.9 out of 5
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const Highlight = ({ children }: { children: string }) => {
  return (
    <span className="relative mr-2 inline-block">
      <span
        className="block absolute -inset-1 mt-3 mb-2 bg-brand-light"
        aria-hidden="true"
      />
      <span className="relative">{children}</span>
    </span>
  );
};
