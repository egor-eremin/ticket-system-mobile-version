$(document).ready(function () {
    function CustomSelect(main_selector,select_placeholder,dr_parent) {
        $(main_selector).select2({
            placeholder: select_placeholder,
            allowClear: true,
            dropdownParent:$(dr_parent),
        });
    }
    (function createCustomSelect() {
        CustomSelect('.custom-select',"Выберите категорию",'.custom-select-wrapper');
    })();
    (function editPathFile() {
        $(".custom-input-file input").change(function(e){
            var fileName = '';
            $('.list-add-files').empty();
            if( this.files && this.files.length >= 1 )
                fileName = 'число файлов - ' + this.files.length;
            else
                fileName = e.target.value.split( '\\' ).pop();
            if( fileName )
            {$('.list-add-files').append(fileName);} else {
                $('.list-add-files').text('файл не выбран');
            }
        });
    })();
    (function createCustomDatepicker() {
        $('.add-form__datapicker, .custom-datpicker').datepicker({
            minDate: new Date(),
        });
    })();
    (function addAnimationTap() {
        $('.menu-ticket').on('click', function () {
           $(this).addClass("animate");
        });
    })();
    (function validateForm() {
        $(".add-form").validate({
        });
        jQuery.extend(jQuery.validator.messages, {
            required: "Это поле необходимо заполнить",
            email:'Введите корректный E-mail',
        });
    })();
    $( document ).ajaxSend(function() {
        $('.preloder').addClass('animated');
    });
    $( document ).ajaxStop(function() {
        $('.preloder').removeClass('animated');
    });
    (function callbackModal() {
        $('.callback-link').magnificPopup({
            type:"inline",
        });
    })();
    (function validationCallbackModal() {
        $('.callback-form').validate({});
        $('.callback-form button[type="submit"]').on('click', function () {
            if (!$('.callback-form').valid()) return false;
        });
    })();
    (function showPopupMenu() {
        $('.menu-footer').on('click', function () {
            if ($('.footer-menu').hasClass('menu-footer_show')) {
                $('.footer-menu').removeClass('menu-footer_show');
                $('.close-wrapper').removeClass('active');
            } else {
                $('.footer-menu').addClass('menu-footer_show');
                $('.close-wrapper').addClass('active');
            }
        });
    })();
});
BX.ready(function(){
    loader = BX('preloder');
    BX.showWait = function(node, msg) {
        $('.preloder').addClass('animated');
    };
    BX.closeWait = function(node, obMsg) {
        $('.preloder').removeClass('animated');
    };
});
