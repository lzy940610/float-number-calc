const mul = (a = 0, b = 0) => {
  let c = 0
  const d = a.toString()
  const e = b.toString()
  try {
    c += d.split('.')[1].length
  } catch (f) {}
  try {
    c += e.split('.')[1].length
  } catch (f) {}
  return Number(d.replace('.', '')) * (Number(e.replace('.', '')) / 10 ** c)
}

const add = (a = 0, b = 0) => {
  let c
  let d
  try {
    c = a.toString().split('.')[1].length
  } catch (f) {
    c = 0
  }
  try {
    d = b.toString().split('.')[1].length
  } catch (f) {
    d = 0
  }
  const e = 10 ** Math.max(c, d)
  return (mul(a, e) + mul(b, e)) / e
}

const sub = (a = 0, b = 0) => {
  let c
  let d
  try {
    c = a.toString().split('.')[1].length
  } catch (f) {
    c = 0
  }
  try {
    d = b.toString().split('.')[1].length
  } catch (f) {
    d = 0
  }
  const e = 10 ** Math.max(c, d)
  return (mul(a, e) - mul(b, e)) / e
}

const div = (a = 0, b = 0) => {
  let e = 0
  let f = 0
  try {
    e = a.toString().split('.')[1].length
  } catch (g) {}
  try {
    f = b.toString().split('.')[1].length
  } catch (g) {}
  const c = Number(a.toString().replace('.', ''))
  const d = Number(b.toString().replace('.', ''))
  return mul(c / d, 10 ** (f - e))
}

export default {
  add,
  sub,
  mul,
  div
}
