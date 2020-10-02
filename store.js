const meals = []
//meal price, tax rate, tip, 
const lastMeal = function() {
    return meals[calcMealCount() - 1];
}

const calcSubtotal = function(mealPrice, taxRate) {
    //meal price + mealPrice * taxRate
    return mealPrice + (mealPrice * taxRate);
}

const calcTip = function(mealPrice, tipPercent) {
    return mealPrice * tipPercent;
}

const calcTotal = function(subtotal, tip) {
    return subtotal + tip
}

const calcTipTotal = function() {
    let sum = 0
    for(let i = 0; i < meals.length; i ++){
        sum = sum + calcTip(meals[i].mealPrice, meals[i].tipPercent);
    }
    return sum;
}

const calcMealCount = function() {
    return meals.length;
}

const calcAvgTip = function() {
    let totalTip = calcTipTotal();
    return totalTip / calcMealCount();
}
const updateStore = function(mealPrice, taxRate, tipPercent){
    meals.push({
        mealPrice: mealPrice,
        taxRate: taxRate,
        tipPercent: tipPercent
    });
}

export default {
    meals,
    lastMeal,
    calcSubtotal,
    calcTip,
    calcTotal,
    calcTipTotal,
    calcMealCount,
    calcAvgTip,
    updateStore

}