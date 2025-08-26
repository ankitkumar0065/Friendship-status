let buttons = document.querySelectorAll(".my-btn");
let viewButtons = document.querySelectorAll(".view-profile");
let modal = document.getElementById("profileModal");
let closeBtn = document.querySelector(".close");
let profileName = document.getElementById("profileName");
let profileInfo = document.getElementById("profileInfo");

buttons.forEach(btn=> {
  btn.addEventListener("click", () => {

   let friendshipstatus = btn.parentElement.querySelector(".friendship-status");
   let viewProfileBtn = btn.parentElement.querySelector(".view-profile");

   if(btn.innerHTML === "Add Friend"){
    friendshipstatus.innerHTML = "You are Friends now..!";
    friendshipstatus.style.color = "green";

    btn.innerHTML = "Remove Friend";
    btn.classList.add("remove-friend");

    viewProfileBtn.style.display = "inline-block";
   }else{
    friendshipstatus.innerHTML = "Stranger";
    friendshipstatus.style.color = "red";

    btn.innerHTML = "Add Friend";
    btn.classList.remove("remove-friend");

    viewProfileBtn.style.display = "none";
   }
  });
});

viewButtons.forEach(vbtn => {
  vbtn.addEventListener("click", () => {
   let card = vbtn.parentElement;
   let name = card.querySelector("h1").innerText; // card ka naam
   let info = "This is some infrormation about "+ name;  //example informationn

   //modal m data daalna
   profileName.innerText = name;
   profileInfo.innerText = info;

   //modal show karna
   modal.style.display = "block";
  });
});

//modal close krne k liye

closeBtn.onclick = () => modal.style.display = "none";

window.onclick = (e) =>{
  if(e.target == modal)
    modal.style.display = "none";
};
