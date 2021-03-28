const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  alphabet = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase().split('');
  straight = true;
  encryptLambda = (number1, number2) => (number1 + number2) % 26;
  decryptLambda = (number1, number2) => {
      let difference = number1 - number2;
      return difference < 0 ? difference + 26 : difference
  };

  constructor(straight) {
      this.straight = straight == undefined ? true : straight;
  }

  encrypt(message, key) {
      return this.transform(message, key, this.encryptLambda)
  }
  decrypt(message, key) {
      return this.transform(message, key, this.decryptLambda)
  }

  transform(message, key, lambda) {
      if (message.length > key.length) {
          key = key.repeat(Math.ceil(message.length / key.length));
      }
      let keyArray = [...key].reverse();

      let result = [...message].map((messageLetter, index) => {
          let number1 = this.letterNumber(messageLetter.toUpperCase());
          if (number1 >= 0) {
              let keyLetter = keyArray.pop();
              let number2 = this.letterNumber(keyLetter.toUpperCase());
              return this.alphabet[lambda(number1,number2)]
          } else
              return messageLetter;
      });

      return this.straight ? result.join('') : result.reverse().join('');
  }

  letterNumber(letter) {
      return this.alphabet.indexOf(letter);
  }
}

module.exports = VigenereCipheringMachine;
