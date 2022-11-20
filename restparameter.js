function restParameter(a, b, ...restParams) { // We can add number of parameters in ... restParams
  console.log("First parameter: " + a);
  console.log("Second parameter: " + b);
  console.log("RestParams parameter: " + restParams);
}

restParameter(5, 5, 40, 50, 60, 70);

// Results of console:
// First parameter: 5
// Second parameter: 5
// RestParams parameter: 40,50,60,70
