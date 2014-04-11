(function(){
  'use strict';

  $(document).ready(initialize);

  function initialize(){
    $('#add').click(addNumbers);
    $('#sub').click(subNumbers);
    $('#mult').click(multNumbers);
    $('#div').click(divNumbers);
    $('#exp').click(expNumbers);
    $('#root').click(rootNumbers);
    $('#factorial').click(factNumbers);
  }

  function getNumbers(){
    var x = $('#num1').val() * 1;
    var y = $('#num2').val() * 1;
    return [x, y];
  }

  function addNumbers(){
    var numbers = getNumbers();
    var result = numbers[0] + numbers[1];
    display(result);
  }

  function subNumbers(){
    var numbers = getNumbers();
    var result = numbers[0] - numbers[1];
    display(result);
  }

  function multNumbers(){
    var numbers = getNumbers();
    var result = numbers[0] * numbers[1];
    display(result);
  }

  function divNumbers(){
    var numbers = getNumbers();
    var result = numbers[0] / numbers[1];
    display(result);
  }

  function expNumbers(){
    var numbers = getNumbers();
    var result = Math.pow(numbers[0], numbers[1]);
    display(result);
  }

  function rootNumbers(){
    var numbers = getNumbers();
    var result = Math.sqrt(numbers[0]);
    display(result);
  }

  function factNumbers(){
    var numbers = getNumbers();

    var result = 1;

    for(var i = 2; i <= numbers[0]; i++){
      result = result * i;
    }

    display(result);

  }

  function display(result) {
    $('#result').text(result);
  }

})();
