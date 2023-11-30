/**
 * Text analysis module.
 *
 * @author Cornelia Eskilsson
 * @version 1.0.0
 */
export class TextAnalysis {
  /**
   * Counts the number of words in a given block of text.
   *
   * @param {string} text - The input text which words will be counted.
   * @returns {number} - The  total numbers of words in the input text.
   */
  countWords (text) {
    const words = text.split(/\s+/).filter(word => word.length > 0)
    return words.length
  }

  /**
   * Counts the periods in a given block of text.
   *
   * @param {string} text - The input text which periods will be counted.
   * @returns {number} - The amount of periods in the input text.
   */
  countPeriods (text) {
    return (text.match(/\./g) || []).length
  }

  /**
   * Calculates the longest word in a given block of code.
   *
   * @param {string} text - The input text which words will be calculated.
   * @returns {number} - The lenght of the longest word in the input text.
   */
  calculateMaximumWordLength (text) {
    const words = text.split(/\s+/)

    let longestLength = 0

    for (const word of words) {
      const cleanedWord = word.replace(/[.,!?;:'"()]/g, '') // Remove any punctuation from the word

      const wordLength = cleanedWord.length

      if (wordLength > longestLength) {
        longestLength = wordLength
      }
    }

    return longestLength
  }

  /**
   * Calculates the shortest word in a given block of code.
   *
   * @param {string} text - The input text which words will be calculated.
   * @returns {number} - The lenght of the shortest word in the input text.
   */
  calculateMinimumWordLength (text) {
    const words = text.split(/\s+/)

    let shortestLength = this.calculateMaximumWordLength(text)

    for (const word of words) {
      const cleanedWord = word.replace(/[.,!?;:'"()]/g, '') // Remove any punctuation from the word
      const wordLength = cleanedWord.length

      if (wordLength < shortestLength) {
        shortestLength = wordLength
      }
    }

    return shortestLength
  }

  /**
   * Calculates the average word lenght in a given block of code.
   *
   * @param {string} text - The input text which words will be calculated.
   * @returns {number} - The average lenght of the words in the input text.
   */
  calculateAverageWordLength (text) {
    const words = text.replace(/[.,!?;:'"()]/g, '').split(/\s+/).filter(word => word.length > 0)
    const totalCharacters = words.reduce((total, word) => total + word.length, 0)
    const averageWordLength = totalCharacters / words.length || 0
    return averageWordLength
  }

  /**
   * Calculates the frequency of each word in the given text.
   *
   * @param {string} text - The input text to analyze for word frequencies.
   * @returns {object} - An object containing word frequencies, where keys are  * * words and values are the number of times each word appears in the text.
   */
  wordFrequency (text) {
    const words = text.toLowerCase().replace(/[.,!?;:'"()]/g, '').split(/\s+/).filter(word => word.length > 0)
    const wordMap = {}

    for (const word of words) {
      if (word in wordMap) {
        wordMap[word] += 1
      } else {
        wordMap[word] = 1
      }
    }
    return wordMap
  }

  /**
   * Sorts word frequencies in descending order and updates the innerHTML of a given HTML element.
   *
   * @param {object} wordMap - The word frequency map.
   * @returns {Array} - wordMap as an array sorted by frequency.
   */
  sortWordFrequency (wordMap) {
    const wordArray = Object.keys(wordMap).map((word) => ({
      word,
      frequency: wordMap[word]
    }))

    wordArray.sort((a, b) => b.frequency - a.frequency)

    return wordArray
  }

  /**
   * Creates a word cloud of a given block of text and dispalys it in a specified * container.
   *
   * @param {string} text - The input text used to create the word cloud.
   * @param {HTMLElement} cloudContainer - The div element that will be used.
   * @returns {HTMLElement} - Element with the WordCloud in it.
   */
  createWordCloud (text, cloudContainer) {
    const wordMap = this.wordFrequency(text)

    let maxFrequency = 1
    const minFrequency = 1
    const maxFontSize = 100
    const centerX = cloudContainer.clientWidth / 2
    const centerY = cloudContainer.clientHeight / 2
    const maxRadius = Math.min(centerX, centerY) + 10

    for (const word in wordMap) {
      if (wordMap[word] > maxFrequency) {
        maxFrequency = wordMap[word]
      }
    }

    for (const word in wordMap) {
      const wordElement = document.createElement('span')
      wordElement.textContent = word
      wordElement.className = `word freq-${wordMap[word]}`

      const angle = Math.random() * 2 * Math.PI

      const fontSize = 10 + (wordMap[word] - minFrequency) / (maxFrequency - minFrequency) * (maxFontSize - 10)
      const radius = (maxRadius - (wordMap[word] - minFrequency) / (maxFrequency - minFrequency) * (maxRadius - 10)) * (Math.random() * 0.5 + 0.5)

      const left = centerX + radius * Math.cos(angle)
      const top = centerY + radius * Math.sin(angle)

      wordElement.style.left = `${left}px`
      wordElement.style.top = `${top}px`
      wordElement.style.fontSize = `${fontSize}px`

      cloudContainer.appendChild(wordElement)
    }

    return cloudContainer
  }

  /**
   * Count how many times a specified letter was used in a given block of text.
   *
   * @param {string} text - The input text in which to count letter occurrences.
   * @param {string} letter - The specified letter to count in the block of text.
   * @returns {number} The numbr of times the specified letter was used in the text.
   */
  countLetter (text, letter) {
    const letterRegex = new RegExp(letter, 'gi')
    const matches = text.match(letterRegex)
    return matches ? matches.length : 0
  }
}
