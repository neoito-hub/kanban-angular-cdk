import { Component, Renderer2, ElementRef } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
  CdkDrag,
  CdkDragEnter
} from '@angular/cdk/drag-drop';

/**
 * @title Drag&Drop enter predicate
 */
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  // Lead, Lost, Won,
  // Contract Signed, Production, Billing, Done.
  rules = {
    Lead: {
      Won: true,
      Lost: true
    },
    Lost: {
      Done: true
    },
    Won: {
      'Contract Signed': true
    },
    'Contract Signed': {
      Production: true
    },
    Production: {
      Billing: true
    },
    Billing: {
      Done: true
    },
    Done: {}
  };

  boards = [
    {
      name: 'Lead',
      items: [1, 2, 3, 4, 5, 6, 7, 8]
    },
    {
      name: 'Lost',
      items: []
    },

    {
      name: 'Won',
      items: []
    },
    {
      name: 'Contract Signed',
      items: []
    },
    {
      name: 'Production',
      items: []
    },
    {
      name: 'Billing',
      items: []
    },
    {
      name: 'Done',
      items: []
    }
  ];

  dragStyle = 'default';
  activeBoard = null;
  isBoardAllowed(boardName) {
    if (!this.activeBoard) return false;
    return this.rules[this.activeBoard][boardName];
  }

  xboard(boardName) {
    if (!this.activeBoard) return false;
    return !this.rules[this.activeBoard][boardName];
  }

  drop(event: any) {
    this.dragStyle = 'default';
    this.activeBoard = null;
    let currentContainer = event.item.dropContainer.id;
    console.log(currentContainer);
    let targetContainer = event.container.id;
    let allowed = this.rules[currentContainer][targetContainer];
    if (!allowed) {
      return;
    }

    if (event.previousContainer === event.container) {
      // moveItemInArray(
      //   event.container.data,
      //   event.previousIndex,
      //   event.currentIndex
      // );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

  entered(event: any) {
    let currentContainer = event.item.dropContainer.id;
    let targetContainer = event.container.id;
    this.activeBoard = currentContainer;
    if (currentContainer === targetContainer) {
      this.dragStyle = 'default';
      return;
    }
    if (this.rules[currentContainer][targetContainer]) {
      this.dragStyle = 'allow';
    } else {
      this.dragStyle = 'deny';
    }

    // this.renderer.setStyle(
    //   event.item.getPlaceholderElement(),
    //   'backgroundColor',
    //   'green'
    // );
    // this.renderer.setStyle(event.item.getPlaceholderElement(), 'width', '0');
    // this.renderer.setStyle(event.item.getPlaceholderElement(), 'height', '0');

    // this.renderer.setStyle(
    //   event.item.getPlaceholderElement(),
    //   'visibility',
    //   'hidden'
    // );
    // event.item.getPlaceholderElement().style.backgroundColor = '#63b566';
    // event.item.getRootElement().style.backgroundColor = '#63b566';
  }

  dragStarted(item: any) {
    this.activeBoard = item.source.dropContainer.id;
  }
  /** Predicate function that doesn't allow items to be dropped into a list. */
  noReturnPredicate(item: any, item1: any, item2: any, item3: any) {
    // let currentContainer = item.dropContainer.id;
    // let targetContainer = item1.id;

    // if (this.rules[currentContainer][targetContainer]) return true;
    // return false;
    // console.log(this.activeBoard);
    // this.activeBoard = currentContainer;

    return true;
  }
}
