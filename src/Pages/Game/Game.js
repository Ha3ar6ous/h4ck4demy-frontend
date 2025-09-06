import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Game.module.css'

const Game = () => {
  // array holds all game types and their metadata
  const gameTypes = [
    {
      id: 'mcq',
      title: 'MCQ Challenge',
      description:
        'Test your cybersecurity knowledge with carefully crafted multiple choice questions',
      route: '/game/mcq',
      difficulty: 'Beginner',
      difficultyColor: '#4CAF50',
      points: '10-50 points',
      icon: '🧠',
      estimatedTime: '5-10 min',
    },
    {
      id: 'situational',
      title: 'Situational Game',
      description:
        'Navigate real-world cybersecurity scenarios through interactive drag-and-drop challenges',
      route: '/game/situational',
      difficulty: 'Intermediate',
      difficultyColor: '#FF9800',
      points: '20-100 points',
      icon: '🎯',
      estimatedTime: '10-15 min',
    },
  ]

  return (
    <div className={styles.game}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>
            Choose Your <span className={styles.highlight}>Challenge</span>
          </h1>
          <p className={styles.subtitle}>
            Level up your cybersecurity skills through interactive learning
            experiences
          </p>
        </div>

        <div className={styles.gameGrid}>
          {/* mapping over gameTypes to render each game card */}
          {gameTypes.map((game, index) => (
            <div
              key={game.id}
              className={styles.gameCard}
              style={{ animationDelay: `${index * 0.1}s` }} // staggered animation
            >
              <div className={styles.cardHeader}>
                <div className={styles.gameIcon}>{game.icon}</div>
                <h3 className={styles.gameTitle}>{game.title}</h3>
              </div>

              <p className={styles.gameDescription}>{game.description}</p>

              <div className={styles.gameInfo}>
                <div className={styles.infoItem}>
                  <span className={styles.label}>
                    <span className={styles.dot}></span>
                    Difficulty
                  </span>
                  <span
                    className={styles.difficultyBadge}
                    style={{ backgroundColor: game.difficultyColor }}
                  >
                    {game.difficulty}
                  </span>
                </div>
                <div className={styles.infoItem}>
                  <span className={styles.label}>
                    <span className={styles.dot}></span>
                    Rewards
                  </span>
                  <span className={styles.value}>{game.points}</span>
                </div>
                <div className={styles.infoItem}>
                  <span className={styles.label}>
                    <span className={styles.dot}></span>
                    Duration
                  </span>
                  <span className={styles.value}>{game.estimatedTime}</span>
                </div>
              </div>

              {/* link navigates user to selected game route */}
              <Link to={game.route} className={styles.playBtn}>
                <span>Start Challenge</span>
                <svg
                  className={styles.btnIcon}
                  width='16'
                  height='16'
                  viewBox='0 0 24 24'
                  fill='none'
                >
                  <path
                    d='M5 12H19M19 12L12 5M19 12L12 19'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
              </Link>
            </div>
          ))}
        </div>

        <div className={styles.stats}>
          <div className={styles.statCard}>
            <div className={styles.statHeader}>
              <h4 className={styles.statTitle}>Your Progress</h4>
              <div className={styles.progressRing}>
                {/* svg circles act as progress indicator */}
                <svg className={styles.progressCircle} width='40' height='40'>
                  <circle
                    cx='20'
                    cy='20'
                    r='16'
                    stroke='#2D2659'
                    strokeWidth='3'
                    fill='none'
                  />
                  <circle
                    cx='20'
                    cy='20'
                    r='16'
                    stroke='#8E24AA'
                    strokeWidth='3'
                    fill='none'
                    strokeDasharray='0 100'
                  />
                </svg>
              </div>
            </div>

            <div className={styles.statGrid}>
              <div className={styles.statItem}>
                <span className={styles.statLabel}>Games Played</span>
                <span className={styles.statValue}>0</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statLabel}>Total Score</span>
                <span className={styles.statValue}>0</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statLabel}>Current Rank</span>
                <span className={styles.statValue}>Unranked</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Game
