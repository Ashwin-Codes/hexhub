import React, { useRef } from 'react';

// Css and icons
import './index.css';
import { BiSearch as SearchIcon } from 'react-icons/bi';

// Toast Library
import { toast } from 'react-toastify';

export default function index({
  searchTermHandler,
  placeholder,
  validator = () => true,
}) {
  const inputRef = useRef();
  const formRef = useRef();

  function inputHandler(e) {
    e.preventDefault();

    const textValue = inputRef.current.value;
    if (textValue === '' || textValue === undefined) {
      formRef.current.style.borderColor = 'red';
      toast.error('😕 Blank input !');
      return;
    }
    if (textValue.trim().length < 3) {
      formRef.current.style.borderColor = 'red';
      toast.error('😕 Input atleast 3 letters !');
      return;
    }

    if (!validator(textValue.trim().toLowerCase())) {
      toast.error('😕 Incorrect Input value!');
      formRef.current.style.borderColor = 'red';
      return;
    }

    // Border color changes on correct input
    formRef.current.style.borderColor = '#e2e3e5';

    // Reset input field
    inputRef.current.value = '';

    // Callback Function
    searchTermHandler(textValue);

    // Close keyboard on phone after submit
    setTimeout(() => {
      inputRef.current.blur();
    }, 100);
  }

  return (
    <div className="searchbar-container">
      <form className="searchbar-form" onSubmit={inputHandler} ref={formRef}>
        <SearchIcon className="searchbar-icon" />
        <input
          ref={inputRef}
          type="text"
          className="searchbar-input"
          placeholder={placeholder}
        />
      </form>
    </div>
  );
}
