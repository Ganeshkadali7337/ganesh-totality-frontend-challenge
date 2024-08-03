# Rental Application

A React-based rental application for browsing, liking, booking, and managing properties. The application includes features like filtering properties by amenities, sorting by price, and managing a cart for booked properties.

## Features

- **Property Listings**: Browse through a list of available rental properties.
- **Like and Favorite**: Like properties to add them to your favorites.
- **Book Properties**: Add properties to your cart for booking.
- **Property Details**: View detailed information about each property.
- **Favorites Section**: View and manage your liked properties.
- **Cart Management**: View, increment, decrement, remove, and manage booked properties in your cart.
- **Checkout Process**: Enter booking details, including contact information and payment details.
- **Filtering**: Filter properties by amenities (Gym, AC, Parking, WiFi).
- **Sorting**: Sort properties by price (High to Low, Low to High).

## Components

### PropertyList

- Displays a list of rental properties with options to like, book, and view more details.

### PropertyDetails

- Displays detailed information about a selected property.

### Favorites

- Displays a list of liked properties.

### Cart

- Displays booked properties with options to increment, decrement, remove, and manage items. Includes a checkout button to proceed
  to the checkout process.

### Checkout

- Allows users to enter booking details and review the total cost.

### Header

- Contains navigation links to the home page, favorites section, and cart section.

### Filters

Allows users to filter properties by amenities and sort them by price.

## Context

### CartContext

- - Manages the state for liked properties, booked properties, and provides functions to toggle likes, add properties to the cart,
    remove properties from the cart, and calculate the total cost.

## Available Scripts

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

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
