export const CALL_UP = 'CALL_UP'
export const CALL_DOWN = 'CALL_DOWN'

export function callUp(calledLevel) {
  return { type: CALL_UP, calledLevel: calledLevel}
}

export function callDown(calledLevel) {
  return { type: CALL_DOWN, calledLevel: calledLevel }
}
