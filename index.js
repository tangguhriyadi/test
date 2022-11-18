const arr = ['b$u$i$ld','t$h$e','n$e$x$t','e$r$a', 'o$f', 's$o$f$t$w$a$r$e', 'd$e$v$e$l$$p$m$e$n$t']

const toArray = (arr) => {
   const res = arr.map(ar => {
    return ar.replace(/[^a-zA-Z0-9_-]/g,'').toUpperCase()
   })
   return res.join(' ')
}

console.log(toArray(arr))