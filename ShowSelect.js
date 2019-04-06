$('#FormSelect').on('change', function(event) {
  var pick = event.target.value;
  var $pick = $('#' + pick);
  $('[id*="formName"]').hide();
  $pick.show();
});