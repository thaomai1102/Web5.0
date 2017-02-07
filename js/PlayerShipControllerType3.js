class PlayerShipControllerType3 extends ShipController {
    constructor(x, y, configs) {
        super(
            x,
            y,
            "Spaceship3-Player.png",
            configs
        );

        this.configs.frameNameDefault = "Spaceship3-Player.png";
        this.configs.frameNameRight = "Spaceship3Right-Player.png";
        this.configs.frameNameLeft = "Spaceship3Left-Player.png";
    }
}
