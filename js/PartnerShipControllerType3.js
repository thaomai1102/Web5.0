class PartnerShipControllerType3 extends ShipController {
  constructor(x, y, configs) {
    super(
      x,
      y,
      "Spaceship1-Partner.png",
      configs
    );

    this.configs.frameNameDefault = "Spaceship3-Partner.png";
    this.configs.frameNameRight = "Spaceship3Right-Partner.png";
    this.configs.frameNameLeft = "Spaceship3Left-Partner.png";
  }
}
