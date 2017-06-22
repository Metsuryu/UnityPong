#pragma strict

var ballSpeed: float = 85;

function Start() {
    yield WaitForSeconds(0.1);
    startBall();
}

function startBall() {
    var startDirection = Random.Range(0f, 1f);
    if (startDirection <= 0.5) {
        //Right
        GetComponent.<Rigidbody2D>().AddForce(new Vector2(ballSpeed, 10));
    } else {
        //Left
        GetComponent.<Rigidbody2D>().AddForce(new Vector2(-ballSpeed, -10));
    };
}

function resetBall() {
    GetComponent.<Rigidbody2D>().velocity.x = 0;
    GetComponent.<Rigidbody2D>().velocity.y = 0;
    transform.position.x = 0;
    transform.position.y = 0;
    yield WaitForSeconds(0.1);
    startBall();
}

var ballHitAudio: AudioSource;
ballHitAudio = GetComponent.<AudioSource>();
function OnCollisionEnter2D (colInfo : Collision2D) {

    if (colInfo.collider.tag == "Player") {
        var velY = GetComponent.<Rigidbody2D>().velocity.y;
        GetComponent.<Rigidbody2D>().velocity.y = velY / 2 + colInfo.collider.GetComponent.<Rigidbody2D>().velocity.y / 2;
        var randomPitch = Random.Range(0.95f, 1.05f);
        ballHitAudio.pitch = randomPitch;
        ballHitAudio.Play();
    }
}

