
const enDeCode = function () {
  const encodeBtn = document.querySelector('#encode')
  const decodeBtn = document.querySelector('#decode')
  const output = document.querySelector('#output')
  const message = document.querySelector('#userMessage').value.toLowerCase();
  const messageArray = message.split('')
  const userKeyInput = document.querySelector('#userKey')
  const userKey = parseInt(document.querySelector('#userKey').value)
  const userShift = parseInt(document.querySelector('#userShift').value)

  const encodedArray = [];
  const decodedArray = []

  const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];



  // Key = how many letters to shift
  // Shift = how many letters to shift each letter by
  // e.g. key = 1, shift = 2
  // A = B (+ 1)
  // B = E (+ 1, + 2)
  // C = H (+ 1, + 2, + 2)
  // D = K (+ 1, + 2, + 2, + 2)

  // Prevent page refreshing
  userKeyInput.addEventListener('keydown', function (e) {
    if (e.keyCode === 13) {
      e.preventDefault();
    }
  })


  let shiftAmount = 0;

  ////////// ENCODE /////////

  // Loop through message array
  if (encodeBtn.checked) {
    messageArray.forEach(letter => {
      if (letter === ' ') {
        encodedArray.push(' ');
        return;
      }

      let index = alphabet.indexOf(letter);
      let newIndex = index + userKey + shiftAmount;
      let newLetter = alphabet[newIndex % alphabet.length];

      // If new index is greater than 25, subtract 26 to get new index (to loop over alphabet)
      if (newIndex > 25) {
        newIndex = newIndex - 26;
        newLetter = alphabet[newIndex];
      }

      // Push new letter to encoded array
      encodedArray.push(newLetter);

      shiftAmount += userShift;

    });

    // Join encoded array into string
    const encodedMessage = encodedArray.join('');

    // Set output to encoded message
    output.innerHTML = encodedMessage;
  }

  ////////// DECODE //////////
  if (decodeBtn.checked) {
    messageArray.forEach(letter => {
      if (letter === ' ') {
        decodedArray.push(' ');
        return;
      }

      let index = alphabet.indexOf(letter);
      let newIndex = index - userKey - shiftAmount;
      let newLetter = alphabet[newIndex];

      // If new index is less than 0, add 26 to get new index (to loop over alphabet)
      if (newIndex < 0) {
        newIndex = newIndex + 26;
        newLetter = alphabet[newIndex];
      }

      // Push new letter to encoded array
      decodedArray.push(newLetter);

      shiftAmount += userShift;

    });

    // Join encoded array into string
    const decodedMessage = decodedArray.join('');

    // Set output to encoded message
    output.innerHTML = decodedMessage;
  }

}


