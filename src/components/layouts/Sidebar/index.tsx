"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import React, { FC } from "react";

import {
  AiOutlineHome,
  AiOutlineMessage,
  AiOutlineTeam,
  AiOutlineSchedule,
  AiOutlineSetting,
  AiOutlineLogout,
} from "react-icons/ai";
import {
  HiOutlineBuildingOffice2,
  HiOutlineClipboardDocumentList,
} from "react-icons/hi2";

interface SidebarProps {}

const Sidebar: FC<SidebarProps> = ({}) => {
  const router = useRouter();

  return (
    <div className="pb-12 min-h-screen">
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold">Dashboard</h2>
          <div className="space-y-3">
            <Button
              variant={"ghost"}
              className="w-full justify-start rounded-none hover:text-primary"
              onClick={() => router.push("/")}
            >
              <AiOutlineHome className="mr-2 text-lg" />
              Home
            </Button>
            <Button
              variant={"ghost"}
              className="w-full justify-start rounded-none hover:text-primary"
            >
              <AiOutlineMessage className="mr-2 text-lg" />
              Messages
            </Button>
            <Button
              variant={"ghost"}
              className="w-full justify-start rounded-none hover:text-primary"
            >
              <HiOutlineBuildingOffice2 className="mr-2 text-lg" />
              Company Profile
            </Button>
            <Button
              variant={"ghost"}
              className="w-full justify-start rounded-none hover:text-primary"
            >
              <AiOutlineTeam className="mr-2 text-lg" />
              All Applicants
            </Button>
            <Button
              variant={"ghost"}
              className="w-full justify-start rounded-none hover:text-primary"
              onClick={() => router.push("/job-listings")}
            >
              <HiOutlineClipboardDocumentList className="mr-2 text-lg" />
              Job Listings
            </Button>
            <Button
              variant={"ghost"}
              className="w-full justify-start rounded-none hover:text-primary"
            >
              <AiOutlineSchedule className="mr-2 text-lg" />
              My Schedules
            </Button>
          </div>
        </div>
      </div>
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold">Settings</h2>
          <Button
            variant={"ghost"}
            className="w-full justify-start rounded-none hover:text-primary"
          >
            <AiOutlineSetting className="mr-2 text-lg" />
            Settings
          </Button>
          <Button
            variant={"ghost"}
            className="w-full text-red-500 hover:bg-red-200 hover:text-red-500 justify-start rounded-none"
          >
            <AiOutlineLogout className="mr-2 text-lg" />
            Logout
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
