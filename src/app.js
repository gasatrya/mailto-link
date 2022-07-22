import './app.css'

// Sets up variables
const btn = document.getElementById('generate')

function generateLink() {
  const to = document.getElementById('to').value

  const email = {
    cc: document.getElementById('cc').value,
    bcc: document.getElementById('bcc').value,
    subject: document.getElementById('subject').value,
    body: document.getElementById('body').value,
  }
  let output = `mailto:${to}`

  if (!to) {
    alert('To field is empty!')
    document.getElementById('to').focus()
    return
  }

  const emailKeys = Object.keys(email)
  const remaining = emailKeys.filter(key => email[key].trim().length > 0)
  remaining.length > 0 ? (output += '?') : ''
  output += remaining.map(key => `${key}=${encodeURI(email[key].trim())}`).join('&')

  document.getElementById('link').value = output
}

btn.addEventListener('click', generateLink)
