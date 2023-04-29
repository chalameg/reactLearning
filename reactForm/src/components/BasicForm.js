import useInput from "../hooks/use-input";

const BasicForm = (props) => {

  const {
    enteredValue: enteredFirstName,
    enteredValueIsValid: enteredFirstNameIsValid,
    valueInputIsInvalid: firstNameInputIsInvalid,
    valueInputChangeHandler: firstNameChangeHandler,
    valueInputBlurHandler: firstNameBlurHandler,
    reset: resetFirstName
} = useInput(firstName => firstName.trim() !== '')

  const {
    enteredValue: enteredLastName,
    enteredValueIsValid: enteredLastNameIsValid,
    valueInputIsInvalid: lastNameInputIsInvalid,
    valueInputChangeHandler: lastNameChangeHandler,
    valueInputBlurHandler: lastNameBlurHandler,
    reset: resetLastName
} = useInput(lastName => lastName.trim() !== '')

const {
  enteredValue: enteredEmail,
  enteredValueIsValid: enteredEmailIsValid,
  valueInputIsInvalid: emailInputIsInvalid,
  valueInputChangeHandler: emailInputChangeHandler,
  valueInputBlurHandler: emailInputBlurHandler,
  reset: resetEmail
} = useInput(email => email.trim().match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/))

let isFormValid = false;

if(enteredFirstNameIsValid && enteredLastNameIsValid && enteredEmailIsValid){
  isFormValid = true;
}

console.log(isFormValid)

const formSubmitHandler = (event) => {

  event.preventDefaults()

  if(!isFormValid){
    return;
  }

  console.log(enteredFirstName, enteredLastName, enteredEmail)
  
  resetFirstName()
  resetLastName()
  resetEmail()
}

const firstNameClasses = firstNameInputIsInvalid
? 'form-control invalid'
: 'form-control';
const lastNameClasses = lastNameInputIsInvalid
? 'form-control invalid'
: 'form-control';
const emailClasses = emailInputIsInvalid
? 'form-control invalid'
: 'form-control';

  return (
    <form onSubmit={formSubmitHandler}>
      <div className='control-group'>
        <div className={firstNameClasses}>
          <label htmlFor='name'>First Name</label>
          <input type='text' id='name' onChange={firstNameChangeHandler} onBlur={firstNameBlurHandler} value={enteredFirstName}/>
          {firstNameInputIsInvalid && (
          <p className='error-text'>Please enter valid value.</p>
        )}
        </div>
        <div className={lastNameClasses}>
          <label htmlFor='name'>Last Name</label>
          <input type='text' id='name' onChange={lastNameChangeHandler} onBlur={lastNameBlurHandler} value={enteredLastName}/>
        {lastNameInputIsInvalid && (
          <p className='error-text'>Please enter valid value.</p>
        )}
        </div>
      </div>
      <div className={emailClasses}>
        <label htmlFor='name'>E-Mail Address</label>
        <input type='email' id='name' onChange={emailInputChangeHandler} onBlur={emailInputBlurHandler} value={enteredEmail}/>
        {emailInputIsInvalid && (
          <p className='error-text'>Please enter valid value.</p>
        )}
      </div>
      <div className='form-actions'>
        <button disabled={!isFormValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
