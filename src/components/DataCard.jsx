import { PiTwitterLogoThin } from "react-icons/pi";
import { CiLocationOn } from "react-icons/ci";
import { IoIosArrowForward } from "react-icons/io";
import { TiPin } from "react-icons/ti";
import { IoPeople } from "react-icons/io5";
function DataCard({ userData }) {
  return (
    <div className="text-xs sm:text-lg">
      <div className="dark:text-amber-50 flex flex-col items-start justify-center mt-8 px-1.5 sm:px-5 py-2 sm:py-4 card-background rounded-lg">
        <div className="flex items-center justify-center gap-4">
          <img
            src={userData.avatar_url}
            alt="user-profile-picture"
            className="h-14 rounded-full"
          />
          <div className="font-bold">
            <h2 className="text-xl sm:text-4xl">
              {userData.name || "No name"}
            </h2>
            <p className="text-xs sm:text-lg">@{userData.login}</p>
          </div>
        </div>
        <div className="sm:px-5 mt-3">
          <p className="mt-2">{userData.bio || "No bio available"}</p>
          <div className="my-3 flex gap-7 sm:gap-14">
            <p className="flex items-center gap-2">
              <PiTwitterLogoThin />
              {userData.twitter_username || "No twitter username"}
            </p>
            <p className="flex items-center gap-2">
              <CiLocationOn />
              {userData.location || "No location available"}
            </p>
          </div>
          <div className="my-3 gap-14">
            <div className=" flex">
              <p className="flex items-center gap-2">
                <IoPeople />
                {userData.followers || "No followers"} Followers
              </p>
              <p>{userData.following || "No following"} Following</p>
            </div>
            <div>
              <p className="flex items-center gap-2 mt-3">
                <TiPin />
                {userData.public_repos || "No public repos"} Repos
              </p>
            </div>
          </div>
        </div>

        <a
          href={userData.html_url}
          target="_blank"
          className="underline text-purple-600 hover:cursor-pointer hover:text-purple-500 flex items-center font-medium"
        >
          Visit user
          <IoIosArrowForward />
        </a>
      </div>
    </div>
  );
}

export default DataCard;
