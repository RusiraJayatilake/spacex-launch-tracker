import React, { useEffect, useState } from "react";
import Layout from "../../layouts/layout";
import PageTitle from "../PageTitle/PageTitle";
import { Container, Card, CardTitle, CardSubtitle, CardBody } from "reactstrap";
import SpacexApiService from "../../services/SpaceXApiService";
import { ThreeDot } from "react-loading-indicators";
import { Link } from "react-router-dom";

const Missions = () => {
  const [missionData, setMissionData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchMissionData = async () => {
      setIsLoading(true);
      try {
        const res = await SpacexApiService.getV3("/missions");
        setMissionData(res);
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMissionData();
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
        <PageTitle title={"SpaceX Missions"} />
        <div className="row">
          {missionData.map((value, index) => (
            <div className="col-12 col-sm-12 col-md-4 col-lg-3 mb-4">
              <div className="d-flex justify-content-center align-items-center">
                <Card
                  style={{
                    width: "18rem",
                    boxShadow: "0 5px 25px 0 rgba(0, 0, 0, .2)",
                  }}
                  key={index}
                >
                  <CardBody>
                    <CardTitle tag="h4">{value.mission_name}</CardTitle>
                    <div className="row">
                      <CardSubtitle className="mb-2 text-muted" tag="h6">
                        <b>Manufacturers</b>
                      </CardSubtitle>
                      <div style={{ padding: "8px 0px auto 0px" }}>
                        {value.manufacturers.map((val, i) => (
                          <ul key={i}>
                            <li style={{ lineHeight: "1.2" }}>{val}</li>
                          </ul>
                        ))}
                      </div>
                    </div>

                    <Link
                      to={`/mission-details/${value.mission_id}`}
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

export default Missions;
