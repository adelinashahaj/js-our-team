const team = [
    {
        "nome": "Wayne Barnett", "ruolo": "Founder & CEO", "foto": "wayne-barnett-founder-ceo.jpg"
    },
    {
        "nome": "Angela Caroll", "ruolo": "Chief Editor",  "foto": "angela-caroll-chief-editor.jpg"
    },
    {
        "nome": "Walter Gordon", "ruolo": "Office Manager", "foto": "walter-gordon-office-manager.jpg"
    },
    {
        "nome": "Angela Lopez", "ruolo": "Social Media Manager", "foto": "angela-lopez-social-media-manager.jpg"
    },
    {
        "nome": "Scott Estrada", "ruolo": "Developer", "foto": "scott-estrada-developer.jpg"
    },
    {
        "nome": "Barbara Ramos", "ruolo": "Graphic Designer", "foto": "barbara-ramos-graphic-designer.jpg"
    }

];


let ourTeamContainer = document.getElementById('ourTeam-container');
let teamCard = document.getElementById('card-team');


    for (let i = 0; i < team.length; i++){
        let element = team[i];
        console.log(element);
     for(let key in element){
        console.log(element[key]);
     }

        
ourTeamContainer.innerHTML += `
    <div class="team-card">
     <div class="card-image">
     <img
     src="img/${element.foto}"
   />
    </div>
     <div class="card-text">
       <h3>${element.nome}</h3>
       <p>${element.ruolo}</p>
    </div>
   </div>`

    };
