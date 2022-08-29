import { MessageModule } from './../components/message/message.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { AccountComponent } from './account.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AccountComponent, LoginComponent],
  imports: [CommonModule, AccountRoutingModule, FormsModule, MessageModule],
  exports: [AccountComponent],
})
export class AccountModule {}
