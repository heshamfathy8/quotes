
var q = document.getElementById('quote')
var btn = document.getElementById('btn')
var ar=[]
var quotes=[,
     'Be yourself; everyone else is already taken.',

     "I'm selfish, impatient and a little insecure. I make mistakes.",

     "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
     'So many books, so little time',
     'A room without books is like a body without a soul.'
]


btn.onclick=function() {

    if (ar.length==5) {
        return
    }
    do {
        var x= Math.round(Math.random()*4)
    } while (ar.includes(x));
    ar.push(x)
    q.innerHTML=quotes[x]
}
