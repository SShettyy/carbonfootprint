function calculateCarbonFootprint() {
  const commuteDistance = parseFloat(document.getElementById('commute-distance').value);
  const vehicleType = document.getElementById('vehicle-type').value;
  const electricityUsage = parseFloat(document.getElementById('electricity-usage').value);
  
  const emissionFactors = {
    gasoline: 2.31, // kg CO2e per km
    electric: 0.09 // kg CO2e per km
  };
  
  const commuteEmissions = commuteDistance * emissionFactors[vehicleType];
  const electricityEmissions = electricityUsage * 0.467; // kg CO2e per kWh (approximate average)
  
  const totalEmissions = commuteEmissions + electricityEmissions;
  
  document.getElementById('carbon-footprint').textContent = `${totalEmissions.toFixed(2)} kg CO2e`;
  document.getElementById('result-container').classList.remove('hidden');
}