import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container } from "reactstrap";
import { ThreeDot } from "react-loading-indicators";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";
import Footer from "../Footer";
import { FaLongArrowAltLeft } from "react-icons/fa";
import "./details.css";

const LaunchDetails = () => {
  const { slug } = useParams();
  const [launchDetails, setLaunchDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    try {
      fetch(`https://api.spacexdata.com/v3/launches/${slug}`)
        .then((res) => res.json())
        .then((data) => {
          setLaunchDetails(data);
        });
    } catch (err) {
      setError("Error fetching details", err);
    } finally {
      setIsLoading(false);
    }
  }, [slug]);

  if (!launchDetails) {
    return (
      <div className="row position-absolute w-100 h-100 align-items-center justify-content-center">
        <ThreeDot variant="bob" color="#363636" size="medium" />
      </div>
    );
  }

  // desctructuring data
  const {
    details,
    links: { article_link, video_link, wikipedia },
    launch_date_utc,
    launch_date_local,
    launch_year,
  } = launchDetails;

  return (
    <>
      <Container className="mt-5" style={{ minHeight: "100vh" }}>
        <div className="row justify-content-center align-items-center">
          <div className="col-md-6 col-sm-12">
            {error && <div>{error}</div>}
            <h1 style={{ fontWeight: "600", fontSize: "50px" }}>
              Launch Details
            </h1>
            <p className="mt-3">
              <strong>Mission Details: </strong>
              {details}
            </p>

            <p className="mt-3">
              <strong>Launch Date UTC: </strong>
              {launch_date_utc}
            </p>
            <p className="mt-1">
              <strong>Launch Date Local: </strong>
              {launch_date_local}
            </p>
            <p className="mt-1">
              <strong>Launch Year: </strong>
              {launch_year}
            </p>

            <p className="mt-3">
              <strong>Article Link: </strong>
              <a href={article_link} target="_blank">
                {article_link}
              </a>
            </p>

            <p className="mt-3">
              <strong>Wikipedia Links: </strong>
              <a href={wikipedia} target="_blank">
                {wikipedia}
              </a>
            </p>

            <div className="mt-2">
              <div className="player-wrapper">
                <ReactPlayer
                  className="react-player"
                  url={video_link}
                  controls={true}
                  width="100%"
                  height="100%"
                />
              </div>
            </div>

            <div className="d-flex mt-4 mb-5 gap-2 align-items-center">
              <FaLongArrowAltLeft />
              <Link
                to="/"
                style={{
                  width: "100px",
                  textDecoration: "none",
                  color: "#000",
                  cursor: "pointer",
                }}
              >
                Go Back
              </Link>
            </div>
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default LaunchDetails;
