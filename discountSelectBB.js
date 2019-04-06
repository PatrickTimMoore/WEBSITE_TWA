$('#FormSelect').on('change', function(event) {  
  var pick = event.target.value;
  if(pick == "formName3") {
		var password = "beourguest";
		var x = prompt("Enter the discount code: ","");
		if (x.toLowerCase() == password) {
			alert("Code confirmed: $2 off!");
			document.getElementById("discountSelect").value = "Student/Child"
		}
		else {
			alert("Sorry, that was incorrect. \n");
		}
    }
});