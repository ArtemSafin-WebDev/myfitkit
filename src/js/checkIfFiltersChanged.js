

export default function checkIfFiltersChanged() {
    const elements = Array.from(document.querySelectorAll('.js-catalog-filter-form'));
    const resetForm = Array.from(document.querySelectorAll('.js-reset-form'))
    elements.forEach(form => {
      const initialFormState = $(form).serialize();
      const checkboxes = Array.from(document.querySelectorAll('input[type="checkbox"], input[type="radio"]'));

      checkboxes.forEach(box => {
        box.addEventListener('change', () => {
          if (initialFormState === $(form).serialize()) {
            form.classList.remove('changed');
          } else {
            form.classList.add('changed');
          }
        })
      })

      form.addEventListener('reset', () => {
        console.log('Form has been reset');
      })

      resetForm.forEach(btn => btn.addEventListener('click', () => {
        if (initialFormState === $(form).serialize()) {
          form.classList.remove('changed');
        } else {
          form.classList.add('changed');
        }
      }))
    })
}
