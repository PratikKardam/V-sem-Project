import React from "react";
import { useState } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Ride = () => {
  const [passangers, setPassangers] = useState(false);
  const [plus, setPlus] = useState(0);

  const handleMinus = () => {
    if(plus>0){
    setPlus(plus - 1);
    }
  };
  const handlePlus = () => {
    setPlus(plus + 1);
  };
  return (
    <>
    <Navbar/>
    <div className="text-4xl font-medium text-center texty md:mx-32 mt-20">Become a SwiftRide driver and save on travel costs by sharing your ride with passengers.</div>
      <div className="max-w-sm rounded overflow-hidden my-10 text-[#054652] mx-auto">
        <div>
          <label className="text-gray-400">Where From?</label>
          <input
            className="bg-white p-1 border-[1px] w-full rounded-md outline-none focus:border-yellow-300"
            type="text"
          />
        </div>
        <div className="mt-3">
          <label className="text-gray-400">Where To?</label>
          <input
            className="bg-white p-1 border-[1px] w-full rounded-md outline-none focus:border-yellow-300"
            type="text"
          />
        </div>
        <div className="flex flex-col my-2">
          <button className="flex border-b-[1px]" onClick={() => setPassangers(true)}>
            <svg
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className="kirk-icon w-[30px] h-[30px]"
              role="img"
              aria-hidden="true"
            >
              <g color="var(--_1gzv7bhc)">
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M15.3348 7.41667c0 2.07071-1.6793 3.75003-3.75 3.75003-2.07072 0-3.75-1.67932-3.75-3.75003v-.83334c0-2.07071 1.67928-3.75 3.75-3.75 2.0707 0 3.75 1.67929 3.75 3.75v.83334Zm-8.33334 0C7.00146 9.94762 9.05385 12 11.5848 12c2.5309 0 4.5833-2.05238 4.5833-4.58333v-.83334C16.1681 4.05238 14.1157 2 11.5848 2 9.05385 2 7.00146 4.05238 7.00146 6.58333v.83334ZM20.3335 20.75v-1.7433c0-1.6904-1.1257-3.1725-2.7522-3.6154-2.0325-.5548-4.0791-.8913-5.9978-.8913-1.91873 0-3.96534.3365-5.99806.8914-1.6263.4428-2.75194 1.9249-2.75194 3.6153V20.75c0 .2301.18654.4167.41666.4167H19.9168c.2301 0 .4167-.1866.4167-.4167Zm-2.9714-4.5547c1.2631.344 2.1381 1.4959 2.1381 2.8114v1.3266H3.66683v-1.3266c0-1.3155.87493-2.4674 2.13781-2.8113 1.9672-.537 3.9441-.8621 5.77886-.8621 1.8347 0 3.8117.3251 5.7786.862Z"
                  clipRule="evenodd"
                ></path>
              </g>
            </svg>
            <span className="text-lg">{plus} Passengers</span>
          </button>

          {passangers && (
            <div className="max-w-sm rounded-full overflow-hidden flex gap-4 justify-between  ">
              <img
                onClick={handleMinus}
                src="/public/icons/dash-circle.svg" width={30}
                alt=""
              />
              <span className="text-lg p-3">Quantity</span>
              <img
                onClick={handlePlus}
                src="/public/icons/plus-circle.svg" width={30}
                alt=""
              />
              <button className="w-20 rounded-3xl p-3 text-white bg-[#00a8e9]" onClick={() => setPassangers(false)}>Done</button>
            </div>
          )}

          <div className="text-[#054652] font-medium text-3xl">Save up to <span className="text-[#00a8e9]">₹1,160</span> on your first ride.</div>

          <button className="w-full text-white font-normal rounded-full text-base p-3 bg-[#00a8e9]">Publish a Ride</button>
        </div>
      </div>

      <div className="textyme text-center">Drive.Share.Save</div>
        
      <div className="md:flex justify-center py-10">
      <div className="max-w-sm md:w-1/4 rounded overflow-hidden">
        <div className="texty">Drive.</div>
        <div className="context">Keep your plans! Hit the road just as you anticipated and make the most of your vehicle’s empty seats.</div>
      </div>
      <div className="max-w-sm md:w-1/4 rounded overflow-hidden">
        <div className="texty">Share.</div>
        <div className="context">Travel with good company. Share a memorable ride with travellers from all walks of life.</div>
      </div>
      <div className="max-w-sm md:w-1/4 rounded overflow-hidden">
        <div className="texty">Save.</div>
        <div className="context">Tolls, petrol, electricity… Easily divvy up all the costs with other passengers.</div>
      </div>
      </div>

      <div className="bg-gray-200">
      <div className="textyme md:ml-40 pt-10">We’re here every step of the way</div>
      
      <div className="md:flex gap-10 md:ml-40 pt-2">
     <div className="max-w-sm md:w-1/4 rounded overflow-hidden">
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="kirk-icon py-3 text-[#6f8b90] w-10" role="img" aria-hidden="true" ><g color="var(--_1gzv7bhc)"><path fill="currentColor" d="M21.951,10.281C21.98,10.023,22,9.764,22,9.5C22,4.813,17.29,1,11.5,1C5.71,1,1,4.813,1,9.5c0,1.801,0.691,3.52,2,4.979 V19.5c0,0.173,0.09,0.334,0.237,0.426C3.317,19.975,3.409,20,3.5,20c0.077,0,0.153-0.018,0.224-0.053l4.431-2.215 C9.667,19.752,12.424,21,15.5,21c0.547,0,1.097-0.042,1.636-0.123l4.141,2.07C21.347,22.982,21.424,23,21.5,23 c0.092,0,0.183-0.025,0.263-0.074C21.91,22.834,22,22.673,22,22.5v-3.814c1.292-1.173,2-2.651,2-4.186 C24,12.946,23.27,11.461,21.951,10.281z M3.865,13.943C2.645,12.641,2,11.104,2,9.5C2,5.364,6.262,2,11.5,2S21,5.364,21,9.5 S16.738,17,11.5,17c-1.023,0-2.045-0.135-3.038-0.399c-0.118-0.029-0.244-0.019-0.353,0.036L4,18.691v-4.406 C4,14.158,3.952,14.036,3.865,13.943z M21.176,18.079C21.064,18.175,21,18.313,21,18.46v3.23l-3.561-1.78 c-0.094-0.048-0.203-0.064-0.307-0.046C16.597,19.954,16.047,20,15.5,20c-2.334,0-4.511-0.826-5.917-2.162 C10.219,17.935,10.858,18,11.5,18c4.962,0,9.12-2.804,10.212-6.554C22.543,12.351,23,13.411,23,14.5 C23,15.805,22.353,17.076,21.176,18.079z"></path></g></svg> 

      <div>At your service 24/7</div>
      <div className="context">Our team is at your disposal to answer any questions by email or social media. You can also have a live chat directly with experienced members.</div>
      </div>

      <div className="max-w-sm md:w-1/4 rounded overflow-hidden">
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="kirk-icon py-3 text-[#6f8b90] w-10" role="img" aria-hidden="true" ><g color="var(--_1gzv7bhc)"><path fillRule="evenodd" clipRule="evenodd" d="M20.411 9.673l1.366.903A1.67 1.67 0 0122.5 12v8a1 1 0 01-1 1h-2a1 1 0 01-1-1v-2h-13v2a1 1 0 01-1 1h-2a1 1 0 01-1-1v-7.989a1.678 1.678 0 01.594-1.341c.05-.04.05-.04.089-.068l.035-.023 1.372-.907 1.928-5.104A1.438 1.438 0 016.87 3.5h10.274c.63.017 1.17.452 1.324 1.023l1.943 5.15zM18.5 17h3v-5.011a.686.686 0 00-.264-.572L19.85 10.5H4.151l-1.01.667-.377.25c-.02.013-.02.013-.035.025a.595.595 0 00-.09.094A.694.694 0 002.5 12v5h16zm1 1v2h2v-2h-2zm-17 0h2v2h-2v-2zm16.778-8.5l-1.76-4.668c-.053-.196-.216-.327-.387-.332H6.884c-.185.005-.348.136-.416.377L4.724 9.5h14.554zM4.5 15h3a.5.5 0 000-1h-3a.5.5 0 000 1zm15 0h-3a.5.5 0 010-1h3a.5.5 0 010 1z" fill="currentColor"></path></g></svg>

      <div>SwiftRide at your side</div>
      <div className="context">For just 2 €, benefit from the reimbursement of up to 1,500€ of your excess when you publish a ride as a driver on SwiftRide.</div>
      </div>

      <div className="max-w-sm md:w-1/4 rounded overflow-hidden">
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="kirk-icon py-3 w-10 text-[#6f8b90]" role="img" aria-hidden="true"><g color="hsla(189, 13%, 50%, 1)"><g color="currentColor"><path fill="currentColor" d="M21.65 5.82C17.37 4.76 15.4 3.7 12.42.74a.53.53 0 0 0-.74 0C8.69 3.7 6.73 4.76 2.45 5.82a.52.52 0 0 0-.4.5c0 8.54 2.87 14.24 9.8 17.18.12.06.27.06.4 0 6.93-2.94 9.8-8.64 9.8-17.17a.52.52 0 0 0-.4-.5zm-9.6 16.63C5.83 19.72 3.19 14.57 3.1 6.73c4.02-1.03 6.12-2.15 8.95-4.89 2.83 2.74 4.93 3.86 8.94 4.9-.08 7.83-2.72 12.98-8.94 15.71z"></path><path fill="currentColor" d="M9.26 12.13a.53.53 0 0 0-.74 0c-.2.21-.2.54 0 .75l2.07 2.03c.2.2.53.2.74 0l5.17-5.08c.2-.2.2-.54 0-.74a.53.53 0 0 0-.74 0l-4.8 4.71-1.7-1.67z"></path></g></g></svg>
      <div>100% secure information</div>
      <div className="context">Our team is dedicated to the protection of your data, which is always 100% confidential thanks to monitoring tools, secure navigation and encrypted data.</div>
      </div>
      </div>
      </div>


      <div className="textyme md:ml-40 pt-10">FAQs</div>
      <ol className="md:ml-40 texty py-5">
        <li>How do I set the passenger contribution for my ride?</li>
        <li>When do I get my money?</li>
        <li>What should I do if there’s an error with my ride?</li>
        <li>How do I cancel a carpool ride as a driver of a ride?</li>
      </ol>
      <Footer/>
    </>
  );
};

export default Ride;
