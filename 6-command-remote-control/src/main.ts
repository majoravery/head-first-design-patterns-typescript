import { CeilingFan } from './classes/CeilingFan';
import { CeilingFanHighCommand } from './classes/CeilingFanHighCommand';
import { CeilingFanLowCommand } from './classes/CeilingFanLowCommand';
import { CeilingFanMediumCommand } from './classes/CeilingFanMediumCommand';
import { CeilingFanOffCommand } from './classes/CeilingFanOffCommand';
import { Command } from './interfaces/Command';
import { GarageDoor } from './classes/GarageDoor';
import { GarageDoorCloseCommand } from './classes/GarageDoorCloseCommand';
import { GarageDoorOpenCommand } from './classes/GarageDoorOpenCommand';
import { Light } from './classes/Light';
import { LightOffCommand } from './classes/LightOffCommand';
import { LightOnCommand } from './classes/LightOnCommand';
import { MacroCommand } from './classes/MacroCommand';
import { RemoteControl } from './classes/RemoteControl';
import { Stereo } from './classes/Stereo';
import { StereoOffCommand } from './classes/StereoOff';
import { StereoOnWithCdCommand } from './classes/StereoOnWithCdCommand';
import { TV } from './classes/TV';
import { TVOffCommand } from './classes/TVOffCommand';
import { TVOnCommand } from './classes/TVOnCommand';

class RemoteLoader {
  constructor() {
    const remoteControl: RemoteControl = new RemoteControl(7);
    const livingRoomLight: Light = new Light('Living Room');
    const kitchenLight: Light = new Light('Kitchen');
    const garageDoor: GarageDoor = new GarageDoor();
    const stereo: Stereo = new Stereo('Living Room');

    // Lights
    const livingRoomLightOn: LightOnCommand = new LightOnCommand(
      livingRoomLight
    );
    const livingRoomLightOff: LightOffCommand = new LightOffCommand(
      livingRoomLight
    );
    const kitchenLightOn: LightOnCommand = new LightOnCommand(kitchenLight);
    const kitchenLightOff: LightOffCommand = new LightOffCommand(kitchenLight);

    // Garage door
    const garageDoorOpen: GarageDoorOpenCommand = new GarageDoorOpenCommand(
      garageDoor
    );
    const garageDoorClose: GarageDoorCloseCommand = new GarageDoorCloseCommand(
      garageDoor
    );

    // Stereo
    const stereoOnWithCd: StereoOnWithCdCommand = new StereoOnWithCdCommand(
      stereo
    );
    const stereoOff: StereoOffCommand = new StereoOffCommand(stereo);

    // Set commands
    remoteControl.setCommand(0, livingRoomLightOn, livingRoomLightOff);
    remoteControl.setCommand(1, kitchenLightOn, kitchenLightOff);
    remoteControl.setCommand(2, garageDoorOpen, garageDoorClose);
    remoteControl.setCommand(3, stereoOnWithCd, stereoOff);

    remoteControl.toString();
    remoteControl.onButtonWasPushed(0);
    remoteControl.offButtonWasPushed(0);
    remoteControl.toString();
    remoteControl.undoButtonWasPushed();
    remoteControl.offButtonWasPushed(0);
    remoteControl.onButtonWasPushed(1);
    remoteControl.offButtonWasPushed(1);
    remoteControl.onButtonWasPushed(2);
    remoteControl.offButtonWasPushed(2);
    remoteControl.toString();
    remoteControl.onButtonWasPushed(3);
    remoteControl.offButtonWasPushed(3);
  }
}

// TODO: Quite unsure about the suggested undo implementation of ceiling fan though
class RemoteLoaderFanSpeed {
  constructor() {
    const remoteControl: RemoteControl = new RemoteControl(3);
    const ceilingFan: CeilingFan = new CeilingFan('Living Room');

    const ceilingFanLow: CeilingFanLowCommand = new CeilingFanLowCommand(
      ceilingFan
    );
    const ceilingFanMedium: CeilingFanMediumCommand = new CeilingFanMediumCommand(
      ceilingFan
    );
    const ceilingFanHigh: CeilingFanHighCommand = new CeilingFanHighCommand(
      ceilingFan
    );
    const ceilingFanOff: CeilingFanOffCommand = new CeilingFanOffCommand(
      ceilingFan
    );

    remoteControl.setCommand(0, ceilingFanLow, ceilingFanOff);
    remoteControl.setCommand(1, ceilingFanMedium, ceilingFanOff);
    remoteControl.setCommand(2, ceilingFanHigh, ceilingFanOff);

    remoteControl.toString();
    remoteControl.onButtonWasPushed(0);
    remoteControl.offButtonWasPushed(0);
    remoteControl.toString();
    remoteControl.undoButtonWasPushed();
    remoteControl.offButtonWasPushed(0);
    remoteControl.onButtonWasPushed(1);
    remoteControl.onButtonWasPushed(2);
    remoteControl.undoButtonWasPushed();
    remoteControl.offButtonWasPushed(2);
  }
}

class RemoteLoaderPartyMode {
  constructor() {
    const remoteControl: RemoteControl = new RemoteControl(7);
    const light: Light = new Light('Living Room');
    const tv: TV = new TV('Living Room');
    const garageDoor: GarageDoor = new GarageDoor();
    const stereo: Stereo = new Stereo('Living Room');

    const lightOn: LightOnCommand = new LightOnCommand(light);
    const tvOn: TVOnCommand = new TVOnCommand(tv);
    const garageDoorOpen: GarageDoorOpenCommand = new GarageDoorOpenCommand(
      garageDoor
    );
    const stereoOnWithCd: StereoOnWithCdCommand = new StereoOnWithCdCommand(
      stereo
    );

    const lightOff: LightOffCommand = new LightOffCommand(light);
    const tvOff: TVOffCommand = new TVOffCommand(tv);
    const garageDoorClose: GarageDoorCloseCommand = new GarageDoorCloseCommand(
      garageDoor
    );
    const stereoOff: StereoOffCommand = new StereoOffCommand(stereo);

    const partyModeOn: MacroCommand = new MacroCommand([
      lightOn,
      tvOn,
      garageDoorOpen,
      stereoOnWithCd,
    ]);
    const partyModeOff: MacroCommand = new MacroCommand([
      lightOff,
      tvOff,
      garageDoorClose,
      stereoOff,
    ]);

    remoteControl.setCommand(0, partyModeOn, partyModeOff);

    remoteControl.toString();
    console.log('--- Pushing Macro On ---');
    remoteControl.onButtonWasPushed(0);
    console.log('--- Pushing Macro Off ---');
    remoteControl.offButtonWasPushed(0);
  }
}

// new RemoteLoader();
// new RemoteLoaderFanSpeed();
new RemoteLoaderPartyMode();
