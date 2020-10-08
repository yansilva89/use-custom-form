import React from 'react';
import Input from './Form/Input';
import './App.css';
import useForm from './Hooks/useForm';

const App = () => {
  const cep = useForm('cep');
  const email = useForm('email');
  const nome = useForm();
  // Campos não necessários
  // Exemplos
  const sobrenome = useForm(false);

  const handleSubmit = (ev) => {
    ev.preventDefault();
    if (cep.validate() && email.validate() && nome.validate()) {
      console.log(cep.value, email.value, nome.value, sobrenome.value); // Req is here
    } else {
      console.log('Não enviar');
    }
  };

  return (
    <>
      <h1>Use Custom Form</h1>
      <form onSubmit={handleSubmit}>
        <Input label="Nome*" id="nome" type="text" {...nome} />

        <Input label="Sobrenome" id="sobrenome" type="text" {...sobrenome} />

        <Input
          label="Cep*"
          id="cep"
          type="text"
          placeholder="Exemplo: '00000-000'"
          {...cep}
        />

        <Input
          label="Email*"
          id="email"
          type="email"
          placeholder="Exemplo: 'email@email.com'"
          {...email}
        />
        <button>Enviar</button>
      </form>
    </>
  );
};

export default App;
