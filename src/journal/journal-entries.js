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
   */
  addNewEntry (newEntryText, title) {
    const timestamp = this.addNewTimestamp()
    const currentEntry = { title, text: newEntryText, timestamp }

    this.entries.push(currentEntry)
    this.displayEntry(currentEntry)

    localStorage.setItem('journalEntries', JSON.stringify(this.entries))
  }

  /**
   * Displays a journal entry.
   *
   * @param {object} entry - The entry to be displayed.
   */
  displayEntry (entry) {
    const newEntryElement = document.createElement('div')
    newEntryElement.classList.add('entry-item')

    const titledEntry = this.addTitle(entry.title)
    const timestamp = this.addTimestamp(entry.timestamp)

    newEntryElement.innerHTML = `${timestamp}<br>${titledEntry}<br>${entry.text.replace(/\n/g, '<br>')}`

    const statsButton = document.createElement('button')
    statsButton.textContent = 'Stats'
    statsButton.classList.add('stats-button')
    statsButton.addEventListener('click', () => this.showStats(entry.text))

    newEntryElement.appendChild(statsButton)

    const deleteButton = document.createElement('button')
    deleteButton.textContent = 'Delete'
    deleteButton.classList.add('delete-button')
    deleteButton.addEventListener('click', () => this.deleteEntry(entry))

    newEntryElement.appendChild(deleteButton)

    const entryList = document.getElementById('journal-entries')
    entryList.appendChild(newEntryElement)
  }

  /**
   * Adds a title to the entry.
   *
   * @param {string} title - The title to be added.
   * @returns {string} - HTML-formatted title.
   */
  addTitle (title) {
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
    return `<div class="timestamp">${timestamp}</div>`
  }

  /**
   * Adds a timestamp to the entry.
   *
   * @param {string} timestamp - The timestamp to be added.
   * @returns {string} - HTML-formatted timestamp.
   */
  addTimestamp (timestamp) {
    return `<div class="timestamp">${timestamp}</div>`
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
   */
  deleteEntry (entry) {
    const entryIndex = this.entries.indexOf(entry)

    if (entryIndex !== -1) {
      this.entries.splice(entryIndex, 1)

      this.renderEntries()

      localStorage.setItem('journalEntries', JSON.stringify(this.entries))
    }
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
