function addUser(){
    player_1 = document.getElementById("player1_input").value;
    player_2 = document.getElementById("player2_input").value;

    localStorage.setItem("player1", player_1);
    localStorage.setItem("player2", player_2);

    window.location = "index2.html";
}
