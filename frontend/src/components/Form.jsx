import React from "react";
import BGImg from "../Assets/Img/bg1.jpg";
import { Link } from "react-router-dom";

export function Form() {
	return (
		<div
			className="flex justify-center items-center w-full h-screen bg-cover bg-center"
			style={{
				backgroundImage: `url(${BGImg})`,
			}}
		>
			<div className="w-96 p-10 bg-white bg-opacity-90 rounded-lg shadow-lg font-poppins">
				<div className="text-5xl text-center mb-6">Login</div>
				<div className="mb-4">
					<label className="block mb-2 text-lg text-gray-600">Email</label>
					<input
						className="w-full px-3 py-2 text-gray-700 border rounded focus:outline-none focus:ring focus:border-blue-400"
						type="text"
						placeholder="Username or Email"
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
                <div className="flex items-center justify-between mb-3 ">
                    <label className="flex items-center">
                        <input type="checkbox" className="text-blue-600 rounded focus:ring-blue-500" />
                        <span className="ml-2 text-base text-gray-600">Remember Me</span>
                    </label>
                    <a href="#" className="text-blue-600 hover:text-blue-700 hover:underline">
                        Forgot Password?
                    </a>
                </div>

				<button
					type="submit"
					className="w-full px-4 py-2 text-white bg-purple-600 rounded hover:bg-purple-700 focus:outline-none focus:bg-purple-700"
				>
					Log In
				</button>
                <div className="flex items-center  mt-2">
                    <span>Don't Have an Account?</span>
                    <Link to="/signup" className="text-blue-600 hover:text-blue-700 hover:underline ml-4">
                        Register
                    </Link>
                </div>
			</div>
		</div>
	);
}
