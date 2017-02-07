class PartnerShipControllerType1 extends ShipController {
  constructor(x, y, configs) {
    super(
      x,
      y,
      "Spaceship1-Partner.png",
      configs
    );

    this.configs.frameNameDefault = "Spaceship1-Partner.png";
    this.configs.frameNameRight = "Spaceship1Right-Partner.png";
    this.configs.frameNameLeft = "Spaceship1Left-Partner.png";
  }
}
