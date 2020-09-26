var wrapper = document.body;
var data = [
  {
    color: "blue"
  },
  {
    color: "green"
  },
  {
    color: "red"
  }
];
function colorcreator(value, color) {
  var that = this;
  this.div = document.createElement("div");
  this.div.style.backgroundColor = color;
  this.div.style.height = "100px";
  this.div.style.width = "200px";
  this.div.style.borderRadius = "10px";
  this.value = document.createElement("h2");
  this.value.style.fontSize = "18px";
  this.value.style.textAlign = "center";
  this.colorEle = document.createElement("h2");
  this.colorEle.style.textAlign = "center";
  
  this.value.innerHTML = 0 ;
  this.colorEle.innerHTML = color ;
this.div.appendChild(this.colorEle);
  this.div.appendChild(this.value);
  this.div.addEventListener("click", function(){
    that.value.innerHTML++; });
  wrapper.appendChild(this.div);
}




colorcreator.prototype.colorcrator = function () {
 
};

for (i = 0; i < data.length; i++) {
  colorcreator(data[i].value, data[i].color);
}