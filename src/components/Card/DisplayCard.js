import { CardBody, Card, CardTitle, CardSubtitle } from "reactstrap";
import { Link } from "react-router-dom";

const DisplayCard = ({ data }) => {
  return (
    <>
      {data.map((value) => (
        <div className="col-12 col-md-4 col-lg-3 col-sm-12 mb-4">
          <div className="d-flex justify-content-center align-items-center">
            <Card
              style={{
                width: "18rem",
                boxShadow: "0 5px 25px 0 rgba(0, 0, 0, .2)",
              }}
              key={value.flight_number}
            >
              <div className="w-100 d-flex justify-content-center align-items-center">
                <img
                  alt="Sample"
                  loading="lazy"
                  src={value.links.mission_patch}
                  style={{
                    width: "80%",
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
    </>
  );
};

export default DisplayCard;
