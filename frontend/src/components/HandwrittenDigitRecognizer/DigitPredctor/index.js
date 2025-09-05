import React, { useRef, useState } from "react"
import { FaGithub } from "react-icons/fa"
import {
    Button,
    ButtonContainer,
    CallToActionLink,
    ContentWrapper,
    DigitPredictiorContainer,
    Header,
    MainContainer,
} from "./styles"
import Canvas from "../CanvasDrawing"
import axios from "../../../axios"
import Results from "../Results"

function DigitPredictor() {
    const canvasRef = useRef(null)
    const [results, setResults] = useState([])

    const handleClearCanvas = () => {
        if (canvasRef.current) {
            canvasRef.current.clear()
            setResults([])
        }
    }

    const getCanvasImage = () => {
        if (canvasRef.current) {
            return canvasRef.current.getImage()
        }
    }

    const getPrediction = async () => {
        const base64_string = getCanvasImage()

        if (canvasRef.current.isEmpty()) {
            return null
        }

        try {
            const response = await axios.post("/predict", {
                base64_string: base64_string,
            })
            //console.log(response.data.predict)
            setResults(response.data.predict)
        } catch (err) {
            console.log(err.message)
        }
    }

return (
  <MainContainer className="app-card">
    <ContentWrapper>
      <DigitPredictiorContainer>
        <Header>Draw your own digit !</Header>
        <Canvas ref={canvasRef}></Canvas>
        <ButtonContainer>
          <Button onClick={handleClearCanvas}>Clear</Button>
          <Button onClick={getPrediction}>Predict</Button>
        </ButtonContainer>
      </DigitPredictiorContainer>
      
      <Results results={results}></Results>
    </ContentWrapper>

    <CallToActionLink
      href="https://github.com/Oleksy1121/Handwritten-digit-recognizer"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaGithub size={24} />
      <span>Check this project on GitHub</span>
    </CallToActionLink>
  </MainContainer>
)


}

export default DigitPredictor
