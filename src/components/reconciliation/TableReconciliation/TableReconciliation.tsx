import React from 'react';
import './TableReconciliation.scss'
import TableItem from "../TableItem/TableItem";
import { useSelector } from "react-redux";

const TableReconciliation = () => {
  const list = useSelector((state:any) => state?.lists)
  const filterQuery = useSelector((state:any) => state?.currentFilter)

  return (
    <div className="table-reconciliation">
      <div className="table-reconciliation__box fw-bold d-grid">
        <div className="table-reconciliation__box-blank"/>
        <div className="table-reconciliation__box-asin-number">
          <p className="title">
            {(()=>{
              switch (filterQuery){
                case "ASIN" : return "ASIN"; break
                case "SKU" : return "SKU"; break
                case "FNSKU" : return "FNSKU"; break
                case "Descrizione" : return "Descrizione"; break
                default : return "ASIN"
              }
            })()}
          </p>
        </div>
        <div className="table-reconciliation__box-available-units">
          <p className="title">UNITÀ DISPONIBILI</p>
        </div>
        <div className="table-reconciliation__box-status">
          <p className="title">STATUS</p>
        </div>
        <div className="table-reconciliation__box-action">
          <p className="title">AZIONE</p>
        </div>
        <div className="table-reconciliation__box-blank"/>
      </div>
      <TableItem list={list}/>
    </div>
  );
};

export default TableReconciliation;