import React from "react";

const CityForm = ({ setCity }) => {
  const submitHandler = (event) => {
    event.preventDefault();
    setCity(event.target.elements.city.value);
    event.target.reset();
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="input-group mb-2">
        <label className="input-group-text" htmlFor="city">
          Choisissez une ville
        </label>
        <input className="form-control" id="city" required />
      </div>
    </form>
  );
};

export default CityForm;
