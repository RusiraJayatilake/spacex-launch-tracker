import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container } from "reactstrap";
import { ThreeDot } from "react-loading-indicators";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";
import Footer from "../Footer";
import { FaLongArrowAltLeft } from "react-icons/fa";

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
  } = launchDetails;

  return (
    <>
      <Container className="mt-4">
        <div className="row">
          {error && <div>{error}</div>}
          <h1>Launch Details</h1>
          <p className="mt-3">
            <strong>Mission Details: </strong>
            {details}
          </p>
          <p className="mt-3">
            <strong>Mission Details: </strong>
            <a href={article_link} target="_blank">
              {article_link}
            </a>
          </p>

          <div className="mt-2">
            <ReactPlayer
              url={video_link}
              controls={true}
              width={840}
              height={460}
            />
          </div>

          <p className="mt-3">
            <strong>Wikipedia Links: </strong>
            <a href={wikipedia} target="_blank">
              {wikipedia}
            </a>
          </p>

          <div className="d-flex mb-5 gap-2 align-items-center">
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
      </Container>
      <Footer />
    </>
  );
};

export default LaunchDetails;
