import { Footer } from "../../components/footer/Footer";
import { Nav } from "../../components/navbar/Nav";
import { AboutSession } from "./components/aboutSession/AboutSession";
import { ChooseUs } from "./components/chooseUs/ChooseUs.js";
import { ClientSession } from "../../components/ClientSession";
import { ConnectWithUs } from "../../components/ConnectWithUs";
import { GetStarted } from "../../components/GetStarted";
import { ServiceCard } from "./components/services/ServiceCard";
import { ServiceText } from "./Home.styles";

export const Home = () => {
  return (
    <>
      <Nav />
      <ServiceText>
        <h3>Services</h3>
        <h1>What We Do</h1>
        <p>
          We see it as our purpose is to help our customers to do their own
          jobs. We deliver all manner of services from installing and managing
          your on-site systems, to cloud and hybrid solutions.
        </p>
      </ServiceText>
      <ServiceCard />
      <AboutSession />
      <ChooseUs/>
      <ConnectWithUs />
      <ClientSession/>
      <div style={{marginBottom: '-4rem'}}>
        <GetStarted/>
      </div>
      <Footer />
    </>
  );
};
