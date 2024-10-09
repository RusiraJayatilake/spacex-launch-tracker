import React, { useEffect, useState } from "react";
import Falcon1 from "../../images/falcon1.png";
import Falcon9 from "../../images/falcon9.png";
import FalconHeavy from "../../images/falcon_heavy.png";
import StarShip from "../../images/starship.png";
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP,
} from "./ServicesElements";

const Services = () => {
  const [rocketData, setRocketData] = useState([]);

  const rocketImages = [Falcon1, Falcon9, FalconHeavy, StarShip];

  useEffect(() => {
    fetch("https://api.spacexdata.com/v3/rockets")
      .then((res) => res.json())
      .then((data) => {
        setRocketData(data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <ServicesContainer id="services">
      <ServicesH1>Our Rockets</ServicesH1>
      <ServicesWrapper>
        {rocketData.map((rocket, index) => (
          <ServicesCard key={rocket.id}>
            <ServicesIcon
              src={rocketImages[index % rocketImages.length]}
              alt={rocket.rocket_name}
            />
            <ServicesH2>{rocket.rocket_name}</ServicesH2>
            <ServicesP>{rocket.description}</ServicesP>
          </ServicesCard>
        ))}
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
