import './../src/styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

$(document).ready(function() {
  $("#form1").submit(function() {
  event.preventDefault();

  let n = parseInt($("input#num").val());
  let p = 0;
  try {
    let x = tenDividedByN(n);
    $("#output").text(`10 / ${n} = ${x}`);
  } catch (e) {
    $("#output").text("Encountered some error case: " + e);
  } finally {
    p++;
    $("#output2").text("Execution completed. p = " + p);
  }
});

function tenDividedByN(n){
  if (isNaN(n)){
    throw "invalid number provided: " + n
  }
  return  10 / n;
}
})
