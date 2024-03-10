class Checkout {
    constructor(pricing) {
        this.checkoutList = '';
        this.pricing = pricing;
    }
    scan(item) {
        this.checkoutList += item;
    }
    getTotalPrice() {

    }
}

export default Checkout;