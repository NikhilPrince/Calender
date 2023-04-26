
  var settings = {};
  dayjs.locale(settings);

  $(function () {
   
    var dailyTime = dayjs().format('H');
  
    function changeColor() {
      $('.time-block').each(function() {
        var colorBlock = parseInt(this.id);
        $(this).toggleClass('past', colorBlock < dailyTime);
        $(this).toggleClass('present', colorBlock === dailyTime);
        $(this).toggleClass('future', colorBlock > dailyTime);
      });
    }
  
    function areaText() {
      $('.saveBtn').on('click', function() {
        var entry = $(this).parents().attr('id');
        var secondEntry = $(this).siblings('.description').val();
        localStorage.setItem(entry, secondEntry);
      });
    }
  
    function timeColor() {
      $('.time-block').each(function() {
        var colorBlock = parseInt(this.id);
        if (colorBlock === dailyTime) {
          $(this).removeClass('past & future').addClass('present');
        } else if (colorBlock > dailyTime) {
          $(this).removeClass('future & present').addClass('past');
        } else {
          $(this).removeClass('past & present').addClass('future');
        }
      });
    }

    $('.time-block').each(function() {
      var secondEntry = $(this).attr('id');
      var change= localStorage.getItem(secondEntry);
      $(this).children('.description').val(change);
    });
  
    
    function timeChange() {
      var date = $('#date');
      var hours = $('#time');
      var dailyDate = dayjs().format('dddd, MMMM D, YYYY');
      var dailyTime = dayjs().format('hh:mm:ss A');
      date.text(dailyDate);
      hours.text(dailyTime);
    }
    
    changeColor();
    areaText();                
    timeColor();
    
    setInterval(timeChange);
  });