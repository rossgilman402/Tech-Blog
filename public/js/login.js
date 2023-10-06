const loginFormHandler = async (event) => {
  event.preventDefault()
  console.log('LOGIN FORM')

  const email = document.querySelector('#email-login').value.trim()
  const password = document.querySelector('#password-login').value.trim()

  if (email && password) {
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    })

    if (response.ok) {
      document.location.replace('/')
    } else {
      alert('Failed to log in')
    }
  }
}

const signupFormHandler = async (event) => {
  event.preventDefault()

  const name = document.querySelector('#name-signup').value.trim()
  const email = document.querySelector('#email-signup').value.trim()
  const password = document.querySelector('#password-signup').value.trim()

  if (name && email && password) {
    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({ name, email, password }),
      headers: { 'Content-Type': 'application/json' },
    })

    if (response.ok) {
      document.location.replace('/')
    } else {
      alert('Failed to sign up.')
    }
  }
}

const dashboard = async (event) => {
  event.preventDefault()
}

document.querySelector('#form-submit').addEventListener('submit', loginFormHandler)

document.querySelector('#form-signup').addEventListener('submit', signupFormHandler)
