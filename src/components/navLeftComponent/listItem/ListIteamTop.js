import { useContext } from 'react';
import {Link} from 'react-router-dom'
import {SetPath} from '../../NavLeft'
const data=[
    {icon:'fa-solid fa-user-music',toPath:"ca-nhan",title:'cá nhân'},
    {icon:'fa-solid fa-circle-dashed',toPath:"/",title:"khám phá"},
    {icon:'fa-solid fa-wave-square',toPath:"zingchart",title:'#zingchart'},
    {icon:'fa-solid fa-boombox ',toPath:"radio",title:'radio'},
    {icon:'fa-solid fa-head-side-headphones',toPath:"theo-doi",title:'theo dõi'},

]

function RenderItem({count,children,currentPath,setCurrentPath}){

    const get=data[count];
    const {toPath,icon}=get;

    return <Link onClick={e=>{
        setCurrentPath(toPath)}} className={'LinkListIteam '+(currentPath==toPath?
        'LinkListIteam--focus':'')} to={toPath}><i className={icon}></i>
    <span>{children}</span></Link>
}
function ListIteamTop(){
const [currentPath,setCurrentPath]=useContext(SetPath);

return data.map((element,index)=>{
    return <RenderItem currentPath={currentPath}
    setCurrentPath={setCurrentPath}
     count={index} key={index}>{element.title}</RenderItem>
})
}
export default ListIteamTop;