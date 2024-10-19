import React, { useEffect, useState } from "react";
import DisplayCard from "../Card/DisplayCard";
import GoBackLink from "../GoBack/GoBackLink";
import {
  CardBody,
  Card,
  CardTitle,
  CardSubtitle,
  Container,
  CardText,
} from "reactstrap";
import spacexApiService from "../../services/SpaceXApiService";
import { ThreeDot } from "react-loading-indicators";

const HistoryDetails = () => {
  const [historyData, setHistoryData] = useState([]);

  useEffect(() => {
    const fetchHistoryData = async () => {
      try {
        const results = await spacexApiService.get("/history");
        setHistoryData(results);
        // console.log(historyData);
      } catch (err) {
        console.error(err);
      }
    };

    fetchHistoryData();
  }, []);

  return (
    <Container>
      <div className="row">
        <h1>Space X Launch History</h1>
        {historyData.map((value, index) => (
          <div className="col-12 col-md-4 col-lg-3 col-sm-12 mb-4">
            <div className="d-flex justify-content-center align-items-center">
              <Card
                style={{
                  width: "18rem",
                  boxShadow: "0 5px 25px 0 rgba(0, 0, 0, .2)",
                }}
                key={index}
              >
                {/* <div className="w-100 d-flex justify-content-center align-items-center">
                  <img
                    alt="Sample"
                    loading="lazy"
                    src={""}
                    style={{
                      width: "80%",
                    }}
                  />
                </div> */}

                <CardBody>
                  <CardTitle tag="h4">{value.title}</CardTitle>
                  <CardSubtitle className="mb-2 text-muted" tag="h6">
                    Flight Number: <b>{value.flight_number}</b>
                  </CardSubtitle>
                  <CardSubtitle className="mb-2 text-muted" tag="h6">
                    Event Date: <b>{value.event_date_utc}</b>
                  </CardSubtitle>
                  <CardText className="mb-2 text-muted" tag="h6">
                    Details: {value.details}
                  </CardText>

                  {/* <Link
                to={`/details/${value.flight_number}`}
                style={{ textDecoration: "none" }}
              >
                Read More...
              </Link> */}
                </CardBody>
              </Card>
            </div>
          </div>
        ))}
        <GoBackLink />
      </div>
    </Container>
  );
};

export default HistoryDetails;
