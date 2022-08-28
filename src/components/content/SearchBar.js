import {useState,useReducer} from "react";


export default function SearchBar(props) {
    const[value,setValue]=useState('');//controll input
   
const[state,dispatch]=useReducer(reducer,{type:'other',payload:''})
    return (
        <div className="search-bar">
     <div className="search-bar_left">
                {/* chứa thanh điều hướng và input */}
<section className="search-bar_left_navigate">
<i className="fa-solid fa-arrow-left"></i>
<i className=" fa-solid fa-arrow-right"></i>

</section>

<section className={"search-bar_left_backgroundInput" + (state=='focus'?' focusTrue':'')}>
<i className="fa-solid fa-magnifying-glass"></i>



<input
onBlur={()=>{dispatch({type:'other',payload:''})}}
onFocus={()=>{dispatch({type:'focus',payload:''})}}
onChange={(e)=>setValue(e.target.value)} 

type="text"
placeholder="Tìm kiếm bài hát, nghệ sĩ, lời bài hát..."
value={value}
className="search-bar__input"
           
        />




       {value? <i onClick={()=>{setValue('')}} className="fa-solid fa-xmark deleteText"></i>:''}
        <ReusltList />
</section>
        </div>

        {/* searchBarRight */}
        <ListOptionRight reduce={[state,dispatch]}/>
        </div>
    );
}
//path:1
var ListOptionRight=({reduce})=>{
const [state,dispatch]=reduce;
    return <ul className="searchBar-right">
        <li><Title text='Chủ đề'/><i className="fa-solid fa-shirt"></i></li>
        <li><Title text='Nâng cấp VIP'/><i className="fa-solid fa-gem"></i></li>
        <li><Title text='Tải lên'/><i className="fa-solid fa-arrow-up-from-bracket"></i></li>
        <li onClick={()=>{dispatch({type:'setting',payload:''})}}>
            {state!='setting'?<Title text='Cài đặt'/>:''}
        <i className="fa-solid fa-gear"></i>
        {state=='setting'?<Setting dispatch={dispatch}/>:''}
        </li>
        <li><i className="fa-solid fa-user"></i></li>
    
    </ul>
    }
var Title=({text})=>{

    return <p className='titleForOption'>{text}</p>
}
//path:1

//path:2  hiển thị result search
var ReusltList=()=>{
    return <ul className="resultList">
     <h3>Đề xuất cho bạn</h3>
     <a href="#" target="_blank"><i className="fa-solid fa-arrow-trend-up"></i>
 karaoke    </a>
     <a href="#" target="_blank"><i className="fa-solid fa-arrow-trend-up"></i>
XONE Radio     </a>
     <a href="#" target="_blank"><i className="fa-solid fa-arrow-trend-up"></i>
  Podcast   </a>
     <a href="#" target="_blank"><i className="fa-solid fa-arrow-trend-up"></i>
 #zingchart    </a>
     <a href="#" target="_blank"><i className="fa-solid fa-arrow-trend-up"></i>
  zing choce   </a>
     <a href="#" target="_blank"><i className="fa-solid fa-arrow-trend-up"></i>
   workout  </a>
     
    </ul>
}
//path:2

//path3: reducer
var reducer=(state,action)=>{
const {type,payload}=action;
switch (type) {
    case 'focus':
        
        return 'focus';
    case 'setting':
        return 'setting'
    default:
        return type;
}
}


//path3: 

//path4:setting
var Setting=({dispatch})=>{

    return <ul className='setting'>
   <li><i className="fa-solid fa-ban"></i>Danh sách chặn</li>
   <li><i className="fa-solid fa-arrow-up-right-dots"></i>Chất lượng nhạc <i className="fa-solid fa-angle-right"></i>
   <Chatluongnhac/>
   </li>
   <li><i className="fa-solid fa-table-cells-large"></i>Giao diện <i className="fa-solid fa-angle-right"></i>
   <GiaoDien/>
   </li>
<div className='setting--path'></div>
   <li className="setting-path2"><i className="fa-solid fa-circle-info"></i> Giới thiệu</li>
   <li className="setting-path2"><i className="fa-solid fa-flag"></i>Góp ý</li>
   <li className="setting-path2"><i className="fa-solid fa-phone"></i>Liên hệ </li>
   <li className="setting-path2"><i className="fa-brands fa-adversal"></i>Quảng cáo</li>
   <li className="setting-path2"><i className="fa-solid fa-file-circle-check"></i>Thoả thuận sử dụng</li>
   <li className="setting-path2"><i className="fa-regular fa-address-book"></i>Chính sách bảo mật</li>
   <span
    onClick={(e)=>{e.stopPropagation();
    dispatch({type:'other',payload:''})}} className="overlay_outMenu"></span>
    </ul>
}
// 'chất lượng nhạc option'
var Chatluongnhac=()=>{

    return <div className="chooseMuiscQuality">
        <section>
        <h3>SQ<i className="fa-solid fa-circle"></i>128</h3>
        <p>Giảm sử dụng dữ liệu cho các kết nối chậm hơn</p>
        <i className="fa-solid fa-check"></i>
        </section>
        <section>
        <h3>HQ<i className="fa-solid fa-circle"></i>320</h3>
        <p>Kết hợp tốt nhâst giữa việc sử dụng dữ liệu và chất lượng âm thanh</p>
        {/* <i className="fa-solid fa-check"></i> */}
        
        </section>
    </div>
}
//path4:
// path:5 'giao diện option'

var GiaoDien=()=>{

    return <div className="chooseOptionLayout">
        <section>Luôn phát nhạc toàn màn hình <ButtonSwitch /></section>
        <section>Hiệu ứng <ButtonSwitch /></section>

    </div>
}

//button
var ButtonSwitch=()=>{
    const [check,setCheck]=useState(0);

    return <span 
    onClick={()=>{setCheck(!check)}}
    className={"background-switch "+(check?'background-switch--on':'')}>
        <div className="dath-switch"></div>
    </span>
}


// path:5 


