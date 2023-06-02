import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDollarSign } from "@fortawesome/free-solid-svg-icons";

const Earning = ( ) => {

   const [date, setdate] = useState(new Date());

    
      
    return (
    <div className="p-4 sm:ml-64">
      <div className="container mx-auto py-8 mt-24">
        <h1 className="text-5xl font-semibold mb-14">Earning Page</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-white rounded-lg shadow-md p-4">
            <img src={require("../images/earn.jpg")} />
            <h1 className="text-4xl font-serif mb-2">Weekly Earn</h1>
            <p className="text-gray-600">
              Earnings: <FontAwesomeIcon icon={faDollarSign} />
              100
            </p>
            <p className="text-gray-600"></p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-4">
            <img src={require("../images/earn.jpg")} />
            <h1 className="text-4xl font-serif mb-2">Monthly Earn</h1>
            <p className="text-gray-600">
              Earnings: <FontAwesomeIcon icon={faDollarSign} />
              100
            </p>
            <p className="text-gray-600"></p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-4">
            <img src={require("../images/earn.jpg")} />
            <h1 className="text-4xl font-serif mb-2">Yearly Earn</h1>
            <p className="text-gray-600">
              Earnings: <FontAwesomeIcon icon={faDollarSign} />
              100
            </p>
            <p className="text-gray-600">Date: May 31, 2023</p>
          </div>
          {/* Add more earning cards as needed */}
        </div>
      </div>
    </div>
  );
};

export default Earning;
