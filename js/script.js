$(document).ready(function() {
    // Contact form modal
    $('#contactBtn').click(function() {
        $('#contactModal').modal('show');
    });

    // Form submission
    $('#contactForm').submit(function(e) {
        e.preventDefault();
        $.ajax({
            url: $(this).attr('action'),
            method: 'POST',
            data: $(this).serialize(),
            success: function(response) {
                alert('Form submitted successfully');
                $('#contactModal').modal('hide');
            },
            error: function(error) {
                alert('Error submitting form');
            }
        });
    });

    // What We Do slider
    $('#whatWeDoSlider').carousel({
        interval: 5000
    });

    // Our Project section
    $('.project-info').click(function() {
        var imageSrc = $(this).find('.project-title').data('image');
        $('#projectImage').attr('src', imageSrc);
        $('.project-info').removeClass('active');
        $(this).addClass('active');
    });

    // Card highlighting
    $('.card').hover(
        function() { 
            $(this).find('.read-more').show();
            $(this).find('.card-img-top').css('opacity', '0.3');
        },
        function() { 
            $(this).find('.read-more').hide();
            $(this).find('.card-img-top').css('opacity', '1');
        }
    );
});