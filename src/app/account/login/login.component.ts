import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AutenticacaoService } from 'src/app/autenticacao/autenticacao.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit, OnDestroy {
  usuario = '';
  senha = '';

  private subscriptions = new Subscription();

  constructor(private authService: AutenticacaoService,
    private router: Router) {}

  ngOnInit(): void {}

  login() {
    this.authService.autenticar(this.usuario, this.senha).subscribe(
      () => {
        this.router.navigate(['home'])
        console.log('Autenticado com sucesso!');
      },
      (error) => {
        alert('Usuário ou senha inválido');
        console.log(error);
      }
    );
    console.log(this.usuario);
    console.log(this.senha);
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
}
