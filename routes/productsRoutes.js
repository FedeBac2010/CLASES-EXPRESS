const express= require('express');
const router= express.Router();
const productsController= require('../controllers/productsController')


/* RUTA A TODOS LOS PRODUCTOS */
router.get('/', productsController.todosLosProductos);

/* RUTA PARA CREAR UN PRODUCTO */
router.get('/create', productsController.crearProducto)
router.post('/', productsController.guardarProducto)//guarda la informacion creada anteriormente

/* RUTA A PRODUCTOS POR ID */
router.get('/:id', productsController.productosPorID)

/* RUTA PARA EDITAR UN PRODUCTO */
router.get('/:id/edit', productsController.editarProducto)
router.put('/:id', productsController.actualizarProducto)

/* RUTA PARA ELIMINAR UN PRODUCTO */
router.delete('/:id', productsController.borrarProducto)


module.exports= router;