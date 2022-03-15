import { axios } from 'lib'

export const createPortfolio = (body) => axios.post('/portfolios', body)
export const getPortfolio = async (id) => {
  const res = await axios.get('/portfolios/' + id)
  return res.data
}
export const getPortfolios = async () => {
  const res = await axios.get('/portfolios')
  return res.data
}
export const updatePortfolio = async (id, body) => axios.put('/portfolios/' + id, body)
export const deletePortfolio = async (id) => axios.delete('/portfolios/' + id)
