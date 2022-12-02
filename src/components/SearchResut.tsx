const SearchResult = () => {
  return (
    <>
      <div className="card my-4 mx-2 grid grid-flow-col grid-cols-5 grid-rows-5 border border-slate-200">
        <div className="col-span-4 bg-slate-300">Airline</div>
        <div className="col-span-4 bg-white">First Trip</div>
        <div className="col-span-4 bg-slate-300">Flight Options</div>
        <div className="col-span-4 bg-white">Last Flight</div>
        <div className="col-span-4 bg-slate-300">Flight Options</div>
        <div className="row-span-5 bg-lime-200">Book Flight</div>
      </div>
    </>
  );
};

export default SearchResult;
