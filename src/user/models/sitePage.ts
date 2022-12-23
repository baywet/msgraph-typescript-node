import {createCanvasLayoutFromDiscriminatorValue} from './createCanvasLayoutFromDiscriminatorValue';
import {createContentTypeInfoFromDiscriminatorValue} from './createContentTypeInfoFromDiscriminatorValue';
import {createPublicationFacetFromDiscriminatorValue} from './createPublicationFacetFromDiscriminatorValue';
import {createReactionsFacetFromDiscriminatorValue} from './createReactionsFacetFromDiscriminatorValue';
import {createTitleAreaFromDiscriminatorValue} from './createTitleAreaFromDiscriminatorValue';
import {createWebPartFromDiscriminatorValue} from './createWebPartFromDiscriminatorValue';
import {BaseItem, CanvasLayout, ContentTypeInfo, PublicationFacet, ReactionsFacet, TitleArea, WebPart} from './index';
import {PageLayoutType} from './pageLayoutType';
import {PagePromotionType} from './pagePromotionType';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class SitePage extends BaseItem implements Parsable {
    /** The canvasLayout property */
    private _canvasLayout?: CanvasLayout | undefined;
    /** The contentType property */
    private _contentType?: ContentTypeInfo | undefined;
    /** The pageLayout property */
    private _pageLayout?: PageLayoutType | undefined;
    /** The promotionKind property */
    private _promotionKind?: PagePromotionType | undefined;
    /** The publishingState property */
    private _publishingState?: PublicationFacet | undefined;
    /** The reactions property */
    private _reactions?: ReactionsFacet | undefined;
    /** Determines whether or not to show comments at the bottom of the page. */
    private _showComments?: boolean | undefined;
    /** Determines whether or not to show recommended pages at the bottom of the page. */
    private _showRecommendedPages?: boolean | undefined;
    /** Url of the sitePage's thumbnail image */
    private _thumbnailWebUrl?: string | undefined;
    /** Title of the sitePage. */
    private _title?: string | undefined;
    /** The titleArea property */
    private _titleArea?: TitleArea | undefined;
    /** Collection of webparts on the SharePoint page */
    private _webParts?: WebPart[] | undefined;
    /**
     * Gets the canvasLayout property value. The canvasLayout property
     * @returns a canvasLayout
     */
    public get canvasLayout() {
        return this._canvasLayout;
    };
    /**
     * Sets the canvasLayout property value. The canvasLayout property
     * @param value Value to set for the canvasLayout property.
     */
    public set canvasLayout(value: CanvasLayout | undefined) {
        this._canvasLayout = value;
    };
    /**
     * Instantiates a new sitePage and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the contentType property value. The contentType property
     * @returns a contentTypeInfo
     */
    public get contentType() {
        return this._contentType;
    };
    /**
     * Sets the contentType property value. The contentType property
     * @param value Value to set for the contentType property.
     */
    public set contentType(value: ContentTypeInfo | undefined) {
        this._contentType = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "canvasLayout": n => { this.canvasLayout = n.getObjectValue<CanvasLayout>(createCanvasLayoutFromDiscriminatorValue); },
            "contentType": n => { this.contentType = n.getObjectValue<ContentTypeInfo>(createContentTypeInfoFromDiscriminatorValue); },
            "pageLayout": n => { this.pageLayout = n.getEnumValue<PageLayoutType>(PageLayoutType); },
            "promotionKind": n => { this.promotionKind = n.getEnumValue<PagePromotionType>(PagePromotionType); },
            "publishingState": n => { this.publishingState = n.getObjectValue<PublicationFacet>(createPublicationFacetFromDiscriminatorValue); },
            "reactions": n => { this.reactions = n.getObjectValue<ReactionsFacet>(createReactionsFacetFromDiscriminatorValue); },
            "showComments": n => { this.showComments = n.getBooleanValue(); },
            "showRecommendedPages": n => { this.showRecommendedPages = n.getBooleanValue(); },
            "thumbnailWebUrl": n => { this.thumbnailWebUrl = n.getStringValue(); },
            "title": n => { this.title = n.getStringValue(); },
            "titleArea": n => { this.titleArea = n.getObjectValue<TitleArea>(createTitleAreaFromDiscriminatorValue); },
            "webParts": n => { this.webParts = n.getCollectionOfObjectValues<WebPart>(createWebPartFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the pageLayout property value. The pageLayout property
     * @returns a pageLayoutType
     */
    public get pageLayout() {
        return this._pageLayout;
    };
    /**
     * Sets the pageLayout property value. The pageLayout property
     * @param value Value to set for the pageLayout property.
     */
    public set pageLayout(value: PageLayoutType | undefined) {
        this._pageLayout = value;
    };
    /**
     * Gets the promotionKind property value. The promotionKind property
     * @returns a pagePromotionType
     */
    public get promotionKind() {
        return this._promotionKind;
    };
    /**
     * Sets the promotionKind property value. The promotionKind property
     * @param value Value to set for the promotionKind property.
     */
    public set promotionKind(value: PagePromotionType | undefined) {
        this._promotionKind = value;
    };
    /**
     * Gets the publishingState property value. The publishingState property
     * @returns a publicationFacet
     */
    public get publishingState() {
        return this._publishingState;
    };
    /**
     * Sets the publishingState property value. The publishingState property
     * @param value Value to set for the publishingState property.
     */
    public set publishingState(value: PublicationFacet | undefined) {
        this._publishingState = value;
    };
    /**
     * Gets the reactions property value. The reactions property
     * @returns a reactionsFacet
     */
    public get reactions() {
        return this._reactions;
    };
    /**
     * Sets the reactions property value. The reactions property
     * @param value Value to set for the reactions property.
     */
    public set reactions(value: ReactionsFacet | undefined) {
        this._reactions = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeObjectValue<CanvasLayout>("canvasLayout", this.canvasLayout);
        writer.writeObjectValue<ContentTypeInfo>("contentType", this.contentType);
        writer.writeEnumValue<PageLayoutType>("pageLayout", this.pageLayout);
        writer.writeEnumValue<PagePromotionType>("promotionKind", this.promotionKind);
        writer.writeObjectValue<PublicationFacet>("publishingState", this.publishingState);
        writer.writeObjectValue<ReactionsFacet>("reactions", this.reactions);
        writer.writeBooleanValue("showComments", this.showComments);
        writer.writeBooleanValue("showRecommendedPages", this.showRecommendedPages);
        writer.writeStringValue("thumbnailWebUrl", this.thumbnailWebUrl);
        writer.writeStringValue("title", this.title);
        writer.writeObjectValue<TitleArea>("titleArea", this.titleArea);
        writer.writeCollectionOfObjectValues<WebPart>("webParts", this.webParts);
    };
    /**
     * Gets the showComments property value. Determines whether or not to show comments at the bottom of the page.
     * @returns a boolean
     */
    public get showComments() {
        return this._showComments;
    };
    /**
     * Sets the showComments property value. Determines whether or not to show comments at the bottom of the page.
     * @param value Value to set for the showComments property.
     */
    public set showComments(value: boolean | undefined) {
        this._showComments = value;
    };
    /**
     * Gets the showRecommendedPages property value. Determines whether or not to show recommended pages at the bottom of the page.
     * @returns a boolean
     */
    public get showRecommendedPages() {
        return this._showRecommendedPages;
    };
    /**
     * Sets the showRecommendedPages property value. Determines whether or not to show recommended pages at the bottom of the page.
     * @param value Value to set for the showRecommendedPages property.
     */
    public set showRecommendedPages(value: boolean | undefined) {
        this._showRecommendedPages = value;
    };
    /**
     * Gets the thumbnailWebUrl property value. Url of the sitePage's thumbnail image
     * @returns a string
     */
    public get thumbnailWebUrl() {
        return this._thumbnailWebUrl;
    };
    /**
     * Sets the thumbnailWebUrl property value. Url of the sitePage's thumbnail image
     * @param value Value to set for the thumbnailWebUrl property.
     */
    public set thumbnailWebUrl(value: string | undefined) {
        this._thumbnailWebUrl = value;
    };
    /**
     * Gets the title property value. Title of the sitePage.
     * @returns a string
     */
    public get title() {
        return this._title;
    };
    /**
     * Sets the title property value. Title of the sitePage.
     * @param value Value to set for the title property.
     */
    public set title(value: string | undefined) {
        this._title = value;
    };
    /**
     * Gets the titleArea property value. The titleArea property
     * @returns a titleArea
     */
    public get titleArea() {
        return this._titleArea;
    };
    /**
     * Sets the titleArea property value. The titleArea property
     * @param value Value to set for the titleArea property.
     */
    public set titleArea(value: TitleArea | undefined) {
        this._titleArea = value;
    };
    /**
     * Gets the webParts property value. Collection of webparts on the SharePoint page
     * @returns a webPart
     */
    public get webParts() {
        return this._webParts;
    };
    /**
     * Sets the webParts property value. Collection of webparts on the SharePoint page
     * @param value Value to set for the webParts property.
     */
    public set webParts(value: WebPart[] | undefined) {
        this._webParts = value;
    };
}
