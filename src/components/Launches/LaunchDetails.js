import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container } from "reactstrap";
import { ThreeDot } from "react-loading-indicators";
import ReactPlayer from "react-player";
import Footer from "../Footer/Footer";
import GoBackLink from "../GoBack/GoBackLink";
import spacexApiService from "../../services/SpaceXApiService";
import "./LaunchDetails.css";

const LaunchDetails = () => {
  const { slug } = useParams();
  const [launchDetails, setLaunchDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLaunchDetails = async () => {
      setIsLoading(true);
      try {
        const responses = await spacexApiService.getV3("/launches", {
          slug: slug,
        });
        setLaunchDetails(responses);
      } catch (err) {
        setError("Error fetching details", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchLaunchDetails();
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
    links: { article_link, video_link, wikipedia },
    launch_site: { site_id, site_name, site_name_long },
    details,
    launch_date_utc,
    launch_date_local,
    launch_year,
  } = launchDetails;

  return (
    <>
      <Container className="mt-5">
        <div className="row justify-content-center align-items-center">
          <div className="col-md-6 col-sm-12">
            {error && <div>{error}</div>}
            <h1 className="details-title">Launch Details</h1>
            <p className="mt-3">
              <strong>Mission Details: </strong>
              {details}
            </p>

            <div className="mt-3">
              <h3>Launch Dates</h3>
              <ul>
                <li>
                  <p className="mt-1">
                    <strong>Launch Date UTC: </strong>
                    {launch_date_utc}
                  </p>
                </li>
                <li>
                  <p className="mt-1">
                    <strong>Launch Date Local: </strong>
                    {launch_date_local}
                  </p>
                </li>
                <li>
                  <p className="mt-1">
                    <strong>Launch Year: </strong>
                    {launch_year}
                  </p>
                </li>
              </ul>
            </div>

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

            <div className="mt-3">
              <h3>Launch Site Details</h3>
              <ul>
                <li>
                  <p className="mt-1">
                    <strong>Site Id: </strong>
                    {site_id}
                  </p>
                </li>
                <li>
                  <p className="mt-1">
                    <strong>Site Name: </strong>
                    {site_name}
                  </p>
                </li>
                <li>
                  <p className="mt-1">
                    <strong>Site Name Long: </strong>
                    {site_name_long}
                  </p>
                </li>
              </ul>
            </div>

            <div className="mt-3">
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

            <GoBackLink link={"/"} />
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default LaunchDetails;
