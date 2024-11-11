import { Component, ElementRef } from '@angular/core';
import { GifsService } from '../../../gifs/services/gifs.services';
import { Gif } from '../../../gifs/interfaces/gifs.interfaces';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

  constructor(private gifsService: GifsService) {}

  get tags(): string[]{
    return this.gifsService.tagsHistory;
  }

  public searchTag(tag: string): void {
    this.gifsService.searchTag(tag);

  }

}
