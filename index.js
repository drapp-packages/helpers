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
  return (value || '').toString().toLowerCase().replace(/[^A-zÀ-ú \']|\\|\]|\[|\^/g, '').replace(/\s\s+/g, ' ').split(' ').reduce((array, word) => {
    if (word.length === 1 || ['di', 'de'].includes(word.toLowerCase())) return [...array, word]
    const part = (word[0] || '').toUpperCase() + word.slice(1)
    return [...array, part]
  }, []).join(' ')
}

module.exports = helpers
