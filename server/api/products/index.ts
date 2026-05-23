import { products } from '~~/server/utils/products'

export default defineEventHandler(() => {
  return products
})
