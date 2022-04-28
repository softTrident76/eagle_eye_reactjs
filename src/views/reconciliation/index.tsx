import React, { useEffect, useState } from 'react';
import './index.scss';
import Sidebar from "components/general/Sidebar/Sidebar";
import Warehouse from "components/reconciliation/Warehouse/Warehouse";
import TableReconciliation from "components/reconciliation/TableReconciliation/TableReconciliation";
import axios from "axios";
import { useDispatch } from "react-redux";

const Index = () => {
  axios.defaults.headers.common['Authorization'] = `Bearer ${process.env.REACT_APP_BEARER_TOKEN}`
  const dispatch = useDispatch()
  const [, setValueFromWarehouse] = useState('')
  const getValueFromWarehouse = (data:any) => {
    setValueFromWarehouse(data)
  }
  useEffect(() => {
    const getList = async () => {
      const { data } = await axios.get(`${process.env.REACT_APP_BASE_URL}items/ledger/reconciliation/daily/`)
      dispatch({type: "SET_LIST",payload:data.results})
    }
    getList()
  }, [dispatch])


  return (
    <div className="d-flex">
      <Sidebar/>
      <div className="reconciliation w-100">
        <Warehouse getValueFromWarehouse={getValueFromWarehouse}/>
        <TableReconciliation/>
      </div>
    </div>
  );
};

export default Index;