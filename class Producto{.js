class Producto{
    static ContadorProducto = 0;
    constructor(nombre,precio){
        this._idProducto = ++Producto.ContadorProducto;
        this._nombre = nombre;
        this._precio = precio;

    }
    get idProducto(){
        return this._idProducto = idProducto;
    }
    get nombre(){
        return this._nombre = nombre;
    }
    set nombre(nombre){
        this._nombre = nombre;
    }
    get precio(){
        return this._precio = precio;
    }
    set precio(precio){
        this._precio = precio;
    }

    toString(){
        return  ` idProducto :${this._idProducto}, Nombre : ${this._nombre}, Precio :${this._precio} `
    }
    

}
let producto1 = new Producto(`Arroz`, 200);
let producto2 = new Producto("habichuela", 400);
console.log(producto1.toString());
console.log(producto2.toString());

class Orden{
    static contadorOrden = 0;
    static MAX_PRODUCTO (){
        return 5;
    }
    constructor(){
        this.contadorOrden = ++Orden.contadorOrden;
        this._Producto = [];

    } 
    get producto(){
        return this.producto = this.producto
    }
    //creamos el metodo para agregar producto
    agregarProducto(producto){
        if( this._productos.length < Orden.MAX_PRODUCTOS){
            this._productos.push(producto);
            //this._productos[this._contadorProductosAgregados++] = producto;
        }
        else{
            console.log('No se pueden agregar más productos');
        }
    }

calcularTotal(){
    let totalVenta = 0;
    for(let producto of this._productos){
        totalVenta += producto.precio;//totalVenta = totalVenta + producto.precio
    }
    return totalVenta;
}

mostrarOrden(){
    let productosOrden = '';
    for( let producto of this._productos){
        productosOrden +=  producto.toString() + ' ';
    }

    console.log(`Orden: ${this._idOrden} Total: $${this.calcularTotal()}, Productos: ${productosOrden} `);
}

}

