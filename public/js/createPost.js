const showCreate = async (event) => {
  event.preventDefault()

  const showCreate = document.querySelector('#create-form')
  const hideCreateBtn = document.querySelector('#create-post')

  showCreate.style.display = 'block'
  hideCreateBtn.style.display = 'none'
}

const createPost = async (event) => {
  event.preventDefault()

  const title = document.querySelector('#create-title').value.trim()
  const comment = document.querySelector('#create-content').value.trim()
  const newDate = new Date()
  const date = newDate.getMonth() + '/' + newDate.getDay() + '/' + newDate.getFullYear()

  const response = await fetch('/api/blogPost/', {
    method: 'POST',
    body: JSON.stringify({
      title,
      comment,
      date,
    }),
    headers: { 'Content-Type': 'application/json' },
  })

  if (response.ok) {
    document.location.replace(`/dashboard`)
  } else {
    alert('Failed to Create New Post')
    console.log(response)
  }
}

document.querySelector('#create-post').addEventListener('click', showCreate)
document.querySelector('#create-btn').addEventListener('click', createPost)
