import React, {useState} from 'react';
import './TableItem.scss';
import {Accordion, Card, Image, Button} from "react-bootstrap";
import {useAccordionButton} from 'react-bootstrap/AccordionButton';
import { BsPlusLg } from 'react-icons/bs';
import CardBody from "./CardBody/CardBody";
import {useSelector} from "react-redux";

const CustomToggle = ({children, eventKey, checkIfPressedButton, item}:any) => {
  const [pressedButton, setPressedButton] = useState(false)
  const decoratedOnClick = useAccordionButton(eventKey, () => {
    setPressedButton(!pressedButton)
    checkIfPressedButton(item.isToggle = !item.isToggle)
  });

  return (
    <Button
      className="bg-transparent border-0 shadow-none w-100"
      onClick={decoratedOnClick}
    >
      {children}
    </Button>
  );
}
const TableItem = (props:any) => {
  const [reconciliation, setReconciliation] = useState([
    {
      isToggle: false,
      isOpenInfo: false,
    }
  ])
  const getPressedValue = () => {
    setReconciliation([...reconciliation])
  }
  const filterQuery = useSelector((state:any) => state?.currentFilter)
  return (
    <div>
      <div className="table-item__box fw-bold">
        {props.list.map((item:any, index:any) => (
          <Accordion key={index}>
            <Card className="table-item__box__card">
              <Card.Header
                className={
                  item.discrepancy < 0 && item.isToggle ? 'missing-toggle d-grid align-items-center table-item__box__card-header'
                    : item.discrepancy < 0  && !item.isToggle ? 'missing d-grid align-items-center table-item__box__card-header text-white'
                    : item.discrepancy  >= 0 ? 'd-grid align-items-center table-item__box__card-header' : ''
                }>
                <div
                  className={
                    item.discrepancy < 0 ? 'missing table-item__box-checkbox d-flex align-items-center bg-transparent' : 'missing-toggle bg-transparent table-item__box-checkbox d-flex align-items-center'
                  }>
                  <div className="table-item__box__image">
                    <Image src={item.image.link ? item.image.link : ''}/>
                  </div>
                </div>
                <div className="table-item__box-asin-number">
                  <p className="fw-bold">
                    {(()=>{
                      switch (filterQuery){
                        case "ASIN" : return item.asin; break
                        case "SKU" : return item.sku; break
                        default : return item.asin
                      }
                    })()}
                  </p>
                </div>
                <div className="table-item__box-available-units d-flex">
                  <p>{item.available}</p>
                  <p
                    className="table-item__box-available-units-value fw-normal">/{item.totalStart}</p>
                </div>
                <div className="table-item__box-status d-flex">
                  {item.discrepancy === 0  ?
                    <Image src={require('assets/images/reconciliation/status.svg').default}/>
                  : item.discrepancy < 0 ? item.isToggle ? <Image src={require('assets/images/reconciliation/warning-red.svg').default}/> :
                      <Image src={require('assets/images/reconciliation/warning.svg').default}/>
                      : item.discrepancy > 0 ? <Image src={require('assets/images/reconciliation/email-miss.svg').default}/> : ''

                  }

                  <p className="fw-normal ps-2">{item.discrepancy === 0 ? 'Conforme' : item.discrepancy < 0 ? 'Unità Mancanti' : 'A molti oggetti'}</p>
                </div>
                <div className="table-item__box-action">
                  <p className="fw-normal">{item.action ? item.action : 'Nessuna Azione Richiesta'}</p>
                </div>
                <div className="table-item__box__button justify-content-end">
                  <CustomToggle
                    item={item}
                    checkIfPressedButton={getPressedValue}
                    eventKey={index}>
                    {
                      item.discrepancy === 0
                        ? <BsPlusLg className={item.isToggle ? 'rotateBtn bg-transparent' : 'rotateBtnBack bg-transparent'}/>
                        : item.discrepancy < 0 ? <BsPlusLg className={item.isToggle ? 'rotateBtn missing-toggle  bg-transparent' : 'rotateBtnBack missing bg-transparent'}/>
                        :  <BsPlusLg className={item.isToggle ? 'rotateBtn bg-transparent' : 'rotateBtnBack bg-transparent'}/>
                    }

                  </CustomToggle>
                </div>

              </Card.Header>
              <Accordion.Collapse eventKey={index}>
                <CardBody item={item}  />
              </Accordion.Collapse>
            </Card>
          </Accordion>
        ))}
      </div>
    </div>
  );
};


export default TableItem;