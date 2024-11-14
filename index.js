const purchaseBtn = document.getElementById('purchase-btn')
const couponBtn = document.getElementById('coupon-code')


function getKitchenProductPrice(kitchenPrice){
    const product1Price = document.getElementById(kitchenPrice);
    // console.log(stringProduct1Price)
    const stringProduct1Price = product1Price.innerText;
    const numProduct1Price = parseFloat(stringProduct1Price);
    return numProduct1Price;
}

function getSportsProductPrice(sportPrice){
    const productPrice = document.getElementById(sportPrice);
    // console.log(stringProduct1Price)
    const stringProductPrice = productPrice.innerText;
    const numProductPrice = parseFloat(stringProductPrice);
    return numProductPrice;
}

function addDiscount(discountCode,discountTotal){
    const code = document.getElementById(discountCode);
    // const couponCode = code.innerText;
    code.innerText = discountTotal.toFixed(2);
}


function addList(list,item){
    const listIn = document.getElementById(list);
    const itemAdd = document.getElementById(item).innerText;
    const count = listIn.childElementCount;
    const p = document.createElement('p');
    p.innerHTML = `<span class="font-semibold text-1xl">${count+1}. ${itemAdd}</span>`;
    listIn.appendChild(p);
}

function totalPrice(price,productPrice){
    const totalFinal = document.getElementById(price);
    const total = document.getElementById(price);
    const stringTotal = total.innerText;
    const stringTotalFinal = totalFinal.innerText;
    const numTotalFinal = parseFloat(stringTotalFinal);
    const numTotal = parseFloat(stringTotal);
    const sumTotal = numTotal + productPrice;
    const sumTotalFinal = numTotalFinal + productPrice;
    total.innerText = sumTotal;
    totalFinal.innerText = sumTotalFinal;
    if(sumTotal>0 && sumTotalFinal>0){
        purchaseBtn.removeAttribute('disabled');
        if(sumTotal>=200){
            couponBtn.removeAttribute('disabled');
        }
    }
    // else if(sumTotal >= 200){
    //     couponBtn.removeAttribute('disabled');
    // }
}

function getTotalPrice(totalPriceId){
    const sumTotalPrice = document.getElementById(totalPriceId);
    const stringSum = sumTotalPrice.innerText;
    const numSum = parseFloat(stringSum);
    return numSum;
}

function getCoupon(couponId){
    const couponUse = document.getElementById(couponId);
    const stringDiscount = couponUse.innerText;
    const numDiscount = parseFloat(stringDiscount);
    return numDiscount;
}

function getTotal(totalId){
    const finalTotal = document.getElementById(totalId);
    const stringFinalTotal = finalTotal.innerText;
    const numFinalTotal = parseFloat(stringFinalTotal);
    return numFinalTotal;
}

function getDiscount(discountId){
    const discount = document.getElementById(discountId);
    const value = discount.innerText;
    return value;
}

document.getElementById('goHomeBtn').addEventListener('click', function() {
    document.getElementById('successModal').classList.add('hidden');
});

purchaseBtn.addEventListener('click',function(){
    const list = document.getElementById('list');

    getTotalPrice('total-price');

    getCoupon('discount');
    
    getTotal('total')

    // alert('Successful');
    document.getElementById('total-price').innerText = 0;
    document.getElementById('discount').innerText = 0;
    document.getElementById('total').innerText = 0;
    if(isNaN()){
        purchaseBtn.setAttribute('disabled',"");
        couponBtn.setAttribute('disabled',"");
    }
    list.innerHTML = '';

    document.getElementById('successModal').classList.remove('hidden');
})


couponBtn.addEventListener('click', function(){
    const discountValue = getDiscount('discount-code');
    const coupon = document.getElementById('coupon-field');
    const num = getTotalPrice('total-price');
    getTotal('total');
    // const discountValue = discount.innerText;
    const couponValue = coupon.value;
    const offer = num * 0.2;
    const discountOffer = num - offer;
    // console.log(discountValue)
    if(couponValue === discountValue ){
        addDiscount('discount',offer);
        // addDiscount('discount',discountOffer);
        document.getElementById('total').innerText = discountOffer;
    }else{
        alert("Code not available! Try Again")
    }
    coupon.value = '';
    // coupon.setAttribute('disabled','')
})


document.getElementById('kitchen-1').addEventListener('click',function(){
    const Price1 = getKitchenProductPrice('prod-1-price');
    const addList1 = addList('list','item-1');
    const totalPrice1 = totalPrice('total-price',Price1);
    const finalTotal1 = totalPrice('total',Price1);
    // console.log(totalPrice1)
    
})

document.getElementById('kitchen-2').addEventListener('click',function(){
    const Price2 = getKitchenProductPrice('prod-2-price');
    const addList2 = addList('list','item-2');
    const totalPrice2 = totalPrice('total-price',Price2);
    const finalTotal2 = totalPrice('total',Price2);
    // console.log(Price2);
})
document.getElementById('kitchen-3').addEventListener('click',function(){
    const Price3 = getKitchenProductPrice('prod-3-price');
    // console.log(Price3);
    const addList3 = addList('list','item-3');
    const totalPrice3 = totalPrice('total-price',Price3);
    const finalTotal3 = totalPrice('total',Price3);
})

document.getElementById('sports-kit-1').addEventListener('click',function(){
    const sport1 = getSportsProductPrice('sport-1');
    addList('list','kit-1');
    totalPrice('total-price',sport1);
    totalPrice('total',sport1);
})
document.getElementById('sports-kit-2').addEventListener('click',function(){
    const sport2 = getSportsProductPrice('sport-2');
    addList('list','kit-2');
    totalPrice('total-price',sport2);
    totalPrice('total',sport2);
})
document.getElementById('sports-kit-3').addEventListener('click',function(){
    const sport3 = getSportsProductPrice('sport-3');
    addList('list','kit-3');
    totalPrice('total-price',sport3);
    totalPrice('total',sport3);
})



