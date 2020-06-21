import React, { useState, useEffect } from "react";
import Card from "./Card";

function India() {
  const [data, setData] = useState([]);
  const [loading, setloading] = useState(true);


  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://api.covid19api.com/live/country/india`
      );
      const resJson = await response.json();
      setloading(false);
      setData(resJson.pop());
    };
    fetchData();
  }, []);
  return (
    <div>
      <h5 className="mb-4 font-weight-bold text-secondary">
        COVID-19 LIVE UPDATES OF INDIA
      </h5>
      <p
        className="font-weight-bold text-secondary"
        style={{ fontSize: "12px" }}
      >
        <span className="text-muted"> LAST UPDATED : </span>{" "}
        {new Date(Date.now()).toDateString()}
      </p>
      <hr/>
      {loading ? (
            <div className=" text-center" style={{ fontSize: "25px" }}>
              Loading....
            </div>
          ) : (
            
            <div className="container">
          
      <div className="row">
        <div className="col-sm-3 mt-2">
          <Card
            cardbody={"bg-danger"}
            className={"text-light text-uppercase text-center font-weight-bold"}
            data={"Confirmed"}
            title={`${data.Confirmed}`}
          />
        </div>
        <div className="col-sm-3 mt-2">
          <Card
            cardbody={"bg-danger"}
            className={"text-light text-uppercase text-center font-weight-bold"}
            data={"Deaths"}
            title={`${data.Deaths}`}
          />
        </div>
        <div className="col-sm-3 mt-2">
          <Card
            cardbody={"bg-success"}
            className={"text-light text-uppercase text-center font-weight-bold"}
            data={"Recovered"}
            title={` ${data.Recovered}`}
          />
        </div>
        <div className="col-sm-3 mt-2">
          <Card
            cardbody={"bg-info"}
            className={"text-light text-uppercase text-center font-weight-bold"}
            data={"Active"}
            title={` ${data.Active}`}
          />
        </div>
      </div>
          
      </div>
  )}
     
    </div>
  );
}

export default India;
