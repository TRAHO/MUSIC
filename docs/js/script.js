// 곡 정보
let musicInfo = [
	{title: "꽃(FLOWER)", artist: "지수", album: "ME", img:"image/music_꽃.jpg"},
	{title: "Kitsch", artist: "IVE", album: "I've IVE", img: "image/music_kitsch.jpg"},
	{title: "OMG", artist: "NewJeans", album: "NewJeans 'OMG'", img: "image/music_black.jpg"},
	{title: "Ditto", artist: "NewJeans", album: "NewJeans 'OMG'", img: "image/music_black.jpg"},
	{title: "NIGHT DANCER", artist: "imase", album: "POP CUBE", img: "image/music_nightdancer.jpg"},
	{title: "CHRISTIAN", artist: "Zior Park", album: "WHERE DOES SASQUATCH LIVE? Pt. 1", img: "image/music_christian.jpg"},
	{title: "ZERO", artist: "NewJeans", album: "Zero", img: "image/music_zero.jpg"},
	{title: "Hype Boy", artist: "NewJeans", album: "NewJeans 1st EP 'New Jeans'", img: "image/music_whiteblue.jpg"},
	{title: "Teddy Bear", artist: "STACY(스테이씨)", album: "Teddy Bear", img: "image/music_teddybear.jpg"},
	{title: "Suzume(feat. 十明)", artist: "RADWIMPS", album: "Suzume (Motion Picture Soundtrack)", img: "image/music_suzume.jpg"},
	{title: "I Don't Think That I Like Her", artist: "Charlie Puth", album: "CHARLIE", img: "image/music_idontcharlie.jpg"},
	{title: "ANTIFRAGILE", artist: "LE SSERAFIM", album: "UNFORGIVEN", img: "image/music_antifragile.jpg"},
	{title: "KICK BACK", artist: "Kenshi Yonezu", album: "KICK BACK", img: "image/music_kickback.jpg"},
	{title: "Attention", artist: "NewJeans", album: "NewJeans 1st EP 'New Jeans'", img: "image/music_whiteblue.jpg"},
	{title: "봄이야", artist: "경서", album: "봄이야", img: "image/music_봄이야.jpg"},
	{title: "I'm Unhappy", artist: "aespa", album: "MY WORLD - THE 3rd Mini Album", img: "image/music_iamunhappy.jpg"},
	{title: "오르트구름", artist: "윤하(YOUNHA)", album: "END THEORY", img: "image/music_오르트구름.jpg"},
	{title: "심(心)", artist: "DK(디셈버)", album: "심(心)", img: "image/music_심.jpg"},
	{title: "스물다섯, 스물하나", artist: "자우림", album: "Goodbye, grief", img: "image/music_2521.jpg"},
	{title: "Shut Down", artist: "BLACKPINK", album: "BORN PINK", img: "image/music_shutdown.jpg"},
];

//MV 정보
let mvInfo = [
	{title: "CHRISTIAN", artist: "Zior Park", img: "image/MVthumb_CHRISTIAN.jpg"},
	{title: "I AM", artist: "IVE(아이브)", img: "image/MVthumb_IAM.jpg"},
	{title: "추억은 만남보다 이별에 남아", artist: "정동하", img: "image/MVthumb_추만이.jpg"},
	{title: "사랑하지 않아서 그랬어", artist: "임한별", img: "image/MVthumb_사랑하지않아서그랬어.jpg"},
	{title: "떠나보낼 준비해 둘걸 그랬어", artist: "임한별", img: "image/MVthumb_떠나보낼.jpg"},
	{title: "잘가요", artist: "주호", img: "image/MVthumb_잘가요.jpg"},
	{title: "사랑인가 봐", artist: "멜로망스", img: "image/MVthumb_사랑인가봐.jpg"},
];

//artist 정보
let artistInfo = [
	{artist: "마크툽", year: "2011", img: "image/마크툽.jpg"},
	{artist: "아이유", year: "2008", img: "image/아이유.jpg"},
	{artist: "MC THE MAX", year: "2002", img: "image/앰맥.jpg"},
	{artist: "이예준", year: "2014", img: "image/이예준.jpg"},
	{artist: "임한별", year: "2008", img: "image/임한별.jpg"},
	{artist: "태연", year: "2007", img: "image/태연.jpg"},
	{artist: "한동근", year: "2014", img: "image/한동근.jpg"},
];

