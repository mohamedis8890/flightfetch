const FlightSearch = () => {
  return (
    <div className="rounded-sm bg-mainBlue-1 p-5 text-white">
      <div className="-mt-2 flex justify-start">
        <div className="inline-block pl-0 pr-2">Round-Trip</div>
        <div className="inline-block px-2 text-mainBlue-2">One-Way</div>
        <div className="inline-block px-2 text-mainBlue-2">Multi-City</div>
      </div>
      <div>
        <form className="flex-start mt-4 flex text-black">
          <input
            type="text"
            placeholder="From"
            className="ml-0 mr-1 grow rounded-md p-2"
          />
          <input
            type="text"
            placeholder="To"
            className="mx-1 grow rounded-md p-2"
          />
          <input type="datetime-local" className="mx-1 grow rounded-md p-2" />
          <input
            type="text"
            placeholder="Passengers, Class"
            className="mx-1 grow  rounded-md p-2"
          />
          <input
            type="submit"
            value="Search"
            className="mx-1 grow rounded-md bg-mainBlue-2 p-2 text-white"
          />
        </form>
      </div>
    </div>
  );
};

export default FlightSearch;
