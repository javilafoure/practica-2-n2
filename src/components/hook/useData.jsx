import { useEffect, useState } from "react"
import { fetchData } from "../fetchData"

function useData() {

  const [nomPage, setNomPage] = useState('car')
  const [result, setResult] = useState([])



  function getData() {
    const key = 'ebc61b0f5d47d9382ea85cb7012c153c'
    const url = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${key}&tags=${nomPage}&per_page=24&format=json&nojsoncallback=1`

    fetchData(url)
      .then(data => setResult(data.photos.photo))

  }

  useEffect(() => {
    getData()
  }, [nomPage])

  const actPage = (e) => {
    setNomPage(e.target.value)

  }

  return {
    nomPage, result, actPage, getData, setNomPage

  }


}

export default useData
