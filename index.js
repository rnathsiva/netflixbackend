const jsonServer=require('json-server')
const cors=require('cors')

const netflixServer=jsonServer.create()

const router=jsonServer.router('data.json')

const middleware=jsonServer.defaults()

netflixServer.use(cors())
netflixServer.use(middleware)
netflixServer.use(router)


const PORT=4001
netflixServer.listen(PORT, ()=>{
    console.log(`netflixServer started at port ${PORT}`);
})