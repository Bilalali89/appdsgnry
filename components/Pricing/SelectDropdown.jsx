
import React, {useState, useCallback} from "react";

const SelectDropdown = (props) => {
  let { title, hint, firstop, secondop, thirdop } = props;
  const [value, setValue] = useState('first');

  const handleChange = useCallback((event) => {
    setValue(event.target.value);
  }, []);
  return (
    <div>
      {" "}
      <div className="title">{title}</div>
      <select className="form-select" value={value} onChange={handleChange} aria-label="Default">
        <option value="first"></option>
        <option value="second">{firstop}</option>
        <option value="third">{secondop}</option>
        <option value="fourth">{thirdop}</option>
      </select>
      <div className="hint">{hint}</div>
    </div>
  );
};

export default SelectDropdown;
