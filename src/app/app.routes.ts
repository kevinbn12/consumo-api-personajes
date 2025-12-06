import { Routes } from '@angular/router';
import { RickAndMortyList } from './RickAndMorty/rick-and-morty-list/rick-and-morty-list';
import { RickAndMortyDetail } from './RickAndMorty/rick-and-morty-detail/rick-and-morty-detail';
import { SimpsonsList } from './Simpsons/simpsons-list/simpsons-list';
import { SimpsonsDetail } from './Simpsons/simpsons-detail/simpsons-detail';
import { DragonBallDetail } from './DragonBall/dragon-ball-detail/dragon-ball-detail';
import { DragonBallList } from './DragonBall/dragon-ball-list/dragon-ball-list';

export const routes: Routes = [
    {path: 'RickAndMorty', component: RickAndMortyList},
    {path: 'RickAndMorty/:id', component: RickAndMortyDetail},
    {path: 'Simpsons', component: SimpsonsList},
    {path: 'Simpsons/:id', component: SimpsonsDetail},
    {path: 'DragonBall', component: DragonBallList},
    {path: 'DragonBall/:id', component: DragonBallDetail},
    {path: '**' , redirectTo: 'RickAndMorty', pathMatch:'full'}
];
