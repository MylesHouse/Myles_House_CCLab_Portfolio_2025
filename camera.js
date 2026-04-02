let video;

function setup() {
  createCanvas(640, 480);

  video = createCapture(VIDEO);
  video.size(640, 480);
  video.hide();
}

function draw() {
  translate(width, 0);
  scale(-1, 1);

  image(video, 0, 0, width, height);
}
