import axios from "axios"

export const getTopAnime = (callback) => {
     axios.get("https://api.jikan.moe/v4/top/anime").then(
      (response) => {
        const data = response.data.data;
          callback(data)
      }
    ).catch((error) => {
        console.log(error)
        callback(error)
    })
}