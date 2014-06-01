// I worked on this mission 1 through 3 by myself. i worked on mission 4- 12 with Pattie O'Neil.
 
// For each mission, write the title as a comment. (Shown here). Also include pseudocode as a comment. 
// Note: to make commenting easier, you can highlight the section you want to comment and hold 
// command + / This will comment the line. 
 
//Title-Rescue Mission:
//Deleted move right
//move up 1x
//move right 1x
//move right 1x 
//move down 1x
//attack enemy


//Title- Grab the Mushroom 
//move up 1x
//move right 1x
//move left 1x
//move up 1x
//attack enemy

//Title- Drink Me:
//move right 1x
//attack enemy
//move right 1x
//move down 1x
//move up 1x
//move right 1x
//attack enemy

//Title - Taunt the Guards:
//move right 1x
//bust down door
//move right 1x
//say something
//move left 1x
//move left 1x
//say attack
//move right 1x
//say "Follow me"
//move right 1x
//move right 1x
//move up 1x
//move right 1x
//say "Nananana!"
//move down 1x
//move right 1x
//move up 1x
//move right 1x

//Title - It's a Trap:
//move down 1x
//move down 1x
//say "Nanananana!"
//move up 1x
//move up 1x
//move up 1x

//Title - Prison Break

//Title -Taunt:
// say "You smell bad"
// say "You're a brat"
// say "put down the axe and fight like a man"
//say crybaby

//Title - Cowardly Taunt:
//moved x: 50 y:22
//say "come to your destiny"
//moved  x:70 y:10

//Title - Commanding Followers:
//say "Follow me!"
//move x: 64 y:41
//say "Attack!"

//Title - Mobile Artillery
//move x:56 y:42 
//attack x:70 y:56
//attack x:66 y:51
//attack x49 y:66
//attack x:52 y:56

//Initial Solution

//Rescue Mission
this.moveUp();
this.moveRight();
this.moveRight();
this.moveDown();
this.attackNearbyEnemy();

//Grab the Mushroom
this.moveUp();
this.moveRight();
this.moveLeft();
this.moveUp();
this.attackNearbyEnemy();

//Drink  Me
this.moveRight();
this.attackNearbyEnemy();
this.moveRight();
this.moveDown();
this.moveUp();
this.moveRight();
this.attackNearbyEnemy();

//Taunt the Guards
this.moveRight();
this.bustDownDoor();
this.moveRight();
this.say("Hey there!");
this.moveLeft();
this.moveLeft();
this.say("Attack!");
this.moveRight();
this.say("Follow me!");
this.moveRight();
this.moveRight();
this.moveUp();
this.moveRight();
this.say("Nananana!");
this.moveDown();
this.moveRight();
this.moveUp();
this.moveRight();

//Prison Break
if(name === "William")
    return true;
if(name === "Krogg")
    return false;  // <-- Start here; Krogg is not a friend!
if(name === "Lucas")
    return true;
if(name === "Brack")
    return false;
if(name === "Gort")
    return false;
if (name === "Marcus")
    return true;
if (name === "Robert")
    return true;
if name === "MARCUS")
    return false;
if (name === "Gordon")
    return true;

//Taunt
this.say("You smell bad");
this.say("you're a brat");
this.say("Put down the axe and fight like a man");
this.say("crybaby!");

//Cowardly Taunt
this.moveXY(50, 22);
this.say("Come to your destiny");
this.moveXY(70, 10);

//Commanding Followers
this.say("Follow me!");
this.moveXY(64, 41);
this.say("Attack!");

//Mobile artillery
this.moveXY(56, 42);
this.attackXY(70, 56);
this.attackXY(66, 51);
this.attackXY(49, 66);
this.attackXY(52, 56);



 
 
 
 
 
 
// Reflection:

1. "this" refers to an object. "this" can be used inside a function and cotains the value of the object
2. the point of () is to make the function run. 
3. the  semicolons are not needed in most cases, it just reads really well.  


// Write your reflection here.

The reading materials helped me a little to understand javascript somewhat. I am still a unclear about the concept.
I will do the codecademy track to help me understand javascript  a lot better. The game was kind of easy to follow thhough. 

I have several questions about Javascript. like creating a function amd method. Although, I read the reading materials
and practiced on the dev tools browser, i atill need more practice. 

Unfortunately, I am not very confident with the learning competencies. I have to go through codecademy or get help 
with a tutor. 

I enjoyed playing the game. when I got to challenge 4 it became a little tricky. 

it was a lot of information to take on regarding javascript. 

