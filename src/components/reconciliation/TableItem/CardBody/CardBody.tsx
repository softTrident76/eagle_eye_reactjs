import React, {useState} from 'react';
import 'components/reconciliation/TableItem/CardBody/CardBody.scss'
import {Button, Card, Col, Image, Row} from "react-bootstrap";
import Chart from "../../Chart/Chart";
import Pagination from "../../Pagination/Pagination";
import InformationBlock from "../../InformationBlock/InformationBlock";
import {BsArrowRight} from 'react-icons/bs';

const CardBody = (props:any) => {

  const [openInformation, setOpenInformation] = useState(false)
  const [currentPeriodChart, setCurrentPeriodChart] = useState({
    period: 'Daily',
    currentMonth: 'Jan',
    currentWeek: 'first',
  })
  const [checkAmazonClicked, setCheckAmazonClicked] = useState(false)
  const [tooltipData, setTooltipData] = useState<any>('')
  const getTooltipData = (data:any) => {
    setTooltipData(data)
  }
  const closeInfo = (data:any) => {
    setOpenInformation(data)
    setCheckAmazonClicked(false)
  }
  const openAmazonCase = () => {
    setCheckAmazonClicked(true)
  }
  return (
    <div>
      <Card.Body>
        <div className="table-item__box__card__content d-grid align-items-center">
          <div className="table-item__box__card__content-blank"/>
          <div className="table-item__box__card__content__overall">
            <div className="table-item__box__card__content__overall__upper">
              <div className="table-item__box__card__content__overall__upper__content">
                <p className="fw-normal">SKU</p>
                <p>{props.item.sku}</p>
              </div>
              <div className="table-item__box__card__content__overall__upper__content">
                <p className="fw-normal">FNSKU</p>
                <p>FBAPMK5M</p>
              </div>
            </div>
            <div className="table-item__box__card__content__overall__lower">
              <h1>RIEPILOGO</h1>
              <div className="table-item__box__card__content__overall__lower__content">
                <p className="fw-normal">Unità Vendute</p>
                <p>2.739</p>
              </div>
              <div className="table-item__box__card__content__overall__lower__content">
                <p className="fw-normal">Unità Rese</p>
                <p>0</p>
              </div>
              <div className="table-item__box__card__content__overall__lower__content">
                <p className="fw-normal">Unità Difettose</p>
                <p>0</p>
              </div>

            </div>
          </div>
          <div className="table-item__box__card__content__chart">
            <Row>
              <Col className="col-8">
                <div className="table-item__box__card__content__chart__year">
                  <Row className="text-white fw-normal">
                    <Col>
                      <h1 className="fw-bold table-item__box__card__content__chart__year-title">2021</h1>
                      <p className="table-item__box__card__content__chart__year-description">Grafico Storico che mostra
                        l’andamento del Magazzino </p>
                      <div className="d-flex">
                        <p className="fw-bold pe-1 table-item__box__card__content__chart__year-text">unità
                          totali &#8213; e</p>
                        <p className="fw-bold table-item__box__card__content__chart__year-text">e unità
                          disponibili &#8213;</p>
                      </div>
                    </Col>
                    <Col className="d-flex justify-content-end h-auto">
                      <div>
                        <Button
                          className={currentPeriodChart.period === "Daily" ? 'table-item__box__card__content__chart__nav-btn border-0 shadow-none active-period' : 'table-item__box__card__content__chart__nav-btn border-0 shadow-none'}
                          value="Daily" onClick={e => setCurrentPeriodChart({
                          ...currentPeriodChart,
                          period: (e.target as HTMLInputElement).value
                        })}>Settimana</Button>
                        <Button
                          className={currentPeriodChart.period === "Weekly" ? 'table-item__box__card__content__chart__nav-btn border-0 shadow-none active-period' : 'table-item__box__card__content__chart__nav-btn border-0 shadow-none'}
                          value="Weekly" onClick={e => setCurrentPeriodChart({
                          ...currentPeriodChart,
                          period: (e.target as HTMLInputElement).value
                        })}>Mese</Button>
                        <Button
                          className={currentPeriodChart.period === "Monthly" ? 'table-item__box__card__content__chart__nav-btn border-0 shadow-none active-period' : 'table-item__box__card__content__chart__nav-btn border-0 shadow-none'}
                          value="Monthly" onClick={e => setCurrentPeriodChart({
                          ...currentPeriodChart,
                          period: (e.target as HTMLInputElement).value
                        })}>Anno</Button>
                      </div>
                    </Col>
                  </Row>
                  <div className="table-item__box__card__content__chart__item text-white">
                    <Chart dataTooltip={getTooltipData}/>
                  </div>
                </div>
                <Pagination/>
              </Col>
              <Col className="col-4 d-flex flex-column position-relative">
                <div className="table-item__box__card__content__chart__boxes d-grid">
                  <div className="table-item__box__card__content__chart__boxes-item">
                    <p className="fw-normal">Disponibili</p>
                    <p>1.261</p>
                  </div>
                  <div className={
                    props.item.discrepancy === 0 ? 'table-item__box__card__content__chart__boxes-item position-relative'
                      : props.item.discrepancy < 0 ? 'missing table-item__box__card__content__chart__boxes-item position-relative'
                        : 'to-much-items table-item__box__card__content__chart__boxes-item position-relative'
                  }>
                    <p className="fw-normal">Mancanti</p>
                    {tooltipData ? <p>{tooltipData[0].formattedValue}</p> : <p>0</p>}
                    {
                      props.item.discrepancy !== 0 ?
                        <Button
                          onClick={() => setOpenInformation(true)}
                          className="border-0 bg-transparent shadow-none position-absolute end-0 bottom-0 p-1">
                          {
                            props.item.discrepancy < 0
                              ? <Image src={require('assets/images/reconciliation/red-arrow.svg').default}/>
                              : <Image src={require('assets/images/reconciliation/plus.svg').default}/>
                          }
                        </Button>
                        :
                        ''
                    }
                  </div>
                </div>
                <div className="table-item__box__card__content__chart__boxes d-grid">
                  <div
                    className="table-item__box__card__content__chart__boxes-item  position-relative">

                    <p className="fw-normal">In Entrata</p>
                    <p>0</p>
                    <Button
                      onClick={() => setOpenInformation(true)}
                      className="border-0 bg-transparent shadow-none position-absolute end-0 bottom-0 p-1">
                      <Image src={require('assets/images/reconciliation/plus.svg').default}/>
                    </Button>
                  </div>
                  <div className="table-item__box__card__content__chart__boxes-item position-relative">
                    <div>
                      <p className="fw-normal">Invendibili</p>
                      <p>24</p>
                      <Button
                          onClick={() => setOpenInformation(true)}
                          className="border-0 bg-transparent shadow-none position-absolute end-0 bottom-0 p-1">
                        <Image src={require('assets/images/reconciliation/plus.svg').default}/>
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="table-item__box__card__content__chart__boxes d-grid">
                  <div className="table-item__box__card__content__chart__boxes-item position-relative">
                    <p className="fw-normal">In Ricerca</p>
                    <p>12</p>
                    <Button
                      onClick={() => setOpenInformation(true)}
                      className="border-0 bg-transparent shadow-none position-absolute end-0 bottom-0 p-1">
                      <Image src={require('assets/images/reconciliation/plus.svg').default}/>
                    </Button>
                  </div>
                  <div className="table-item__box__card__content__chart__boxes-item position-relative">
                    <div>
                      <p className="fw-normal">Riservate</p>
                      {tooltipData ? <p>{tooltipData[1].formattedValue}</p> : <p>0</p>}
                      <Button
                          onClick={() => setOpenInformation(true)}
                          className="border-0 bg-transparent shadow-none position-absolute end-0 bottom-0 p-1">
                        <Image src={require('assets/images/reconciliation/plus.svg').default}/>
                      </Button>
                    </div>
                  </div>
                </div>
                <InformationBlock openInformation={openInformation} item={props.item} btnStatus={closeInfo}>
                  <div className="information-block__header__content">
                    <p className="information-block__header__content-title">In Entrata</p>
                    <p className="information-block__header__content-quantity d-flex align-items-center">0</p>
                  </div>
                  <div className="information-block__main__content">
                    {(() => {
                      switch (true) {
                        case props.item.discrepancy === 0 :
                          return <p className="information-block__main__content-title">UNIT LIST</p>
                        case props.item.discrepancy < 0 :
                          return <p className="information-block__main__content-title">ATTENZIONE!</p>
                        case props.item.discrepancy > 0 :
                          return <p className="information-block__main__content-title">PROBLEM RECIEVED!</p>
                      }
                    })()}
                    {(() => {
                      switch (true) {
                        case props.item.discrepancy === 0 :
                          return <div>
                            <p className="information-block__main__content-description fw-light">Sembra che alcune delle
                              unità previste nel tuo inventario non trovino riscontro nei magazzini FBA.
                              Clicca qui per scaricare il report.</p>
                          </div>
                        case props.item.discrepancy < 0 :
                          return <div>
                            <p className="information-block__main__content-units fw-light pt-1">Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do.
                              Click here to download the report.</p>
                          </div>
                        case props.item.discrepancy > 0 :
                          return <div className='information-block__main__content-ticket d-flex justify-content-between align-items-center pt-1'>
                            <p className="fw-light">MAIL769</p>
                            <Image src={require('assets/images/reconciliation/pencil.svg').default}/>
                          </div>
                      }
                    })()}
                  </div>
                  <div className="information-block__footer__content">
                    {
                      props.item.discrepancy < 0 ?
                        <div>
                          {!checkAmazonClicked ?
                            <div>
                              <Button
                                className="information-block__footer__content-btn d-flex align-items-center justify-content-between w-100 border-0 shadow-none bg-white">
                                <span>CONTATTACI</span>
                                <Image src={require('assets/images/reconciliation/arrow-down-right.svg').default}/>
                              </Button>
                              <Button onClick={openAmazonCase}
                                      className="information-block__footer__content-btn mt-2 d-flex align-items-center justify-content-between w-100 border-0 shadow-none bg-white">
                                <span>APRI CASO AMAZON</span>
                                <Image src={require('assets/images/reconciliation/arrow-down-right.svg').default}/>
                              </Button>
                            </div> : ''}
                          {checkAmazonClicked ?
                            <div className="information-block__footer__content__confirm bg-white p-2">
                              <div
                                className="information-block__footer__content__confirm-box d-flex justify-content-between align-items-center">
                                <input placeholder="0000000000"
                                       className="bg-transparent border-0 shadow-none w-100" type="text"/>
                                <Button className="border-0 shadow-none bg-transparent p-0 d-flex align-items-center">
                                  <BsArrowRight className="w-100"/>
                                </Button>
                              </div>
                            </div> : ''}
                        </div>
                        : ''
                    }
                    {
                      props.item.discrepancy > 0 ? <div>
                        <p className='information-block__footer__content-recieved fw-light'>We have recieved your email about your problem, we will get back to you shortly. Please check
                          your inbox.</p>
                        <Button className="information-block__footer__content-visit border-0 shadow-none bg-white px-2 mt-2 w-100 d-flex justify-content-between align-items-center">
                          <span>VISIT SUPPORT PAGE</span>
                          <BsArrowRight className=""/>
                        </Button>
                        <div className="d-flex align-items-center pt-2 information-block__footer__content-radio">
                          <input type="radio"/>
                          <span className="fw-light ps-2">Click to close the issue.</span>
                        </div>
                      </div> : ''
                    }
                  </div>
                </InformationBlock>
              </Col>
            </Row>
          </div>
        </div>
      </Card.Body>
    </div>
  );
};

export default CardBody;