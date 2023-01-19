import {sum, definePrime} from './index.js';

describe("checking the amount", () => {
    it("adds 1 + 2 to equal 3", () => {
        const result = sum(1,2);
        expect(result).toBe(3);
    });
});

describe("checking conditions", () => {
    it("the number is simple", () => {
        expect(definePrime (17)).toBe (`Число 17 - простое число`)
    }),

    it("the number is composite", () => {
        expect(definePrime (18)).toBe (`Число 18 - составное число`)
    }),

    it("condition error", () => {
        expect(definePrime (1001)).toBe ("Данные неверны")
    });
});

describe("checking conditions", () => {

    const simple = 17;
    const complex = 18;

    it("the number is simple, composite and error", () => {
        expect(definePrime (17)).toBe (`Число 17 - простое число`)
        expect(definePrime (18)).toBe (`Число 18 - составное число`)
        expect(definePrime (1001)).toBe ("Данные неверны")
    }),

    it("the number is simple, composite and error", () => {
        expect(definePrime (simple)).toBe (`Число ${simple} - простое число`)
        expect(definePrime (complex)).toBe (`Число ${complex} - составное число`)
        expect(definePrime (1001)).toBe ("Данные неверны")
    });
});