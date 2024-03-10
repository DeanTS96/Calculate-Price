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
        let total = 0;
        for(const char of this.checkoutList){
            total += this.pricing[char].price
        }
        return total
    }
}

export default Checkout;