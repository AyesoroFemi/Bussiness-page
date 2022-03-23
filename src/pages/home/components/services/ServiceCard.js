import { CardSession } from "./ServiceCard.styles";
import { Card } from "../../../../components/card";
export const ServiceCard = () => {
  return (
    <CardSession>
      <Card>
        <img src="assets/icon1.svg" alt="" />
        <h3>Software Development</h3>
        <p>
          We can ensure your website represents your brand values. From simple
          brochure websites to complex web apps.
        </p>
        <a href="">Learn more</a>
      </Card>
      <Card>
        <img src="assets/icon4.svg" alt="" />
        <h3>Maintenance</h3>
        <p>
          We provide on-site and off-site computer repair and networking
          services for businesses, schools and residential customers in and
          around.
        </p>
        <a href="">Learn more</a>
      </Card>
      <Card>
        <img src="assets/icon7.svg" alt="" />
        <h3>Network Design</h3>
        <p>
          We specialise in providing bespoke IT network services that are
          designed and maintained to suit your company’s requirements.
        </p>
        <a href="">Learn more</a>
      </Card>
      <Card>
        <img src="assets/icon8.svg" alt="" />
        <h3>Training</h3>
        <p>
          We deliver true Traning, focusing on strategic decisions and practical
          actions tailored to our clients' unique reality
        </p>
        <a href="">Learn more</a>
      </Card>
      <Card>
        <img src="assets/icon2.svg" alt="" />
        <h3>Computer & Equipment Sales </h3>
        <p>
          We keep many items in stock, including computers, flat-screen
          displays, networking equipment, and Computer Accessories.
        </p>
        <a href="">Learn more</a>
      </Card>

      <Card>
        <img src="assets/icon6.svg" alt="" />
        <h3>Consultancy</h3>
        <p>
          Our team of experts can deliver on the day you need it, whether you
          are moving office, expanding or installing new servers.
        </p>
        <a href="">Learn more</a>
      </Card>
        {/* 
    <Card>
        <img src="assets/icon1.svg" alt="" />
        <h3>Software Development</h3>
        <p>
          We can ensure your website represents your brand values. From simple
          brochure websites to complex web apps.
        </p>
        <a href="">Learn more</a>
      </Card> */}
    </CardSession>
  );
};
