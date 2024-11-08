import { CardBody, Card, CardTitle, CardSubtitle } from "reactstrap";
import { Link } from "react-router-dom";

const DisplayCard = ({ index, image, title, name, type, year, id }) => {
  return (
    <>
      <div className="col-12 col-sm-12 col-md-4 col-lg-3 mb-4">
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
                src={image}
                style={{
                  width: "80%",
                }}
              />
            </div>

            <CardBody>
              <CardTitle tag="h4">{title}</CardTitle>
              <CardSubtitle className="mb-2 text-muted" tag="h6">
                Rocket Name: <b>{name}</b>
              </CardSubtitle>
              <CardSubtitle className="mb-2 text-muted" tag="h6">
                Rocket Type: <b>{type}</b>
              </CardSubtitle>
              <CardSubtitle className="mb-2 text-muted" tag="h6">
                Launch Year: <b>{year}</b>
              </CardSubtitle>
              <Link
                to={`/launch-details/${id}`}
                style={{ textDecoration: "none" }}
              >
                Read More...
              </Link>
            </CardBody>
          </Card>
        </div>
      </div>
    </>
  );
};

export default DisplayCard;
