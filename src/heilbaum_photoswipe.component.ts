import {
  Component, ChangeDetectionStrategy, OnInit, AfterViewInit, ViewEncapsulation,
  ElementRef
} from "@angular/core";
import { photoswipeStyles, photoswipeDefaultSkin } from "./photoswipe/styles";
import { PhotoSwipeItem } from "./photoswipe/PhotoSwipeItem";
import { NavParams, ViewController } from "ionic-angular";
import photoswipeTemplate from "./photoswipe/template";
import { PhotoSwipe } from "./photoswipe/photoswipe";
import { PhotoSwipeUI_Default } from "./photoswipe/photoswipe-ui-default";

@Component({
  selector: 'heilbaum-photoswipe',
  styles: [photoswipeStyles, photoswipeDefaultSkin],
  template: photoswipeTemplate,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class HeilBaumPhotoSwipeComponent implements OnInit, AfterViewInit {

  private ele: HTMLElement;
  private id: number;
  private heilBaumPhotoSwipeId: string;

  private items: Array<PhotoSwipeItem> = [];
  private options: Object = {};

  public gallery: any = null;

  /**
   * Constructor of class
   *
   * @param elementRef
   * @param navParams
   * @param viewCtrl
   */
  constructor(elementRef: ElementRef, private navParams: NavParams, private viewCtrl: ViewController) {
    this.ele = elementRef.nativeElement;

    this.id = ++heilBaumPhotoSwipeId;
    this.heilBaumPhotoSwipeId = 'heilbaum-photoswiper-' + this.id;

    this.ele.classList.add(this.heilBaumPhotoSwipeId);
  }

  /**
   * Angular 2 Lifecycle Hook
   */
  ngOnInit() {
    this.items = this.navParams.get('items');
    this.options = this.navParams.get('options') ? this.navParams.get('options') : {};
  }

  /**
   * Angular 2 Lifecycle Hook
   */
  ngAfterViewInit() {
    let pswpElement: Element = document.querySelectorAll('.pswp')[0];

    this.gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, this.items, this.options);
    this.gallery.init();

    this.gallery.listen('destroy', () => {
      this.viewCtrl.dismiss()
    })
  }

}

let heilBaumPhotoSwipeId = -1;
