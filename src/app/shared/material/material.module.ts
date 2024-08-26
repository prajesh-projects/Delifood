import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatChipsModule } from '@angular/material/chips';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRippleModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSliderModule } from '@angular/material/slider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatRadioModule} from '@angular/material/radio';
import {MatMenuModule} from '@angular/material/menu';

const materialM = [
  MatButtonModule,
  MatInputModule,
  MatFormFieldModule,
  MatChipsModule,
  MatCheckboxModule,
  MatRippleModule,
  MatSelectModule,
  MatDialogModule,
  MatButtonToggleModule,
  MatTabsModule,
  MatSliderModule,
  MatExpansionModule,
  MatProgressBarModule,
  MatTooltipModule,
  MatRadioModule,
  MatMenuModule
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    materialM
  ], exports: [
    materialM
  ]
})
export class MaterialModule { }
