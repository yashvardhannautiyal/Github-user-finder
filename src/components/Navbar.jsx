import ThemeToggle from "./ThemeToggle";
function Navbar() {

  return (
    <div className="flex dark:bg-gray-950 p-4 items-center justify-between  text-sm sm:text-2xl font-bold w-full">
    
      <a
        href="https://github.com/yashvardhannautiyal/Github-finder"
        target="_blank"
      >
        <img src="./github-logo.png" alt="github-logo" className="h-6 sm:h-8" />
      </a>
      <p className="amber sm:text-3xl text-purple-700">Github Finder</p>
      <button
        className="hover:cursor-pointer text-purple-700 flex items-center sm:text-lg"
      >
        <ThemeToggle />
      </button>
    </div>
  );
}

export default Navbar;
