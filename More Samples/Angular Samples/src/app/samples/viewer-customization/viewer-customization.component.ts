/*
Copyright 2020 Adobe
All Rights Reserved.

NOTICE: Adobe permits you to use, modify, and distribute this file in
accordance with the terms of the Adobe license agreement accompanying
it. If you have received this file from a source other than Adobe,
then your use, modification, or distribution of it requires the prior
written permission of Adobe.
*/

import { Component, AfterViewInit } from '@angular/core';
import { ViewSDKClient } from '../view-sdk.service';

@Component({
    templateUrl: './viewer-customization.component.html'
})
export class ViewerCustomizationComponent implements AfterViewInit {
    previewFilePromise: any;
    /* Control the viewer customization.
    * It lists down all supported variables with default values.
    **/
    viewerConfig = {
        /* If true, tools such as sticky note, highlight, and so on appear in the quick tools menu. */
        showAnnotationTools: true,

        /* If true, form filling is enabled and users can edit fields. */
        enableFormFilling: true,

        /* If true, a download button appears in the overflow menu on the top bar. */
        showDownloadPDF: true,

        /* If true, then a print PDF option appears in the overflow menu on the top bar. */
        showPrintPDF: true,

        /* If true, the zoom controls are displayed on the right hand panel. */
        showZoomControl: true,

        /* Allowed possible values are 'FIT_PAGE', 'FIT_WIDTH', 'TWO_COLUMN', 'TWO_COLUMN_FIT_PAGE', or ''.
        FIT_WIDTH expands the page horizontally to the full width of the document pane.
        FIT_PAGE displays the entire page in the current view so that no scrolling is required.
        TWO_COLUMN displays two pages side-by-side in the current view.
        TWO_COLUMN_FIT_PAGE displays two pages side-by-side where the pages are zoomed to page level.
        Note that end users can toggle the view mode on the right hand panel. */
        defaultViewMode: '',
        enableAnnotationAPIs: true,

    };

    constructor(private viewSDKClient: ViewSDKClient) { }

    ngAfterViewInit() {
        this.viewSDKClient.ready().then(() => {
            /* Invoke file preview */
            this.previewFilePromise = this.viewSDKClient.previewFile('pdf-div', this.viewerConfig);
            this.viewSDKClient.registerSaveApiHandler();
            this.viewSDKClient.registerUserProfileHandler();


            let annots = [
                {
                    "@context": [
                        "https://www.w3.org/ns/anno.jsonld",
                        "https://comments.acrobat.com/ns/anno.jsonld"
                    ],
                    "id": "1592abc6-f7e4-83a1-83h4-c979ab99999",
                    "type": "Annotation",
                    "motivation": "commenting",
                    "bodyValue": "rqw qwerqw qwer adsf",
                    "target": {
                        "source": "6d07d124-ac85-43b3-a867-36930f502ac6",
                        "selector": {
                            "node": {
                                "index": 0
                            },
                            "opacity": 0.4,
                            "subtype": "note",
                            "boundingBox": [
                                172.41977157372907,
                                371.4826397194986,
                                189.57596775021952,
                                388.6388358959891
                            ],
                            "strokeColor": "#F8D147",
                            "type": "AdobeAnnoSelector"
                        }
                    },
                    "creator": {
                        "id": "shakoor.hussain@sdd.shj.ae",
                        "name": "Shakoor Hussain Attari",
                        "type": "Person"
                    },
                    "created": "2024-02-15T09:37:15Z",
                    "modified": "2024-02-15T10:26:16Z"
                },
                {
                    "@context": [
                        "https://www.w3.org/ns/anno.jsonld",
                        "https://comments.acrobat.com/ns/anno.jsonld"
                    ],
                    "id": "9b8f8445-f7f9-8da6-85hb-6b5afa8cbaa",
                    "type": "Annotation",
                    "motivation": "commenting",
                    "bodyValue": "page comments by shakoor \nUpdated by adnan",
                    "target": {
                        "source": "6d07d124-ac85-43b3-a867-36930f502ac6",
                        "selector": {
                            "node": {
                                "index": 2
                            },
                            "opacity": 0.4,
                            "subtype": "note",
                            "boundingBox": [
                                179.28225004432522,
                                213.64563489578643,
                                196.43844622081568,
                                230.80183107227688
                            ],
                            "strokeColor": "#F8D147",
                            "type": "AdobeAnnoSelector"
                        }
                    },
                    "creator": {
                        "id": "shakoor.hussain@sdd.shj.ae",
                        "name": "Shakoor Hussain Attari",
                        "type": "Person"
                    },
                    "created": "2024-02-15T09:40:29Z",
                    "modified": "2024-02-15T10:26:33Z"
                },
                {
                    "@context": [
                        "https://www.w3.org/ns/anno.jsonld",
                        "https://comments.acrobat.com/ns/anno.jsonld"
                    ],
                    "id": "04a4a33d-200f-8ef8-e8h5-eb3bf898aa8",
                    "type": "Annotation",
                    "motivation": "replying",
                    "bodyValue": "moved to prime priciing",
                    "target": {
                        "source": "9b8f8445-f7f9-8da6-85hb-6b5afa8cbaa"
                    },
                    "creator": {
                        "id": "shakoor.hussain@sdd.shj.ae",
                        "name": "Shakoor Hussain Attari",
                        "type": "Person"
                    },
                    "created": "2024-02-15T09:40:44Z",
                    "modified": "2024-02-15T09:40:44Z"
                },
                {
                    "@context": [
                        "https://www.w3.org/ns/anno.jsonld",
                        "https://comments.acrobat.com/ns/anno.jsonld"
                    ],
                    "id": "d5be81cb-5c8b-8ab5-dbh2-ebd96a93bb6",
                    "type": "Annotation",
                    "motivation": "commenting",
                    "bodyValue": "Adnan's comments on last page",
                    "target": {
                        "source": "6d07d124-ac85-43b3-a867-36930f502ac6",
                        "selector": {
                            "node": {
                                "index": 6
                            },
                            "opacity": 0.4,
                            "subtype": "note",
                            "boundingBox": [
                                256.48513283853225,
                                342.31710621946485,
                                273.64132901502273,
                                359.4733023959553
                            ],
                            "strokeColor": "#F8D147",
                            "type": "AdobeAnnoSelector"
                        }
                    },
                    "creator": {
                        "id": "muhammada.khan@sdd.shj.ae",
                        "name": "Muhammad Adnan Khan",
                        "type": "Person"
                    },
                    "created": "2024-02-15T10:30:51Z",
                    "modified": "2024-02-15T10:30:54Z"
                }
            ];


            // setting comments panel config after preview init
            // annotationManager.setConfig({ showCommentsPanel: true });

            // AdobeViewer.executeCommand('TOGGLE_COMMENTING', true);


            this.previewFilePromise.then(adobeViewer => {
                adobeViewer.getAnnotationManager().then(annotationManager => {
                    annotationManager.addAnnotations(annots)
                        .then((annots) => {
                            console.log("Success")
                            console.log(annots)
                        })
                        .catch(error => console.log(error));
                });
            });

        });
    }

    onCommentExport() {
        const filter = {
            // annotationIds: [Annotation_ID_1, Annotation_ID_2, ...];
            // OR,
            // pageRange: {startPage: <Page_Number>, endPage: <Page_Number>};
        }

        this.previewFilePromise.then(adobeViewer => {
            adobeViewer.getAnnotationManager().then(annotationManager => {
                annotationManager.getAnnotations(filter)
                    .then((annots) => {
                        console.log("Success")
                        console.log(annots)
                    })
                    .catch(error => console.log(error));
            });
        });
    }
}
