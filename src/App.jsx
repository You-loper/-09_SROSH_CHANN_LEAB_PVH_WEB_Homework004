import { LayoutDashboard, Sidebar } from "lucide-react";
import "./App.css";
import Button from "./components/Button";
import SidebarComponent from "./components/SidebarComponent";
import DashboardComponent from "./components/DashboardComponent";
import TopNavbarComponent from "./components/TopNavbarComponent";
import LearningMaterialsComponent from "./components/LearningMaterialsComponent";
import AssignmentsComponent from "./components/AssignmentsComponent";
import ProfileComponent from "./components/ProfileComponent";
import AddNewProjectComponent from "./components/AddNewProjectComponent";
import CardComponent from "./components/CardComponent";
import { useState } from "react";
function App() {
  const [dataInput , setDataInput] = useState("");
  console.log(dataInput)
  const [getdata, setData] = useState([
    {
      description: "rrrrrr",
      dueDate: "2025-03-15",
      progress: "75",
      projectName: "tgtttt",
      id: 123,
    },
  ]);
  const filter = getdata.filter((data) => (
     data.projectName.toLowerCase().includes(dataInput.toLowerCase())
  ))
  console.log("getdata ", getdata);
  console.log("filter ", filter);
  return (
    <>
      <main className="grid grid-cols-12 w-full h-screen ">
        <aside className="col-span-2">
          <SidebarComponent />
        </aside>

        <div className="col-span-10 pl-10 grid grid-cols-9 gap-8  bg-gray-300">
          <div className="col-span-6 pl-2 p-4 flex flex-col gap-4">
            <div>
              <TopNavbarComponent getDataInput={(e) =>{
                setDataInput(e);
              }} />
            </div>
            <div className="flex flex-row gap-4">
              <DashboardComponent />
            </div>
            <div>
              <AddNewProjectComponent value={setData} />
            </div>
            <div className="">
              <AssignmentsComponent />
            </div>
            <div className="grid grid-cols-3 gap-5 mt-[200px] overflow-auto h-[60vh]  no-scrollbar">
              {filter.map((data, index) => (
                <CardComponent
                  key={index}
                  title={data.projectName}
                  date={data.dueDate}
                  progress={data.progress}
                  description={data.description}
                />
              ))}
            </div>
          </div>

          <div className="col-span-3 flex flex-col p-5 gap-8">
            {/* <ProfileComponent/> */}
            <div >
              <ProfileComponent />
            </div>
            <LearningMaterialsComponent />
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
