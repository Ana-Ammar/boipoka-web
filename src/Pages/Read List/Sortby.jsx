

const Sortby = ({sortOrder, setSortOrder}) => {



    return (
    <div className="flex justify-center">
        <select className="mb-8 p-2 rounded-md bg-[#23BE0A] text-white font-bold focus:bg-gray-200 focus:text-black text-center"
        value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}>
          <option value="none">Sort by</option>
          <option value="rating">Rating</option>
          <option value="pages">Number of pages</option>
          <option value="publishYear">Publisher year</option>
        </select>
    </div>
    );
};

export default Sortby;