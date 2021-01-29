import counterReducer from './counterReducer'
import deepFreeze from 'deep-freeze'

describe('counterReducer', () => {
  const initialState = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  test('when called with undefined state should return a proper initial state', () => {
    const state = {}
    const action = { type: '' }
    const newState = counterReducer(undefined, action)
    expect(newState).toEqual(initialState)
  })

  test('GOOD increments good', () => {
    const action = { type: 'GOOD' }
    const state = initialState

    // this ensures that the reducer does not change the state given as a parameter directly,  i.e. not modifying objects/arrays directly
    deepFreeze(state) 

    const firstState = counterReducer(state, action) // increment once
    expect(firstState.good).toBe(1)

    const secondState = counterReducer(firstState, action) // increment twice
    expect(secondState).toEqual({
      good: 2,
      neutral: 0,
      bad: 0
    })
  })

  test('NEUTRAL increments neutral', () => {
    const action = { type: 'NEUTRAL' }
    const state = initialState
    deepFreeze(state)
    const firstState = counterReducer(state, action)
    expect(firstState.neutral).toBe(1)

    const secondState = counterReducer(firstState, action)
    expect(secondState).toEqual({
      good: 0,
      neutral: 2,
      bad: 0
    })
  })

  test('BAD increments bad', () => {
    const action = { type: 'BAD' }
    const state = initialState
    deepFreeze(state)
    const firstState = counterReducer(state, action)
    expect(firstState.bad).toBe(1)

    const secondState = counterReducer(firstState, action)
    expect(secondState).toEqual({
      good: 0,
      neutral: 0,
      bad: 2
    })
  })

  test('RESET sets all to zero', () => {
    const action = { type: 'RESET' }
    const state = {
      good: 1,
      neutral: 2,
      bad: 3
    }

    deepFreeze(state)
    const newState = counterReducer(state, action)
    expect(newState).toEqual(initialState)
  })
})