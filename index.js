// Code your solutions in this file

function writeCards(names, event){
    const messages = []
    for (let i = 0; i < names.length; i++){
        messages[i] = `Thank you, ${names[i]}, for the wonderful ${event} gift!`
    }
    console.log(messages);
    return messages;
}

writeCards(["Racquel", "Gil", "Lilly"], "Purim");

function countDown(integer){
    while (integer >= 0){
        console.log(integer);
        integer--;
    }
}

countDown(13);