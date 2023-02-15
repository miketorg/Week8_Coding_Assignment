function submitWeight(form)
{
  let net = form.gross.value - form.tare.value


  let text = (`
    Is this correct?

    Date: ${form.date.value}
    Name: ${form.name.value}
    Number: ${form.number.value}
    Gross: ${form.gross.value}
    Tare: ${form.tare.value}
    Net: ${net}
  `);
  
  if (confirm(text) == true) {
    text = "You pressed OK!";
  } else {
    text = "You canceled!";
  }
  
 document.getElementById('tdate').innerHTML = form.date.value;
 document.getElementById('tname').innerHTML = form.name.value;
 document.getElementById('tnumber').innerHTML = form.number.value;
 document.getElementById('tgross').innerHTML = form.gross.value;
 document.getElementById('ttare').innerHTML = form.tare.value;
 document.getElementById('tnet').innerHTML = net;

}