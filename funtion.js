//function 1...............get text make number..........................................

function getinput (num){

    const depoimputfild = document.getElementById(num);
    const depoimputfildtext = depoimputfild.value;
    const depoimputfildtextfigur =parseFloat(depoimputfildtext);
    depoimputfild.value = '';
    return depoimputfildtextfigur;
}
// function 2----------------get only inner text---------------------------------------

function getinnertextvalu(fieldid){
    const fildtag = document.getElementById('balanc-total');
     const valueintext = fildtag.innerText;
     const value = parseFloat(valueintext);
     return value;
}
// function 3................add 2 fild value .....................................
function depototal (fildid,num){
    
   
     const depototalfildfigur = getinnertextvalu(fildid);
    let totalfild = depototalfildfigur + num;
    document.getElementById(fildid).innerText = totalfild
   
}
// function 4-----------------(make both +,- with one function)------------------------------------------
function updatebalance(depoinput,isAdding){
  
    const balancetagfigur = getinnertextvalu('balanc-total');
    
     let totalbalance;
    if (isAdding==true){
         totalbalance = balancetagfigur + depoinput ;
    }
    else{
         totalbalance = balancetagfigur - depoinput ;
    }
    document.getElementById('balanc-total').innerText = totalbalance;
   

}

// --------------------------------------deposite button---------------------------------------------


document.getElementById('diposite-button').addEventListener('click',function(){

    const depoinput = getinput('deposite-input');
  
  
    if(depoinput>0){
    depototal('deposite-total',depoinput);
    updatebalance(depoinput,true);
   }
})
// --------------------------------------widthrow button/--------------------- ----------------------

document.getElementById('widthrow-button').addEventListener('click',function(){
   const widiput = getinput('widthrow-input');

   const balance = getinnertextvalu('balanc-total');
   console.log(balance);
   console.log(widiput);



   if(widiput>0 && widiput <= balance){
    depototal('withdraw',widiput);
    updatebalance(widiput,false);
   }
  
})