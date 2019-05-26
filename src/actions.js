export const CALL_UP = 'CALL_UP'
export const CALL_DOWN = 'CALL_DOWN'

export function goUp(text) {
  return { type: CALL_UP, text }
}

export function goDown(index) {
  return { type: CALL_DOWN, index }
}

