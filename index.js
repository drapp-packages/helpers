const helpers = {}

helpers.getEmail = address => {
  let payload = `${address || ''}`.toLowerCase().replace(/\s/gi, '')
  let [username, domain] = payload.split('@')
  if (/^gmail.com/.test(domain)) {
    username = username.replace(/\./gi,'').split('+')[0]
    payload = `${username}@gmail.com`
  }
  return payload
}

helpers.isEmail = string => /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(string)

helpers.getName = value => {
  try {
    const dot = /\s+([A-Za-zÀ-ÖØ-öø-ÿ]{1}\.$)/.test(value)
    return (value || '').toString().replace(/[^A-Za-zÀ-ÖØ-öø-ÿ ]/g, '').replace(/\s\s+/g, ' ').split(' ').reduce((array, word) => {
      if (word.length === 1) return [...array, word.toUpperCase()]
      if (['di', 'de', 'del', 'la'].includes(word.toLowerCase())) return [...array, word]
      const part = (word[0] || '').toUpperCase() + word.slice(1).toLowerCase()
      return [...array, part]
    }, []).join(' ') + (dot ? '.': '')
  } catch {}
  return value
}

module.exports = helpers
