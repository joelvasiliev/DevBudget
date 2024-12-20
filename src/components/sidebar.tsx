"use client";

import Image from "next/image";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";
import { Banknote, ChartArea, History, LogOut } from "lucide-react";
import { usePathname } from "next/navigation";
import React from "react";

function CSeparator() {
    return (
        <div className="w-full flex justify-center">
            <Separator className="w-[60%] bg-background-foreground" />
        </div>
    );
}

export function Sidebar({ children }: { children: React.ReactNode }) {
    const pathname = usePathname().split("/")[1];

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
                        className={`text-gray-400 h-[45px] ${
                            pathname === "dashboard" && "bg-secondary/40 text-secondary"
                        }`}
                    >
                        <ChartArea />
                    </Button>
                    <Button
                        variant="ghost"
                        className={`text-gray-400 h-[45px] ${
                            pathname === "" && "bg-secondary/40"
                        }`}
                    >
                        <History />
                    </Button>
                    <Button
                        variant="ghost"
                        className={`text-gray-400 h-[45px] ${
                            pathname === "" && "bg-secondary/40"
                        }`}
                    >
                        <Banknote />
                    </Button>
                </div>

                {/* Separator */}
                <CSeparator />

                {/* Logout Button */}
                <div className="flex justify-center mt-auto">
                    <Button variant="ghost" className="text-secondary">
                        <LogOut />
                    </Button>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex flex-col w-full h-full">
                <div className="w-full h-[12%] p-8 pb-4 flex items-center">
                    <h1 className="font-semibold text-[42px] text-white ml-6">Título</h1>
                </div>
                <div className="h-full w-full">{children}</div>
            </div>
        </div>
    );
}
