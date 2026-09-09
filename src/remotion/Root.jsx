import {Composition,Folder} from 'remotion';
import {SportsIntro} from './SportsIntro';
import {Scene49ers} from './Scene49ers';
import {SceneWarriors} from './SceneWarriors';
import {SceneMessi} from './SceneMessi';
export const RemotionRoot=()=> <><Folder name="Editable-scenes"><Composition id="Scene49ers" component={Scene49ers} durationInFrames={120} fps={30} width={1920} height={1080}/><Composition id="SceneWarriors" component={SceneWarriors} durationInFrames={120} fps={30} width={1920} height={1080}/><Composition id="SceneMessi" component={SceneMessi} durationInFrames={120} fps={30} width={1920} height={1080}/></Folder><Composition id="AverySportsIntro" component={SportsIntro} durationInFrames={330} fps={30} width={1920} height={1080}/></>
