/*
* Lookup Table - таблица поиска. 
* Если те или иные операции требуют довольно значительной вычмслительной мощности, их значения можно рассчитать заране и 
* сохранить в специальной справочной таблице.
* 
* Tests with:
* var tableSinus = fastSinus(10);
* console.log(tableSinus[2]);
*/

// Save sinus's value in table
var fastSinus = function (steps) {
  var table = [],
      angle = 0,
      angleStep = (Math.PI * 2) / steps;
      
  do {
    table.push(Math.sin(angle));
    angle += angleStep;
  } while (angle < Math.PI * 2);
  return table;
};
