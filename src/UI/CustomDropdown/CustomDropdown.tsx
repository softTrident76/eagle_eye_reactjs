import React from 'react';
import './CustomDropdown.scss'
import Dropdown from 'react-bootstrap/Dropdown'
import {Image} from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
const CustomDropdown = () => {
  const dispatch = useDispatch()
  const filterQuery = useSelector((state:any) => state?.currentFilter)
  const selectCurrentFilter = (e:any) => {
    dispatch({type: "SET_FILTER",payload:e.target.textContent})
  }
  return (
    <div className="custom-dropdown my-4 d-flex justify-content-between align-items-center">
      <p className="custom-dropdown__title">Elenca i miei prodotti per:</p>
      <Dropdown>
        <Dropdown.Toggle id="dropdown-basic">{ filterQuery }</Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item onClick={selectCurrentFilter} className={filterQuery === 'ASIN' ? 'd-flex justify-content-between selected' : 'd-flex justify-content-between'} href="#/action-1">
            <span>ASIN</span>
            {
              filterQuery === 'ASIN' ?  <Image src={require('assets/images/reconciliation/select.svg').default}/> : null
            }
          </Dropdown.Item>
          <Dropdown.Item onClick={selectCurrentFilter} className={filterQuery === 'SKU' ? 'd-flex justify-content-between selected' : 'd-flex justify-content-between'} href="#/action-2">
            <span>SKU</span>
            {
              filterQuery === 'SKU' ?  <Image src={require('assets/images/reconciliation/select.svg').default}/> : null
            }
          </Dropdown.Item>
          <Dropdown.Item onClick={selectCurrentFilter} className={filterQuery === 'FNSKU' ? 'd-flex justify-content-between selected' : 'd-flex justify-content-between'} href="#/action-3">
            <span>FNSKU</span>
            {
              filterQuery === 'FNSKU' ?  <Image src={require('assets/images/reconciliation/select.svg').default}/> : null
            }
          </Dropdown.Item>
          <Dropdown.Item onClick={selectCurrentFilter} className={filterQuery === 'Descrizione' ? 'd-flex justify-content-between selected' : 'd-flex justify-content-between'} href="#/action-4">
            <span>Descrizione</span>
            {
              filterQuery === 'Descrizione' ?  <Image src={require('assets/images/reconciliation/select.svg').default}/> : null
            }
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default CustomDropdown;