import React from "react";

export default function PlayingBar(props) {
    return (
             <div className="playing_bar">

{/* <!-- music_info --> */}
<div className="music_info">
    <img src={"https://yt3.ggpht.com/9DTziUXmosxUCZUqErlwiIBfPOCcDSm6sU1scc7rkCWUJW7kvu6rTjOx5SiR3Ze4E2V0oE4OCg=s900-c-k-c0x00ffffff-no-rj"} alt="Avt Singer" />
    <div className="wrap_title">
        <h1>Music Title</h1>
        <p>Artists 1</p>
    </div>
</div>

{/* <!-- add_to_library --> */}
<div className="add_to_library">
    <div className="wrap_icon">
        <div className="icon_title_panel heart">Thêm vào thư viện</div>
        <svg className="icon icon_add_to_library heart" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 217.408 217.408">
            <path d="M194.078,22.682c-10.747-8.193-22.606-12.348-35.248-12.348c-15.951,0-33.181,6.808-50.126,19.754  C91.759,17.142,74.529,10.334,58.578,10.334c-12.642,0-24.501,4.155-35.248,12.348C7.606,34.671-0.24,49.8,0.006,67.648  c0.846,61.117,100.093,133.233,104.317,136.273l4.381,3.153l4.381-3.153c4.225-3.04,103.472-75.156,104.317-136.273  C217.648,49.8,209.802,34.671,194.078,22.682z M153.833,149.017c-18.374,18.48-36.915,33.188-45.129,39.453  c-8.214-6.265-26.755-20.972-45.129-39.453c-31.479-31.661-48.274-59.873-48.57-81.585c-0.178-13.013,5.521-23.749,17.421-32.822  c8.073-6.156,16.872-9.277,26.152-9.277c17.563,0,34.338,10.936,45.317,20.11l4.809,4.018l4.809-4.018  c10.979-9.174,27.754-20.11,45.317-20.11c9.28,0,18.079,3.121,26.152,9.277c11.9,9.073,17.599,19.809,17.421,32.822  C202.107,89.145,185.311,117.356,153.833,149.017z"/>
        </svg>
    </div>
    <div className="wrap_icon">
        <div className="icon_title_panel see_more">Xem thêm</div>
        <svg className="icon icon_add_to_library see_more" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 210 210">
            <path id="XMLID_28_" d="M25,80C11.215,80,0,91.215,0,105s11.215,25,25,25c13.785,0,25-11.215,25-25S38.785,80,25,80z"/>
            <path id="XMLID_30_" d="M105,80c-13.785,0-25,11.215-25,25s11.215,25,25,25c13.785,0,25-11.215,25-25S118.785,80,105,80z"/>
            <path id="XMLID_71_" d="M185,80c-13.785,0-25,11.215-25,25s11.215,25,25,25c13.785,0,25-11.215,25-25S198.785,80,185,80z"/>
        </svg>
    </div>
</div>

{/* <!-- bar_for_playing --> */}
<div className="bar_for_playing">

    {/* <!-- subbar top --> */}
    <div className="subbar_for_playing top">
        <div className="wrap_icon play_random">
            <div className="icon_title_panel play_random">Phát ngẫu nhiên</div>
            <svg className="icon icon_bar_for_playing play_random" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 230.055 230.055">
                <path d="M199.419,124.497c-3.516-3.515-9.213-3.515-12.729,0c-3.515,3.515-3.515,9.213,0,12.728l12.637,12.636h-8.406  c-8.177,0-16.151-2.871-22.453-8.083l-32.346-26.751l32.345-26.751c6.303-5.212,14.277-8.083,22.454-8.083h8.406L186.69,92.83  c-3.515,3.515-3.515,9.213,0,12.728c1.758,1.757,4.061,2.636,6.364,2.636s4.606-0.879,6.364-2.636l28-28  c3.515-3.515,3.515-9.213,0-12.728l-28-28c-3.516-3.515-9.213-3.515-12.729,0c-3.515,3.515-3.515,9.213,0,12.728l12.637,12.636  h-8.406c-12.354,0-24.403,4.337-33.926,12.211L122,103.348L82.564,70.733c-6.658-5.507-15.084-8.54-23.724-8.54H9  c-4.971,0-9,4.029-9,9s4.029,9,9,9h49.841c4.462,0,8.813,1.566,12.252,4.411l36.786,30.423L71.094,145.45  c-3.439,2.844-7.791,4.411-12.253,4.411H9c-4.971,0-9,4.029-9,9s4.029,9,9,9h49.841c8.64,0,17.065-3.033,23.725-8.54L122,126.707  l34.996,28.943c9.521,7.875,21.57,12.211,33.925,12.211h8.406l-12.637,12.636c-3.515,3.515-3.515,9.213,0,12.728  c1.758,1.757,4.061,2.636,6.364,2.636s4.606-0.879,6.364-2.636l28-28c3.515-3.515,3.515-9.213,0-12.728L199.419,124.497z"/>
            </svg>
        </div>
        <div className="wrap_icon step">
            {/* <!-- <div className="icon_title_panel step_backward">Phát bài trước</div> --> */}
            <svg className="icon icon_bar_for_playing step_backward" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
                <path d="M347.6 528.95l383.2 301.02c14.25 11.2 35.2 1.1 35.2-16.95V210.97c0-18.05-20.95-28.14-35.2-16.94L347.6 495.05a21.53 21.53 0 0 0 0 33.9M330 864h-64a8 8 0 0 1-8-8V168a8 8 0 0 1 8-8h64a8 8 0 0 1 8 8v688a8 8 0 0 1-8 8"/>
            </svg>
        </div>
        <div className="wrap_icon pause">
            <svg className="icon icon_bar_for_playing pause" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 485 485">
                <path d="M413.974,71.026C368.171,25.225,307.274,0,242.5,0S116.829,25.225,71.026,71.026C25.225,116.829,0,177.726,0,242.5   s25.225,125.671,71.026,171.474C116.829,459.775,177.726,485,242.5,485s125.671-25.225,171.474-71.026   C459.775,368.171,485,307.274,485,242.5S459.775,116.829,413.974,71.026z M242.5,455C125.327,455,30,359.673,30,242.5   S125.327,30,242.5,30S455,125.327,455,242.5S359.673,455,242.5,455z"/>
                <polygon points="181.062,336.575 343.938,242.5 181.062,148.425"/>
            </svg>
        </div>
        <div className="wrap_icon step">
            <div className="icon_title_panel step_forward">
                <h1>Phát tiếp theo</h1>
                <div className="wrap_music_info">
                    <img src="https://yt3.ggpht.com/9DTziUXmosxUCZUqErlwiIBfPOCcDSm6sU1scc7rkCWUJW7kvu6rTjOx5SiR3Ze4E2V0oE4OCg=s900-c-k-c0x00ffffff-no-rj" alt="Avt Singer" />
                    <div className="wrap_title">
                        <p>Title Music</p>
                        <p>Artists</p>
                    </div>
                </div>
            </div>
            <svg className="icon icon_bar_for_playing step_forward" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
                <path d="M676.4 528.95L293.2 829.97c-14.25 11.2-35.2 1.1-35.2-16.95V210.97c0-18.05 20.95-28.14 35.2-16.94l383.2 301.02a21.53 21.53 0 0 1 0 33.9M694 864h64a8 8 0 0 0 8-8V168a8 8 0 0 0-8-8h-64a8 8 0 0 0-8 8v688a8 8 0 0 0 8 8"/>
            </svg>
        </div>
        <div className="wrap_icon repeat">
            <div className="icon_title_panel repeat">Bật phát lại tất cả</div>
            <svg className="icon icon_bar_for_playing repeat" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 51.4 51.4">
                <path d="M1.7,25.2c0.553,0,1-0.447,1-1c0-6.065,4.935-11,11-11h24v8.964L51.4,12.2L37.7,2.236V11.2h-24c-7.168,0-13,5.832-13,13   C0.7,24.753,1.147,25.2,1.7,25.2z"/>
                <path d="M49.7,26.2c-0.553,0-1,0.447-1,1c0,6.065-4.935,11-11,11h-24v-8.964L0,39.2l13.7,9.964V40.2h24c7.168,0,13-5.832,13-13   C50.7,26.647,50.253,26.2,49.7,26.2z"/>
            </svg>
        </div>
    </div>

    {/* <!-- subbar bottom --> */}
    <div className="subbar_for_playing bottom">
        <span>00:00</span>
        <input type="range" defaultValue="0" id="range_duration_playingBar" />
        <span>00:00</span>
    </div>
</div>

{/* <!-- options --> */}
<div className="options">
    <div className="wrap_icon mv">
        {/* <!-- <div className="icon_title_panel mv">oke</div> --> */}
        <svg className="icon icon_options mv" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 381.379 381.379">
            <path d="M356.379,27.837H25c-13.785,0-25,11.215-25,25v275.704c0,13.785,11.215,25,25,25h331.379c13.785,0,25-11.215,25-25V52.837  C381.379,39.052,370.164,27.837,356.379,27.837z M298.106,240.017c0,19.495-19.633,37.69-43.889,40.657  c-24.222,2.922-43.854-9.431-43.854-28.926c0-19.506,19.632-37.701,43.854-40.669c16.527-1.967,25.74,3.335,25.74,3.335v-73.954  c0-9.258-10.018-5.935-10.018-5.935l-90.389,28.351c0,0-10.385,3.681-10.385,12.353v92.057c0,19.541-17.793,37.564-42.003,40.979  c-24.256,3.45-43.889-8.534-43.889-28.04c0-19.495,19.633-38.092,43.889-41.508c16.493-2.335,23.9,2.645,23.9,2.645V133.538  c0-12.398,10.018-25.292,22.416-28.846l102.213-31.26c12.399-3.554,22.416,3.635,22.416,16.033V240.017z"/>
        </svg>
    </div>
    <div className="wrap_icon">
        <div className="icon_title_panel micro">Xem lời bài hát</div>
        <svg className="icon icon_options micro" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 94.142 94.142">
            <path d="M89.172,9.259L87.05,7.138l-0.022-0.023l-2.123-2.121c-5.205-5.205-11.756-7.09-16.961-1.887l-3.47,3.471l23.113,23.113    l3.468-3.471C96.26,21.018,94.376,14.463,89.172,9.259z"/>
            <path d="M54.32,16.732c-2.99,2.99-4.252,7.045-3.808,10.941c-2.109,0.574-4.103,1.68-5.759,3.336L9.022,72.395l-0.174,8.328    L0,89.6l4.517,4.52l8.927-8.864l8.325-0.111l41.385-35.73c1.655-1.656,2.762-3.652,3.334-5.76    c3.898,0.445,7.955-0.818,10.942-3.809l6.542-6.541L60.861,10.189L54.32,16.732z"/>
        </svg>
    </div>
    <div className="wrap_icon">
        <div className="icon_title_panel float_screen">Chế độ cửa sổ</div>
        <svg className="icon icon_options float_screen" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 396 396">
            <path d="M390,190.762h-47.635v-48.824c0-4.142-3.357-7.5-7.5-7.5h-16.932V46.346c0-5.523-4.478-10-10-10H10c-5.523,0-10,4.477-10,10  v191.182c0,5.523,4.477,10,10,10h103.467c-1.99,11.434-6.269,30.326-14.881,49.079c-1.422,3.096-1.169,6.703,0.67,9.571  c1.839,2.868,5.011,4.603,8.418,4.603h70.528v26.272c0,4.142,3.357,7.5,7.5,7.5h107.975v9.101c0,3.313,2.687,6,6,6H390  c3.314,0,6-2.687,6-6V196.762C396,193.448,393.314,190.762,390,190.762z M178.202,141.938v85.591H20V56.346h277.934v78.091H185.702  C181.56,134.438,178.202,137.795,178.202,141.938z M293.677,329.553H193.202v-8.709h59.583v0.704c0,4.143,3.357,7.5,7.5,7.5  c4.143,0,7.5-3.357,7.5-7.5v-0.704h25.892V329.553z M293.677,196.762v109.082H193.202V149.438h134.163v41.324h-27.688  C296.363,190.762,293.677,193.448,293.677,196.762z M384,347.654h-78.323v-7.065h33.162v0.597c0,3.314,2.686,6,6,6  c3.313,0,6-2.686,6-6v-0.597H384V347.654z M384,328.588h-78.323V221.827H384V328.588z M384,209.827h-78.323v-7.065H384V209.827z"/>
        </svg>
    </div>
    <div className="wrap_icon speaker_input">
        <div className="wrap_icon speaker">
            {/* <!-- <div className="icon_title_panel speaker">oke</div> --> */}
            <svg className="icon icon_options speaker" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 92 92">
                <path d="M37.7,4.3c-1.5-0.6-3.1-0.3-4.3,0.9L13.7,25H4c-2.2,0-4,1.8-4,4V63c0,2.2,1.8,4,4,4h9.8l19.7,19.8  c0.8,0.8,1.8,1.2,2.8,1.2c0.5,0,0.9-0.1,1.4-0.3c1.5-0.6,2.3-2.1,2.3-3.7V8C40,6.4,39.2,4.9,37.7,4.3z M32,74.3L18.1,60.2  c-0.8-0.8-1.6-1.2-2.7-1.2H8V33h7.4c1.1,0,1.9-0.4,2.7-1.2L32,17.7V74.3z M53.2,62.9c-0.8,0.9-1.9,1.3-3,1.3c-0.9,0-1.9-0.3-2.7-1  c-1.6-1.5-1.8-4-0.3-5.6c10-11.2,1-22,0-23.2c-1.5-1.7-1.3-4.2,0.3-5.6c1.6-1.5,4.2-1.3,5.6,0.3C58.4,34.9,65.2,49.5,53.2,62.9z   M65.3,73.6c-0.8,0.9-1.9,1.3-3,1.3c-0.9,0-1.9-0.3-2.7-1c-1.6-1.5-1.8-4-0.3-5.6c19.7-22.1,0.8-43.7,0-44.6  C57.8,22,58,19.5,59.6,18c1.6-1.5,4.2-1.3,5.7,0.3C65.5,18.6,89.7,46.3,65.3,73.6z M77.9,81.7c-0.8,0.9-1.9,1.3-3,1.3  c-0.9,0-1.9-0.3-2.7-1c-1.6-1.5-1.8-4-0.3-5.6c11.2-12.6,14.7-26.6,10.2-41.5c-3.4-11.4-10.1-19-10.2-19.1c-1.5-1.6-1.3-4.2,0.3-5.6  c1.6-1.5,4.2-1.3,5.7,0.3C78.2,10.7,109.4,46.4,77.9,81.7z"/>
            </svg>
        </div>
        <input type="range" defaultValue="0" id="rangeDuration_speaker_options" />
    </div>
    <div id="cross"></div>
    <div className="wrap_icon">
        {/* <!-- <div className="icon_title_panel list_music">oke</div> --> */}
        <svg className="icon icon_options list_music" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="M48,64h160c17.672,0,32-14.328,32-32c0-17.674-14.328-32-32-32H48C30.328,0,16,14.326,16,32C16,49.672,30.328,64,48,64z"/>
            <path d="M48,160h160c17.672,0,32-14.328,32-32c0-17.674-14.328-32-32-32H48c-17.672,0-32,14.326-32,32   C16,145.672,30.328,160,48,160z"/>
            <path d="M240,224c0-17.674-14.328-32-32-32H48c-17.672,0-32,14.326-32,32c0,17.672,14.328,32,32,32h160   C225.672,256,240,241.672,240,224z"/>
            <path d="M411.328,75.914C393.043,61.805,368,42.477,368,32c0-17.672-14.328-32-32-32s-32,14.328-32,32v293.58   c-10.023-3.549-20.762-5.58-32-5.58c-53.02,0-96,42.98-96,96s42.98,96,96,96s96-42.98,96-96V123.293   c1.414,1.094,2.82,2.203,4.23,3.293c36.105,27.852,59.77,48.078,59.77,74.305c0,40.766-21.684,63.516-22.305,64.164   c-12.672,12.32-12.961,32.578-0.641,45.25c6.273,6.453,14.605,9.695,22.949,9.695c8.035,0,16.082-3.008,22.301-9.055   c4.27-4.148,41.695-42.484,41.695-110.055C496,141.25,449.051,105.023,411.328,75.914z"/>
        </svg>
    </div>
</div>
</div> 

        
    );
}

// <div className="playing-bar h-1/6">
        //     <p>PlayingBar</p>
        // <div className="playing-bar__progress-bar">
        //     <div className="playing-bar__progress-bar-fill" />
        // </div>
        // <div className="playing-bar__time-display">
        //     <div className="playing-bar__time-display-current">0:00</div>
        //     <div className="playing-bar__time-display-separator">/</div>
        //     <div className="playing-bar__time-display-total">0:00</div>
        // </div>
        // </div>