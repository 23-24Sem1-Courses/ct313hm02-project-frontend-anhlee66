// import axios from 'axios'
function makeCourseService() {
  const baseURL = '/api'
  // eslint-disable-next-line no-unused-vars
  const headers = {
    'Content-Type': 'application/json'
  }

  async function createCourse(course) {
    let url = `${baseURL}/course`
    return await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(course)
    }).then((res) => res.json())
  }

  async function getAllCourse() {
    let url = `${baseURL}/course`
    return await fetch(url).then((res) => res.json())
  }

  return {
    createCourse,
    getAllCourse
  }
}
export default makeCourseService()
