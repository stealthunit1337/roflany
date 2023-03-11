	<!-- включение/отключение кнопки -->
  <script>
  var user = document.getElementById('la-user-check');
  var phone = document.getElementById('la-phone-check');
  var button = document.getElementById('submit-button');

	var userCheck = function(){
		if ((user.value !== '')&&(phone.value !== '')){
			button.disabled = false
    }
    else {
			button.disabled = true
    }
	}
	var phoneCheck = function(){
    if ((user.value !== '')&&(phone.value !== '')){
			button.disabled = false
    }
    else {
			button.disabled = true
    }
  };
</script>

<!-- маска телефона -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.maskedinput/1.4.1/jquery.maskedinput.min.js" integrity="sha512-d4KkQohk+HswGs6A1d6Gak6Bb9rMWtxjOa0IiY49Q3TeFd5xAzjWXDCBW9RS7m86FQ4RzM2BdHmdJnnKRYknxw==" crossorigin="anonymous" referrerpolicy="no-referrer">
</script>
<script>
$.fn.setCursorPosition = function(pos) {
  if ($(this).get(0).setSelectionRange) {
    $(this).get(0).setSelectionRange(pos, pos);
  } else if ($(this).get(0).createTextRange) {
    var range = $(this).get(0).createTextRange();
    range.collapse(true);
    range.moveEnd('character', pos);
    range.moveStart('character', pos);
    range.select();
  }
};

$("#la-phone-check").click(function(){
  $(this).setCursorPosition(0);
}).mask("9 (999) 999-9999");
</script>
<? } ?>
