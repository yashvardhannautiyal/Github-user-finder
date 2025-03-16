import { useState } from "react";
import SearchBox from "./SearchBox";
import DataCard from "./DataCard";
import { FaHeart } from "react-icons/fa6";
function HeroSection() {
  const [userName, setUserName] = useState("");
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState("");

  const fetchData = async () => {
    setError(""); //reset error
    setUserData(null); //reset previous user data

    //checks for the entered username
    if (!userName) {
      setError("Please enter a Github username");
      return;
    }

    try {
      const response = await fetch(`https://api.github.com/users/${userName}`);

      //checks for the username if it exists
      if (!response.ok) {
        throw new Error("User not found");
      }

      //stores data in setUserData
      const data = await response.json();
      setUserData(data);
    } catch (error) {
      //catches error if username not found
      setError("User not found. Enter valid username.");
    }
  };

  return (
    <>
      <div className="dark:bg-gray-950 dark:text-amber-50 flex-grow">
        <div className="flex flex-col items-center justify-center pt-4">
          <p className="text-2xl sm:text-3xl text-purple-700 font-bold mb-2 sm:mb-6">
            Search Github User Id
          </p>
          <SearchBox
            userName={userName}
            setUserName={setUserName}
            fetchData={fetchData}
          />

          {error && (
            <p className="text-red-600 mt-2 sm:mt-4 text-sm sm:text-lg sm:font-medium">
              {error}
            </p>
          )}
          {userData && <DataCard userData={userData} />}
        </div>
      </div>
      <footer>
        <div className="dark:bg-black dark:text-amber-50 p-4 flex items-center justify-center text-sm sm:text-normal bottom-0">
          <p className="flex gap-1.5 items-center font-medium">
            Made with
            <FaHeart className="text-red-600" />
            by Yash Vardhan Nautiyal.
          </p>
        </div>
      </footer>
    </>
  );
}

export default HeroSection;
