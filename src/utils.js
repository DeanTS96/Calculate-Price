class Checkout {
    constructor(pricing) {
        this.checkoutList = '';
        this.pricing = pricing;
    }
    scan(item) {
        if(/^[A-Z]$/.test(item)){
            this.checkoutList += item;
        }
    }
    getTotalPrice() {

    }
}

export default Checkout;