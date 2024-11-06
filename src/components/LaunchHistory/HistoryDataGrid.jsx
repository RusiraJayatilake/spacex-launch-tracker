import React, { useEffect, useState } from "react";
import DisplayCard from "../Card/DisplayCard";
import { CardBody, Card, CardTitle, CardSubtitle, Container } from "reactstrap";
import { getV4 } from "../../services/SpaceXApiService";
import { ThreeDot } from "react-loading-indicators";
import Layout from "../../layouts/layout";
import { Link } from "react-router-dom";

import "../../index.css";
import PageTitle from "../PageTitle/PageTitle";

const HistoryDataGrid = () => {
  const [historyData, setHistoryData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchHistoryData = async () => {
      setIsLoading(true);
      try {
        const res = await getV4("/history");
        setHistoryData(res);
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchHistoryData();
  }, []);

  if (isLoading) {
    return (
      <div className="row position-absolute w-100 h-100 align-items-center justify-content-center">
        <ThreeDot variant="bob" color="#363636" size="medium" />
      </div>
    );
  }

  return (
    <Layout>
      <Container style={{ minHeight: "100vh" }}>
        {/* <h1 className="grid-title">SpaceX History</h1> */}
        <PageTitle title={"SpaceX History"} />
        <div className="row">
          {historyData.map((value) => (
            <div className="col-12 col-sm-12 col-md-4 col-lg-3 mb-4">
              <div className="d-flex justify-content-center align-items-center">
                <Card
                  style={{
                    width: "18rem",
                    boxShadow: "0 5px 25px 0 rgba(0, 0, 0, .2)",
                  }}
                  key={value.id}
                >
                  <CardBody>
                    <CardTitle tag="h4">{value.title}</CardTitle>
                    <CardSubtitle className="mb-2 text-muted" tag="h6">
                      Event Date: <b>{value.event_date_utc}</b>
                    </CardSubtitle>
                    <CardSubtitle className="mb-2 text-muted" tag="h6">
                      Date Unix: <b>{value.event_date_unix}</b>
                    </CardSubtitle>

                    <Link
                      to={`/history-details/${value.id}`}
                      style={{ textDecoration: "none" }}
                    >
                      Read More...
                    </Link>
                  </CardBody>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Layout>
  );
};

export default HistoryDataGrid;
