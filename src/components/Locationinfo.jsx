import React from "react";

const Locationinfo = ({ currentLocation }) => {
  return (
    <section className="bg-black text-white border border-green-500 rounded p-4 flex flex-col md:flex-row items-start md:items-center">
      <div className="mr-4">
        <h2 className="text-2xl font-bold mb-2">{currentLocation?.name}</h2>
      </div>
      <div className="flex flex-col md:flex-row">
        <div className="md:mr-4">
          <span className="font-semibold text-green-500">Type:</span>{" "}
          {currentLocation?.type}
        </div>
        <div className="md:mr-4">
          <span className="font-semibold text-green-500">Dimension:</span>{" "}
          {currentLocation?.dimension}
        </div>
        <div>
          <span className="font-semibold text-green-500">Population:</span>{" "}
          {currentLocation?.residents.length}
        </div>
      </div>
    </section>
  );
};

export default Locationinfo;
