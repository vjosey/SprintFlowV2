import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { TeamsComponent } from 'src/app/pages/teams/teams.component';
import { BacklogComponent } from 'src/app/pages/backlog/backlog.component';
import { SprintsComponent } from 'src/app/pages/sprints/sprints.component';

import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';


export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'teams',           component: TeamsComponent },
    { path: 'backlog',        component: BacklogComponent },
    { path: 'sprints',         component: SprintsComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'tables',         component: TablesComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent }
];
