/*
Configura��es e fun��es de desenho para o mapa do cap�tulo 1 level 1.
Autor:Fernando del Rio
 */

//Vari�veis para as configura��es do mapa.
var mapChp1LvL1, mapChp1LvL1Name = "maps/chapter1/level1/mapChp1LvL1.tmx", mapChp1LvL1listLayersBelow = [0, 1, 2], mapChp1LvL1listLayersAbove = [3]; //mapChp1LvL1Loaded=false;

//Configura��es para caracteres n�o control�veis.
var mapChp1LvL1Npcs = [];
var mapChp1LvL1Npc, mapChp1LvL1NpcSprite = "images/characteres/personagem1.png",
mapChp1LvL1NpcWidth = 32, mapChp1LvL1NpcHeight = 32;

//Configura��es para as torres
var towers = [];

//Fun��o para inicializa��o do mapa.
function mapChp1LvL1Init() {
	if (mapChp1LvL1 == undefined) {
		mapChp1LvL1 = loadMap(mapChp1LvL1Name);
		var npcPos = getNPCStartPoint(mapChp1LvL1Name);
		mapChp1LvL1Npc = loadCharacter(npcPos[0], npcPos[1], mapChp1LvL1NpcWidth, mapChp1LvL1NpcHeight, mapChp1LvL1NpcSprite, keyboard.DOWN);
		if (mapChp1LvL1 != undefined && mapChp1LvL1.layers[0].tileset.image.complete && character1 != undefined && character1.image.complete && mapChp1LvL1Npc != undefined && mapChp1LvL1Npc.image.complete) {
			mapChp1LvL1Render();
		} else {
			loadingRender();
		}
	} else if (mapChp1LvL1 != undefined && mapChp1LvL1.layers[0].tileset.image.complete && character1 != undefined && character1.image.complete && mapChp1LvL1Npc != undefined && mapChp1LvL1Npc.image.complete) {
		mapChp1LvL1Render();
	}
}

//Fun��o para desenhar o mapa.
function mapChp1LvL1Render() {
	drawMap(canvas, mapChp1LvL1, mapChp1LvL1listLayersBelow);
	for (var i = 0; i < mapChp1LvL1Npcs.length; i++) {
		if (!mapChp1LvL1Npcs[i].removed) {
			drawCharacter(canvas, mapChp1LvL1Npcs[i]);
			updateNPC(mapChp1LvL1Npcs[i]);
		}
	}
	drawCharacter(canvas, character1);
	updateCharacter(character1, down, left, right, up);
	highlightPlaces();
	for (var i = 0; i < towers.length; i++) {
		drawTower(canvas, towers[i]);
		updateTower(towers[i]);
	}
	drawMap(canvas, mapChp1LvL1, mapChp1LvL1listLayersAbove);
	if (!keyLocked && keyG) {
		keyLocked = true;
		var npcPos = getNPCStartPoint(mapChp1LvL1Name);
		mapChp1LvL1Npc = loadCharacter(npcPos[0], npcPos[1], mapChp1LvL1NpcWidth, mapChp1LvL1NpcHeight, mapChp1LvL1NpcSprite, keyboard.DOWN);
		mapChp1LvL1Npcs.push(mapChp1LvL1Npc);
	}
	drawMapInterface();
}
