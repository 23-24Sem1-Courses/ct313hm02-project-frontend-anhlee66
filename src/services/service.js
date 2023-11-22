function makeService() {
  const baseURL = '/api'
  const headers = {
    'Content-Type': 'application/json'
  }

  async function getDocById(id) {
    let url = `${baseURL}/doc/${id}`
    return await fetch(url).then((res) => res.json())
  }

  async function login(user) {
    let url = `${baseURL}/login`
    const options = {
      method: 'POST',
      headers,
      body: JSON.stringify(user)
    }
    const res = await fetch(url, options)
    console.log(res)
    return res
  }

  async function signup(user) {
    // console.log(user)
    let url = `${baseURL}/signup`
    const res = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(user)
    })
    return res
  }

  // async function checkLogin(){
  //   let url = `${baseURL}/`
  // }

  return {
    getDocById,
    login,
    signup
  }
}
export default makeService()
