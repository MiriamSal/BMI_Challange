
function Person(attr) {
    this.weight = attr.weight;
    this.height = attr.height;
};

Person.prototype.calculate_bmi = function () {
    calculator = new BMICalculator();
    calculator.metric_bmi(this)         // this is == to user person
};                                      // CORB happens, security block

Person.prototype.calculate_imperial_bmi = function () {
    calculator = new BMICalculator();
    calculator.imperial_bmi(this)         
}; 