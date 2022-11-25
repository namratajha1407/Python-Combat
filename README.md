# Python-Combat

This is BNFN - By Noobs For Noobs; a coding combat game in Python. The home page contains a direct reference to Python Tutorial of W3Schools (https://www.w3schools.com/python/).
The home page contains Level 0, which is basically to help you learn the basic movement functions for the warrior. You have to reach the bottom right corner to win.
Then you get the option to proceed further or play again.

Writing and running your code-

You have the option to directly write in our syntax highlighting code editor, or you can upload a file with your code written in it by using the "Choose File" button. 

To run the code, you can either press the run button or click the "F5" button on your keyboard.

About the Game-

Levels:

Level 1- Basic syntax and program flow

  In this level, you are supposed to reach the bottom right corner after collecting all the coins. The difference from Level 0 is that the impact of order of movement functions is shown here.
  Also you should write each command in a seperate line, that is how Python understands the commands.  A Python program is executed line by line, which means the line written first is executed first.
  
Level 2- Lists
  
  In this level, you have to collect the names of all the people present in the arena. The note_name() function helps you to note the name of the person on your right. 
  In the end, you have to print the list of the names you just collected.
  
Level 3- For Loop

  In this level, you have to reach the bottom right corner preventing water. Here, you learn the power of for loops in python. For loops are used to execute a set of commands a certain number of times.
  In this level, you can use each movement function atmost once, otherwise it shows you a prompt.
  
Level 4- Conditional Statements
  
   In this level, you have to reach the bottom right corner, after attacking all the enemies present on the arena. The inbuilt function enemy() tells you whether there is an enemy on your right.
   You have to attack the enemy from his left (i,e when he is on your right), and you have to unveils any friend on the arena from his left. So, first check whether there is enemy on you right, then either use attack() function
   which bombs the person on your right, or unveil_friend() function which unveils the person on your right. But, beware! You don't want to kill your friend, or get bombed by your enemy!
   This level is used to teach you if-else statements.
   
Level 5- Functions

  In this level, you have to use recursion to check at each point whether the cell on your right is the not forbidden one in water. The end goal is to reach the bottom right corner
  without drowning in water. forbidden() function tells whether cell on your right is forbidden or not.
  
  
Inbuilt Functions:

moveRight()- warrior moves to the right

moveLeft()- warrior moves to the left

moveUp()- warrior moves up

moveDown()- warrior moves down

note_name()- returns string, which is the name of the person on your right

attack()- attacks person on your right

enemy()- checks whether person on your right is enemy or not

unveil_friend()- unveils person on your right

forbidden()- checks whether cell on your right is forbidden or not
  
