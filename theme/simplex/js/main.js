$(document).ready(function () {
    $("[data-toggle='lightbox']").on("click", function (event) {
        event.preventDefault();
        $(this).ekkoLightbox();
    });
});
