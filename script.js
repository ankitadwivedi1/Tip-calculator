btn.addEventListener('click',function(){

    let billamount=document.getElementById('bill-amount').value ;

    let tippercentage=document.getElementById('tip-percentage').value ;

    let People=document.getElementById('People').value;

    // let tipamount=document.getElementById('tip-amount').value=billamount/100*tippercentage);

    const result = Math.round(result=billamount/100*tippercentage);

    // totalbill=document.getElementById('total-bill').value parseFloat(billamount)+parseFloat(tipamount);
   
    console.log(result/People +"total amount Each");

})
