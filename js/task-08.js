const formRef = document.querySelector('.login-form')

function onLoginFormSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget)

    console.log(...formData)

    if ([...formData.values()].includes("")) {
        alert('Please fill all fields!')
        return
    }

    const formDataToObject = Object.fromEntries(formData)
    console.log(formDataToObject);
    
    formRef.reset();
    
}

formRef.addEventListener('submit', onLoginFormSubmit)
