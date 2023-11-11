const companies = [
    {name: 'Samsung', marketValue: 50, CEO:'Kim Hyun Suk', foundedOn: 1938},
    {name: 'Microsoft', marketValue: 415, CEO:'Satya Nadella', foundedOn: 1975},
    {name: 'Intal', marketValue: 117, CEO:'Brian Krzanich', foundedOn: 1968},
    {name: 'Facebook', marketValue: 383, CEO:'Mark Zuckerberg', foundedOn: 2004},
    {name: 'Spotify', marketValue: 30, CEO:'Daniel Ek', foundedOn: 2006},
    {name: 'Apple', marketValue: 845, CEO:'Tim Cook', foundedOn: 1976},
]

const add10PercentMarketValue = company => {
    company.marketValue = company.marketValue + company.marketValue / 10
    return company
}

const oldCompany = company => company.foundedOn < 2000

const allOldCompaniesMarketValue = (acc, current) => acc + current.marketValue

const myBestCompany = companies.map(add10PercentMarketValue).filter(oldCompany).reduce(allOldCompaniesMarketValue,0)

console.log(myBestCompany)