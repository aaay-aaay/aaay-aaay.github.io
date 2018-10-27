images = {
    '#': document.getElementById('block').src,
    ' ': document.getElementById('space').src,
    '@': document.getElementById('player').src
};

function createImage(src) {
    (img = document.createElement('img')).src = src;
    return img;
}

// get the maze
request = new XMLHttpRequest();
request.open('GET', '/maze/maze.txt');
request.onreadystatechange = function() {
    maze = request.responseText;
    if (maze == "") return;
    maze = maze.split('\n');
    rowLength = maze[0].length;
    columnLength = maze.length;
    mazeElement = document.getElementById('maze');
    for (i = 0; i < rowLength; i++) {
        mazeElement.appendChild(tr = document.createElement('tr'));
        for (j = 0; j < columnLength - 1; j++) {
            tr.appendChild(td = document.createElement('td'));
            td.appendChild(createImage(images[maze[i][j]]));
            console.log(td);
        }
    }
    request.onreadystatechange = function(){};
};
request.send();