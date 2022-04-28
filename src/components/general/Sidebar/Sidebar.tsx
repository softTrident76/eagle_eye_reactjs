import React, {useState} from 'react';
import './Sidebar.scss'
import {Accordion, Button, Col, Image, Row} from "react-bootstrap";
import {Link as RouterLink } from 'react-router-dom'
import Notification from "./Notification/Notification";

const Sidebar = () => {
  const [accordionItems] = useState([
    {
      image: 'menu',
      title: 'Dashboard',
      description: 'Pianifica, Gestisci, Controlla',
      items: [
        {
          routerButton: 'Livello di Inventario',
          routerPath: 'reconciliation'
        },
        {
          routerButton: 'Riconciliazione',
          routerPath: 'reconciliation'
        },
        {
          routerButton: 'Manager Quantità & Gestione Riordini',
          routerPath: 'reconciliation'
        },
        {
          routerButton: 'Processi Inbound & Outbound',
          routerPath: 'reconciliation'
        },
      ]
    },
    {
      image: 'box',
      title: 'Ordini',
      description: 'Controlla e Gestisci i tuoi Ordini',
      items: [
        {
          routerButton: 'Livello di Inventario',
          routerPath: 'reconciliation'
        },
        {
          routerButton: 'Riconciliazione',
          routerPath: 'reconciliation'
        },
        {
          routerButton: 'Manager Quantità & Gestione Riordini',
          routerPath: 'reconciliation'
        },
        {
          routerButton: 'Processi Inbound & Outbound',
          routerPath: 'reconciliation'
        },
      ]
    },
    {
      image: 'storage',
      title: 'Gestione Magazzino',
      description: 'Monitora e gestisci i tuoi Magazzini e il tuo livello di Inventario',
      items: [
        {
          routerButton: 'Livello di Inventario',
          routerPath: 'reconciliation'
        },
        {
          routerButton: 'Riconciliazione',
          routerPath: 'reconciliation'
        },
        {
          routerButton: 'Manager Quantità & Gestione Riordini',
          routerPath: 'reconciliation'
        },
        {
          routerButton: 'Processi Inbound & Outbound',
          routerPath: 'reconciliation'
        },
      ]    },
    {
      image: 'headset',
      title: 'Supporto',
      description: 'Utilizza questo Modulo per Contattarci',
      items: [
        {
          routerButton: 'Livello di Inventario',
          routerPath: 'reconciliation'
        },
        {
          routerButton: 'Riconciliazione',
          routerPath: 'reconciliation'
        },
        {
          routerButton: 'Manager Quantità & Gestione Riordini',
          routerPath: 'reconciliation'
        },
        {
          routerButton: 'Processi Inbound & Outbound',
          routerPath: 'reconciliation'
        },
      ]
    },
  ])
  return (
    <div className="sidebar position-relative">
      <div className="sidebar__header">
        <Row className="sidebar__header__box d-flex align-items-center g-0">
          <Col className="col-8">
           <RouterLink to="/">
             <Image src={require('assets/images/logo.svg').default}/>
           </RouterLink>
          </Col>
          <Col className="col-4 d-flex justify-content-end position-relative">
            <Notification />
          </Col>
        </Row>
      </div>
      <Row className="g-0 sidebar__body__content">
        <Col>
          {accordionItems.map((item,index) => (
            <Accordion key={index}>
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  <Image className="sidebar__body__content-image" src={require(`assets/images/home/${item.image}.svg`)}/>
                  <div>
                    <p className="sidebar__body__content-title">{item.title}</p>
                    <p className="sidebar__body__content-description">{item.description}</p>
                  </div>
                </Accordion.Header>
                <Accordion.Body>
                  {
                    item.items.map((el,index) => (
                      <RouterLink key={index} to={el.routerPath} className="text-decoration-none">
                        <Button className="sidebar__body__content-btn bg-transparent border-0 shadow-none p-0 py-2 w-100 d-flex justify-content-between">
                          <p className="text-start">{el.routerButton}</p>
                          <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.6668 7.33317L10.9961 7.70946C11.1046 7.61452 11.1668 7.47735 11.1668 7.33317C11.1668 7.18899 11.1046 7.05183 10.9961 6.95688L10.6668 7.33317ZM5.66275 12.3761L10.9961 7.70946L10.3376 6.95688L5.00424 11.6236L5.66275 12.3761ZM10.9961 6.95688L5.66275 2.29022L5.00424 3.04279L10.3376 7.70946L10.9961 6.95688Z"/>
                          </svg>
                        </Button>
                      </RouterLink>
                    ))
                  }
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          ))}
        </Col>
      </Row>
      <Row className="sidebar__footer__content h-auto d-flex align-items-center w-100 position-absolute bottom-0 g-0">
        <Col>
          <Button className="bg-transparent border-0 shadow-none d-flex w-100">
            <Image className="sidebar__footer__content-image" src={require('assets/images/home/profile.svg').default}/>
            <p>Profilo</p>
          </Button>
          <Button className="bg-transparent border-0 shadow-none d-flex w-100">
            <Image className="sidebar__footer__content-image" src={require('assets/images/home/settings.svg').default}/>
            <p>Impostazioni</p>
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default Sidebar;