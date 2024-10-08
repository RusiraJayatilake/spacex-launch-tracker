import React from "react";

import { Heading } from "./TableElements";
import {
  Container,
  CardBody,
  Card,
  CardTitle,
  CardSubtitle,
  CardText,
} from "reactstrap";
import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

const RocketDataTable = () => {
  const [launchesData, setLaunchesData] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    try {
      fetch("https://api.spacexdata.com/v3/launches/past")
        .then((res) => res.json())
        .then((data) => {
          setLaunchesData([...launchesData, ...data]);
          setPage(page + 1);
          // console.log(data);
        });
    } catch (err) {
      console.error(err);
    }
  }, []);

  return (
    <Container>
      <Heading>SpaceX Launch Data</Heading>
      <div className="row gap-4 mb-5 justify-content-center">
        {launchesData.map((value) => (
          <Card
            style={{
              width: "18rem",
              boxShadow: "0 5px 25px 0 rgba(0, 0, 0, .2)",
            }}
            key={value.id}
          >
            <div className="w-100 d-flex justify-content-center align-items-center">
              <img
                alt="Sample"
                loading="lazy"
                src={value.links.mission_patch}
                style={{
                  width: "80%",
                  height: "80%",
                }}
              />
            </div>

            <CardBody>
              <CardTitle tag="h4">{value.mission_name}</CardTitle>
              <CardSubtitle className="mb-2 text-muted" tag="h6">
                Rocket Name: <b>{value.rocket.rocket_name}</b>
              </CardSubtitle>
              <CardSubtitle className="mb-2 text-muted" tag="h6">
                Rocket Type: <b>{value.rocket.rocket_type}</b>
              </CardSubtitle>
              {/* <CardText>{value.details}</CardText> */}
              <a
                href={value.links.video_link}
                target="_blank"
                style={{ textDecoration: "none" }}
              >
                Read More...
              </a>
            </CardBody>
          </Card>
        ))}
      </div>
    </Container>
  );
};

export default RocketDataTable;
