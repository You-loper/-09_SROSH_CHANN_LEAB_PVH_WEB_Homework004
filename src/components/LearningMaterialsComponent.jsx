import React, { useState } from "react";
import { Star } from "lucide-react";
import FilterComponent from "./FilterComponent";
import { learningMaterials } from "../data/learningMaterials";

export default function LearningMaterialsComponent() {
  const [matter, setMaterial] = useState(learningMaterials);
  const [sorted, setSorted] = useState("");

  const sortdata = [...matter].sort((a, b) => {
    if (sorted === "A-Z") {
      return a.title.localeCompare(b.title);
    } else if (sorted === "Z-A") {
      return b.title.localeCompare(a.title);
    } else {
      return 0;
    }
  });

  function handleFav(id) {
    setMaterial((prevState) => {
      return prevState.map((items) =>
        items.id == id ? { ...items, isFavorite: !items.isFavorite } : items
      );
      // console.log("newMa   tter",newMater)
      // setMaterials(newMater)
    });
  }

  return (
    // MaterialsComponent
    <div className="bg-white drop-shadow-lg rounded-xl overflow-auto h-[80vh]">
      {/* calling filter component */}
      <FilterComponent setSorted={setSorted} />

      {/* title */}
      <div className="p-4 flex justify-between items-center">
        <h2 className="text-xl font-semibold">Learning Materials</h2>
        <img src="/more.svg" alt="three dot" width={30} height={30} />
      </div>

      {/* materials list */}

      {sortdata.map((item) => (
        <div key={item.id} className="space-y-3">
          <div className="bg-light-gray px-4 py-2 flex gap-5 items-center">
            <img
              src={item.image}
              alt="HTML5"
              width={50}
              height={50}
              className="rounded-xl"
            />

            <div className="w-full">
              <div className="flex justify-between">
                <p className="text-base font-medium">{item.title}</p>
                <Star
                  onClick={() => handleFav(item.id)}
                  className={`cursor-pointer ${
                    item.isFavorite
                      ? "text-gray-500  fill-amber-500"
                      : "text-gray-500"
                  }`} 
                  size={24}
                />
              </div>
              <p className="text-gray-400 text-sm">{item.postedAt}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
