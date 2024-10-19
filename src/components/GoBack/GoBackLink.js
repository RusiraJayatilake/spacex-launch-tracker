import { Link } from "react-router-dom";
import { FaLongArrowAltLeft } from "react-icons/fa";

const GoBackLink = () => {
  return (
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
  );
};

export default GoBackLink;
