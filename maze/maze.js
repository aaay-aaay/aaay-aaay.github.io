images = {
    '#': document.getElementById('block').src,
    ' ': document.getElementById('space').src,
    '@': document.getElementById('player').src
};

function createImage(src) {
    (img = document.createElement('img')).src = src;
    return img;
}

function replacePlayer(to) {
    maze[player[1]][player[0]] = to;
    mazeElement.children[player[1]].children[player[0]].children[0].src = images[to];
}

// get the maze
request = new XMLHttpRequest();
request.open('GET', '/maze/maze.txt');
request.onreadystatechange = function() {
    maze = request.responseText;
    if (maze == "") return;
    maze = maze.split('\n');
    for (i = 0; i < maze.length; i++) {
        maze[i] = Array.from(maze[i]);
    }
    rowLength = maze[0].length;
    columnLength = maze.length;
    mazeElement = document.getElementById('maze');
    for (i = 0; i < columnLength - 1; i++) {
        mazeElement.appendChild(tr = document.createElement('tr'));
        for (j = 0; j < rowLength - 1; j++) {
            tr.appendChild(td = document.createElement('td'));
            td.appendChild(createImage(images[maze[i][j]]));
            console.log(td);
            if (maze[i][j] === '@') {
                player = [i, j];
            }
        }
    }
    request.onreadystatechange = function(){};
};
request.send();

// detect arrow keys
function checkKey(e) {
    e = e || window.event;
    if (e.keyCode === 37) {
        console.log('<');
        if (player[0] != 0 && maze[player[1]][player[0]-1] == ' ') {
            replacePlayer(' ');
            player[0]--;
            replacePlayer('@');
        } else { console.log('no'); }
    } else if (e.keyCode === 38) {
        console.log('^');
        if (player[1] != 0 && maze[player[1]-1][player[0]] == ' ') {
            replacePlayer(' ');
            player[1]--;
            replacePlayer('@');
        } else { console.log('no'); }
    } else if (e.keyCode === 39) {
        console.log('>');
        if (player[0] != rowLength-2 && maze[player[1]][player[0]+1] == ' ') {
            replacePlayer(' ');
            player[0]++;
            replacePlayer('@');
        } else { console.log('no'); }
    } else if (e.keyCode === 40) {
        console.log('v');
        if (player[1] != columnLength-2 && maze[player[1]+1][player[0]] == ' ') {
            replacePlayer(' ');
            player[1]++;
            replacePlayer('@');
        } else { console.log('no'); }
    }
}
document.onkeydown = checkKey;