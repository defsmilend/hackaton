import React from 'react';
import styles from './styles.module.css';
import classNames from 'classnames';

export default function ReadyYoJoin() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <h1 className={classNames(styles.title, 'wubba-text-style')}>
          Ready to join?
        </h1>
        <div className={styles.inputRow}>
          <div className={styles.inputGroup}>
            <label className={styles.inputLabel}>Full name</label>
            <input className={styles.inputField} type="text" />
          </div>
          <div className={styles.inputGroup}>
            <label className={styles.inputLabel}>Email</label>
            <input className={styles.inputField} type="email" />
          </div>
          <div className={styles.inputGroup}>
            <label className={styles.inputLabel}>Phone number</label>
            <input className={styles.inputField} type="tel" />
          </div>
          <div className={styles.inputGroup}>
            <label className={styles.inputLabel}>Address</label>
            <input className={styles.inputField} type="text" />
          </div>
        </div>
        <button className={styles.submitButton}>
          <span className={styles.buttonText}>Apply</span>
        </button>
      </div>
    </div>
  );
}
