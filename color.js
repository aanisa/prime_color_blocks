  var countR = 1;
  var countY = 1;
  var countB = 1;
  var countG = 1;



$(document).ready(function() {
  $('.addBlocks').append('<div class="blocks" id="red"></div>');
  $('.addBlocks').append('<div class="blocks" id="yellow"></div>');
  $('.addBlocks').append('<div class="blocks" id="blue"></div>');
  $('.addBlocks').append('<div class="blocks" id="green"></div>');

  $('.redButton').on("click", function() { //use .on not .click
    $('.addBlocks').append('<div class="blocks" id="red"></div>');
    countR+=1;
    $('.RedCount').text("Red Count: " + countR);
  });

  $('.yellowButton').on("click", function() {
    $('.addBlocks').append('<div class="blocks" id="yellow"></div>');
    countY+=1;
    $('.YellowCount').text("Yellow Count: " + countY);
  });

  $('.blueButton').on("click", function() {
    $('.addBlocks').append('<div class="blocks" id="blue"></div>');
    countB+=1;
    $('.BlueCount').text("Blue Count: " + countB);
  });

  $('.greenButton').on("click", function() {
    $('.addBlocks').append('<div class="blocks" id="green"></div>');
    countG+=1;
    $('.GreenCount').text("Green Count: " + countG);
  });



});

//hard mode need block to dissappear when clicked on an counter to reflect that change
//use prepend()
//prework video about clicks
