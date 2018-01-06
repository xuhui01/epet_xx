import ajax from './ajax'

export const requesthome = () => ajax('/api/main/home');
export const requestLeftData = () => ajax('/api/categoryLeftData');
