import { ImAirplane } from "react-icons/im";
import { MdHotel, MdLocationPin, MdTour } from "react-icons/md";

const Nav = () => {
  return (
    <nav className="flex items-center justify-around bg-white bg-opacity-50 backdrop-blur-md">
      <div className="cursor-pointer">
        <span className="font-medium text-mainBlue-1">Flight</span>
        <span className="font-medium text-green-500">Fetch</span>
      </div>
      <div>
        <ul className="flex ">
          <li className="flex cursor-pointer px-3">
            <ImAirplane className="m-auto px-0.5" /> Flights
          </li>
          <li className="flex cursor-pointer px-3">
            <MdHotel className="m-auto px-0.5" /> Hotels
          </li>
          <li className="flex cursor-pointer px-3">
            <MdLocationPin className="m-auto px-0.5" /> Locations
          </li>
          <li className="flex cursor-pointer px-3">
            <MdTour className="m-auto px-0.5" /> Tours
          </li>
        </ul>
      </div>
      <div className="cursor-pointer text-mainBlue-1">Sign In</div>
    </nav>
  );
};

export default Nav;
