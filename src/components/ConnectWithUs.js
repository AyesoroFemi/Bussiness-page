import { Link } from "react-router-dom"
import styled from "styled-components"
import { Container } from "./navbar/Nav.styles"


export const ConnectWithUs = () => {
    return (
        <ConnectWrapper>
            <ContainerExt>
                <SocialWrapper>
                    <h1>Connect with us</h1>
                    <div>
                        <Link to="#">
                            <box-icon size="32px" name='facebook' type='logo' color='#ffffff' ></box-icon>
                        </Link>
                        <Link to="#">
                            <box-icon size="32px" name='instagram' type='logo' color='#ffffff' ></box-icon>
                        </Link>
                        <Link to="#">
                            <box-icon size="32px" name='twitter' type='logo' color='#ffffff' ></box-icon>
                        </Link>
                        <Link to="#">
                            <box-icon size="32px" name='linkedin' type='logo' color='#ffffff' ></box-icon>
                        </Link>
                        <Link to="#">
                            <box-icon size="32px" name='youtube' type='logo' color='#ffffff' ></box-icon>
                        </Link>
                    </div>
                </SocialWrapper>
                <OnlineWrapper>
                    <h1>24/7 Online Support</h1>
                    <p><box-icon name='phone' type='solid' color='#ffffff' ></box-icon>
                        <span>
                             +234-809-022-4422
                        </span>
                    </p>
                    <p><box-icon style={{ marginRight: '1.4rem',}} name='envelope' type='solid' color='#ffffff' ></box-icon>
                        <span>
                            info@intellitech.ng
                        </span>
                    </p>
                    
                </OnlineWrapper>
            </ContainerExt>
        </ConnectWrapper>
    )
}

export const ConnectWrapper = styled.div`
    background: #0077B5;
`

export const ContainerExt = styled(Container)`
    display: flex;
    margin-top: 0.5rem;

    @media screen and (max-width: 991px) {
       display: flex;
       flex-direction: column;
    }
 
`

export const SocialWrapper = styled.div`
  
   margin: 24px 0;
   border-right: 1px solid #fff;
   flex: 1;
   color: #fff;

   h1 {
    margin-top: -0.05rem;
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
   }
   div{
       margin-top: 50px;
       margin-bottom: 76px;
       display: flex;
       gap: 3.1rem;
   }

   @media screen and (max-width: 991px) {
       border: none;

       div {
           gap: 1.5rem;
       }
    }


`
export const OnlineWrapper = styled.div`
   flex: 1;

   h1{
       margin-top: 24px;
       text-align: right;
       color: #fff;
       font-family: 'Montserrat', sans-serif;
       font-weight: 500;
   }

   p:nth-of-type(1) {
       margin-top: 50px;
   }

   p:nth-of-type(1), p:nth-of-type(2){
       text-align: right;
       display: flex;
       justify-content: flex-end;
       align-items: center;
       gap: .5rem;
       color: #fff;
       font-size: 20px;
   }

   @media screen and (max-width: 991px) {
        h1{
            text-align: left;
        }
        p:nth-of-type(1), p:nth-of-type(2){
            display: block;
            text-align: left;
        }
    }
`