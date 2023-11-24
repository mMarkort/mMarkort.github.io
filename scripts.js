let cells = document.querySelectorAll('#field td');
start(cells)
let xPoint = 0;
let oPoint = 0;
let drawPoint = 0;
let turn = document.getElementById("Turn");

function start(cells){
    let i = 0;
    for(let cell of cells){
        cell.addEventListener('click', function step(){
            if(this.textContent == ""){
                turn = document.getElementById("Turn");
                this.textContent = ['X', 'O'][i%2];
                turn.textContent = ['Turn: O', 'Turn: X'][i%2];
                this.removeEventListener('click', step)
                if(isVictory(cells)){
                    if(this.textContent == 'X'){
                        xPoint++;
                        document.getElementById("XX").textContent = "X: " + xPoint;
                    }
                    else{
                        oPoint++;
                        document.getElementById("OO").textContent = "O: " + oPoint;
                    }
                    restart()
                } else if(i == 8){  
                    drawPoint++;
                    document.getElementById("draw").textContent = "Draw: " + drawPoint;
                    restart();
                }
                i++;
            }
        });
    }
}

function isVictory(cells){
    let combs = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6],
	];

	for (let comb of combs) {
		if (cells[comb[0]].textContent == cells[comb[1]].textContent &&
			cells[comb[1]].textContent == cells[comb[2]].textContent &&
			cells[comb[0]].textContent != '') 
        {
			return true;
		}
	}
	
	return false;
}

function restart(){
    var a = document.getElementById("field"); 
                    var child = a.lastChild;
                    while(child){
                        a.removeChild(child);
                        child=a.lastChild;
                    }
                    for(let i = 0; i < 3;i++){
                        a.appendChild(document.createElement("tr"));
                        for(let b = 0; b < 3;b++){
                            a.lastChild.appendChild(document.createElement("td"));
                        }
                    }
                    cells = document.querySelectorAll('#field td');
                    start(cells)
}
