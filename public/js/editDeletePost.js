//Delete Post Section
const deletePostFormHandler = async (event) => {
  event.preventDefault()
  const id = event.target.dataset.id

  const response = await fetch(`/api/blogPost/${id}`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
  })

  console.log(response)

  if (response.ok) {
    document.location.replace(`/dashboard`)
  } else {
    alert('Failed to delete Post')
  }
}

const deleteButtons = document.querySelectorAll('.delete-buttons')
for (const deleteButton of deleteButtons) {
  deleteButton.addEventListener('click', deletePostFormHandler)
}

//Edit Post Section
let id = 0
const showEdit = async (event) => {
  event.preventDefault()

  id = event.target.dataset.id
  console.log('showEdit: ' + id)
  const editFormEl = document.querySelector(`#edit-form-${id}`)
  editFormEl.style.display = 'block'
}

const editPostHandler = async (event) => {
  event.preventDefault()
  console.log('editPostHandler: ' + id)

  const title = document.querySelector(`#edit-title-${id}`).value.trim()
  console.log(title)

  const comment = document.querySelector(`#edit-content-${id}`).value.trim()

  console.log(comment)

  const response = await fetch(`/api/blogPost/${id}`, {
    method: 'PUT',
    body: JSON.stringify({
      title,
      comment,
    }),
    headers: { 'Content-Type': 'application/json' },
  })

  console.log(response)

  if (response.ok) {
    document.location.replace(`/dashboard`)
  } else {
    alert('Failed to edit Post')
  }
}

const editButtons = document.querySelectorAll('.edit-buttons')
for (const editButton of editButtons) {
  editButton.addEventListener('click', showEdit)
}

const submitEditButtons = document.querySelectorAll('.edit-btn')
for (const submitEdit of submitEditButtons) {
  submitEdit.addEventListener('click', editPostHandler)
}
