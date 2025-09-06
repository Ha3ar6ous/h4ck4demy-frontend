import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './MCQGame.module.css'

const MCQGame = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [showResult, setShowResult] = useState(false)
  const [gameCompleted, setGameCompleted] = useState(false)

  const questions = [
    {
      question:
        'What is the most important characteristic of a strong password?',
      options: [
        'It contains your name',
        "It's easy to remember",
        "It's long and contains mixed characters",
        "It's the same for all accounts",
      ],
      correct: 2,
      points: 10,
    },
    {
      question: 'What should you do when you receive a suspicious email?',
      options: [
        'Click all links to verify',
        'Reply with personal information',
        'Delete it immediately or report as spam',
        'Forward it to friends',
      ],
      correct: 2,
      points: 15,
    },
    {
      question: 'Which of these is a safe browsing practice?',
      options: [
        'Clicking on pop-up ads',
        'Downloading software from random websites',
        'Keeping your browser updated',
        'Disabling security warnings',
      ],
      correct: 2,
      points: 10,
    },
  ]

  const handleAnswerSelect = (answerIndex) => {
    setSelectedAnswer(answerIndex)
  }

  const handleSubmitAnswer = () => {
    const isCorrect = selectedAnswer === questions[currentQuestion].correct
    if (isCorrect) {
      setScore(score + questions[currentQuestion].points)
    }
    setShowResult(true)
  }

  const handleNextQuestion = () => {
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedAnswer(null)
      setShowResult(false)
    } else {
      setGameCompleted(true)
    }
  }

  const restartGame = () => {
    setCurrentQuestion(0)
    setScore(0)
    setSelectedAnswer(null)
    setShowResult(false)
    setGameCompleted(false)
  }

  if (gameCompleted) {
    return (
      <div className={styles.mcqGame}>
        <div className={styles.container}>
          <div className={styles.resultCard}>
            <h1 className={styles.title}>
              Challenge <span className={styles.highlight}>Complete!</span>
            </h1>
            <div className={styles.finalScore}>
              <div className={styles.scoreDisplay}>
                <span className={styles.scoreValue}>{score}</span>
                <span className={styles.scoreLabel}>Final Score</span>
              </div>
              <div className={styles.statsGrid}>
                <div className={styles.statItem}>
                  <span className={styles.statValue}>{questions.length}</span>
                  <span className={styles.statLabel}>Questions</span>
                </div>
                <div className={styles.statItem}>
                  <span className={styles.statValue}>
                    {Math.floor(score / 10)}
                  </span>
                  <span className={styles.statLabel}>Correct</span>
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

  const progressPercentage = ((currentQuestion + 1) / questions.length) * 100

  return (
    <div className={styles.mcqGame}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>
            MCQ <span className={styles.highlight}>Challenge</span>
          </h1>
          <div className={styles.progress}>
            <div className={styles.progressInfo}>
              <span>
                Question {currentQuestion + 1} of {questions.length}
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

        <div className={styles.questionCard}>
          <div className={styles.questionHeader}>
            <span className={styles.questionNumber}>
              Q{currentQuestion + 1}
            </span>
            <span className={styles.points}>
              +{questions[currentQuestion].points} pts
            </span>
          </div>

          <h2 className={styles.question}>
            {questions[currentQuestion].question}
          </h2>

          <div className={styles.options}>
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                className={`${styles.option} ${
                  selectedAnswer === index ? styles.selected : ''
                } ${
                  showResult && index === questions[currentQuestion].correct
                    ? styles.correct
                    : ''
                } ${
                  showResult &&
                  selectedAnswer === index &&
                  index !== questions[currentQuestion].correct
                    ? styles.incorrect
                    : ''
                }`}
                onClick={() => handleAnswerSelect(index)}
                disabled={showResult}
              >
                <span className={styles.optionLetter}>
                  {String.fromCharCode(65 + index)}
                </span>
                <span className={styles.optionText}>{option}</span>
              </button>
            ))}
          </div>

          <div className={styles.actions}>
            {!showResult ? (
              <button
                onClick={handleSubmitAnswer}
                disabled={selectedAnswer === null}
                className={styles.submitBtn}
              >
                <span>Submit Answer</span>
              </button>
            ) : (
              <div className={styles.resultSection}>
                <p className={styles.resultText}>
                  {selectedAnswer === questions[currentQuestion].correct
                    ? `🎉 Correct! +${questions[currentQuestion].points} points`
                    : '❌ Incorrect! Try again next time.'}
                </p>
                <button onClick={handleNextQuestion} className={styles.nextBtn}>
                  <span>
                    {currentQuestion + 1 < questions.length
                      ? 'Next Question'
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

export default MCQGame
