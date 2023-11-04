function calculate () {

    var userName = document.getElementById("nameBox").value ; 
    var userSubscription = parseInt(document.getElementById("courseBox").value)  ;

    // var courseCount = parseInt(userCourse); 
    
    var fees = userSubscription * 1000; 
    
    
    // document.getElementById("content").innerText = "Total subscription fees: " + fees ;
    
    document.getElementById("content").innerHTML =
     `
     <br> <br> <br>
     Subscriber email: <b><span class="red">${userName} </span>   </b><br>
      Subscriptions taken:<b>${userSubscription}    </b><br>
     <h4>Total <span class="red"> Fees:</span> ${fees}  </h4>`; 
}