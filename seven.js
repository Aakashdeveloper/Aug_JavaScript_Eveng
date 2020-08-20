////persistent storage
localStorage.setItem('token','fbknj767e8ubiu78ehuef')
undefined
localStorage.getItem('token')
"fbknj767e8ubiu78ehuef"
localStorage.setItem('token','7777777')
undefined
localStorage.removeItem('token')
undefined
localStorage.setItem('token','7777777')
undefined

///delete data after tab close
///depend upon the tab
sessionStorage.setItem("MySession",89458584)
undefined
sessionStorage.removeItem("MySession",89458584)


//cookies save wrt to url
document.cookie
"_ga=GA1.1.1931934259.1594389049; _ga_F08VTEGDHE=GS1.1.1596726374.11.0.1596726374.0"
document.cookie="token=65475"
"token=65475"
document.cookie
"_ga=GA1.1.1931934259.1594389049; _ga_F08VTEGDHE=GS1.1.1596726374.11.0.1596726374.0; token=65475"
document.cookie="token=65475; expires=20 June 2019"
"token=65475; expires=20 June 2019"
document.cookie="token=65475; expires=20 Aug 2019"
"token=65475; expires=20 Aug 2019"
