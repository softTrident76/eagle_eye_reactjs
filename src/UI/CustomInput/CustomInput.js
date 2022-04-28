import React, { useEffect, useState } from 'react';
import './CustomInput.scss'
import {Image} from "react-bootstrap";

const CustomInput = ({inputValue , placeholder}) => {
  const [value, setValue] = useState('')
  useEffect(() => {
    inputValue(value)
  }, [value])
  return (
    <div className="custom-input__box d-flex align-items-center w-100">
      <input
        className="custom-input__box-input border-0 shadow-none w-100"
        type="text"
        placeholder={ placeholder }
        value={value}
        onChange={e => setValue(e.target.value)}
      />
      <Image src={require('assets/images/zoom.svg').default}/>
    </div>
  );
};

export default CustomInput;