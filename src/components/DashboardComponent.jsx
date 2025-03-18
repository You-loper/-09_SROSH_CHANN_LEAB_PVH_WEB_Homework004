import React from "react";
import { dashboard } from "../data/dashboard";

export default function DashboardComponent(props) {
  return (
    <div className="fixed top-25" >
      <h2 className="text-xl font-semibold mb-5">Dashboard</h2>
      

      {/* display summary on each card */}
      {/* {dashboard.map(item => 
        <div className="flex gap-5" key={item.id}>
          <div className="flex bg-white gap-5 py-3.5 px-4 rounded-xl w-auto">
            <div className={`p-3 rounded-xl ${item.color}`}>
              <img src="/fi-sr-file.svg" alt={item.icon} />
            </div>
            <div>
              <p className="text-l font-semibold">{item.totalTasks}</p>
              <p className={"text-gray-400"}>{item.label}</p>
            </div>
          </div>
        </div>
        )} */}
      <div className="flex flex-row gap-[14px]">
        {dashboard.map(item => 
        <div className="flex gap-2" key={item.id}>
          <div className="flex bg-white gap-3 p-2 rounded-xl w-[180px]">
            <div className={`p-2 w-10 h-10 rounded-xl  ${item.color}`}>
              <img src="/fi-sr-file.svg " alt={item.icon} />
            </div>
            <div>
              <p className="text-[14px] font-semibold">{item.totalTasks}</p>
              <p className={"text-gray-400 text-[12px]"}>{item.label}</p>
            </div>
          </div>
        </div>
        )}
      </div>


    </div>
  );
}
