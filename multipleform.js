$(document).ready(function(){

	 $('select#select_btn').change(function(){
	
    var sel_value = $('option:selected').val();
	if(sel_value==0)
	{
		//Resetting Form 
		$("#form_submit").empty();
		$("#Guest1").css({'display':'none'});
	}
	else{
		//Resetting Form 
		$("#form_submit").empty();
		
		//Below Function Creates Input Fields Dynamically 
	    create(sel_value);
		
        //fix ID below
		//appending submit button to form
		$("#form_submit").append(
		$("<input/>",{type:'submit', value:'Register', name: "submit"})
		)
		}	
	});	


function create(sel_value){
   for(var i=1;i<=sel_value;i++)   
	   {
	   $("div#Guest1").slideDown('slow');
	   
	    $("div#Guest1").append(
		$("#form_submit").append(
		$("<div/>",{id:'head'}).append(
		$("<h3/>").text("Guest Registration "+i)),
        $("<input/>", {type:'hidden', placeholder:'Number of Seats', value:'Number of Seats', name:'on0'}),
        $("<input/>", {type:'hidden', placeholder:'Number of Seats', value:''+sel_value, name:'os0'}),
		$("<input/>", {type:'hidden', placeholder:'Name '+i, name:'Name'+i, value:'Name'}),
        $("<input/>", {type:'text', placeholder:'Name '+i, name:'Name'+i, id:'name'+i}),
		$("<br/>"),
        $("<input/>", {type:'hidden', placeholder:'Email (Optional) '+i, name:'Email'+i, value:'Email'}),
		$("<input/>", {type:'text', placeholder:'Email (Optional) '+i, name:'Email'+i, id:'email'+i}),
        $("<input/>", {type:'hidden', placeholder:'Outputs', value:'NESR'+i, name:'on'+i}),
        $("<input/>", {type:'hidden', placeholder:'Outputs', id:'output'+i, name:'os'+i}),
		$("<br/>"),
        $("<hr/>"),
		$("<br/>")
	         )),
//Configures Outputs
$('#name1, #email1').bind('keypress blur', function() { $('#output1').val($('#name1').val() + ', ' + $('#email1').val() );
});
$('#name2, #email2').bind('keypress blur', function() { $('#output2').val($('#name2').val() + ', ' + $('#email2').val() );
});
$('#name3, #email3').bind('keypress blur', function() { $('#output3').val($('#name3').val() + ', ' + $('#email3').val() );
});
$('#name4, #email4').bind('keypress blur', function() { $('#output4').val($('#name4').val() + ', ' + $('#email4').val() );
});
$('#name5, #email5').bind('keypress blur', function() { $('#output5').val($('#name5').val() + ', ' + $('#email5').val() );
});
$('#name6, #email6').bind('keypress blur', function() { $('#output6').val($('#name6').val() + ', ' + $('#email6').val() );
});
$('#name7, #email7').bind('keypress blur', function() { $('#output7').val($('#name7').val() + ', ' + $('#email7').val() );
});
$('#name8, #email8').bind('keypress blur', function() { $('#output8').val($('#name8').val() + ', ' + $('#email8').val() );
});
$('#name9, #email9').bind('keypress blur', function() { $('#output9').val($('#name9').val() + ', ' + $('#email9').val() );
});
$('#name9, #email9, #name10, #email10').bind('keypress blur', function() { $('#output9').val($('#name9').val() + ', ' + $('#email9').val() + ' (NESR10: ' + $('#name10').val() + ', ' + $('#email10').val() + ')' );
});
	    }
	}
});