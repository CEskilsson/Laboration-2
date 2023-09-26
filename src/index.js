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
const generateWordCloudButton = document.getElementById('generate-word-cloud-button')
const generateWordCloudDispaly = document.getElementById('word-cloud-container')

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

averageWordLengthButton.addEventListener('click', () => {
  const textInput = document.getElementById('text-input-element').value
  const averageLength = calculateAverageWordLength(textInput)
  averageWordLengthDisplay.innerHTML = averageLength

})

wordFrequencyButton.addEventListener('click', () => {
  const textInput = document.getElementById('text-input-element').value
  const wordMap = wordFrequency(textInput)

  sortWordFrequency(wordMap)
})

generateWordCloudButton.addEventListener('click', () => {
  const textInput = document.getElementById('text-input-element').value
  generateWordCloudDispaly.innerHTML = ''
  createWordCloud(textInput)
})

function countWords(text) {
  const words = text.split(/\s+/).filter(word => word.length > 0)
  return words.length
}

function countPeriods(text) {
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

function sortWordFrequency(wordMap) {
  // Clear previous content
  wordFrequencyDisplay.innerHTML = ''

  let row = ''
  let count = 0

  for (const word in wordMap) {
    if (count >= 5) {
      wordFrequencyDisplay.innerHTML += `<p>${row}</p>`
      row = ''
      count = 0
    }

    row += `${word}: ${wordMap[word]}, `
    count++
  }
  if (row !== '') {
    wordFrequencyDisplay.innerHTML += `<p>${row}</p>`
  }
}

function createWordCloud(text) {
  const wordMap = wordFrequency(text)

  const cloudContainer = document.getElementById('word-cloud-container')
  cloudContainer.innerHTML = '' // Clear previous content

  for (const word in wordMap) {
    const wordElement = document.createElement('span')
    wordElement.textContent = word
    wordElement.className = `word freq-${wordMap[word]}`

    const left = Math.random() * (cloudContainer.clientWidth - 100)
    const top = Math.random() * (cloudContainer.clientHeight - 20)
    wordElement.style.left = `${left}px`
    wordElement.style.top = `${top}px`

    cloudContainer.appendChild(wordElement)
  }

}