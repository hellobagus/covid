import React, { useState, useEffect } from "react";
import Data from "./Data";
import India from "./India";
import "./Home.css";

import Navbar from './Navbar'

function Home() {
  const [data, setData] = useState([]);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    const fetchdata = async () => {
      const response = await fetch(`https://api.covid19api.com/summary`);
      const resJson = await response.json();
      setloading(false);
      setData(resJson.Countries);
    };

    fetchdata();
  }, []);

  return (
    <div>
      <>
      <Navbar />
        <div className=" container">
       
          <div className="row">
            <div className="col-sm-6 mb-5">
              <h5 className=" mt-5 mb-4 font-weight-bold text-secondary">
                COVID-19 LIVE UPDATES OF THE WORLD
              </h5>
              <p
                className="font-weight-bold text-secondary"
                style={{ fontSize: "12px" }}
              >
                <span className="text-muted"> LAST UPDATED : </span>{" "}
                {new Date(Date.now()).toDateString()}
              </p>
              <hr />
              <Data />
            </div>
            <div className="col-sm-6 mb-5">
              <img src="3631351.svg" alt="" />
            </div>
            <div className="col-sm-12 ">
              <India />
            </div>
          </div>

          {loading ? (
            <div className=" text-center" style={{ fontSize: "25px" }}>
              Loading....
            </div>
          ) : (
            ""
          )}
        </div>
        <div className="container-fluid mt-5">
          <div className="text-center">
            <h5 className="text-uppercase text-muted font-weight-bold">
              total cases per country
            </h5>
            <p className="table-p text-success">
              Updated on {new Date(Date.now()).toDateString()}{" "}
            </p>
          </div>
          <hr />
          <div className="row">
            <div className="col-sm-2"></div>

            <div className="col-sm-8">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th
                      className="sticky-top bg-secondary text-light table-font"
                      scope="col"
                      style={{ fontSize: "13px" }}
                    >
                      {" "}
                      Country
                    </th>
                    <th
                      className="sticky-top bg-secondary text-light table-font"
                      scope="col"
                      style={{ fontSize: "13px" }}
                    >
                      Confirmed
                    </th>
                    <th
                      className="sticky-top bg-secondary text-light table-font"
                      scope="col"
                      style={{ fontSize: "13px" }}
                    >
                      Deaths
                    </th>

                    <th
                      className="sticky-top bg-secondary text-light table-font"
                      scope="col"
                      style={{ fontSize: "13px" }}
                    >
                      Recovered
                    </th>
                    {/* <th
                      className="sticky-top bg-secondary text-light"
                      scope="col"
                    >
                      Date
                    </th> */}
                  </tr>
                </thead>
                <tbody>
                  {data.map((el) => (
                    <tr key={el.CountryCode}>
                      <td className="table-font">{el.Country}</td>
                      <td className="table-font"> {el.TotalConfirmed}</td>
                      <td className="table-font">{el.TotalDeaths}</td>
                      <td className="table-font">{el.TotalRecovered}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="col-sm-2"></div>
          </div>
        </div>
      </>
    </div>
  );
}

export default Home;
