import React from "react";
import { Container } from "reactstrap";
import { useEffect, useState } from "react";
import { ThreeDot } from "react-loading-indicators";
import DisplayCard from "../Card/DisplayCard";
import Layout from "../../layouts/layout";
import spacexApiService from "../../services/SpaceXApiService";
import PageTitle from "../PageTitle/PageTitle";

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
      const queryParam = {
        limit: RESULTS_PER_PAGE,
        offset: (page - 1) * RESULTS_PER_PAGE,
      };

      const response = await spacexApiService.getV3("/launches/past", {
        queryParam,
      });

      const data = response;

      // Check if there is more data to load
      if (data.length < RESULTS_PER_PAGE) {
        setHasMore(false);
      }

      setLaunchesData((prevLaunches) => [...prevLaunches, ...data]);
    } catch (err) {
      setError(`Error fetching launch data: ${err.message}`);
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
        <PageTitle title={"SpaceX Launch Data"} />

        <div className="row">
          {error && <div>{error}</div>}
          {/* Display Card */}
          <DisplayCard data={launchesData} />
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
    </Layout>
  );
};

export default LaunchDataGrid;
