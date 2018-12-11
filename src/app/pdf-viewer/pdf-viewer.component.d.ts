/**
 * Created by vadimdez on 21/06/16.
 */
import { ElementRef, EventEmitter, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { PDFDocumentProxy, PDFProgressData, PDFSource } from 'pdfjs-dist';
export declare enum RenderTextMode {
    DISABLED = 0,
    ENABLED = 1,
    ENHANCED = 2,
}
export declare class PdfViewerComponent implements OnChanges, OnInit, OnDestroy {
    private element;
    static CSS_UNITS: number;
    private pdfMultiPageViewer;
    private pdfMultiPageLinkService;
    private pdfMultiPageFindController;
    private pdfSinglePageViewer;
    private pdfSinglePageLinkService;
    private pdfSinglePageFindController;
    private _cMapsUrl;
    private _renderText;
    private _renderTextMode;
    private _stickToPage;
    private _originalSize;
    private _pdf;
    private _page;
    private _zoom;
    private _rotation;
    private _showAll;
    private _canAutoResize;
    private _fitToPage;
    private _externalLinkTarget;
    private lastLoaded;
    private resizeTimeout;
    afterLoadComplete: EventEmitter<PDFDocumentProxy>;
    pageRendered: EventEmitter<CustomEvent>;
    textLayerRendered: EventEmitter<CustomEvent>;
    onError: EventEmitter<any>;
    onProgress: EventEmitter<PDFProgressData>;
    pageChange: EventEmitter<number>;
    src: string | Uint8Array | PDFSource;
    cMapsUrl: string;
    page: any;
    renderText: boolean;
    renderTextMode: RenderTextMode;
    originalSize: boolean;
    showAll: boolean;
    stickToPage: boolean;
    zoom: number;
    rotation: number;
    externalLinkTarget: string;
    autoresize: boolean;
    fitToPage: boolean;
    static getLinkTarget(type: string): any;
    static setExternalLinkTarget(type: string): void;
    constructor(element: ElementRef);
    ngOnInit(): void;
    ngOnDestroy(): void;
    onPageResize(): void;
    onTextLayerRendered(e: CustomEvent): void;
    readonly pdfLinkService: any;
    readonly pdfViewer: any;
    readonly pdfFindController: any;
    ngOnChanges(changes: SimpleChanges): void;
    updateSize(): void;
    private exceedsContainer(viewport);
    private setupMultiPageViewer();
    private setupSinglePageViewer();
    private getValidPageNumber(page);
    private getDocumentParams();
    private loadPDF();
    private update();
    private render();
    private getScale(viewport);
    private getViewportContainerRatio(viewport);
    private getCurrentViewer();
    private resetPdfDocument();
}
