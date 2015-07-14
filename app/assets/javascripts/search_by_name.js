$(document).ready(function () {

  var $searchField = $('#robot_filter_name')

  $searchField.on('keyup', function () {
    var searchTerm = this.value.toLowerCase();               //this = that field, that element
    $('.robot').each(function (index, robot) {
      var name = $(robot).find('h3').text().toLowerCase();   //grabbing the text inside that h3 element
      var matches = name.indexOf(searchTerm) !== -1;         //Boolean of whether or not i matches -- gives you the index of where that search term is, if it can't find it, it will return an index of -1
      $(robot).toggle(matches);
    });
  });
});




//issue with 'change' is it only occurs when the user lifts off the box
//keyup - as soon as the user lifts finger off of key
