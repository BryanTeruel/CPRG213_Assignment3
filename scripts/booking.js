/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?

var cost_per_day = 0;
var num_of_days = 0;

/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

let days = document.querySelectorAll(".day-selector li");

days.forEach(function(day){
    day.addEventListener("click", function(e){
        console.group(e.target.id, "button clicked.");
        
        if(e.target.classList.contains("clicked")){
            e.target.classList.remove("clicked");
            console.log(e.target.id, "removed.");
            num_of_days--;
        }else{
            e.target.classList.add("clicked");
            console.log(e.target.id, "added.");
            num_of_days++;
        }
        console.log("Number of Days Selected:", num_of_days);
        
        calculate_cost();
        console.groupEnd();
    });
});


/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

let clear_button = document.getElementById("clear-button");
clear_button.addEventListener("click", clear_days);

function clear_days(){
    console.group("clear_days()");
    days.forEach(function(day){
        day.classList.remove("clicked");
    });
    num_of_days = 0;
    console.log("Number of Days Selected:", num_of_days);
    
    calculate_cost();
    console.groupEnd();
}


/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

let half_button = document.getElementById("half");
half_button.addEventListener("click", half_day_rate);

function half_day_rate(){
    console.group("half_day_rate()");
    cost_per_day = 20;
    console.log("Cost per Day:", cost_per_day);
    
    if(!half_button.classList.contains("clicked")){
        half_button.classList.add("clicked");
        full_button.classList.remove("clicked");
    }
    
    calculate_cost();
    console.groupEnd();
}


// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

let full_button = document.getElementById("full");
full_button.addEventListener("click", full_day_rate);

function full_day_rate(){
    console.group("full_day_rate()");
    cost_per_day = 35;
    console.log("Cost per Day:", cost_per_day);
    
    if(!full_button.classList.contains("clicked")){
        full_button.classList.add("clicked");
        half_button.classList.remove("clicked");
    }
    
    calculate_cost();
    console.groupEnd();
}


/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

let cost = document.getElementById("calculated-cost");

function calculate_cost(){
    let total_cost = 0;
    console.group("calculate_cost()");
    total_cost = cost_per_day * num_of_days;
    cost.innerHTML = total_cost;
    console.log("Num of Days:", num_of_days);
    console.log("Cost per Day:", cost_per_day);
    console.log("Total Cost:", total_cost);
    console.groupEnd();
}

clear_days();
full_day_rate();