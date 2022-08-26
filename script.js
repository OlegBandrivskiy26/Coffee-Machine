let on = 1;
$('.grp__menu').hide(0);
$('#btnPower').click(function (){


    if(on == 1){
        $('.grp__menu').show(1500);
        $('.apologise').hide(0);
        on = 2
        btnPower.style.transition = '2s';
        btnPower.style.transform = 'rotate(360deg)';
    }else if(on == 2){
        $('.grp__menu').hide(1500);
        $('.loader__grp').hide(0);
        $('.water__war__grp').hide(0);
        $('.apologise').hide(0);
        on = 1
        btnPower.style.transition = '2s';
        btnPower.style.transform = 'rotate(360deg)';
    }
})


let a =  0;
$('.water__war__grp').hide(0);
$('#addWater').click(function (){


    if (a < 100){
        a+=10;
        waterRate.style.height = a + '%';
     }else if (a == 100){
        $('.water__war__grp').show(50);
        $('.grp__menu').hide(0);
    }
})
let milkAmount = 0;
$('#addMilk').click(function (){


    if (milkAmount < 100){
        milkAmount+=10;
        milkRate.style.height = milkAmount + '%';
    }else if (milkAmount == 100){
        $('.water__war__grp').show(50);
        $('.grp__menu').hide(0);
    }
})
$('.error__grp').hide(0);
$('#return').click(function (){
    $('.water__war__grp').hide(50);
    $('.grp__menu').show(100);
})
$('#return2').click(function (){
    $('.error__grp').hide(50);
    $('.grp__menu').show(100);
})
$('.apologise').hide(0);
$('.loader__grp').hide(0);
let loderAmount = 0;
$('#flatWhite').click(function (){
    if (a>9 && milkAmount>9){
        $('.loader__grp').show(0);
        $('.grp__menu').hide(0);
        setInterval(function (){
            if (loderAmount < 100){
                loderAmount++;
                loader.style.width = loderAmount + '%';
                number.innerText = loderAmount + '%';
                $('.liquid__container').show(0);
            }else if(loderAmount == 100) {
                $('.loader__grp').hide(0);
                $('.grp__menu').show(100);
                loderAmount -= 100;
            }
        },100);
        a-=10;
        milkAmount-=10;
        waterRate.style.height = a + '%';
        milkRate.style.height = milkAmount + '%';
        $('.liquid__container').hide(0);
    }else if (a<10 && milkAmount<10){
        $('.error__grp').show(0);
        $('.grp__menu').hide(0);
    }

})
$('#Capuchino').click(function (){
    if (a>9 && milkAmount>9){
        $('.loader__grp').show(0);
        $('.grp__menu').hide(0);
        setInterval(function (){
            if (loderAmount < 100){
                loderAmount++;
                loader.style.width = loderAmount + '%';
                number.innerText = loderAmount + '%';
                $('.liquid__container').show(0);
            }else if(loderAmount == 100) {
                $('.loader__grp').hide(0);
                $('.grp__menu').show(100);
                loderAmount -= 100;
            }
        },100);
        a-=10;
        milkAmount-=10;
        waterRate.style.height = a + '%';
        milkRate.style.height = milkAmount + '%';
        $('.liquid__container').hide(0);
    }else if (a<10 && milkAmount<10){
        $('.error__grp').show(0);
        $('.grp__menu').hide(0);
    }

})
$('.liquid__container').hide(0);