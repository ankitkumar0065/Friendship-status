let buttons = document.querySelectorAll(".my-btn");

buttons.forEach(btn=> {
  btn.addEventListener("click", () => {
   let friendshipstatus = btn.parentElement.querySelector(".friendship-status");
   if(btn.innerHTML === "Add Friend"){
    friendshipstatus.innerHTML = "You are Friends now..!";
    friendshipstatus.style.color = "green";

    btn.innerHTML = "Remove Friend";
    btn.classList.add("remove-friend");
   }else{
    friendshipstatus.innerHTML = "Stranger";
    friendshipstatus.style.color = "red";

    btn.innerHTML = "Add Friend";
    btn.classList.remove("remove-friend");
   }
  });
});