$(document).ready(function() {
  $(#signup_form).bootstrapValidator({
    fields: {
      email: {
        validators: {
          notEmpty: {
            message: 'Please supply your email address'
          },
          emailAddress: {
            message: 'Please supply a valid email address'
          }
        }
    }
  })
  .on('success.form.bv', function(e) {
            // $('#success_message').slideDown({ opacity: "show" }, "slow") // Do something ...
            $('#signup_form').data('bootstrapValidator').resetForm();

            // Prevent form submission
            e.preventDefault();
            //
            // // Get the form instance
            // var $form = $(e.target);
            //
            // // Get the BootstrapValidator instance
            // var bv = $form.data('bootstrapValidator');
            //
            // // Use Ajax to submit form data
            // $.post($form.attr('action'), $form.serialize(), function(result) {
            //     console.log(result);
            // }, 'json');
        });
});
