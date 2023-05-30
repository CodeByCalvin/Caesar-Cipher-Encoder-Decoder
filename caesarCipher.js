


const enDeCode = function () {
  const encodeBtn = document.querySelector('#encode')
  const decodeBtn = document.querySelector('#decode')
  const output = document.querySelector('#output')
  const messageBox = document.querySelector('#userMessage')
  const message = document.querySelector('#userMessage').value.toLowerCase();
  const messageArray = message.split('')
  const userKey = parseInt(document.querySelector('#userKey').value)
  const encodedArray = [];
  const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];


  // Loop through message array
  messageArray.forEach(letter => {
    if (letter === ' ') {
      encodedArray.push(' ');
      return;
    }

    let index = alphabet.indexOf(letter);
    let newIndex = index + userKey;
    let newLetter = alphabet[newIndex];

    // If new index is greater than 25, subtract 26 to get new index (to loop over alphabet)
    if (newIndex > 25) {
      newIndex = newIndex - 26;
      newLetter = alphabet[newIndex];
    }

    // Push new letter to encoded array
    encodedArray.push(newLetter);

  });

  // Join encoded array into string
  const encodedMessage = encodedArray.join('');

  // Set output to encoded message
  output.innerHTML = encodedMessage;

  ////////// DECODE //////////

}


