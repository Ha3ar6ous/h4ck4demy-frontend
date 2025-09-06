import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import styles from './Leaderboard.module.css'

const Leaderboard = () => {
  const [players, setPlayers] = useState([])
  const [timeFrame, setTimeFrame] = useState('all')

  // Dummy data - replace with API call when backend is ready
  useEffect(() => {
    const dummyPlayers = [
      {
        id: 1,
        username: 'CyberMaster',
        score: 450,
        gamesPlayed: 15,
        lastPlayed: '2024-01-15',
      },
      {
        id: 2,
        username: 'SecurityPro',
        score: 380,
        gamesPlayed: 12,
        lastPlayed: '2024-01-14',
      },
      {
        id: 3,
        username: 'HackerHunter',
        score: 350,
        gamesPlayed: 10,
        lastPlayed: '2024-01-13',
      },
      {
        id: 4,
        username: 'PasswordGuard',
        score: 290,
        gamesPlayed: 9,
        lastPlayed: '2024-01-12',
      },
      {
        id: 5,
        username: 'NetDefender',
        score: 275,
        gamesPlayed: 8,
        lastPlayed: '2024-01-11',
      },
      {
        id: 6,
        username: 'CryptoSafe',
        score: 240,
        gamesPlayed: 7,
        lastPlayed: '2024-01-10',
      },
      {
        id: 7,
        username: 'PhishFighter',
        score: 220,
        gamesPlayed: 6,
        lastPlayed: '2024-01-09',
      },
      {
        id: 8,
        username: 'DataProtector',
        score: 195,
        gamesPlayed: 5,
        lastPlayed: '2024-01-08',
      },
      {
        id: 9,
        username: 'SecureUser',
        score: 170,
        gamesPlayed: 4,
        lastPlayed: '2024-01-07',
      },
      {
        id: 10,
        username: 'SafeBrowser',
        score: 145,
        gamesPlayed: 3,
        lastPlayed: '2024-01-06',
      },
    ]

    setPlayers(dummyPlayers)
  }, [timeFrame])

  const getRankIcon = (rank) => {
    switch (rank) {
      case 1:
        return '🥇'
      case 2:
        return '🥈'
      case 3:
        return '🥉'
      default:
        return `#${rank}`
    }
  }

  const getRankClass = (rank) => {
    switch (rank) {
      case 1:
        return styles.gold
      case 2:
        return styles.silver
      case 3:
        return styles.bronze
      default:
        return ''
    }
  }

  return (
    <div className={styles.leaderboard}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>Leaderboard</h1>
          <p className={styles.subtitle}>Top cybersecurity champions</p>

          <div className={styles.filters}>
            <button
              className={`${styles.filterBtn} ${
                timeFrame === 'all' ? styles.active : ''
              }`}
              onClick={() => setTimeFrame('all')}
            >
              All Time
            </button>
            <button
              className={`${styles.filterBtn} ${
                timeFrame === 'month' ? styles.active : ''
              }`}
              onClick={() => setTimeFrame('month')}
            >
              This Month
            </button>
            <button
              className={`${styles.filterBtn} ${
                timeFrame === 'week' ? styles.active : ''
              }`}
              onClick={() => setTimeFrame('week')}
            >
              This Week
            </button>
          </div>
        </div>

        <div className={styles.podium}>
          {players.slice(0, 3).map((player, index) => (
            <div
              key={player.id}
              className={`${styles.podiumPlace} ${getRankClass(index + 1)}`}
            >
              <div className={styles.podiumRank}>{getRankIcon(index + 1)}</div>
              <div className={styles.podiumPlayer}>
                <h3>{player.username}</h3>
                <p className={styles.podiumScore}>{player.score} pts</p>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.rankingTable}>
          <div className={styles.tableHeader}>
            <div className={styles.rank}>Rank</div>
            <div className={styles.player}>Player</div>
            <div className={styles.score}>Score</div>
            <div className={styles.games}>Games</div>
            <div className={styles.lastPlayed}>Last Played</div>
          </div>

          {players.map((player, index) => (
            <div
              key={player.id}
              className={`${styles.tableRow} ${getRankClass(index + 1)}`}
            >
              <div className={styles.rank}>
                <span className={styles.rankNumber}>
                  {getRankIcon(index + 1)}
                </span>
              </div>
              <div className={styles.player}>
                <span className={styles.username}>{player.username}</span>
              </div>
              <div className={styles.score}>
                <span className={styles.scoreValue}>{player.score}</span>
              </div>
              <div className={styles.games}>{player.gamesPlayed}</div>
              <div className={styles.lastPlayed}>
                {new Date(player.lastPlayed).toLocaleDateString()}
              </div>
            </div>
          ))}
        </div>

        <div className={styles.actions}>
          <Link to='/game' className={styles.playBtn}>
            Play Games
          </Link>
          <Link to='/learn' className={styles.learnBtn}>
            Learn More
          </Link>
        </div>

        <div className={styles.stats}>
          <div className={styles.statCard}>
            <h3>Total Players</h3>
            <p className={styles.statValue}>{players.length}</p>
          </div>
          <div className={styles.statCard}>
            <h3>Average Score</h3>
            <p className={styles.statValue}>
              {Math.round(
                players.reduce((sum, p) => sum + p.score, 0) / players.length
              )}
            </p>
          </div>
          <div className={styles.statCard}>
            <h3>Top Score</h3>
            <p className={styles.statValue}>{players[0]?.score || 0}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Leaderboard
