import React, { useState } from 'react'
import styles from './Learn.module.css'

const Learn = () => {
  const [selectedTopic, setSelectedTopic] = useState('identity')

  const topics = {
    identity: {
      title: 'Safe Online Identity & Password Hygiene',
      content: [
        'Use strong, unique passwords for each account',
        'Enable two-factor authentication when available',
        'Never share personal information with strangers online',
        'Be cautious about what you post on social media',
        'Use password managers to generate and store secure passwords',
      ],
    },
    browsing: {
      title: 'Safe Browsing & Device Practices',
      content: [
        'Keep your software and operating system updated',
        'Be cautious when clicking on links or downloading files',
        'Use reputable antivirus software',
        'Avoid using public Wi-Fi for sensitive activities',
        'Regularly backup your important data',
      ],
    },
  }

  return (
    <div className={styles.learn}>
      <div className={styles.container}>
        <h1 className={styles.title}>Cybersecurity Learning Center</h1>

        <div className={styles.topicSelector}>
          <button
            className={`${styles.topicBtn} ${
              selectedTopic === 'identity' ? styles.active : ''
            }`}
            onClick={() => setSelectedTopic('identity')}
          >
            Safe Online Identity
          </button>
          <button
            className={`${styles.topicBtn} ${
              selectedTopic === 'browsing' ? styles.active : ''
            }`}
            onClick={() => setSelectedTopic('browsing')}
          >
            Safe Browsing
          </button>
        </div>

        <div className={styles.content}>
          <div className={styles.topicCard}>
            <h2 className={styles.topicTitle}>{topics[selectedTopic].title}</h2>

            <div className={styles.lessonContent}>
              <h3>Key Points:</h3>
              <ul className={styles.pointsList}>
                {topics[selectedTopic].content.map((point, index) => (
                  <li key={index} className={styles.point}>
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.actions}>
              <button className={styles.practiceBtn}>Practice Quiz</button>
              <button className={styles.gameBtn}>Play Related Games</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Learn
