import { ChooseUs } from "../../components/chooseUs/ChooseUs"
import { Footer } from "../../components/footer/Footer"
import { GetStarted } from "../../components/GetStarted"
import { LayoutWrapper } from "../../components/Layout"
import { Nav } from "../../components/navbar/Nav"
import { AboutUs } from "./components/AboutUs"
import { CompanyValue } from "./components/ComanyValue"

export const About = () => {
    return (
        <div>
           <Nav />
            <LayoutWrapper>
                <h1>About Us</h1>
            </LayoutWrapper>
            <AboutUs />
            <ChooseUs />
            <CompanyValue/>
            <div style={{marginBottom: '-4rem'}}>
                <GetStarted />
            </div>
            <Footer />
        </div>
    )
}