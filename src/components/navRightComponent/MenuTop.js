 export default function MenuTop({ArrFocusList}){
    const [focusList,setFocusList]=ArrFocusList;

    return <section className='topMenu'>
        <section className='bakmenu'>
        <span onClick={()=>{setFocusList(1)}} className={focusList==1?'focusList':''}>Danh sách phát</span>
        <span onClick={()=>{setFocusList(2)}} className={focusList==2?'focusList':''}>Nghe gần đây</span>
        </section>
        <i className="k12l fa-solid fa-alarm-clock"></i>
        <i className="fa-solid fa-ellipsis"></i>
    </section>
 }
 