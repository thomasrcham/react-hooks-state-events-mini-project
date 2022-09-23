import { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  // const [formData, setFormData] = useState({
  //   text: "",
  //   category: "Code",
  // });

  const [text, setText] = useState("");
  const [category, setCategory] = useState("Code");

  function handleText(e) {
    setText(e.target.value);
  }

  function handleCategory(e) {
    setCategory(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newObj = {
      text: text,
      category: category,
    };
    onTaskFormSubmit(newObj);
  }

  // console.log(formData);
  let optionCategories = categories.slice(1);
  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" value={text} onChange={handleText} />
      </label>
      <label>
        Category
        <select name="category" value={category} onChange={handleCategory}>
          {optionCategories.map((category) => (
            <option key={category} name={category}>
              {category}
            </option>
          ))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;

// (e) => {
//   e.preventDefault();
//   onTaskFormSubmit(formData);
// };

// function handleChange(e) {
//   const key = e.target.name;
//   const value = e.target.value;

//   setFormData({
//     ...formData,
//     // [key]: value,
//   });
// // }
