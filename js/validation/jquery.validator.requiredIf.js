(function ($) {
    $.validator.addMethod('requiredif', function (value, element, params) {
        var $other = $('[name="' + params.other + '"]');
        var otherVal = ($other.is(':checkbox')) ? ($other.is(':checked') ? 'true' : 'false') :
            ($other.is(':radio')) ? ($('input[name="' + params.other + '"]:checked').val()) : $other.val();
        if (params.comparison === 'isequalto' ? (otherVal === params.value) : (otherVal !== params.value)) {
            if (value !== undefined) {
                return (value !== null && value.toString().replace(/^\s\s*/, '').replace(/\s\s*$/, '') !== "");
            }

            return false;
        }

        return true;
    });

    $.validator.addMethod('requiredifnotempty', function (value, element, params) {
        var $other = $('#' + params.other);
        var otherVal = $other.val();

        if (otherVal !== null && otherVal.toString().replace(/^\s\s*/, '').replace(/\s\s*$/, '') !== "") {
            if (value !== null && value.toString().replace(/^\s\s*/, '').replace(/\s\s*$/, '') !== "")
                return true;
        }
        else
            return true;

        return false;
    });

    $.validator.unobtrusive.adapters.add('requiredif', ['other', 'comparison', 'value'], function (options) {
        options.rules['requiredif'] = {
            other: options.params.other,
            comparison: options.params.comparison,
            value: options.params.value
        };
        options.messages['requiredif'] = options.message;
    });

    $.validator.unobtrusive.adapters.add('requiredifnotempty', ['other'], function (options) {
        options.rules['requiredifnotempty'] = {
            other: options.params.other,
        };
        options.messages['requiredifnotempty'] = options.message;
    });
}(jQuery));