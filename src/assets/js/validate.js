export function validate(values) {
    const errors = {};
    if (!values.username) {
        errors.username = "Username is required!";
    }
    if (!values.firstname) {
        errors.firstname = "Firstname is required!";
    }
    if (!values.lastname) {
        errors.lastname = "Lastname is required!";
    }
    if (!values.email) {
        errors.email = "Email is required!";
    }
    if (!values.contact) {
        errors.contact = "Contact is required!";
    }
    if (!values.dob) {
        errors.dob = "Date of Birth is required!";
    }
    if (!values.address) {
        errors.address = "Address is required!";
    }
    if (!values.password) {
        errors.password = "Password is required!";
    }
    if (!values.confirmPassword) {
        errors.confirmPassword = "Confirm Password is required!";
    }
    return errors;
}