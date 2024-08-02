                            // function for changing inner text 
function changingInnertext(id, value){
    document.getElementById(id).innerText = value;
}
// end 


                            // function for total cost and also grand total below
       function totalCostCalculating(id,priceToAdd){
        const totalCost = document.getElementById(id).innerText;
 const convertingTotalCost = parseInt(totalCost);
// changing color to red when the price is out of budget
document.getElementById(id).innerText = convertingTotalCost+parseInt(priceToAdd);
        if ((document.getElementById(id).innerText = convertingTotalCost+parseInt(priceToAdd)) > 900) {
            document.getElementById(id).style.color = "red";
        }
    } //end


                        // function for bus train click etc (not call just set onclick with parameter to html)
    function vehicleClick(vehicleType){
        const totalCost = document.getElementById("totalCost").innerText;
        const convertingTotalCost = parseInt(totalCost);
        

        if(vehicleType == "bus"){
            changingInnertext("grandTotal",convertingTotalCost+100);
        }
        else if(vehicleType == "train"){
            changingInnertext("grandTotal",convertingTotalCost-200);
        }
        else if(vehicleType == "flight"){
            changingInnertext("grandTotal",convertingTotalCost+500);
        }
        else{
            changingInnertext("grandTotal",convertingTotalCost);
        }
    }
