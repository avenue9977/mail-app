jQuery(document).ready(function() {
    jQuery('#sidebarCollapse').on('click', function() {
        jQuery('#sidebar').toggleClass('active');
        jQuery('#content').toggleClass('full');
    });
});
