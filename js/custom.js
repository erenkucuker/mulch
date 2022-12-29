document.getElementById("calculate-button").addEventListener("click", function() {
  // Get values from input fields
  var area = document.getElementById("area").value;
  var depth = document.getElementById("depth").value;

  // Convert depth from inches to feet
  depth = depth / 12;

  // Calculate volume in cubic feet
  var volume = area * depth;

  // Convert cubic feet to cubic yards
  var cubicYards = volume / 27;

  // Convert cubic feet to 2 cubic foot bags
  var twoCubicFootBags = volume / 2;

  // Convert cubic feet to 3 cubic foot bags
  var threeCubicFootBags = volume / 3;

  // Display results
  document.getElementById("result-2cf-bags").innerHTML = twoCubicFootBags.toFixed(1);
  document.getElementById("result-3cf-bags").innerHTML = threeCubicFootBags.toFixed(1);
  document.getElementById("result-cubic-yards").innerHTML = cubicYards.toFixed(3);
});
