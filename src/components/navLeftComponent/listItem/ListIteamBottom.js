import {Link} from 'react-router-dom'
import {useContext} from'react';
import {SetPath} from '../../NavLeft'

function PostcardLogin(){

    return <div className='cardShow--navLeft'>
      <p className="dangnhapTITLE">Đăng nhập để khám phá playlist dành riêng cho bạn</p>
      <button className='dangnhapButton'>ĐĂNG NHẬP</button>
    </div>
}
function PostcardUpdateVip(){

    return <div className='cardShow--navLeft cardShow--navLeft--update'>
      <p className='TitleUpdate'>Nghe nhạc không quảng cáo cùng kho nhạc VIP</p>
      <button className="titleButton">NÂNG CẤP VIP</button>
    </div>
}
const data2=[
    {icon:'fa-solid fa-music',toPath:'/moi-phat-hanh',title:'nhạc mới'},
    {icon:'fa-solid fa-icons',toPath:'/hub',title:'thể loại'},
    {icon:'fa-thin fa-star',toPath:'top100',title:'top 100'},
    {icon:"fa-thin fa-photo-film-music",toPath:'/the-loai-video/Viet-Nam/IWZ9Z08I.html',title:'mv'},
]
function RenderItem({count,children,currentPath,setCurrentPath}){
    const get=data2[count];
    const {toPath,icon}=get;

    return <Link onClick={e=>{
       
        setCurrentPath(toPath) }} className={'LinkListIteam '+(currentPath==toPath?
        'LinkListIteam--focus':'')} to={toPath}><i className={icon}></i>
    <span>{children}</span></Link>
}

function ListIteamBottom({setSeperate}){
    const [currentPath,setCurrentPath]=useContext(SetPath);

   function handelScroll(e){
        if(e.target.scrollTop<=10){
            setSeperate(0);

        }
        else{
            setSeperate(1);

        }
    }

    return <div onScroll={handelScroll}  className="listBottomRoute">

     {data2.map((element,index)=>{
        return <RenderItem currentPath={currentPath}
        setCurrentPath={setCurrentPath}
        key={index} count={index} >{element.title}</RenderItem>
    })}
    <PostcardLogin/>
    <PostcardUpdateVip/>
    
    </div>
}
export default ListIteamBottom;

