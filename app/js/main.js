$(document).ready(function () {
    function CustomSelect(main_selector,select_placeholder,dr_parent) {
        $(main_selector).select2({
            placeholder: select_placeholder,
            allowClear: true,
            dropdownParent:$(dr_parent),
        });
    }
    (function createCustomSelect() {
        CustomSelect('#category',"Выберите категорию",'.category-select');
        CustomSelect('#filter-category', 'Выберите категорию','.filter-category__wrapper');
        CustomSelect('#filter-status', 'Выберите статус', '.filter-status__wrapper');
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
        $('.add-form__datapicker, .custom-datpicker, #filter-date').datepicker({
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
        $(document).on('click', '.menu-footer', function () {
            if ($('.footer-menu').hasClass('menu-footer_show')) {
                $('.footer-menu').removeClass('menu-footer_show');
                $('.close-wrapper').removeClass('active');
                $('body').css('overflow-y','auto')
            } else {
                $('.footer-menu').addClass('menu-footer_show');
                $('.close-wrapper').addClass('active');
                $('body').css('overflow-y', 'hidden');
            }
        });
    })();
    (function closePopupMenu() {
        $(document).on('click','.close-wrapper', function (e) {
            e.preventDefault();
            $(this).removeClass('active');
            $('.footer-menu').removeClass('menu-footer_show');
        });
    })();
    (function showFilter() {
        $(document).on('click', '.filter', function () {
            if ($('.footer-menu').hasClass('show-filter')) {
                $('.footer-menu').removeClass('show-filter');
                $('.close-filter-wrapper').removeClass('active');
                $('body').css('overflow-y','auto');
            } else {
                $('.footer-menu').addClass('show-filter');
                $('.close-filter-wrapper').addClass('active');
                $('body').css('overflow-y','hidden');
            }
        })
    })();
    (function hideFilter() {
        $(document).on('click', '.close-filter-wrapper', function (e) {
           e.preventDefault();
           $(this).removeClass('active');
            $('.footer-menu').removeClass('show-filter');
            $('body').css('overflow-y','auto');
        });
    })();
    (function showNotice() {
        $(document).on('click','.menu-notice', function () {
            $('.footer-menu').addClass('show-notice');
            $('.menu-saidbar').addClass('active');
            $('body, html').animate({
                scrollTop: 0
            }, 500);
        });
    })();
    (function closeNotice() {
        $(document).on('click','.menu-saidbar__close-wrapper, .menu-saidbar__close-button', function (e) {
            e.preventDefault();
            $('.footer-menu').removeClass('show-notice');
            $('.menu-saidbar').removeClass('active');
        });
    })();
    (function showFilter() {
        $(document).on('click', '')
    })();
    (function showLeadTimeModal() {
        $('.add-lead-time').magnificPopup({
            items: {
                src: '.lead-time-popup'
            },
            type: 'inline',
        });
    })();
    (function addMakOnHourInput() {
        $('.hour-input').mask("a#", {
            "#": {pattern: "^[0-9]+$"},
            translation: {
                'a': {
                    pattern: "[1-9]",
                }
            }
        });
    })();
    (function addMakOnMinutesInput() {
        $('.minutes-input').mask("ab", {
            translation: {
                'a': {
                    pattern: "[1-9]",
                },
                'b': {
                    pattern: "[0-9]?",
                }
            }
        });
    })();
    (function openEditTicket() {
        $('#open-edit-popup').magnificPopup({
            removalDelay:1000,
            mainClass: 'change-popup mfp-fade',
            focus: '.input-edit-ticket',
            items: {
                src: '.change-ticket',
                type: 'inline',
            },
            tClose: 'Закрыть',
        });
        $(document).on('click', '#close-change-form', function (e) {
            e.preventDefault();
            $.magnificPopup.close();
        })
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
