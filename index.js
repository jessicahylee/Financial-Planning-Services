const getData = () => {
  console.log('getData')
  axios
    .get(
      'https://api.markets.sh/api/v1/u/portfolios?api_token=928932304f80a0ffa5120bb4e95cfbbb',
    )
    .then((result) => {
      console.log(result.data)
    })
}
getData()
