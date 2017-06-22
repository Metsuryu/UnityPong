#pragma strict

var moveUp : KeyCode;
var moveDown : KeyCode;

var speed : float = 10;

function Update() {
    //Players Movement
    if (Input.GetKey(moveUp)) {
        GetComponent.<Rigidbody2D>().velocity.y = speed;
    } else if (Input.GetKey(moveDown)) {
        GetComponent.<Rigidbody2D>().velocity.y = speed *-1;
    } else {
        GetComponent.<Rigidbody2D>().velocity.y = 0;
    }
	
}
