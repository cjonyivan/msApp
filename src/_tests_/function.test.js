
import {parser} from '../Utils'

describe("parser entry", () => {
    test("Example of unit testing of funcion parser", async () => {
        const response = parser([1, [2], [3, null, [5]]]);
        expect(response).toStrictEqual({ id: 1, left: { id: 2 }, right: { id: 3, left: null, right: { id: 5 } } });
    });
});