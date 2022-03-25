import { LayoutWrapper } from "../../components/Layout"
import { Nav } from "../../components/navbar/Nav"
import { Posts } from "./components/Posts"
import { ConnectWithUs } from "../../components/ConnectWithUs"
import { Footer } from "../../components/footer/Footer"

export const Blog = () => {
    return (
        <div>
            <Nav/>
            <LayoutWrapper>
                <h1>Blog</h1>
                <p>
                    Updates and  news relating to Intelitech and our product portfolio.
                </p>
            </LayoutWrapper>
            <Posts/>
            <ConnectWithUs />
            <Footer />
        </div>
    )
}