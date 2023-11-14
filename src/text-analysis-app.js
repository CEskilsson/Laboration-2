/**
 * Text Analysis Module
 *
 * @author Cornelia Eskilsson
 * @version 1.0.0
 */

import { TextAnalysis } from './modules/text-analysis-functions.js'

const textAnalyzer = new TextAnalysis()

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
  const wordFrequencyDisplay = document.getElementById('word-frequency')
  const generateWordCloudButton = document.getElementById('generate-word-cloud-button')
  const generateWordCloudDisplay = document.getElementById('word-cloud-container')
  const generateWordFrequencyDisplay = document.getElementById('word-frequency-container')
  const letterInput = document.getElementById('letter-input')
  const countLetterButton = document.getElementById('count-letter-button')
  const letterCountDisplay = document.getElementById('letter-count-display')

  wordCountButton.addEventListener('click', () => {
    const textInput = document.getElementById('text-input-element').value
    const wordCount = textAnalyzer.countWords(textInput)
    wordCountDisplay.innerHTML = wordCount
  })

  periodCountButton.addEventListener('click', () => {
    const textInput = document.getElementById('text-input-element').value
    const periodCount = textAnalyzer.countPeriods(textInput)
    periodCountDisplay.innerHTML = periodCount
  })

  minimumWordLengthButton.addEventListener('click', () => {
    const textInput = document.getElementById('text-input-element').value
    const minimumLength = textAnalyzer.calculateMinimumWordLength(textInput)
    minimumWordLengthDisplay.innerHTML = minimumLength
  })

  maximumWordLengthButton.addEventListener('click', () => {
    const textInput = document.getElementById('text-input-element').value
    const maximumLength = textAnalyzer.calculateMaximumWordLength(textInput)
    maximumWordLengthDisplay.innerHTML = maximumLength
  })

  averageWordLengthButton.addEventListener('click', () => {
    const textInput = document.getElementById('text-input-element').value
    const averageLength = textAnalyzer.calculateAverageWordLength(textInput)
    averageWordLengthDisplay.innerHTML = averageLength
  })

  wordFrequencyButton.addEventListener('click', () => {
    const textInput = document.getElementById('text-input-element').value
    const wordMap = textAnalyzer.wordFrequency(textInput)

    let row = ''
    let count = 0

    const sortedWordArray = textAnalyzer.sortWordFrequency(wordMap)

    for (const word of sortedWordArray) {
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
    generateWordFrequencyDisplay.style.display = 'inline-block'
  })

  generateWordCloudButton.addEventListener('click', () => {
    const textInput = document.getElementById('text-input-element').value
    generateWordCloudDisplay.style.display = 'inline-block'
    textAnalyzer.createWordCloud(textInput, generateWordCloudDisplay)
  })

  countLetterButton.addEventListener('click', () => {
    const textInput = document.getElementById('text-input-element').value
    const letterToCount = letterInput.value.toLowerCase()
    const letterCount = textAnalyzer.countLetter(textInput, letterToCount)
    letterCountDisplay.innerHTML = letterCount
  })
})
