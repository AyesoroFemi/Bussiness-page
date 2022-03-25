
import styled from "styled-components"
import { Container } from "../../../components/navbar/Nav.styles"


export const TraningList = () => {
    return (
        <Wrapper>
           <ListWrapper>
                <div>
                    <p>
                        CompTIA A+/CDIA+/CTT+/LINUX+/Network+/ <br/>
                        Strata/Project+/Server+/Security
                    </p>
                    <h4>
                    Valid certificate
                    </h4>     
                </div>
                <div>
                    <p>
                         Microsoft MCSA/MSCA/MSCE/MCITP/MCAS
                    </p>
                    <h4>
                    Valid certificate
                    </h4>     
                </div>
                <div>
                    <p>
                        Cisco CCNA/CCIE/CCNP/CCDA
                    </p>
                    <h4>
                    Valid certificate
                    </h4>     
                </div>
                <div>
                    <p>
                        Wordpress/MySQL/HTML/CSS/JAVASCRIPT/ <br/> PHP/BOOTSTRAP/JQUERY
                    </p>
                    <h4>
                    Valid certificate
                    </h4>     
                </div>
                <div>
                    <p>
                       Citrix CCA/CCEA/XenApp
                    </p>
                    <h4>
                         Certificate
                    </h4>     
                </div>
                <div>
                    <p>
                        PRINCE2
                    </p>
                    <h4>
                        Certificate
                    </h4>     
                </div>
           </ListWrapper>
           <ListWrapper>
                <div>
                    <p>
                        VMware ESXI/vShere/vCenter/vCloud
                    </p>
                    <h4>
                    Valid certificate
                    </h4>     
                </div>
                <div>
                    <p>
                        Apache/IIS Web Server
                    </p>
                    <h4>
                        Certificate
                    </h4>     
                </div>
                <div>
                    <p>
                        Python/C/C#/C++/Java/Swift/Android/XML/ASP.NET
                    </p>
                    <h4>
                    Valid certificate
                    </h4>     
                </div>
                
                <div>
                    <p>
                        Cloud Computing
                    </p>
                    <h4>
                        Valid certificate   
                    </h4>     
                </div>
                <div>
                    <p>
                        Oracle Database
                    </p>
                    <h4>
                        Valid certificate
                    </h4>     
                </div>
                <div>
                    <p>
                        Visual Studio/Netbeans/Eclipse/IntelliJ IDea/ <br/> Android Studio/AppCode
                    </p>
                    <h4>
                        Valid certificate
                    </h4>     
                </div>
           </ListWrapper>
           <ListWrapper>
                <div>
                    <p>
                          MTCNA/MTCRE/MTCWE/MTCTCE/MTCUME/ <br/> MTCINE
                    </p>
                    <h4>
                    Valid certificate
                    </h4>     
                </div>
                <div>
                    <p>
                         6 Months Diploma Courser
                    </p>
                    <h4>
                        Diploma certificate
                    </h4>     
                </div>
                <div>
                    <p>
                        4 Months Diploma Course
                    </p>
                    <h4>
                        Certificate
                    </h4>     
                </div>
                
                <div>
                    <p>
                        3 Months Course
                    </p>
                    <h4>
                         Certificate 
                    </h4>     
                </div>
                <div>
                    <p>
                        2 Months Course
                    </p>
                    <h4>
                        Certificate 
                    </h4>     
                </div>
                <div>
                    <p>
                        1 Months Course
                    </p>
                    <h4>
                        Certificate 
                    </h4>     
                </div>
                <div>
                    <p>
                         Handouts
                    </p>
                    <h4>
                        FREE
                    </h4>     
                </div>
           </ListWrapper>
        </Wrapper>
    )
}

export const Wrapper = styled(Container)`
    margin-top: 3rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    margin-bottom: 2rem;
`

export const ListWrapper = styled.div`
    /* border: 2px solid #C4C4C4; */
    /* box-shadow: 0px 0px 2px 1px rgba(0, 0, 0, 0.15); */
    

    div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color:  #F2F8FB;
        padding: 2px 16px;
        border-top: .5px solid #C4C4C4;
        border-right: .5px solid #C4C4C4;
        border-left: .5px solid #C4C4C4;
    }
    div: nth-of-type(1){
        border-radius: 20px 20px 0px 0px;
    }
    div: last-child{
        border-radius: 0px 0px 20px 20px;
        border-bottom: 1px solid #C4C4C4;
    }

     h4 {
         color: #0077B5;
         font-weight: 500;
     }

    div p {
        color: #3D3D3D;

    }
`