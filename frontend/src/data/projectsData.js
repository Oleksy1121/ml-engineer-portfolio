import handwrittenDigitThumbnail from '../assets/handwritten-digit-thumbnail.jpg'
import snakeAIThumbnail from '../assets/snake-ai-thumbnail.jpg'
import videoSummarizerThumbnail from '../assets/video-summarizer-thumbnail.jpg'

const projectsData = [
    {
        id: 1,
        title: "Video Summarizer",
        description: `
            <p>An application that automatically summarizes videos from URL into structured <strong>Markdown</strong> notes. Built with modular architecture, the project explores both open-source and commercial LLMs:</p>
            <ul>
                <li><strong>Transcription:</strong> Extracting audio with <code>yt-dlp</code> and transcribing using <strong>OpenAI Whisper</strong>.</li>
                <li><strong>Summarization:</strong> Generating structured summaries with <strong>GPT-4o-mini</strong>.</li>
                <li><strong>Prototypes:</strong> Two versions tested:
                    <ul>
                        <li>Colab notebook: <strong>LLaMA 3.1 (quantized)</strong> + Whisper</li>
                        <li>Jupyter notebook: <strong>OpenAI Whisper + GPT</strong> with Gradio UI</li>
                    </ul>
                </li>
                <li><strong>API:</strong> Final version designed as a <strong>FastAPI</strong> service for easy integration.</li>
            </ul>
            <p>The project demonstrates practical use of speech-to-text pipelines, LLM summarization, and lightweight user interfaces with <strong>Gradio</strong>.</p>
        `,
        skills: [
            "Python",
            "FastAPI",
            "OpenAI API",
            "Whisper",
            "GPT-4o-mini",
            "yt-dlp",
            "Gradio",
            "Google Colab"
        ],
        githubLink: "https://github.com/Oleksy1121/video-summarizer", 
        thumbnail: videoSummarizerThumbnail,
        linkToDemo: '/video-summarizer',
    },
    {
        id: 2,
        title: "SnakeAI – Reinforcement Learning Agent",
        description: `
            <p>This project implements a reinforcement learning agent that learns to play the classic Snake game using <strong>Stable-Baselines3</strong>. Key aspects include:</p>
            <ul>
                <li><strong>Environment:</strong> Custom Snake environment built with <code>Gymnasium</code>, featuring both image-based observations and additional vector features.</li>
                <li><strong>Algorithms:</strong> Training with <strong>PPO</strong> and <strong>DQN</strong>, with PPO showing the best performance.</li>
                <li><strong>Training:</strong> Curriculum learning strategy with dynamic apple count, TensorBoard monitoring, and evaluation callbacks. The best model reached an average of ~3000 steps per episode and 278 mean reward.</li>
                <li><strong>Visualization:</strong> Live rendering with Pygame and training progress tracked via TensorBoard charts.</li>
            </ul>
            <p>The agent demonstrates efficient apple collection but still struggles with self-trapping, which is a target for future improvements.</p>
        `,
        skills: [
            "Python",
            "Stable-Baselines3",
            "Gymnasium",
            "Pygame",
            "TensorBoard",
            "NumPy"
        ],
        githubLink: "https://github.com/Oleksy1121/snakeAI",
        thumbnail: snakeAIThumbnail,
        linkToDemo: '/snake-ai',
    },
    {
        id: 3,
        title: "Handwritten Digit Recognizer",
        description: `
            <p>This project presents a handwritten digit recognition system based on deep learning techniques using the MNIST dataset. Key aspects include:</p>
            <ul>
                <li><strong>Neural Network Architecture:</strong> Implementation of a convolutional neural network (CNN) for image classification.</li>
                <li><strong>Training and Evaluation:</strong> Training the model on the MNIST dataset and assessing its performance.</li>
                <li><strong>User Interface:</strong> A web-based demo allowing users to draw digits and receive predictions in real-time.</li>
            </ul>
            <p>This project combines deep learning with practical web deployment for interactive digit recognition.</p>
        `,
        skills: [
            "Python",
            "Pytorch",
            "Scikit-learn",
            "Numpy",
            "Pandas",
            "Matplotlib",
            "FastAPI",
            "JavaScript",
            "React",
            "Docker"
        ],
        githubLink: "https://github.com/Oleksy1121/Handwritten-digit-recognizer",
        thumbnail: handwrittenDigitThumbnail,
        linkToDemo: '/handwritten-digit-recognizer',
    }
];

export default projectsData;