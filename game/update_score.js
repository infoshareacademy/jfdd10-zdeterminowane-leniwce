var score = 0;

function change_score(mod) {
    score += mod;
    document.querySelector(".score_table").innerHTML=score;
}