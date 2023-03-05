noseX = 0;
noseY = 0;

function preload(){

 lipstick_filter = loadImage('https://i.postimg.cc/T2QVbgfV/image-removebg-preview.png');
  
}

function setup(){
   canvas = createCanvas(500, 500);
   canvas.center();

   video = createCapture(VIDEO);
   video.size(500, 500);
   video.hide();

   poseNet = ml5.poseNet(video, modelLoaded);
   poseNet.on('pose',gotPoses);

}

function gotPoses(results){
 if(results.length > 0){
   console.log(results);
   console.log("nose x = " + results[0].pose.nose.x);
   console.log("nose y =" + results[0].pose.nose.y); 
   noseX = results[0].pose.nose.x-25;
   noseY = results[0].pose.nose.y+29;
 }
}

function modelLoaded(){
   console.log('poseNet is initialized')
}

function draw(){
   image(video, 0 ,0 , 500, 500);
   image(lipstick_filter, noseX , noseY,55 , 22);
}
  
  function take_snapshot(){
   save('myFilterImage.png');

   
}
