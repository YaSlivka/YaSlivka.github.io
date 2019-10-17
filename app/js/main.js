function Info() {
var $selector = $('.js-info');

function onClick (el) {
    var $info = $(el),
        $MoreBtn = $info.find('.js-more-btn'),
        $MoreBlock = $info.find('.js-more-block');
       
    var isActive = false;

    $MoreBtn.click(function (e) {
      e.preventDefault();
        console.log('sdfhgdsf');
      if (!isActive) {
        $MoreBlock.addClass('is-active');
        // $MoreBtn.hide(500);
        isActive = true;
      }
      else {
        $MoreBlock.removeClass('is-active');
        // $MoreBtn.show(500);
        isActive = false;
      }
    });

    
  }

 $selector.each(function () {
    init(this);
  });

};

// Info();