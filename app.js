Array.prototype.shuffle = function() {
  var temp;
  for (var i = 0; i < this.length; i++) {
    var j = Math.floor(Math.random() * this.length);
    temp = this[i];
    this[i] = this[j];
    this[j] = temp;
  }
  return this;
};

var largest = Math.max(window.innerWidth, window.innerHeight) * 1.5;
var svg = Trianglify({
  width: largest,
  height: largest,
  x_colors: ['#8b0011', '#71000e', '#58000b', '#3e0008', '#be0017', '#d7001a', '#f1001d', '#ff0b29', '#A40014'].shuffle(),
  variance: 1,
  cell_size: [100, 125, 150].shuffle()[0]
}).svg();

svg.classList.add('bg')
console.log(svg);
document.body.appendChild(svg);
setTimeout(function() {
  svg.classList.add('bg--visible');
}, 100);
