let classifier;
let video;
let img;

function setup() {
    // Create a video element
    video = document.getElementById("webcam");
    
    // Set up the webcam
    navigator.mediaDevices.getUserMedia({ video: true })
        .then(function(stream) {
            video.srcObject = stream;
            video.play();
        })
        .catch(function(err) {
            console.error("Error accessing webcam: ", err);
        });

    // Load the model
    classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/HE2Gqfl09/', modelLoaded);
}

function modelLoaded() {
    console.log('Model Loaded!');
}

document.getElementById("classifyButton").addEventListener("click", () => {
    classifyImage();
});

function classifyImage() {
    // Capture the current frame from the video
    img = getCanvasImage(video);
    
    classifier.classify(img, gotResult);
}

function getCanvasImage(video) {
    const canvas = document.createElement('canvas');
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
  
    const context = canvas.getContext('2d');
    context.drawImage(video, 0, 0, canvas.width, canvas.height);
  
    return canvas;
}

function gotResult(results, error) {
    if (error) {
        console.error(error);
        return;
    }
    
    let label = results[0].label.toLowerCase();  // Convert label to lowercase for matching
    let resultDiv = document.getElementById("myResult");

    // Check for Alisha or others
    if (label.includes('pranjal')) {
        resultDiv.innerHTML = "Welcome pranjal";
        resultDiv.style.color = "green";
    } else {
        resultDiv.innerHTML = "Invalid Student";
        resultDiv.style.color = "red";
    }
}

// Initialize the model when the page loads
window.onload = setup;
