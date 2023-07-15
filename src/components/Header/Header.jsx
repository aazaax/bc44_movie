import React from "react";
import UserNav from "./UserNav";

export default function Header() {
  return (
    <div className="">
      <div className="container h-20 flex justify-between items-center">
        <span className="text-2xl font-bold text-red-500">CyberFlix</span>
        <UserNav />
      </div>
    </div>
  );
}
