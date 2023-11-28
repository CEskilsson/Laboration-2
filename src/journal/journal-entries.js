/**
 *
 */
export class Journal {
  /**
   *
   */
  constructor () {
    this.entries = JSON.parse(localStorage.getItem('journalEntries')) || []
  }

  /**
   *
   * @param newEntryText
   * @param title
   */
  addNewEntry (newEntryText, title) {
    const timestamp = this.addNewTimestamp()

    const currentEntry = { title, text: newEntryText, timestamp }
    
    this.displayEntry(currentEntry)
    // Add the new entry to the entries array with a timestamp
    
    this.entries.push(currentEntry)

    // Update local storage with the updated entries
    localStorage.setItem('journalEntries', JSON.stringify(this.entries))
  }

  /**
   *
   * @param newEntryText
   * @param title
   */
  displayEntry (entry) {
    const newEntryElement = document.createElement('div')
    newEntryElement.classList.add('entry-item')

    const titledEntry = this.addTitle(entry.title) // Get the title
    const timestamp = this.addTimestamp(entry.timestamp) // Get the timestamp

    newEntryElement.innerHTML = `${timestamp}<br>${titledEntry}<br>${entry.text.replace(/\n/g, '<br>')}`

    const entryList = document.getElementById('journal-entries')
    entryList.appendChild(newEntryElement)
  }

  /**
   *
   * @param title
   */
  addTitle (title) {
    return `<h2>${title}</h2>`
  }

  /**
   *
   */
  addNewTimestamp () {
    const timeOptions = { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' } // Options for time formatting
    const timestamp = new Date().toLocaleTimeString(undefined, timeOptions) // Get only the time part
    return `<div class="timestamp">${timestamp}</div>`
  }

  /**
   *
   */
  addTimestamp (timestamp) {
    return `<div class="timestamp">${timestamp}</div>`
  }
}
