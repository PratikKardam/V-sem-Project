import React from "react";

function Navbar() {
  return (
    <>
      <nav className="flex gap-6 border-b-[1px] shadow-md justify-between fixed top-0 w-full bg-white ">
        <div className="font-bold text-4xl p-2 flex">
          <img
            className="pb-6"
            src="/public/icons/icon.png"
            width={40}
            alt=""
          />
          <span className="bg-yellow-500 rounded-md pt-2">Swift</span>
          <span className="text-yellow-500 pt-2">Ride</span>
        </div>
          <div className="flex md:gap-6  ">
            <span className="py-6 flex gap-1"><img className="pb-1" src="/public/icons/search.svg" width={15} alt="" />Search</span>
          <span className="py-6 flex gap-1"><img className="pb-1" src="/public/icons/plus-circle.svg" width={15} alt="" />Publish a Ride</span>
          <img className='float-right py-4' src="/public/icons/user.jpg" width={40} alt="" />
          </div>

      </nav>
    </>
  );
}

export default Navbar;
