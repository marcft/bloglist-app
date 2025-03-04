const info = (...params) => {
  if (process.env.NODE_ENV === 'test') return
  if (
    params[0] &&
    typeof params[0] === 'string' &&
    (params[0].includes('GET /health 200') ||
      params[0].includes('GET /health 304'))
  )
    return

  console.log(...params)
}

const error = (...params) => {
  if (process.env.NODE_ENV !== 'test') {
    console.error(...params)
  }
}

module.exports = {
  info,
  error,
}
