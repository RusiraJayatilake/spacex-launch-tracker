import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import SpaceXApiService from "../../services/SpaceXApiService";
import { ThreeDot } from "react-loading-indicators";
import PageTitle from "../PageTitle/PageTitle";
import GoBackLink from "../GoBack/GoBackLink";
import { Container } from "reactstrap";
import Footer from "../Footer/Footer";

const MissionDetails = () => {
  const { slug } = useParams();
  const [missionDetails, setMissionDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMissionDetails = async () => {
      setIsLoading(true);

      try {
        const res = await SpaceXApiService.getV3("/missions", { slug: slug });
        setMissionDetails(res);
      } catch (err) {
        console.error(err);
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMissionDetails();
  }, [slug]);

  if (isLoading) {
    return (
      <div className="row position-absolute w-100 h-100 align-items-center justify-content-center">
        <ThreeDot variant="bob" color="#363636" size="medium" />
      </div>
    );
  }

  const mission_name = missionDetails?.mission_name;
  const description = missionDetails?.description;
  const wikipedia = missionDetails?.wikipedia;
  const twitter = missionDetails?.twitter;
  const website = missionDetails?.website;

  return (
    <>
      <Container className="mt-5" style={{ minHeight: "100vh" }}>
        <div className="row justify-content-center align-items-center">
          <div className="col-md-6 col-sm-12">
            {error && <div>{error}</div>}
            <h1>Mission Details</h1>

            {missionDetails && (
              <>
                <h5 className="mt-3">
                  <strong>Mission Name: {mission_name}</strong>
                </h5>
                <p className="mt-3">{description}</p>
                <div className="mt-3">
                  <a href={wikipedia} target="_blank">
                    {wikipedia}
                  </a>
                </div>
                <div className="mt-3">
                  <a href={website} target="_blank">
                    {website}
                  </a>
                </div>
                <div className="mt-3">
                  <a href={twitter} target="_blank">
                    {twitter}
                  </a>
                </div>
              </>
            )}

            <GoBackLink link={"/missions"} />
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default MissionDetails;
