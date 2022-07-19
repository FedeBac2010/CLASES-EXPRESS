const path= require('path');
const { v4: uuidv4 } = require('uuid');// Para dar un ID unico
const fs= require('fs');

const productListPath= path.resolve(__dirname,'../data/products.json')//Nuestra lista de productos del JSON
const productList= JSON.parse(fs.readFileSync(productListPath,'utf8')) //Nuestra lista del productos traducida

module.exports={
    todosLosProductos: (req,res)=>{
        res.render('index',{
            menu:productList //lista de productos que tenemos
        });
    },
    productosPorID:(req,res)=>{
        const id= req.params.id;
        res.send('Productos por ID:'+ id)
    },
    crearProducto:(req,res)=>{
        res.render('products/createProducts');
    },
    guardarProducto:(req,res)=>{
        let product= req.body;//lo que captura del body del formulario

        product.id= uuidv4(); //le damos un id especifico al produto que estamos almacenando

        productList.push(product);//guardamos el nuevo producto dentro del array de objetos de los productos JSON traducido

        fs.writeFileSync(productListPath, JSON.stringify(productList,null,2))//El NULL y el 2 lo deja ordenado el JSON y no todo escrito en una sola linea

        res.redirect('/products')
    },
    editarProducto:(req,res)=>{
        let id= req.params.id
        let product= productList.find(product=> product.id == id)
        res.render('products/editProducts',{
            menu:product //Con esto mostramos el producto que responda por el id que decidimos editar
        })
    },
    actualizarProducto:(req,res)=>{
        let id= req.params.id;
        let newProduct= req.body;

        newProduct.id= id;
        let productEdit= productList.find(product=> product.id ==id);
        
        for( let index=0; index <productList.length; index++){
            const element= productList[index];
            if(element.id==id){
                productList[index]= newProduct;
            }
        }

        fs.writeFileSync(productListPath,JSON.stringify(productList, null, 2))

        res.redirect('/products')
    },
    borrarProducto:(req,res)=>{
        res.send('Producto borrado')
    }
}