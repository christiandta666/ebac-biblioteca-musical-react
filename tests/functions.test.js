const {
    sumArray,
    countWords,
    findMax,
    isDivisible
} = require("../functions");

describe("sumArray", () => {
    test("suma números positivos", () => {
        expect(sumArray([1, 2, 3, 4])).toBe(10);
    });
    test("suma números negativos", () => {
        expect(sumArray([-1, -2, -3])).toBe(-6);
    });
    test("arreglo vacío retorna 0", () => {
        expect(sumArray([])).toBe(0);
    });
    test("arreglo con ceros", () => {
        expect(sumArray([0, 1, 2])).toBe(3);
    });
});
describe("countWords", () => {
    test("cadena normal", () => {
        expect(
            countWords("Hola mundo esto es una prueba")
        ).toBe(6);
    });
    test("espacios al inicio y final", () => {
        expect(
            countWords("   Hola mundo   ")
        ).toBe(2);
    });
    test("cadena vacía", () => {
        expect(
            countWords("")
        ).toBe(0);
    });
    test("espacios consecutivos", () => {
        expect(
            countWords("Hola    mundo    prueba")
        ).toBe(3);
    });
});
describe("findMax", () => {
    test("números positivos", () => {
        expect(
            findMax([5, 2, 9, 3])
        ).toBe(9);
    });
    test("números negativos", () => {
        expect(
            findMax([-5, -2, -9, -3])
        ).toBe(-2);
    });
    test("arreglo vacío", () => {
        expect(
            findMax([])
        ).toBeNull();
    });
    test("todos iguales", () => {
        expect(
            findMax([7, 7, 7, 7])
        ).toBe(7);
    });
});
describe("isDivisible", () => {
    test("números divisibles", () => {
        expect(
            isDivisible(10, 2)
        ).toBe(true);
    });
    test("números no divisibles", () => {
        expect(
            isDivisible(10, 3)
        ).toBe(false);
    });
    test("divisor igual a cero", () => {
        expect(
            isDivisible(10, 0)
        ).toBe("No se puede dividir entre cero");
    });
    test("números negativos", () => {
        expect(
            isDivisible(-10, 2)
        ).toBe(true);
    });
});