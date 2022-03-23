import { Bulb } from "../../../../components/icons/Bulb"
import { Gift } from "../../../../components/icons/Gift"
import { Love } from "../../../../components/icons/Love"
import { Quality } from "../../../../components/icons/Quality"
import { Container } from "../../../../components/navbar/Nav.styles"
import { ChooseWrap, SideIcon, SideText } from "./ChooseUs.styles"

export const ChooseUs = () => {
    return (
        <>
            <Container>
                <ChooseWrap>
                    <div>
                        <img src="assets/Rectangle2.png" alt="" />
                    </div>
                    <div>
                        <h3>
                             Why Choose Us?
                        </h3>
                        <h1>
                            We help you get the best IT  <br />
                            solutions for your business 
                        </h1>
                        <SideIcon>
                            <SideText>
                                <h2>Passion</h2>
                                <p>
                                    We are passionate about and dedicated <br /> to our customers.
                                </p>
                            </SideText>
                            <div>
                                <Love />
                            </div>
                        </SideIcon>
                        <SideIcon>
                            <SideText>
                                <h2>Innovation</h2>
                                <p>
                                We are innovators committed to <br /> addressing tomorrow's challenges today.
                                </p>
                            </SideText>
                            <div>
                                <Bulb />
                            </div>
                        </SideIcon>
                        <SideIcon>
                            <SideText>
                                <h2>Integrity</h2>
                                <p>
                                We communicate with respect, integrity, <br /> courage and candour.
                                </p>
                            </SideText>
                            <div>
                                <Gift />
                            </div>
                        </SideIcon>
                        <SideIcon>
                            <SideText>
                                <h2>Quality</h2>
                                <p>
                                We deliver quality solutions through <br /> exceptional implementation and support.
                                </p>
                            </SideText>
                            <div>
                                <Quality />
                            </div>
                        </SideIcon>
                    </div>
                </ChooseWrap>
            </Container>
        </>
    )
}