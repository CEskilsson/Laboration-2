import { Journal } from './journal/journal-entries.js'
import { TextAnalysis } from './modules/text-analysis-functions.js'

/**
 * Entry point for the application.
 *
 * @author Cornelia Eskilsson
 * @version 1.0.0
 */

document.addEventListener('DOMContentLoaded', () => {
  const entryForm = document.getElementById('add-entry-form')
  const entryTextArea = document.getElementById('entry-text')
  const entryTitleArea = document.getElementById('entry-title')
  const journalEntriesSection = document.getElementById('journal-entries')
  const wordCountDisplay = document.getElementById('word-count')

  const textAnalyzer = new TextAnalysis()
  const journal = new Journal()

  /**
   * Updates the word count display based on the given text.
   *
   * @param {string} text - The text to be analyzed.
   */
  const updateWordCount = (text) => {
    const wordCount = textAnalyzer.countWords(text)
    wordCountDisplay.textContent = `Word count: ${wordCount}`
  }

  // Event listener for input changes
  entryTextArea.addEventListener('input', (event) => {
    const newText = event.target.value
    updateWordCount(newText)
  })

  /**
   * Displays the entries in the journal.
   */
  const displayEntries = () => {
    journalEntriesSection.innerHTML = '' // Clear previous entries
    journal.entries.forEach((entry) => {
      journal.displayEntry(entry)
    })
  }

  displayEntries()

  entryForm.addEventListener('submit', (event) => {
    event.preventDefault()

    const newEntry = entryTextArea.value.trim()
    const newTitle = entryTitleArea.value.trim()
    if (newEntry !== '') {
      journal.addNewEntry(newEntry, newTitle)
      entryTextArea.value = ''
      entryTitleArea.value = ''
    }
  })

  /**
   * Displays the word count in the text area.
   */
  const displayWordCount = () => {
    const entryText = entryTextArea.value
    const wordCount = textAnalyzer.countWords(entryText)
    const wordCountDisplay = document.getElementById('word-count-display')
    wordCountDisplay.textContent = `Word count: ${wordCount}`
  }

  // Event listener for textarea input
  entryTextArea.addEventListener('input', displayWordCount)
})
