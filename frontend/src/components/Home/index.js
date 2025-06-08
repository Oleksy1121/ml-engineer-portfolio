import React, { useEffect, useState } from "react"
import { H1, HomeContainer, ImageContainer, P, TextContainer } from "./styles"
import myImage from "../../assets/logo.jpg"

const roles = [
  "Machine Learning Engineer",
  "Full Stack Developer",
  "Python Developer",
  "AI Enthusiast",
]

function Home() {

    const [index, setIndex] = useState(0)

    useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length)
    }, 5000)

    return () => clearInterval(interval)
  }, []);


  return (
    <HomeContainer>
      <TextContainer>
        <P $isInit>Hey i'm Marcin 👋🏼</P>
        <H1>
          <span className="colorAccent">{roles[index].slice(0, 7)}</span>
          {roles[index].slice(7)}

        </H1>
        <P $isDescribe>
          I'm a Polish specialist combining AI/ML technologies with web application development. I'll help you build
          intelligent, modern solutions
        </P>
      </TextContainer>

      <ImageContainer>
        <img src={myImage} alt="Portfolio"></img>
      </ImageContainer>
    </HomeContainer>
  )
}

export default Home
