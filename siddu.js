const webcamElement = document.getElementById('webcam');
const classifier = knnClassifier.create();
var counter = 0;
var arr = Array(6).fill(0);
var i = 0;
var time = 0;
var snd = new Audio("buzz.mp3");


let net;

function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}

function clear(){
	counter = 0;
}

async function app() {
  console.log('Loading mobilenet..');

  // Load the model.
  net = await mobilenet.load();
  console.log('Successfully loaded model');

  // Create an object from Tensorflow.js data API which could capture image
  // from the web camera as Tensor.
  const webcam = await tf.data.webcam(webcamElement);

  // Reads an image from the webcam and associates it with a specific class
  // index.
  const addExample = async classId => {

    for (let x = 50; x > 0; x--) {
      // Capture an image from the web camera.
      const img = await webcam.capture();

      // Get the intermediate activation of MobileNet 'conv_preds' and pass that
      // to the KNN classifier.
      const activation = net.infer(img, 'conv_preds');

      // Pass the intermediate activation to the classifier.
      classifier.addExample(activation, classId);

      // Dispose the tensor to release the memory.
      img.dispose();

      // Add some time between images so there is more variance
      setTimeout(() => {
        console.log("Added image")
      }, 10)
    }
  };

  // When clicking a button, add an example for that class.
  document.getElementById('class-a').addEventListener('click', () => addExample(0));
  document.getElementById('class-b').addEventListener('click', () => addExample(1));
  
  

  while (true) {
  	
    if (classifier.getNumClasses() > 0) {
      const img = await webcam.capture();

      // Get the activation from mobilenet from the webcam.
      const activation = net.infer(img, 'conv_preds');
      // Get the most likely class and confidence from the classifier module.
      result = await classifier.predictClass(activation);
			classes = ['Not touching', 'touching'];
      
      if (classes[result.label] == "touching")
      {
        snd.play();
      	counter++;
      }
      
      if (time==(6*(i+1)))
      {
      	arr[i] = counter;
        i++;
      }
      
      sleep(1000)
      time++;
      
      
      document.getElementById('console').innerText = `
        prediction: ${classes[result.label]}\n
        probability: ${result.confidences[result.label]}\n
        Seconds Touched: ${counter}
        
        Time: ${time}\n
      `;
      
      
      
      

      // Dispose the tensor to release the memory.
      img.dispose();
    }

    await tf.nextFrame();
    //document.getElementById('class-c').addEventListener('click', clear());
  }
}

app();
