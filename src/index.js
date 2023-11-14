import { entries, addNewEntry } from './journal/journal-entries.js'
/**
 * Entry point for the application.
 *
 * @author Cornelia Eskilsson
 * @version 1.0.0
 */

document.addEventListener('DOMContentLoaded', () => {
  const entryForm = document.getElementById('add-entry-form')
  const entryTextArea = document.getElementById('entry-text')
  const journalEntriesSection = document.getElementById('journal-entries')

  /**
   * Displays the entries in the journal.
   */
  const displayEntries = () => {
    journalEntriesSection.innerHTML = '' // Clear previous entries
    entries.forEach((entry) => {
      addNewEntry(entry)
    })
  }

  displayEntries()

  entryForm.addEventListener('submit', (event) => {
    event.preventDefault()

    const newEntry = entryTextArea.value.trim()
    if (newEntry !== '') {
      entries.push(newEntry)
      localStorage.setItem('journalEntries', JSON.stringify(entries))
      addNewEntry(newEntry)
      entryTextArea.value = ''
    }
  })
})
