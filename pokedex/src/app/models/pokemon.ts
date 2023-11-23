export interface pokeResponse {
  data: Pokemon[]
  page: number
  pageSize: number
  count: number
  totalCount: number
}

export interface pokemonSingoloResponse {
  data: Pokemon
}

export interface Pokemon {
  id: string
  name: string
  supertype: string
  subtypes: string[]
  level?: string
  hp: string
  types: string[]
  abilities?: Ability[]
  weaknesses: Weakness[]
  resistances?: Resistance[]
  retreatCost: string[]
  convertedRetreatCost: number
  set: Set
  number: string
  artist: string
  rarity: string
  flavorText?: string
  nationalPokedexNumbers: number[]
  legalities: Legalities2
  images: Images2
  tcgplayer: Tcgplayer
  cardmarket: Cardmarket
  attacks?: Attack[]
  rules?: string[]
  regulationMark?: string
  evolvesFrom?: string
}

export interface Ability {
  name: string
  text: string
  type: string
}

export interface Weakness {
  type: string
  value: string
}

export interface Resistance {
  type: string
  value: string
}

export interface Set {
  id: string
  name: string
  series: string
  printedTotal: number
  total: number
  legalities: Legalities
  ptcgoCode?: string
  releaseDate: string
  updatedAt: string
  images: Images
}

export interface Legalities {
  unlimited: string
  expanded?: string
  standard?: string
}

export interface Images {
  symbol: string
  logo: string
}

export interface Legalities2 {
  unlimited: string
  expanded?: string
  standard?: string
}

export interface Images2 {
  small: string
  large: string
}

export interface Tcgplayer {
  url: string
  updatedAt: string
  prices: Prices
}

export interface Prices {
  "1stEditionHolofoil"?: N1stEditionHolofoil
  unlimitedHolofoil?: UnlimitedHolofoil
  holofoil?: Holofoil
  reverseHolofoil?: ReverseHolofoil
  normal?: Normal
  "1stEdition"?: N1stEdition
  unlimited?: Unlimited
}

export interface N1stEditionHolofoil {
  low: number
  mid: number
  high: number
  market: number
  directLow: number
}

export interface UnlimitedHolofoil {
  low: number
  mid: number
  high: number
  market: number
  directLow: number
}

export interface Holofoil {
  low: number
  mid: number
  high: number
  market: number
  directLow?: number
}

export interface ReverseHolofoil {
  low: number
  mid: number
  high: number
  market: number
  directLow?: number
}

export interface Normal {
  low: number
  mid: number
  high: number
  market: number
  directLow?: number
}

export interface N1stEdition {
  low: number
  mid: number
  high: number
  market: number
  directLow: number
}

export interface Unlimited {
  low: number
  mid: number
  high: number
  market: number
  directLow: number
}

export interface Cardmarket {
  url: string
  updatedAt: string
  prices: Prices2
}

export interface Prices2 {
  averageSellPrice: number
  lowPrice: number
  trendPrice: number
  germanProLow: number
  suggestedPrice: number
  reverseHoloSell: number
  reverseHoloLow: number
  reverseHoloTrend: number
  lowPriceExPlus: number
  avg1: number
  avg7: number
  avg30: number
  reverseHoloAvg1: number
  reverseHoloAvg7: number
  reverseHoloAvg30: number
}

export interface Attack {
  name: string
  cost: string[]
  convertedEnergyCost: number
  damage: string
  text: string
}
