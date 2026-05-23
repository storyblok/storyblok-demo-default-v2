import { products } from '~~/server/utils/products'

export default defineEventHandler((event) => {
  const id = Number.parseInt(getRouterParam(event, 'id') as string)
  const product = products.find((p) => p.id === id)
  if (!product) {
    setResponseStatus(event, 404)
    return { error: 'Product not found' }
  }
  return product
})
