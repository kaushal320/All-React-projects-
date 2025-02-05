import React, { useState } from "react";
import { FaCamera } from "react-icons/fa";

const Profile = () => {
  const [bannerUrl, setBannerUrl] = useState("https://placehold.co/1500x400");

  const [profileUrl, setProfileUrl] = useState("https://placehold.co/100");

  const handleBannerChange = (event: any) => {
    const file = event.target.files[0];
    if (file) {
      setBannerUrl(URL.createObjectURL(file));
    }
  };

  const handleProfileChange = (event: any) => {
    const file = event.target.files[0];
    if (file) {
      setProfileUrl(URL.createObjectURL(file));
    }
  };
  return (
    <>
      <div className="relative w-[94%] ml-[5rem]">
        <div className="relative">
          <img
            src={bannerUrl}
            alt="background image"
            className="w-full h-[200px] object-cover "
          />
          <button className="  absolute top-2 right-2 bg-gray-800 p-2 rounded-full text-white hover:bg-gray-600">
            <label htmlFor="banner-upload" className="cursor-pointer">
              <FaCamera size={24} />
            </label>
            <input
              type="file"
              id="banner-upload"
              accept="image/*"
              className="hidden"
              onChange={handleBannerChange}
            />
          </button>
        </div>
        {/* Channel Logo*/}
        <div className="flex items-center ml-4 mt-[2rem] ">
          <img
            src={profileUrl}
            alt="Channel Logo"
            className="w-40 h-40 object-cover rounded-full  border-white relative"
          />
          <button className="  abosolute -ml-[6rem] z-10 mt-[8rem]  bg-gray-800 p-2 rounded-full text-white hover:bg-gray-600">
            <label htmlFor="profile-upload" className="cursor-pointer">
              <FaCamera size={24} />
            </label>
            <input
              type="file"
              id="profile-upload"
              accept="image/*"
              className="hidden"
              onChange={handleProfileChange}
            />
          </button>
          {/* Channel Details*/}
          <div className="ml-4 mt-4">
            <h1 className="text-2xl font-bold ml-[4rem]">Kaushal Web Dev</h1>
            <p className="ml-[4rem]">1M views</p>
            <p className="mt-2 ml-[4rem]">
              Kaushal Web Dev is a channel dedicated to providing high-quality
              tutorials and guides on web development. Whether you're a beginner
              or an experienced developer, you'll find valuable content here.
              Subscribe for more updates!
            </p>
            <button className="mt-4 bg-red-600 text-white px-4 py-2 rounded-full ml-[4rem] hover:bg-red-700">
              {" "}
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Profile;
