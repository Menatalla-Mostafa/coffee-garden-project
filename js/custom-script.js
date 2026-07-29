const tooltipTriggerList =
[].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))

tooltipTriggerList.map(function (tooltipTriggerEl){

return new bootstrap.Tooltip(tooltipTriggerEl)

})

const toast = new bootstrap.Toast(document.getElementById('cartToast'));

document.querySelectorAll('.add-cart-btn').forEach(button => {

    button.addEventListener('click', () => {

        toast.show();

    });

});

(() => {
  'use strict';

  const forms = document.querySelectorAll('.needs-validation');

  forms.forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      }

      form.classList.add('was-validated');
    });
  });
})();
