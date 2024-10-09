import { add, subtract, multiply } from "@/utils/CalFunctions";

describe('test math calculation functions', () => {
    it('add correctly adds two real numbers', () => {
        const result = add(3, 5);
        expect(result).toBe(8);
    });

    it('subtract correctly subtracts two real numbers', () => {
        const result = subtract(3, 5);
        expect(result).toBe(-2);
    });

    it('multiplication correctly multiplies two real numbers', () => {
        const result = multiply(2, 5);
        expect(result).toBe(10);
    })

})