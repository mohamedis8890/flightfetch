import FlightSearch from "../components/FlightSearch";
import Nav from "../components/Nav";
import { HiOutlineBadgeCheck } from "react-icons/hi";
import { AiOutlineSafety } from "react-icons/ai";
import { RiCustomerService2Line } from "react-icons/ri";
import { TbDiscount2 } from "react-icons/tb";
import SearchResult from "../components/SearchResut";

const SearchResults = () => {
  return (
    <>
      <Nav />
      <FlightSearch />
      <div className="relative flex min-h-screen w-full flex-col items-center justify-start">
        <div className="flex h-full w-full">
          <aside className="bg-blue-200">Filters------</aside>
          <section className="flex-grow">
            {[1, 2, 3, 4].map((result) => (
              <SearchResult key={result} />
            ))}
          </section>
          <aside className="bg-white">
            <div className="card my-4 mx-2 ">
              <h2 className="mb-5 text-lg font-medium">Why Book with Us?</h2>
              <div className="mb-5 flex">
                <div className="m-3 flex w-20 flex-col items-center justify-center text-center">
                  <HiOutlineBadgeCheck className="text-4xl text-mainBlue-1" />{" "}
                  Best Price Guaranteed
                </div>
                <div className="m-3 flex w-20 flex-col items-center justify-center text-center">
                  <AiOutlineSafety className="text-4xl text-mainBlue-1" /> 100%
                  Safe Shopping
                </div>
              </div>
              <div className="flex">
                <div className="m-3 flex w-20 flex-col items-center justify-center text-center">
                  <RiCustomerService2Line className="text-4xl text-mainBlue-1" />{" "}
                  24/7 Live Assistance
                </div>
                <div className="m-3 flex w-20 flex-col items-center justify-center text-center">
                  <TbDiscount2 className="text-4xl text-mainBlue-1" />{" "}
                  Discounted Fares
                </div>
              </div>
            </div>
            <div className="card my-5 mx-2">
              <h2 className="mb-2 text-lg font-medium">Need Help?</h2>
              <div className="w-fit break-words">
                Our team of professional travel <br /> experts are ready to help
                24/7.
                <br />
                Call us for free:
                <br />
                <span className="mt-2 inline-block text-2xl text-mainBlue-1">
                  1-502-533-7000
                </span>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
};

export default SearchResults;
