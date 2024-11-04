import axios from 'axios'
const baseUrl = '/api/locations'

const getLocations = async () => {
  const resp = await axios.get(baseUrl)
  return resp.data
}

export default { getLocations }
