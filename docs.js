$(function () {
    $('[data-toggle="popover"]').popover();
    $('[data-toggle="tooltip"]').tooltip();

    $('pre code').each(function(i, block) {
        hljs.highlightBlock(block);
    });
})