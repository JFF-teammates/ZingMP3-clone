import {Link} from 'react-router-dom'
const data=[
    {icon:'fa-solid fa-user-music',toPath:"ca-nhan",title:'cá nhân'},
    {icon:'fa-solid fa-circle-dashed',toPath:"/",title:"khám phá"},
    {icon:'fa-solid fa-wave-square',toPath:"zingchart",title:'#zingchart'},
    {icon:'fa-solid fa-boombox ',toPath:"radio",title:'radio'},
    {icon:'fa-solid fa-head-side-headphones',toPath:"theo-doi",title:'theo dõi'},

]

function RenderItem({count,children}){
    const get=data[count];
    return <Link className='LinkListIteam' to={get.toPath}><i className={get.icon}></i>
    <span>{children}</span></Link>
}
function ListIteamTop(){
return data.map((element,index)=>{
    return <RenderItem count={index} key={index}>{element.title}</RenderItem>
})
}
export default ListIteamTop;