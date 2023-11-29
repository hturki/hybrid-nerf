const eyefulText = document.getElementById("eyeful-comparison");
const eyefulVideo = document.getElementById("eyeful-video");
const workshop = document.getElementById('workshop');
const office_view1 = document.getElementById('office_view1');
const office1b = document.getElementById('office1b');


workshop.addEventListener('click',function(e){
  eyefulText.innerHTML = "Our quality is slightly better than <a href=\"https://vr-nerf.github.io/\">VR-NeRF</a> while rendering over 10x faster. Our results are significantly better than faster rendering approaches, especially when modeling specular effects."
  eyefulVideo.src="./vids/workshop.mp4";
  workshop.className = "selected-scene";
  office1b.className = "";
  office_view1.className = "";
});

office1b.addEventListener('click',function(e){
  eyefulText.innerHTML = "Office 1B contains challenging specular effects on the walls and windows."
  eyefulVideo.src="./vids/office1b.mp4";
  workshop.className = "";
  office1b.className = "selected-scene";
  office_view1.className = "";
});

office_view1.addEventListener('click',function(e) {
  eyefulText.innerHTML = "Using distance-adjusted Eikonal loss improves our background reconstruction relative to other surface-based methods such as <a href=\"https://lioryariv.github.io/volsdf/\">VolSDF<sup>*</sup></a>."
  eyefulVideo.src="./vids/office_view1.mp4";
  workshop.className = "";
  office1b.className = "";
  office_view1.className = "selected-scene";
});

const snppVideo = document.getElementById("snpp-video");
const snpp_98b4ec142f = document.getElementById("98b4ec142f");
const snpp_b20a261fdf = document.getElementById("b20a261fdf");

snpp_98b4ec142f.addEventListener('click',function(e){
  snppVideo.src = "./vids/snpp_98b4ec142f.mp4";
  snpp_98b4ec142f.className = "selected-scene";
  snpp_b20a261fdf.className = "";
});

snpp_b20a261fdf.addEventListener('click',function(e){
  snppVideo.src = "./vids/snpp_b20a261fdf.mp4";
  snpp_98b4ec142f.className = "";
  snpp_b20a261fdf.className = "selected-scene";
});

const m360Video = document.getElementById("m360-video");
const stump = document.getElementById("stump");
const treehill = document.getElementById("treehill");
const kitchen = document.getElementById("kitchen");

stump.addEventListener('click',function(e){
  m360Video.src = "./vids/stump.mp4";
  stump.className = "selected-scene";
  treehill.className = "";
  kitchen.className = "";
});

treehill.addEventListener('click',function(e){
  m360Video.src = "./vids/treehill.mp4";
  stump.className = "";
  treehill.className = "selected-scene";
  kitchen.className = "";
});

kitchen.addEventListener('click',function(e){
  m360Video.src = "./vids/kitchen.mp4";
  stump.className = "";
  treehill.className = "";
  kitchen.className = "selected-scene";
});
