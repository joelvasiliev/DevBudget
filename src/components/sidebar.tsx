 
"use client";

import Image from "next/image";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";
import { Banknote, Bell, ChartArea, History, LogOut } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { DialogSignOut } from "./dialog-sign-out";
import { NotificationsSheet } from "./notifications-sheet";

import { TbTimeline } from "react-icons/tb";
import { ExpandUserPopover } from "./expand-user-popover";

function CSeparator() {
    return (
        <div className="w-full flex justify-center mb-2 mt-2">
            <Separator className="w-[60%] bg-background-foreground" />
        </div>
    );
}

export function Sidebar({ children }: { children: React.ReactNode }) {
    const pathname = usePathname().split("/")[1];
    const router = useRouter();
  
    function parsePageName(pathname: string) {
        switch (pathname.trim()) {
          case "":
          case "dashboard":
            return "Dashboard";
        }
      }

    return (
        <div className="flex h-screen">
            <div className="flex flex-col w-[5%] p-4 space-y-4 items-center border-r border-background-foreground">
                {/* Logo */}
                <div className="mb-6 flex items-center justify-center">
                    <Image
                        alt="Site Logo"
                        src="https://img.freepik.com/free-vector/flat-design-atheism-logo-template_23-2149242249.jpg?semt=ais_hybrid"
                        width={50}
                        height={50}
                    />
                </div>

                {/* Navigation Buttons */}
                <div className="flex flex-col flex-grow space-y-3">
                    <Button
                        variant="ghost"
                        onClick={()=>{
                            router.push("/dashboard")
                        }}
                        className={`text-gray-400 h-[45px] ${
                            pathname === "dashboard" && "bg-secondary/40 text-secondary"
                        }`}
                    >
                        <ChartArea />
                    </Button>
                    <Button
                        variant="ghost"
                        onClick={()=>{
                            router.push("/timeline")
                        }}
                        className={`text-gray-400 h-[45px] ${
                            pathname === "timeline" && "bg-secondary/40 text-secondary"
                        }`}
                    >
                        <TbTimeline size={24} />
                    </Button>
                    <Button
                        variant="ghost"
                        onClick={()=>{
                            router.push("/history")
                        }}
                        className={`text-gray-400 h-[45px] ${
                            pathname === "" && "bg-secondary/40 text-secondary"
                        }`}
                    >
                        <History />
                    </Button>
                    <Button
                        onClick={()=>{
                            router.push("/budget")
                        }}
                        variant="ghost"
                        className={`text-gray-400 h-[45px] ${
                            pathname === "" && "bg-secondary/40 text-secondary"
                        }`}
                    >
                        <Banknote />
                    </Button>
                    <CSeparator />
                </div>

                {/* Separator */}
                <CSeparator />

                {/* Logout Button */}
                <div className="flex justify-center mt-auto">
                    <DialogSignOut>
                        <Button variant="ghost" className="text-secondary">
                            <LogOut />
                        </Button>
                    </DialogSignOut>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex flex-col w-full h-full">
                <div className="w-full h-[12%] p-8 pb-4 flex items-center justify-between">
                    <h1 className="font-semibold text-[42px] text-white ml-6">{parsePageName(pathname)}</h1>
                    <div className="flex space-x-4 items-center">
                        <NotificationsSheet>
                            <Button className="text-white w-[50px] h-[50px] bg-background-foreground rounded-full">
                                <Bell/>
                            </Button>
                        </NotificationsSheet>
                        <ExpandUserPopover>
                            <Button className="rounded-full w-[75px] h-[75px]  border border-secondary">
                                USER
                            </Button>
                        </ExpandUserPopover>
                    </div>
                </div>
                <div className="h-full w-full p-12">{children}</div>
            </div>
        </div>
    );
}
