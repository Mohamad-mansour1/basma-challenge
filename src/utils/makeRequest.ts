import apiConfig from 'config/apiConfig'

const makeRequest = async (
  method: string,
  url: string,
  data?: any,
  token?: string
) => {
  try {
    const response = await apiConfig.request({
      method,
      url,
      data,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })

    return response.data
  } catch (error) {
    throw new Error('Request failed')
  }
}

export default makeRequest
