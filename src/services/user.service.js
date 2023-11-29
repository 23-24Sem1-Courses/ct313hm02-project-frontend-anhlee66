import store from '@/store/store'

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
    // console.git log(res)
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
  function isAuthenticated() {
    return store.state.user ? true : false
  }
  async function getUserInfo(user) {
    let url = `${baseURL}/user?email=${user}`
    return await fetch(url).then((res) => res.json())
  }

  async function updateUser(user) {
    let url = `${baseURL}/user/${user.userID}`
    const formData = new FormData()
    const fullName = user.fullName
    const birthday = user.birthday
    const organization = user.organization

    console.log(user)
    formData.append('fullName', fullName)
    formData.append('birthday', birthday)
    formData.append('profilePicture', user.profilePicture)
    formData.append('organization', organization)

    return await fetch(url, { method: 'POST', body: formData })
      .then((res) => res.json())
      .catch((err) => console.log(err))
  }

  return {
    login,
    signup,
    getUserInfo,
    updateUser,
    isAuthenticated
  }
}
export default makeUserService()
