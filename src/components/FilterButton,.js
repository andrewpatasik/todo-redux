/* eslint-disable eqeqeq */
const FilterButton = ({ filterIndex, setFilterIndex }) => {
  const handleClick = (e) => setFilterIndex(parseInt(e.target.value))

  return (
    <article className="flex justify-evenly gap-2">
      <button className={filterIndex !== 0 ? '' : 'text-blue-500'} value={0} onClick={handleClick}>All</button>
      <button className={filterIndex !== 1 ? '' : 'text-blue-500'} value={1} onClick={handleClick}>Active</button>
      <button className={filterIndex !== 2 ? '' : 'text-blue-500'} value={2} onClick={handleClick}>Completed</button>
    </article>
  );
};

export default FilterButton;
