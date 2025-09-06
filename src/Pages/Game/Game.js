import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Game.module.css'

const Game = () => {
  const gameTypes = [
    {
      id: 'mcq',
      title: 'MCQ Challenge',
      description: 'Test your knowledge with multiple choice questions',
      route: '/game/mcq',
      difficulty: 'Beginner',
      points: '10-50 points',
    },
    {
      id: 'situational',
      title: 'Situational Game',
      description: 'Drag and drop scenarios to practice real-world situations',
      route: '/game/situational',
      difficulty: 'Intermediate',
      points: '20-100 points',
    },
  ]

  return (
    <div className={styles.game}>
      <div className={styles.container}>
        <h1 className={styles.title}>Choose Your Challenge</h1>
        <p className={styles.subtitle}>
          Select a game type to start earning points!
        </p>

        <div className={styles.gameGrid}>
          {gameTypes.map((game) => (
            <div key={game.id} className={styles.gameCard}>
              <h3 className={styles.gameTitle}>{game.title}</h3>
              <p className={styles.gameDescription}>{game.description}</p>

              <div className={styles.gameInfo}>
                <div className={styles.infoItem}>
                  <span className={styles.label}>Difficulty:</span>
                  <span className={styles.value}>{game.difficulty}</span>
                </div>
                <div className={styles.infoItem}>
                  <span className={styles.label}>Rewards:</span>
                  <span className={styles.value}>{game.points}</span>
                </div>
              </div>

              <Link to={game.route} className={styles.playBtn}>
                Play Now
              </Link>
            </div>
          ))}
        </div>

        <div className={styles.stats}>
          <div className={styles.statCard}>
            <h4>Your Progress</h4>
            <p>
              Games Played: <span className={styles.statValue}>0</span>
            </p>
            <p>
              Total Score: <span className={styles.statValue}>0</span>
            </p>
            <p>
              Rank: <span className={styles.statValue}>Unranked</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Game
