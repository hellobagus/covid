import React, { useState, useEffect } from "react";

function Data() {
  const [data, setData] = useState([]);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://api.covid19api.com/summary`);

      const resJson = await response.json();
      setloading(false);
      setData(resJson.Global);
    };
    fetchData();
  }, []);

  return (
    <div>
      {loading ? (
        <div className=" text-center" style={{ fontSize: "25px" }}>
        
        </div>
      ) : (
        <>
        <div className="row">
          <div className="col-sm-12">
          <h5 className="text-danger font-weight-bold text-uppercase">New Confirmed: {data.NewConfirmed}</h5>
          <h5 className="text-danger font-weight-bold text-uppercase">Total Confirmed: {data.TotalConfirmed}</h5>
          <h5 className=" text-muted text-dark font-weight-bold text-uppercase">Total Deaths: {data.TotalDeaths}</h5>
          <img src="3670440.svg" alt=""/>
             <h6 className="font-weight-bold text-muted text-center">THANK YOU DOCTORS AND  NURSES</h6>
             <br/>
          <h5 className="text-success font-weight-bold text-uppercase">Total Recovered: {data.TotalRecovered}</h5>
          </div>
        </div>
         
        </>
      )}
    </div>
  );
}
export default Data;
