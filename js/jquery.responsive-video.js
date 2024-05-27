/*
 * jQuery ResponsiveVideo v1.0.1
 * Author: Kyle
 */
(function ($) {
    $.fn.ResponsiveVideo = function (options) {
        var opts = $.extend({}, {
                selector: 'iframe',
                containerClass: 'video-container',
                source: ['youtube', 'vimeo'],
                extraSource: []
            }, options),
            allowSources = new RegExp($.unique($.merge(opts.source, opts.extraSource)).join('|'), 'gi');

        return this.each(function () {
            var $selector = $((opts.selector) ? opts.selector : 'iframe', $(this)),
                $wrapper = $('<div></div>'),
                $container = $('<div class="' + opts.containerClass + '"></div>');

            $selector.each(function (index, element) {
                var $element = $(element),
                    width = parseInt($element.width(), 10),
                    source = $element.prop('src');

                if (source.match(allowSources)) {
                    $element.wrap($wrapper.css({
                        width: width,
                        'max-width': '100%'
                    })).wrap($container);
                }
            });
        });
    };
}(jQuery));