import React, {
    forwardRef,
    useEffect,
    useImperativeHandle,
    useRef,
    useState,
} from "react"
import { CanvasContainer } from "./styles"

const Canvas = forwardRef((props, ref) => {
    const canvasElementRef = useRef(null)
    const contextRef = useRef(null)
    const [isDrawing, setIsDrawing] = useState(false)
    const emptyCanvasBase64 = useRef(null)

    useImperativeHandle(ref, () => ({
        clear: clearCanvas,
        getImage: getImageAsBase64,
        isEmpty: isCanvasEmpty,
    }))

    useEffect(() => {
        const canvas = canvasElementRef.current

        const preventDefault = (e) => e.preventDefault()
        canvas.addEventListener("touchstart", preventDefault, { passive: false })
        canvas.addEventListener("touchmove", preventDefault, { passive: false })

        canvas.width = 600;
        canvas.height = 600;

        const context = canvas.getContext("2d")
        context.lineCap = "round"
        context.strokeStyle = "#3B82F6"
        context.lineWidth = 15
        contextRef.current = context

        clearCanvas()
        emptyCanvasBase64.current = getImageAsBase64()

        return () => {
            canvas.removeEventListener("touchstart", preventDefault)
            canvas.removeEventListener("touchmove", preventDefault)
        }
    }, [])

    const getScaledCoordinates = (event) => {
        const canvas = canvasElementRef.current;
        const rect = canvas.getBoundingClientRect();

        const clientX = event.touches ? event.touches[0].clientX : event.clientX;
        const clientY = event.touches ? event.touches[0].clientY : event.clientY;

        const scaleX = canvas.width / rect.width;
        const scaleY = canvas.height / rect.height;

        return {
            x: (clientX - rect.left) * scaleX,
            y: (clientY - rect.top) * scaleY,
        };
    };


    const startDrawing = (e) => {
        const { x, y } = getScaledCoordinates(e.nativeEvent)
        contextRef.current.beginPath()
        contextRef.current.moveTo(x, y)
        setIsDrawing(true)
    }

    const finishDrawing = () => {
        contextRef.current.closePath()
        setIsDrawing(false)
    }

    const draw = (e) => {
        if (!isDrawing) return

        const { x, y } = getScaledCoordinates(e.nativeEvent)
        contextRef.current.lineTo(x, y)
        contextRef.current.stroke()
    }

    const handleMouseLeave = () => {
        if (isDrawing) {
            finishDrawing()
        }
    }

    const clearCanvas = () => {
        const canvas = canvasElementRef.current
        const context = contextRef.current
        if (context && canvas) {
            context.clearRect(0, 0, canvas.width, canvas.height)
        }
    }

    const getImageAsBase64 = (type = "image/png", quality = 1) => {
        const canvas = canvasElementRef.current
        if (!canvas) {
            console.error("Canvas element not found.")
            return null
        }

        return canvas.toDataURL(type, quality)
    }

    const isCanvasEmpty = () => {
        const currentCanvasBase64 = getImageAsBase64()
        return currentCanvasBase64 === emptyCanvasBase64.current
    }

    return (
        <CanvasContainer
            onMouseDown={startDrawing}
            onMouseUp={finishDrawing}
            onMouseMove={draw}
            onMouseLeave={handleMouseLeave}
            onTouchStart={startDrawing}
            onTouchEnd={finishDrawing}
            onTouchMove={draw}
            onTouchCancel={handleMouseLeave}
            ref={canvasElementRef}
        ></CanvasContainer>
    )
})

export default Canvas
