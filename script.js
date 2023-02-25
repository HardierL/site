const play = document.querySelector(".fa-play")
const song = document.querySelector("audio")
const item = document.querySelector(".item")
const vol = document.querySelector("input")


vol.onclick = () =>
{
    if (vol.value != 100 && vol.value >= 10)
    {
        song.volume = '.' + vol.value
    }
    else if (vol.value == 100)
    {
        song.volume = 1
    }
    else 
    {
        song.volume = '.0' + vol.value
    }
}

play.onclick = () =>
{
    if (song.paused)
    {
        song.play()
        play.classList.remove("fa-play")
        play.classList.add("fa-pause")
    }
    else 
    {
        song.pause()
        play.classList.remove("fa-pause")
        play.classList.add("fa-play")
    }
}

item.addEventListener("mouseover", () =>
{
    play.style.display = 'block'
})

item.addEventListener("mouseout", () =>
{
    setInterval(4)
    play.style.display = 'none'
})