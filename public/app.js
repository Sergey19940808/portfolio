

document.addEventListener("DOMContentLoaded", function (event) {
    if (window.navigator.vendor === '') {
        var listFZContent = document.querySelectorAll('.fz-small');
        for (var i = 0; i < listFZContent.length; ++i) {
            listFZContent[i].style.fontSize = '0.78em';
        }

        var listFZHeader = document.querySelectorAll('.portfolio__user-print-button-text');
        for (var _i = 0; _i < listFZHeader.length; ++_i) {
            listFZHeader[_i].style.fontSize = '0.9em';
        }


        var listFZHeader = document.querySelectorAll('.portfolio__user-description-item-footer');
        for (var _i = 0; _i < listFZHeader.length; ++_i) {
            listFZHeader[_i].style.fontSize = '0.85em';
            listFZHeader[_i].style.padding = '5px 20px 20px 20px';
        }


    }
});