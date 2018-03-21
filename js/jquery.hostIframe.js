(function ($) {
    var DOCUMENT_NODE = 9;

    // Gets a jQuery object containing the iframe element containing the current content
    $.fn.hostIframe = function () {
        return this.map(function (index, doc) {
            // TODO make this work for windows too
            if (doc.nodeType != DOCUMENT_NODE) {
                throw new Error("Element is not a document");
            }

            var win = doc.defaultView ? doc.defaultView : doc.parentWindow;

            try {
                if (win && win.frameElement) {
                    return win.frameElement;
                }
            } catch (e) {
                // accessing win.frameElement might fail if iframe is cross-site
            }

            return null;
        });
    };

    // If the current jQuery object contains an iframe, this gets a jQuery object containing the iframe's document
    $.fn.iframeDocument = function () {
        return this.map(function (index, iframe) {
            try {
                return iframe.contentWindow.document;
            } catch (ex) {
                return null;
            }
        });
    };

    // If the current jQuery object contains an iframe, this gets a jQuery object containing the iframe's content window
    $.fn.iframeWindow = function () {
        return this.is('iframe') ? (this[0].contentWindow || this[0].contentDocument) : null;
    };

})(jQuery);
