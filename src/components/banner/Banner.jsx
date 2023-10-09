import React from "react";

const Banner = () => {
  return (
    <div className="w-full h-full">
      <div
        className="bg-cover bg-center py-20 text-white bg-[url('https://i.ibb.co/BfTyn66/markus-spiske-Mb-G7kw-Wpt-II-unsplash.jpg')] bg-opacity-30"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
      >
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold">Corporate Events Hub</h1>
        </div>
      </div>
    </div>
  );
};

export default Banner;
