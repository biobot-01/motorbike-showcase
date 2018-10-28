/* eslint-env jquery */

'use strict';

$(document).ready(function () {
  $('[data-toggle="lightbox"]').on('click', function (event) {
    event.preventDefault();
    $(this).ekkoLightbox();
  });
});
