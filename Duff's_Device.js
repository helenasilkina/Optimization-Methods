/*
* @author Raffaele Cecco 
* @source "Supercharged Javascript Graphics"
* 
* Метод Даффа - это специфический вид оптимизации, применяемый в языке С и предназначенный для разворачивания циклов. 
* Разворачивание циклов - это обычная практика в языке ассемблера, где миниатюрные оптимизации могут очень много значить при таких 
* операциях, как масштабное копирование памяти либо ее масштабные чистки.
* На практике компиляторы автоматически разворачивают циклы.
*
* Tests with:
* iteration = 1000;
*/

var count = 0;
var partion = iteration % 8;

while (partion--) {
  count++;
}

partion = parseInt(iteration / 8);

while (partion--) {

  count++;
  count++;
  count++;
  count++;
  
  count++;
  count++;
  count++;
  count++;
}

