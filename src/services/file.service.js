// import axios from 'axios'
import store from '@/store/store'
function makeFileService() {
  const baseURL = '/api'
  // eslint-disable-next-line no-unused-vars
  const headers = {
    'Content-Type': 'application/json'
  }

  async function getFileById(id) {
    let url = `${baseURL}/file/${id}`
    return await fetch(url).then((res) => res.json())
  }

  async function uploadFile(file) {
    let url = `${baseURL}/file/upload`
    let formData = new FormData()

    const title = file.title
    const description = 'none'
    const user = store.state.user
    const courseID = file.courseID

    formData.append('file', file.fileUpload)
    formData.append('title', title)
    formData.append('description', description)
    formData.append('user', user)
    formData.append('courseID', courseID)
    // const headers = {
    //   'Content-Type': 'multipart/form-data'
    // }

    return await fetch(url, { method: 'POST', body: formData })
      .then((res) => res.json())
      .catch((err) => console.log(err))
  }

  async function getFiles(page, search, limit = 4) {
    const url = `${baseURL}/file/?page=${page}&limit=${limit}&search=${search}`
    return await fetch(url).then((res) => res.json())
  }

  async function getFileByEmail(email) {
    const url = `${baseURL}/file/?email=${email}`
    return await fetch(url).then((res) => res.json())
  }

  return {
    getFileById,
    getFiles,
    uploadFile,
    getFileByEmail
  }
}
export default makeFileService()
