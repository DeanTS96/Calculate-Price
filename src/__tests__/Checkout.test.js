import Checkout from '../Checkout'

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
        const testCheckout = new Checkout({B:{price: 30}});
        testCheckout.scan('B')

        expect(testCheckout.checkoutList).toBe('B')
    })
    test('scan method will only accept single capital string characters', () => {
        const testCheckout = new Checkout({B:{price: 30}});
        testCheckout.scan('b')

        expect(testCheckout.checkoutList).not.toBe('b')
    })
    test('scan throws an error with the message "Scanned item does not have a price" when the item doesn\'t have a price on the passed prices object', () => {
        const testCheckout = new Checkout({
            A:{price: 30, specialPrice: {quantity: 3, price: 50}}, 
            B:{price: 50, specialPrice: {quantity: 2, price: 80}}, 
            C:{price: 20}
        });

        expect(() => testCheckout.scan("Z")).toThrow("Scanned item does not have a price")
    })
})

describe('getTotalPrice', () => {
    test('getTotalPrice returns 0 when there is no items  have been scanned', () => {
        const testCheckout = new Checkout({A:{price: 30}});
        const totalPrice = testCheckout.getTotalPrice();

        expect(totalPrice).toBe(0)
    })
    test('getTotalPrice returns correct price when one item has been scanned', () => {
        const testCheckout = new Checkout({A:{price: 30}});
        testCheckout.scan("A")
        const totalPrice = testCheckout.getTotalPrice();

        expect(totalPrice).toBe(30)
    })
    test('getTotalPrice returns correct price when multiple items have been scanned', () => {
        const testCheckout = new Checkout({A:{price: 30}, B:{price: 50}});
        testCheckout.scan("A")
        testCheckout.scan("B")
        testCheckout.scan("A")
        const totalPrice = testCheckout.getTotalPrice();

        expect(totalPrice).toBe(110)
    })
    test('getTotalPrice returns correct price when 2 items meet a special price criteria', () => {
        const testCheckout = new Checkout({
            A:{price: 30, specialPrice: {quantity: 2, price: 40}}, 
            B:{price: 50}
        });
        testCheckout.scan("A")
        testCheckout.scan("A")
        const totalPrice = testCheckout.getTotalPrice();

        expect(totalPrice).toBe(40)
    })
    test('getTotalPrice returns correct price when a special price criteria is met in a more complex list', () => {
        const testCheckout = new Checkout({
            A:{price: 30, specialPrice: {quantity: 3, price: 50}}, 
            B:{price: 50, specialPrice: {quantity: 2, price: 80}}, 
            C:{price: 20}
        });
        testCheckout.scan("B")
        testCheckout.scan("A")
        testCheckout.scan("C")
        testCheckout.scan("A")
        testCheckout.scan("C")
        testCheckout.scan("A")
        testCheckout.scan("C")
        testCheckout.scan("A")
        const totalPrice = testCheckout.getTotalPrice();

        expect(totalPrice).toBe(190)
    })
})