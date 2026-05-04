function search() {
    let val = document.getElementById("find").value.toUpperCase();
    let cards = document.getElementsByClassName("card");

    for (let i = 0; i < cards.length; i++) {
        let txt = cards[i].getElementsByTagName("h3")[0].innerText;
        cards[i].style.display = txt.toUpperCase().includes(val) ? "block" : "none";
    }
}
