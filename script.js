// console.log("i am connected");
                        // event of add to card then card display and price total calculation
const allCart = document.getElementsByClassName("the_cart")

let count =0;
for(const cart of allCart){
    cart.addEventListener("click", function(e){
        count = count+1;
        // document.getElementById("the_count").innerText = count;
        changingInnertext("the_count", count);

                            // here we will start cart work 
        const placeName = e.target.parentNode.childNodes[1].innerText;
        // console.log(e.target.parentNode.childNodes[1].innerText);
        const price = e.target.parentNode.childNodes[3].childNodes[1].innerText
        // console.log(e.target.parentNode.childNodes[3].childNodes[1].innerText);

        const selectingUL = document.getElementById("selectedPlaceCont");

        const creatingLI = document.createElement("li");
        const creatingP = document.createElement("p");
        creatingP.innerText = placeName;
        const creatingP2 = document.createElement("p");
        creatingP2.innerText = price;

        creatingLI.appendChild(creatingP);
        creatingLI.appendChild(creatingP2);
        selectingUL.appendChild(creatingLI);

        // calling total price calculate function 
        totalCostCalculating("totalCost",price);
        // calling for grand total
        totalCostCalculating("grandTotal",price);
      
                        // lets travel total budget change
        const theBudget = document.getElementById("tBudget900").innerText;
        const convtheBudget = parseInt(theBudget);
            if((convtheBudget - parseInt(price))<0){
                alert("fokinnir pola taka kama")
                return;
            }
        document.getElementById("tBudget900").innerText = convtheBudget - parseInt(price);
    })
} // event end


