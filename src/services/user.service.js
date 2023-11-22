function makeUserService() {
  const baseURL = '/api'
  const headers = {
    'Content-Type': 'application/json'
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

  return {
    login,
    signup
  }
}
export default makeUserService()
