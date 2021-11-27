/* Scroll to Top */
btnTop = document.getElementById("toTop");
window.onscroll = function() {
    scroll()
};
const scroll = () => {
    if(document.body.scrollTop > 250 || document.documentElement.scrollTop > 250) {
        btnTop.style.display = "block";
    } else {
        btnTop.style.display = "none";
    }
}
const gotoTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
/*-- Scroll to Top --*/

/* Mobile Menu */
function openMobMenu() {
    document.getElementById("mobMenu").style.display = "block";
    document.getElementById("mobMenu").style.width = "100vw";
}

function closeMobMenu() {
    document.getElementById("mobMenu").style.display = "none";
    document.getElementById("mobMenu").style.width = "0";
}
/*-- Mobile Menu --*/

/* Show User Current Date */
let fullDate = new String();
let dayName = ("Minggu,Senin,Selasa,Rabu,Kamis,Jumat,Sabtu");
dayName = dayName.split(",");
let monthName = ("Januari,Februari,Maret,April,Mei,Juni,Juli,Agustus,September,Oktober,November,Desember");
monthName = monthName.split(",");
let _date = new Date();
let day = _date.getDay();
let date = _date.getDate();
let month = _date.getMonth();
let year = _date.getFullYear();
fullDate = dayName[day] + ", " + date + " " + monthName[month] + " " + year;
document.querySelector("#date-time > p").innerHTML = fullDate;
/*-- Show User Current Date --*/

/* Request Web API */
$.ajax({
    url: 'https://apicovid19indonesia-v2.vercel.app/api/indonesia',
    type: 'get',
    dataType: 'json',
    data: '',
    success: (data) => {
        $('#total-cases').append(`
            <div class="card">
                <table>
                    <tr>
                        <td>Positif</td>
                        <td class="notif pos">${data.positif}</td>
                    </tr>
                    <tr>
                        <td>Meninggal</td>
                        <td class="notif men">${data.meninggal}</td>
                    </tr>
                    <tr>
                        <td>Sembuh</td>
                        <td class="notif sem">${data.sembuh}</td>
                    </tr>
                </table>
            </div>
        `);
    }
});

$.ajax({
    url: 'https://apicovid19indonesia-v2.vercel.app/api/indonesia/provinsi',
    type: 'get',
    dataType: 'json',
    data: '',
    success: (data) => {
        // let kasus = data.data; // use this if has sub-index
        let kasus = data;
        $.each(kasus, (i, data) => {
            $('#list-cases').append(`
                <div class="card">
                    <table>
                        <tr>
                            <th colspan="2">${data.provinsi}</th>
                        </tr>
                        <tr>
                            <td>Positif</td>
                            <td class="notif pos">${data.kasus}</td>
                        </tr>
                        <tr>
                            <td>Meninggal</td>
                            <td class="notif men">${data.meninggal}</td>
                        </tr>
                        <tr>
                            <td>Sembuh</td>
                            <td class="notif sem">${data.sembuh}</td>
                        </tr>
                    </table>
                </div>
            `);
        });
    }
});
/*-- Request Web API --*/