c = 0
if forbidden():
    moveDown()
    c=+1
    if forbidden():
        moveDown()
        c+=1
        if forbidden():
            moveDown()
            c+=1
            moveRight()
        else:
            moveRight()
    else:
        moveRight()
else:
    moveRight()
moveRight()
moveRight()
while c<3:
    moveDown()
    c+=1