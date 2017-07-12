export default function search (text, config) {
  return new Promise((resolve, reject) => {
    // https://github.com/audreyt/moedict-webkit#4-國語-a
    fetch(`https://www.moedict.tw/a/${text}.json`)
      .then(res => res.json())
      .then(data => {
        if (!data) { return reject('no result') }
        data.h.forEach(h => {
          if (h['=']) {
            h['='] = `https://203146b5091e8f0aafda-15d41c68795720c6e932125f5ace0c70.ssl.cf1.rackcdn.com/${h['=']}.ogg`
          }
        })
        return resolve(data)
      })
      .catch(reject)
  })
}
