import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const cryptoApiHeaders = {
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
    'X-RapidAPI-Key': 'f53bbff907msh0d1fb49a845780ap1de7ffjsn731e49bf8963'
}

const baseUrl = "https://coinranking1.p.rapidapi.com"

const createRequest = (url)=>({url, headers:cryptoApiHeaders})
export const cryptoApi = createApi({
    reducerPath: 'cryptoAPI',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder)=>({
        getCryptos: builder.query({
            query:(count)=> createRequest(`/coins?limit=${count}`)
        }),
        getCryptoDetails : builder.query({
            query:(coinId)=> createRequest(`/coin/${coinId}`)
        }),
        getCryptoHistory : builder.query({
            query:({coinId,timePeriod})=> createRequest(`/coin/${coinId}/history/${timePeriod}`)
        })
    })

})

export const{
    useGetCryptosQuery,useGetCryptoDetailsQuery, useGetCryptoHistoryQuery
} = cryptoApi;




// var options = {
//     method: 'GET',
//     url: 'https://coinranking1.p.rapidapi.com/coins',
//     params: {
//       referenceCurrencyUuid: 'yhjMzLPhuIDl',
//       timePeriod: '24h',
//       tiers: '1',
//       orderBy: 'marketCap',
//       orderDirection: 'desc',
//       limit: '50',
//       offset: '0'
//     },
//     headers: {
//      
//     }
//   };
  