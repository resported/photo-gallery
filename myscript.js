$(document).ready(function () {
    $('.photo').draggable({
        revert: true,
        cursor: ..,
        zIndex:..;
        start: function (event, ui) {
            ui.helper.css('transform', 'scale(2)')
        }
    })

    $('.basket').droppable({
        accept: '.photo',
        activeClass: 'highlight',
        tolerance: 'intersect',
        drop: function (event, ui) {
            ui.helper.hide('explode');
        }
    })




});