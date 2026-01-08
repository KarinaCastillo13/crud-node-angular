import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioService } from './services/usuario.service';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ButtonModule,
    TableModule,
    HttpClientModule,
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent implements OnInit {

  usuarios: any[] = [];

  nuevoUsuario = {
    nombre: '',
    correo: '',
    telefono: ''
  };

  constructor(private usuarioService: UsuarioService) {}

  ngOnInit(): void {
    this.cargarUsuarios(); // 👈 SOLO ESTO
  }

  cargarUsuarios() {
    this.usuarioService.listarUsuarios().subscribe({
      next: (data) => {
        console.log('Usuarios cargados:', data);
        this.usuarios = data;
      },
      error: (err) => {
        console.error('Error al cargar usuarios', err);
      }
    });
  }

  crearUsuario(form: any) {
  if (form.invalid) {
    return;
  }

  this.usuarioService.crearUsuario(this.nuevoUsuario).subscribe(() => {
    this.cargarUsuarios();
    form.resetForm();
  });
}


  eliminarUsuario(id: number) {
    if (confirm('¿Estás seguro de eliminar este usuario?')) {
      this.usuarioService.eliminarUsuario(id).subscribe(() => {
        alert('Usuario eliminado correctamente');
        this.cargarUsuarios();
      });
    }
  }
  usuarioEditando: any = null;
  editarUsuario(usuario: any) {
    this.usuarioEditando = { ...usuario };
  }
  
  guardarEdicion() {
    this.usuarioService
      .actualizarUsuario(this.usuarioEditando.id, this.usuarioEditando)
      .subscribe(() => {
        this.usuarioEditando = null;
        this.cargarUsuarios();
      });
  }
  
  cancelarEdicion() {
    this.usuarioEditando = null;
  }

}
