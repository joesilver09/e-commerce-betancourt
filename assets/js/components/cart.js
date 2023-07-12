function cart(prd, printProducts){
    let cart=[]

    function printCart(){
        console.log('Carrito:')
        console.log(cart)
    }
    function addToCart(id,qty){
        const itemFinded= cart.find(i=>i.id===id)
        if (itemFinded) {
            console.log('El producto con el id '+id+' ya esta')}
        else{
            console.log('El producto con el id '+id+' no esta')
        cart.push({id, qty})
        }
        printCart()
    }
    addToCart(1)
    addToCart(2)
    addToCart(2)
}
export default cart