//albums 정보
let albumsInfo = [
	{title: "I've IVE", artist: "Group - IVE(아이브)", img: "image/album_Ive.jpg"},
	{title: "END THEORY", artist: "Solo - 윤하", img: "image/album_윤하.jpg"},
	{title: "NEXT EPISODE", artist: "Group - AKMU", img: "image/album_악뮤.jpg"},
	{title: "INVITATION", artist: "Solo - 에일리(Ailee)", img: "image/album_에일리.jpg"},
	{title: "한 걸음 : 흔적", artist: "Solo - 전상근", img: "image/album_전상근.jpg"},
];

// intro 영역
function intro() {
	$('.intro .record__inner').click(function(){
		$('.intro').addClass('active');
		$('.intro.active').delay(2000).fadeOut(1000).delay(2000);
		$('.main').css('display','flex').hide().delay(3000).fadeIn(1000);
		$('body').removeClass('hideScroll');
	});
}

// 스크롤 시
$('.contents__pageWrap').on("scroll", function(){
	let scrollTop = $(this).scrollTop();

	if(scrollTop > 0) {
		$('.main__header').addClass('scrolled');
	}
	else {
		$('.main__header').removeClass('scrolled');
	}
});

// headerSearch 영역
function searchBar() {
	$('.header__searchWrap > .search_icon > i').click(function(){
		if($('.header__searchWrap').hasClass('active')){
			$('.header__searchWrap').removeClass('active');
		}
		else {
			$('.header__searchWrap').addClass('active');
		}
	});
}

function searchPageInit() {
	let checkSearchSongs = [];
	$('.searchPage__content--Songs').find('.searchPage__contItem').each(function(i, e){
		let availableMusic = musicInfo.filter(c => !checkSearchSongs.includes(c));
		let randomInit = [Math.floor(Math.random() * availableMusic.length)];
		checkSearchSongs.push(availableMusic[randomInit]);
		$(e).find('.searchPage__musicThumb > img').attr("src", availableMusic[randomInit].img);
		$(e).find('.searchPage__musicTitle .title').text(availableMusic[randomInit].title);
		$(e).find('.searchPage__musicTitle .artist > a').text(availableMusic[randomInit].artist);
	});

	let checkSearchAlbums = [];
	$('.searchPage__content--Albums').find('.searchPage__contItem').each(function(i, e){
		let availableMusic = albumsInfo.filter(c => !checkSearchAlbums.includes(c));
		let randomInit = [Math.floor(Math.random() * availableMusic.length)];
		checkSearchAlbums.push(availableMusic[randomInit]);
		$(e).find('.searchPage__musicThumb > img').attr("src", availableMusic[randomInit].img);
		$(e).find('.searchPage__musicTitle .title > a').text(availableMusic[randomInit].title);
		$(e).find('.searchPage__musicTitle .artist > a').text(availableMusic[randomInit].artist);
	});

	let checkSearchArtists = [];
	$('.searchPage__content--Artist').find('.searchPage__contItem').each(function(i, e){
		let availableMusic = artistInfo.filter(c => !checkSearchArtists.includes(c));
		let randomInit = [Math.floor(Math.random() * availableMusic.length)];
		checkSearchArtists.push(availableMusic[randomInit]);
		$(e).find('.searchPage__musicThumb > img').attr("src", availableMusic[randomInit].img);
		$(e).find('.searchPage__musicTitle .title > a').text(availableMusic[randomInit].artist);
		$(e).find('.searchPage__musicTitle .artist').text(availableMusic[randomInit].year);
	});

	let checkSearch = [];
	$('.header__searchPage .searchPage__content--Other .searchPage__contItemWrap').find('.searchPage__contItem').each(function(i, e){
		let availableMusic = musicInfo.filter(c => !checkSearch.includes(c));
		let randomInit = [Math.floor(Math.random() * availableMusic.length)];
		checkSearch.push(availableMusic[randomInit]);
		$(e).find('.searchPage__musicThumb > img').attr("src", availableMusic[randomInit].img);
		$(e).find('.title').text(availableMusic[randomInit].title);
		$(e).find('.artist').text(availableMusic[randomInit].artist);
		$(e).find('.album').text(availableMusic[randomInit].album);
	});
}

// playlist 영역
function playlistNowScroll(){
	$('.playlist__nowList').on('scroll', function() {
		if ($(this).scrollTop() !== 0) {
			$(this).addClass('scrolled');
		}
		else {
			$(this).removeClass('scrolled');
		}
	});
}

