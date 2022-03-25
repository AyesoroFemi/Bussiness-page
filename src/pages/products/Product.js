import { GetStarted } from "../../components/GetStarted"
import { Layout } from "../../components/Layout"
import { Nav } from "../../components/navbar/Nav"
import { ProductList } from "./components/ProductList"
import { Footer } from "../../components/footer/Footer"


export const Product = () => {
    return (
        <div>
            <Nav/>
            <Layout>
                <h1>Products Overview</h1>
            </Layout>
            <ProductList />
            <div style={{marginBottom: '-4rem'}}>
                <GetStarted />
            </div>
            <Footer />
        </div>
    )
}