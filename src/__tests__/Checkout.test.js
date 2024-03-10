import Checkout from '../utils'

describe('Checkout', () => {
    test('Checkout class has the correct properties and methods, and constructs the correct pricing property', () => {
        const testCheckout = new Checkout({A:{price: 30, specialPrice:{quantity:2, price: 50}}});
        const expected = {A:{price: 30, specialPrice:{quantity:2, price: 50}}}

        expect(testCheckout).toHaveProperty('checkoutList');
        expect(testCheckout.pricing).toEqual(expected);
        expect(testCheckout).toHaveProperty('scan');
        expect(testCheckout).toHaveProperty('getTotalPrice');
    })
})

describe('scan', () => {
    test('scan method adds the scanned item to the checkoutList string', () => {
        const testCheckout = new Checkout({B:{price: 30, specialPrice:{quantity:2, price: 50}}});
        testCheckout.scan('B')

        expect(testCheckout.checkoutList).toBe('B')
    })
    test('scan method will only accept single capital string characters', () => {
        const testCheckout = new Checkout({B:{price: 30, specialPrice:{quantity:2, price: 50}}});
        testCheckout.scan('b')

        expect(testCheckout.checkoutList).not.toBe('b')
    })
})

describe('getTotalPrice', () => {
    test('getTotalPrice returns 0 when there is no items  have been scanned', () => {
        const testCheckout = new Checkout({A:{price: 30, specialPrice:{quantity:2, price: 50}}});
        const totalPrice = testCheckout.getTotalPrice();

        expect(totalPrice).toBe(0)
    })
    test('getTotalPrice returns correct price when one item has been scanned', () => {
        const testCheckout = new Checkout({A:{price: 30, specialPrice:{quantity:2, price: 50}}});
        testCheckout.scan("A")
        const totalPrice = testCheckout.getTotalPrice();

        expect(totalPrice).toBe(30)
    })
})