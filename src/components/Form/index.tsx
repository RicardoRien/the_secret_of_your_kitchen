import { useState } from 'react';
import axios from 'axios';
import styles from '../../app/page.module.css'
import { Caveat } from 'next/font/google'

const caveat = Caveat({ subsets: ['latin'] });

interface FormData {
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
}

export const Form = (): JSX.Element => {
  const [formData, setFormData] = useState<FormData>({
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
  });

  const { firstname, lastname, email, phone } = formData;

  const isFormEmpty = !firstname || !lastname || !email || !phone;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async(event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const resp: any = await axios.post('https://5eed24da4cbc340016330f0d.mockapi.io/api/newsletter', formData)
      if(resp) {
        alert('ok')
      } else {
        alert('???')
      }
    } catch (error: any) {
      console.error(error)
      alert('check the console')
    }
  };

  return (
    <div className={styles.container__form}>
      <h2 style={caveat.style}>Contáctanos</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.form_grid}>
          <div className={styles.form__input}>
            <p className={styles.form__text}>nombre</p>
            <input 
              type="text" 
              name="firstname" 
              value={firstname} 
              onChange={handleChange}
            />
          </div>
          <div className={styles.form__input}>
            <p className={styles.form__text}>apellido</p>
            <input 
              type="text" 
              name="lastname" 
              value={lastname} 
              onChange={handleChange}
            />
          </div>
          <div className={styles.form__input}>
            <p className={styles.form__text}>mail</p>
            <input type="email" 
              name="email" 
              value={email} 
              onChange={handleChange}
            />
          </div>
          <div className={styles.form__input}>
            <p className={styles.form__text}>teléfono</p>
            <input 
              type="text" 
              name='phone' 
              value={phone} 
              onChange={handleChange}
            />
          </div>
        </div>
        <div className={styles.form__btn_container}>
          <button type="submit" disabled={isFormEmpty}>
            enviar
          </button>
        </div>
      </form>
    </div>
  )
}
