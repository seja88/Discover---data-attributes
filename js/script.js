//1. find all .alert elements on the page
//2. find the value in their data-type attributes
//3. based on the value, add the appropriate class name to the alert element (using .classList.add())

//1. find all .alert elements on the page
const alerts = document.querySelectorAll('.alert')
//2. find the value in their data-type attributes
alerts.forEach(alert => {
    const dataType = alert.getAttribute('data-type');
    if (dataType === 'error') {
        //3. based on the value, add the appropriate class name...
        alert.classList.add('alert--error');
    } else if (dataType === 'warning') {
        //3. 
        alert.classList.add('alert--warning');
    } else if (dataType === 'success') {
        //3. 
        alert.classList.add('alert--success');
    }
});