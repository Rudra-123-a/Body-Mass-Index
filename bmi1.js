let continueCalculation = true;

while (continueCalculation) {
    let mass = parseFloat(prompt("Enter your mass in kg ?"));
    let height = parseFloat(prompt("Enter your height in cm?"));

    let bmi = mass / ((height / 100) ** 2);

    if (bmi < 18.5) {
        alert("You are underweight");
    } else if (bmi < 25) {
        alert("You have a normal BMI");
    } else if (bmi < 30) {
        alert("You are overweight");
    } else {
        alert("You are obese");
    }

    let continueResponse = prompt("Do you wish to continue? Enter 'yes' to continue or any other key to exit:");
    if (continueResponse !=null && continueResponse.toLowerCase() !== 'yes') {
        continueCalculation = false;
    }
}

alert("BMI calculator closed.");
