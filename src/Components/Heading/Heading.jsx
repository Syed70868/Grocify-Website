import React from 'react';

const Heading = (props) => {
  return (
    <div className="mx-auto w-fit">
      <h2 className="md:text-5xl text-[35px] font-bold">
        <span className="text-orange-500">{props.spanText}</span> {props.text}
      </h2>
      <div className="w-34 md:mt-4 mt-1 h-1 bg-orange-300 ml-auto"></div>
    </div>
  );
};

export default Heading;
