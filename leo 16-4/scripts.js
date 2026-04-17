import {fetchData}  from "./2doscripts.js"
import {filtrarData} from "./filteData.js"

const data = await fetchData()
filtrarData(data)
