/*
Funções de desenho para o menu principal.
Autor: Fernando del Rio
 */
//Variáveis para as configurações da tela.
var mainMenuOptionSelected, mainMenuLoaded = false;

//Função para inicialização da tela.
function mainMenuInit() {
	mainMenuOptionSelected = mainMenuOptions.play;
}

//Função para desenhar a tela.
function mainMenuRender() {
	if (!mainMenuLoaded) {
		mainMenuInit();
		mainMenuLoaded = true;
	}
	drawMenu(mainMenuOptionSelected);
	mainMenuUpdate();
}

//Função para atualizar a tela.
function mainMenuUpdate() {
	if (!keyLocked && keyEnter && mainMenuOptionSelected == mainMenuOptions.play) {
		gameState = gameStates.chp1LvL1;
		keyLocked = true;
	} else if (down) {
		mainMenuOptionSelected = mainMenuOptions.options;
	} else if (up) {
		mainMenuOptionSelected = mainMenuOptions.play;
	}
}
