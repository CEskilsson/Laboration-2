document.addEventListener('DOMContentLoaded', () => {
  const entryForm = document.getElementById('add-entry-form')
  const entryTextArea = document.getElementById('entry-text')
  const journalEntriesSection = document.getElementById('journal-entries')

  // Retrieve entries from local storage on page load
  const entries = JSON.parse(localStorage.getItem('journalEntries')) || []

  /**
   * Displays the journal entries on the page.
   *
   * @function
   * @returns {void}
   */
  const displayEntries = () => {
    journalEntriesSection.innerHTML = '' // Clear previous entries

    entries.forEach((entry) => {
      const entryDiv = document.createElement('div')
      entryDiv.textContent = entry
      journalEntriesSection.appendChild(entryDiv)
    })
  }

  // Display existing entries on page load
  displayEntries()
  displayEntries()

  // Handle form submission
  entryForm.addEventListener('submit', event => {
    event.preventDefault() // Prevent form submission

    const newEntry = entryTextArea.value.trim() // Get the new entry text
    if (newEntry !== '') {
      entries.push(newEntry) // Add new entry to the array
      localStorage.setItem('journalEntries', JSON.stringify(entries)) // Save entries to local storage

      displayEntries() // Update the displayed entries
      entryTextArea.value = '' // Clear the textarea
    }
  })
})
