import React from 'react';
import './InformationBlock.scss'
import { Button } from "react-bootstrap";
import { BsDashLg } from 'react-icons/bs'

const InformationBlock = ({ btnStatus,children,item,openInformation }:any) => {
  const closePopup = () => {
    btnStatus(false)
  }
  return (
    <div className={openInformation ? 'is-visible position-absolute bottom-0' : 'not-visible position-absolute bottom-0'}>
      <div className={item.discrepancy === 0  ? 'information-block h-100'
        : item.discrepancy < 0 ? 'missing-info text-white information-block h-100'
          : 'to-much-items information-block h-100'
      }>
        { children }
        <Button
          onClick={closePopup}
          className={
            item.discrepancy >= 0
              ? 'information-block__close-btn position-absolute bottom-0 end-0 rounded-circle bg-dark border-0 d-flex align-items-center justify-content-center m-2'
              : 'information-block__close-btn position-absolute bottom-0 end-0 rounded-circle bg-white border-0 d-flex align-items-center justify-content-center m-2'
          }>
          <BsDashLg className={
            item.discrepancy >= 0
              ? ''
              : 'fill-missing'
          }/>
        </Button>
      </div>
    </div>

  );
};

export default InformationBlock;