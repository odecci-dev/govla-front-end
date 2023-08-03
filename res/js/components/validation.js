document.querySelectorAll("input[type='text'], input[type='number'], input[type='email'], .select-box, [data-upload-image-hover-container], [data-upload-image-co-borrower-hover-container]").forEach((item) => {
    // *, .select-box
    let p = document.createElement("p");
    p.classList.add('validation')
    item.after(p);

    const fName = document.getElementById('fName');
    const form = document.getElementById('newApplicationForm')
    const radioButtonValidation = document.querySelectorAll('input[type=radio]')
    const signatureValidation = document.querySelectorAll('.signature-wrapper-2')


    form.addEventListener('submit', (e) => {
        let messages = [];
        if (fName.value === '' || fName.value.length <= 6 || fName.value == null) {
            p.classList.remove('is-valid')
            p.classList.add('is-invalid')
            item.classList.remove('input-is-valid')
            item.classList.add('input-is-invalid')
            messages.push('This field is required')
            radioButtonValidation.forEach((radioBtn) => {
                radioBtn.classList.remove('input-radio-is-valid')
                radioBtn.classList.add('input-radio-is-invalid')
            })
            signatureValidation.forEach((signatureBtn) => {
                signatureBtn.classList.remove('input-signature-is-valid')
                signatureBtn.classList.add('input-signature-is-invalid')
            })
        } else {
            p.classList.remove('is-invalid')
            p.classList.add('is-valid')
            item.classList.remove('input-is-invalid')
            item.classList.add('input-is-valid')
            messages.push('Looks Good!')
            radioButtonValidation.forEach((radioBtn) => {
                radioBtn.classList.remove('input-radio-is-invalid')
                radioBtn.classList.add('input-radio-is-valid')

            })
            signatureValidation.forEach((signatureBtn) => {
                signatureBtn.classList.remove('input-signature-is-invalid')
                signatureBtn.classList.add('input-signature-is-valid')
                // signatureBtn.after(p);
            })
        }

        if (messages.length > 0) {
            e.preventDefault()
            p.innerHTML = messages.join(", ")
        }
    })

})
