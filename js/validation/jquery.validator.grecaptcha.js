(function ($) {
    $.validator.addMethod('grecaptcha', function (value, element, params) {
        if (grecaptcha.getResponse() === '') {
            return false;
        } else {
            return true;
        }
    });
    //$.validator.unobtrusive.adapters.addBool('grecaptcha', 'required');
    $.validator.unobtrusive.adapters.add('grecaptcha', [], function (options) {
        options.rules["grecaptcha"] = true;
        options.messages['grecaptcha'] = options.message;
    });
}(jQuery));