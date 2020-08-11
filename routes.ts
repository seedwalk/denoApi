import { Router } from 'https://deno.land/x/oak/mod.ts'
import { getProducts, getProduct, addProduct, updateProduct, deleteProduct } from './controllers/products.ts'
import {
    getCars,
    getCar,
    createCar,
    updateCar,
    deleteCar,
  } from "./controllers/cars.ts";
  
  import { login } from "./controllers/user.ts";
  
  import { authMiddleware } from "./middlewares/auth.ts";

const router = new Router()

router.get('/api/v1/products', getProducts)
    .get('/api/v1/products/:id', getProduct)
    .post('/api/v1/products', addProduct)
    .put('/api/v1/products/:id', updateProduct)
    .delete('/api/v1/products/:id', deleteProduct)
    .post("/users/login", login)
    .get("/cars", authMiddleware, getCars)
    .get("/car/:id", authMiddleware, getCar)
    .post("/cars", authMiddleware, createCar)
    .put("/cars/:id", authMiddleware, updateCar)
    .delete("/cars/:id", authMiddleware, deleteCar);

export default router