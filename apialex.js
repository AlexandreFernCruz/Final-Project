/* API JS que vai ler JSON */

$.getJSON("Team.json", function(json) {
  class membrosquipa {
    constructor(team) {
      this.eqp = team;
    }
    get membro() {
      return this.eqp;
    }
  }
  //nome 1
  let aux1 = new membrosquipa(json.team[0].nome);
  document.getElementById("A1").innerHTML = aux1.membro;
  let aux2 = new membrosquipa(json.team[0].profissao);
  document.getElementById("A2").innerHTML = aux2.membro;
  
  //nome 2
  let aux3 = new membrosquipa(json.team[1].nome);
  document.getElementById("A3").innerHTML = aux3.membro;  
  let aux4 = new membrosquipa(json.team[1].profissao);
  document.getElementById("A4").innerHTML = aux4.membro;

  //nome 3
  let aux5 = new membrosquipa(json.team[2].nome);
  document.getElementById("A5").innerHTML = aux5.membro;  
  let aux6 = new membrosquipa(json.team[2].profissao);
  document.getElementById("A6").innerHTML = aux6.membro;

  //nome 4
  let aux7 = new membrosquipa(json.team[3].nome);
  document.getElementById("A7").innerHTML = aux7.membro;  
  let aux8 = new membrosquipa(json.team[3].profissao);
  document.getElementById("A8").innerHTML = aux8.membro;

});
