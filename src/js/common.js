var task = {
  setLabel: function(label) {this.label = label}
};

var abc = Object.create(task);
abc.createName = function (name) {
  this.setLabel(name)
};

abc.createName('Task 1');

console.log(abc.label);