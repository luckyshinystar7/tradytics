import './App.css';

function Form() {
  return (
    <div className="App">
      <fieldset>
        Nome <input id="name" name="name" type="text" required maxLength={40} />
        Email <input id='email' name='email' type="email" required maxLength={50} />
        CPF <input id='cpf' name='cpf' type="number" required maxLength={11} />
      </fieldset>

    </div>
  );
}

export default Form;
