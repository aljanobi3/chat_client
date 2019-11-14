const socket = new WebSocket('wss://www.el-evan.com/web_dev_chat_sever');

document.querySelector('#submit').addEventListener('click',() => {
    socket.send(JSON.stringify(Name: document.querySelector('#name').value,Message: document.querySelector('#message').value}));


socket.addEVentListener('message', event => {
    const message = JSON.parse(event.data);
    document.querySelector('.chat-strem').innerText += Message.name + ' :: ' +message.Message + '\n';

});
