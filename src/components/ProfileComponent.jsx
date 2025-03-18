import { Bell } from "lucide-react";

export default function ProfileComponent() {
  return (
    <div className="flex items-center ">
      <div className="relative w-12 h-12 pr-10 mr-15 bg-white p-2.5 rounded-full">

        <Bell className="w-7 h-7 text-primary-text" />
        <div className="bg-red-500 w-2.5 h-2.5 rounded-full absolute top-2 right-3"></div>

      </div>

      <div className="h-16 rounded-xl bg-white py-2.5 px-3 flex gap-3  items-start content-center">
        <img
          src="https://i.pinimg.com/736x/39/2a/50/392a5042102c7d7e4ed87527a2d7e74a.jpg"
          alt="profile image"
          width={45}
          height={45}
          className="rounded-full"
        />

        <div>
          <p className="capitalize text-base">dark moon</p>
          <p className="text-gray-400 text-sm">darkmoon@gmail.com</p>
        </div>
      </div>
    </div>
  );
}
