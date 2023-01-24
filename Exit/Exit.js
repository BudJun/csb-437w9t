/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Exit extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("exit", "./Exit/costumes/exit.svg", {
        x: 11.103171892094338,
        y: 11.260999999999967
      })
    ];

    this.sounds = [new Sound("pop", "./Exit/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.BROADCAST, { name: "start" }, this.whenIReceiveStart),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(Trigger.BROADCAST, { name: "exit" }, this.whenIReceiveExit),
      new Trigger(
        Trigger.BROADCAST,
        { name: "settings" },
        this.whenIReceiveSettings
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "defeat" },
        this.whenIReceiveDefeat
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "victory" },
        this.whenIReceiveVictory
      )
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveStart() {
    this.visible = true;
  }

  *whenthisspriteclicked() {
    this.broadcast("exit");
    this.broadcast("reset");
  }

  *whenIReceiveExit() {
    this.visible = false;
    this.stage.costume = "start page";
  }

  *whenIReceiveSettings() {
    this.visible = true;
  }

  *whenIReceiveDefeat() {
    this.visible = true;
  }

  *whenIReceiveVictory() {
    this.visible = true;
  }
}
