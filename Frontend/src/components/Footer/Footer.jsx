import React from "react";
const Footer = () => {
  return (
   <>

 <footer className="bottom-0">
      <div className="my-5 flex py-10 justify-around bg-gray-200">
        <div className="flex gap-10 mx-10">
        <div className="flex flex-col gap-6 texty">
          <div className="font-medium text-2xl pb-7">Top carpool routes</div>
          <div className="hover:text-[#00a8e9] cursor-pointer">Delhi &rarr; Chandigrah</div>
          <div className="hover:text-[#00a8e9] cursor-pointer">Mumbai &rarr; Pune</div>
          <div className="hover:text-[#00a8e9] cursor-pointer">Kanpur &rarr; Lucknow</div>
          <div className="hover:text-[#00a8e9] cursor-pointer">Bengaluru &rarr; Chennai</div>
          <div className="hover:text-[#00a8e9] cursor-pointer">Pune &rarr; Mumbai</div>
          <div className="hover:text-[#00a8e9] cursor-pointer">All carpool routes</div>
          <div className="hover:text-[#00a8e9] cursor-pointer">All carpool destinations</div>
        </div>
        <div className="flex flex-col gap-6 texty">
          <div className="font-medium text-2xl pb-7">About</div>
          <div className="hover:text-[#00a8e9] cursor-pointer">How It Works</div>
          <div className="hover:text-[#00a8e9] cursor-pointer">About Us</div>
          <div className="hover:text-[#00a8e9] cursor-pointer">Help Centre</div>
          <div className="hover:text-[#00a8e9] cursor-pointer">Press</div>
          <div className="hover:text-[#00a8e9] cursor-pointer">We&apos;re Hiring</div>
        </div>
        </div>
        <div>
          <button className="text-[#00a8e9] border-[1px] rounded-3xl p-3">
            Language-English(India)
          </button>
        </div>
      </div>

      <div className="flex justify-around my-7 text-[#6f8b90]">
        <span className="hover:text-[#00a8e9] cursor-pointer">Terms And Conditions</span>
        <span className="">SwiftRide,2024 &copy;</span>
      </div>
      </footer>
      </>
  );
};

export default Footer;
