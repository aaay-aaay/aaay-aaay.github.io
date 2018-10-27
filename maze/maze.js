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
    for (int i = 0; i < columnLength; i++) {
        mazeElement.addChild(tr = document.createElement('tr'));
        for (int j = 0; j < rowLength; j++) {
            mazeElement.addChild(td = document.createElement('td'));
            td.addChild(images[maze[i][j]]);
        }
    }
};
request.send();
