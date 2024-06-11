# krakend-play-ground
# Krakend Playground

This project is a playground for exploring and understanding the capabilities of [KrakenD](https://www.krakend.io/), the ultra performant API Gateway with middlewares.

## Features

- **Aggregation**: This project demonstrates how to aggregate responses from multiple backend services into a single response.
- **Basic Transformation**: It shows how to perform basic transformations such as filtering and mapping on the responses from backend services.
- **Grouping**: It illustrates how to group responses under specific fields.
- **Rate Limiting**: It implements rate limiting to limit the number of requests a client can make to the server in a given amount of time.
- **JWT Validation**: It uses the `github.com/devopsfaith/krakend-jose/validator` middleware to validate JWT tokens.

## Project Structure

- `apps/auth/server.js`: This is the authentication server that generates JWT tokens and retrieve.
- `apps/products/server.js`: This is the products service that serves the products data.
- `config/krakend.json`: This is the configuration file for the KrakenD API Gateway.

## Setup and Running

1. Install the dependencies: `npm install`
2. Start the authentication server: `node apps/auth/server.js`
3. Start the KrakenD API Gateway with the provided configuration: `krakend run -c config/krakend.json`

## API Endpoints

- **GET http://localhost:8080/__health**: This endpoint checks the health of the API Gateway.
- **GET http://localhost:8080/api/tokens**: This endpoint generates a JWT token.
- The following endpoints require a JWT token in the `Authorization` header as `Bearer <token>`:
  - **GET http://localhost:8080/api/profile**: This endpoint retrieves the user profile.
  - **GET http://localhost:8080/products**: This endpoint retrieves the products.

## Usage
- To get a JWT token, make a POST request to `http://localhost:3000/api/tokens`.
- To get the user profile, make a GET request to `http://localhost:8080/api/profile` with the JWT token in the `Authorization` header.
- To get the products, make a GET request to `http://localhost:8080/products` with the JWT token in the `Authorization` header.

## Contributing

Contributions are welcome. Please open an issue or submit a pull request.

## License

This project is licensed under the MIT License.