// 곡 정보 nowList 적용
function nowListMusicInfo() {
	$('.playlist__ListItem').each(function(i,e){
		$(e).find(".title").text(musicInfo[i].title);
		$(e).find(".artist").text(musicInfo[i].artist);
	});
}

function playlistplaying() {
	$('.playlist__ListItem').click(function(){
		$(this).siblings().removeClass('playing');
		$(this).addClass('playing');
	});
}

function playlistNavSelected() {
	$('.playlist__listNav > li').click(function(){
		$(this).siblings().removeClass('active');
		$(this).addClass('active');
	});
}

// article 영역
function articleSlider() {
	newAlbums = new Swiper('.article__slideNewAlbums.swiper', {
		slidesPerView: 5,
		slidesPerGroup: 1,
		// spaceBetween: 12,
		loop: true,

		effect: "coverflow",
		centeredSlides: true,
		coverflowEffect: {
			rotate: 0,
			stretch: 0,
			depth: 100,
			scale: 0.9,
			modifier: 1.1,
			slideShadows: false,
		},

		navigation: {
			nextEl: '.newAlbums-btn-next',
			prevEl: '.newAlbums-btn-prev',
		},

		autoplay: {
			delay: 2500,
		},
	});

	recently = new Swiper('.article__secSwiper--recently.swiper', {
		slidesPerView: 6,
		spaceBetween: 10,

		navigation: {
			nextEl: '.recently-btn-next',
			prevEl: '.recently-btn-prev',
		},
	});

	recommend = new Swiper('.article__secSwiper--recommend.swiper', {
		slidesPerView: 6,
		spaceBetween: 10,

		navigation: {
			nextEl: '.recommend-btn-next',
			prevEl: '.recommend-btn-prev',
		},
	});

	popularMV = new Swiper('.article__secSwiper--popularMV.swiper', {
		slidesPerView: 4,
		spaceBetween: 10,

		navigation: {
			nextEl: '.popularMV-btn-next',
			prevEl: '.popularMV-btn-prev',
		},
	});

	popularMV = new Swiper('.article__secSwiper--MIX.swiper', {
		slidesPerView: 6,
		spaceBetween: 10,

		navigation: {
			nextEl: '.MIX-btn-next',
			prevEl: '.MIX-btn-prev',
		},
	});
}

function artistInit() {
	$('.article__popularArtists').find('ul > li').each(function(i, e){
		$(e).find('.article__popularArtistProfile > img').attr("src", artistInfo[i].img);
		$(e).find('.article__popularArtistName').text(artistInfo[i].artist);
	})
}

function PopularGenreBgColor() {
	let colorlist = ['#FF7F50', '#FFA500', '#DEB887', '#FFD700', '#7FFF00', '#00FF7F', '#AFEEEE', '#DA70D6', '#FFB6C1', '#D8BFD8', '#00CED1', '#3CB371', '#F0E68C'];
	let colors = [];

	$('.article__popularGenre > ul').find('li').each(function(i, e) {
		let availableColors = colorlist.filter(c => !colors.includes(c));
		let color = availableColors[Math.floor(Math.random() * availableColors.length)];
		colors.push(color);
		$(e).css('background', color);
	});

	$('.articleList__genresWrap').find('li > a').each(function(i, e) {
		let availableColors = colorlist;
		let color = availableColors[Math.floor(Math.random() * availableColors.length)];
		colors.push(color);
		$(e).css('background', color);
		console.log(color);
	});
}

function newAlbumsInit() {
	$('.article__slideNewAlbums').find('.article__musicAlbum').each(function(i, e){
		$(e).find('.record__outer').css("background-image", "url(" + musicInfo[i].img + ")");
		$(e).find('.record__albumInfo > .title').text(musicInfo[i].title);
		$(e).find('.record__albumInfo > .record__artist').text(musicInfo[i].artist);
	})
}

function dailytopinit(){
	let numCount = 0;
	$('.article__TopListWrap').find('.article__popularDailyTopList').each(function(i, e){
		$('.article__popularDailyTopList').find('.article__popularDailyTopMusic').each(function(i, e) {
			if(numCount < 20){
				$(e).find('.article__DailyTopMusicThumb > img').attr("src", musicInfo[numCount].img);
				$(e).find('.article__DailyTopMusicTitle > .title').text(musicInfo[numCount].title);
				$(e).find('.article__DailyTopMusicTitle > .artist').text(musicInfo[numCount].artist);
				numCount++;
			}
		});
	});
}

