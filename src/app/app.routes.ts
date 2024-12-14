import { Routes } from '@angular/router';
import {EditorComponent} from './editor/editor.component';
export const routes: Routes = [
    {path:'',
     redirectTo:'dataBinding',
     pathMatch:   'full'
    },
    {
        path:'editor',
        component: EditorComponent
    },
    { path: '**', 
     redirectTo: '' 
    }, // Wildcard route
];
