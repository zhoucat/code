const obj = {
  open: true,
  text: 'zhou'
}

let activeEffect = null
function effect (fn) {
  activeEffect = fn
  fn()
}
const effects = new WeakMap()

const data = new Proxy(obj, {
  get (target, key) {
    let depts = effects.get(target)
    if (!depts) {
      effects.set(target, depts = new Map())
    }
    const dept = depts.get(key)
    console.log({dept, activeEffect})
    if (dept !== activeEffect) {
      console.log('set')
      depts.set(key, activeEffect)
    }
    return target[key]
  },
  set (target, key, newVal) {
    target[key] = newVal
    const depts = effects.get(target)
    depts.get(key)()
  },
})

// function changeFun () {
//   console.log('change')
//   document.body.innerHTML = data.open ? data.text : 'ou'
// }
effect(() => {
  console.log('change')
  document.body.innerHTML = data.open ? data.text : 'ou'
})

setTimeout(() => {
  data.open = false
}, 2000)

setTimeout(() => {
  data.text = 'aaa'
}, 3000)