class Checkout {
    constructor(pricing) {
        this.checkoutList = '';
        this.pricing = pricing;
    }
    scan(item) {
        if(/^[A-Z]$/.test(item)){
            if(!this.pricing[item]){
                throw new Error('Scanned item does not have a price');
            }
            this.checkoutList += item;
        }
    }
    getTotalPrice() {
        let total = 0;
        const itemQuantities = {}
        for(const char of this.checkoutList){
            const {price, specialPrice} = this.pricing[char];
            itemQuantities[char] = (itemQuantities[char] || 0) + 1;
            total += price;
            if(specialPrice && itemQuantities[char] === specialPrice.quantity){
                total -= (price*specialPrice.quantity) - specialPrice.price;
                itemQuantities[char] = 0;
            }
        }
        return total
    }
}

export default Checkout;