import React from 'react';
import styles from '../styles/Quote.module.css';

const Quote = () => (
  <div className={styles.text}>
    <p>
      Mathematics is not about numbers, equations, computations, or algorithms:
      it is about understanding.
      <span>- William Paul Thurston</span>
    </p>

    <p>
      Pure mathematics is, in its way, the poetry of logical ideas.
      <span>- Albert Einstein</span>
    </p>

    <p>
      Mathematics is the most beautiful and most powerful creation of the human spirit.
      <span>- Stefan Banach</span>
    </p>
  </div>
);

export default Quote;
