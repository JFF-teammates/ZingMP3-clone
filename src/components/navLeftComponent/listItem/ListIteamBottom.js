import {Link} from 'react-router-dom'
import {useMemo} from'react'
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
function RenderItem({count,children}){
    const get=data2[count];
    return <Link className='LinkListIteam' to={get.toPath}><i className={get.icon}></i>{children}</Link>
}

function ListIteamBottom({setSeperate}){

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
        return <RenderItem key={index} count={index} >{element.title}</RenderItem>
    })}
    <PostcardLogin/>
    <PostcardUpdateVip/>
    
    </div>
}
export default ListIteamBottom;

