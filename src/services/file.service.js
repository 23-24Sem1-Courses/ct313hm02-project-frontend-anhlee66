// import axios from 'axios'
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
    formData.append('file', file)
    // const headers = {
    //   'Content-Type': 'multipart/form-data'
    // }

    return await fetch(url, { method: 'POST', body: formData })
      .then((res) => res.json())
      .catch((err) => console.log(err))
  }

  async function getFiles() {
    const url = `${baseURL}/file`
    return await fetch(url).then((res) => res.json())
  }

  return {
    getFileById,
    getFiles,
    uploadFile
  }
}
export default makeFileService()
