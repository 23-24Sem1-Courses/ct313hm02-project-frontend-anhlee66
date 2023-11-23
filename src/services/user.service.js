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
  async function getUserInfo(user) {
    let url = `${baseURL}/user?email=${user}`
    return await fetch(url)
  }
  async function updateUser(user) {
    let url = `${baseURL}/user/${user.userID}`
    const res = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(user)
    })
    // console.log(res)
    return res.json()
  }

  return {
    login,
    signup,
    getUserInfo,
    updateUser
  }
}
export default makeUserService()
