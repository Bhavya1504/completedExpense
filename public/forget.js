const url = 'http://localhost:3000';

const getPassword = (e) => {
    e.preventDefault(); // Prevent the form from submitting

    console.log('hello');
    const email = document.getElementById('email');
    const obj = {
        email: email.value,
    }
    console.log(obj);

    axios.post(`${url}/password/forgotpassword`, obj)
    .then(res => {
        console.log(res);
        console.log(res.data);
        alert(res?.data?.message);

        if (res?.data?.status === 500) { // Use === for comparison
            email.value = '';
        } else {
            window.location = `${url}/login.html`; // Use backticks for string interpolation
        }
    })
    .catch(err => console.log(err))
}
