import React, { useEffect, useState } from "react";

const User = () => {
  const [userData, setUserData] = useState(null);

  const fetchUserData = async () => {
    try {
      const response = await fetch(
        "https://api.github.com/users/ELHARCHAOUI-SIFEDDINE"
      );
      const data = await response.json();
      setUserData(data);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  if (!userData) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <div className="rounded-full border-4 border-t-4 border-gray-200 h-12 w-12 mb-4 animate-spinner border-loader-blue"></div>
        <p className="text-lg text-gray-500">Loading...</p>
      </div>
    );
  }

  return (
    <div className="max-w-lg mx-auto bg-white shadow-xl rounded-lg overflow-hidden transform transition duration-500 hover:scale-105 mt-10">
      <div className="flex justify-center items-center p-6 bg-gradient-to-r from-purple-500 to-indigo-600">
        <img
          className="w-32 h-32 rounded-full border-4 border-white shadow-md"
          src={userData.avatar_url}
          alt="User avatar"
        />
      </div>
      <div className="p-6">
        <h2 className="text-center text-2xl font-bold text-gray-800">
          {userData.name}
        </h2>
        <p className="text-center text-gray-600 mt-3">{userData.bio}</p>
        <div className="flex justify-center mt-6">
          <a
            href={userData.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white bg-indigo-600 hover:bg-indigo-700 font-semibold py-2 px-4 rounded-full transition duration-300"
          >
            View GitHub Profile
          </a>
        </div>
        <div className="flex justify-around mt-6">
          <div className="text-center">
            <p className="text-lg font-semibold text-gray-700">
              {userData.public_repos}
            </p>
            <p className="text-sm text-gray-500">Public Repos</p>
          </div>
          <div className="text-center">
            <p className="text-lg font-semibold text-gray-700">
              {userData.followers}
            </p>
            <p className="text-sm text-gray-500">Followers</p>
          </div>
          <div className="text-center">
            <p className="text-lg font-semibold text-gray-700">
              {userData.following}
            </p>
            <p className="text-sm text-gray-500">Following</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
