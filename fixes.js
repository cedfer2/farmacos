var meta= window.parent.document.createElement("meta");
meta.httpEquiv="Content-Security-Policy";
meta.content="default-src self; img-src https://*; child-src none;";
window.parent.document.getElementsByTagName('head')[0].prepend(meta);

function InjeectDepend(src){ var script = window.parent.document.createElement("script"); script.type="text/javascript"; script.crossorigin="anonymous"; script.src=src; window.parent.document.getElementsByTagName('head')[0].prepend(script); window.console.log('inse', src);}
InjeectDepend("https://cedfer2.github.io/farmacos/polyfill-ie11-nodelist-foreach.js");
InjeectDepend("https://cedfer2.github.io/farmacos/querySelectorpolyfill.js");
InjeectDepend("https://cedfer2.github.io/farmacos/addEventListener-polyfill.js");
function docReady(fn) { if (document.readyState === "complete" || document.readyState === "interactive") { setTimeout(fn, 1); } else { document.addEventListener("DOMContentLoaded", fn); }}
docReady(function() {
window.parent.document.querySelectorAll('.widget-header-header-9 .x-el-nav a[href*="facebook.com/"]:first-child, [data-page="376f0a25-ff0d-4a94-941c-9505a56f1068"]').forEach(element => { element.innerHTML = "" });
window.parent.document.querySelector('.widget-header [data-aid="HAMBURGER_MENU_LINK"]').addEventListener('click',function(){  window.parent.document.querySelector('[data-ux="NavigationDrawer"]').classList.toggle('Sandshow'); window.console.log('SandWid click opender'); });
window.parent.document.querySelector('.widget-header [data-ux="CloseIcon"]').addEventListener('click',function(){  window.parent.document.querySelector('[data-ux="NavigationDrawer"]').classList.remove('Sandshow'); window.console.log('SandWid click remover'); });
window.console.log("DOM is loaded and ready for manipulation here");
});
