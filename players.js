const players = document.getElementsByClassName('player');

function setplayerstyle(player){
    player.style.margin = '30px';
    player.style.border = 'solid 1px red';
    player.style.borderRadius = '15px'
    player.style.padding = '50px';
}
for(const player of players){
    setplayerstyle(player);
   
}

function addplayer(){
    const playercontainer = document.getElementById('players');
    const player = document.createElement('div');
    player.classList.add('player');
    player.innerHTML = `
                <h4 class="player-name">player</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti ullam dolores dolorum odit exercitationem error quasi corporis in harum nemo ducimus facilis, nisi mollitia iste alias animi. Sequi, ut vel.</p>
    
    
    `;

    
    
    setplayerstyle(player);
    playercontainer.appendChild(player);
}


document.getElementById('players').addEventListener('click',function(event){

    console.log(event.target.tagName);
    if(event.target.tagName == 'DIV'){
        event.target.style.backgroundColor = 'red';
    }
})
