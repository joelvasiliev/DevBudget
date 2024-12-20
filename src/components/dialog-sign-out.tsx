"use client"

import React, { useState } from "react"
import { useRouter } from "next/navigation"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

export function DialogSignOut({
  children
}: {
  children: React.ReactNode
}) {
  const [open, setOpen] = useState(false)
  const router = useRouter()

  const handleLogout = () => {
    // Implement your logout logic here
    console.log("Logging out...")
    // After logout, redirect to home page
    router.push("/")
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="bg-black text-gray-300">
        <DialogHeader>
          <DialogTitle className="text-purple-400">Confirm Logout</DialogTitle>
          <DialogDescription className="text-gray-400">
            Are you sure you want to log out of your account?
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button
            variant="outline"
            onClick={() => setOpen(false)}
            className="border-gray-600 text-gray-300 hover:bg-gray-800"
          >
            Cancel
          </Button>
          <Button
            onClick={handleLogout}
            className="bg-purple-700 text-white hover:bg-purple-800"
          >
            Logout
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
