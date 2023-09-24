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