function pagelistInit(){
	$('.contents__pageWrap--home').find('.article__secGrid:not(".article__secGrid--popularMV")').each(function(i, e){
		let checkhome = [];
		$(e).find('.article__secSwiper ul > li').each(function(i, e){
			let availableMusic = musicInfo.filter(c => !checkhome.includes(c));
			let randomInit = [Math.floor(Math.random() * availableMusic.length)];
			checkhome.push(availableMusic[randomInit]);
			$(e).find('a > img').attr("src", availableMusic[randomInit].img);
			$(e).find('.title').text(availableMusic[randomInit].title);
			$(e).find('.artist').text(availableMusic[randomInit].artist);
		});
	});

	$('.main__contents').find('.contents__pageWrap').each(function(i, e){
		$(e).find('.articleList__contItem').each(function(i, e) {
			$(e).find('.articleList__musicThumb > img').attr("src", musicInfo[i].img);
			$(e).find('.articleList__musicInfo .title').text(musicInfo[i].title);
			$(e).find('.articleList__musicInfo .artist').text(musicInfo[i].artist);
			$(e).find('.articleList__musicInfo .album').text(musicInfo[i].album);
		});
	});

	$('.contents__pageWrap--artist').find('.articleList__listWrap > .articleList__contItem').each(function(i, e){
		let availableArtist = musicInfo.filter(c => {
			if(c.artist === "NewJeans"){
				return true;
			}
		});
		$(e).find('.articleList__musicThumb > img').attr("src", availableArtist[i].img);
		$(e).find('.articleList__ItemInfo .title').text(availableArtist[i].title);
		$(e).find('.articleList__ItemInfo .artist').text(availableArtist[i].artist);
	});

	let checkgenre = [];
	$('.contents__pageWrap--genre').find('.articleList__genrePopular > ul > li').each(function(i, e){
		let availableMusic = musicInfo.filter(c => !checkgenre.includes(c));
		let randomInit = [Math.floor(Math.random() * availableMusic.length)];
		checkgenre.push(availableMusic[randomInit]);
		$(e).find('a > img').attr("src", availableMusic[randomInit].img);
		$(e).find('.articleList__ItemInfo .title').text(availableMusic[randomInit].title);
		$(e).find('.articleList__ItemInfo .artist').text(availableMusic[randomInit].artist);
	});

	$('.article__secSwiper--popularMV').find('ul > li').each(function(i, e) {
		$(e).find('a > img').attr("src", mvInfo[i].img);
		$(e).find('.title').text(mvInfo[i].title);
		$(e).find('.artist').text(mvInfo[i].artist);
	});

}

