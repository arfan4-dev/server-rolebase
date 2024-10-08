// Load environment variables
import dotenv from 'dotenv'
dotenv.config({
  path: './.env'
})
// Define environment variables
// eslint-disable-next-line no-undef
const { NODE_ENV, MONGODB_URI, PASS_SECRET, JWT_SECRET, PORT, EMAIL, PASSWORD, CORS_ORIGIN, CLIENT_URL } = process.env

// Define Swagger stage URL based on environment
const SWAGGER_STAGE_URL = NODE_ENV === 'production' ? 'https://role-based-access-control.herokuapp.com' : `http://localhost:${PORT}`

// Export environment variables
export { NODE_ENV, MONGODB_URI, PASS_SECRET, JWT_SECRET, PORT, EMAIL, PASSWORD, CORS_ORIGIN, CLIENT_URL, SWAGGER_STAGE_URL }
