import Checkout from '../utils'

describe('Checkout', () => {
    test('Checkout class has the correct properties and methods, and constructs the correct pricing property', () => {
        const testCheckout = new Checkout({a:{price: 30, specialPrice:{quantity:2, price: 50}}});
        const expected = {a:{price: 30, specialPrice:{quantity:2, price: 50}}}

        expect(testCheckout).toHaveProperty('checkoutList');
        expect(testCheckout.pricing).toEqual(expected);
        expect(testCheckout).toHaveProperty('scan');
        expect(testCheckout).toHaveProperty('getTotalPrice');
    })
})