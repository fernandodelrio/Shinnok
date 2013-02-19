//Vari�veis para canvas e contexto
var canvas, c;

//Configura��es para mapas.
var map1, map1Name = "maps/mapa1.tmx", listLayersBelow = [0, 1, 2], listLayersAbove = [3];

//Configura��es pra caracteres control�veis
var character1, character1Sprite = "images/characteres/android_sprite.png",
chr1PosX = 352, chr1PosY = 160, chr1Width = 32, chr1Height = 32;

//Configura��es para caracteres n�o control�veis.
var npcs = [];
var npc, npcSprite = "images/characteres/personagem1.png",
//npcPosX = 96, npcPosY = 0, 
npcWidth = 32, npcHeight = 32;

//Estado das teclas direcionais. True indica tecla pressionada. False indica tecla n�o pressionada.
var down = false, left = false, right = false, up = false;

//Primeira fun��o a ser executada. Utilizada para carregar recursos e iniciar a renderiza��o.
function init() {
	c = document.getElementById("tela");
	canvas = c.getContext("2d");
	character1 = loadCharacter(chr1PosX, chr1PosY, chr1Width, chr1Height, character1Sprite, keyboard.LEFT);
	map1 = loadMap(map1Name);
	render();
}

//Fun��o de renderiza��o respons�vel pela sa�da de dados.
function render() {
	drawMap(canvas, map1, listLayersBelow);
	for (var c = 0; c < npcs.length; c++) {
		drawCharacter(canvas, npcs[c]);
		var remove = updateNPC(npcs[c]);
		if (remove) {
			npcs.splice(c, 1);
		}
	}
	drawCharacter(canvas, character1);
	updateCharacter(character1, down, left, right, up);
	drawMap(canvas, map1, listLayersAbove);
	setTimeout(render, 50);
}

//Fun��o executada quando alguma tecla � pressionada.
function keyDown(e) {
	if (e.keyCode == keyboard.DOWN) {
		down = true;
	} else if (e.keyCode == keyboard.LEFT) {
		left = true;
	} else if (e.keyCode == keyboard.RIGHT) {
		right = true;
	} else if (e.keyCode == keyboard.UP) {
		up = true;
	} else if (e.keyCode == keyboard.G) {
		npcPos = getNPCStartPoint(map1Name);
		npc = loadCharacter(npcPos[0], npcPos[1], npcWidth, npcHeight, npcSprite, keyboard.DOWN);
		npcs.push(npc);
	}
}

//Fun��o executada quando alguma tecla que est� pressionada � solta.
function keyUp(e) {
	if (e.keyCode == keyboard.DOWN) {
		down = false;
	} else if (e.keyCode == keyboard.LEFT) {
		left = false;
	} else if (e.keyCode == keyboard.RIGHT) {
		right = false;
	} else if (e.keyCode == keyboard.UP) {
		up = false;
	}
}

//Representa��o das teclas do teclado
var keyboard = {
	W:87,
	A:65,
	S:83,
	D:68,
	UP:38,
	LEFT:37,
	DOWN:40,
	RIGHT:39,
	G:71
}

//Defini��o dos eventos utilizados
window.onkeydown = keyDown;
window.onkeyup = keyUp;
window.onload = init;