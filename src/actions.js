export const CALL_UP = 'CALL_UP'
export const CALL_DOWN = 'CALL_DOWN'
export const HANDLER_POSITION = 'HANDLER_POSITION'

export function callUp(calledLevel) {
  return { type: CALL_UP, calledLevel: calledLevel}
}

export function callDown(calledLevel) {
  return { type: CALL_DOWN, calledLevel: calledLevel }
}

export function handlerPosition(currentLevel) {
  return { type: HANDLER_POSITION, currentLevel:currentLevel}
}
