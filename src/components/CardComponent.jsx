import { EllipsisVertical } from "lucide-react";
import React from "react";

export default function CardComponent({title,date,progress,description}) {

  const getBgColor = () => {
    if (progress <= 25) return "bg-custom-pink";
    if (progress <= 50) return "bg-custom-yellow-500";
    if (progress <= 75) return "bg-custom-carrot";
    return "bg-custom-sky-blue"; // 100%
  };
  const formatDate = (dateString) =>{
    if(!dateString) return "";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "2-digit",
      year: "numeric"
    });
  };
  const getDayLeft = (date) =>{
    if(!date) return "N/A";

    const due = new Date(date);
    const today = new Date();

    const diffTime = due - today;
    const diffDay = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    return diffDay > 0 ? `${diffDay} days left ` : "Due date passed";

  }

  return (
    <div className="">
      <div className="w-[250px] h-[230px] p-3 bg-white rounded-2xl shadow-sm dark:bg-gray-800 dark:border-gray-700">
        <div className="flex justify-between mb-3">
          {/* date */}
          <p className={`font-medium text-[14px] `}>{formatDate(date)}</p>
          <EllipsisVertical size={15} color="#374957" />
        </div>

        <h5 className="capitalize mb-2 text-lg font-semibold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>
        <p className="line-clamp-2 mb-3 font-normal text-[12px] text-justify text-gray-400 dark:text-gray-400">
          {description}
        </p>

        {/* progress bar */}
        <div className="w-full flex justify-between text-[12px] font-medium mb-1">
          <p>Progress</p>
          <p>{progress}%</p>
        </div>
        <div className="relative mb-5 w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
          {/* <div className={`h-2.5 rounded-full ${getBgColor()}`}></div> */}
          {progress === '100' ? <div className={`h-2.5 rounded-full bg-custom-sky-blue`}></div>:(progress === '75'?<div className={`h-2.5 rounded-full bg-custom-carrot w-[75%]`}></div>:(progress ==='50'?<div className={`h-2.5 rounded-full bg-custom-yellow w-[50%]`}></div>:(progress==='25' ?<div className={`h-2.5 rounded-full bg-custom-pink w-[25%]`}></div>:"" )))}

        
        </div>

        {/* deadline */}
        <div className="flex justify-end">
          <p className="font-medium bg-light-gray py-1.5 px-4 rounded-lg max-w-28 text-center">
            {getDayLeft(date)}
          </p>
        </div>
      </div>
    </div>

    
  );
}
