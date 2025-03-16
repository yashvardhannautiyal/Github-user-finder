import { FaHeart } from "react-icons/fa6";
function Footer (){
    return(
        <>
        <div className="dark:text-amber-50 p-4 flex items-center justify-center text-sm sm:text-normal">
          <p className="flex gap-1.5 items-center font-medium">
            Made with
            <FaHeart className="text-red-600" />
            by Yash Vardhan Nautiyal.
          </p>
        </div>
        </>
    )
}
export default Footer;