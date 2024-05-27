$.validator.setDefaults({
    ignore: '.ignore-validate'
});

(function ($) {
    window.grecaptchaCallback = function () {
        if ($('#grecaptcha').length > 0) {
            $('#grecaptcha').valid();
        }
    };

    window.onload = winLoaded();
    function winLoaded() {
        setCaptcha();
    }

    function setCaptcha() {
        if ($('#captcha').length > 0) {
            $('#captcha').prop('src', '/captcha.aspx?' + (new Date()).getTime());
        }
    }

    $(function () {
        $('#VerifyCode').prop('autocomplete', 'off');

        $('.reset-captcha').click(function() {
            setCaptcha();
        });

        $(':input[type="number"]').keypress(function (e) {
            if ($(this).val().length === parseInt($(this).prop('maxlength'), 10) && e.keyCode !== 13) {
                return false;
            }
        });
    });
})(jQuery);