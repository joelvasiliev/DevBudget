import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import React from "react"

export function SettingsSheet({
    children
}: {
    children: React.ReactNode
}) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        {children}
      </SheetTrigger>
      <SheetContent className="text-white">
        <SheetHeader >
          <SheetTitle className="text-white text-[24px]">Configurações</SheetTitle>
          <SheetDescription>
          </SheetDescription>
        </SheetHeader>
        <div className="min-h-[85%]">
        </div>
      </SheetContent>
    </Sheet>
  )
}
