// Начальные тексты диалога
let dialogTexts = [
    "привет",
    "Вы попали в мой проект!",
    "Поздравляю!"
  ];

  addDialogText("На ваше устройство установится вирус через...");
  addDialogText("3...");
  addDialogText("2...");
  addDialogText("1...");
  addDialogText("*взрыв*")
  addDialogText("Вот и все")
  
  
  // Функция для добавления новых текстов диалога
  function addDialogText(text) {
    dialogTexts.push(text);
  }
  
  

  let currentTextIndex = 0;
  const dialogTextElement = document.getElementById('dialogText');
  
  document.addEventListener('keydown', function(event) {
    if (event.key === ' ') {
      if (currentTextIndex < dialogTexts.length - 1) {
        currentTextIndex++;
        dialogTextElement.textContent = dialogTexts[currentTextIndex];
      } else {
        // Достигнут конец массива, делаем что-то еще, например, скрываем диалог
        dialogTextElement.textContent = "Конец"; 
        // Для примера, вы можете сделать что-то еще здесь, например, закрыть окно с диалогом
      }
    }
  });