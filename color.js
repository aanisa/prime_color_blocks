  var countR = 0;
  var countY = 0;
  var countB = 0;
  var countG = 0;



  $(document).ready(function() {
  
      $('.addBlocks').on('click', '#red', function() {
          $(this).remove();
          countR -= 1;
          $('.RedCount').text("Red Count: " + countR);
      });

      $('.redButton').on("click", function() { //use .on not .click
          $('.addBlocks').append('<div class="blocks" id="red"></div>');
          countR += 1;
          $('.RedCount').text("Red Count: " + countR);
      });

      $('.addBlocks').on('click', '#yellow', function() {
          $(this).remove();
          countY -= 1;
          $('.YellowCount').text("Yellow Count: " + countY);
      });

      $('.yellowButton').on("click", function() {
          $('.addBlocks').append('<div class="blocks" id="yellow"></div>');
          countY += 1;
          $('.YellowCount').text("Yellow Count: " + countY);
      });

      $('.addBlocks').on('click', '#blue', function() {
          $(this).remove();
          countB -= 1;
          $('.BlueCount').text("Blue Count: " + countB);
      });

      $('.blueButton').on("click", function() {
          $('.addBlocks').append('<div class="blocks" id="blue"></div>');
          countB += 1;
          $('.BlueCount').text("Blue Count: " + countB);
      });

      $('.addBlocks').on('click', '#green', function() {
          $(this).remove();
          countG -= 1;
          $('.GreenCount').text("Green Count: " + countG);
      });

      $('.greenButton').on("click", function() {
          $('.addBlocks').append('<div class="blocks" id="green"></div>');
          countG += 1;
          $('.GreenCount').text("Green Count: " + countG);
      });

  });






  /* Alternative Method
  var countR = 0;

  $(document).ready(function() {

    $('.redButton').on("click", function() {
      countR+=1;
      $('.RedCount').text("Red Count: " + countR);

      addRedClock();

    });
    $(".blocks").on("click", "#red", function(){
        $(this).remove();
  });

  function addRedBlock() {
    $('.addBlocks').append('<div class="blocks" id="red"></div>');
  }
  */
