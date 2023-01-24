/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Bullet extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("bullet", "./Bullet/costumes/bullet.svg", {
        x: 363.42473207152113,
        y: 268.498498498499
      })
    ];

    this.sounds = [new Sound("pop", "./Bullet/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.KEY_PRESSED,
        { key: "space" },
        this.whenKeySpacePressed
      ),
      new Trigger(Trigger.CLONE_START, this.startAsClone),
      new Trigger(Trigger.BROADCAST, { name: "exit" }, this.whenIReceiveExit),
      new Trigger(Trigger.BROADCAST, { name: "reset" }, this.whenIReceiveReset),
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

  *whenKeySpacePressed() {
    if (this.stage.vars.start == "true") {
      this.createClone();
    }
  }

  *startAsClone() {
    this.goto(this.sprites["Turrent"].x, this.sprites["Turrent"].y);
    this.direction = this.radToScratch(
      Math.atan2(this.mouse.y - this.y, this.mouse.x - this.x)
    );
    this.visible = true;
    yield* this.glide(this.stage.vars.bSpeed, this.mouse.x, this.mouse.y);
    this.deleteThisClone();
  }

  *whenIReceiveExit() {
    this.visible = false;
    this.deleteThisClone();
  }

  *whenIReceiveReset() {
    this.visible = false;
    this.deleteThisClone();
  }

  *whenIReceiveDefeat() {
    this.visible = false;
  }

  *whenIReceiveVictory() {
    this.visible = false;
  }
}
