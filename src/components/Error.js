import React from "react";
import { useRouteError, Link } from "react-router-dom";
import Header from "./Header";

const Error = () => {
  const error = useRouteError();

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Header />
      <div className="flex-grow flex items-center justify-center px-4 py-12">
        <div className="max-w-lg w-full space-y-8 text-center">
          <div>
            <h1 className="text-6xl font-extrabold text-indigo-600">Oops!</h1>
            <p className="mt-2 text-3xl font-bold text-gray-900">
              Something went wrong.
            </p>
          </div>
          <div className="mt-8">
            <p className="text-xl text-gray-600">
              We're sorry, but the page you were looking for doesn't exist. It
              might have been moved or deleted.
            </p>
            {error?.statusText || error?.message ? (
              <p className="mt-4 text-lg text-red-600">
                <strong>Error:</strong> {error.statusText || error.message}
              </p>
            ) : null}
          </div>
          <div className="mt-8">
            <Link
              to="/"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 z-[-1] overflow-hidden">
        <img
          src="/api/placeholder/1600/900"
          alt="Error Background"
          className="w-full h-full object-cover opacity-50"
        />
      </div>
    </div>
  );
};

export default Error;
