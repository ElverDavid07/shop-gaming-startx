import React from "react";
import { RiImageFill } from "react-icons/ri";
const Skeleton = () => {
 return (
  <div className="w-[300px] h-[200px] bg-gray-200 rounded-lg animate-pulse ">
   {" "}
   <RiImageFill className="text-gray-400 mx-auto mt-20 text-4xl"/>
  </div>
 );
};

export default Skeleton;
