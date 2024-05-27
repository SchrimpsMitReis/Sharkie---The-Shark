/**
 * Manages the state of keyboard and mouse inputs within the game, tracking whether specific keys and buttons are pressed.
 * This allows other parts of the game to query the state of various inputs to determine how to respond to player actions.
 * @class
 */
class Keyboard{
    LEFT = false;
    RIGHT = false;
    UP = false;
    DOWN = false;
    SHIFT = false; // boost
    SPACE = false; // Melee
    SECONDARY = false; // e Taste
    ESCAPE = false;
    FULLSCREEN = false; // f Taste
    HELP = false;
    MOUSEBTN = false;
}