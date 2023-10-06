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
