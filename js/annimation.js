(function(){
const vid = document.getElementById('video');
const blocker = document.getElementById('blocker');


function ensurePlay(){
try {
const p = vid.play();
if (p && p.catch) p.catch(()=>{});
} catch(e){}
}


vid.addEventListener('pause', function(){
setTimeout(()=>{
if (vid.paused) ensurePlay();
}, 50);
});


vid.addEventListener('ended', function(){
ensurePlay();
});


document.addEventListener('visibilitychange', function(){
if (!document.hidden) ensurePlay();
});


blocker.addEventListener('contextmenu', function(e){ e.preventDefault(); });


window.addEventListener('keydown', function(e){
const blockedKeys = [' ','k','p'];
if (blockedKeys.includes(e.key.toLowerCase())){
e.preventDefault();
e.stopPropagation();
}
}, {capture:true});


blocker.addEventListener('dblclick', function(e){ e.preventDefault(); e.stopPropagation(); });
blocker.addEventListener('click', function(e){ e.preventDefault(); e.stopPropagation(); });


window.addEventListener('load', function(){
ensurePlay();
});


try{
const nativePause = HTMLMediaElement.prototype.pause;
HTMLMediaElement.prototype.pause = function(){
if (this === vid) return;
return nativePause.apply(this, arguments);
};
}catch(e){}


})();