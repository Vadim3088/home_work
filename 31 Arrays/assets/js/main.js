let CART =  [
    {name: 'milk', qty: 2, price: 28, total:56, buy:true},
    {name: 'bread', qty: 1, price: 12, total: 12, buy:false},
    {name: 'juice', qty: 2, price: 28, total:66, buy:true},
    {name: 'potato', qty: 1, price: 12, total: 34, buy:false}
];

let cartSort = "asc";
function checkAndAddProduct(){
    let name = document.getElementById('prod_name').value,
    qty = document.getElementById('prod_qty').value,
    price = document.getElementById('prod_price').value,
    valid = true;

    if(name==""){
        valid = false;
    }
    if(qty==""){
        valid = false;
    }else{
        qty = parseInt(qty);
        if(qty<=0){
            valid = false;
        }
    }

    if(price==""){
        valid = false;
    }else{
        price = parseFloat(price);
        if(price<=0){
            valid = false;
        }
    }

    if(valid){
        addToCart(name, qty, price);
    }else{
        panel.warning('Please fill correct all fields', true);
    }
}

function addToCart(name, qty, price){

    let ind = CART.findIndex(el=>el.name==name);
    if(ind==-1){
        CART.push({
            name:name,
            qty:qty,
            price:price,
            total:qty*price,
            buy: false
        });
    }else{
        CART[ind] = false;
        CART[ind].qty+=qty;
        CART[ind].total = CART[ind].qty*CART[ind].price;
    } 

    console.log(CART);
    document.getElementById('prod_name').value = '';
    document.getElementById('prod_qty').value = '1';
    document.getElementById('prod_price').value = '';
    panel.success('Product successfully added');
    shoppingList();
}

const productRow = (item, i) => {
    return `
            <tr>
                <td>${item.name}</td>
                <td class="text-center">${item.buy?'<span class="badge bg-success">yes</span>':'<span class="badge bg-danger">no</span>'}</td>
                <td class="text-end">${item.price.toFixed(2)}</td>
                <td class="text-center">${item.qty}</td>
                <td class="text-end">${item.total.toFixed(2)}</td>
                <td class="text-end">
                ${!item.buy?`<button class="btn btn-success btn-sm" onclick="buyProduct(${i})">Buy</button>`:''}
                    <button type="button" class="btn btn-danger btn-sm" onclick="deleteFromCart(${i})">Delete</b>
                </td>
            </tr>
            `;
}

function shoppingList(){
    let html = '';
    let total = CART.reduce(
        (accumPrice, curItem) => {
        return accumPrice + curItem.total},//первый параметр
        0);//второгй параметр
    let total_bought = CART.filter(
        (item) =>{
            return item.buy;
        }
    ).reduce(
        (accumPrice, curItem) => {
        return accumPrice + curItem.total},//первый параметр
        0);//второгй параметр
    let total_notbought = CART.filter(
        (item) =>{
            return !item.buy;
        }
    ).reduce(
        (accumPrice, curItem) => {
        return accumPrice + curItem.total},//первый параметр
        0);//второгй параметр

    
    if(cartSort == 'asc'){
        CART.sort((a, b) => a.total - b.total); 
        } else {
            CART.sort((a, b) => b.total - a.total); 
    }
    

    CART.forEach((item, i) => {
        html += !item.buy?productRow (item, i):'';
    });
    CART.forEach((item, i) => {
        html += item.buy?productRow (item, i):'';
    });
    
    document.getElementById("total").innerHTML = total.toFixed(2);
    document.getElementById("total_bought").innerHTML = total_bought.toFixed(2);
    document.getElementById("total_notbought").innerHTML = total_notbought.toFixed(2);
    document.getElementById("cart_list").innerHTML = html;
}

function changeSort(){
    cartSort = (cartSort=='asc')?'desc':'asc'; 
    shoppingList();
}

const buyProduct = (ind) => {
    if(typeof CART[ind]!=='undefined'){
        CART[ind].buy = true;
        shoppingList();
        panel.info('Product buyed', true);
    }else{
        panel.danger('Not found product for buy', true);
    }
}

const printBill = ()=>{
    let card_html = '';
    let total = 0;
    for(let i = 0; i<CART.length; i++){
        card_html += `
        <li>
        ${CART[i].name}${CART[i].price} &times; ${CART[i].qty} = ${CART[i].total}
        </li>`;
        total += CART[i].total
    }
    document.getElementById("total_bill").innerHTML = total;
    document.getElementById("bill_wrap").innerHTML = card_html;
}

const deleteFromCart = (index_tovara_dlaya_udalenija)=>{
    console.log(index_tovara_dlaya_udalenija);
    if(typeof CART[index_tovara_dlaya_udalenija]!=="undefined"){
        if(confirm(`Remove ${CART[index_tovara_dlaya_udalenija].name}from cart?`))
        {
            CART.splice(index_tovara_dlaya_udalenija, 1);
            shoppingList();
            panel.success('Product successfully removed from cart', true);
        }
    }else{
        panel.danger('Not found product for remove', true);
    }
}

shoppingList()