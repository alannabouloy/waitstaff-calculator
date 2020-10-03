//STORE 

const meals = []
//meal price, tax rate, tip, 
const lastMeal = function() {
    return meals[calcMealCount() - 1];
}

const calcSubtotal = function(mealPrice, taxRate) {
    //meal price + mealPrice * taxRate
    return mealPrice + (mealPrice * taxRate/100);
}

const calcTip = function(mealPrice, tipPercent) {
    return mealPrice * tipPercent/100;
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
        mealPrice: parseInt(mealPrice),
        taxRate: parseInt(taxRate),
        tipPercent: parseInt(tipPercent)
    });
}

//END STORE SECTION


//Event Listeners

const bindEventListeners = function() {
    handleSubmit();
    handleCancel();
    handleReset();
}
const handleSubmit = function() {
    $('#js-meal-form').on('submit', event => {
        event.preventDefault();
        getFormData();
        $('#js-meal-price').val('');
        $('#js-tip-percent').val('');
        $('#js-tax-rate').val('');
        render();
    
       /* updateMealPrice($('#js-meal-price').val());
        update = $('#js-tip-percent').val();
        const taxRate = $('#js-tax-rate').val();*/
    })
}

const handleCancel = function() {
    $('#cancel-form').on('click', event => {
        $('#js-meal-price').val('');
        $('#js-tip-percent').val('');
        $('#js-tax-rate').val('');
    })

}


const handleReset = function() {
    $('#reset').on('click', event => {
        meals.splice(0, meals.length)
        render();
    })


}

const resetDefault = function(){
    $('#subtotal').html(0); 
    $('#tip').html(0);
    $('#total').html(0);
    $('#tip-total').html(0);
    $('#meal-count').html(0);
    $('#tip-avg').html(0);
}

//render function
const render = function() {
    if(meals.length > 0){
        updateCustomerCharges();
        updateMyEarnings();
    }
    else{
        resetDefault();
    }

};


//update data functions
const updateCustomerCharges = function() {
    const subtotal = calcSubtotal(lastMeal().mealPrice,lastMeal().taxRate);
    const tip = calcTip(lastMeal().mealPrice, lastMeal().tipPercent);
   $('#subtotal').html(subtotal); 
    $('#tip').html(tip);
    $('#total').html(calcTotal(subtotal, tip));

}

const updateMyEarnings = function() {
    $('#tip-total').html(calcTipTotal());
    $('#meal-count').html(calcMealCount());
    $('#tip-avg').html(calcAvgTip());
}

const getFormData = function() {
    let mealPrice = ($('#js-meal-price').val());
    let tipPercent = ($('#js-tip-percent').val());
    let taxRate = ($('#js-tax-rate').val());
    updateStore(mealPrice, taxRate, tipPercent);
}


const main = function(){
    bindEventListeners();
    render();
};


$(main);
