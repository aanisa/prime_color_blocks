$(document).ready(function() {
  $('.addBlocks').append('<div class="blocks" id="red"></div>');
  $('.addBlocks').append('<div class="blocks" id="yellow"></div>');
  $('.addBlocks').append('<div class="blocks" id="blue"></div>');
  $('.addBlocks').append('<div class="blocks" id="green"></div>');

  $('.redButton').click(function() {
    $('.addBlocks').append('<div class="blocks" id="red"></div>');
  });
  $('.yellowButton').click(function() {
    $('.addBlocks').append('<div class="blocks" id="yellow"></div>');
  });
  $('.blueButton').click(function() {
    $('.addBlocks').append('<div class="blocks" id="blue"></div>');
  });
  $('.greenButton').click(function() {
    $('.addBlocks').append('<div class="blocks" id="green"></div>');
  });
});
