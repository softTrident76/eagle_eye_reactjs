import React from 'react';
import './Pagination.scss'
import { Image } from "react-bootstrap";

const Pagination = () => {
  return (
    <div className="pagination d-block">
      <ul className="pagination-list text-white d-flex justify-content-between">
        <li className="page-number prev d-flex align-items-center"><span ><Image src={require('assets/images/reconciliation/arrow.svg').default}/></span></li>
        <li className="page-number d-flex align-items-center"><span >Jan</span></li>
        <li className="page-number active d-flex align-items-center"><span >Feb</span></li>
        <li className="page-number d-flex align-items-center"><span >Mar</span></li>
        <li className="page-number d-flex align-items-center"><span >April</span></li>
        <li className="page-number d-flex align-items-center"><span >May</span></li>
        <li className="page-number d-flex align-items-center"><span >June</span></li>
        <li className="page-number d-flex align-items-center"><span >July</span></li>
        <li className="page-number d-flex align-items-center"><span >Aug</span></li>
        <li className="page-number d-flex align-items-center"><span >Sep</span></li>
        <li className="page-number d-flex align-items-center"><span >Nov</span></li>
        <li className="page-number d-flex align-items-center"><span >Dec</span></li>
        <li className="page-number prev next d-flex align-items-center"><span ><Image src={require('assets/images/reconciliation/arrow.svg').default}/></span></li>
      </ul>
    </div>
  );
};

export default Pagination;