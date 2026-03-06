document.getElementById("ice-cream-form").onsubmit = () => {

    let isValid = true;
    let name = document.getElementById("customer").value.trim();
    let email = document.getElementById("email").value.trim();
    let flavor = document.getElementById("flavor");
    let waffle = document.getElementById('waffle');
    let sugar = document.getElementById('sugar');
    let cup = document.getElementById('cup')

    if (!name) {
        isValid = false;
        document.getElementById('err-name').style.display = "block";
    }
    if (!email) {
        isValid = false;
        document.getElementById('err-email').style.display = "block";
    }
    if (flavor.value === 'none') {
        isValid = false;
        document.getElementById('err-flav').style.display = "block";
    }
    if (!waffle.checked && !sugar.checked && !cup.checked) {
        document.getElementById('err-cone').style.display = "block";

    }
    return isValid;
}

const clearErrors = () => {
    let error = document.getElementsByClassName("err");
    for (let i = 0; i < clearErrors.length; i++) {
        error[i].style.display === 'none';
    }
}
