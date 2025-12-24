let sub:number | string = '1M'

let apiRequestStatus: 'pending' | 'success' | 'error' = 'pending'

let airlineSeat: 'aile' | 'window' | 'middle' = 'middle'

const orders = ['12', '28', '30']
let currentOrder: string | undefined

for (let order of orders) {
    if (order === '28') {
        currentOrder = order
    }
}

console.log(currentOrder)