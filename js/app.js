
// ----------------------
// ECMA 5 

   function Person(name) {

    this.name = name;
    this.lastname = 'test'
   }

   // create instance 
   var Neko = new Person()
// ----------------------

var SVI = [];
var SVIOBJS = {};


var mojObj = {
  name: 'blalb',
  changeName: function() {
    // this je mojObj
    this.name = 'NONONO'
  }
};

for (var x = 0; x < 100 ; x++) {
  var Neko = new Person('blabl' + x)
  SVI.push(
    { ID: x , person: Neko }
    );

    SVIOBJS['nn'+ x] = Neko;

}


SVI.forEach( (item) => {
  console.log( "ITEM ->>>> ", item)
})

for (var x = 100; x > 0 ; x--) {

}

function clearLast(numForDelete) {
  for (var x = numForDelete; x > 0 ; x--) {
     SVI.pop();
  }
}

function PRINT(name) {
  return name + '00000';
}


var STAVRACA = PRINT('aaaaa')

// EMCA 6 , 7, 8, 9 ...
// class test {
//   constructot() {}
// }
//


var A = '10';
var B = '2';


console.log("test accwess dom", document.getElementById('root'))

// Math
console.log("A + B", C)

var C = A + B;

console.log("A + B", C)


function asyncLoad(path, callback) {

  if (typeof callback === "undefined") {
    callback = function () { };
  }

  var nuiScript = document.createElement("script")
  nuiScript.src = path
  document.head.appendChild(nuiScript)
  nuiScript.onload = function () {
    callback()
  }

}

asyncLoad('js/app2.js')

