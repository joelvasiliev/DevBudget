import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import React from "react"
import { Button } from "./ui/button"
import { Settings2 } from "lucide-react"

export function ExpandUserPopover({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        {children}
      </PopoverTrigger>
      <PopoverContent className="w-20 bg-transparent border-none">
        <div className="flex flex-col space-y-8">
          <Button className="text-white w-[50px] h-[50px] bg-background-foreground-fullfiled rounded-full">
            <Settings2/>
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  )
}
