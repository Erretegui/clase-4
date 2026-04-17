export const fetchData = async ()=> {
        try{
        const URL = "https://jsonplaceholder.typicode.com/users"
        const resultado = await fetch(URL)
        const dataFinal = await resultado.json()
        console.log(dataFinal)
        return dataFinal

    }catch(error){
        console.log(error)
    }

}
