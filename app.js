const express= require('express');
const app= express();
const path= require('path')

/* RECURSOS ESTATICOS */
app.use(express.static('public'));

/* TEMPLATE ENGINE */
app.set('view engine', 'ejs')

/* PARA CAPTURAR INFO DEL FORMULARIO */
app.use(express.urlencoded({extended:true})); //forzamos con true a que la info capturada se convierta en un objeto literal
app.use(express.json());

/* HABILITAR METODOS HTTP */
const methodOverride= require('method-override');
app.use(methodOverride('_method'))

/* RUTAS */
const mainRoutes= require('./routes/mainRoutes')
const productsRoutes= require('./routes/productsRoutes')

app.use('/',mainRoutes);//http://localhost:3000/
app.use('/detalleMenu',mainRoutes);//http://localhost:3000/detalleMenu
app.use('/products',productsRoutes) //http://localhost:3000/products

/* SERVIDOR */

const PORT= process.env.PORT || 3000;
app.listen(PORT,(req,res)=>{
    console.log('listening to port http://localhost:'+ PORT)
})