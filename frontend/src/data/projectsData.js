import handwrittenDigitThumbnail from '../assets/handwritten-digit-thumbnail.jpg'

const projectsData = [
    {
        id: 1,
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

export default projectsData