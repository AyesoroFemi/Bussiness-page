import { LayoutWrapper } from "../../components/Layout";
import { Nav } from "../../components/navbar/Nav";
import { BlogLayout } from "./components/BlogLayout";
import { Traning } from "./components/Training";
import { ClientSession } from "../../components/ClientSession"
import { GetStarted } from "../../components/GetStarted"
import { Footer } from "../../components/footer/Footer"

export const Services = () => {
  return (
    <div>
      <Nav/>
      <LayoutWrapper>
        <h1>Services</h1>
        <p>
          We see it as our purpose is to help our customers to do their own
          jobs. We deliver all manner of services <br /> from installing and managing
          your on-site systems, to cloud and hybrid solutions.
        </p>
      </LayoutWrapper>
      <BlogLayout/>
      <Traning/>
      <ClientSession />
      <div style={{marginBottom: '-4rem'}}>
        <GetStarted/>
      </div>
      <Footer />
    </div>
  );
};
