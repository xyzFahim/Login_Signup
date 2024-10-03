import React from 'react'
import BGImg from "../Assets/Img/bg1.jpg";
import { Link } from 'react-router-dom';

export function SignUpFrom  () {
  return (
   <div className="flex justify-center items-center w-full h-screen bg-cover bg-center"
			style={{
				backgroundImage: `url(${BGImg})`,
			}}
		> 
		<div className="w-96 p-10 bg-white bg-opacity-90 rounded-lg shadow-lg font-poppins">
				<div className="text-5xl text-center mb-6">Register</div>

				<div className="mb-4">
					<label className="block mb-2 text-lg text-gray-600">Username</label>
					<input
						className="w-full px-3 py-2 text-gray-700 border rounded focus:outline-none focus:ring focus:border-blue-400"
						type="text"
						placeholder="User Name"
						required
					/>
				</div>

				<div className="mb-4">
					<label className="block mb-2 text-lg text-gray-600">Email</label>
					<input
						className="w-full px-3 py-2 text-gray-700 border rounded focus:outline-none focus:ring focus:border-blue-400"
						type="text"
						placeholder="Your Email Address"
						required
					/>
				</div>

				<div className="mb-4">
					<label className="block mb-2 text-lg text-gray-600">
						Password
					</label>
					<input
						className="w-full px-3 py-2 text-gray-700 border rounded focus:outline-none focus:ring focus:border-blue-400"
						type="text"
						placeholder="Enter your password"
						required
					/>
				</div>

				<div className="mb-4">
					<label className="block mb-2 text-lg text-gray-600">
						Confirm Password
					</label>
					<input
						className="w-full px-3 py-2 text-gray-700 border rounded focus:outline-none focus:ring focus:border-blue-400"
						type="text"
						placeholder="Enter your password"
						required
					/>
				</div>
               
				<div className="flex items-center  mt-2">
                    <span>Already Have an Account?</span>
                    <Link to="/login" className="text-blue-600 hover:text-blue-700 hover:underline ml-4">
                        Log In
                    </Link>
                </div>

				<button
					type="submit"
					className="w-full mt-3 px-4 py-2 text-white bg-purple-600 rounded hover:bg-purple-700 focus:outline-none focus:bg-purple-700"
				>
					Register
				</button>
               
			</div>
		</div>
  )
}
