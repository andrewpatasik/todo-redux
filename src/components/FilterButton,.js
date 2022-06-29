const FilterButton = ({ setFilterIndex }) => {
  const handleClick = (e) => setFilterIndex(parseInt(e.target.value))

  return (
    <article className="flex justify-evenly gap-2">
      <button value={0} onClick={handleClick}>All</button>
      <button value={1} onClick={handleClick}>Active</button>
      <button value={2} onClick={handleClick}>Completed</button>
    </article>
  );
};

export default FilterButton;
