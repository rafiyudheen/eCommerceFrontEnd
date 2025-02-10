import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center">
      <h1 className="text-6xl font-bold text-red-500">Oops!</h1>
      <p className="text-lg text-gray-700 mt-4">Something went wrong.</p>
      <p className="text-sm text-gray-500">
        The page you're looking for doesn't exist.
      </p>
      <Link to="/" className="mt-6 px-6 py-3 btn btn-ghost">
        Go to Home
      </Link>
    </div>
  );
};

export default ErrorPage;
