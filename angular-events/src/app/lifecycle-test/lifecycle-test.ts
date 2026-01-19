import { Component } from '@angular/core';

@Component({
  selector: 'app-lifecycle-test',
  imports: [],
  templateUrl: './lifecycle-test.html',
  styleUrl: './lifecycle-test.css',
})
export class LifecycleTest {

  ngOnInit(){
    console.log('Se ha creado el componente');
  }

  ngOnDestroy(){
    console.log('El componente ha desaparecido de la vista.')
  }
}
