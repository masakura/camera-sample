/* globals alert */

(function () {
  'use strict';

  navigator.getUserMedia =
    navigator.getUserMedia ||
    navigator.webkitGetUserMedia ||
    navigator.mozGetUserMedia ||
    navigator.msGetuserMedia;
})();

$(document).ready(function () {
  'use strict';

  var $finder = $('#finder');
  $finder.hide();

  var $picture = $('#picture');
  $picture.hide();
  var context = $picture[0].getContext('2d');

  navigator.getUserMedia({video: true}, function (stream) {
    $finder.attr('src', window.URL.createObjectURL(stream));
  }, function (error) {
    alert(error);
  });

  $(document).on('click', '#start-camera', function () {
    $picture.hide();

    $finder.show();
    $finder[0].play();
  });

  $(document).on('click', '#take-picture', function () {
    $finder.hide();
    $finder[0].pause();

    $picture[0].width = $finder[0].videoWidth;
    $picture[0].height = $finder[0].videoHeight;
    context.drawImage($finder[0], 0, 0);
    $picture.show();
  });
});
