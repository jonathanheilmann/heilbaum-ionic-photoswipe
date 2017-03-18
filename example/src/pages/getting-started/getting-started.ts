import { Component } from '@angular/core';
import { PhotoswipeOptions, PhotoswipeItem, HeilbaumPhotoswipeController, HeilbaumPhotoswipe } from "heilbaum-ionic-photoswipe";
import { NavController, NavParams } from 'ionic-angular';

import { DocumentationPage } from "../documentation/documentation";
import { ExamplePage } from "../example/example";

@Component({
  selector: 'page-getting-started',
  templateUrl: 'getting-started.html'
})
export class GettingStartedPage {

  protected code: {
    copyConfigJs: string,
    packageJson: string,
    componentConstructor: string,
    componentSingleThumbnail: string,
    componentTemplate: string
  } = {
    copyConfigJs: '',
    packageJson: '',
    componentConstructor: '',
    componentSingleThumbnail: '',
    componentTemplate: ''
  };

  protected documentationPage: any = DocumentationPage;
  protected examplePage: any = ExamplePage;

  protected photoswipeItems: Array<PhotoswipeItem> = [];
  protected singlePhotoswipeItem: PhotoswipeItem = null;

  protected imageWidth: number = null;
  protected imageHeight: number = null;

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
  ) {}

  /**
   * Runs when the page has loaded. This event only happens once per page being created.
   * If a page leaves but is cached, then this event will not fire again on a subsequent viewing.
   * The ionViewDidLoad event is good place to put your setup code for the page.
   */
  ionViewDidLoad(): void {
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

    this.code.copyConfigJs = `// this is a custom dictionary to make it easy to extend/override
// provide a name for an entry, it can be anything such as 'copyAssets' or 'copyFonts'
// then provide an object with a \`src\` array of globs and a \`dest\` string
module.exports = {
  copyAssets: {
    src: ['{{SRC}}/assets/**/*'],
    dest: '{{WWW}}/assets'
  },
  copyIndexContent: {
    src: ['{{SRC}}/index.html', '{{SRC}}/manifest.json', '{{SRC}}/service-worker.js'],
    dest: '{{WWW}}'
  },
  copyFonts: {
    src: ['{{ROOT}}/node_modules/ionicons/dist/fonts/**/*', '{{ROOT}}/node_modules/ionic-angular/fonts/**/*'],
    dest: '{{WWW}}/assets/fonts'
  },
  copyPolyfills: {
    src: ['{{ROOT}}/node_modules/ionic-angular/polyfills/polyfills.js'],
    dest: '{{BUILD}}'
  },
  copySwToolbox: {
    src: ['{{ROOT}}/node_modules/sw-toolbox/sw-toolbox.js'],
    dest: '{{BUILD}}'
  },
  // Add PhotoSwipe files for component heilbaum-ionic-photoswipe
  photoSwipe: {
    src: [
      '{{ROOT}}/node_modules/photoswipe/dist/photoswipe.js',
      '{{ROOT}}/node_modules/photoswipe/dist/photoswipe-ui-default.js'
    ],
    dest: '{{BUILD}}'
  }
};`;
    this.code.packageJson = `"config": {
  "ionic_copy": "./config/copy.config.js"
}`;
    this.code.componentConstructor = `constructor(
  public navCtrl: NavController,
  public navParams: NavParams,
  protected pswpCtrl: HeilbaumPhotoswipeController
) {}`;
    this.code.componentSingleThumbnail = `  /**
 * Shows a PhotoSwipe gallery from single thumbnail
 */
protected pswpSingleThumbnail(): void {
  let options: PhotoswipeOptions = {
    history: false,
    clickToCloseNonZoomable: false,
    showHideOpacity: true
  };

  const pswp: HeilbaumPhotoswipe = this.pswpCtrl.create(this.photoswipeItems, options);
  pswp.present({ animate: false });
  pswp.setLeavingOpts({ animate: false });
}`;
    this.code.componentTemplate = `<img tappable
  [alt]="singleImage?.title"
  [src]="singleImage?.src"
  [title]="singleImage?.title"
  [width]="singleImage?.w"
  (click)="pswpSingleThumbnail()" />`;
  }

  /**
   * Shows a PhotoSwipe gallery from single thumbnail
   */
  protected pswpSingleThumbnail(): void {
    let options: PhotoswipeOptions = {
      history: false,
      clickToCloseNonZoomable: false,
      showHideOpacity: true
    };

    const pswp: HeilbaumPhotoswipe = this.pswpCtrl.create(this.photoswipeItems, options);
    pswp.present({ animate: false });
    pswp.setLeavingOpts({ animate: false });
  }

}
