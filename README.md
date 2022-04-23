## Battleship - simple browser game

The goal of creating this simple game is to learn the basics of html, css and javascript. The game works as follows:

We have a field with dimensions 7x7. Behind each element of the field can be a ship, with 3 smaller ships representing one larger ship. When we sink a larger ship we get the message that the ship is sunk. If we miss, we get the message that we missed the ship. The goal of this game is to sink 3 large ships (15 smaller ones) in as few attempts as possible.

### Rules of this game

When we start the game (index.html), we get a field with dimensions 7x7. In the lower right corner we have a field in which we enter the coordinates (eg A0). When we miss the ship, we get the message "miss" in the entered field, and if we hit the ship, the ship is shown on the map. An appropriate message is displayed in the upper left corner regarding whether the ship was hit or not.
