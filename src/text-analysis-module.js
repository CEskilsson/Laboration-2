/**
 * Text Analysis Module
 *
 * @author Cornelia Eskilsson
 * @version 1.0.0
 */
export {
  countWords,
  countPeriods,
  calculateMaximumWordLength,
  calculateMinimumWordLength,
  calculateAverageWordLength,
  wordFrequency,
  sortWordFrequency,
  createWordCloud,
  countLetter
}

let wordFrequencyDisplay

// Add event listeners for buttons or triggers
window.addEventListener('DOMContentLoaded', (event) => {
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
  wordFrequencyDisplay = document.getElementById('word-frequency')
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
})

/**
 * Counts the number of words in a given block of text.

 * @param {string} text - The input text which words will be counted.
 * @returns {number} - The  total numbers of words in the input text.
 */
function countWords (text) {
  const words = text.split(/\s+/).filter(word => word.length > 0)
  return words.length
}

/**
 * Counts the periods in a given block of text.
 *
 * @param {string} text - The input text which periods will be counted.
 * @returns {number} - The amount of periods in the input text.
 */
function countPeriods (text) {
  return (text.match(/\./g) || []).length
}

/**
 * Calculates the longest word in a given block of code.
 *
 * @param {string} text - The input text which words will be calculated.
 * @returns {number} - The lenght of the longest word in the input text.
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
 * Calculates the shortest word in a given block of code.
 *
 * @param {string} text - The input text which words will be calculated.
 * @returns {number} - The lenght of the shortest word in the input text.
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
 * Calculates the average word lenght in a given block of code.
 *
 * @param {string} text - The input text which words will be calculated.
 * @returns {number} - The average lenght of the words in the input text.
 */
function calculateAverageWordLength (text) {
  const words = text.replace(/[.,!?;:'"()]/g, '').split(/\s+/).filter(word => word.length > 0)
  const totalCharacters = words.reduce((total, word) => total + word.length, 0)
  const averageWordLength = totalCharacters / words.length || 0
  return averageWordLength
}

/**
 * Calculates the frequency of each word in the given text.
 *
 * @param {string} text - The input text to analyze for word frequencies.
 * @returns {object} - An object containing word frequencies, where keys are  * * words and values are the number of times each word appears in the text.
 */
function wordFrequency (text) {
  const words = text.toLowerCase().replace(/[.,!?;:'"()]/g, '').split(/\s+/).filter(word => word.length > 0)
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
 * Sorts word frequencies in descending order and updates the innerHTML of a given HTML element.
 *
 * @param {object} wordMap - The word frequency map.
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
 * Creates a word cloud of a given block of text and dispalys it in a specified * container.
 *
 * @param {string} text - The input text used to create the word cloud.
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
 * Count how many times a specified letter was used in a given block of text.
 *
 * @param {string} text - The input text in which to count letter occurrences.
 * @param {string} letter - The specified letter to count in the block of text.
 * @returns {number} The numbr of times the specified letter was used in the text.
 */
function countLetter (text, letter) {
  const letterRegex = new RegExp(letter, 'gi')
  const matches = text.match(letterRegex)
  return matches ? matches.length : 0
}
