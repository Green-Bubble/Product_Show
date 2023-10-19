# Product_Show

This project was developed using redux and redux-saga for fetching datas in React. It can show you many products information including scrolling and seeing detail. So you can easily search and buy products. 
The interface was built using Tailwind CSS and it is very simple and friendly with customers. 
## Project Instruction

### Login :
Username/Email and password

### Registration :
Username, Email, Password, Confirm Password

### Password Recovery :
Email

### Product Listing:
Fetch products from a provided API or create a mock API using tools like JSON Server.
Implement infinite scrolling or pagination to load more products as the user scrolls down.

### Product Details:
On clicking a product, the user should be taken to a detailed product page with additional information.
### Shopping Cart:
Users should be able to add products to the shopping cart.
Implement a cart icon with a counter indicating the number of items in the cart.


## How to run this app?

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Code splitting with Redux-Saga

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting with Redux and Redux-Saga

    function* fetchProductsSaga(action) {
        let url = "https://fakestoreapi.com/products?limit=" + (action.payload+15);
        try {
            const response = yield call(() => axios.get(url));
            yield put(fetchProductsSuccess(response.data));
        } catch (error) {
            yield put(fetchProductsFailure(error.message));
        }
    }

    function* productSaga() {
        yield takeLatest(FETCH_PRODUCTS, fetchProductsSaga);
    }


### Technical Stacks
React,
Tailwind CSS


### How to navigate Site

1. Register User.(default user : BrianGamble  password : Victory!23)
2. Login User. => You can see Product Lists.
3. When you scroll down, then fetch more products.
4. If you like some products, then you can see detail.
5. If you buy something, you can add to carts.
6. Enjoy yourself.