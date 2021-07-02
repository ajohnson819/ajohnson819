def theBoard = {
    'topL': ' ', 'topM': ' ', 'topR': ' ', 
    'midL': ' ', 'midM': ' ', 'midR': ' ',
    'botL': ' ', 'botM': ' ', 'botR': ' ',
    }

 def printBoard(board): 
     print(board['topL'] + '|' + board['topM'] + '|' + board['topR'] + '|')
     print('-+-+-')
     print(board['midL'] + '|' + board['midM'] + '|' + board['midR'] + '|')
     print('-+-+-')
     print(board['botL'] + '|' + board['botM'] + '|' + board['botR'] + '|')   

turn = 'X'
for i in range(9):
    printBoard(theBoard)
    print('Turn for' + '' + turn + '. Move on which space?')
    move = input()
    theBoard[move] = turn
    if turn == 'X':
        turn = 'O'
    printBoard(theBoard)
    


