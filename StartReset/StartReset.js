/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class StartReset extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("reset", "./StartReset/costumes/reset.svg", {
        x: 42.32128732359902,
        y: 18.440442919075167
      }),
      new Costume("start", "./StartReset/costumes/start.svg", {
        x: 60.00000000000014,
        y: 26.144000000000005
      })
    ];

    this.sounds = [new Sound("pop", "./StartReset/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(Trigger.BROADCAST, { name: "start" }, this.whenIReceiveStart),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked2),
      new Trigger(
        Trigger.BROADCAST,
        { name: "settings" },
        this.whenIReceiveSettings
      ),
      new Trigger(Trigger.BROADCAST, { name: "exit" }, this.whenIReceiveExit),
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
    this.visible = true;
    this.stage.vars.start = "false";
    this.stage.costume = "start page";
    this.costume = "start";
    this.goto(2, -65);
  }

  *whenthisspriteclicked() {
    this.broadcast("start");
  }

  *whenIReceiveStart() {
    this.stage.vars.start = "true";
    this.goto(196, -158);
    this.costume = "reset";
    this.stage.costume = "battle-ground";
  }

  *whenthisspriteclicked2() {
    if (this.costume.name == "reset") {
      this.broadcast("reset");
    }
  }

  *whenIReceiveSettings() {
    this.visible = false;
  }

  *whenIReceiveExit() {
    this.visible = true;
    this.stage.vars.start = "false";
    this.stage.costume = "start page";
    this.costume = "start";
    this.goto(2, -65);
  }

  *whenIReceiveDefeat() {
    this.visible = false;
  }

  *whenIReceiveVictory() {
    this.visible = false;
  }
}
