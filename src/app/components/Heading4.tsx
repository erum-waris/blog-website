import React from 'react';

const Heading4 = ({ text }: { text: string }) => {
  return (
    <div className="max-w-max my-2 h-fit rounded-lg" style={{
        background:'linear-gradient(90deg, #FFC145, #A5BFCC)',
        padding:"0.5rem" 
      }}>
      <h3 className="text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-900 via-pink-900 to-purple-900 font-bold text-xl sm:text-2xl md:text-3xl  ">
        {text}
      </h3>
    </div>
  );
};

export default Heading4;
