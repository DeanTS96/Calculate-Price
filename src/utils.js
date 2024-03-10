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
        if(!this.checkoutList.length) return 0;
        return this.pricing[this.checkoutList[0]].price
    }
}

export default Checkout;