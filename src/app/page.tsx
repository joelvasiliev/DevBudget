'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import Image from 'next/image'

export default function LoginForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Login attempt with:', email, password)
  }

  return (
    <div className='flex w-full h-full'>
      <div className='w-[65%] bg-gray-950'></div>
      <Card className="w-[35%] min-h-screen flex flex-col justify-center p-12 bg-black/50 border border-[#8332a8]/50 backdrop-blur-md shadow-lg">
        <CardHeader className="flex items-center justify-center pb-2">
          <div className="mb-4 flex items-center justify-center">
            <Image
                alt="Site Logo"
                src={"https://img.freepik.com/free-vector/flat-design-atheism-logo-template_23-2149242249.jpg?semt=ais_hybrid"}
                width={50}
                height={50}
            />
          </div>
          <h2 className="text-2xl font-bold text-center text-white">Welcome Back</h2>
        </CardHeader>
        <CardContent className='w-full items-center flex flex-col'>
          <form onSubmit={handleSubmit} className="space-y-6 w-[60%]">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-white">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-black/30 text-white border-[#8332a8]/50 focus:border-[#662782] focus:ring-[#662782] placeholder-gray-400"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password" className="text-white">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-black/30 text-white border-[#8332a8]/50 focus:border-[#662782] focus:ring-[#662782] placeholder-gray-400"
                required
              />
            </div>
            <Button 
              type="submit" 
              className="w-full bg-[#8332a8] hover:bg-[#662782] text-white transition-colors duration-300 ease-in-out"
            >
              Sign In
            </Button>
          </form>
          <div className="mt-4 text-center">
            <a href="#" className="text-sm text-[#8332a8] hover:text-[#662782] transition-colors duration-300 ease-in-out">Forgot password?</a>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

