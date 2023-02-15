function check(form)/*function to check userid & password*/
{
 /*the following code checkes whether the entered userid and password are matching*/
 console.log(form.userid.value);
 console.log(form.pswrd.value);
 if(form.userid.value == "truck1" && form.pswrd.value == "truck1")
  {
    window.open('welcome.html')/*opens the target page while Id & password matches*/
  }
 else
 {
   alert("Error Password or Username")/*displays error message*/
  }
}