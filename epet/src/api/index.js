import ajax from './ajax'
import fetch from './fetch'

export const requesthome = () => ajax('/api/main/home');
export const requestLeftData = () => ajax('/api/categoryLeftData');

export const getcaptchas = () => fetch('/v1/captchas', {}, 'POST');

/**
 * 账号密码登录
 */
export const accountLogin = (username, password, captcha_code) => fetch('/v2/login', {
  username,
  password,
  captcha_code
}, 'POST');

/**
 * 获取短信验证码
 */
export const sendMobileCode = phone => ajax('/test/sendcode', {phone});

/**
 * 手机号登录
 */
export const phoneLogin = (phone, code) => ajax('/test/login', {phone, code}, 'POST');
