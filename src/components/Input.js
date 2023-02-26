import React from "react";

function Input({ label, type, dispatch, dataActionType, value }) {
  const handleInput = (e) => {
    dispatch({ type: dataActionType, payload: e.target.value });
  };

  return (
    <div className="input">
      <label>{label}</label>
      <input type={type} value={value} onChange={handleInput} />
    </div>
  );
}

export default Input;
