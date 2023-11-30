import { TextAnalysis } from '../modules/text-analysis-functions.js'

/**
 * Represents a journal with methods to manage entries.
 */
export class Journal {
  /**
   * Creates a new Journal.
   */
  constructor () {
    this.entries = JSON.parse(localStorage.getItem('journalEntries')) || []
  }

  /**
   * Adds a new entry to the journal.
   *
   * @param {string} newEntryText - The text of the new entry.
   * @param {string} title - The title of the new entry.
   * @returns {object} - The new entry for test purposes.
   */
  addNewEntry (newEntryText, title) {
    try {
      this.clearErrorMessage()
      const timestamp = this.addNewTimestamp()
      const currentEntry = { title, text: newEntryText, timestamp }
      this.validateEntry(currentEntry)

      this.entries.push(currentEntry)
      this.displayEntry(currentEntry)

      localStorage.setItem('journalEntries', JSON.stringify(this.entries))
      return currentEntry
    } catch (error) {
      this.handleDisplayEntryError(error)
      throw error // Rethrow other errors for further handling
    }
  }

  /**
   * Displays a journal entry.
   *
   * @param {object} entry - The entry to be displayed.
   */
  displayEntry (entry) {
    this.clearErrorMessage()
    const newEntryElement = document.createElement('div')
    newEntryElement.classList.add('entry-item')

    const titledEntry = this.displayTitle(entry.title)
    const timestamp = this.displayTimestamp(entry.timestamp)

    newEntryElement.innerHTML = `${timestamp}<br>${titledEntry}<br>${entry.text.replace(/\n/g, '<br>')}`

    this.displayStatsButton(newEntryElement, entry)
    this.displayDeleteButton(newEntryElement, entry)

    const entryList = document.getElementById('journal-entries')
    entryList.appendChild(newEntryElement)
  }

  /**
   * Handles errors that occur while displaying an entry.
   *
   * @param {Error} error - The error encountered.
   * @throws {Error} - Rethrows the error after handling it.
   */
  handleDisplayEntryError (error) {
    console.error('Error in addEntry:', error.message)
    const errorMessageElement = document.getElementById('error-message')
    errorMessageElement.innerText = 'Failed to add the entry. Please ensure both title and text are provided.'
  }

  /**
   * Clears the error message displayed in the UI.
   */
  clearErrorMessage () {
    const errorMessageElement = document.getElementById('error-message')
    errorMessageElement.innerHTML = ''
  }

  /**
   * Validates the entry before adding it to the journal.
   *
   * @param {object} entry - The entry to be validated.
   * @throws {Error} - Throws an error if the entry is invalid.
   */
  validateEntry (entry) {
    if (!entry || !entry.timestamp || !entry.title || !entry.text) {
      throw new Error('Title and text are required.')
    }
  }

  /**
   * Add a title to the entry display.
   *
   * @param {string} title - The title to be added.
   * @returns {string} - HTML-formatted title.
   */
  displayTitle (title) {
    return `<h3 class="created-entry-title">${title}</h3>`
  }

  /**
   * Adds a new timestamp for the entry.
   *
   * @returns {string} - HTML-formatted timestamp.
   */
  addNewTimestamp () {
    const timeOptions = { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' }
    const timestamp = new Date().toLocaleTimeString(undefined, timeOptions)
    return timestamp
  }

  /**
   * Adds a timestamp to the entry display.
   *
   * @param {string} timestamp - The timestamp to be added.
   * @returns {string} - HTML-formatted timestamp.
   */
  displayTimestamp (timestamp) {
    return `<div class="timestamp">${timestamp}</div>`
  }

  /**
   * Adds a stats button to the display of the entry to the journal.
   *
   * @param {HTMLElement} newEntryElement - The entry HTML Element to add the button to.
   * @param {object} entry - The entry.
   */
  displayStatsButton (newEntryElement, entry) {
    const statsButton = document.createElement('button')
    statsButton.textContent = 'Stats'
    statsButton.classList.add('stats-button')
    statsButton.addEventListener('click', () => this.showStats(entry.text))
    newEntryElement.appendChild(statsButton)
  }

  /**
   * Adds a delete button to the display of the entry to the journal.
   *
   * @param {HTMLElement} newEntryElement - The entry HTML Element to add the button to.
   * @param {object} entry - The entry.
   */
  displayDeleteButton (newEntryElement, entry) {
    const deleteButton = document.createElement('button')
    deleteButton.textContent = 'Delete'
    deleteButton.classList.add('delete-button')
    deleteButton.addEventListener('click', () => this.deleteEntry(entry))
    newEntryElement.appendChild(deleteButton)
  }

  /**
   * Displays statistics for an entry.
   *
   * @param {string} entryText - The text of the entry.
   */
  showStats (entryText) {
    const textAnalyzer = new TextAnalysis()
    const wordCount = textAnalyzer.countWords(entryText)
    const periodCount = textAnalyzer.countPeriods(entryText)

    alert(`Word Count: ${wordCount}\nPeriod Count: ${periodCount}`)
  }

  /**
   * Deletes an entry from the journal.
   *
   * @param {object} entry - The entry to be deleted.
   * @returns {object[]} - The entry list for test purposes.
   */
  deleteEntry (entry) {
    const entryIndex = this.entries.indexOf(entry)

    if (entryIndex !== -1) {
      this.entries.splice(entryIndex, 1)

      this.renderEntries()

      localStorage.setItem('journalEntries', JSON.stringify(this.entries))
    }

    return this.entries
  }

  /**
   * Renders all entries in the journal.
   */
  renderEntries () {
    const entryList = document.getElementById('journal-entries')
    entryList.innerHTML = ''

    this.entries.forEach(entry => this.displayEntry(entry))
  }
}
