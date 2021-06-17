import Amplifier from './Amplifier';
import PopcornPopper from './PopcornPopper';
import Projector from './Projector';
import Screen from './Screen';
import StreamingPlayer from './StreamingPlayer';
import TheatreLights from './TheatreLights';
import Tuner from './Tuner';

export default class HomeTheatreFacade {
  private amplifier: Amplifier;
  private lights: TheatreLights;
  private player: StreamingPlayer;
  private popper: PopcornPopper;
  private projector: Projector;
  private screen: Screen;
  private tuner: Tuner;

  constructor(
    amplifier: Amplifier,
    lights: TheatreLights,
    player: StreamingPlayer,
    popper: PopcornPopper,
    projector: Projector,
    screen: Screen,
    tuner: Tuner
  ) {
    this.amplifier = amplifier;
    this.lights = lights;
    this.player = player;
    this.popper = popper;
    this.projector = projector;
    this.screen = screen;
    this.tuner = tuner;
  }

  watchMovie(movie: string): void {
    console.log('Get ready to watch a movie...');
    this.popper.on();
    this.popper.pop();
    this.lights.dim(10);
    this.screen.down();
    this.projector.on();
    this.projector.wideScreenMode();
    this.amplifier.on();
    this.amplifier.setStreamingPlayer(this.player);
    this.amplifier.setSurroundSound();
    this.amplifier.setVolume(5);
    this.player.on();
    this.player.play(movie);
  }

  endMovie(): void {
    console.log('Shutting movie threatre down...');
    this.popper.off();
    this.lights.on();
    this.screen.up();
    this.projector.off();
    this.amplifier.off();
    this.player.stop();
    this.player.off();
  }

  listenToRadio(frequency: number): void {
    console.log('Tuning in the airwaves...');
    this.tuner.on();
    this.tuner.setFrequency(frequency);
    this.amplifier.on();
    this.amplifier.setVolume(5);
    this.amplifier.setTuner(this.tuner);
  }

  endRadio(): void {
    console.log('Shutting down the tuner...');
    this.tuner.off();
    this.amplifier.off();
  }
}
