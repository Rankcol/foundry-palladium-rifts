Hooks.once('init', async function() {
  console.log("Initializing Palladium RIFTS System");

  CONFIG.Actor.documentClass = RiftsActor;

  Actors.unregisterSheet("core", ActorSheet);
  Actors.registerSheet("palladium-rifts", RiftsActorSheet, { makeDefault: true });
});

class RiftsActor extends Actor {}

class RiftsActorSheet extends ActorSheet {
  static get defaultOptions() {
    return mergeObject(super.defaultOptions, {
      classes: ["palladium-rifts", "sheet", "actor"],
      template: "systems/palladium-rifts/templates/actor-sheet.html",
      width: 600,
      height: 800,
    });
  }

  getData() {
    const data = super.getData();
    return data;
  }
}