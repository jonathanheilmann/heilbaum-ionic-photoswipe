import { Component, ViewChild, ElementRef } from '@angular/core';
import { HeilbaumPhotoswipeController, PhotoswipeOptions, PhotoswipeItem, HeilbaumPhotoswipe } from "heilbaum-photoswipe";
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-example',
  templateUrl: 'example.html'
})
export class ExamplePage {

  @ViewChild('imageRowEl') imageRowEl: ElementRef;

  protected photoswipeItems: Array<PhotoswipeItem> = [];
  protected singlePhotoswipeItem: PhotoswipeItem = null;

  protected imageWidth: number = null;
  protected imageHeight: number = null;

  protected segment: string = 'single';

  /**
   * Constructor of class
   *
   * @param navCtrl
   * @param navParams
   * @param pswpCtrl
   */
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    protected pswpCtrl: HeilbaumPhotoswipeController
  ) {
  }

  /**
   * Runs when the page has loaded. This event only happens once per page being created.
   * If a page leaves but is cached, then this event will not fire again on a subsequent viewing.
   * The ionViewDidLoad event is good place to put your setup code for the page.
   */
  ionViewDidLoad() {
    this.photoswipeItems = [{
      h: 853,
      src: 'assets/images/1.jpg',
      title: 'Image #1',
      w: 1280
    }, {
      h: 762,
      src: 'assets/images/2.jpg',
      title: 'Image #2',
      w: 1280
    }, {
      h: 651,
      src: 'assets/images/3.jpg',
      title: 'Image #3',
      w: 1280
    }, {
      h: 853,
      src: 'assets/images/4.jpg',
      title: 'Image #4',
      w: 1280
    }, {
      h: 853,
      src: 'assets/images/5.jpg',
      title: 'Image #5',
      w: 1280
    }, {
      h: 853,
      src: 'assets/images/6.jpg',
      title: 'Image #6',
      w: 1280
    }, {
      h: 853,
      src: 'assets/images/7.jpg',
      title: 'Image #7',
      w: 1280
    }, {
      h: 795,
      src: 'assets/images/8.jpg',
      title: 'Image #8',
      w: 1280
    }, {
      h: 849,
      src: 'assets/images/9.jpg',
      title: 'Image #9',
      w: 1280
    }, {
      h: 853,
      src: 'assets/images/10.jpg',
      title: 'Image #10',
      w: 1280
    }];

    this.singlePhotoswipeItem = this.photoswipeItems[0];
  }

  /**
   * Runs when the page has finished leaving and is no longer the active page.
   */
  ionViewDidLeave(): void {
    this.photoswipeItems = [];
  }

  /**
   * Calculates/sets image width to width of passed element
   *
   * @param colEl
   * @returns {number}
   */
  protected calcImageWidth(colEl: any) {
    let colElRef = new ElementRef(colEl);
    this.imageWidth = colElRef.nativeElement.clientWidth;
    return this.imageWidth;
  }

  /**
   * Calculates image height
   *
   * @param colEl
   * @returns {number}
   */
  protected calcImageHeight(colEl: any) {
    let colElRef = new ElementRef(colEl);
    this.imageHeight = Math.round(colElRef.nativeElement.clientWidth / (4/3));
    return this.imageHeight;
  }

  /**
   * Handles window resize event
   */
  onResize() {
    this.imageHeight = null;
    this.imageWidth = null
  }

  /**
   * Shows a PhotoSwipe gallery from single thumbnail
   */
  protected pswpSingleThumbnail(): void {
    const options:PhotoswipeOptions = {
      history: false,
      clickToCloseNonZoomable: false,
      showHideOpacity: true
    };

    const pswp: HeilbaumPhotoswipe = this.pswpCtrl.create(this.photoswipeItems, options);
    pswp.present({ animate: false });
    pswp.setLeavingOpts({ animate: false });
  }

  /**
   * Shows a PhotoSwipe gallery from thumbnail list, starting at clicked/tapped index
   *
   * @param index
   */
  protected pswpMultiThumbnail(index: number): void {
    const options: PhotoswipeOptions = {
      index: index,
      history: false,
      clickToCloseNonZoomable: false,
      showHideOpacity: true
    };

    const pswp: HeilbaumPhotoswipe = this.pswpCtrl.create(this.photoswipeItems, options);
    pswp.present({ animate: false });
    pswp.setLeavingOpts({ animate: false });
  }

}
