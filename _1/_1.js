/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class _1 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("20", "./_1/costumes/20.png", { x: 250, y: 250 }),
      new Costume("18", "./_1/costumes/18.png", { x: 250, y: 250 }),
      new Costume("16", "./_1/costumes/16.png", { x: 250, y: 250 }),
      new Costume("14", "./_1/costumes/14.png", { x: 250, y: 250 }),
      new Costume("12", "./_1/costumes/12.png", { x: 250, y: 250 }),
      new Costume("10", "./_1/costumes/10.png", { x: 250, y: 250 }),
      new Costume("8", "./_1/costumes/8.png", { x: 250, y: 250 }),
      new Costume("6", "./_1/costumes/6.png", { x: 250, y: 250 }),
      new Costume("4", "./_1/costumes/4.png", { x: 250, y: 250 }),
      new Costume("2", "./_1/costumes/2.png", { x: 250, y: 250 }),
      new Costume("0", "./_1/costumes/0.png", { x: 250, y: 250 })
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked3),
      new Trigger(Trigger.BROADCAST, { name: "start" }, this.whenIReceiveStart),
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
    this.stage.vars.hp = 20;
    this.visible = false;
  }

  *whenGreenFlagClicked2() {
    while (true) {
      if (this.stage.vars.hp == 20) {
        this.costume = 20;
      }
      if (this.stage.vars.hp == 18) {
        this.costume = 18;
      }
      if (this.stage.vars.hp == 16) {
        this.costume = 16;
      }
      if (this.stage.vars.hp == 14) {
        this.costume = 14;
      }
      if (this.stage.vars.hp == 12) {
        this.costume = 12;
      }
      if (this.stage.vars.hp == 10) {
        this.costume = 10;
      }
      yield;
    }
  }

  *whenGreenFlagClicked3() {
    while (true) {
      if (this.stage.vars.hp == 8) {
        this.costume = 8;
      }
      if (this.stage.vars.hp == 6) {
        this.costume = 6;
      }
      if (this.stage.vars.hp == 4) {
        this.costume = 4;
      }
      if (this.stage.vars.hp == 2) {
        this.costume = 2;
      }
      if (this.stage.vars.hp == 0) {
        this.costume = 0;
        this.broadcast("defeat");
        this.stage.costume = "defeat";
      }
      yield;
    }
  }

  *whenIReceiveStart() {
    this.visible = true;
  }

  *whenIReceiveExit() {
    this.visible = false;
  }

  *whenIReceiveReset() {
    this.stage.vars.hp = 20;
  }

  *whenIReceiveDefeat() {
    this.stage.vars.hp = 20;
    this.visible = false;
  }

  *whenIReceiveVictory() {
    this.stage.costume = "victory";
    this.visible = false;
  }
}
