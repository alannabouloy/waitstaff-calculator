import store from './store.js'
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

};


//update data functions
const updateCustomerCharges = function() {
    store.calcSubtotal();
    store.calcTip();
    store.calcTotal();

}

const updateMyEarnings = function() {
    store.calcTipTotal();
    store.calcMealCount();
    store.calcAvgTip();
}

const getFormData = function() {
    
}


export default {
    bindEventListeners,
    render
}