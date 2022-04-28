import React from 'react';
import './Notification.scss'
import {Button, Image} from "react-bootstrap";

const Notification = () => {
  return (
    <div>
      <Button className="notification-button bg-transparent border-0 shadow-none p-0">
        <Image src={require('assets/images/home/bell.svg').default}/>
        <div className="point position-absolute"/>
      </Button>
    </div>
  );
};

export default Notification;