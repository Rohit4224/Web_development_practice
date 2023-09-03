const student = {
  name: "Rohit",
  age: 26,
  prop: this, //global scope
  getSome: function () {
    console.log(this);
    return this.name; //this "this" is treated as studnet object
  },
  getArr: () => {
    console.log(this); // parent's scope, in this case parent is student and student's scope is window/global
    return this.name;
  },
  getInfo1: function () {
    setTimeout(() => {
      console.log(this);
    }, 2000);
  },
  getInfo2() {
    setTimeout(function () {
      console.log(this);
    }, 2000);
  },
};

// console.log(student.getSome());
