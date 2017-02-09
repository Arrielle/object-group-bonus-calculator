var atticus = { name: "Atticus", employeeNumber: "2405", annualSalary: "47000", reviewRating: 3 };
var jem = { name: "Jem", employeeNumber: "62347", annualSalary: "63500", reviewRating: 4 };
var boo = { name: "Boo", employeeNumber: "11435", annualSalary: "54000", reviewRating: 3 };
var scout = { name: "Scout", employeeNumber: "6243", annualSalary: "74750", reviewRating: 5 };
var robert = { name: "Robert", employeeNumber: "26835", annualSalary: "66000", reviewRating: 1 };
var mayella = { name: "Mayella", employeeNumber: "89068", annualSalary: "35000", reviewRating: 2 };

var employees = [ atticus, jem, boo, scout, robert, mayella ];

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// console.log(employees);

for (var i = 0; i < employees.length; i++) {
 // Going through the employee array and finding that object at that index
 //employee[i].employeeNumber
 var bonusA = bonus(employees[i].reviewRating);
 var bonusB = altBonus(employees[i].employeeNumber);
 var bonusAB = bonusA + bonusB;
 var bonusC = bonusDown(employees[i].annualSalary, bonusAB,) 
}

function bonusDown (annualSalary, intialTimeBonus){
  if (annualSalary > 65000){
    var richieRich = .01;
  }
  var semifinalBonus = intialTimeBonus - richieRich;
  return semifinalBonus;
};
bonusDown();
console.log(bonusDown(65555, .06));

// Function results are the bonus based on rating
function bonus (reviewRating){
  if (reviewRating <= 2) {
    var initialBonus = 0;
  } else if (reviewRating == 3) {
    var initialBonus = .04;
  } else if (reviewRating == 4) {
    var initialBonus = .06;
  } else {
    var initialBonus = .10;
  }
  return initialBonus;
};
// Calling function and storing in a varable

// var employeeBonus = initialBonus + altBonus;
//
//bonus(4);
// // Function determines how long employee has been there and gives an additional bonus based off that
function altBonus (employeeNumber){
  if (employeeNumber.length < 5) {
    var timeBonus = .05;
  } else {
    var timeBonus = 0;
  }
  return timeBonus;
};

//altBonus();
//var intialTimeBonus = timeBonus + intialTimeBonus;
// //Function determines if they make over 65,000 and adjusts thier bonus based on that
function bonusDown (annualSalary, intialTimeBonus){
  if (annualSalary > 65000){
    var richieRich = .01;
  }
  var semifinalBonus = intialTimeBonus - richieRich;
  return semifinalBonus;
};
bonusDown();
console.log(bonusDown(65555, .06));


// // Function determines based on all of the above if they are above or below a predetermined ammount.  Adjusts accourdingly

function noBonus(upDownBonus){
  if (upDownBonus > .13){
  var finalBonus = .13;
} else if(upDownBonus < 0) {
   finalBonus = 0;
}
  return finalBonus;
};
noBonus();
console.log(noBonus());



// function bonus (name, employeeNumber, annualSalary, reviewRating ) {
// var name = name;
// var bonusPercentage = function() {
