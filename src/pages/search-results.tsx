import FlightSearch from "../components/FlightSearch";
import Nav from "../components/Nav";

const SearchResults = () => {
  return (
    <>
      <Nav />
      <main className="relative flex min-h-screen w-full flex-col items-center justify-start">
        <FlightSearch />
      </main>
    </>
  );
};

export default SearchResults;
