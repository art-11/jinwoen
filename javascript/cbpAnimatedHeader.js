var cbpAnimatedHeader=function(){var n=document.documentElement,a=document.querySelector("header"),r=!1,c=300;function d(){var e=window.pageYOffset||n.scrollTop;c<=e?classie.add(a,"cbp-af-header-shrink"):classie.remove(a,"cbp-af-header-shrink"),r=!1}window.addEventListener("scroll",function(e){r||(r=!0,setTimeout(d,250))},!1)}();