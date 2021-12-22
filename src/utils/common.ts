export const chunkArray = (perChunk: number, inputArray: Array<any>) => {
  const result = inputArray.reduce((resultArray, item, index) => { 
    const chunkIndex = Math.floor(index/perChunk)
    if(!resultArray[chunkIndex]) {
      resultArray[chunkIndex] = [] // start a new chunk
    }
    resultArray[chunkIndex].push(item)

    return resultArray
  }, [])
  return result
}

export const addhttp = (url: string) => {
  if (url.indexOf("http://") == 0 || url.indexOf("https://") == 0) {
    return url
  }
  return `http://${url}`;
}