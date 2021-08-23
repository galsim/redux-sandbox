import {
    INC_ACTION,
    DEC_ACTION,
    RND_ACTION
  } from './const'

export const inc = () => ({type: INC_ACTION})
export const dec = () => ({type: DEC_ACTION})
export const rnd = () => {
  const rendomValue = Math.floor(Math.random() * 10)
  
  return {
    type: RND_ACTION, 
    payload: rendomValue
  }
}