/**
 * Contains the journal entries and functions to add new entries.
 *
 * @author Cornelia Eskilsson
 * @version 1.0.0
 */

/**
 * Represents a journal containing entries and methods to manage them.
 *
 * @class
 */
export class Journal {
  /**
   * Initializes a new Journal instance.
   */
  constructor () {
    this.entries = JSON.parse(localStorage.getItem('journalEntries')) || []
  }

  /**
   * Adds a new entry to the journal.
   *
   * @param {string} newEntryText The text of the new entry.
   * @param {string} title The title of the entry.
   */
  addNewEntry (newEntryText, title) {
    this.displayEntry(newEntryText, title)
    // Add the new entry to the entries array
    this.entries.push({ title, text: newEntryText })

    // Update local storage with the updated entries
    localStorage.setItem('journalEntries', JSON.stringify(this.entries))
  }

  /**
   * Displays an entry on the journal.
   *
   * @param {string} newEntryText The text of the new entry.
   * @param {string} title The title of the entry.
   */
  displayEntry (newEntryText, title) {
    const newEntryElement = document.createElement('div')
    newEntryElement.classList.add('entry-item')
    newEntryElement.innerHTML = this.addTitle(title)
    newEntryElement.innerHTML += newEntryText.replace(/\n/g, '<br>')

    const entryList = document.getElementById('journal-entries')
    entryList.appendChild(newEntryElement)
  }

  /**
   * Adds a title to an entry.
   *
   * @param {string} title The title of the entry.
   * @returns {string} The formatted entry with the title.
   */
  addTitle (title) {
    return `<h2>${title}</h2>`
  }
}
