import React from 'react';

const Heading2 = ({ text }: { text: string }) => {
  return (
    <div className="flex justify-center items-center md:max-w-max mx-auto h-fit  my-5 rounded-lg" style={{
        background:'linear-gradient(90deg, #FAC67A, #CDC1FF)',
        padding:"1rem" 
      }}>
      <h1 className="text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-900 via-pink-900 to-purple-900 font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl  ">
        {text}
      </h1>
    </div>
  );
};

export default Heading2;
