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

  const textAnalyzer = new TextAnalysis()
  const journal = new Journal()

  journal.renderEntries()

  entryForm.addEventListener('submit', (event) => {
    event.preventDefault()
    const newEntry = entryTextArea.value.trim()
    const newTitle = entryTitleArea.value.trim()
    journal.addNewEntry(newEntry, newTitle)
    entryTextArea.value = ''
    entryTitleArea.value = ''
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

  entryTextArea.addEventListener('input', displayWordCount)
})
