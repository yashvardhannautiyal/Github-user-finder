function SearchBox({ userName, setUserName, fetchData }) {
    //function to search when enter key is pressed
    const handleEnter = (event) => {
      if (event.key == "Enter") {
        fetchData();
      }
    };
    return (
      <>
        <div className="flex text-sm sm:text-lg font-medium">
          <input
            type="text"
            className="focus:outline-none focus:ring-0 focus:border-purple-700 border-2 border-purple-700 bg-white dark:bg-transparent h-8 sm:h-10 w-52 sm:w-60 rounded-l-lg text-black dark:text-amber-50 px-3"
            placeholder="Search user"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            onKeyDown={handleEnter} //calling handleEnter function
          />
          <button
            className="h-8 sm:h-10 rounded-r-md bg-purple-700 flex items-center p-2 hover:bg-purple-600 hover:cursor-pointer"
            onClick={fetchData} //fetch data when button is clicked
          >
            Search
          </button>
        </div>
      </>
    );
  }
  
  export default SearchBox;
  