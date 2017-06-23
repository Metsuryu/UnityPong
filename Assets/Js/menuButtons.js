#pragma strict



function OnGUI() {


    var sWidth = Screen.width;
    var buttonW = 100;
    var buttonH = 25;
    var centerX = (sWidth / 2) - (buttonW / 2);
    var ttX = centerX + buttonW + 50;
    var ttY = 150;
    var localMPW = buttonW + 20;
    var localMPX = centerX - 10;
    var labelCenterX = centerX + 15;

    if (GUI.Button(Rect(localMPX, 50, localMPW, buttonH),
        GUIContent("Local Multiplayer", "Play against another player locally.")) ) {
        SceneManagement.SceneManager.LoadSceneAsync("Pong");
    }



    GUI.Box(new Rect(centerX, 100, 100, 90), "Play vs AI");
    
    GUI.Button(Rect(centerX, 150, buttonW, buttonH),
        GUIContent("Erratic", "The AI player moves randomly."));
    GUI.Button(Rect(centerX, 190, buttonW, buttonH),
        GUIContent("Following", "The AI player follows the ball."));
    GUI.Button(Rect(centerX, 230, buttonW, buttonH),
        GUIContent("Predictive", "The AI player tries to predict the ball trajectory."));

    // Display the tooltip from the element that has mouseover or keyboard focus
    GUI.Label(Rect(ttX, ttY, 100, 100), GUI.tooltip);
}