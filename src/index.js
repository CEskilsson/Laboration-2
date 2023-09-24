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
const averageWordLengthButton = document.getElementById('average-word-length-button')
const averageWordLengthDisplay = document.getElementById('average-word-lenght-display')
const wordFrequencyButton = document.getElementById('word-frequency-button');
const wordFrequencyDisplay = document.getElementById('word-frequency')

wordCountButton.addEventListener('click', () => {
  const textInput = document.getElementById('text-input').value
  const wordCount = countWords(textInput)
  wordCountDisplay.innerHTML = wordCount
})

periodCountButton.addEventListener('click', () => {
  const textInput = document.getElementById('text-input').value
  const periodCount = countPeriods(textInput)
  periodCountDisplay.innerHTML = periodCount
  
})

averageWordLengthButton.addEventListener('click', () => {
  const textInput = document.getElementById('text-input').value
  const averageLength = calculateAverageWordLength(textInput)
  averageWordLengthDisplay.innerHTML = averageLength
  
})

wordFrequencyButton.addEventListener('click', () => {
  const textInput = document.getElementById('text-input').value
  const wordMap = wordFrequency(textInput)

  // Clear previous content
  wordFrequencyDisplay.innerHTML = ''

  // Display word frequency results
  for (const word in wordMap) {
    const wordElement = document.createElement('p')
    wordElement.textContent = `${word}: ${wordMap[word]}`
    wordFrequencyDisplay.appendChild(wordElement)
  }
})

function countWords(text) {
  const words = text.split(/\s+/).filter(word => word.length > 0)
  return words.length
}

function countPeriods (text) {
  return (text.match(/\./g) || []).length
}

function calculateAverageWordLength(text) {
  const words = text.split(/\s+/).filter(word => word.length > 0);
  const totalCharacters = words.reduce((total, word) => total + word.length, 0);
  const averageWordLength = totalCharacters / words.length || 0;
  return averageWordLength.toFixed(2);
}

function wordFrequency(text) {
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