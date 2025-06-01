import React from "react"
import { H1, HomeContainer, ImageContainer, P, TextContainer } from "./styles"
import myImage from "../../assets/logo.jpg"

function Home() {
    return (
        <HomeContainer>
            <TextContainer>
                <P $isInit>Hey i'm Marcin 👋🏼</P>
                <H1>
                    <span className="colorAccent">Machine Learn</span>
                    ing Specjalist
                </H1>
                <P $isDescribe>
                    I'm a frontend developer based in Poland, I'll help you
                    build a ml apllications
                </P>
            </TextContainer>

            <ImageContainer>
                <img src={myImage} alt="Portfolio"></img>
            </ImageContainer>
        </HomeContainer>
    )
}

export default Home
