let myButton; 

let callstate = 0;


let video;

let label = "Welcome to Agriserve";
let text1 = "--> Best Suitable for Loamy soil";
let text2 = "--> pH level - 6.0 - 6.5";

let text3 = "--> Requires Red loam to black soils";
let text4 = "--> pH level - 6.0 - 7.0";
let text9 = "--> Average rainfall of 750-1000 mm";

let text5  = "--> Well drained loamy soil ";
let text10 = "--> pH level - 6.0 - 7.0 ";
let text6  = "--> Relative Humidity of 50-60%";

let text7  = "--> Best suitable in Sandy loam soils";
let text8  = "--> pH level - 5.2 - 6.4";
let text11 = "--> Average Rainfall of 1200 – 2000 mm";

let classifier;
let modelURL = "https://teachablemachine.withgoogle.com/models/Fr37rAmC0/" ;

function preload() {
  classifier = ml5.imageClassifier(modelURL + 'model.json');
}


function setup() {
  createCanvas(641, 500);
  
  video = createCapture(VIDEO);
  video.hide();
  
  myButton = createButton(' CLICK HERE TO START ');
  myButton.position(225, 390); 
  myButton.size(200, 80);      
  myButton.style('background-color', '#3498db'); 
  myButton.style('color', 'white');            
  myButton.style('border', 'none');             
  myButton.style('border-radius', '10px');      
  myButton.style('font-size', '16px');          
  myButton.style('cursor', 'pointer'); 
  
  
  
  myButton.mousePressed(deleteButton);
  
  
  
}

function deleteButton() {
  
  myButton.remove();//
  
  callstate+=1
  
  classifyVideo();
}

function draw() {
  background(0);

  
  image(video, 0, 0);

  textSize(47);
  textAlign(CENTER, CENTER);
  fill(255);
  text(label, 320, 350);
    
  
  

 let emoji = "";
  
 if (label == "Nothing") {
   
 }else if (label == "Onion") {
   emoji = "🧅";
   textSize(36);
   text(text3,  320, 45);
   text(text4,222, 95);
 } else if (label == "Tomato") {
   emoji = "🍅";
   textSize(36);
   text(text1,  260, 45); 
   text(text2,190, 105);
 } else if (label == " Potato") {
   emoji = "🥔";
   text(text7,  200, 25);
   text(text8,218, 65);
 } else if (label == "Capsicum") {
   emoji = "🍏";
   textSize(36);
   text(text5,  230, 45);
   text(text6,270, 105);
 }
  textSize(106);
  text(emoji, width / 2, height / 2);
    
}


function classifyVideo() {
  if (callstate == 1){
    classifier.classify(video, gotResults);
  }
  
}


function gotResults(error, results) {
  
  if (error) {
    console.error(error);
    return;
  }
  
  label = results[0].label;
  classifyVideo();
}