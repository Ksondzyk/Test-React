import React from "react";

const Task = ({ getPopup, showPopup }) => {
  return (
    <div className="header">
      <div className="header__left">
        <img
          className="header__left_logo"
          src="https://image.shutterstock.com/image-photo/hot-dog-mustard-ketchup-side-260nw-683413162.jpg"
          alt="Hot Doc Picture"
        />
        <button onClick={() => addGrud(id)} className="header-grud-btn">
          crud
        </button>
      </div>
      <button onClick={() => getPopup(!showPopup)} className="header-add-btn">
        Add hot-dog
      </button>
    </div>
  );
};

export default Task;