// MUSIC controll 영역
function controller() {
	let audio = new Audio('music/JISOO - ‘꽃(FLOWER)’.m4a');
	let saveVolume = audio.volume;

	audio.onloadedmetadata = function() {
		let audioDuration = audio.duration;
		let currTime = audio.currentTime;
		$('.controller__musicProgress > .rangeSlider').attr('max', audioDuration);
		audio.volume = 0.3;
		saveVolume = audio.volume;
	}

	audio.ontimeupdate = function() {
		let audioDuration = audio.duration;
		let currTime = audio.currentTime;
		let mathVal = (currTime / audioDuration*100);
		let rangeSlider = $('.controller__musicProgress > .rangeSlider');
		rangeSlider.prop('value', currTime);
		rangeSlider.css('background', 'linear-gradient(to right, #9180FA 0%, #9180FA '+ mathVal +'%, transparent ' + mathVal + '%, transparent 100%)');
	};

	// musicProgress
	$('.controller__musicProgress > .rangeSlider').on('input', function() {
		audio.currentTime = this.value;		
	});

	// volumeBar	
	$('.controller__soundProgress > .rangeSlider').on('input', function() {

		$(this).css('background', 'linear-gradient(to right, #9180FA 0%, #9180FA '+ this.value * 100 +'%, #bababa ' + this.value * 100 + '%, #bababa 100%)');
		audio.volume = this.value;
		this.value = audio.volume;
		saveVolume = audio.volume;
		if(audio.volume == 0) {
			$('.controller__soundProgress > .optionSound').addClass('mute');
		}
		else {
			$('.controller__soundProgress > .optionSound').removeClass('mute');
		}
	});

	$('.controller__soundProgress > .optionSound').click(function(){
		let soundRange = $('.controller__soundProgress > .rangeSlider');
		if($(this).hasClass('mute')) {
			audio.volume = saveVolume;
			if(audio.volume == 0) {
				saveVolume = saveVolume + 0.3;
				audio.volume = saveVolume;
				soundRange.prop('value', saveVolume);
				soundRange.css('background', 'linear-gradient(to right, #9180FA 0%, #9180FA '+ soundRange.prop('value') * 100 +'%, #bababa ' + soundRange.prop('value') * 100 + '%, #bababa 100%)');
				$(this).removeClass('mute');
			}
			else {
				audio.volume = saveVolume;
				soundRange.prop('value', saveVolume);
				soundRange.css('background', 'linear-gradient(to right, #9180FA 0%, #9180FA '+ soundRange.prop('value') * 100 +'%, #bababa ' + soundRange.prop('value') * 100 + '%, #bababa 100%)');
				$(this).removeClass('mute');
			}
		}
		else {
			saveVolume = audio.volume;
			audio.volume = 0;
			soundRange.prop('value', 0);
			soundRange.css('background', 'linear-gradient(to right, #9180FA 0%, #9180FA '+ soundRange.prop('value') * 100 +'%, #bababa ' + soundRange.prop('value') * 100 + '%, #bababa 100%)');
			$(this).addClass('mute');
		}
	})

	// playControl
	$('.controller__playControlWrap > .play-music').click(function(){
		let currTime = audio.currentTime;
		if($('html').hasClass('playing')) {
			audio.pause();
			currTime = audio.currentTime;
			$('html').removeClass('playing');
		}
		else {
			audio.currentTime = currTime;
			audio.play();
			$('html').addClass('playing');
		}
	});

	$('.playThisMusic').click(function(){
		audio.currentTime = 0;
		audio.play();
		$('html').addClass('playing');

		//선택한 곡 정보 컨트롤러에 갱신
		let titleText = $(this).find(".title").text();
		function isMusic(element) {
			if(element.title === titleText) {
				return true;
			}
		}
		let letsPlay = musicInfo.find(isMusic);
		$('.controller__musicInfo .title').text(letsPlay.title);
		$('.controller__musicInfo .artist').text(letsPlay.artist);
		$('.controller__musicImg > img').attr("src", letsPlay.img);
	})
}

// likebtn
function LikeBtn() {
	$('.Like').click(function(){
		if($(this).hasClass('active')) {
			$(this).removeClass('active');
		}
		else {
			$(this).addClass('active');
		}
		return false;
	});
}

// contentsPage
function contentsPage(){
	$('.openPagePlaylist').click(function(){
		$('.main__contents').find('.active').removeClass('active');
		$('.main__contents .contents__pageWrap--playlist').addClass('active');
		$('.header__back').addClass('visible');
		$('.header__searchWrap').removeClass('active');
		return false;
	});

	$('.openPageGenre').click(function(){
		$('.main__contents').find('.active').removeClass('active');
		$('.main__contents .contents__pageWrap--genre').addClass('active');
		$('.header__back').addClass('visible');
		$('.header__searchWrap').removeClass('active');
		return false;
	});

	$('.openPageArtist').click(function(){
		$('.main__contents').find('.active').removeClass('active');
		$('.main__contents .contents__pageWrap--artist').addClass('active');
		$('.header__back').addClass('visible');
		$('.header__searchWrap').removeClass('active');
		return false;
	});

	$('.openPageAlbum').click(function(){
		$('.main__contents').find('.active').removeClass('active');
		$('.main__contents .contents__pageWrap--album').addClass('active');
		$('.header__back').addClass('visible');
		$('.header__searchWrap').removeClass('active');
		return false;
	});

	$('.header__backItem').click(function(){
		$('.main__contents').find('.active').removeClass('active');
		$('.contents__pageWrap--home').addClass('active');
		$('.header__back').removeClass('visible');
	})
}


intro();
searchBar();
playlistNowScroll();
nowListMusicInfo();
playlistplaying();
playlistNavSelected();
articleSlider();
PopularGenreBgColor();
controller();
LikeBtn();
contentsPage();
dailytopinit();
pagelistInit();
newAlbumsInit();
artistInit();
searchPageInit();