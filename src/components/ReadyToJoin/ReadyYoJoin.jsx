import React, { useState } from 'react';
import styles from './styles.module.css';
import classNames from 'classnames';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ReadyYoJoin() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        'service_br00jur',
        'template_3x25h0q',
        formData,
        'jzIcV6Pm-hV5EO8Y1'
      )
      .then(
        (response) => {
          toast.success('Your application was successfully sent!', {
            position: 'top-center',
          });
        },
        (err) => {
          toast.error('Something went wrong. Please try again later.', {
            position: 'top-center',
          });
        }
      );
  };

  return (
    <div id="apply" className={styles.wrapper}>
      <div className={styles.content}>
        <h1 className={classNames(styles.title, 'wubba-text-style')}>
          Ready to join?
        </h1>
        <form onSubmit={handleSubmit} className={styles.inputRow}>
          <div className={styles.inputGroup}>
            <label className={styles.inputLabel}>Full name</label>
            <input
              className={styles.inputField}
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
            />
          </div>
          <div className={styles.inputGroup}>
            <label className={styles.inputLabel}>Email</label>
            <input
              className={styles.inputField}
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className={styles.inputGroup}>
            <label className={styles.inputLabel}>Phone number</label>
            <input
              className={styles.inputField}
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
          <div className={styles.inputGroup}>
            <label className={styles.inputLabel}>Address</label>
            <input
              className={styles.inputField}
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
            />
          </div>
          <button className={styles.submitButton} type="submit">
            <span className={styles.buttonText}>Apply</span>
          </button>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
}
