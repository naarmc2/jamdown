//https://timezone.abstractapi.com/v1/current_time/?api_key=d93c2f99877849c7bca36a6a37fdf121&location=Kingston,%20%20Jamaica
// At present, it doesn't work to get the time zone but thats fine since all of Jamaica has one time zone

async function getUser(place) {
  const api_url = `https://timezone.abstractapi.com/v1/current_time/?api_key=d93c2f99877849c7bca36a6a37fdf121&location=${place}`
          
            const response = await fetch(api_url);
            
            const data = await res.json();
            
            time = await data.datetime
            // arr = Array.from(time)
            // arr.splice(0, 11)
            // arr.toString()
            // timezone = (arr.splice(0, 5)).join("");
            document.getElementById("time").innerText = `${Kingston,Jamaica}'s time = ${time} ${data.timezone_abbreviation}`

    }

    document.querySelectorAll(".allPaths").forEach(e => {
        e.addEventListener("mouseover", function () {
            window.onmousemove=function (j) {
                x = j.clientX
                y = j.clientY
                document.getElementById('name').style.top = y-60  + 'px'
                document.getElementById('name').style.left = x +10 + 'px'
            }
            e.style.fill = "#93b373"
            document.getElementById("name").style.opacity = 1
            document.getElementById("name").innerText = e.id

        })
        e.addEventListener("mouseleave", function () {
            e.style.fill = "#315e03"
            document.getElementById("name").style.opacity = 0
        })

        e.addEventListener("click",function(){
            getData(e.id)
        })

    })

    // document.getElementById("searchBtn").addEventListener("click", function () {
    //     country = document.getElementById("search").value
    //     document.querySelectorAll(`.allPaths`).forEach(e => {
    //         e.style.fill = "#ececec"
    //     })
    //     document.querySelectorAll(`#${country}`).forEach(e => {
    //         e.style.fill = "red"
    //     })
    // })






















