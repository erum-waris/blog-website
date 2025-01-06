import React from 'react';

const Heading = ({ text }: { text: string }) => {
  return (
    <div className=" flex justify-center items-center md:w-[14rem] mx-auto h-24 my-5 rounded-lg" style={{
        background: 'linear-gradient(90deg, #FAC67A, #605EA1)', 
      }}>
      <h1 className="text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-900 via-pink-900 to-purple-900 font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl  ">
        {text}
      </h1>
    </div>
  );
};

export default Heading;
