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
        let total = 0;
        const itemQuantities = {}
        for(const char of this.checkoutList){
            itemQuantities[char] = (itemQuantities[char] || 0) + 1;
            total += this.pricing[char].price
        }
        for(const item in this.pricing) {
            if(this.pricing[item].specialPrice){
                const numOfDeals = Math.floor(itemQuantities[item] / this.pricing[item].specialPrice.quantity);
                const numWithoutDeal = this.pricing[item].price * this.pricing[item].specialPrice.quantity;
                const numWIthDeal = this.pricing[item].specialPrice.price;
                const ammountToDeduct = (numWithoutDeal-numWIthDeal)*numOfDeals;
                total -= ammountToDeduct;
            }
        }
        return total
    }
}

export default Checkout;