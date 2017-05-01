export type PhotoswipeOptions = {
    // Core
    allowPanToNext?: boolean,
    arrowKeys?: boolean,
    bgOpacity?: number,
    closeOnScroll?: boolean,
    closeOnVerticalDrag?: boolean,
    errorMsg?: string,
    escKey?: boolean,
    focus?: boolean,
    galleryPIDs?: boolean,
    galleryUID?: number,
    getDoubleTapZoom?: Function,
    getNumItemsFn?: Function,
    getThumbBoundsFn?: Function,
    hideAnimationDuration?: number,
    history?: boolean,
    isClickableElement?: Function,
    loop?: boolean,
    mainClass?: string,
    mainScrollEndFriction?: number,
    maxSpreadZoom?: number,
    modal?: boolean,
    mouseUsed?: boolean,
    panEndFriction?: number,
    pinchToClose?: boolean,
    preload?: Array<[number, number]>,
    showAnimationDuration?: number,
    showHideOpacity?: boolean,
    spacing?: number,
    verticalDragRange?: number,
    index?: number,
    // not fully implemented yet
    scaleMode?: string // TODO

    // Default UI
    addCaptionHTMLFn?: Function,
    arrowEl?: boolean,
    captionEl?: boolean,
    clickToCloseNonZoomable?: boolean,
    closeEl?: boolean,
    closeElClasses?: Array<string>,
    counterEl?: boolean,
    fitControlsWidth?: number
    fullscreenEl?: boolean,
    getImageURLForShare?: Function,
    getPageURLForShare?: Function,
    getTextForShare?: Function,
    indexIndicatorSep?: string,
    loadingIndicatorDelay?: number, // 2s
    preloaderEl?: boolean,
    shareButtons?: Array<PhotoSwipeShareButton>,
    shareEl?: boolean,
    tapToClose?: boolean,
    tapToToggleControls?: boolean,
    timeToIdle?: number,
    timeToIdleOutside?: number,
    zoomEl?: boolean,
    barsSize?: {top?: number, bottom?: number|string},
}

export type PhotoSwipeShareButton = {
    id: string,
    label: string,
    url: string,
    download?: boolean
}
