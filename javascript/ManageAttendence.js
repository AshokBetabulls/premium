 
  var letterNumber = /^[0-9a-zA-Z]+$/;
	   function validate(form)/*function to check select year*/
{
 /*the following code checkes whether user select year or not*/
 if(form.eid.value=="")
 {
 alert("Please fill employee id");/*display error message*/
 $("#eid").focus();
 return false;
 }
 else if(form.name.value==""){
 alert("Please fill employee name");
 $("#name").focus();
 return false;
 }
 else if (letterNumber.test(form.name.value) != true){
	alert("Please fill with alphabets");
	$("#name").focus();
	return false;
	}
 
 else if(form.date.value==""){
 alert("Please fill date ");
 $("#date").focus();
 return false;
 }
 else if(form.tin.value==""){
 alert("Please fill intime ");
 $("#tin").focus();
 return false;
 }
 else if(form.tout.value==""){
 alert("please fill outtime ");
 $("#tout").focus();
 return false;
 }
 else{
 alert("Details uploaded sucessfully");
 return true;
 }
 }
	 