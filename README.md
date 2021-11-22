
# INSTALL AND RUN APPLICATION

`$ yarn install`
`$ yarn start`


This application runs on http://localhost:3000/

# PROBLEM 1
![](https://i.ibb.co/BswD53r/Captura-de-Pantalla-2021-11-21-a-la-s-17-32-35.png)

Entry: [1, [2], [3, null, [5]]]
Output:
`{
  id: 1,
  left: {
    id: 2
  },
  right: {
    id: 3,
    left: null,
    right: {
      id: 5
    }
  }
}`

# PROBLEM 2
1.- Click on the input file.
![](https://i.ibb.co/PhFGXts/Captura-de-Pantalla-2021-11-21-a-la-s-18-27-53.png)

2.- Select a file.
![](https://i.ibb.co/Gk3sgTp/Captura-de-Pantalla-2021-11-21-a-la-s-18-28-22.png)

3.- Output.
![](https://i.ibb.co/j8jstgP/Captura-de-Pantalla-2021-11-21-a-la-s-18-28-35.png)
![](https://i.ibb.co/VNb056y/Captura-de-Pantalla-2021-11-21-a-la-s-18-28-44.png)

3.1.- If exists an error.
![](https://i.ibb.co/q57YDtZ/Captura-de-Pantalla-2021-11-21-a-la-s-18-29-00.png)


# UNIT TESTING

`$ yarn test`
```javascript
import {parser} from '../Utils'

describe("parser entry", () => {
    test("Example of unit testing of funcion parser", async () => {
        const response = parser([1, [2], [3, null, [5]]]);
        expect(response).toStrictEqual({ id: 1, left: { id: 2 }, right: { id: 3, left: null, right: { id: 5 } } });
    });
});
```
![](https://i.ibb.co/q7JmRpQ/Captura-de-Pantalla-2021-11-21-a-la-s-18-42-02.png)

