const emojis =['😃','😂','😎','🤩','😯','😊','🥰','😴','😒','🥱','😍','🫠','😓','😛','🤑','🤯','🥵','😱','😤','🤪','😵','😵‍💫','🤢','🤮','😇','🤡','🥳','💩','🤓']

function play() {
    document.getElementById('emoji').innerHTML = emojis[Math.floor(Math.random()* emojis.length)]
}

play()