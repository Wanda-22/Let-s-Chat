function AddUser() {
    o=document.getElementById("user_name").value;
    localStorage.setItem("username",o);
    window.location="room.html";
}