images = {
    '#': document.getElementById('block'),
    ' ': document.getElementById('space'),
    '@': document.getElementById('player')
};

// get the maze
request = new XMLHttpRequest();
request.open('GET', '/maze/maze.txt');
request.onreadystatechange = function() {
    maze = request.responseText;
    maze = maze.split('\n');
    rowLength = maze[0].length;
    columnLength = maze.length;
    mazeElement = document.getElementById('maze');
    for (i = 0; i < columnLength; i++) {
        mazeElement.appendChild(tr = document.createElement('tr'));
        for (j = 0; j < rowLength; j++) {
            tr.appendChild(td = document.createElement('td'));
            console.log(images[maze[i][j]]);
            td.appendChild(images[maze[i][j]]);
        }
    }
};
request.send();
