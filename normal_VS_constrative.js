// Normal Function =================

function Student_New(){
    let obj = {
        name: 'rohit',
        marks: 90
    }
    return obj;
}

let myList = Student_New();
console.log(myList);



// Constractive Function ==============

function Student (S, M) {

    this.name = S
    this.marks = M
}

let result1 = new Student('Rohit', 90);
console.log(result1);
let result2 = new Student('Mohit', 100);
console.log(result2);


//  another example of Constractive Function ===========

function newspaper(h){
    this.date = new Date();
    this.id = Math.round(Math.random()*10);
    this.name = "Gupta Publication";
    this.headline = h;
}

newspaper.prototype.ad = function(){
    console.log('flipkart big billion sale')
}

newspaper.prototype.magzine = 'kush raho';

let n1 = new newspaper('Gupta ji is happy now');

console.log("n1:", n1);




