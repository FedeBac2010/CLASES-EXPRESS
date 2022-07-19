const path= require('path');

const listPlatos= [
    {
        id:1,
        titulo:'Carpaccio fresco',
        descripcion:'Entrada Carpaccio de salmón con cítricos',
        precio: 65.50,
        moneda:'U$S',
        image: 'Carpaccio-de-salmon.jpg'
    },
    {
        id:2,
        titulo:'Risotto de berenjena',
        descripcion:'Risotto de berenjena y queso de cabra',
        precio: 47.00,
        moneda:'U$S',
        image: 'Risotto-berenjena-queso-cabra.jpg'
    },
    {
        id:3,
        titulo:'Mousse de arroz',
        descripcion:'Mousse de arroz con leche y aroma de azahar',
        precio: 27.50,
        moneda:'U$S',
        image: 'Mousse-de-arroz-con-leche.jpg'
    },
    {
        id:4,
        titulo:'Espárragos blancos',
        descripcion:'Espárragos blancos con vinagreta de verduras y jamón ibérico',
        precio: 37.50,
        moneda:'U$S',
        image: 'esparragos.png'
    }
    
]

module.exports={
    index: (req,res)=>{
        res.render('index',{menu:listPlatos})
    },

    menu:(req,res)=>{
        const id= req.params.id;
        const plato= listPlatos.find(plato=> plato.id ==id);
        res.render('detalleMenu',{plato})
    }
}