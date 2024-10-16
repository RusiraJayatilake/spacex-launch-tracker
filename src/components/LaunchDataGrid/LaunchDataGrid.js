import React from "react";

import { Container, CardBody, Card, CardTitle, CardSubtitle } from "reactstrap";
import { useEffect, useState } from "react";
import { ThreeDot } from "react-loading-indicators";
import { Link } from "react-router-dom";
import "./LaunchData.css";

const LaunchDataGrid = () => {
  const [launchesData, setLaunchesData] = useState([]); // Data state
  const [page, setPage] = useState(1); // Page state for pagination
  const [isLoading, setIsLoading] = useState(false); // Loading state
  const [hasMore, setHasMore] = useState(true); // To track if more data is available
  const [error, setError] = useState(null); // error state

  const RESULTS_PER_PAGE = 8;

  const fetchLaunchesData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `https://api.spacexdata.com/v3/launches/past?limit=${RESULTS_PER_PAGE}&offset=${
          (page - 1) * RESULTS_PER_PAGE
        }`
      );

      const data = await response.json();

      // Check if there is more data to load
      if (data.length < RESULTS_PER_PAGE) {
        setHasMore(false);
      }

      setLaunchesData((prevLaunches) => [...prevLaunches, ...data]);
    } catch (err) {
      setError("Failed to fetch data");
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  // Fetch data whenever the page changes (only after button click)
  useEffect(() => {
    if (page > 1 || launchesData.length === 0) {
      fetchLaunchesData();
    }
  }, [page]);

  // Load more data by increasing the page number
  const loadMoreLaunchesData = () => {
    setPage((prevPages) => prevPages + 1);

    if (!hasMore && !isLoading) {
      alert("No more launches to load.");
    }
  };

  return (
    <Container style={{ minHeight: "100vh" }}>
      <h1 className="grid-title">SpaceX Launch Data</h1>

      <div className="row">
        {error && <div>{error}</div>}
        {isLoading && <ThreeDot variant="bob" color="#363636" size="medium" />}
        {launchesData.map((value, index) => (
          <div className="col-12 col-md-4 col-lg-3 col-sm-12 mb-4">
            <div className="d-flex justify-content-center align-items-center">
              <Card
                style={{
                  width: "18rem",
                  boxShadow: "0 5px 25px 0 rgba(0, 0, 0, .2)",
                }}
                key={index}
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
                  <CardSubtitle className="mb-2 text-muted" tag="h6">
                    Launch Year: <b>{value.launch_year}</b>
                  </CardSubtitle>
                  <Link
                    to={`/details/${value.flight_number}`}
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

      <div className="row justify-content-center align-items-center">
        <button
          type="button"
          className="btn btn-outline-dark mb-5"
          onClick={loadMoreLaunchesData}
          style={{ width: "150px", fontWeight: "500", fontSize: "20px" }}
        >
          Load More
        </button>
      </div>
    </Container>
  );
};

export default LaunchDataGrid;
