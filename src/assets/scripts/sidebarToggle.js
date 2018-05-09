jQuery(document).ready(function() {
    jQuery('#sidebarCollapse').on('click', function() {
        jQuery('#sidebar').toggleClass('active');
        jQuery('#content').toggleClass('full');
    });

    jQuery('#salert').on('click', function() {
        jQuery(this).toggleClass('show');
    });

});