# Express GraphQL React application
## Initialisation
`npm install`
`npm run dev`

React client: localhost:8001/
GraphQL API: localhost:8001/graphql

## GraphQL API
Example request:  
```
{
  getEarthquakes(title: "title") {
    type
    metadata {
      generated
      url
      title
      api
      count
      status
    }
    bbox
    features {
      type
      properties {
        mag
        place
        time
        updated
        tz
        url
        detail
        felt
        cdi
        mmi
        alert
        status
        tsunami
        sig
        net
        code
        ids
        sources
        types
        nst
        gap
        magType
        type
      }
      geometry {
        type
        coordinates
      }
      id
    }
  }
}
```
