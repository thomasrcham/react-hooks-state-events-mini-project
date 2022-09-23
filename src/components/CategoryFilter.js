import { CATEGORIES } from "../data";

function CategoryFilter({ filterCategory, handleCategoryClick }) {

  let catList = CATEGORIES.map(item => (item === filterCategory) ? writeClickedCategory(item) : writeunClickedCategory(item))

  function writeClickedCategory(item) {
    return (
      <button key={item} className='selected' onClick={e => handleCategoryClick(e.target.textContent)
      }>{item}</button >)
  }

  function writeunClickedCategory(item) {
    return (
      <button key={item} onClick={e => handleCategoryClick(e.target.textContent)
      }>{item}</button >)
  }

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {catList}
    </div>
  );
}

export default CategoryFilter;


