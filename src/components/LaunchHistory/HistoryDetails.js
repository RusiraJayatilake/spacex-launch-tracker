import React, { useEffect, useState } from "react";
import { Container } from "reactstrap";
import { useParams } from "react-router-dom";
import { ThreeDot } from "react-loading-indicators";
import GoBackLink from "../GoBack/GoBackLink";
import Footer from "../Footer/Footer";
import "../../index.css";

// services
import spacexApiService from "../../services/SpaceXApiService";

const HistoryDetails = () => {
  const { slug } = useParams();
  const [historyDetails, setHistoryDetails] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchHistoryDetails = async () => {
      try {
        const data = await spacexApiService.getV4("/history", { slug: slug });
        setHistoryDetails(data);
      } catch (err) {
        setError(`Error fetching history details: ${err.message}`);
      }
    };

    fetchHistoryDetails();
  }, [slug]);

  if (!historyDetails) {
    return (
      <div className="row position-absolute w-100 h-100 align-items-center justify-content-center">
        <ThreeDot variant="bob" color="#363636" size="medium" />
      </div>
    );
  }

  // destructure the data
  const {
    links: { article },
    title,
    details,
  } = historyDetails;

  return (
    <>
      <Container className="mt-5" style={{ minHeight: "100vh" }}>
        <div className="row justify-content-center align-items-center">
          <div className="col-md-6 col-sm-12">
            {error && <div>{error}</div>}
            <h1 className="details-title">History Details</h1>
            <p className="mt-3">
              <strong>Title: </strong>
              {title}
            </p>

            <p className="mt-3">
              <strong>Details: </strong>
              {details}
            </p>

            <p className="mt-3">
              <strong>Article Link: </strong>
              <a href={article} target="_blank">
                {article}
              </a>
            </p>

            <GoBackLink link={"/history"} />
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default HistoryDetails;
