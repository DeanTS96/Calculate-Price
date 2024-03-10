import Checkout from '../utils'

describe('Checkout', () => {
    test('Checkout class has two properties, checkoutList and pricing', () => {
        const testCheckout = new Checkout({a:{price: 30, specialPrice:{quantity:2, price: 50}}});

        expect(testCheckout).toHaveProperty('checkoutList');
        expect(testCheckout).toHaveProperty('pricing');
        expect(testCheckout).toHaveProperty('scan');
        expect(testCheckout).toHaveProperty('getTotalPrice');
    })
})