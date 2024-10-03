import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage, LoginPage, SignUpPage } from "../Pages";

const router = createBrowserRouter([
	{
		path: "/login",
		element: <LoginPage />,
	},
    {
        path: "/signup",
        element: <SignUpPage />
    },
	{
		path: "/",
		element: <HomePage />
	}
]);

export function AppRouter({ children }) {
	return <RouterProvider router={router}>{children}</RouterProvider>;
}
