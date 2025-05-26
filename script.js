let classifier;
let video;
let img;

const presentStudents = new Set();
let presentListElement;
let resultDiv;

function setup() {
    video = document.getElementById("webcam");
    presentListElement = document.getElementById("presentList");
    resultDiv = document.getElementById("myResult");

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

    let label = results[0].label.toLowerCase();

    if (label.includes('pranjal')) {
        markStudent('Pranjal');
    } else if (label.includes('alisha')) {
        markStudent('Alisha');
    } else if (label.includes('ravi')) {
        markStudent('Ravi');
    } else {
        markInvalid();
    }
}

function markStudent(name) {
    resultDiv.innerHTML = `Welcome ${name}`;
    resultDiv.style.color = "green";

    if (!presentStudents.has(name)) {
        presentStudents.add(name);
        updatePresentList();
    }
}

function markInvalid() {
    resultDiv.innerHTML = "Invalid Student";
    resultDiv.style.color = "red";
}

function updatePresentList() {
    presentListElement.innerHTML = '';
    presentStudents.forEach(student => {
        const li = document.createElement('li');
        li.textContent = student;
        presentListElement.appendChild(li);
    });
}

window.onload = setup;
