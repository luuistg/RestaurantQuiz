export const restaurantNames = [
  'Local de Ensayo',
  'Alborada',
  'Torombolo',
  'Bodguita',
] as const

export type Restaurant = typeof restaurantNames[number]