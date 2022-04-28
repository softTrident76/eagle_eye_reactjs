import React, {useEffect, useState} from 'react';
import './Warehouse.scss'
import {Col, Row} from "react-bootstrap";
import CustomInput from "../../../UI/CustomInput/CustomInput";
import CustomDropdown from "../../../UI/CustomDropdown/CustomDropdown";

const Warehouse = ({getValueFromWarehouse}:any) => {
  const [searchQuery, setSearchQuery] = useState('')
  const getInputValue = (data:any) => {
    setSearchQuery(data)
  }
  useEffect(() => {
    getValueFromWarehouse(searchQuery)
  }, [searchQuery, getValueFromWarehouse])
  return (
    <div className="warehouse">
      <Row>
        <Col>
          <p className="warehouse-text fw-bold">GESTIONE MAGAZZINO</p>
          <p className="warehouse-title fw-bold text-dark">Riconciliazione</p>
          <p className="warehouse-description pe-5">Monitora il livello del tuo magazzino teorico ed effettivo per ogni
            ASIN, analizza lo status dello stock e trova eventuali disallineamenti con il Fulfillment Network di
            Amazon. </p>
        </Col>
        <Col className="d-flex flex-column align-items-end justify-content-end">
          <CustomDropdown />
          <CustomInput
            placeholder="Digita l’ASIN che vuoi ricercare.."
            inputValue={getInputValue}
          />
        </Col>
      </Row>
    </div>
  );
};

export default Warehouse;
