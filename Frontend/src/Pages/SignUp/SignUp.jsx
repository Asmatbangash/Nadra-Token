import  React from "react"
import { useState } from "react"
import { SignUpPic } from "../../assets/img_index.js"
import { Input, Button } from "../../Components/Comp_index.js"
import { Link } from "react-router-dom"

export default function SignUp() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Add your form submission logic here
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 mb-5">
      <div className="max-w-6xl mx-auto">
        <div className="bg-green-900 text-white  rounded-2xl shadow-xl overflow-hidden">
          <div className="grid md:grid-cols-2">
            {/* Left side - Form */}
            <div className="p-8">
              <div className="mb-8">
                <h2 className="text-3xl font-bold  mb-2">Sign Up Form</h2>
                <p className="">Please fill in your details below</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Full Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-300 outline-none"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium  mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-300 outline-none"
                    placeholder="Enter your father's name"
                  />
                </div>

                <div>
                  <label htmlFor="password" className="block text-sm font-medium mb-2">
                    Password
                  </label>
                  <Input
                    id="password"
                    name="password"
                    type="tel"
                    required
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-300 outline-none"
                    placeholder="Enter your phone password"
                  />
                </div>
                <div>
                  <p>already have account! <Link to='/login' className="underline text-blue-400">login</Link></p>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-300 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2" text="Sign Up"
                />
                  
              </form>
            </div>

            {/* Right side - Image */}
            <div className="bg-gray-100 hidden items-center justify-center p-8 md:flex">
              <div className="relative w-full h-full min-h-[400px]">
                <img
                  src={SignUpPic}
                  alt="Token"
                  className="object-cover w-full h-full  rounded-lg shadow-md"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

