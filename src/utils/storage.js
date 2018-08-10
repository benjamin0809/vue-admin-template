const storage = {}

storage.get = function(name) {
  return JSON.parse(localStorage.getItem(name))
}

storage.set = function(name, val) {
  localStorage.setItem(name, JSON.stringify(val))
}

storage.add = function(name, addVal) {
  const oldVal = storage.get(name)
  const newVal = oldVal.concat(addVal)
  storage.set(name, newVal)
}

export default storage
