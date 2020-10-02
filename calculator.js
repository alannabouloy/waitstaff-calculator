import * as store from './store';
//Event Listeners

const bindEventListeners = function() {
    handleSubmit();
    handleCancel();
    handleReset();
}
const handleSubmit = function() {
    $('#js-meal-form').on('submit', event => {
        event.preventDefault();
        console.log('clicked')
        getFormData();
        updateStore();
        updateCustomerCharges();
        updateMyEarnings();
    
       /* updateMealPrice($('#js-meal-price').val());
        update = $('#js-tip-percent').val();
        const taxRate = $('#js-tax-rate').val();*/
    })
}

const handleCancel = function() {

}


const handleReset = function() {

}



//render function
const render = function() {
    updateCustomerCharges();

};


//update data functions
const updateCustomerCharges = function() {
    const subtotal = store.calcSubtotal(store.lastMeal().mealPrice,store.lastMeal().taxRate);
    const tip = store.calcTip(store.lastMeal().mealPrice, store.lastMeal().tipPercent);
   $('#subtotal').html(subtotal); 
    $('#tip').html(tip);
    $('#total').html(store.calcTotal(subtotal, tip));

}

const updateMyEarnings = function() {
    store.calcTipTotal();
    store.calcMealCount();
    store.calcAvgTip();
}

const getFormData = function() {
    let mealPrice = ($('#js-meal-price').val());
    let tipPercent = ($('#js-tip-percent').val());
    let taxRate = ($('#js-tax-rate').val());
    updateStore(mealPrice, taxRate, tipPercent);
    console.log('store updated');
}


export default {
    bindEventListeners,
    render
}