/**
 * Contains the journal entries and functions to add new entries.
 *
 * @author Cornelia Eskilsson
 * @version 1.0.0
 */

const entries = JSON.parse(localStorage.getItem('journalEntries')) || []

/**
 * Adds a new entry to the journal.
 *
 * @param {string} newEntryText The text of the new entry.
 */
const addNewEntry = (newEntryText) => {
  const newEntryElement = document.createElement('div')
  newEntryElement.classList.add('entry-item')
  newEntryElement.innerHTML = newEntryText.replace(/\n/g, '<br>')

  const entryList = document.getElementById('journal-entries')
  entryList.appendChild(newEntryElement)
}

export { entries, addNewEntry }
