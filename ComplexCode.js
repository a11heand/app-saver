/*
Filename: ComplexCode.js
Content: A complex code implementing a messaging system with user authentication and encryption.
*/

// Global variables
const users = [];
const messages = [];

// User class
class User {
  constructor(username, password) {
    this.username = username;
    this.password = password;
    this.messages = [];
  }

  sendMessage(receiver, message) {
    const encryptedMessage = encrypt(message);
    receiver.receiveMessage(this, encryptedMessage);
  }

  receiveMessage(sender, message) {
    this.messages.push({ sender, message });
  }
}

// Message class
class Message {
  constructor(sender, receiver, content, timestamp) {
    this.sender = sender;
    this.receiver = receiver;
    this.content = content;
    this.timestamp = timestamp;
  }
}

// Encryption function
function encrypt(message) {
  let encryptedMessage = '';
  for (let i = 0; i < message.length; i++) {
    const charCode = message.charCodeAt(i);
    encryptedMessage += String.fromCharCode(charCode + 1);
  }
  return encryptedMessage;
}

// Decryption function
function decrypt(encryptedMessage) {
  let decryptedMessage = '';
  for (let i = 0; i < encryptedMessage.length; i++) {
    const charCode = encryptedMessage.charCodeAt(i);
    decryptedMessage += String.fromCharCode(charCode - 1);
  }
  return decryptedMessage;
}

// User registration function
function registerUser(username, password) {
  if (!users.find((user) => user.username === username)) {
    const newUser = new User(username, password);
    users.push(newUser);
    return true;
  } else {
    return false;
  }
}

// User login function
function loginUser(username, password) {
  const user = users.find((user) => user.username === username && user.password === password);
  if (user) {
    return user;
  } else {
    return null;
  }
}

// Send message function
function sendMessage(senderUsername, receiverUsername, messageContent) {
  const sender = users.find((user) => user.username === senderUsername);
  const receiver = users.find((user) => user.username === receiverUsername);
  if (sender && receiver) {
    const timestamp = new Date().toLocaleString();
    const message = new Message(sender, receiver, messageContent, timestamp);
    sender.sendMessage(receiver, message);
    messages.push(message);
    return true;
  } else {
    return false;
  }
}

// Get user's received messages function
function getReceivedMessages(username) {
  const user = users.find((user) => user.username === username);
  if (user) {
    const receivedMessages = user.messages.filter((message) => message.receiver === user);
    return receivedMessages.map((message) => {
      return {
        sender: message.sender.username,
        content: decrypt(message.content),
        timestamp: message.timestamp,
      };
    });
  } else {
    return [];
  }
}

// Example usage
registerUser('Alice', '123456');
registerUser('Bob', 'qwerty');

loginUser('Alice', '123456');
loginUser('Bob', 'qwerty');

sendMessage('Alice', 'Bob', 'Hello, Bob! How are you?');
sendMessage('Bob', 'Alice', "Hi Alice! I'm fine, thanks!");

const aliceReceivedMessages = getReceivedMessages('Alice');
const bobReceivedMessages = getReceivedMessages('Bob');

console.log(aliceReceivedMessages);
console.log(bobReceivedMessages);
