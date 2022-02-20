//function 1.........................................................

function getinput (num){

    const depoimputfild = document.getElementById(num);
    const depoimputfildtext = depoimputfild.value;
    const depoimputfildtextfigur =parseFloat(depoimputfildtext);
    depoimputfild.value = '';
    return depoimputfildtextfigur;
}
// function 2......................................................
function depototal (fildid,depoinput){
    
    const depototalfild = document.getElementById(fildid);
    const depototalfildtext = depototalfild.innerText;
    const depototalfildfigur = parseFloat(depototalfildtext);
    totalfild = depototalfildfigur + depoinput;
    depototalfild.innerText = totalfild
   
}
// function 3-----------------------------------------------------------
function updatebalance(depoinput,isAdding){
    const balancetag = document.getElementById('balanc-total');
    const balancetagtext = balancetag.innerText;
    const balancetagfigur =parseFloat(balancetagtext);
    //  const totalbalance = balancetagfigur + depoinput ;
    let totalbalance;
    if (isAdding==true){
        totalbalance = balancetagfigur + depoinput ;
    }
    else{
        totalbalance = balancetagfigur - depoinput ;
    }
     balancetag.innerText = totalbalance;
   

}

// deposite button-------------------------------------------------


document.getElementById('diposite-button').addEventListener('click',function(){

    const depoinput = getinput('deposite-input');
    depototal('deposite-total',depoinput);
    updatebalance(depoinput,true);
})
// widthrow button/-------------------------------------------------------

document.getElementById('widthrow-button').addEventListener('click',function(){
   const widiput = getinput('widthrow-input');
   console.log(widiput);
   depototal('withdraw',widiput);
   updatebalance(widiput,false);
  // updatebalance(depoinput,false);

})