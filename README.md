The Learning T-Rex
------------------

Everyone knows Google Chrome's 'Offline Page' which has the very cool T-Rex jumping game. 

Well using [qlearner.js](https://github.com/darraghmckay/qlearner.js) a Q-Learning library I develop, I was able to get our little T-Rex to learn how to best avoid the cacti (plural for cactus apparently).

[See it in action (Demo)](http://darraghmckay.github.io/Learning-TRex/) 

____

Most of the custom functions required to do this live in the `functions.js` file.
Including functions to simulate a keypress and a keyup on the spacebar.

In the `main.js` file you will find a method called `chooseDinoMove` which is where **most** of the qlearning methods are called. 


