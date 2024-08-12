import React, { useState } from 'react';
import Layout from '../Layout/Layout';
import classNames from 'classnames';
import Plus from './assets/AccordionPlus.svg';
import styles from './styles.module.css';

const accordionData = [
  {
    title: 'What is a hackathon',
    content: 'Content for accordion 1',
  },
  {
    title: 'What is a hackathon',
    content: 'Content for accordion 1',
  },
  {
    title: 'What is a hackathon',
    content: 'Content for accordion 1',
  },
  {
    title: 'What is a hackathon',
    content: 'Content for accordion 1',
  },
  {
    title: 'What is a hackathon',
    content: 'Content for accordion 1',
  },
  {
    title: 'What is a hackathon',
    content: 'Content for accordion 1',
  },
  {
    title: 'What is a hackathon',
    content: 'Content for accordion 1',
  },
  {
    title: 'What is a hackathon',
    content: 'Content for accordion 1',
  },
];

const Accordion = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.accordion} onClick={toggleAccordion}>
      <img src={Plus} alt="plusButton" />
      <div className={styles.accordionContent}>
        <span className={styles.accordionTitle}>{title}</span>
        {isOpen && <div className={styles.accordionContent}>{content}</div>}
      </div>
    </div>
  );
};

function Faq() {
  return (
    <div className={styles.Faq}>
      <div className={styles.content}>
        <h1 className={classNames(styles.title, 'wubba-text-style')}>Faq</h1>
        <div className={styles.accordionContainer}>
          {accordionData.map((item, index) => (
            <Accordion key={index} title={item.title} content={item.content} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Faq;
