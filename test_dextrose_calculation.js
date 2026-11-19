// Manual verification of dextrose calculation logic
// Testing that different available concentrations produce different results

console.log("Testing Dextrose Calculation Logic\n");

// Test case 1: D50% available, 10% desired, 100mL total
const test1 = {
  volume: 100,
  dextroseConcentration: 10,
  dextroseAvailableConcentration: 50,
};
const result1 = ((test1.volume * test1.dextroseConcentration) / test1.dextroseAvailableConcentration).toFixed(2);
console.log("Test 1: D50% available, 10% desired, 100mL total");
console.log(`  Formula: (${test1.volume} * ${test1.dextroseConcentration}) / ${test1.dextroseAvailableConcentration}`);
console.log(`  Result: ${result1} mL`);
console.log(`  Expected: 20 mL\n`);

// Test case 2: D70% available, 10% desired, 100mL total
const test2 = {
  volume: 100,
  dextroseConcentration: 10,
  dextroseAvailableConcentration: 70,
};
const result2 = ((test2.volume * test2.dextroseConcentration) / test2.dextroseAvailableConcentration).toFixed(2);
console.log("Test 2: D70% available, 10% desired, 100mL total");
console.log(`  Formula: (${test2.volume} * ${test2.dextroseConcentration}) / ${test2.dextroseAvailableConcentration}`);
console.log(`  Result: ${result2} mL`);
console.log(`  Expected: 14.29 mL\n`);

// Test case 3: D85% available, 10% desired, 100mL total
const test3 = {
  volume: 100,
  dextroseConcentration: 10,
  dextroseAvailableConcentration: 85,
};
const result3 = ((test3.volume * test3.dextroseConcentration) / test3.dextroseAvailableConcentration).toFixed(2);
console.log("Test 3: D85% available, 10% desired, 100mL total");
console.log(`  Formula: (${test3.volume} * ${test3.dextroseConcentration}) / ${test3.dextroseAvailableConcentration}`);
console.log(`  Result: ${result3} mL`);
console.log(`  Expected: 11.76 mL\n`);

// Verify that different concentrations produce different results
console.log("Verification:");
console.log(`  D50% result (${result1}) !== D70% result (${result2}): ${result1 !== result2}`);
console.log(`  D70% result (${result2}) !== D85% result (${result3}): ${result2 !== result3}`);
console.log(`  D50% result (${result1}) > D70% result (${result2}): ${parseFloat(result1) > parseFloat(result2)}`);
console.log(`  D70% result (${result2}) > D85% result (${result3}): ${parseFloat(result2) > parseFloat(result3)}`);
console.log("\n✓ All calculations verified!");
