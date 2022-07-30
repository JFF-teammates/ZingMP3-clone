$(function()
{
	var bgArtworkUrl;
	var albumName = $('.wrap_title h1');
	var trackName = $('.wrap_title p');
	var albumArt = $('.music_info img'),
		playPauseButton = $(".wrap_icon .pause"),
		buffInterval = null;
    var codenutplay = `<path d="M413.974,71.026C368.171,25.225,307.274,0,242.5,0S116.829,25.225,71.026,71.026C25.225,116.829,0,177.726,0,242.5   s25.225,125.671,71.026,171.474C116.829,459.775,177.726,485,242.5,485s125.671-25.225,171.474-71.026   C459.775,368.171,485,307.274,485,242.5S459.775,116.829,413.974,71.026z M242.5,455C125.327,455,30,359.673,30,242.5   S125.327,30,242.5,30S455,125.327,455,242.5S359.673,455,242.5,455z"/>
    <path xmlns="http://www.w3.org/2000/svg" d="M217.6,115.2c-7.066,0-12.8,5.734-12.8,12.8v256c0,7.066,5.734,12.8,12.8,12.8c7.066,0,12.8-5.734,12.8-12.8V128    C230.4,120.934,224.666,115.2,217.6,115.2z"/>
    <path xmlns="http://www.w3.org/2000/svg" d="M294.4,115.2c-7.066,0-12.8,5.734-12.8,12.8v256c0,7.066,5.734,12.8,12.8,12.8s12.8-5.734,12.8-12.8V128    C307.2,120.934,301.466,115.2,294.4,115.2z"/>`;
    var codenutpause=`<path d="M413.974,71.026C368.171,25.225,307.274,0,242.5,0S116.829,25.225,71.026,71.026C25.225,116.829,0,177.726,0,242.5   s25.225,125.671,71.026,171.474C116.829,459.775,177.726,485,242.5,485s125.671-25.225,171.474-71.026   C459.775,368.171,485,307.274,485,242.5S459.775,116.829,413.974,71.026z M242.5,455C125.327,455,30,359.673,30,242.5   S125.327,30,242.5,30S455,125.327,455,242.5S359.673,455,242.5,455z"/>
    <polygon points="181.062,336.575 343.938,242.5 181.062,148.425"/>`;
    
	var playPreviousTrackButton = $('.step_backward'), playNextTrackButton = $('.step_forward'), currIndex = -1;
	
	var songs = [{ //nầy để sau có backend rùi load nhạc vào nì
		artist: "Nguyễn Anh Tuấn",
		name: "Cưới nhau nha (Cover)",
		url: "nhac.mp3",
		picture: "https://raw.githubusercontent.com/himalayasingh/music-player-1/master/img/_1.jpg"
	},{
		artist: "Ai kệ người ta",
		name: "bài gì đóa (Cover)",
		url: "nhac_2.mp3",
		picture: "https://yt3.ggpht.com/9DTziUXmosxUCZUqErlwiIBfPOCcDSm6sU1scc7rkCWUJW7kvu6rTjOx5SiR3Ze4E2V0oE4OCg=s900-c-k-c0x00ffffff-no-rj"
	}];
	
	function shuffle(a) { //cái này là để xáo nhạc :3
		var j, x, i;
		for (i = a.length - 1; i > 0; i--) {
			j = Math.floor(Math.random() * (i + 1));
			x = a[i];
			a[i] = a[j];
			a[j] = x;
		}
		return a;
	}
	songs = shuffle(songs); //thực hiện xáo


    function playPause() //sự kiện nhấn nút pause hoặc play
    {
        setTimeout(function()
        {
            if(audio.paused)
            {
                
                playPauseButton.html(codenutplay);
                audio.play();
            }
            else
            {
                clearInterval(buffInterval);
                playPauseButton.html(codenutpause);
                audio.pause();
            }
        },300);
    }
    function selectTrack(flag) //chuyển bài
    {
        if( flag == 0 || flag == 1 )
            ++currIndex;
        else
            --currIndex;

        if( (currIndex > -1) && (currIndex < songs.length) )
        {
            if( flag == 0 )
            playPauseButton.html(codenutpause);
            else
            {
                playPauseButton.html(codenutplay);
            }
			currAlbum = songs[currIndex].name;
            currTrackName = songs[currIndex].artist;
            currArtwork = songs[currIndex].picture;

            audio.src = songs[currIndex].url;
            
            nTime = 0;


            if(flag != 0)
            {
                audio.play();
                clearInterval(buffInterval);
               
            }

            albumName.text(currAlbum);
            trackName.text(currTrackName);
            albumArt.attr('src',currArtwork);
            $('#album-art img').prop('src', bgArtworkUrl);
            var sdhc = $('.subbar_for_playing+.bottom span:first-child');        
            sdhc.html(`0:0`); 
        }
        else
        {
            if( flag == 0 || flag == 1 )
                --currIndex;
            else
                ++currIndex;
        }
    }

    function initPlayer() //bắt đàu play
	{	
        audio = new Audio();
		selectTrack(0);
		audio.loop = false;
		playPauseButton.on('click',playPause);
        playPreviousTrackButton.on('click',function(){ selectTrack(-1);} );
        playNextTrackButton.on('click',function(){ selectTrack(1);});
        clearInterval();
        setInterval(function(){
            var xxx= (audio.currentTime / audio.duration) * 100;
            document.documentElement.style.setProperty('--thoi_luong_nhac', `${xxx}%`);
            
            var sdhc_0 = $('.subbar_for_playing+.bottom input');
            var sdhc = $('.subbar_for_playing+.bottom span:first-child');        
            var sdhc_2 = $('.subbar_for_playing+.bottom span:last-child'); 
            var csp = $('#rangeDuration_speaker_options'); 
            var volumecr = audio.volume;
            csp.attr('value', volumecr * 100);
            var vpt = volumecr*100;
            document.documentElement.style.setProperty('--am_luong', `${vpt}%`);
            var c=audio.currentTime;
            var d=audio.duration;
            sdhc.html(`${Math.round(c/60)}:${Math.round(c%60)}`);
            sdhc_2.html(`${Math.round(d/60)}:${Math.round(d%60)}`);            
        }, 1000
        );
	}
    
	initPlayer();
});
