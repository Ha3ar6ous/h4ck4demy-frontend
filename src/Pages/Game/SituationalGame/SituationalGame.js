import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './SituationalGame.module.css'

const SituationalGame = () => {
  const [currentScenario, setCurrentScenario] = useState(0)
  const [score, setScore] = useState(0)
  const [draggedItem, setDraggedItem] = useState(null)
  const [droppedItems, setDroppedItems] = useState({})
  const [gameCompleted, setGameCompleted] = useState(false)
  const [showResult, setShowResult] = useState(false)

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
        { id: 'safe', label: 'Safe Actions', acceptedTypes: ['good'] },
        { id: 'unsafe', label: 'Unsafe Actions', acceptedTypes: ['bad'] },
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
        { id: 'safe', label: 'Safe on Public Wi-Fi', acceptedTypes: ['good'] },
        {
          id: 'unsafe',
          label: 'Avoid on Public Wi-Fi',
          acceptedTypes: ['bad'],
        },
      ],
      points: 30,
    },
  ]

  const handleDragStart = (e, item) => {
    setDraggedItem(item)
  }

  const handleDragOver = (e) => {
    e.preventDefault()
  }

  const handleDrop = (e, zoneId) => {
    e.preventDefault()
    if (draggedItem) {
      setDroppedItems({
        ...droppedItems,
        [draggedItem.id]: zoneId,
      })
      setDraggedItem(null)
    }
  }

  const checkAnswers = () => {
    const scenario = scenarios[currentScenario]
    let correct = 0

    scenario.items.forEach((item) => {
      const droppedZone = droppedItems[item.id]
      const correctZone = scenario.zones.find((zone) =>
        zone.acceptedTypes.includes(item.type)
      )

      if (droppedZone === correctZone.id) {
        correct++
      }
    })

    const earnedPoints = Math.floor(
      (correct / scenario.items.length) * scenario.points
    )
    setScore(score + earnedPoints)
    setShowResult(true)
  }

  const nextScenario = () => {
    if (currentScenario + 1 < scenarios.length) {
      setCurrentScenario(currentScenario + 1)
      setDroppedItems({})
      setShowResult(false)
    } else {
      setGameCompleted(true)
    }
  }

  const restartGame = () => {
    setCurrentScenario(0)
    setScore(0)
    setDroppedItems({})
    setGameCompleted(false)
    setShowResult(false)
  }

  if (gameCompleted) {
    return (
      <div className={styles.situationalGame}>
        <div className={styles.container}>
          <div className={styles.resultCard}>
            <h1 className={styles.title}>Scenarios Complete!</h1>
            <div className={styles.finalScore}>
              <h2>Your Final Score: {score}</h2>
              <p>Scenarios Completed: {scenarios.length}</p>
            </div>
            <div className={styles.actions}>
              <button onClick={restartGame} className={styles.playAgainBtn}>
                Play Again
              </button>
              <Link to='/game' className={styles.backBtn}>
                Back to Games
              </Link>
              <Link to='/leaderboard' className={styles.leaderboardBtn}>
                View Leaderboard
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const currentScenarioData = scenarios[currentScenario]
  const allItemsDropped = currentScenarioData.items.every(
    (item) => droppedItems[item.id]
  )

  return (
    <div className={styles.situationalGame}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>Situational Challenge</h1>
          <div className={styles.progress}>
            <span>
              Scenario {currentScenario + 1} of {scenarios.length}
            </span>
            <span>Score: {score}</span>
          </div>
        </div>

        <div className={styles.scenarioCard}>
          <h2 className={styles.scenarioTitle}>{currentScenarioData.title}</h2>
          <p className={styles.scenarioDescription}>
            {currentScenarioData.description}
          </p>

          <div className={styles.gameArea}>
            <div className={styles.itemsBank}>
              <h3>Drag these items:</h3>
              <div className={styles.items}>
                {currentScenarioData.items.map(
                  (item) =>
                    !droppedItems[item.id] && (
                      <div
                        key={item.id}
                        className={styles.item}
                        draggable
                        onDragStart={(e) => handleDragStart(e, item)}
                      >
                        {item.text}
                      </div>
                    )
                )}
              </div>
            </div>

            <div className={styles.dropZones}>
              {currentScenarioData.zones.map((zone) => (
                <div
                  key={zone.id}
                  className={styles.dropZone}
                  onDragOver={handleDragOver}
                  onDrop={(e) => handleDrop(e, zone.id)}
                >
                  <h4>{zone.label}</h4>
                  <div className={styles.droppedItems}>
                    {currentScenarioData.items
                      .filter((item) => droppedItems[item.id] === zone.id)
                      .map((item) => (
                        <div key={item.id} className={styles.droppedItem}>
                          {item.text}
                        </div>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.actions}>
            {!showResult ? (
              <button
                onClick={checkAnswers}
                disabled={!allItemsDropped}
                className={styles.checkBtn}
              >
                Check Answers
              </button>
            ) : (
              <div className={styles.resultSection}>
                <p className={styles.resultText}>
                  Scenario completed! Points earned this round.
                </p>
                <button onClick={nextScenario} className={styles.nextBtn}>
                  {currentScenario + 1 < scenarios.length
                    ? 'Next Scenario'
                    : 'Finish Game'}
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
