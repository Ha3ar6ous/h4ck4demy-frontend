import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './SituationalGame.module.css'

const SituationalGame = () => {
  // state for current scenario
  const [currentScenario, setCurrentScenario] = useState(0)
  // state for total score
  const [score, setScore] = useState(0)
  // currently dragged item
  const [draggedItem, setDraggedItem] = useState(null)
  // tracks which items are dropped in which zones
  const [droppedItems, setDroppedItems] = useState({})
  // whether all scenarios are completed
  const [gameCompleted, setGameCompleted] = useState(false)
  // whether results of current scenario are shown
  const [showResult, setShowResult] = useState(false)
  // highlights the drop zone being hovered
  const [dragOverZone, setDragOverZone] = useState(null)

  // scenarios data (can be extended or fetched from API)
  const scenarios = [
    {
      title: 'Email Security Scenario',
      description:
        'You received an email claiming to be from your bank. Drag the appropriate actions to the correct zones.',
      items: [
        { id: 1, text: 'Click the link immediately', type: 'bad' },
        { id: 2, text: "Check sender's email address", type: 'good' },
        { id: 3, text: 'Call your bank directly', type: 'good' },
        { id: 4, text: 'Enter your password in the email', type: 'bad' },
      ],
      zones: [
        {
          id: 'safe',
          label: 'Safe Actions',
          acceptedTypes: ['good'],
          color: '#4CAF50',
        },
        {
          id: 'unsafe',
          label: 'Unsafe Actions',
          acceptedTypes: ['bad'],
          color: '#f44336',
        },
      ],
      points: 25,
    },
    {
      title: 'Public Wi-Fi Scenario',
      description:
        "You're at a coffee shop and need to use public Wi-Fi. Organize these actions appropriately.",
      items: [
        { id: 1, text: 'Check online banking', type: 'bad' },
        { id: 2, text: 'Use VPN connection', type: 'good' },
        { id: 3, text: 'Browse general websites', type: 'good' },
        { id: 4, text: 'Enter credit card details', type: 'bad' },
      ],
      zones: [
        {
          id: 'safe',
          label: 'Safe on Public Wi-Fi',
          acceptedTypes: ['good'],
          color: '#4CAF50',
        },
        {
          id: 'unsafe',
          label: 'Avoid on Public Wi-Fi',
          acceptedTypes: ['bad'],
          color: '#f44336',
        },
      ],
      points: 30,
    },
  ]

  // set dragged item when drag starts
  const handleDragStart = (e, item) => setDraggedItem(item)

  // allow dropping
  const handleDragOver = (e) => e.preventDefault()

  // track which drop zone is being hovered
  const handleDragEnter = (e, zoneId) => {
    e.preventDefault()
    setDragOverZone(zoneId)
  }

  const handleDragLeave = (e) => {
    e.preventDefault()
    setDragOverZone(null)
  }

  // handle dropping item into zone
  const handleDrop = (e, zoneId) => {
    e.preventDefault()
    if (draggedItem) {
      setDroppedItems({ ...droppedItems, [draggedItem.id]: zoneId })
      setDraggedItem(null)
    }
    setDragOverZone(null)
  }

  // check user's dropped items and calculate points
  const checkAnswers = () => {
    const scenario = scenarios[currentScenario]
    let correct = 0
    scenario.items.forEach((item) => {
      const droppedZone = droppedItems[item.id]
      const correctZone = scenario.zones.find((zone) =>
        zone.acceptedTypes.includes(item.type)
      )
      if (droppedZone === correctZone.id) correct++
    })
    const earnedPoints = Math.floor(
      (correct / scenario.items.length) * scenario.points
    )
    setScore(score + earnedPoints)
    setShowResult(true)
  }

  // go to next scenario or finish game
  const nextScenario = () => {
    if (currentScenario + 1 < scenarios.length) {
      setCurrentScenario(currentScenario + 1)
      setDroppedItems({})
      setShowResult(false)
    } else {
      setGameCompleted(true)
    }
  }

  // restart game from scratch
  const restartGame = () => {
    setCurrentScenario(0)
    setScore(0)
    setDroppedItems({})
    setGameCompleted(false)
    setShowResult(false)
  }

  // render final score screen if all scenarios completed
  if (gameCompleted) {
    return (
      <div className={styles.situationalGame}>
        <div className={styles.container}>
          <div className={styles.resultCard}>
            <h1 className={styles.title}>
              Scenarios <span className={styles.highlight}>Complete!</span>
            </h1>
            <div className={styles.finalScore}>
              <div className={styles.scoreDisplay}>
                <span className={styles.scoreValue}>{score}</span>
                <span className={styles.scoreLabel}>Final Score</span>
              </div>
              <div className={styles.statsGrid}>
                <div className={styles.statItem}>
                  <span className={styles.statValue}>{scenarios.length}</span>
                  <span className={styles.statLabel}>Scenarios</span>
                </div>
                <div className={styles.statItem}>
                  <span className={styles.statValue}>100%</span>
                  <span className={styles.statLabel}>Complete</span>
                </div>
              </div>
            </div>
            <div className={styles.actions}>
              <button onClick={restartGame} className={styles.playAgainBtn}>
                <span>Play Again</span>
              </button>
              <Link to='/game' className={styles.backBtn}>
                <span>Back to Games</span>
              </Link>
              <Link to='/leaderboard' className={styles.leaderboardBtn}>
                <span>View Leaderboard</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // current scenario data
  const currentScenarioData = scenarios[currentScenario]
  // check if all items have been dropped
  const allItemsDropped = currentScenarioData.items.every(
    (item) => droppedItems[item.id]
  )
  const progressPercentage = ((currentScenario + 1) / scenarios.length) * 100

  return (
    <div className={styles.situationalGame}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>
            Situational <span className={styles.highlight}>Challenge</span>
          </h1>
          {/* progress bar and score */}
          <div className={styles.progress}>
            <div className={styles.progressInfo}>
              <span>
                Scenario {currentScenario + 1} of {scenarios.length}
              </span>
              <span className={styles.score}>Score: {score}</span>
            </div>
            <div className={styles.progressBar}>
              <div
                className={styles.progressFill}
                style={{ width: `${progressPercentage}%` }}
              ></div>
            </div>
          </div>
        </div>

        {/* scenario card with items and drop zones */}
        <div className={styles.scenarioCard}>
          <div className={styles.scenarioHeader}>
            <span className={styles.scenarioNumber}>
              S{currentScenario + 1}
            </span>
            <span className={styles.points}>
              +{currentScenarioData.points} pts max
            </span>
          </div>

          <h2 className={styles.scenarioTitle}>{currentScenarioData.title}</h2>
          <p className={styles.scenarioDescription}>
            {currentScenarioData.description}
          </p>

          <div className={styles.gameArea}>
            {/* draggable items bank */}
            <div className={styles.itemsBank}>
              <h3 className={styles.bankTitle}>
                <span className={styles.dragIcon}>🎯</span> Drag these items
              </h3>
              <div className={styles.items}>
                {currentScenarioData.items.map(
                  (item) =>
                    !droppedItems[item.id] && (
                      <div
                        key={item.id}
                        className={`${styles.item} ${
                          draggedItem?.id === item.id ? styles.dragging : ''
                        }`}
                        draggable
                        onDragStart={(e) => handleDragStart(e, item)}
                      >
                        <span className={styles.dragHandle}>⋮⋮</span>
                        <span className={styles.itemText}>{item.text}</span>
                      </div>
                    )
                )}
              </div>
            </div>

            {/* drop zones */}
            <div className={styles.dropZones}>
              {currentScenarioData.zones.map((zone) => (
                <div
                  key={zone.id}
                  className={`${styles.dropZone} ${
                    dragOverZone === zone.id ? styles.dragOver : ''
                  }`}
                  onDragOver={handleDragOver}
                  onDragEnter={(e) => handleDragEnter(e, zone.id)}
                  onDragLeave={handleDragLeave}
                  onDrop={(e) => handleDrop(e, zone.id)}
                  style={{ '--zone-color': zone.color }}
                >
                  <div className={styles.zoneHeader}>
                    <h4 className={styles.zoneTitle}>{zone.label}</h4>
                    <span className={styles.itemCount}>
                      {
                        currentScenarioData.items.filter(
                          (item) => droppedItems[item.id] === zone.id
                        ).length
                      }
                    </span>
                  </div>
                  <div className={styles.droppedItems}>
                    {currentScenarioData.items
                      .filter((item) => droppedItems[item.id] === zone.id)
                      .map((item) => (
                        <div key={item.id} className={styles.droppedItem}>
                          <span className={styles.checkIcon}>✓</span>
                          {item.text}
                        </div>
                      ))}
                    {currentScenarioData.items.filter(
                      (item) => droppedItems[item.id] === zone.id
                    ).length === 0 && (
                      <div className={styles.emptyZone}>Drop items here</div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* action buttons */}
          <div className={styles.actions}>
            {!showResult ? (
              <button
                onClick={checkAnswers}
                disabled={!allItemsDropped}
                className={styles.checkBtn}
              >
                <span>Check Answers</span>
              </button>
            ) : (
              <div className={styles.resultSection}>
                <p className={styles.resultText}>
                  🎉 Scenario completed! Points earned this round.
                </p>
                <button onClick={nextScenario} className={styles.nextBtn}>
                  <span>
                    {currentScenario + 1 < scenarios.length
                      ? 'Next Scenario'
                      : 'Finish Game'}
                  </span>
                  <svg width='16' height='16' viewBox='0 0 24 24' fill='none'>
                    <path
                      d='M5 12H19M19 12L12 5M19 12L12 19'
                      stroke='currentColor'
                      strokeWidth='2'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </svg>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default SituationalGame
