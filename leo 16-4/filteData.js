export function filtrarData(data){
    const filtro = data.map(user =>({user: user.name, phone: user.phone,  email: user.email}))
    console.log(filtro)
}
