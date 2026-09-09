import {Audio} from '@remotion/media';
import {TransitionSeries,linearTiming} from '@remotion/transitions';
import {fade} from '@remotion/transitions/fade';
import {staticFile} from 'remotion';
import {Scene49ers} from './Scene49ers';
import {SceneWarriors} from './SceneWarriors';
import {SceneMessi} from './SceneMessi';
export const SportsIntro=()=> <><Audio src={staticFile('assets/original-clubhouse-theme.wav')} volume={.3}/><TransitionSeries><TransitionSeries.Sequence durationInFrames={120} name="49ers"><Scene49ers/></TransitionSeries.Sequence><TransitionSeries.Transition presentation={fade()} timing={linearTiming({durationInFrames:15})}/><TransitionSeries.Sequence durationInFrames={120} name="Warriors"><SceneWarriors/></TransitionSeries.Sequence><TransitionSeries.Transition presentation={fade()} timing={linearTiming({durationInFrames:15})}/><TransitionSeries.Sequence durationInFrames={120} name="Messi"><SceneMessi/></TransitionSeries.Sequence></TransitionSeries></>
