// Import the necessary modules from node:test
import { describe } from 'node:test'
import { Journal } from '../journal/journal-entries'

/**
 * Mocking document.getElementById.
 *
 * @global
 * @function
 * @returns {object} An object with an appendChild function.
 */
global.document.getElementById = function () {
  return {
    /**
     * Appends a child element.
     *
     * @function
     */
    appendChild: function () { }
  }
}

const journal = new Journal()

describe('addNewEntry', () => {
  describe('return value', () => {
    it('passing \'This is a test entry.\' and \'Test Title\' should return { text: \'This is a test entry.\',  timestamp: today\'s date as a string, title: \'Test Title\' }', () => {
      expect(journal.addNewEntry('This is a test entry.', 'Test Title')).toEqual({ text: 'This is a test entry.', title: 'Test Title', timestamp: new Date().toLocaleTimeString(undefined, { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' }) })
    })
  })
})

describe('addNewTimestamp', () => {
  describe('return value', () => {
    it('should return today\'s date in a YYYY-MM-DD HH:mm format', () => {
      expect(journal.addNewTimestamp()).toBe(new Date().toLocaleTimeString(undefined, { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' }))
    })
  })
})

describe('displayTitle', () => {
  describe('return value', () => {
    it('passing \'This is a test title.\' should return \'<h3 class="created-entry-title">This is a test title.</h3>\'', () => {
      expect(journal.displayTitle('This is a test title.')).toBe('<h3 class="created-entry-title">This is a test title.</h3>')
    })
  })
})

describe('displayTimestamp', () => {
  describe('return value', () => {
    it('passing \'2023-11-29 14:04\' should return \'<div class="timestamp">2023-11-29 14:04</div>\'', () => {
      expect(journal.displayTimestamp('2023-11-29 14:04')).toBe('<div class="timestamp">2023-11-29 14:04</div>')
    })
  })
})

describe('deleteEntry', () => {
  describe('return value', () => {
    it('passing the previously added entry should return an empty array', () => {
      const currentEntry = journal.entries[0]
      expect(journal.deleteEntry(currentEntry)).toEqual([])
    })
  })
})

// describe('Journal Class', () => {
//   let myJournal

//   beforeEach(() => {
//     myJournal = new Journal()
//   })

//   test('Add New Entry', () => {
//     const entryText = 'This is a test entry.'
//     const title = 'Test Title'
//     myJournal.addNewEntry(entryText, title)

//     // Perform assertions to check if the entry was added successfully
//     expect(myJournal.entries.length).toBe(1)
//     expect(myJournal.entries[0].title).toBe(title)
//     expect(myJournal.entries[0].text).toBe(entryText)
//     // Add more assertions as needed
//   })

//   test('Delete Entry', () => {
//     // Assuming an entry already exists in the journal
//     const initialEntryCount = myJournal.entries.length
//     const entryToDelete = myJournal.entries[0]
//     myJournal.deleteEntry(entryToDelete)

//     // Perform assertions to check if the entry was deleted successfully
//     expect(myJournal.entries.length).toBe(initialEntryCount - 1)
//     // Add more assertions as needed
//   })

//   // Add more test cases for other methods/functions in the Journal class
// })
