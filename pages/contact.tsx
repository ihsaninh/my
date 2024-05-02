import { ChangeEvent, FormEvent, useState } from 'react';
import { IoPaperPlane } from 'react-icons/io5';

interface FormData {
  fullname: string;
  email: string;
  message: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    fullname: '',
    email: '',
    message: '',
  });
  const [formValid, setFormValid] = useState<boolean>(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setFormValid(
      formData.fullname !== '' &&
        formData.email !== '' &&
        formData.message !== ''
    );
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    const { fullname, email, message } = formData;
    const mailtoURL = `mailto:ihsan.inh@gmail.com?subject=Message from ${fullname}&body=${message}`;

    window.location.href = mailtoURL;
  };

  return (
    <article className='contact active' data-page='contact'>
      <header>
        <h2 className='h2 article-title'>Contact</h2>
      </header>

      <section className='mapbox' data-mapbox>
        <figure>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d507368.7832069498!2d106.48445110340417!3d-6.544573871593179!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69c3e312798437%3A0x301576d14feb990!2sBogor%20Regency%2C%20West%20Java!5e0!3m2!1sen!2sid!4v1714652215046!5m2!1sen!2sid'
            width='400'
            height='300'
            loading='lazy'
          ></iframe>
        </figure>
      </section>

      <section className='contact-form'>
        <h3 className='h3 form-title'>Contact Form</h3>

        <form onSubmit={handleSubmit} className='form' data-form>
          <div className='input-wrapper'>
            <input
              type='text'
              name='fullname'
              className='form-input'
              placeholder='Full name'
              required
              value={formData.fullname}
              onChange={handleChange}
            />

            <input
              type='email'
              name='email'
              className='form-input'
              placeholder='Email address'
              required
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <textarea
            name='message'
            className='form-input'
            placeholder='Your Message'
            required
            value={formData.message}
            onChange={handleChange}
          ></textarea>

          <button
            className='form-btn'
            type='submit'
            disabled={!formValid}
            data-form-btn
          >
            <IoPaperPlane />
            <span>Send Message</span>
          </button>
        </form>
      </section>
    </article>
  );
}
