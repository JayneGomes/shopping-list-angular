import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ItemList } from './item-list';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-lista-compras',
  imports: [FormsModule, NgClass],
  templateUrl: './lista-compras.component.html',
  styleUrl: './lista-compras.component.scss',
})
export class ListaComprasComponent {
  item: string = '';
  list: ItemList[] = [];

  addItem() {
    let itemList = new ItemList();
    itemList.name = this.item;
    itemList.id = this.list.length + 1;

    this.list.push(itemList);

    this.item = '';
  }

  checkItem(item: ItemList) {
    item.done = !item.done;
  }

  clearList() {
    this.list = [];
  }
}
