'use strict'
 function getVariants() {
     var initPose = document.getElementById('pose').value;
     if(initPose === '') {
         alert('Error! Please, enter initial position!')
     }

     var poseInBoard;
     var varOfNextSteps = [];
     // define chess board
     var chessBoard = [
        ['A8', 'B8', 'C8', 'D8', 'E8', 'F8', 'G8', 'H8'],
        ['A7', 'B7', 'C7', 'D7', 'E7', 'F7', 'G7', 'H7'],
        ['A6', 'B6', 'C6', 'D6', 'E6', 'F6', 'G6', 'H6'],
        ['A5', 'B5', 'C5', 'D5', 'E5', 'F5', 'G5', 'H5'],
        ['A4', 'B4', 'C4', 'D4', 'E4', 'F4', 'G4', 'H4'],
        ['A3', 'B3', 'C3', 'D3', 'E3', 'F3', 'G3', 'H3'],
        ['A2', 'B2', 'C2', 'D2', 'E2', 'F2', 'G2', 'H2'],
        ['A1', 'B1', 'C1', 'D1', 'E1', 'F1', 'G1', 'H1']
    ];
     // find input data position in chess board
     var flag = 0;
    for (var i = 0; i < chessBoard[1].length; i++) {
        for (var j = 0; j < chessBoard[1].length; j++) {
            if(chessBoard[i][j] === initPose) {
                poseInBoard = [i, j];
                flag = 1;
                break;
            }

        }
        if (flag) break;
    }
    // find variants of next steps
     varOfNextSteps = nextStep(poseInBoard[0], poseInBoard[1], chessBoard)
    alert( varOfNextSteps );
 }
 function nextStep(i, j, chessBoard) {
    var dir = {
        '1': 'up',
        '2': 'right',
        '3': 'down',
        '4': 'left'
    };
    for (var nameDir in dir) {
        switch (dir[nameDir]) {
            case 'up':
                var next_i = i - 2;
                var next_j = [j + 1, j - 1];
                if((next_i < 0)) {
                    var nextStepToUp = [];
                    break;
                } else if(next_j[1] < 0) {
                    var nextStepToUp = [chessBoard[next_i][next_j[0]]];
                    break;
                } else if(next_j[0] > 7) {
                    var nextStepToUp = [chessBoard[next_i][next_j[1]]];
                    break;
                }
                var nextStepToUp = [chessBoard[next_i][next_j[0]], chessBoard[next_i][next_j[1]]];
                break;
            case 'right':
                var next_i = [i + 1, i - 1];
                var next_j = j + 2;
                if(next_j > 7) {
                    var nextStepToRight = [];
                    break;
                } else if(next_i[1] < 0) {
                    var nextStepToRight = [chessBoard[next_i[0]][next_j]];
                    break;
                } else if(next_i[0] > 7) {
                    var nextStepToRight = [chessBoard[next_i[1]][next_j]];
                    break;
                }
                var nextStepToRight = [chessBoard[next_i[0]][next_j], chessBoard[next_i[1]][next_j]];
                break;
            case 'down':
                var next_i = i + 2;
                var next_j = [j + 1, j - 1];
                if(next_i > 7) {
                    var nextStepToDown = [];
                    break;
                } else if(next_j[1] < 0) {
                    var nextStepToDown = [chessBoard[next_i][next_j[0]]];
                    break;
                } else if(next_j[0] > 7) {
                    var nextStepToDown = [chessBoard[next_i][next_j[1]]];
                    break;
                }
                var nextStepToDown = [chessBoard[next_i][next_j[0]], chessBoard[next_i][next_j[1]]];
                break;
            case 'left':
                var next_i = [i + 1, i - 1];
                var next_j = j - 2;
                if(next_j < 0) {
                    var nextStepToLeft = [];
                    break;
                } else if(next_i[1] < 0) {
                    var nextStepToLeft = [chessBoard[next_i[0]][next_j]];
                    break;
                } else if(next_i[0] > 7) {
                    var nextStepToLeft = [chessBoard[next_i[1]][next_j]];
                    break;
                }
                var nextStepToLeft = [chessBoard[next_i[0]][next_j], chessBoard[next_i[1]][next_j]];
                break;
            default:
                alert('Error!');
        }
    }
    var arr = [nextStepToUp, nextStepToRight, nextStepToDown, nextStepToLeft];
    var nextStep = arr.filter(function(el) {
        if(el.length > 0) return el;
    });
    return nextStep;
 }