document.addEventListener('keydown', function(event) {
    const keyCode = event.keyCode;
    const keyName = event.key;
    let keyModifiers = '';

    if (event.altKey) {
      keyModifiers += 'Alt ';
    }
    if (event.ctrlKey) {
      keyModifiers += 'Ctrl ';
    }
    if (event.shiftKey) {
      keyModifiers += 'Shift ';
    }

    alert(`Key pressed: ${keyName}\nASCII code: ${keyCode}\nModifiers: ${keyModifiers}`);
  });