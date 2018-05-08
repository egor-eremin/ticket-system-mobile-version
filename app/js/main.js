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
});
