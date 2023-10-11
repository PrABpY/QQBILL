function updateTemperature(temperature) {
    document.getElementById('temperature').textContent = `${temperature.toFixed(2)} °C`;
}

function updateHumidity(humidity) {
    document.getElementById('humidity').textContent = `${humidity.toFixed(2)} %`;
}

function updateWaterLevel(level) {
    const waterLevelFill = document.getElementById('waterLevelFill');
    const waterLevelPercentage = document.getElementById('waterLevelPercentage').textContent = `${level.toFixed(0)} %`;
    const height = level + '%';
    const percentageText = level + '%';
    waterLevelFill.style.height = (100 - level) + '%';
    waterLevelPercentage.textContent = percentageText;
}

window.onload = function() {
    const mockTemperature = Math.random() * 30 + 10;
    const mockHumidity = Math.random() * 40 + 5;
    const mockWaterLevel = Math.random() * 50 + 10;  
    updateTemperature(mockTemperature);
    updateHumidity(mockHumidity);
    updateWaterLevel(mockWaterLevel);
}
