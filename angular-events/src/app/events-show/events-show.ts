import { Component } from '@angular/core';
import { IEvent } from '../interfaces/i-event';
import { CurrencyPipe, DatePipe, TitleCasePipe } from '@angular/common';
import { EventFilterPipe } from '../pipes/event-filter-pipe';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-events-show',
  imports: [DatePipe, CurrencyPipe, TitleCasePipe, EventFilterPipe, FormsModule],
  templateUrl: './events-show.html',
  styleUrl: './events-show.css',
})
export class EventsShow {
  events: IEvent[] = [
    {
      title: 'Discoteca spook',
      image: '/images/spook.jpg',
      date: '2026-04-23',
      description:
        'Spook es un icono de la noche electrónica, donde música, luces y energía se fusionan en una experiencia única que marca generaciones y convierte cada noche en algo inolvidable.',
      price: 23,
    },
    {
      title: 'Boda mujer contra mujer',
      image: '/images/boda.jpg',
      date: '2026-02-10',
      description:
        'Una boda es la celebración del amor, un día especial donde se unen emociones, familia y amigos para compartir momentos únicos que quedarán grabados para siempre.',
      price: 59.99,
    },
    {
      title: 'Festival de música urbana',
      image: '/images/urbana.jpg',
      date: '2026-06-15',
      description:
        'Un festival lleno de ritmo y energía donde los mejores artistas urbanos se reúnen para ofrecer una experiencia musical intensa y vibrante al aire libre.',
      price: 35,
    },
    {
      title: 'Concierto acústico íntimo',
      image: '/images/intimo.jpg',
      date: '2026-03-05',
      description:
        'Un concierto cercano y especial en un ambiente reducido, donde la música en directo y la conexión con el artista crean una experiencia única.',
      price: 18,
    },
    {
      title: 'Evento corporativo networking',
      image: '/images/networking.jpg',
      date: '2026-05-20',
      description:
        'Un encuentro profesional pensado para conectar ideas, personas y oportunidades en un entorno dinámico, moderno y cuidadosamente organizado.',
      price: 0,
    },
  ];

  newEvent: IEvent = {
    title: '',
    description: '',
    image: '',
    price: 0,
    date: '',
  };

  changeImage(fileInput: HTMLInputElement) {
    if (!fileInput.files || fileInput.files.length === 0) {
      return;
    }
    const reader: FileReader = new FileReader();
    reader.readAsDataURL(fileInput.files[0]);
    reader.addEventListener('loadend', (e) => {
      this.newEvent.image = reader.result;
    });
  }
  addEvent() {
    this.events.push(this.newEvent);

    this.newEvent = {
      title: '',
      description: '',
      image: '',
      price: 0,
      date: '',
    };
  }

  search: string = '';

  orderDate() {
    this.search = '';
    this.events = [...this.events].sort(
      (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime(),
    );
  }

  orderPrice() {
    this.search = '';
    this.events = [...this.events].sort((a, b) => a.price - b.price);
  }
}
