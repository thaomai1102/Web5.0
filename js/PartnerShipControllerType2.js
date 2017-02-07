class PartnerShipControllerType2 extends ShipController {
  constructor(x, y, configs) {
    super(
      x,
      y,
      "Spaceship1-Partner.png",
      configs
    );

    this.configs.frameNameDefault = "Spaceship2-Partner.png";
    this.configs.frameNameRight = "Spaceship2Right-Partner.png";
    this.configs.frameNameLeft = "Spaceship2Left-Partner.png";
  }
}
