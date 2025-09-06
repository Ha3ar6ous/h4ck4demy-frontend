import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import {
  Users,
  Target,
  Trophy,
  Gamepad2,
  BarChart3,
  Flame,
  Medal,
  Award,
  Crown,
} from 'lucide-react'
import styles from './Leaderboard.module.css'

const Leaderboard = () => {
  const [players, setPlayers] = useState([]) // holds leaderboard players
  const [timeFrame, setTimeFrame] = useState('all') // filter: all/month/week

  // mock API data - updates players on timeFrame change
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

  // returns special icon for top 3 ranks
  const getRankIcon = (rank) => {
    switch (rank) {
      case 1:
        return <Crown className={styles.iconGold} size={24} />
      case 2:
        return <Award className={styles.iconSilver} size={24} />
      case 3:
        return <Medal className={styles.iconBronze} size={24} />
      default:
        return `#${rank}`
    }
  }

  // adds CSS class for podium colors
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

  // calculates dashboard statistics from players array
  const calculateStats = () => {
    const totalPlayers = players.length
    const averageScore = Math.round(
      players.reduce((sum, p) => sum + p.score, 0) / players.length
    )
    const topScore = players[0]?.score || 0
    const totalGames = players.reduce((sum, p) => sum + p.gamesPlayed, 0)
    const averageGames = Math.round(totalGames / players.length)
    const activeToday = Math.floor(players.length * 0.3) // mock active players today

    return {
      totalPlayers,
      averageScore,
      topScore,
      totalGames,
      averageGames,
      activeToday,
    }
  }

  const stats = calculateStats() // pre-calculate for rendering

  return (
    <div className={styles.leaderboard}>
      <div className={styles.container}>
        {/* Header + time filters */}
        <div className={styles.header}>
          <h1 className={styles.title}>
            <span className={styles.titleAccent}>Leaderboard</span>
          </h1>
          <p className={styles.subtitle}>
            Compete with the top cybersecurity learners and climb to the top
          </p>

          {/* time filter buttons */}
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

        {/* Dashboard Stats */}
        <div className={styles.dashboardStats}>
          {/* Each card shows a calculated stat */}
          <div className={styles.statCard}>
            <div className={styles.statIcon}>
              <Users size={32} />
            </div>
            <div className={styles.statInfo}>
              <h3>Total Players</h3>
              <p className={styles.statValue}>
                {stats.totalPlayers.toLocaleString()}
              </p>
            </div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statIcon}>
              <Target size={32} />
            </div>
            <div className={styles.statInfo}>
              <h3>Average Score</h3>
              <p className={styles.statValue}>{stats.averageScore}</p>
            </div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statIcon}>
              <Trophy size={32} />
            </div>
            <div className={styles.statInfo}>
              <h3>Top Score</h3>
              <p className={styles.statValue}>{stats.topScore}</p>
            </div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statIcon}>
              <Gamepad2 size={32} />
            </div>
            <div className={styles.statInfo}>
              <h3>Games Played</h3>
              <p className={styles.statValue}>
                {stats.totalGames.toLocaleString()}
              </p>
            </div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statIcon}>
              <BarChart3 size={32} />
            </div>
            <div className={styles.statInfo}>
              <h3>Avg Games/Player</h3>
              <p className={styles.statValue}>{stats.averageGames}</p>
            </div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statIcon}>
              <Flame size={32} />
            </div>
            <div className={styles.statInfo}>
              <h3>Active Today</h3>
              <p className={styles.statValue}>{stats.activeToday}</p>
            </div>
          </div>
        </div>

        {/* Top 3 Podium */}
        <div className={styles.podiumSection}>
          <h2 className={styles.sectionTitle}>Top 3 Champions</h2>
          <div className={styles.podium}>
            {players.slice(0, 3).map((player, index) => (
              <div
                key={player.id}
                className={`${styles.podiumPlace} ${getRankClass(index + 1)}`}
              >
                <div className={styles.podiumRank}>
                  {getRankIcon(index + 1)}
                </div>
                <div className={styles.podiumPlayer}>
                  <h3>{player.username}</h3>
                  <p className={styles.podiumScore}>{player.score} pts</p>
                  <span className={styles.podiumGames}>
                    {player.gamesPlayed} games
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Full Rankings Table */}
        <div className={styles.tableSection}>
          <h2 className={styles.sectionTitle}>Complete Rankings</h2>
          <div className={styles.rankingTable}>
            <div className={styles.tableHeader}>
              <div className={styles.rank}>Rank</div>
              <div className={styles.player}>Player</div>
              <div className={styles.score}>Score</div>
              <div className={styles.games}>Games</div>
              <div className={styles.lastPlayed}>Last Active</div>
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
                <div className={styles.games}>
                  <span className={styles.gamesValue}>
                    {player.gamesPlayed}
                  </span>
                </div>
                <div className={styles.lastPlayed}>
                  {new Date(player.lastPlayed).toLocaleDateString('en-IN')}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Action buttons */}
        <div className={styles.actions}>
          <Link to='/login' className={styles.playBtn}>
            <span className={styles.btnText}>Start Playing</span>
            <span className={styles.btnShine}></span>
          </Link>
          <Link to='/learn' className={styles.learnBtn}>
            <span className={styles.btnText}>Learn First</span>
            <span className={styles.btnShine}></span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Leaderboard
