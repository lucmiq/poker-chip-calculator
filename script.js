// script.js

document.getElementById('calculateButton').addEventListener('click', function() {
    // Get Table Value
    const tableValue = parseFloat(document.getElementById('tableValue').value) || 0;

    // Get Chip Quantities
    const ficha100 = parseFloat(document.getElementById('ficha100').value) || 0;
    const ficha050 = parseFloat(document.getElementById('ficha050').value) || 0;
    const ficha025 = parseFloat(document.getElementById('ficha025').value) || 0;
    const ficha005 = parseFloat(document.getElementById('ficha005').value) || 0;
    const ficha001 = parseFloat(document.getElementById('ficha001').value) || 0;

    // Fixed Chip Point Values (extracted from "Ficha XXX")
    const points100 = 100;
    const points050 = 50;
    const points025 = 25;
    const points005 = 5;
    const points001 = 1;

    // Calculate Total Points Dynamically
    const totalPoints =
        (points100 * ficha100) +
        (points050 * ficha050) +
        (points025 * ficha025) +
        (points005 * ficha005) +
        (points001 * ficha001);

    // Avoid division by zero
    if (totalPoints === 0) {
        alert("Please enter valid chip quantities.");
        return;
    }

    // Calculate Unit Value
    const unitValue = tableValue / totalPoints;

    // Calculate Chip Values
    const value100 = points100 * unitValue;
    const value050 = points050 * unitValue;
    const value025 = points025 * unitValue;
    const value005 = points005 * unitValue;
    const value001 = points001 * unitValue;

    // Display Chip Values
    document.getElementById('value100').textContent = value100.toFixed(2);
    document.getElementById('value050').textContent = value050.toFixed(2);
    document.getElementById('value025').textContent = value025.toFixed(2);
    document.getElementById('value005').textContent = value005.toFixed(2);
    document.getElementById('value001').textContent = value001.toFixed(2);
});

// Input Validation Function
function validateInput(value, fieldName) {
    if (isNaN(value)) {
        alert(`Please enter a valid number for ${fieldName}.`);
        return false;
    }
    if (value < 0) {
        alert(`Please enter a positive number for ${fieldName}.`);
        return false;
    }
    return true;
}

document.getElementById('resetButton').addEventListener('click', function() {
    // Clear Table Value
    document.getElementById('tableValue').value = '';

    // Clear Chip Quantities
    document.getElementById('ficha100').value = '';
    document.getElementById('ficha050').value = '';
    document.getElementById('ficha025').value = '';
    document.getElementById('ficha005').value = '';
    document.getElementById('ficha001').value = '';

    // Clear Results
    document.getElementById('value100').textContent = '0.00';
    document.getElementById('value050').textContent = '0.00';
    document.getElementById('value025').textContent = '0.00';
    document.getElementById('value005').textContent = '0.00';
    document.getElementById('value001').textContent = '0.00';
});