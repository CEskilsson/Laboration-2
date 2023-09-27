/**
 * Word Analysis Module
 *
 * @author Cornelia Eskilsson
 * @version 1.0.0
 */

// Add event listeners for buttons or triggers
const wordCountButton = document.getElementById('word-count-button')
const wordCountDisplay = document.getElementById('word-count-display')
const periodCountButton = document.getElementById('period-count-button')
const periodCountDisplay = document.getElementById('period-count-display')
const maximumWordLengthButton = document.getElementById('maximum-word-length-button')
const maximumWordLengthDisplay = document.getElementById('maximum-word-lenght-display')
const minimumWordLengthButton = document.getElementById('minimum-word-length-button')
const minimumWordLengthDisplay = document.getElementById('minimum-word-lenght-display')
const averageWordLengthButton = document.getElementById('average-word-length-button')
const averageWordLengthDisplay = document.getElementById('average-word-lenght-display')
const wordFrequencyButton = document.getElementById('word-frequency-button')
const wordFrequencyDisplay = document.getElementById('word-frequency')
const generateWordCloudButton = document.getElementById('generate-word-cloud-button')
const generateWordCloudDisplay = document.getElementById('word-cloud-container')
const generateWordFrequencyDisplay = document.getElementById('word-frequency-container')
const letterInput = document.getElementById('letter-input')
const countLetterButton = document.getElementById('count-letter-button')
const letterCountDisplay = document.getElementById('letter-count-display')

wordCountButton.addEventListener('click', () => {
  const textInput = document.getElementById('text-input-element').value
  const wordCount = countWords(textInput)
  wordCountDisplay.innerHTML = wordCount
})

periodCountButton.addEventListener('click', () => {
  const textInput = document.getElementById('text-input-element').value
  const periodCount = countPeriods(textInput)
  periodCountDisplay.innerHTML = periodCount
})

minimumWordLengthButton.addEventListener('click', () => {
  const textInput = document.getElementById('text-input-element').value
  const minimumLength = calculateMinimumWordLength(textInput)
  minimumWordLengthDisplay.innerHTML = minimumLength
})

maximumWordLengthButton.addEventListener('click', () => {
  const textInput = document.getElementById('text-input-element').value
  const maximumLength = calculateMaximumWordLength(textInput)
  maximumWordLengthDisplay.innerHTML = maximumLength
})

averageWordLengthButton.addEventListener('click', () => {
  const textInput = document.getElementById('text-input-element').value
  const averageLength = calculateAverageWordLength(textInput)
  averageWordLengthDisplay.innerHTML = averageLength
})

wordFrequencyButton.addEventListener('click', () => {
  const textInput = document.getElementById('text-input-element').value
  const wordMap = wordFrequency(textInput)

  sortWordFrequency(wordMap)
  generateWordFrequencyDisplay.style.display = 'inline-block'
})

generateWordCloudButton.addEventListener('click', () => {
  const textInput = document.getElementById('text-input-element').value
  generateWordCloudDisplay.innerHTML = ''
  generateWordCloudDisplay.style.display = 'inline-block'
  createWordCloud(textInput)
})

countLetterButton.addEventListener('click', () => {
  const textInput = document.getElementById('text-input-element').value
  const letterToCount = letterInput.value.toLowerCase()
  const letterCount = countLetter(textInput, letterToCount)
  letterCountDisplay.innerHTML = letterCount
})

/**
 *
 * @param text
 */
function countWords (text) {
  const words = text.split(/\s+/).filter(word => word.length > 0)
  return words.length
}

/**
 *
 * @param text
 */
function countPeriods (text) {
  return (text.match(/\./g) || []).length
}

/**
 *
 * @param text
 */
function calculateMaximumWordLength (text) {
  const words = text.split(/\s+/)

  let longestLength = 0

  for (const word of words) {
    const cleanedWord = word.replace(/[.,!?;:'"()]/g, '') // Remove any punctuation from the word

    const wordLength = cleanedWord.length

    if (wordLength > longestLength) {
      longestLength = wordLength
    }
  }

  return longestLength
}

/**
 *
 * @param text
 */
function calculateMinimumWordLength (text) {
  const words = text.split(/\s+/)

  let shortestLength = calculateMaximumWordLength(text)

  for (const word of words) {
    const cleanedWord = word.replace(/[.,!?;:'"()]/g, '') // Remove any punctuation from the word
    const wordLength = cleanedWord.length

    if (wordLength < shortestLength) {
      shortestLength = wordLength
    }
  }

  return shortestLength
}

/**
 *
 * @param text
 */
function calculateAverageWordLength (text) {
  const words = text.split(/\s+/).filter(word => word.length > 0)
  const totalCharacters = words.reduce((total, word) => total + word.length, 0)
  const averageWordLength = totalCharacters / words.length || 0
  return averageWordLength.toFixed(2)
}

/**
 *
 * @param text
 */
function wordFrequency (text) {
  const words = text.toLowerCase().split(/\s+/).filter(word => word.length > 0)
  const wordMap = {}

  for (const word of words) {
    if (word in wordMap) {
      wordMap[word] += 1
    } else {
      wordMap[word] = 1
    }
  }
  return wordMap
}

/**
 *
 * @param wordMap
 */
function sortWordFrequency (wordMap) {
  // Clear previous content
  wordFrequencyDisplay.innerHTML = ''

  let row = ''
  let count = 0

  const wordArray = Object.keys(wordMap).map((word) => ({
    word,
    frequency: wordMap[word]
  }))

  wordArray.sort((a, b) => b.frequency - a.frequency)

  for (const word of wordArray) {
    if (count >= 5) {
      wordFrequencyDisplay.innerHTML += `<p>${row}</p>`
      row = ''
      count = 0
    }

    row += `${word.word}: ${word.frequency}, `
    count++
  }
  if (row !== '') {
    wordFrequencyDisplay.innerHTML += `<p>${row}</p>`
  }
}

/**
 *
 * @param text
 */
function createWordCloud (text) {
  const wordMap = wordFrequency(text)

  const cloudContainer = document.getElementById('word-cloud-container')
  cloudContainer.innerHTML = '' // Clear previous content

  let maxFrequency = 1
  const minFrequency = 1
  const maxFontSize = 100
  const centerX = cloudContainer.clientWidth / 2
  const centerY = cloudContainer.clientHeight / 2
  const maxRadius = Math.min(centerX, centerY) + 10// Adjust as needed

  for (const word in wordMap) {
    if (wordMap[word] > maxFrequency) {
      maxFrequency = wordMap[word]
    }
  }

  for (const word in wordMap) {
    const wordElement = document.createElement('span')
    wordElement.textContent = word
    wordElement.className = `word freq-${wordMap[word]}`

    const angle = Math.random() * 2 * Math.PI

    const fontSize = 10 + (wordMap[word] - minFrequency) / (maxFrequency - minFrequency) * (maxFontSize - 10)
    const radius = (maxRadius - (wordMap[word] - minFrequency) / (maxFrequency - minFrequency) * (maxRadius - 10)) * (Math.random() * 0.5 + 0.5)

    const left = centerX + radius * Math.cos(angle)
    const top = centerY + radius * Math.sin(angle)

    wordElement.style.left = `${left}px`
    wordElement.style.top = `${top}px`
    wordElement.style.fontSize = `${fontSize}px`

    cloudContainer.appendChild(wordElement)
  }
}

/**
 *
 * @param text
 * @param letter
 */
function countLetter (text, letter) {
  const letterRegex = new RegExp(letter, 'gi')
  const matches = text.match(letterRegex)
  return matches ? matches.length : 0
}
