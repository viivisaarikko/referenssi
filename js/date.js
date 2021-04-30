function newDate() {
    const d = new Date()
    const year = d.getFullYear() // vuosi
    const date = d.getDate() // päivä
    const months = [
        'Tammikuu',
        'Helmikuu',
        'Maaliskuu',
        'Huhtikuu',
        'Toukokuu',
        'Kesäkuu',
        'Heinäku',
        'Elokuu',
        'Syyskuu',
        'Lokakuu',
        'Marraskuu',
        'Joulukuu'
    ]

    const monthIndex = d.getMonth()
    const monthName = months[monthIndex]
    console.log(monthName) // kuukausi

    const days = [
        'Sunnuntai',
        'Maanantai',
        'Tiistai',
        'Keskiviikko',
        'Torstai',
        'Perjantai',
        'Lauantai'
    ]

    const dayIndex = d.getDay()
    const dayName = days[dayIndex] // tämä päivä 

    const formatted = `${dayName}, ${date} ${monthName} ${year}`
    console.log(formatted) // Thu, 23 January 2019

    document.getElementById("MyNewDate").innerText = formatted;
    document.getElementById("MyNewDate").textContent = formatted;

}

newDate();