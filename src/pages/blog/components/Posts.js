import styled from "styled-components"
import { Container } from "../../../components/navbar/Nav.styles"


export const Posts = () => {
    return (
        <PostWrapper>
            <div>
                <h2>Latest Posts</h2>
                <PostLayout>
                    <PostContent>
                        <img src="assets/Rectangle44.png" alt="" />
                        <div>
                            <p>Web Design</p>
                            <h3>
                                How to Make a Website Stand 
                                Out from the Competition
                            </h3>
                            <span>
                                30 August 2021
                            </span>
                        </div>
                    </PostContent>
                    <PostContent>
                        <img src="assets/Rectangle44.png" alt="" />
                        <div>
                            <p>Web Design</p>
                            <h3>
                                How to Make a Website Stand 
                                Out from the Competition
                            </h3>
                            <span>
                                30 August 2021
                            </span>
                        </div>
                    </PostContent>
                    <PostContent>
                        <img src="assets/Rectangle44.png" alt="" />
                        <div>
                            <p>Web Design</p>
                            <h3>
                                How to Make a Website Stand 
                                Out from the Competition
                            </h3>
                            <span>
                                30 August 2021
                            </span>
                        </div>
                    </PostContent>
                    <PostContent>
                        <img src="assets/Rectangle44.png" alt="" />
                        <div>
                            <p>Web Design</p>
                            <h3>
                                How to Make a Website Stand 
                                Out from the Competition
                            </h3>
                            <span>
                                30 August 2021
                            </span>
                        </div>
                    </PostContent>
                    <PostContent>
                        <img src="assets/Rectangle44.png" alt="" />
                        <div>
                            <p>Web Design</p>
                            <h3>
                                How to Make a Website Stand 
                                Out from the Competition
                            </h3>
                            <span>
                                30 August 2021
                            </span>
                        </div>
                    </PostContent>
                    <PostContent>
                        <img src="assets/Rectangle44.png" alt="" />
                        <div>
                            <p>Web Design</p>
                            <h3>
                                How to Make a Website Stand 
                                Out from the Competition
                            </h3>
                            <span>
                                30 August 2021
                            </span>
                        </div>
                    </PostContent>
                    <PostContent>
                        <img src="assets/Rectangle44.png" alt="" />
                        <div>
                            <p>Web Design</p>
                            <h3>
                                How to Make a Website Stand 
                                Out from the Competition
                            </h3>
                            <span>
                                30 August 2021
                            </span>
                        </div>
                    </PostContent>
                </PostLayout>
            </div>
            <div>
                <div>
                    <input />
                </div>
                <div>
                    <h2>Popular Posts</h2>
                </div>
            </div>
        </PostWrapper>
    )
}

export const PostWrapper = styled(Container)`
    display: grid;
    grid-template-columns: 70% 30%;
    margin-bottom: 2rem;
    gap: 2rem;

    h2 {
        margin-top: 96px;
        font-family: 'Montserrat', sans-serif;
        font-weight: 600;
        background-color:#0077B5;
        text-align: center;
        border-radius: 10px 10px 0 0;
        padding-top:24px;
        padding-bottom: 24px;
        color: #fff;
    }
`

export const PostLayout = styled.div`
    background-color:#F2F2F2;
    margin-top: -1.2rem;
    padding-top: 1rem;
    padding-bottom: 3rem;
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.15);
`

export const PostContent = styled.div`
        display: flex;
        gap: 24px;
        margin-left: 2rem;
        margin-right: 2rem;
        background-color: #fff;
        margin-top: 2rem;
        margin-bottom: 2rem;
        border-radius: 10px;
        box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.15);

    p {
        color: #0077B5;
    }

    h3 {
        font-family: 'Montserrat', sans-serif;
        font-weight: 400;
        margin-right: 2rem;
        padding-right: 3rem;
        font-size: 20px;
    }
    span {
        color: #BDBDBD;

    }
`