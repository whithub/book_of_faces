$(document).ready(function () {

  var $stateFilterDropDown = $('#robot_filter_state');

  $stateFilterDropDown.on('change', function () {
    var currentState = this.value;
    if (!currentState) { return $('.robot').show(); }
    $('.robot').each(function (index, robot) {
      var isInState = $(robot).data('state') === currentState;
      $(robot).toggle(isInState);                                   //if you pass a boolean into toggle, if its true it will show, if false it will hide
    });
  });

});
