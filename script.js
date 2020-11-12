function onload_func() {
    alert('Привет! Данную работу выполнила Изтай Зарина :)');
}

function get_name(){
	alert("Здравствуйте, " + document.form1.Name.value + "! Сработало событие OnClick!");
}
function checkBoxFunc() {
  var checkBox = document.getElementById("myCheck");
  var text = document.getElementById("text");
  if (checkBox.checked == true){
    text.style.display = "block";
  } else {
     text.style.display = "none";
  }
}

function focusFunction() { 
  document.getElementById("myInput").style.background = "yellow";
}

function blurFunction() {
  document.getElementById("myInput").style.background = "red";
}
function changeFunction(val) {
  alert("Значение изменилось на " + val);
}