
const f = Number(prompt('Provide a temp in Fahrenheit'));

/**
 * 
 * @param {number} f
 * @returns {number}
 */
function convertToCelsius(f) {
    return (f - 32) * 5 / 9;

}

/**
 * 
 * @param {number} f
 * @returns {string} 
 */
function describeTemperature(f) {
    let c = convertToCelsius(f);

    let description;
    if (c < 0) {
        description = 'very cold'
    } else if (c < 20) {
        description = 'cold'
    } else if (c < 30) {
        description = 'warm'
    } else if (c < 40) {
        description = 'hot'
    } else {
        description = 'very hot. Hot daddy hot - Kevin Heart'
    }
    return `${f}°F is ${c}°C. That is ${description}.`;
}

alert(describeTemperature(f));