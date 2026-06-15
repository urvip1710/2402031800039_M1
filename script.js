let count = 0;

/* PAGE SWITCH */
function show(id){
    document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
    document.getElementById(id).classList.add("active");
}

/* CLOCK */
function updateClock(){
    let now = new Date();
    document.getElementById("clock").innerText =
    "🕒 " + now.toLocaleTimeString();
}
setInterval(updateClock, 1000);
updateClock();

/* BOOK APPOINTMENT */
function book(){
    let name = document.getElementById("pname").value;
    let dept = document.getElementById("dept").value;
    let date = document.getElementById("date").value;

    if(name && date){
        notify("Appointment booked for " + name);
        document.getElementById("msg").innerText =
        "Booked with " + dept;
    } else {
        document.getElementById("msg").innerText =
        "Fill all fields";
    }
}

/* DONOR REGISTER */
function register(){
    let name = document.getElementById("dname").value;

    if(name){
        count++;
        document.getElementById("count").innerText = count;

        document.getElementById("msg2").innerText =
        name + " registered successfully!";

        notify("New donor registered");
    } else {
        document.getElementById("msg2").innerText =
        "Enter name";
    }
}

/* SEARCH DONOR */
function searchDonor(){
    let bg = document.getElementById("bloodGroup").value;
    document.getElementById("result").innerText =
    "Searching donors for " + bg;
}

/* LIKE DOCTOR */
function likeDoctor(btn){
    btn.innerText = "❤️ Liked";
    btn.style.background = "green";
}

/* NOTIFICATION SYSTEM */
function notify(msg){
    let div = document.createElement("div");
    div.innerText = msg;

    div.style.position = "fixed";
    div.style.right = "20px";
    div.style.bottom = "20px";
    div.style.background = "black";
    div.style.color = "white";
    div.style.padding = "10px";
    div.style.borderRadius = "8px";

    document.body.appendChild(div);

    setTimeout(() => div.remove(), 3000);
}