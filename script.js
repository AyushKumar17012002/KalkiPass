const charano = 16;
const form = document.getElementById('pgenfrom')
const passdisplay = document.getElementById('passdp')


const upc = gencode(65, 90)
const lpc = gencode(97, 122)
const nc = gencode(48, 57)
const sc = gencode(33, 47).concat(
    gencode(58, 64)
).concat(
    gencode(91, 96)
).concat(
    gencode(123, 126)
)


form.addEventListener('submit', e => {
    e.preventDefault()

    const password = generatePassword(charano)
    passdp.innerText = password

    navigator.clipboard.writeText(passdp.innerText);

  })
function generatePassword(charano) {
    let asciicodes = lpc
    asciicodes = asciicodes.concat(upc)
    asciicodes = asciicodes.concat(sc)
    asciicodes = asciicodes.concat(nc)
    const arrpass = []
    for (let i = 0; i < charano; i++) {
        const chcode = asciicodes[Math.floor(Math.random() * asciicodes.length)]
        arrpass.push(String.fromCharCode(chcode))
  }
  return arrpass.join('')
  
 
}


function gencode(n1,n2) {
    const array = []
    for (let i = n1; i <= n2; i++) {
      array.push(i);
    }
    return array
  }