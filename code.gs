function onOpen() {
  SpreadsheetApp.getUi()
    .createMenu('Ship')
    .addItem('Play Toaster Racer', 'playGame')
    .addToUi();
}

function playGame() {
  const html = HtmlService.createHtmlOutputFromFile('Game')
    .setWidth(900)
    .setHeight(700)
    .setTitle('Toaster Racer');
  SpreadsheetApp.getUi().showModalDialog(html, 'Toaster Racer');
}
