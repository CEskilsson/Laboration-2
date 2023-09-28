/**
 * Tests for the text analysis module.
 *
 * @author Cornelia Eskilsson
 * @version 1.0.0
 */
import { describe } from 'node:test'
import {
  countWords,
  countPeriods,
  calculateMaximumWordLength,
  calculateMinimumWordLength,
  calculateAverageWordLength,
  wordFrequency,
  countLetter
} from '../text-analysis-module.js'

describe('countWords', () => {
  describe('return value', () => {
    it('passing \'This is a test sentence.\' should return 5', () => {
      expect(countWords('This is a test sentence.')).toBe(5)
    })
  })
})

describe('countPeriods', () => {
  describe('return value', () => {
    it('passing \'This is a test sentence.\' should return 1', () => {
      expect(countPeriods('This is a test sentence.')).toBe(1)
    })
  })
})

describe('calculateMaximumWordLength', () => {
  describe('return value', () => {
    it('passing \'This is a test sentence.\' should return 8', () => {
      expect(calculateMaximumWordLength('This is a test sentence.')).toBe(8)
    })
  })
})

describe('calculateMinimumWordLength', () => {
  describe('return value', () => {
    it('passing \'This is a test sentence.\' should return 1', () => {
      expect(calculateMinimumWordLength('This is a test sentence.')).toBe(1)
    })
  })
})

describe('calculateAverageWordLength', () => {
  describe('return value', () => {
    it('passing \'This is a test sentence.\' should return 3.8', () => {
      expect(calculateAverageWordLength('This is a test sentence.')).toBe(3.8)
    })
  })
})

describe('wordFrequency', () => {
  describe('return value', () => {
    it('passing \'This is a test sentence.\' should return { this: 1, is: 1, a: 1, test: 1, sentence: 1 }', () => {
      expect(wordFrequency('This is a test sentence.')).toEqual({ this: 1, is: 1, a: 1, test: 1, sentence: 1 })
    })
  })
})

describe('countLetter', () => {
  describe('return value', () => {
    it('should count the occurrences of "t" in "This is a test sentence."', () => {
      const text = 'This is a test sentence.'
      const letterToCount = 't'
      const result = countLetter(text, letterToCount)
      expect(result).toBe(4)
    })
  })
})
