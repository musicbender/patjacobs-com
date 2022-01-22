import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
    ID: string;
    String: string;
    Boolean: boolean;
    Int: number;
    Float: number;
    /** A date string, such as 2007-12-03 (YYYY-MM-DD), compliant with ISO 8601 standard for representation of dates using the Gregorian calendar. */
    Date: any;
    /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the date-timeformat outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representationof dates and times using the Gregorian calendar. */
    DateTime: any;
    Hex: any;
    /** Raw JSON value */
    Json: any;
    /** The Long scalar type represents non-fractional signed whole numeric values. Long can represent values between -(2^63) and 2^63 - 1. */
    Long: any;
    RGBAHue: any;
    RGBATransparency: any;
    /** Slate-compatible RichText AST */
    RichTextAST: any;
};

export type Aggregate = {
    __typename?: 'Aggregate';
    count: Scalars['Int'];
};

/** Asset system model */
export type Asset = Node & {
    __typename?: 'Asset';
    /** The time the document was created */
    createdAt: Scalars['DateTime'];
    /** User that created this document */
    createdBy?: Maybe<User>;
    /** Get the document in other stages */
    documentInStages: Array<Asset>;
    /** The file name */
    fileName: Scalars['String'];
    /** The file handle */
    handle: Scalars['String'];
    /** The height of the file */
    height?: Maybe<Scalars['Float']>;
    /** List of Asset versions */
    history: Array<Version>;
    /** The unique identifier */
    id: Scalars['ID'];
    imageDesktopProject: Array<Project>;
    /** System Locale field */
    locale: Locale;
    /** Get the other localizations for this document */
    localizations: Array<Asset>;
    /** The mime type of the file */
    mimeType?: Maybe<Scalars['String']>;
    /** The time the document was published. Null on documents in draft stage. */
    publishedAt?: Maybe<Scalars['DateTime']>;
    /** User that last published this document */
    publishedBy?: Maybe<User>;
    scheduledIn: Array<ScheduledOperation>;
    /** The file size */
    size?: Maybe<Scalars['Float']>;
    /** System stage field */
    stage: Stage;
    /** The time the document was updated */
    updatedAt: Scalars['DateTime'];
    /** User that last updated this document */
    updatedBy?: Maybe<User>;
    /** Get the url for the asset with provided transformations applied. */
    url: Scalars['String'];
    /** The file width */
    width?: Maybe<Scalars['Float']>;
};

/** Asset system model */
export type AssetCreatedAtArgs = {
    variation?: SystemDateTimeFieldVariation;
};

/** Asset system model */
export type AssetCreatedByArgs = {
    locales?: Maybe<Array<Locale>>;
};

/** Asset system model */
export type AssetDocumentInStagesArgs = {
    includeCurrent?: Scalars['Boolean'];
    inheritLocale?: Scalars['Boolean'];
    stages?: Array<Stage>;
};

/** Asset system model */
export type AssetHistoryArgs = {
    limit?: Scalars['Int'];
    skip?: Scalars['Int'];
    stageOverride?: Maybe<Stage>;
};

/** Asset system model */
export type AssetImageDesktopProjectArgs = {
    after?: Maybe<Scalars['String']>;
    before?: Maybe<Scalars['String']>;
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    locales?: Maybe<Array<Locale>>;
    orderBy?: Maybe<ProjectOrderByInput>;
    skip?: Maybe<Scalars['Int']>;
    where?: Maybe<ProjectWhereInput>;
};

/** Asset system model */
export type AssetLocalizationsArgs = {
    includeCurrent?: Scalars['Boolean'];
    locales?: Array<Locale>;
};

/** Asset system model */
export type AssetPublishedAtArgs = {
    variation?: SystemDateTimeFieldVariation;
};

/** Asset system model */
export type AssetPublishedByArgs = {
    locales?: Maybe<Array<Locale>>;
};

/** Asset system model */
export type AssetScheduledInArgs = {
    after?: Maybe<Scalars['String']>;
    before?: Maybe<Scalars['String']>;
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    locales?: Maybe<Array<Locale>>;
    skip?: Maybe<Scalars['Int']>;
    where?: Maybe<ScheduledOperationWhereInput>;
};

/** Asset system model */
export type AssetUpdatedAtArgs = {
    variation?: SystemDateTimeFieldVariation;
};

/** Asset system model */
export type AssetUpdatedByArgs = {
    locales?: Maybe<Array<Locale>>;
};

/** Asset system model */
export type AssetUrlArgs = {
    transformation?: Maybe<AssetTransformationInput>;
};

export type AssetConnectInput = {
    /** Allow to specify document position in list of connected documents, will default to appending at end of list */
    position?: Maybe<ConnectPositionInput>;
    /** Document to connect */
    where: AssetWhereUniqueInput;
};

/** A connection to a list of items. */
export type AssetConnection = {
    __typename?: 'AssetConnection';
    aggregate: Aggregate;
    /** A list of edges. */
    edges: Array<AssetEdge>;
    /** Information to aid in pagination. */
    pageInfo: PageInfo;
};

export type AssetCreateInput = {
    createdAt?: Maybe<Scalars['DateTime']>;
    fileName: Scalars['String'];
    handle: Scalars['String'];
    height?: Maybe<Scalars['Float']>;
    imageDesktopProject?: Maybe<ProjectCreateManyInlineInput>;
    /** Inline mutations for managing document localizations excluding the default locale */
    localizations?: Maybe<AssetCreateLocalizationsInput>;
    mimeType?: Maybe<Scalars['String']>;
    size?: Maybe<Scalars['Float']>;
    updatedAt?: Maybe<Scalars['DateTime']>;
    width?: Maybe<Scalars['Float']>;
};

export type AssetCreateLocalizationDataInput = {
    createdAt?: Maybe<Scalars['DateTime']>;
    fileName: Scalars['String'];
    handle: Scalars['String'];
    height?: Maybe<Scalars['Float']>;
    mimeType?: Maybe<Scalars['String']>;
    size?: Maybe<Scalars['Float']>;
    updatedAt?: Maybe<Scalars['DateTime']>;
    width?: Maybe<Scalars['Float']>;
};

export type AssetCreateLocalizationInput = {
    /** Localization input */
    data: AssetCreateLocalizationDataInput;
    locale: Locale;
};

export type AssetCreateLocalizationsInput = {
    /** Create localizations for the newly-created document */
    create?: Maybe<Array<AssetCreateLocalizationInput>>;
};

export type AssetCreateManyInlineInput = {
    /** Connect multiple existing Asset documents */
    connect?: Maybe<Array<AssetWhereUniqueInput>>;
    /** Create and connect multiple existing Asset documents */
    create?: Maybe<Array<AssetCreateInput>>;
};

export type AssetCreateOneInlineInput = {
    /** Connect one existing Asset document */
    connect?: Maybe<AssetWhereUniqueInput>;
    /** Create and connect one Asset document */
    create?: Maybe<AssetCreateInput>;
};

/** An edge in a connection. */
export type AssetEdge = {
    __typename?: 'AssetEdge';
    /** A cursor for use in pagination. */
    cursor: Scalars['String'];
    /** The item at the end of the edge. */
    node: Asset;
};

/** Identifies documents */
export type AssetManyWhereInput = {
    /** Logical AND on all given filters. */
    AND?: Maybe<Array<AssetWhereInput>>;
    /** Logical NOT on all given filters combined by AND. */
    NOT?: Maybe<Array<AssetWhereInput>>;
    /** Logical OR on all given filters. */
    OR?: Maybe<Array<AssetWhereInput>>;
    /** Contains search across all appropriate fields. */
    _search?: Maybe<Scalars['String']>;
    createdAt?: Maybe<Scalars['DateTime']>;
    /** All values greater than the given value. */
    createdAt_gt?: Maybe<Scalars['DateTime']>;
    /** All values greater than or equal the given value. */
    createdAt_gte?: Maybe<Scalars['DateTime']>;
    /** All values that are contained in given list. */
    createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
    /** All values less than the given value. */
    createdAt_lt?: Maybe<Scalars['DateTime']>;
    /** All values less than or equal the given value. */
    createdAt_lte?: Maybe<Scalars['DateTime']>;
    /** All values that are not equal to given value. */
    createdAt_not?: Maybe<Scalars['DateTime']>;
    /** All values that are not contained in given list. */
    createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
    createdBy?: Maybe<UserWhereInput>;
    id?: Maybe<Scalars['ID']>;
    /** All values containing the given string. */
    id_contains?: Maybe<Scalars['ID']>;
    /** All values ending with the given string. */
    id_ends_with?: Maybe<Scalars['ID']>;
    /** All values that are contained in given list. */
    id_in?: Maybe<Array<Scalars['ID']>>;
    /** All values that are not equal to given value. */
    id_not?: Maybe<Scalars['ID']>;
    /** All values not containing the given string. */
    id_not_contains?: Maybe<Scalars['ID']>;
    /** All values not ending with the given string */
    id_not_ends_with?: Maybe<Scalars['ID']>;
    /** All values that are not contained in given list. */
    id_not_in?: Maybe<Array<Scalars['ID']>>;
    /** All values not starting with the given string. */
    id_not_starts_with?: Maybe<Scalars['ID']>;
    /** All values starting with the given string. */
    id_starts_with?: Maybe<Scalars['ID']>;
    imageDesktopProject_every?: Maybe<ProjectWhereInput>;
    imageDesktopProject_none?: Maybe<ProjectWhereInput>;
    imageDesktopProject_some?: Maybe<ProjectWhereInput>;
    publishedAt?: Maybe<Scalars['DateTime']>;
    /** All values greater than the given value. */
    publishedAt_gt?: Maybe<Scalars['DateTime']>;
    /** All values greater than or equal the given value. */
    publishedAt_gte?: Maybe<Scalars['DateTime']>;
    /** All values that are contained in given list. */
    publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
    /** All values less than the given value. */
    publishedAt_lt?: Maybe<Scalars['DateTime']>;
    /** All values less than or equal the given value. */
    publishedAt_lte?: Maybe<Scalars['DateTime']>;
    /** All values that are not equal to given value. */
    publishedAt_not?: Maybe<Scalars['DateTime']>;
    /** All values that are not contained in given list. */
    publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
    publishedBy?: Maybe<UserWhereInput>;
    scheduledIn_every?: Maybe<ScheduledOperationWhereInput>;
    scheduledIn_none?: Maybe<ScheduledOperationWhereInput>;
    scheduledIn_some?: Maybe<ScheduledOperationWhereInput>;
    updatedAt?: Maybe<Scalars['DateTime']>;
    /** All values greater than the given value. */
    updatedAt_gt?: Maybe<Scalars['DateTime']>;
    /** All values greater than or equal the given value. */
    updatedAt_gte?: Maybe<Scalars['DateTime']>;
    /** All values that are contained in given list. */
    updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
    /** All values less than the given value. */
    updatedAt_lt?: Maybe<Scalars['DateTime']>;
    /** All values less than or equal the given value. */
    updatedAt_lte?: Maybe<Scalars['DateTime']>;
    /** All values that are not equal to given value. */
    updatedAt_not?: Maybe<Scalars['DateTime']>;
    /** All values that are not contained in given list. */
    updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
    updatedBy?: Maybe<UserWhereInput>;
};

export enum AssetOrderByInput {
    CreatedAtAsc = 'createdAt_ASC',
    CreatedAtDesc = 'createdAt_DESC',
    FileNameAsc = 'fileName_ASC',
    FileNameDesc = 'fileName_DESC',
    HandleAsc = 'handle_ASC',
    HandleDesc = 'handle_DESC',
    HeightAsc = 'height_ASC',
    HeightDesc = 'height_DESC',
    IdAsc = 'id_ASC',
    IdDesc = 'id_DESC',
    MimeTypeAsc = 'mimeType_ASC',
    MimeTypeDesc = 'mimeType_DESC',
    PublishedAtAsc = 'publishedAt_ASC',
    PublishedAtDesc = 'publishedAt_DESC',
    SizeAsc = 'size_ASC',
    SizeDesc = 'size_DESC',
    UpdatedAtAsc = 'updatedAt_ASC',
    UpdatedAtDesc = 'updatedAt_DESC',
    WidthAsc = 'width_ASC',
    WidthDesc = 'width_DESC',
}

/** Transformations for Assets */
export type AssetTransformationInput = {
    document?: Maybe<DocumentTransformationInput>;
    image?: Maybe<ImageTransformationInput>;
    /** Pass true if you want to validate the passed transformation parameters */
    validateOptions?: Maybe<Scalars['Boolean']>;
};

export type AssetUpdateInput = {
    fileName?: Maybe<Scalars['String']>;
    handle?: Maybe<Scalars['String']>;
    height?: Maybe<Scalars['Float']>;
    imageDesktopProject?: Maybe<ProjectUpdateManyInlineInput>;
    /** Manage document localizations */
    localizations?: Maybe<AssetUpdateLocalizationsInput>;
    mimeType?: Maybe<Scalars['String']>;
    size?: Maybe<Scalars['Float']>;
    width?: Maybe<Scalars['Float']>;
};

export type AssetUpdateLocalizationDataInput = {
    fileName?: Maybe<Scalars['String']>;
    handle?: Maybe<Scalars['String']>;
    height?: Maybe<Scalars['Float']>;
    mimeType?: Maybe<Scalars['String']>;
    size?: Maybe<Scalars['Float']>;
    width?: Maybe<Scalars['Float']>;
};

export type AssetUpdateLocalizationInput = {
    data: AssetUpdateLocalizationDataInput;
    locale: Locale;
};

export type AssetUpdateLocalizationsInput = {
    /** Localizations to create */
    create?: Maybe<Array<AssetCreateLocalizationInput>>;
    /** Localizations to delete */
    delete?: Maybe<Array<Locale>>;
    /** Localizations to update */
    update?: Maybe<Array<AssetUpdateLocalizationInput>>;
    upsert?: Maybe<Array<AssetUpsertLocalizationInput>>;
};

export type AssetUpdateManyInlineInput = {
    /** Connect multiple existing Asset documents */
    connect?: Maybe<Array<AssetConnectInput>>;
    /** Create and connect multiple Asset documents */
    create?: Maybe<Array<AssetCreateInput>>;
    /** Delete multiple Asset documents */
    delete?: Maybe<Array<AssetWhereUniqueInput>>;
    /** Disconnect multiple Asset documents */
    disconnect?: Maybe<Array<AssetWhereUniqueInput>>;
    /** Override currently-connected documents with multiple existing Asset documents */
    set?: Maybe<Array<AssetWhereUniqueInput>>;
    /** Update multiple Asset documents */
    update?: Maybe<Array<AssetUpdateWithNestedWhereUniqueInput>>;
    /** Upsert multiple Asset documents */
    upsert?: Maybe<Array<AssetUpsertWithNestedWhereUniqueInput>>;
};

export type AssetUpdateManyInput = {
    fileName?: Maybe<Scalars['String']>;
    height?: Maybe<Scalars['Float']>;
    /** Optional updates to localizations */
    localizations?: Maybe<AssetUpdateManyLocalizationsInput>;
    mimeType?: Maybe<Scalars['String']>;
    size?: Maybe<Scalars['Float']>;
    width?: Maybe<Scalars['Float']>;
};

export type AssetUpdateManyLocalizationDataInput = {
    fileName?: Maybe<Scalars['String']>;
    height?: Maybe<Scalars['Float']>;
    mimeType?: Maybe<Scalars['String']>;
    size?: Maybe<Scalars['Float']>;
    width?: Maybe<Scalars['Float']>;
};

export type AssetUpdateManyLocalizationInput = {
    data: AssetUpdateManyLocalizationDataInput;
    locale: Locale;
};

export type AssetUpdateManyLocalizationsInput = {
    /** Localizations to update */
    update?: Maybe<Array<AssetUpdateManyLocalizationInput>>;
};

export type AssetUpdateManyWithNestedWhereInput = {
    /** Update many input */
    data: AssetUpdateManyInput;
    /** Document search */
    where: AssetWhereInput;
};

export type AssetUpdateOneInlineInput = {
    /** Connect existing Asset document */
    connect?: Maybe<AssetWhereUniqueInput>;
    /** Create and connect one Asset document */
    create?: Maybe<AssetCreateInput>;
    /** Delete currently connected Asset document */
    delete?: Maybe<Scalars['Boolean']>;
    /** Disconnect currently connected Asset document */
    disconnect?: Maybe<Scalars['Boolean']>;
    /** Update single Asset document */
    update?: Maybe<AssetUpdateWithNestedWhereUniqueInput>;
    /** Upsert single Asset document */
    upsert?: Maybe<AssetUpsertWithNestedWhereUniqueInput>;
};

export type AssetUpdateWithNestedWhereUniqueInput = {
    /** Document to update */
    data: AssetUpdateInput;
    /** Unique document search */
    where: AssetWhereUniqueInput;
};

export type AssetUpsertInput = {
    /** Create document if it didn't exist */
    create: AssetCreateInput;
    /** Update document if it exists */
    update: AssetUpdateInput;
};

export type AssetUpsertLocalizationInput = {
    create: AssetCreateLocalizationDataInput;
    locale: Locale;
    update: AssetUpdateLocalizationDataInput;
};

export type AssetUpsertWithNestedWhereUniqueInput = {
    /** Upsert data */
    data: AssetUpsertInput;
    /** Unique document search */
    where: AssetWhereUniqueInput;
};

/** Identifies documents */
export type AssetWhereInput = {
    /** Logical AND on all given filters. */
    AND?: Maybe<Array<AssetWhereInput>>;
    /** Logical NOT on all given filters combined by AND. */
    NOT?: Maybe<Array<AssetWhereInput>>;
    /** Logical OR on all given filters. */
    OR?: Maybe<Array<AssetWhereInput>>;
    /** Contains search across all appropriate fields. */
    _search?: Maybe<Scalars['String']>;
    createdAt?: Maybe<Scalars['DateTime']>;
    /** All values greater than the given value. */
    createdAt_gt?: Maybe<Scalars['DateTime']>;
    /** All values greater than or equal the given value. */
    createdAt_gte?: Maybe<Scalars['DateTime']>;
    /** All values that are contained in given list. */
    createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
    /** All values less than the given value. */
    createdAt_lt?: Maybe<Scalars['DateTime']>;
    /** All values less than or equal the given value. */
    createdAt_lte?: Maybe<Scalars['DateTime']>;
    /** All values that are not equal to given value. */
    createdAt_not?: Maybe<Scalars['DateTime']>;
    /** All values that are not contained in given list. */
    createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
    createdBy?: Maybe<UserWhereInput>;
    fileName?: Maybe<Scalars['String']>;
    /** All values containing the given string. */
    fileName_contains?: Maybe<Scalars['String']>;
    /** All values ending with the given string. */
    fileName_ends_with?: Maybe<Scalars['String']>;
    /** All values that are contained in given list. */
    fileName_in?: Maybe<Array<Scalars['String']>>;
    /** All values that are not equal to given value. */
    fileName_not?: Maybe<Scalars['String']>;
    /** All values not containing the given string. */
    fileName_not_contains?: Maybe<Scalars['String']>;
    /** All values not ending with the given string */
    fileName_not_ends_with?: Maybe<Scalars['String']>;
    /** All values that are not contained in given list. */
    fileName_not_in?: Maybe<Array<Scalars['String']>>;
    /** All values not starting with the given string. */
    fileName_not_starts_with?: Maybe<Scalars['String']>;
    /** All values starting with the given string. */
    fileName_starts_with?: Maybe<Scalars['String']>;
    handle?: Maybe<Scalars['String']>;
    /** All values containing the given string. */
    handle_contains?: Maybe<Scalars['String']>;
    /** All values ending with the given string. */
    handle_ends_with?: Maybe<Scalars['String']>;
    /** All values that are contained in given list. */
    handle_in?: Maybe<Array<Scalars['String']>>;
    /** All values that are not equal to given value. */
    handle_not?: Maybe<Scalars['String']>;
    /** All values not containing the given string. */
    handle_not_contains?: Maybe<Scalars['String']>;
    /** All values not ending with the given string */
    handle_not_ends_with?: Maybe<Scalars['String']>;
    /** All values that are not contained in given list. */
    handle_not_in?: Maybe<Array<Scalars['String']>>;
    /** All values not starting with the given string. */
    handle_not_starts_with?: Maybe<Scalars['String']>;
    /** All values starting with the given string. */
    handle_starts_with?: Maybe<Scalars['String']>;
    height?: Maybe<Scalars['Float']>;
    /** All values greater than the given value. */
    height_gt?: Maybe<Scalars['Float']>;
    /** All values greater than or equal the given value. */
    height_gte?: Maybe<Scalars['Float']>;
    /** All values that are contained in given list. */
    height_in?: Maybe<Array<Scalars['Float']>>;
    /** All values less than the given value. */
    height_lt?: Maybe<Scalars['Float']>;
    /** All values less than or equal the given value. */
    height_lte?: Maybe<Scalars['Float']>;
    /** All values that are not equal to given value. */
    height_not?: Maybe<Scalars['Float']>;
    /** All values that are not contained in given list. */
    height_not_in?: Maybe<Array<Scalars['Float']>>;
    id?: Maybe<Scalars['ID']>;
    /** All values containing the given string. */
    id_contains?: Maybe<Scalars['ID']>;
    /** All values ending with the given string. */
    id_ends_with?: Maybe<Scalars['ID']>;
    /** All values that are contained in given list. */
    id_in?: Maybe<Array<Scalars['ID']>>;
    /** All values that are not equal to given value. */
    id_not?: Maybe<Scalars['ID']>;
    /** All values not containing the given string. */
    id_not_contains?: Maybe<Scalars['ID']>;
    /** All values not ending with the given string */
    id_not_ends_with?: Maybe<Scalars['ID']>;
    /** All values that are not contained in given list. */
    id_not_in?: Maybe<Array<Scalars['ID']>>;
    /** All values not starting with the given string. */
    id_not_starts_with?: Maybe<Scalars['ID']>;
    /** All values starting with the given string. */
    id_starts_with?: Maybe<Scalars['ID']>;
    imageDesktopProject_every?: Maybe<ProjectWhereInput>;
    imageDesktopProject_none?: Maybe<ProjectWhereInput>;
    imageDesktopProject_some?: Maybe<ProjectWhereInput>;
    mimeType?: Maybe<Scalars['String']>;
    /** All values containing the given string. */
    mimeType_contains?: Maybe<Scalars['String']>;
    /** All values ending with the given string. */
    mimeType_ends_with?: Maybe<Scalars['String']>;
    /** All values that are contained in given list. */
    mimeType_in?: Maybe<Array<Scalars['String']>>;
    /** All values that are not equal to given value. */
    mimeType_not?: Maybe<Scalars['String']>;
    /** All values not containing the given string. */
    mimeType_not_contains?: Maybe<Scalars['String']>;
    /** All values not ending with the given string */
    mimeType_not_ends_with?: Maybe<Scalars['String']>;
    /** All values that are not contained in given list. */
    mimeType_not_in?: Maybe<Array<Scalars['String']>>;
    /** All values not starting with the given string. */
    mimeType_not_starts_with?: Maybe<Scalars['String']>;
    /** All values starting with the given string. */
    mimeType_starts_with?: Maybe<Scalars['String']>;
    publishedAt?: Maybe<Scalars['DateTime']>;
    /** All values greater than the given value. */
    publishedAt_gt?: Maybe<Scalars['DateTime']>;
    /** All values greater than or equal the given value. */
    publishedAt_gte?: Maybe<Scalars['DateTime']>;
    /** All values that are contained in given list. */
    publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
    /** All values less than the given value. */
    publishedAt_lt?: Maybe<Scalars['DateTime']>;
    /** All values less than or equal the given value. */
    publishedAt_lte?: Maybe<Scalars['DateTime']>;
    /** All values that are not equal to given value. */
    publishedAt_not?: Maybe<Scalars['DateTime']>;
    /** All values that are not contained in given list. */
    publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
    publishedBy?: Maybe<UserWhereInput>;
    scheduledIn_every?: Maybe<ScheduledOperationWhereInput>;
    scheduledIn_none?: Maybe<ScheduledOperationWhereInput>;
    scheduledIn_some?: Maybe<ScheduledOperationWhereInput>;
    size?: Maybe<Scalars['Float']>;
    /** All values greater than the given value. */
    size_gt?: Maybe<Scalars['Float']>;
    /** All values greater than or equal the given value. */
    size_gte?: Maybe<Scalars['Float']>;
    /** All values that are contained in given list. */
    size_in?: Maybe<Array<Scalars['Float']>>;
    /** All values less than the given value. */
    size_lt?: Maybe<Scalars['Float']>;
    /** All values less than or equal the given value. */
    size_lte?: Maybe<Scalars['Float']>;
    /** All values that are not equal to given value. */
    size_not?: Maybe<Scalars['Float']>;
    /** All values that are not contained in given list. */
    size_not_in?: Maybe<Array<Scalars['Float']>>;
    updatedAt?: Maybe<Scalars['DateTime']>;
    /** All values greater than the given value. */
    updatedAt_gt?: Maybe<Scalars['DateTime']>;
    /** All values greater than or equal the given value. */
    updatedAt_gte?: Maybe<Scalars['DateTime']>;
    /** All values that are contained in given list. */
    updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
    /** All values less than the given value. */
    updatedAt_lt?: Maybe<Scalars['DateTime']>;
    /** All values less than or equal the given value. */
    updatedAt_lte?: Maybe<Scalars['DateTime']>;
    /** All values that are not equal to given value. */
    updatedAt_not?: Maybe<Scalars['DateTime']>;
    /** All values that are not contained in given list. */
    updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
    updatedBy?: Maybe<UserWhereInput>;
    width?: Maybe<Scalars['Float']>;
    /** All values greater than the given value. */
    width_gt?: Maybe<Scalars['Float']>;
    /** All values greater than or equal the given value. */
    width_gte?: Maybe<Scalars['Float']>;
    /** All values that are contained in given list. */
    width_in?: Maybe<Array<Scalars['Float']>>;
    /** All values less than the given value. */
    width_lt?: Maybe<Scalars['Float']>;
    /** All values less than or equal the given value. */
    width_lte?: Maybe<Scalars['Float']>;
    /** All values that are not equal to given value. */
    width_not?: Maybe<Scalars['Float']>;
    /** All values that are not contained in given list. */
    width_not_in?: Maybe<Array<Scalars['Float']>>;
};

/** References Asset record uniquely */
export type AssetWhereUniqueInput = {
    id?: Maybe<Scalars['ID']>;
};

export type BatchPayload = {
    __typename?: 'BatchPayload';
    /** The number of nodes that have been affected by the Batch operation. */
    count: Scalars['Long'];
};

/** Representing a color value comprising of HEX, RGBA and css color values */
export type Color = {
    __typename?: 'Color';
    css: Scalars['String'];
    hex: Scalars['Hex'];
    rgba: Rgba;
};

/** Accepts either HEX or RGBA color value. At least one of hex or rgba value should be passed. If both are passed RGBA is used. */
export type ColorInput = {
    hex?: Maybe<Scalars['Hex']>;
    rgba?: Maybe<RgbaInput>;
};

export type ConnectPositionInput = {
    /** Connect document after specified document */
    after?: Maybe<Scalars['ID']>;
    /** Connect document before specified document */
    before?: Maybe<Scalars['ID']>;
    /** Connect document at last position */
    end?: Maybe<Scalars['Boolean']>;
    /** Connect document at first position */
    start?: Maybe<Scalars['Boolean']>;
};

export enum DocumentFileTypes {
    Doc = 'doc',
    Docx = 'docx',
    Html = 'html',
    Jpg = 'jpg',
    Odp = 'odp',
    Ods = 'ods',
    Odt = 'odt',
    Pdf = 'pdf',
    Png = 'png',
    Ppt = 'ppt',
    Pptx = 'pptx',
    Svg = 'svg',
    Txt = 'txt',
    Webp = 'webp',
    Xls = 'xls',
    Xlsx = 'xlsx',
}

export type DocumentOutputInput = {
    /**
     * Transforms a document into a desired file type.
     * See this matrix for format support:
     *
     * PDF:	jpg, odp, ods, odt, png, svg, txt, and webp
     * DOC:	docx, html, jpg, odt, pdf, png, svg, txt, and webp
     * DOCX:	doc, html, jpg, odt, pdf, png, svg, txt, and webp
     * ODT:	doc, docx, html, jpg, pdf, png, svg, txt, and webp
     * XLS:	jpg, pdf, ods, png, svg, xlsx, and webp
     * XLSX:	jpg, pdf, ods, png, svg, xls, and webp
     * ODS:	jpg, pdf, png, xls, svg, xlsx, and webp
     * PPT:	jpg, odp, pdf, png, svg, pptx, and webp
     * PPTX:	jpg, odp, pdf, png, svg, ppt, and webp
     * ODP:	jpg, pdf, png, ppt, svg, pptx, and webp
     * BMP:	jpg, odp, ods, odt, pdf, png, svg, and webp
     * GIF:	jpg, odp, ods, odt, pdf, png, svg, and webp
     * JPG:	jpg, odp, ods, odt, pdf, png, svg, and webp
     * PNG:	jpg, odp, ods, odt, pdf, png, svg, and webp
     * WEBP:	jpg, odp, ods, odt, pdf, png, svg, and webp
     * TIFF:	jpg, odp, ods, odt, pdf, png, svg, and webp
     * AI:	    jpg, odp, ods, odt, pdf, png, svg, and webp
     * PSD:	jpg, odp, ods, odt, pdf, png, svg, and webp
     * SVG:	jpg, odp, ods, odt, pdf, png, and webp
     * HTML:	jpg, odt, pdf, svg, txt, and webp
     * TXT:	jpg, html, odt, pdf, svg, and webp
     */
    format?: Maybe<DocumentFileTypes>;
};

/** Transformations for Documents */
export type DocumentTransformationInput = {
    /** Changes the output for the file. */
    output?: Maybe<DocumentOutputInput>;
};

export type DocumentVersion = {
    __typename?: 'DocumentVersion';
    createdAt: Scalars['DateTime'];
    data?: Maybe<Scalars['Json']>;
    id: Scalars['ID'];
    revision: Scalars['Int'];
    stage: Stage;
};

export enum ImageFit {
    /** Resizes the image to fit within the specified parameters without distorting, cropping, or changing the aspect ratio. */
    Clip = 'clip',
    /** Resizes the image to fit the specified parameters exactly by removing any parts of the image that don't fit within the boundaries. */
    Crop = 'crop',
    /** Resizes the image to fit within the parameters, but as opposed to 'fit:clip' will not scale the image if the image is smaller than the output size. */
    Max = 'max',
    /** Resizes the image to fit the specified parameters exactly by scaling the image to the desired size. The aspect ratio of the image is not respected and the image can be distorted using this method. */
    Scale = 'scale',
}

export type ImageResizeInput = {
    /** The default value for the fit parameter is fit:clip. */
    fit?: Maybe<ImageFit>;
    /** The height in pixels to resize the image to. The value must be an integer from 1 to 10000. */
    height?: Maybe<Scalars['Int']>;
    /** The width in pixels to resize the image to. The value must be an integer from 1 to 10000. */
    width?: Maybe<Scalars['Int']>;
};

/** Transformations for Images */
export type ImageTransformationInput = {
    /** Resizes the image */
    resize?: Maybe<ImageResizeInput>;
};

/** Locale system enumeration */
export enum Locale {
    /** System locale */
    En = 'en',
}

/** Representing a geolocation point with latitude and longitude */
export type Location = {
    __typename?: 'Location';
    distance: Scalars['Float'];
    latitude: Scalars['Float'];
    longitude: Scalars['Float'];
};

/** Representing a geolocation point with latitude and longitude */
export type LocationDistanceArgs = {
    from: LocationInput;
};

/** Input for a geolocation point with latitude and longitude */
export type LocationInput = {
    latitude: Scalars['Float'];
    longitude: Scalars['Float'];
};

export type Mutation = {
    __typename?: 'Mutation';
    /**
     * Create one asset
     * @deprecated Asset mutations will be overhauled soon
     */
    createAsset?: Maybe<Asset>;
    /** Create one project */
    createProject?: Maybe<Project>;
    /** Create one scheduledRelease */
    createScheduledRelease?: Maybe<ScheduledRelease>;
    /** Create one section */
    createSection?: Maybe<Section>;
    /** Create one skill */
    createSkill?: Maybe<Skill>;
    /** Create one socialLink */
    createSocialLink?: Maybe<SocialLink>;
    /** Delete one asset from _all_ existing stages. Returns deleted document. */
    deleteAsset?: Maybe<Asset>;
    /**
     * Delete many Asset documents
     * @deprecated Please use the new paginated many mutation (deleteManyAssetsConnection)
     */
    deleteManyAssets: BatchPayload;
    /** Delete many Asset documents, return deleted documents */
    deleteManyAssetsConnection: AssetConnection;
    /**
     * Delete many Project documents
     * @deprecated Please use the new paginated many mutation (deleteManyProjectsConnection)
     */
    deleteManyProjects: BatchPayload;
    /** Delete many Project documents, return deleted documents */
    deleteManyProjectsConnection: ProjectConnection;
    /**
     * Delete many Section documents
     * @deprecated Please use the new paginated many mutation (deleteManySectionsConnection)
     */
    deleteManySections: BatchPayload;
    /** Delete many Section documents, return deleted documents */
    deleteManySectionsConnection: SectionConnection;
    /**
     * Delete many Skill documents
     * @deprecated Please use the new paginated many mutation (deleteManySkillsConnection)
     */
    deleteManySkills: BatchPayload;
    /** Delete many Skill documents, return deleted documents */
    deleteManySkillsConnection: SkillConnection;
    /**
     * Delete many SocialLink documents
     * @deprecated Please use the new paginated many mutation (deleteManySocialLinksConnection)
     */
    deleteManySocialLinks: BatchPayload;
    /** Delete many SocialLink documents, return deleted documents */
    deleteManySocialLinksConnection: SocialLinkConnection;
    /** Delete one project from _all_ existing stages. Returns deleted document. */
    deleteProject?: Maybe<Project>;
    /** Delete and return scheduled operation */
    deleteScheduledOperation?: Maybe<ScheduledOperation>;
    /** Delete one scheduledRelease from _all_ existing stages. Returns deleted document. */
    deleteScheduledRelease?: Maybe<ScheduledRelease>;
    /** Delete one section from _all_ existing stages. Returns deleted document. */
    deleteSection?: Maybe<Section>;
    /** Delete one skill from _all_ existing stages. Returns deleted document. */
    deleteSkill?: Maybe<Skill>;
    /** Delete one socialLink from _all_ existing stages. Returns deleted document. */
    deleteSocialLink?: Maybe<SocialLink>;
    /** Publish one asset */
    publishAsset?: Maybe<Asset>;
    /**
     * Publish many Asset documents
     * @deprecated Please use the new paginated many mutation (publishManyAssetsConnection)
     */
    publishManyAssets: BatchPayload;
    /** Publish many Asset documents */
    publishManyAssetsConnection: AssetConnection;
    /**
     * Publish many Project documents
     * @deprecated Please use the new paginated many mutation (publishManyProjectsConnection)
     */
    publishManyProjects: BatchPayload;
    /** Publish many Project documents */
    publishManyProjectsConnection: ProjectConnection;
    /**
     * Publish many Section documents
     * @deprecated Please use the new paginated many mutation (publishManySectionsConnection)
     */
    publishManySections: BatchPayload;
    /** Publish many Section documents */
    publishManySectionsConnection: SectionConnection;
    /**
     * Publish many Skill documents
     * @deprecated Please use the new paginated many mutation (publishManySkillsConnection)
     */
    publishManySkills: BatchPayload;
    /** Publish many Skill documents */
    publishManySkillsConnection: SkillConnection;
    /**
     * Publish many SocialLink documents
     * @deprecated Please use the new paginated many mutation (publishManySocialLinksConnection)
     */
    publishManySocialLinks: BatchPayload;
    /** Publish many SocialLink documents */
    publishManySocialLinksConnection: SocialLinkConnection;
    /** Publish one project */
    publishProject?: Maybe<Project>;
    /** Publish one section */
    publishSection?: Maybe<Section>;
    /** Publish one skill */
    publishSkill?: Maybe<Skill>;
    /** Publish one socialLink */
    publishSocialLink?: Maybe<SocialLink>;
    /** Schedule to publish one asset */
    schedulePublishAsset?: Maybe<Asset>;
    /** Schedule to publish one project */
    schedulePublishProject?: Maybe<Project>;
    /** Schedule to publish one section */
    schedulePublishSection?: Maybe<Section>;
    /** Schedule to publish one skill */
    schedulePublishSkill?: Maybe<Skill>;
    /** Schedule to publish one socialLink */
    schedulePublishSocialLink?: Maybe<SocialLink>;
    /** Unpublish one asset from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
    scheduleUnpublishAsset?: Maybe<Asset>;
    /** Unpublish one project from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
    scheduleUnpublishProject?: Maybe<Project>;
    /** Unpublish one section from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
    scheduleUnpublishSection?: Maybe<Section>;
    /** Unpublish one skill from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
    scheduleUnpublishSkill?: Maybe<Skill>;
    /** Unpublish one socialLink from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
    scheduleUnpublishSocialLink?: Maybe<SocialLink>;
    /** Unpublish one asset from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
    unpublishAsset?: Maybe<Asset>;
    /**
     * Unpublish many Asset documents
     * @deprecated Please use the new paginated many mutation (unpublishManyAssetsConnection)
     */
    unpublishManyAssets: BatchPayload;
    /** Find many Asset documents that match criteria in specified stage and unpublish from target stages */
    unpublishManyAssetsConnection: AssetConnection;
    /**
     * Unpublish many Project documents
     * @deprecated Please use the new paginated many mutation (unpublishManyProjectsConnection)
     */
    unpublishManyProjects: BatchPayload;
    /** Find many Project documents that match criteria in specified stage and unpublish from target stages */
    unpublishManyProjectsConnection: ProjectConnection;
    /**
     * Unpublish many Section documents
     * @deprecated Please use the new paginated many mutation (unpublishManySectionsConnection)
     */
    unpublishManySections: BatchPayload;
    /** Find many Section documents that match criteria in specified stage and unpublish from target stages */
    unpublishManySectionsConnection: SectionConnection;
    /**
     * Unpublish many Skill documents
     * @deprecated Please use the new paginated many mutation (unpublishManySkillsConnection)
     */
    unpublishManySkills: BatchPayload;
    /** Find many Skill documents that match criteria in specified stage and unpublish from target stages */
    unpublishManySkillsConnection: SkillConnection;
    /**
     * Unpublish many SocialLink documents
     * @deprecated Please use the new paginated many mutation (unpublishManySocialLinksConnection)
     */
    unpublishManySocialLinks: BatchPayload;
    /** Find many SocialLink documents that match criteria in specified stage and unpublish from target stages */
    unpublishManySocialLinksConnection: SocialLinkConnection;
    /** Unpublish one project from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
    unpublishProject?: Maybe<Project>;
    /** Unpublish one section from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
    unpublishSection?: Maybe<Section>;
    /** Unpublish one skill from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
    unpublishSkill?: Maybe<Skill>;
    /** Unpublish one socialLink from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
    unpublishSocialLink?: Maybe<SocialLink>;
    /** Update one asset */
    updateAsset?: Maybe<Asset>;
    /**
     * Update many assets
     * @deprecated Please use the new paginated many mutation (updateManyAssetsConnection)
     */
    updateManyAssets: BatchPayload;
    /** Update many Asset documents */
    updateManyAssetsConnection: AssetConnection;
    /**
     * Update many projects
     * @deprecated Please use the new paginated many mutation (updateManyProjectsConnection)
     */
    updateManyProjects: BatchPayload;
    /** Update many Project documents */
    updateManyProjectsConnection: ProjectConnection;
    /**
     * Update many sections
     * @deprecated Please use the new paginated many mutation (updateManySectionsConnection)
     */
    updateManySections: BatchPayload;
    /** Update many Section documents */
    updateManySectionsConnection: SectionConnection;
    /**
     * Update many skills
     * @deprecated Please use the new paginated many mutation (updateManySkillsConnection)
     */
    updateManySkills: BatchPayload;
    /** Update many Skill documents */
    updateManySkillsConnection: SkillConnection;
    /**
     * Update many socialLinks
     * @deprecated Please use the new paginated many mutation (updateManySocialLinksConnection)
     */
    updateManySocialLinks: BatchPayload;
    /** Update many SocialLink documents */
    updateManySocialLinksConnection: SocialLinkConnection;
    /** Update one project */
    updateProject?: Maybe<Project>;
    /** Update one scheduledRelease */
    updateScheduledRelease?: Maybe<ScheduledRelease>;
    /** Update one section */
    updateSection?: Maybe<Section>;
    /** Update one skill */
    updateSkill?: Maybe<Skill>;
    /** Update one socialLink */
    updateSocialLink?: Maybe<SocialLink>;
    /** Upsert one asset */
    upsertAsset?: Maybe<Asset>;
    /** Upsert one project */
    upsertProject?: Maybe<Project>;
    /** Upsert one section */
    upsertSection?: Maybe<Section>;
    /** Upsert one skill */
    upsertSkill?: Maybe<Skill>;
    /** Upsert one socialLink */
    upsertSocialLink?: Maybe<SocialLink>;
};

export type MutationCreateAssetArgs = {
    data: AssetCreateInput;
};

export type MutationCreateProjectArgs = {
    data: ProjectCreateInput;
};

export type MutationCreateScheduledReleaseArgs = {
    data: ScheduledReleaseCreateInput;
};

export type MutationCreateSectionArgs = {
    data: SectionCreateInput;
};

export type MutationCreateSkillArgs = {
    data: SkillCreateInput;
};

export type MutationCreateSocialLinkArgs = {
    data: SocialLinkCreateInput;
};

export type MutationDeleteAssetArgs = {
    where: AssetWhereUniqueInput;
};

export type MutationDeleteManyAssetsArgs = {
    where?: Maybe<AssetManyWhereInput>;
};

export type MutationDeleteManyAssetsConnectionArgs = {
    after?: Maybe<Scalars['ID']>;
    before?: Maybe<Scalars['ID']>;
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    skip?: Maybe<Scalars['Int']>;
    where?: Maybe<AssetManyWhereInput>;
};

export type MutationDeleteManyProjectsArgs = {
    where?: Maybe<ProjectManyWhereInput>;
};

export type MutationDeleteManyProjectsConnectionArgs = {
    after?: Maybe<Scalars['ID']>;
    before?: Maybe<Scalars['ID']>;
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    skip?: Maybe<Scalars['Int']>;
    where?: Maybe<ProjectManyWhereInput>;
};

export type MutationDeleteManySectionsArgs = {
    where?: Maybe<SectionManyWhereInput>;
};

export type MutationDeleteManySectionsConnectionArgs = {
    after?: Maybe<Scalars['ID']>;
    before?: Maybe<Scalars['ID']>;
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    skip?: Maybe<Scalars['Int']>;
    where?: Maybe<SectionManyWhereInput>;
};

export type MutationDeleteManySkillsArgs = {
    where?: Maybe<SkillManyWhereInput>;
};

export type MutationDeleteManySkillsConnectionArgs = {
    after?: Maybe<Scalars['ID']>;
    before?: Maybe<Scalars['ID']>;
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    skip?: Maybe<Scalars['Int']>;
    where?: Maybe<SkillManyWhereInput>;
};

export type MutationDeleteManySocialLinksArgs = {
    where?: Maybe<SocialLinkManyWhereInput>;
};

export type MutationDeleteManySocialLinksConnectionArgs = {
    after?: Maybe<Scalars['ID']>;
    before?: Maybe<Scalars['ID']>;
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    skip?: Maybe<Scalars['Int']>;
    where?: Maybe<SocialLinkManyWhereInput>;
};

export type MutationDeleteProjectArgs = {
    where: ProjectWhereUniqueInput;
};

export type MutationDeleteScheduledOperationArgs = {
    where: ScheduledOperationWhereUniqueInput;
};

export type MutationDeleteScheduledReleaseArgs = {
    where: ScheduledReleaseWhereUniqueInput;
};

export type MutationDeleteSectionArgs = {
    where: SectionWhereUniqueInput;
};

export type MutationDeleteSkillArgs = {
    where: SkillWhereUniqueInput;
};

export type MutationDeleteSocialLinkArgs = {
    where: SocialLinkWhereUniqueInput;
};

export type MutationPublishAssetArgs = {
    locales?: Maybe<Array<Locale>>;
    publishBase?: Maybe<Scalars['Boolean']>;
    to?: Array<Stage>;
    where: AssetWhereUniqueInput;
    withDefaultLocale?: Maybe<Scalars['Boolean']>;
};

export type MutationPublishManyAssetsArgs = {
    locales?: Maybe<Array<Locale>>;
    publishBase?: Maybe<Scalars['Boolean']>;
    to?: Array<Stage>;
    where?: Maybe<AssetManyWhereInput>;
    withDefaultLocale?: Maybe<Scalars['Boolean']>;
};

export type MutationPublishManyAssetsConnectionArgs = {
    after?: Maybe<Scalars['ID']>;
    before?: Maybe<Scalars['ID']>;
    first?: Maybe<Scalars['Int']>;
    from?: Maybe<Stage>;
    last?: Maybe<Scalars['Int']>;
    locales?: Maybe<Array<Locale>>;
    publishBase?: Maybe<Scalars['Boolean']>;
    skip?: Maybe<Scalars['Int']>;
    to?: Array<Stage>;
    where?: Maybe<AssetManyWhereInput>;
    withDefaultLocale?: Maybe<Scalars['Boolean']>;
};

export type MutationPublishManyProjectsArgs = {
    to?: Array<Stage>;
    where?: Maybe<ProjectManyWhereInput>;
};

export type MutationPublishManyProjectsConnectionArgs = {
    after?: Maybe<Scalars['ID']>;
    before?: Maybe<Scalars['ID']>;
    first?: Maybe<Scalars['Int']>;
    from?: Maybe<Stage>;
    last?: Maybe<Scalars['Int']>;
    skip?: Maybe<Scalars['Int']>;
    to?: Array<Stage>;
    where?: Maybe<ProjectManyWhereInput>;
};

export type MutationPublishManySectionsArgs = {
    to?: Array<Stage>;
    where?: Maybe<SectionManyWhereInput>;
};

export type MutationPublishManySectionsConnectionArgs = {
    after?: Maybe<Scalars['ID']>;
    before?: Maybe<Scalars['ID']>;
    first?: Maybe<Scalars['Int']>;
    from?: Maybe<Stage>;
    last?: Maybe<Scalars['Int']>;
    skip?: Maybe<Scalars['Int']>;
    to?: Array<Stage>;
    where?: Maybe<SectionManyWhereInput>;
};

export type MutationPublishManySkillsArgs = {
    to?: Array<Stage>;
    where?: Maybe<SkillManyWhereInput>;
};

export type MutationPublishManySkillsConnectionArgs = {
    after?: Maybe<Scalars['ID']>;
    before?: Maybe<Scalars['ID']>;
    first?: Maybe<Scalars['Int']>;
    from?: Maybe<Stage>;
    last?: Maybe<Scalars['Int']>;
    skip?: Maybe<Scalars['Int']>;
    to?: Array<Stage>;
    where?: Maybe<SkillManyWhereInput>;
};

export type MutationPublishManySocialLinksArgs = {
    to?: Array<Stage>;
    where?: Maybe<SocialLinkManyWhereInput>;
};

export type MutationPublishManySocialLinksConnectionArgs = {
    after?: Maybe<Scalars['ID']>;
    before?: Maybe<Scalars['ID']>;
    first?: Maybe<Scalars['Int']>;
    from?: Maybe<Stage>;
    last?: Maybe<Scalars['Int']>;
    skip?: Maybe<Scalars['Int']>;
    to?: Array<Stage>;
    where?: Maybe<SocialLinkManyWhereInput>;
};

export type MutationPublishProjectArgs = {
    to?: Array<Stage>;
    where: ProjectWhereUniqueInput;
};

export type MutationPublishSectionArgs = {
    to?: Array<Stage>;
    where: SectionWhereUniqueInput;
};

export type MutationPublishSkillArgs = {
    to?: Array<Stage>;
    where: SkillWhereUniqueInput;
};

export type MutationPublishSocialLinkArgs = {
    to?: Array<Stage>;
    where: SocialLinkWhereUniqueInput;
};

export type MutationSchedulePublishAssetArgs = {
    locales?: Maybe<Array<Locale>>;
    publishBase?: Maybe<Scalars['Boolean']>;
    releaseAt?: Maybe<Scalars['DateTime']>;
    releaseId?: Maybe<Scalars['String']>;
    to?: Array<Stage>;
    where: AssetWhereUniqueInput;
    withDefaultLocale?: Maybe<Scalars['Boolean']>;
};

export type MutationSchedulePublishProjectArgs = {
    releaseAt?: Maybe<Scalars['DateTime']>;
    releaseId?: Maybe<Scalars['String']>;
    to?: Array<Stage>;
    where: ProjectWhereUniqueInput;
};

export type MutationSchedulePublishSectionArgs = {
    releaseAt?: Maybe<Scalars['DateTime']>;
    releaseId?: Maybe<Scalars['String']>;
    to?: Array<Stage>;
    where: SectionWhereUniqueInput;
};

export type MutationSchedulePublishSkillArgs = {
    releaseAt?: Maybe<Scalars['DateTime']>;
    releaseId?: Maybe<Scalars['String']>;
    to?: Array<Stage>;
    where: SkillWhereUniqueInput;
};

export type MutationSchedulePublishSocialLinkArgs = {
    releaseAt?: Maybe<Scalars['DateTime']>;
    releaseId?: Maybe<Scalars['String']>;
    to?: Array<Stage>;
    where: SocialLinkWhereUniqueInput;
};

export type MutationScheduleUnpublishAssetArgs = {
    from?: Array<Stage>;
    locales?: Maybe<Array<Locale>>;
    releaseAt?: Maybe<Scalars['DateTime']>;
    releaseId?: Maybe<Scalars['String']>;
    unpublishBase?: Maybe<Scalars['Boolean']>;
    where: AssetWhereUniqueInput;
};

export type MutationScheduleUnpublishProjectArgs = {
    from?: Array<Stage>;
    releaseAt?: Maybe<Scalars['DateTime']>;
    releaseId?: Maybe<Scalars['String']>;
    where: ProjectWhereUniqueInput;
};

export type MutationScheduleUnpublishSectionArgs = {
    from?: Array<Stage>;
    releaseAt?: Maybe<Scalars['DateTime']>;
    releaseId?: Maybe<Scalars['String']>;
    where: SectionWhereUniqueInput;
};

export type MutationScheduleUnpublishSkillArgs = {
    from?: Array<Stage>;
    releaseAt?: Maybe<Scalars['DateTime']>;
    releaseId?: Maybe<Scalars['String']>;
    where: SkillWhereUniqueInput;
};

export type MutationScheduleUnpublishSocialLinkArgs = {
    from?: Array<Stage>;
    releaseAt?: Maybe<Scalars['DateTime']>;
    releaseId?: Maybe<Scalars['String']>;
    where: SocialLinkWhereUniqueInput;
};

export type MutationUnpublishAssetArgs = {
    from?: Array<Stage>;
    locales?: Maybe<Array<Locale>>;
    unpublishBase?: Maybe<Scalars['Boolean']>;
    where: AssetWhereUniqueInput;
};

export type MutationUnpublishManyAssetsArgs = {
    from?: Array<Stage>;
    locales?: Maybe<Array<Locale>>;
    unpublishBase?: Maybe<Scalars['Boolean']>;
    where?: Maybe<AssetManyWhereInput>;
};

export type MutationUnpublishManyAssetsConnectionArgs = {
    after?: Maybe<Scalars['ID']>;
    before?: Maybe<Scalars['ID']>;
    first?: Maybe<Scalars['Int']>;
    from?: Array<Stage>;
    last?: Maybe<Scalars['Int']>;
    locales?: Maybe<Array<Locale>>;
    skip?: Maybe<Scalars['Int']>;
    stage?: Maybe<Stage>;
    unpublishBase?: Maybe<Scalars['Boolean']>;
    where?: Maybe<AssetManyWhereInput>;
};

export type MutationUnpublishManyProjectsArgs = {
    from?: Array<Stage>;
    where?: Maybe<ProjectManyWhereInput>;
};

export type MutationUnpublishManyProjectsConnectionArgs = {
    after?: Maybe<Scalars['ID']>;
    before?: Maybe<Scalars['ID']>;
    first?: Maybe<Scalars['Int']>;
    from?: Array<Stage>;
    last?: Maybe<Scalars['Int']>;
    skip?: Maybe<Scalars['Int']>;
    stage?: Maybe<Stage>;
    where?: Maybe<ProjectManyWhereInput>;
};

export type MutationUnpublishManySectionsArgs = {
    from?: Array<Stage>;
    where?: Maybe<SectionManyWhereInput>;
};

export type MutationUnpublishManySectionsConnectionArgs = {
    after?: Maybe<Scalars['ID']>;
    before?: Maybe<Scalars['ID']>;
    first?: Maybe<Scalars['Int']>;
    from?: Array<Stage>;
    last?: Maybe<Scalars['Int']>;
    skip?: Maybe<Scalars['Int']>;
    stage?: Maybe<Stage>;
    where?: Maybe<SectionManyWhereInput>;
};

export type MutationUnpublishManySkillsArgs = {
    from?: Array<Stage>;
    where?: Maybe<SkillManyWhereInput>;
};

export type MutationUnpublishManySkillsConnectionArgs = {
    after?: Maybe<Scalars['ID']>;
    before?: Maybe<Scalars['ID']>;
    first?: Maybe<Scalars['Int']>;
    from?: Array<Stage>;
    last?: Maybe<Scalars['Int']>;
    skip?: Maybe<Scalars['Int']>;
    stage?: Maybe<Stage>;
    where?: Maybe<SkillManyWhereInput>;
};

export type MutationUnpublishManySocialLinksArgs = {
    from?: Array<Stage>;
    where?: Maybe<SocialLinkManyWhereInput>;
};

export type MutationUnpublishManySocialLinksConnectionArgs = {
    after?: Maybe<Scalars['ID']>;
    before?: Maybe<Scalars['ID']>;
    first?: Maybe<Scalars['Int']>;
    from?: Array<Stage>;
    last?: Maybe<Scalars['Int']>;
    skip?: Maybe<Scalars['Int']>;
    stage?: Maybe<Stage>;
    where?: Maybe<SocialLinkManyWhereInput>;
};

export type MutationUnpublishProjectArgs = {
    from?: Array<Stage>;
    where: ProjectWhereUniqueInput;
};

export type MutationUnpublishSectionArgs = {
    from?: Array<Stage>;
    where: SectionWhereUniqueInput;
};

export type MutationUnpublishSkillArgs = {
    from?: Array<Stage>;
    where: SkillWhereUniqueInput;
};

export type MutationUnpublishSocialLinkArgs = {
    from?: Array<Stage>;
    where: SocialLinkWhereUniqueInput;
};

export type MutationUpdateAssetArgs = {
    data: AssetUpdateInput;
    where: AssetWhereUniqueInput;
};

export type MutationUpdateManyAssetsArgs = {
    data: AssetUpdateManyInput;
    where?: Maybe<AssetManyWhereInput>;
};

export type MutationUpdateManyAssetsConnectionArgs = {
    after?: Maybe<Scalars['ID']>;
    before?: Maybe<Scalars['ID']>;
    data: AssetUpdateManyInput;
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    skip?: Maybe<Scalars['Int']>;
    where?: Maybe<AssetManyWhereInput>;
};

export type MutationUpdateManyProjectsArgs = {
    data: ProjectUpdateManyInput;
    where?: Maybe<ProjectManyWhereInput>;
};

export type MutationUpdateManyProjectsConnectionArgs = {
    after?: Maybe<Scalars['ID']>;
    before?: Maybe<Scalars['ID']>;
    data: ProjectUpdateManyInput;
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    skip?: Maybe<Scalars['Int']>;
    where?: Maybe<ProjectManyWhereInput>;
};

export type MutationUpdateManySectionsArgs = {
    data: SectionUpdateManyInput;
    where?: Maybe<SectionManyWhereInput>;
};

export type MutationUpdateManySectionsConnectionArgs = {
    after?: Maybe<Scalars['ID']>;
    before?: Maybe<Scalars['ID']>;
    data: SectionUpdateManyInput;
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    skip?: Maybe<Scalars['Int']>;
    where?: Maybe<SectionManyWhereInput>;
};

export type MutationUpdateManySkillsArgs = {
    data: SkillUpdateManyInput;
    where?: Maybe<SkillManyWhereInput>;
};

export type MutationUpdateManySkillsConnectionArgs = {
    after?: Maybe<Scalars['ID']>;
    before?: Maybe<Scalars['ID']>;
    data: SkillUpdateManyInput;
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    skip?: Maybe<Scalars['Int']>;
    where?: Maybe<SkillManyWhereInput>;
};

export type MutationUpdateManySocialLinksArgs = {
    data: SocialLinkUpdateManyInput;
    where?: Maybe<SocialLinkManyWhereInput>;
};

export type MutationUpdateManySocialLinksConnectionArgs = {
    after?: Maybe<Scalars['ID']>;
    before?: Maybe<Scalars['ID']>;
    data: SocialLinkUpdateManyInput;
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    skip?: Maybe<Scalars['Int']>;
    where?: Maybe<SocialLinkManyWhereInput>;
};

export type MutationUpdateProjectArgs = {
    data: ProjectUpdateInput;
    where: ProjectWhereUniqueInput;
};

export type MutationUpdateScheduledReleaseArgs = {
    data: ScheduledReleaseUpdateInput;
    where: ScheduledReleaseWhereUniqueInput;
};

export type MutationUpdateSectionArgs = {
    data: SectionUpdateInput;
    where: SectionWhereUniqueInput;
};

export type MutationUpdateSkillArgs = {
    data: SkillUpdateInput;
    where: SkillWhereUniqueInput;
};

export type MutationUpdateSocialLinkArgs = {
    data: SocialLinkUpdateInput;
    where: SocialLinkWhereUniqueInput;
};

export type MutationUpsertAssetArgs = {
    upsert: AssetUpsertInput;
    where: AssetWhereUniqueInput;
};

export type MutationUpsertProjectArgs = {
    upsert: ProjectUpsertInput;
    where: ProjectWhereUniqueInput;
};

export type MutationUpsertSectionArgs = {
    upsert: SectionUpsertInput;
    where: SectionWhereUniqueInput;
};

export type MutationUpsertSkillArgs = {
    upsert: SkillUpsertInput;
    where: SkillWhereUniqueInput;
};

export type MutationUpsertSocialLinkArgs = {
    upsert: SocialLinkUpsertInput;
    where: SocialLinkWhereUniqueInput;
};

/** An object with an ID */
export type Node = {
    /** The id of the object. */
    id: Scalars['ID'];
    /** The Stage of an object */
    stage: Stage;
};

/** Information about pagination in a connection. */
export type PageInfo = {
    __typename?: 'PageInfo';
    /** When paginating forwards, the cursor to continue. */
    endCursor?: Maybe<Scalars['String']>;
    /** When paginating forwards, are there more items? */
    hasNextPage: Scalars['Boolean'];
    /** When paginating backwards, are there more items? */
    hasPreviousPage: Scalars['Boolean'];
    /** Number of items in the current page. */
    pageSize?: Maybe<Scalars['Int']>;
    /** When paginating backwards, the cursor to continue. */
    startCursor?: Maybe<Scalars['String']>;
};

/** Content for project case study page */
export type Project = Node & {
    __typename?: 'Project';
    body?: Maybe<RichText>;
    /** The time the document was created */
    createdAt: Scalars['DateTime'];
    /** User that created this document */
    createdBy?: Maybe<User>;
    description?: Maybe<Scalars['String']>;
    disabled?: Maybe<Scalars['Boolean']>;
    /** Get the document in other stages */
    documentInStages: Array<Project>;
    externalUrl?: Maybe<Scalars['String']>;
    githubRepoUrl?: Maybe<Scalars['String']>;
    /** List of Project versions */
    history: Array<Version>;
    /** The unique identifier */
    id: Scalars['ID'];
    imageDesktop?: Maybe<Asset>;
    lastDeployedOn?: Maybe<Scalars['DateTime']>;
    linkType?: Maybe<ProjectLinkType>;
    /** Order the project is displayed */
    order?: Maybe<Scalars['Int']>;
    overview?: Maybe<Scalars['String']>;
    projectId: Scalars['String'];
    projectPublishDate?: Maybe<Scalars['Date']>;
    projectType: ProjectType;
    /** The time the document was published. Null on documents in draft stage. */
    publishedAt?: Maybe<Scalars['DateTime']>;
    /** User that last published this document */
    publishedBy?: Maybe<User>;
    scheduledIn: Array<ScheduledOperation>;
    /** System stage field */
    stage: Stage;
    storybookUrl?: Maybe<Scalars['String']>;
    /** Listing of team members that also worked on project. Example: 2 Designers, 3 Brand Managers, 1 DevOps, 2 Engineers, etc. */
    team: Array<Scalars['String']>;
    techList: Array<Scalars['String']>;
    title: Scalars['String'];
    /** The time the document was updated */
    updatedAt: Scalars['DateTime'];
    /** User that last updated this document */
    updatedBy?: Maybe<User>;
};

/** Content for project case study page */
export type ProjectCreatedByArgs = {
    locales?: Maybe<Array<Locale>>;
};

/** Content for project case study page */
export type ProjectDocumentInStagesArgs = {
    includeCurrent?: Scalars['Boolean'];
    inheritLocale?: Scalars['Boolean'];
    stages?: Array<Stage>;
};

/** Content for project case study page */
export type ProjectHistoryArgs = {
    limit?: Scalars['Int'];
    skip?: Scalars['Int'];
    stageOverride?: Maybe<Stage>;
};

/** Content for project case study page */
export type ProjectImageDesktopArgs = {
    locales?: Maybe<Array<Locale>>;
};

/** Content for project case study page */
export type ProjectPublishedByArgs = {
    locales?: Maybe<Array<Locale>>;
};

/** Content for project case study page */
export type ProjectScheduledInArgs = {
    after?: Maybe<Scalars['String']>;
    before?: Maybe<Scalars['String']>;
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    locales?: Maybe<Array<Locale>>;
    skip?: Maybe<Scalars['Int']>;
    where?: Maybe<ScheduledOperationWhereInput>;
};

/** Content for project case study page */
export type ProjectUpdatedByArgs = {
    locales?: Maybe<Array<Locale>>;
};

export type ProjectConnectInput = {
    /** Allow to specify document position in list of connected documents, will default to appending at end of list */
    position?: Maybe<ConnectPositionInput>;
    /** Document to connect */
    where: ProjectWhereUniqueInput;
};

/** A connection to a list of items. */
export type ProjectConnection = {
    __typename?: 'ProjectConnection';
    aggregate: Aggregate;
    /** A list of edges. */
    edges: Array<ProjectEdge>;
    /** Information to aid in pagination. */
    pageInfo: PageInfo;
};

/** Content types for projects on case studies */
export enum ProjectContentType {
    Img = 'Img',
    Text = 'Text',
    Video = 'Video',
}

export type ProjectCreateInput = {
    body?: Maybe<Scalars['RichTextAST']>;
    createdAt?: Maybe<Scalars['DateTime']>;
    description?: Maybe<Scalars['String']>;
    disabled?: Maybe<Scalars['Boolean']>;
    externalUrl?: Maybe<Scalars['String']>;
    githubRepoUrl?: Maybe<Scalars['String']>;
    imageDesktop?: Maybe<AssetCreateOneInlineInput>;
    lastDeployedOn?: Maybe<Scalars['DateTime']>;
    linkType?: Maybe<ProjectLinkType>;
    order?: Maybe<Scalars['Int']>;
    overview?: Maybe<Scalars['String']>;
    projectId: Scalars['String'];
    projectPublishDate?: Maybe<Scalars['Date']>;
    projectType: ProjectType;
    storybookUrl?: Maybe<Scalars['String']>;
    team?: Maybe<Array<Scalars['String']>>;
    techList?: Maybe<Array<Scalars['String']>>;
    title: Scalars['String'];
    updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ProjectCreateManyInlineInput = {
    /** Connect multiple existing Project documents */
    connect?: Maybe<Array<ProjectWhereUniqueInput>>;
    /** Create and connect multiple existing Project documents */
    create?: Maybe<Array<ProjectCreateInput>>;
};

export type ProjectCreateOneInlineInput = {
    /** Connect one existing Project document */
    connect?: Maybe<ProjectWhereUniqueInput>;
    /** Create and connect one Project document */
    create?: Maybe<ProjectCreateInput>;
};

/** An edge in a connection. */
export type ProjectEdge = {
    __typename?: 'ProjectEdge';
    /** A cursor for use in pagination. */
    cursor: Scalars['String'];
    /** The item at the end of the edge. */
    node: Project;
};

/** Type of link for the project */
export enum ProjectLinkType {
    CaseStudy = 'Case_Study',
    External = 'External',
}

/** Identifies documents */
export type ProjectManyWhereInput = {
    /** Logical AND on all given filters. */
    AND?: Maybe<Array<ProjectWhereInput>>;
    /** Logical NOT on all given filters combined by AND. */
    NOT?: Maybe<Array<ProjectWhereInput>>;
    /** Logical OR on all given filters. */
    OR?: Maybe<Array<ProjectWhereInput>>;
    /** Contains search across all appropriate fields. */
    _search?: Maybe<Scalars['String']>;
    createdAt?: Maybe<Scalars['DateTime']>;
    /** All values greater than the given value. */
    createdAt_gt?: Maybe<Scalars['DateTime']>;
    /** All values greater than or equal the given value. */
    createdAt_gte?: Maybe<Scalars['DateTime']>;
    /** All values that are contained in given list. */
    createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
    /** All values less than the given value. */
    createdAt_lt?: Maybe<Scalars['DateTime']>;
    /** All values less than or equal the given value. */
    createdAt_lte?: Maybe<Scalars['DateTime']>;
    /** All values that are not equal to given value. */
    createdAt_not?: Maybe<Scalars['DateTime']>;
    /** All values that are not contained in given list. */
    createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
    createdBy?: Maybe<UserWhereInput>;
    description?: Maybe<Scalars['String']>;
    /** All values containing the given string. */
    description_contains?: Maybe<Scalars['String']>;
    /** All values ending with the given string. */
    description_ends_with?: Maybe<Scalars['String']>;
    /** All values that are contained in given list. */
    description_in?: Maybe<Array<Scalars['String']>>;
    /** All values that are not equal to given value. */
    description_not?: Maybe<Scalars['String']>;
    /** All values not containing the given string. */
    description_not_contains?: Maybe<Scalars['String']>;
    /** All values not ending with the given string */
    description_not_ends_with?: Maybe<Scalars['String']>;
    /** All values that are not contained in given list. */
    description_not_in?: Maybe<Array<Scalars['String']>>;
    /** All values not starting with the given string. */
    description_not_starts_with?: Maybe<Scalars['String']>;
    /** All values starting with the given string. */
    description_starts_with?: Maybe<Scalars['String']>;
    disabled?: Maybe<Scalars['Boolean']>;
    /** All values that are not equal to given value. */
    disabled_not?: Maybe<Scalars['Boolean']>;
    externalUrl?: Maybe<Scalars['String']>;
    /** All values containing the given string. */
    externalUrl_contains?: Maybe<Scalars['String']>;
    /** All values ending with the given string. */
    externalUrl_ends_with?: Maybe<Scalars['String']>;
    /** All values that are contained in given list. */
    externalUrl_in?: Maybe<Array<Scalars['String']>>;
    /** All values that are not equal to given value. */
    externalUrl_not?: Maybe<Scalars['String']>;
    /** All values not containing the given string. */
    externalUrl_not_contains?: Maybe<Scalars['String']>;
    /** All values not ending with the given string */
    externalUrl_not_ends_with?: Maybe<Scalars['String']>;
    /** All values that are not contained in given list. */
    externalUrl_not_in?: Maybe<Array<Scalars['String']>>;
    /** All values not starting with the given string. */
    externalUrl_not_starts_with?: Maybe<Scalars['String']>;
    /** All values starting with the given string. */
    externalUrl_starts_with?: Maybe<Scalars['String']>;
    githubRepoUrl?: Maybe<Scalars['String']>;
    /** All values containing the given string. */
    githubRepoUrl_contains?: Maybe<Scalars['String']>;
    /** All values ending with the given string. */
    githubRepoUrl_ends_with?: Maybe<Scalars['String']>;
    /** All values that are contained in given list. */
    githubRepoUrl_in?: Maybe<Array<Scalars['String']>>;
    /** All values that are not equal to given value. */
    githubRepoUrl_not?: Maybe<Scalars['String']>;
    /** All values not containing the given string. */
    githubRepoUrl_not_contains?: Maybe<Scalars['String']>;
    /** All values not ending with the given string */
    githubRepoUrl_not_ends_with?: Maybe<Scalars['String']>;
    /** All values that are not contained in given list. */
    githubRepoUrl_not_in?: Maybe<Array<Scalars['String']>>;
    /** All values not starting with the given string. */
    githubRepoUrl_not_starts_with?: Maybe<Scalars['String']>;
    /** All values starting with the given string. */
    githubRepoUrl_starts_with?: Maybe<Scalars['String']>;
    id?: Maybe<Scalars['ID']>;
    /** All values containing the given string. */
    id_contains?: Maybe<Scalars['ID']>;
    /** All values ending with the given string. */
    id_ends_with?: Maybe<Scalars['ID']>;
    /** All values that are contained in given list. */
    id_in?: Maybe<Array<Scalars['ID']>>;
    /** All values that are not equal to given value. */
    id_not?: Maybe<Scalars['ID']>;
    /** All values not containing the given string. */
    id_not_contains?: Maybe<Scalars['ID']>;
    /** All values not ending with the given string */
    id_not_ends_with?: Maybe<Scalars['ID']>;
    /** All values that are not contained in given list. */
    id_not_in?: Maybe<Array<Scalars['ID']>>;
    /** All values not starting with the given string. */
    id_not_starts_with?: Maybe<Scalars['ID']>;
    /** All values starting with the given string. */
    id_starts_with?: Maybe<Scalars['ID']>;
    imageDesktop?: Maybe<AssetWhereInput>;
    lastDeployedOn?: Maybe<Scalars['DateTime']>;
    /** All values greater than the given value. */
    lastDeployedOn_gt?: Maybe<Scalars['DateTime']>;
    /** All values greater than or equal the given value. */
    lastDeployedOn_gte?: Maybe<Scalars['DateTime']>;
    /** All values that are contained in given list. */
    lastDeployedOn_in?: Maybe<Array<Scalars['DateTime']>>;
    /** All values less than the given value. */
    lastDeployedOn_lt?: Maybe<Scalars['DateTime']>;
    /** All values less than or equal the given value. */
    lastDeployedOn_lte?: Maybe<Scalars['DateTime']>;
    /** All values that are not equal to given value. */
    lastDeployedOn_not?: Maybe<Scalars['DateTime']>;
    /** All values that are not contained in given list. */
    lastDeployedOn_not_in?: Maybe<Array<Scalars['DateTime']>>;
    linkType?: Maybe<ProjectLinkType>;
    /** All values that are contained in given list. */
    linkType_in?: Maybe<Array<ProjectLinkType>>;
    /** All values that are not equal to given value. */
    linkType_not?: Maybe<ProjectLinkType>;
    /** All values that are not contained in given list. */
    linkType_not_in?: Maybe<Array<ProjectLinkType>>;
    order?: Maybe<Scalars['Int']>;
    /** All values greater than the given value. */
    order_gt?: Maybe<Scalars['Int']>;
    /** All values greater than or equal the given value. */
    order_gte?: Maybe<Scalars['Int']>;
    /** All values that are contained in given list. */
    order_in?: Maybe<Array<Scalars['Int']>>;
    /** All values less than the given value. */
    order_lt?: Maybe<Scalars['Int']>;
    /** All values less than or equal the given value. */
    order_lte?: Maybe<Scalars['Int']>;
    /** All values that are not equal to given value. */
    order_not?: Maybe<Scalars['Int']>;
    /** All values that are not contained in given list. */
    order_not_in?: Maybe<Array<Scalars['Int']>>;
    overview?: Maybe<Scalars['String']>;
    /** All values containing the given string. */
    overview_contains?: Maybe<Scalars['String']>;
    /** All values ending with the given string. */
    overview_ends_with?: Maybe<Scalars['String']>;
    /** All values that are contained in given list. */
    overview_in?: Maybe<Array<Scalars['String']>>;
    /** All values that are not equal to given value. */
    overview_not?: Maybe<Scalars['String']>;
    /** All values not containing the given string. */
    overview_not_contains?: Maybe<Scalars['String']>;
    /** All values not ending with the given string */
    overview_not_ends_with?: Maybe<Scalars['String']>;
    /** All values that are not contained in given list. */
    overview_not_in?: Maybe<Array<Scalars['String']>>;
    /** All values not starting with the given string. */
    overview_not_starts_with?: Maybe<Scalars['String']>;
    /** All values starting with the given string. */
    overview_starts_with?: Maybe<Scalars['String']>;
    projectId?: Maybe<Scalars['String']>;
    /** All values containing the given string. */
    projectId_contains?: Maybe<Scalars['String']>;
    /** All values ending with the given string. */
    projectId_ends_with?: Maybe<Scalars['String']>;
    /** All values that are contained in given list. */
    projectId_in?: Maybe<Array<Scalars['String']>>;
    /** All values that are not equal to given value. */
    projectId_not?: Maybe<Scalars['String']>;
    /** All values not containing the given string. */
    projectId_not_contains?: Maybe<Scalars['String']>;
    /** All values not ending with the given string */
    projectId_not_ends_with?: Maybe<Scalars['String']>;
    /** All values that are not contained in given list. */
    projectId_not_in?: Maybe<Array<Scalars['String']>>;
    /** All values not starting with the given string. */
    projectId_not_starts_with?: Maybe<Scalars['String']>;
    /** All values starting with the given string. */
    projectId_starts_with?: Maybe<Scalars['String']>;
    projectPublishDate?: Maybe<Scalars['Date']>;
    /** All values greater than the given value. */
    projectPublishDate_gt?: Maybe<Scalars['Date']>;
    /** All values greater than or equal the given value. */
    projectPublishDate_gte?: Maybe<Scalars['Date']>;
    /** All values that are contained in given list. */
    projectPublishDate_in?: Maybe<Array<Scalars['Date']>>;
    /** All values less than the given value. */
    projectPublishDate_lt?: Maybe<Scalars['Date']>;
    /** All values less than or equal the given value. */
    projectPublishDate_lte?: Maybe<Scalars['Date']>;
    /** All values that are not equal to given value. */
    projectPublishDate_not?: Maybe<Scalars['Date']>;
    /** All values that are not contained in given list. */
    projectPublishDate_not_in?: Maybe<Array<Scalars['Date']>>;
    projectType?: Maybe<ProjectType>;
    /** All values that are contained in given list. */
    projectType_in?: Maybe<Array<ProjectType>>;
    /** All values that are not equal to given value. */
    projectType_not?: Maybe<ProjectType>;
    /** All values that are not contained in given list. */
    projectType_not_in?: Maybe<Array<ProjectType>>;
    publishedAt?: Maybe<Scalars['DateTime']>;
    /** All values greater than the given value. */
    publishedAt_gt?: Maybe<Scalars['DateTime']>;
    /** All values greater than or equal the given value. */
    publishedAt_gte?: Maybe<Scalars['DateTime']>;
    /** All values that are contained in given list. */
    publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
    /** All values less than the given value. */
    publishedAt_lt?: Maybe<Scalars['DateTime']>;
    /** All values less than or equal the given value. */
    publishedAt_lte?: Maybe<Scalars['DateTime']>;
    /** All values that are not equal to given value. */
    publishedAt_not?: Maybe<Scalars['DateTime']>;
    /** All values that are not contained in given list. */
    publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
    publishedBy?: Maybe<UserWhereInput>;
    scheduledIn_every?: Maybe<ScheduledOperationWhereInput>;
    scheduledIn_none?: Maybe<ScheduledOperationWhereInput>;
    scheduledIn_some?: Maybe<ScheduledOperationWhereInput>;
    storybookUrl?: Maybe<Scalars['String']>;
    /** All values containing the given string. */
    storybookUrl_contains?: Maybe<Scalars['String']>;
    /** All values ending with the given string. */
    storybookUrl_ends_with?: Maybe<Scalars['String']>;
    /** All values that are contained in given list. */
    storybookUrl_in?: Maybe<Array<Scalars['String']>>;
    /** All values that are not equal to given value. */
    storybookUrl_not?: Maybe<Scalars['String']>;
    /** All values not containing the given string. */
    storybookUrl_not_contains?: Maybe<Scalars['String']>;
    /** All values not ending with the given string */
    storybookUrl_not_ends_with?: Maybe<Scalars['String']>;
    /** All values that are not contained in given list. */
    storybookUrl_not_in?: Maybe<Array<Scalars['String']>>;
    /** All values not starting with the given string. */
    storybookUrl_not_starts_with?: Maybe<Scalars['String']>;
    /** All values starting with the given string. */
    storybookUrl_starts_with?: Maybe<Scalars['String']>;
    /** Matches if the field array contains *all* items provided to the filter and order does match */
    team?: Maybe<Array<Scalars['String']>>;
    /** Matches if the field array contains *all* items provided to the filter */
    team_contains_all?: Maybe<Array<Scalars['String']>>;
    /** Matches if the field array does not contain any of the items provided to the filter */
    team_contains_none?: Maybe<Array<Scalars['String']>>;
    /** Matches if the field array contains at least one item provided to the filter */
    team_contains_some?: Maybe<Array<Scalars['String']>>;
    /** Matches if the field array does not contains *all* items provided to the filter or order does not match */
    team_not?: Maybe<Array<Scalars['String']>>;
    /** Matches if the field array contains *all* items provided to the filter and order does match */
    techList?: Maybe<Array<Scalars['String']>>;
    /** Matches if the field array contains *all* items provided to the filter */
    techList_contains_all?: Maybe<Array<Scalars['String']>>;
    /** Matches if the field array does not contain any of the items provided to the filter */
    techList_contains_none?: Maybe<Array<Scalars['String']>>;
    /** Matches if the field array contains at least one item provided to the filter */
    techList_contains_some?: Maybe<Array<Scalars['String']>>;
    /** Matches if the field array does not contains *all* items provided to the filter or order does not match */
    techList_not?: Maybe<Array<Scalars['String']>>;
    title?: Maybe<Scalars['String']>;
    /** All values containing the given string. */
    title_contains?: Maybe<Scalars['String']>;
    /** All values ending with the given string. */
    title_ends_with?: Maybe<Scalars['String']>;
    /** All values that are contained in given list. */
    title_in?: Maybe<Array<Scalars['String']>>;
    /** All values that are not equal to given value. */
    title_not?: Maybe<Scalars['String']>;
    /** All values not containing the given string. */
    title_not_contains?: Maybe<Scalars['String']>;
    /** All values not ending with the given string */
    title_not_ends_with?: Maybe<Scalars['String']>;
    /** All values that are not contained in given list. */
    title_not_in?: Maybe<Array<Scalars['String']>>;
    /** All values not starting with the given string. */
    title_not_starts_with?: Maybe<Scalars['String']>;
    /** All values starting with the given string. */
    title_starts_with?: Maybe<Scalars['String']>;
    updatedAt?: Maybe<Scalars['DateTime']>;
    /** All values greater than the given value. */
    updatedAt_gt?: Maybe<Scalars['DateTime']>;
    /** All values greater than or equal the given value. */
    updatedAt_gte?: Maybe<Scalars['DateTime']>;
    /** All values that are contained in given list. */
    updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
    /** All values less than the given value. */
    updatedAt_lt?: Maybe<Scalars['DateTime']>;
    /** All values less than or equal the given value. */
    updatedAt_lte?: Maybe<Scalars['DateTime']>;
    /** All values that are not equal to given value. */
    updatedAt_not?: Maybe<Scalars['DateTime']>;
    /** All values that are not contained in given list. */
    updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
    updatedBy?: Maybe<UserWhereInput>;
};

export enum ProjectOrderByInput {
    CreatedAtAsc = 'createdAt_ASC',
    CreatedAtDesc = 'createdAt_DESC',
    DescriptionAsc = 'description_ASC',
    DescriptionDesc = 'description_DESC',
    DisabledAsc = 'disabled_ASC',
    DisabledDesc = 'disabled_DESC',
    ExternalUrlAsc = 'externalUrl_ASC',
    ExternalUrlDesc = 'externalUrl_DESC',
    GithubRepoUrlAsc = 'githubRepoUrl_ASC',
    GithubRepoUrlDesc = 'githubRepoUrl_DESC',
    IdAsc = 'id_ASC',
    IdDesc = 'id_DESC',
    LastDeployedOnAsc = 'lastDeployedOn_ASC',
    LastDeployedOnDesc = 'lastDeployedOn_DESC',
    LinkTypeAsc = 'linkType_ASC',
    LinkTypeDesc = 'linkType_DESC',
    OrderAsc = 'order_ASC',
    OrderDesc = 'order_DESC',
    OverviewAsc = 'overview_ASC',
    OverviewDesc = 'overview_DESC',
    ProjectIdAsc = 'projectId_ASC',
    ProjectIdDesc = 'projectId_DESC',
    ProjectPublishDateAsc = 'projectPublishDate_ASC',
    ProjectPublishDateDesc = 'projectPublishDate_DESC',
    ProjectTypeAsc = 'projectType_ASC',
    ProjectTypeDesc = 'projectType_DESC',
    PublishedAtAsc = 'publishedAt_ASC',
    PublishedAtDesc = 'publishedAt_DESC',
    StorybookUrlAsc = 'storybookUrl_ASC',
    StorybookUrlDesc = 'storybookUrl_DESC',
    TeamAsc = 'team_ASC',
    TeamDesc = 'team_DESC',
    TechListAsc = 'techList_ASC',
    TechListDesc = 'techList_DESC',
    TitleAsc = 'title_ASC',
    TitleDesc = 'title_DESC',
    UpdatedAtAsc = 'updatedAt_ASC',
    UpdatedAtDesc = 'updatedAt_DESC',
}

/** Type of project */
export enum ProjectType {
    Experiment = 'Experiment',
    Work = 'Work',
}

export type ProjectUpdateInput = {
    body?: Maybe<Scalars['RichTextAST']>;
    description?: Maybe<Scalars['String']>;
    disabled?: Maybe<Scalars['Boolean']>;
    externalUrl?: Maybe<Scalars['String']>;
    githubRepoUrl?: Maybe<Scalars['String']>;
    imageDesktop?: Maybe<AssetUpdateOneInlineInput>;
    lastDeployedOn?: Maybe<Scalars['DateTime']>;
    linkType?: Maybe<ProjectLinkType>;
    order?: Maybe<Scalars['Int']>;
    overview?: Maybe<Scalars['String']>;
    projectId?: Maybe<Scalars['String']>;
    projectPublishDate?: Maybe<Scalars['Date']>;
    projectType?: Maybe<ProjectType>;
    storybookUrl?: Maybe<Scalars['String']>;
    team?: Maybe<Array<Scalars['String']>>;
    techList?: Maybe<Array<Scalars['String']>>;
    title?: Maybe<Scalars['String']>;
};

export type ProjectUpdateManyInlineInput = {
    /** Connect multiple existing Project documents */
    connect?: Maybe<Array<ProjectConnectInput>>;
    /** Create and connect multiple Project documents */
    create?: Maybe<Array<ProjectCreateInput>>;
    /** Delete multiple Project documents */
    delete?: Maybe<Array<ProjectWhereUniqueInput>>;
    /** Disconnect multiple Project documents */
    disconnect?: Maybe<Array<ProjectWhereUniqueInput>>;
    /** Override currently-connected documents with multiple existing Project documents */
    set?: Maybe<Array<ProjectWhereUniqueInput>>;
    /** Update multiple Project documents */
    update?: Maybe<Array<ProjectUpdateWithNestedWhereUniqueInput>>;
    /** Upsert multiple Project documents */
    upsert?: Maybe<Array<ProjectUpsertWithNestedWhereUniqueInput>>;
};

export type ProjectUpdateManyInput = {
    body?: Maybe<Scalars['RichTextAST']>;
    description?: Maybe<Scalars['String']>;
    disabled?: Maybe<Scalars['Boolean']>;
    externalUrl?: Maybe<Scalars['String']>;
    githubRepoUrl?: Maybe<Scalars['String']>;
    lastDeployedOn?: Maybe<Scalars['DateTime']>;
    linkType?: Maybe<ProjectLinkType>;
    order?: Maybe<Scalars['Int']>;
    overview?: Maybe<Scalars['String']>;
    projectPublishDate?: Maybe<Scalars['Date']>;
    projectType?: Maybe<ProjectType>;
    storybookUrl?: Maybe<Scalars['String']>;
    team?: Maybe<Array<Scalars['String']>>;
    techList?: Maybe<Array<Scalars['String']>>;
    title?: Maybe<Scalars['String']>;
};

export type ProjectUpdateManyWithNestedWhereInput = {
    /** Update many input */
    data: ProjectUpdateManyInput;
    /** Document search */
    where: ProjectWhereInput;
};

export type ProjectUpdateOneInlineInput = {
    /** Connect existing Project document */
    connect?: Maybe<ProjectWhereUniqueInput>;
    /** Create and connect one Project document */
    create?: Maybe<ProjectCreateInput>;
    /** Delete currently connected Project document */
    delete?: Maybe<Scalars['Boolean']>;
    /** Disconnect currently connected Project document */
    disconnect?: Maybe<Scalars['Boolean']>;
    /** Update single Project document */
    update?: Maybe<ProjectUpdateWithNestedWhereUniqueInput>;
    /** Upsert single Project document */
    upsert?: Maybe<ProjectUpsertWithNestedWhereUniqueInput>;
};

export type ProjectUpdateWithNestedWhereUniqueInput = {
    /** Document to update */
    data: ProjectUpdateInput;
    /** Unique document search */
    where: ProjectWhereUniqueInput;
};

export type ProjectUpsertInput = {
    /** Create document if it didn't exist */
    create: ProjectCreateInput;
    /** Update document if it exists */
    update: ProjectUpdateInput;
};

export type ProjectUpsertWithNestedWhereUniqueInput = {
    /** Upsert data */
    data: ProjectUpsertInput;
    /** Unique document search */
    where: ProjectWhereUniqueInput;
};

/** Identifies documents */
export type ProjectWhereInput = {
    /** Logical AND on all given filters. */
    AND?: Maybe<Array<ProjectWhereInput>>;
    /** Logical NOT on all given filters combined by AND. */
    NOT?: Maybe<Array<ProjectWhereInput>>;
    /** Logical OR on all given filters. */
    OR?: Maybe<Array<ProjectWhereInput>>;
    /** Contains search across all appropriate fields. */
    _search?: Maybe<Scalars['String']>;
    createdAt?: Maybe<Scalars['DateTime']>;
    /** All values greater than the given value. */
    createdAt_gt?: Maybe<Scalars['DateTime']>;
    /** All values greater than or equal the given value. */
    createdAt_gte?: Maybe<Scalars['DateTime']>;
    /** All values that are contained in given list. */
    createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
    /** All values less than the given value. */
    createdAt_lt?: Maybe<Scalars['DateTime']>;
    /** All values less than or equal the given value. */
    createdAt_lte?: Maybe<Scalars['DateTime']>;
    /** All values that are not equal to given value. */
    createdAt_not?: Maybe<Scalars['DateTime']>;
    /** All values that are not contained in given list. */
    createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
    createdBy?: Maybe<UserWhereInput>;
    description?: Maybe<Scalars['String']>;
    /** All values containing the given string. */
    description_contains?: Maybe<Scalars['String']>;
    /** All values ending with the given string. */
    description_ends_with?: Maybe<Scalars['String']>;
    /** All values that are contained in given list. */
    description_in?: Maybe<Array<Scalars['String']>>;
    /** All values that are not equal to given value. */
    description_not?: Maybe<Scalars['String']>;
    /** All values not containing the given string. */
    description_not_contains?: Maybe<Scalars['String']>;
    /** All values not ending with the given string */
    description_not_ends_with?: Maybe<Scalars['String']>;
    /** All values that are not contained in given list. */
    description_not_in?: Maybe<Array<Scalars['String']>>;
    /** All values not starting with the given string. */
    description_not_starts_with?: Maybe<Scalars['String']>;
    /** All values starting with the given string. */
    description_starts_with?: Maybe<Scalars['String']>;
    disabled?: Maybe<Scalars['Boolean']>;
    /** All values that are not equal to given value. */
    disabled_not?: Maybe<Scalars['Boolean']>;
    externalUrl?: Maybe<Scalars['String']>;
    /** All values containing the given string. */
    externalUrl_contains?: Maybe<Scalars['String']>;
    /** All values ending with the given string. */
    externalUrl_ends_with?: Maybe<Scalars['String']>;
    /** All values that are contained in given list. */
    externalUrl_in?: Maybe<Array<Scalars['String']>>;
    /** All values that are not equal to given value. */
    externalUrl_not?: Maybe<Scalars['String']>;
    /** All values not containing the given string. */
    externalUrl_not_contains?: Maybe<Scalars['String']>;
    /** All values not ending with the given string */
    externalUrl_not_ends_with?: Maybe<Scalars['String']>;
    /** All values that are not contained in given list. */
    externalUrl_not_in?: Maybe<Array<Scalars['String']>>;
    /** All values not starting with the given string. */
    externalUrl_not_starts_with?: Maybe<Scalars['String']>;
    /** All values starting with the given string. */
    externalUrl_starts_with?: Maybe<Scalars['String']>;
    githubRepoUrl?: Maybe<Scalars['String']>;
    /** All values containing the given string. */
    githubRepoUrl_contains?: Maybe<Scalars['String']>;
    /** All values ending with the given string. */
    githubRepoUrl_ends_with?: Maybe<Scalars['String']>;
    /** All values that are contained in given list. */
    githubRepoUrl_in?: Maybe<Array<Scalars['String']>>;
    /** All values that are not equal to given value. */
    githubRepoUrl_not?: Maybe<Scalars['String']>;
    /** All values not containing the given string. */
    githubRepoUrl_not_contains?: Maybe<Scalars['String']>;
    /** All values not ending with the given string */
    githubRepoUrl_not_ends_with?: Maybe<Scalars['String']>;
    /** All values that are not contained in given list. */
    githubRepoUrl_not_in?: Maybe<Array<Scalars['String']>>;
    /** All values not starting with the given string. */
    githubRepoUrl_not_starts_with?: Maybe<Scalars['String']>;
    /** All values starting with the given string. */
    githubRepoUrl_starts_with?: Maybe<Scalars['String']>;
    id?: Maybe<Scalars['ID']>;
    /** All values containing the given string. */
    id_contains?: Maybe<Scalars['ID']>;
    /** All values ending with the given string. */
    id_ends_with?: Maybe<Scalars['ID']>;
    /** All values that are contained in given list. */
    id_in?: Maybe<Array<Scalars['ID']>>;
    /** All values that are not equal to given value. */
    id_not?: Maybe<Scalars['ID']>;
    /** All values not containing the given string. */
    id_not_contains?: Maybe<Scalars['ID']>;
    /** All values not ending with the given string */
    id_not_ends_with?: Maybe<Scalars['ID']>;
    /** All values that are not contained in given list. */
    id_not_in?: Maybe<Array<Scalars['ID']>>;
    /** All values not starting with the given string. */
    id_not_starts_with?: Maybe<Scalars['ID']>;
    /** All values starting with the given string. */
    id_starts_with?: Maybe<Scalars['ID']>;
    imageDesktop?: Maybe<AssetWhereInput>;
    lastDeployedOn?: Maybe<Scalars['DateTime']>;
    /** All values greater than the given value. */
    lastDeployedOn_gt?: Maybe<Scalars['DateTime']>;
    /** All values greater than or equal the given value. */
    lastDeployedOn_gte?: Maybe<Scalars['DateTime']>;
    /** All values that are contained in given list. */
    lastDeployedOn_in?: Maybe<Array<Scalars['DateTime']>>;
    /** All values less than the given value. */
    lastDeployedOn_lt?: Maybe<Scalars['DateTime']>;
    /** All values less than or equal the given value. */
    lastDeployedOn_lte?: Maybe<Scalars['DateTime']>;
    /** All values that are not equal to given value. */
    lastDeployedOn_not?: Maybe<Scalars['DateTime']>;
    /** All values that are not contained in given list. */
    lastDeployedOn_not_in?: Maybe<Array<Scalars['DateTime']>>;
    linkType?: Maybe<ProjectLinkType>;
    /** All values that are contained in given list. */
    linkType_in?: Maybe<Array<ProjectLinkType>>;
    /** All values that are not equal to given value. */
    linkType_not?: Maybe<ProjectLinkType>;
    /** All values that are not contained in given list. */
    linkType_not_in?: Maybe<Array<ProjectLinkType>>;
    order?: Maybe<Scalars['Int']>;
    /** All values greater than the given value. */
    order_gt?: Maybe<Scalars['Int']>;
    /** All values greater than or equal the given value. */
    order_gte?: Maybe<Scalars['Int']>;
    /** All values that are contained in given list. */
    order_in?: Maybe<Array<Scalars['Int']>>;
    /** All values less than the given value. */
    order_lt?: Maybe<Scalars['Int']>;
    /** All values less than or equal the given value. */
    order_lte?: Maybe<Scalars['Int']>;
    /** All values that are not equal to given value. */
    order_not?: Maybe<Scalars['Int']>;
    /** All values that are not contained in given list. */
    order_not_in?: Maybe<Array<Scalars['Int']>>;
    overview?: Maybe<Scalars['String']>;
    /** All values containing the given string. */
    overview_contains?: Maybe<Scalars['String']>;
    /** All values ending with the given string. */
    overview_ends_with?: Maybe<Scalars['String']>;
    /** All values that are contained in given list. */
    overview_in?: Maybe<Array<Scalars['String']>>;
    /** All values that are not equal to given value. */
    overview_not?: Maybe<Scalars['String']>;
    /** All values not containing the given string. */
    overview_not_contains?: Maybe<Scalars['String']>;
    /** All values not ending with the given string */
    overview_not_ends_with?: Maybe<Scalars['String']>;
    /** All values that are not contained in given list. */
    overview_not_in?: Maybe<Array<Scalars['String']>>;
    /** All values not starting with the given string. */
    overview_not_starts_with?: Maybe<Scalars['String']>;
    /** All values starting with the given string. */
    overview_starts_with?: Maybe<Scalars['String']>;
    projectId?: Maybe<Scalars['String']>;
    /** All values containing the given string. */
    projectId_contains?: Maybe<Scalars['String']>;
    /** All values ending with the given string. */
    projectId_ends_with?: Maybe<Scalars['String']>;
    /** All values that are contained in given list. */
    projectId_in?: Maybe<Array<Scalars['String']>>;
    /** All values that are not equal to given value. */
    projectId_not?: Maybe<Scalars['String']>;
    /** All values not containing the given string. */
    projectId_not_contains?: Maybe<Scalars['String']>;
    /** All values not ending with the given string */
    projectId_not_ends_with?: Maybe<Scalars['String']>;
    /** All values that are not contained in given list. */
    projectId_not_in?: Maybe<Array<Scalars['String']>>;
    /** All values not starting with the given string. */
    projectId_not_starts_with?: Maybe<Scalars['String']>;
    /** All values starting with the given string. */
    projectId_starts_with?: Maybe<Scalars['String']>;
    projectPublishDate?: Maybe<Scalars['Date']>;
    /** All values greater than the given value. */
    projectPublishDate_gt?: Maybe<Scalars['Date']>;
    /** All values greater than or equal the given value. */
    projectPublishDate_gte?: Maybe<Scalars['Date']>;
    /** All values that are contained in given list. */
    projectPublishDate_in?: Maybe<Array<Scalars['Date']>>;
    /** All values less than the given value. */
    projectPublishDate_lt?: Maybe<Scalars['Date']>;
    /** All values less than or equal the given value. */
    projectPublishDate_lte?: Maybe<Scalars['Date']>;
    /** All values that are not equal to given value. */
    projectPublishDate_not?: Maybe<Scalars['Date']>;
    /** All values that are not contained in given list. */
    projectPublishDate_not_in?: Maybe<Array<Scalars['Date']>>;
    projectType?: Maybe<ProjectType>;
    /** All values that are contained in given list. */
    projectType_in?: Maybe<Array<ProjectType>>;
    /** All values that are not equal to given value. */
    projectType_not?: Maybe<ProjectType>;
    /** All values that are not contained in given list. */
    projectType_not_in?: Maybe<Array<ProjectType>>;
    publishedAt?: Maybe<Scalars['DateTime']>;
    /** All values greater than the given value. */
    publishedAt_gt?: Maybe<Scalars['DateTime']>;
    /** All values greater than or equal the given value. */
    publishedAt_gte?: Maybe<Scalars['DateTime']>;
    /** All values that are contained in given list. */
    publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
    /** All values less than the given value. */
    publishedAt_lt?: Maybe<Scalars['DateTime']>;
    /** All values less than or equal the given value. */
    publishedAt_lte?: Maybe<Scalars['DateTime']>;
    /** All values that are not equal to given value. */
    publishedAt_not?: Maybe<Scalars['DateTime']>;
    /** All values that are not contained in given list. */
    publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
    publishedBy?: Maybe<UserWhereInput>;
    scheduledIn_every?: Maybe<ScheduledOperationWhereInput>;
    scheduledIn_none?: Maybe<ScheduledOperationWhereInput>;
    scheduledIn_some?: Maybe<ScheduledOperationWhereInput>;
    storybookUrl?: Maybe<Scalars['String']>;
    /** All values containing the given string. */
    storybookUrl_contains?: Maybe<Scalars['String']>;
    /** All values ending with the given string. */
    storybookUrl_ends_with?: Maybe<Scalars['String']>;
    /** All values that are contained in given list. */
    storybookUrl_in?: Maybe<Array<Scalars['String']>>;
    /** All values that are not equal to given value. */
    storybookUrl_not?: Maybe<Scalars['String']>;
    /** All values not containing the given string. */
    storybookUrl_not_contains?: Maybe<Scalars['String']>;
    /** All values not ending with the given string */
    storybookUrl_not_ends_with?: Maybe<Scalars['String']>;
    /** All values that are not contained in given list. */
    storybookUrl_not_in?: Maybe<Array<Scalars['String']>>;
    /** All values not starting with the given string. */
    storybookUrl_not_starts_with?: Maybe<Scalars['String']>;
    /** All values starting with the given string. */
    storybookUrl_starts_with?: Maybe<Scalars['String']>;
    /** Matches if the field array contains *all* items provided to the filter and order does match */
    team?: Maybe<Array<Scalars['String']>>;
    /** Matches if the field array contains *all* items provided to the filter */
    team_contains_all?: Maybe<Array<Scalars['String']>>;
    /** Matches if the field array does not contain any of the items provided to the filter */
    team_contains_none?: Maybe<Array<Scalars['String']>>;
    /** Matches if the field array contains at least one item provided to the filter */
    team_contains_some?: Maybe<Array<Scalars['String']>>;
    /** Matches if the field array does not contains *all* items provided to the filter or order does not match */
    team_not?: Maybe<Array<Scalars['String']>>;
    /** Matches if the field array contains *all* items provided to the filter and order does match */
    techList?: Maybe<Array<Scalars['String']>>;
    /** Matches if the field array contains *all* items provided to the filter */
    techList_contains_all?: Maybe<Array<Scalars['String']>>;
    /** Matches if the field array does not contain any of the items provided to the filter */
    techList_contains_none?: Maybe<Array<Scalars['String']>>;
    /** Matches if the field array contains at least one item provided to the filter */
    techList_contains_some?: Maybe<Array<Scalars['String']>>;
    /** Matches if the field array does not contains *all* items provided to the filter or order does not match */
    techList_not?: Maybe<Array<Scalars['String']>>;
    title?: Maybe<Scalars['String']>;
    /** All values containing the given string. */
    title_contains?: Maybe<Scalars['String']>;
    /** All values ending with the given string. */
    title_ends_with?: Maybe<Scalars['String']>;
    /** All values that are contained in given list. */
    title_in?: Maybe<Array<Scalars['String']>>;
    /** All values that are not equal to given value. */
    title_not?: Maybe<Scalars['String']>;
    /** All values not containing the given string. */
    title_not_contains?: Maybe<Scalars['String']>;
    /** All values not ending with the given string */
    title_not_ends_with?: Maybe<Scalars['String']>;
    /** All values that are not contained in given list. */
    title_not_in?: Maybe<Array<Scalars['String']>>;
    /** All values not starting with the given string. */
    title_not_starts_with?: Maybe<Scalars['String']>;
    /** All values starting with the given string. */
    title_starts_with?: Maybe<Scalars['String']>;
    updatedAt?: Maybe<Scalars['DateTime']>;
    /** All values greater than the given value. */
    updatedAt_gt?: Maybe<Scalars['DateTime']>;
    /** All values greater than or equal the given value. */
    updatedAt_gte?: Maybe<Scalars['DateTime']>;
    /** All values that are contained in given list. */
    updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
    /** All values less than the given value. */
    updatedAt_lt?: Maybe<Scalars['DateTime']>;
    /** All values less than or equal the given value. */
    updatedAt_lte?: Maybe<Scalars['DateTime']>;
    /** All values that are not equal to given value. */
    updatedAt_not?: Maybe<Scalars['DateTime']>;
    /** All values that are not contained in given list. */
    updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
    updatedBy?: Maybe<UserWhereInput>;
};

/** References Project record uniquely */
export type ProjectWhereUniqueInput = {
    id?: Maybe<Scalars['ID']>;
    projectId?: Maybe<Scalars['String']>;
};

export type PublishLocaleInput = {
    /** Locales to publish */
    locale: Locale;
    /** Stages to publish selected locales to */
    stages: Array<Stage>;
};

export type Query = {
    __typename?: 'Query';
    /** Retrieve a single asset */
    asset?: Maybe<Asset>;
    /** Retrieve document version */
    assetVersion?: Maybe<DocumentVersion>;
    /** Retrieve multiple assets */
    assets: Array<Asset>;
    /** Retrieve multiple assets using the Relay connection interface */
    assetsConnection: AssetConnection;
    /** Fetches an object given its ID */
    node?: Maybe<Node>;
    /** Retrieve a single project */
    project?: Maybe<Project>;
    /** Retrieve document version */
    projectVersion?: Maybe<DocumentVersion>;
    /** Retrieve multiple projects */
    projects: Array<Project>;
    /** Retrieve multiple projects using the Relay connection interface */
    projectsConnection: ProjectConnection;
    /** Retrieve a single scheduledOperation */
    scheduledOperation?: Maybe<ScheduledOperation>;
    /** Retrieve multiple scheduledOperations */
    scheduledOperations: Array<ScheduledOperation>;
    /** Retrieve multiple scheduledOperations using the Relay connection interface */
    scheduledOperationsConnection: ScheduledOperationConnection;
    /** Retrieve a single scheduledRelease */
    scheduledRelease?: Maybe<ScheduledRelease>;
    /** Retrieve multiple scheduledReleases */
    scheduledReleases: Array<ScheduledRelease>;
    /** Retrieve multiple scheduledReleases using the Relay connection interface */
    scheduledReleasesConnection: ScheduledReleaseConnection;
    /** Retrieve a single section */
    section?: Maybe<Section>;
    /** Retrieve document version */
    sectionVersion?: Maybe<DocumentVersion>;
    /** Retrieve multiple sections */
    sections: Array<Section>;
    /** Retrieve multiple sections using the Relay connection interface */
    sectionsConnection: SectionConnection;
    /** Retrieve a single skill */
    skill?: Maybe<Skill>;
    /** Retrieve document version */
    skillVersion?: Maybe<DocumentVersion>;
    /** Retrieve multiple skills */
    skills: Array<Skill>;
    /** Retrieve multiple skills using the Relay connection interface */
    skillsConnection: SkillConnection;
    /** Retrieve a single socialLink */
    socialLink?: Maybe<SocialLink>;
    /** Retrieve document version */
    socialLinkVersion?: Maybe<DocumentVersion>;
    /** Retrieve multiple socialLinks */
    socialLinks: Array<SocialLink>;
    /** Retrieve multiple socialLinks using the Relay connection interface */
    socialLinksConnection: SocialLinkConnection;
    /** Retrieve a single user */
    user?: Maybe<User>;
    /** Retrieve multiple users */
    users: Array<User>;
    /** Retrieve multiple users using the Relay connection interface */
    usersConnection: UserConnection;
};

export type QueryAssetArgs = {
    locales?: Array<Locale>;
    stage?: Stage;
    where: AssetWhereUniqueInput;
};

export type QueryAssetVersionArgs = {
    where: VersionWhereInput;
};

export type QueryAssetsArgs = {
    after?: Maybe<Scalars['String']>;
    before?: Maybe<Scalars['String']>;
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    locales?: Array<Locale>;
    orderBy?: Maybe<AssetOrderByInput>;
    skip?: Maybe<Scalars['Int']>;
    stage?: Stage;
    where?: Maybe<AssetWhereInput>;
};

export type QueryAssetsConnectionArgs = {
    after?: Maybe<Scalars['String']>;
    before?: Maybe<Scalars['String']>;
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    locales?: Array<Locale>;
    orderBy?: Maybe<AssetOrderByInput>;
    skip?: Maybe<Scalars['Int']>;
    stage?: Stage;
    where?: Maybe<AssetWhereInput>;
};

export type QueryNodeArgs = {
    id: Scalars['ID'];
    locales?: Array<Locale>;
    stage?: Stage;
};

export type QueryProjectArgs = {
    locales?: Array<Locale>;
    stage?: Stage;
    where: ProjectWhereUniqueInput;
};

export type QueryProjectVersionArgs = {
    where: VersionWhereInput;
};

export type QueryProjectsArgs = {
    after?: Maybe<Scalars['String']>;
    before?: Maybe<Scalars['String']>;
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    locales?: Array<Locale>;
    orderBy?: Maybe<ProjectOrderByInput>;
    skip?: Maybe<Scalars['Int']>;
    stage?: Stage;
    where?: Maybe<ProjectWhereInput>;
};

export type QueryProjectsConnectionArgs = {
    after?: Maybe<Scalars['String']>;
    before?: Maybe<Scalars['String']>;
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    locales?: Array<Locale>;
    orderBy?: Maybe<ProjectOrderByInput>;
    skip?: Maybe<Scalars['Int']>;
    stage?: Stage;
    where?: Maybe<ProjectWhereInput>;
};

export type QueryScheduledOperationArgs = {
    locales?: Array<Locale>;
    stage?: Stage;
    where: ScheduledOperationWhereUniqueInput;
};

export type QueryScheduledOperationsArgs = {
    after?: Maybe<Scalars['String']>;
    before?: Maybe<Scalars['String']>;
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    locales?: Array<Locale>;
    orderBy?: Maybe<ScheduledOperationOrderByInput>;
    skip?: Maybe<Scalars['Int']>;
    stage?: Stage;
    where?: Maybe<ScheduledOperationWhereInput>;
};

export type QueryScheduledOperationsConnectionArgs = {
    after?: Maybe<Scalars['String']>;
    before?: Maybe<Scalars['String']>;
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    locales?: Array<Locale>;
    orderBy?: Maybe<ScheduledOperationOrderByInput>;
    skip?: Maybe<Scalars['Int']>;
    stage?: Stage;
    where?: Maybe<ScheduledOperationWhereInput>;
};

export type QueryScheduledReleaseArgs = {
    locales?: Array<Locale>;
    stage?: Stage;
    where: ScheduledReleaseWhereUniqueInput;
};

export type QueryScheduledReleasesArgs = {
    after?: Maybe<Scalars['String']>;
    before?: Maybe<Scalars['String']>;
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    locales?: Array<Locale>;
    orderBy?: Maybe<ScheduledReleaseOrderByInput>;
    skip?: Maybe<Scalars['Int']>;
    stage?: Stage;
    where?: Maybe<ScheduledReleaseWhereInput>;
};

export type QueryScheduledReleasesConnectionArgs = {
    after?: Maybe<Scalars['String']>;
    before?: Maybe<Scalars['String']>;
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    locales?: Array<Locale>;
    orderBy?: Maybe<ScheduledReleaseOrderByInput>;
    skip?: Maybe<Scalars['Int']>;
    stage?: Stage;
    where?: Maybe<ScheduledReleaseWhereInput>;
};

export type QuerySectionArgs = {
    locales?: Array<Locale>;
    stage?: Stage;
    where: SectionWhereUniqueInput;
};

export type QuerySectionVersionArgs = {
    where: VersionWhereInput;
};

export type QuerySectionsArgs = {
    after?: Maybe<Scalars['String']>;
    before?: Maybe<Scalars['String']>;
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    locales?: Array<Locale>;
    orderBy?: Maybe<SectionOrderByInput>;
    skip?: Maybe<Scalars['Int']>;
    stage?: Stage;
    where?: Maybe<SectionWhereInput>;
};

export type QuerySectionsConnectionArgs = {
    after?: Maybe<Scalars['String']>;
    before?: Maybe<Scalars['String']>;
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    locales?: Array<Locale>;
    orderBy?: Maybe<SectionOrderByInput>;
    skip?: Maybe<Scalars['Int']>;
    stage?: Stage;
    where?: Maybe<SectionWhereInput>;
};

export type QuerySkillArgs = {
    locales?: Array<Locale>;
    stage?: Stage;
    where: SkillWhereUniqueInput;
};

export type QuerySkillVersionArgs = {
    where: VersionWhereInput;
};

export type QuerySkillsArgs = {
    after?: Maybe<Scalars['String']>;
    before?: Maybe<Scalars['String']>;
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    locales?: Array<Locale>;
    orderBy?: Maybe<SkillOrderByInput>;
    skip?: Maybe<Scalars['Int']>;
    stage?: Stage;
    where?: Maybe<SkillWhereInput>;
};

export type QuerySkillsConnectionArgs = {
    after?: Maybe<Scalars['String']>;
    before?: Maybe<Scalars['String']>;
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    locales?: Array<Locale>;
    orderBy?: Maybe<SkillOrderByInput>;
    skip?: Maybe<Scalars['Int']>;
    stage?: Stage;
    where?: Maybe<SkillWhereInput>;
};

export type QuerySocialLinkArgs = {
    locales?: Array<Locale>;
    stage?: Stage;
    where: SocialLinkWhereUniqueInput;
};

export type QuerySocialLinkVersionArgs = {
    where: VersionWhereInput;
};

export type QuerySocialLinksArgs = {
    after?: Maybe<Scalars['String']>;
    before?: Maybe<Scalars['String']>;
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    locales?: Array<Locale>;
    orderBy?: Maybe<SocialLinkOrderByInput>;
    skip?: Maybe<Scalars['Int']>;
    stage?: Stage;
    where?: Maybe<SocialLinkWhereInput>;
};

export type QuerySocialLinksConnectionArgs = {
    after?: Maybe<Scalars['String']>;
    before?: Maybe<Scalars['String']>;
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    locales?: Array<Locale>;
    orderBy?: Maybe<SocialLinkOrderByInput>;
    skip?: Maybe<Scalars['Int']>;
    stage?: Stage;
    where?: Maybe<SocialLinkWhereInput>;
};

export type QueryUserArgs = {
    locales?: Array<Locale>;
    stage?: Stage;
    where: UserWhereUniqueInput;
};

export type QueryUsersArgs = {
    after?: Maybe<Scalars['String']>;
    before?: Maybe<Scalars['String']>;
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    locales?: Array<Locale>;
    orderBy?: Maybe<UserOrderByInput>;
    skip?: Maybe<Scalars['Int']>;
    stage?: Stage;
    where?: Maybe<UserWhereInput>;
};

export type QueryUsersConnectionArgs = {
    after?: Maybe<Scalars['String']>;
    before?: Maybe<Scalars['String']>;
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    locales?: Array<Locale>;
    orderBy?: Maybe<UserOrderByInput>;
    skip?: Maybe<Scalars['Int']>;
    stage?: Stage;
    where?: Maybe<UserWhereInput>;
};

/** Representing a RGBA color value: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba() */
export type Rgba = {
    __typename?: 'RGBA';
    a: Scalars['RGBATransparency'];
    b: Scalars['RGBAHue'];
    g: Scalars['RGBAHue'];
    r: Scalars['RGBAHue'];
};

/** Input type representing a RGBA color value: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba() */
export type RgbaInput = {
    a: Scalars['RGBATransparency'];
    b: Scalars['RGBAHue'];
    g: Scalars['RGBAHue'];
    r: Scalars['RGBAHue'];
};

/** Custom type representing a rich text value comprising of raw rich text ast, html, markdown and text values */
export type RichText = {
    __typename?: 'RichText';
    /** Returns HTMl representation */
    html: Scalars['String'];
    /** Returns Markdown representation */
    markdown: Scalars['String'];
    /** Returns AST representation */
    raw: Scalars['RichTextAST'];
    /** Returns plain-text contents of RichText */
    text: Scalars['String'];
};

/** Scheduled Operation system model */
export type ScheduledOperation = Node & {
    __typename?: 'ScheduledOperation';
    affectedDocuments: Array<ScheduledOperationAffectedDocument>;
    /** The time the document was created */
    createdAt: Scalars['DateTime'];
    /** User that created this document */
    createdBy?: Maybe<User>;
    /** Operation description */
    description?: Maybe<Scalars['String']>;
    /** Get the document in other stages */
    documentInStages: Array<ScheduledOperation>;
    /** Operation error message */
    errorMessage?: Maybe<Scalars['String']>;
    /** The unique identifier */
    id: Scalars['ID'];
    /** The time the document was published. Null on documents in draft stage. */
    publishedAt?: Maybe<Scalars['DateTime']>;
    /** User that last published this document */
    publishedBy?: Maybe<User>;
    /** Raw operation payload including all details, this field is subject to change */
    rawPayload: Scalars['Json'];
    /** The release this operation is scheduled for */
    release?: Maybe<ScheduledRelease>;
    /** System stage field */
    stage: Stage;
    /** operation Status */
    status: ScheduledOperationStatus;
    /** The time the document was updated */
    updatedAt: Scalars['DateTime'];
    /** User that last updated this document */
    updatedBy?: Maybe<User>;
};

/** Scheduled Operation system model */
export type ScheduledOperationAffectedDocumentsArgs = {
    after?: Maybe<Scalars['String']>;
    before?: Maybe<Scalars['String']>;
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    locales?: Maybe<Array<Locale>>;
    skip?: Maybe<Scalars['Int']>;
};

/** Scheduled Operation system model */
export type ScheduledOperationCreatedByArgs = {
    locales?: Maybe<Array<Locale>>;
};

/** Scheduled Operation system model */
export type ScheduledOperationDocumentInStagesArgs = {
    includeCurrent?: Scalars['Boolean'];
    inheritLocale?: Scalars['Boolean'];
    stages?: Array<Stage>;
};

/** Scheduled Operation system model */
export type ScheduledOperationPublishedByArgs = {
    locales?: Maybe<Array<Locale>>;
};

/** Scheduled Operation system model */
export type ScheduledOperationReleaseArgs = {
    locales?: Maybe<Array<Locale>>;
};

/** Scheduled Operation system model */
export type ScheduledOperationUpdatedByArgs = {
    locales?: Maybe<Array<Locale>>;
};

export type ScheduledOperationAffectedDocument = Asset | Project | Section | Skill | SocialLink;

export type ScheduledOperationConnectInput = {
    /** Allow to specify document position in list of connected documents, will default to appending at end of list */
    position?: Maybe<ConnectPositionInput>;
    /** Document to connect */
    where: ScheduledOperationWhereUniqueInput;
};

/** A connection to a list of items. */
export type ScheduledOperationConnection = {
    __typename?: 'ScheduledOperationConnection';
    aggregate: Aggregate;
    /** A list of edges. */
    edges: Array<ScheduledOperationEdge>;
    /** Information to aid in pagination. */
    pageInfo: PageInfo;
};

export type ScheduledOperationCreateManyInlineInput = {
    /** Connect multiple existing ScheduledOperation documents */
    connect?: Maybe<Array<ScheduledOperationWhereUniqueInput>>;
};

export type ScheduledOperationCreateOneInlineInput = {
    /** Connect one existing ScheduledOperation document */
    connect?: Maybe<ScheduledOperationWhereUniqueInput>;
};

/** An edge in a connection. */
export type ScheduledOperationEdge = {
    __typename?: 'ScheduledOperationEdge';
    /** A cursor for use in pagination. */
    cursor: Scalars['String'];
    /** The item at the end of the edge. */
    node: ScheduledOperation;
};

/** Identifies documents */
export type ScheduledOperationManyWhereInput = {
    /** Logical AND on all given filters. */
    AND?: Maybe<Array<ScheduledOperationWhereInput>>;
    /** Logical NOT on all given filters combined by AND. */
    NOT?: Maybe<Array<ScheduledOperationWhereInput>>;
    /** Logical OR on all given filters. */
    OR?: Maybe<Array<ScheduledOperationWhereInput>>;
    /** Contains search across all appropriate fields. */
    _search?: Maybe<Scalars['String']>;
    createdAt?: Maybe<Scalars['DateTime']>;
    /** All values greater than the given value. */
    createdAt_gt?: Maybe<Scalars['DateTime']>;
    /** All values greater than or equal the given value. */
    createdAt_gte?: Maybe<Scalars['DateTime']>;
    /** All values that are contained in given list. */
    createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
    /** All values less than the given value. */
    createdAt_lt?: Maybe<Scalars['DateTime']>;
    /** All values less than or equal the given value. */
    createdAt_lte?: Maybe<Scalars['DateTime']>;
    /** All values that are not equal to given value. */
    createdAt_not?: Maybe<Scalars['DateTime']>;
    /** All values that are not contained in given list. */
    createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
    createdBy?: Maybe<UserWhereInput>;
    description?: Maybe<Scalars['String']>;
    /** All values containing the given string. */
    description_contains?: Maybe<Scalars['String']>;
    /** All values ending with the given string. */
    description_ends_with?: Maybe<Scalars['String']>;
    /** All values that are contained in given list. */
    description_in?: Maybe<Array<Scalars['String']>>;
    /** All values that are not equal to given value. */
    description_not?: Maybe<Scalars['String']>;
    /** All values not containing the given string. */
    description_not_contains?: Maybe<Scalars['String']>;
    /** All values not ending with the given string */
    description_not_ends_with?: Maybe<Scalars['String']>;
    /** All values that are not contained in given list. */
    description_not_in?: Maybe<Array<Scalars['String']>>;
    /** All values not starting with the given string. */
    description_not_starts_with?: Maybe<Scalars['String']>;
    /** All values starting with the given string. */
    description_starts_with?: Maybe<Scalars['String']>;
    errorMessage?: Maybe<Scalars['String']>;
    /** All values containing the given string. */
    errorMessage_contains?: Maybe<Scalars['String']>;
    /** All values ending with the given string. */
    errorMessage_ends_with?: Maybe<Scalars['String']>;
    /** All values that are contained in given list. */
    errorMessage_in?: Maybe<Array<Scalars['String']>>;
    /** All values that are not equal to given value. */
    errorMessage_not?: Maybe<Scalars['String']>;
    /** All values not containing the given string. */
    errorMessage_not_contains?: Maybe<Scalars['String']>;
    /** All values not ending with the given string */
    errorMessage_not_ends_with?: Maybe<Scalars['String']>;
    /** All values that are not contained in given list. */
    errorMessage_not_in?: Maybe<Array<Scalars['String']>>;
    /** All values not starting with the given string. */
    errorMessage_not_starts_with?: Maybe<Scalars['String']>;
    /** All values starting with the given string. */
    errorMessage_starts_with?: Maybe<Scalars['String']>;
    id?: Maybe<Scalars['ID']>;
    /** All values containing the given string. */
    id_contains?: Maybe<Scalars['ID']>;
    /** All values ending with the given string. */
    id_ends_with?: Maybe<Scalars['ID']>;
    /** All values that are contained in given list. */
    id_in?: Maybe<Array<Scalars['ID']>>;
    /** All values that are not equal to given value. */
    id_not?: Maybe<Scalars['ID']>;
    /** All values not containing the given string. */
    id_not_contains?: Maybe<Scalars['ID']>;
    /** All values not ending with the given string */
    id_not_ends_with?: Maybe<Scalars['ID']>;
    /** All values that are not contained in given list. */
    id_not_in?: Maybe<Array<Scalars['ID']>>;
    /** All values not starting with the given string. */
    id_not_starts_with?: Maybe<Scalars['ID']>;
    /** All values starting with the given string. */
    id_starts_with?: Maybe<Scalars['ID']>;
    publishedAt?: Maybe<Scalars['DateTime']>;
    /** All values greater than the given value. */
    publishedAt_gt?: Maybe<Scalars['DateTime']>;
    /** All values greater than or equal the given value. */
    publishedAt_gte?: Maybe<Scalars['DateTime']>;
    /** All values that are contained in given list. */
    publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
    /** All values less than the given value. */
    publishedAt_lt?: Maybe<Scalars['DateTime']>;
    /** All values less than or equal the given value. */
    publishedAt_lte?: Maybe<Scalars['DateTime']>;
    /** All values that are not equal to given value. */
    publishedAt_not?: Maybe<Scalars['DateTime']>;
    /** All values that are not contained in given list. */
    publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
    publishedBy?: Maybe<UserWhereInput>;
    release?: Maybe<ScheduledReleaseWhereInput>;
    status?: Maybe<ScheduledOperationStatus>;
    /** All values that are contained in given list. */
    status_in?: Maybe<Array<ScheduledOperationStatus>>;
    /** All values that are not equal to given value. */
    status_not?: Maybe<ScheduledOperationStatus>;
    /** All values that are not contained in given list. */
    status_not_in?: Maybe<Array<ScheduledOperationStatus>>;
    updatedAt?: Maybe<Scalars['DateTime']>;
    /** All values greater than the given value. */
    updatedAt_gt?: Maybe<Scalars['DateTime']>;
    /** All values greater than or equal the given value. */
    updatedAt_gte?: Maybe<Scalars['DateTime']>;
    /** All values that are contained in given list. */
    updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
    /** All values less than the given value. */
    updatedAt_lt?: Maybe<Scalars['DateTime']>;
    /** All values less than or equal the given value. */
    updatedAt_lte?: Maybe<Scalars['DateTime']>;
    /** All values that are not equal to given value. */
    updatedAt_not?: Maybe<Scalars['DateTime']>;
    /** All values that are not contained in given list. */
    updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
    updatedBy?: Maybe<UserWhereInput>;
};

export enum ScheduledOperationOrderByInput {
    CreatedAtAsc = 'createdAt_ASC',
    CreatedAtDesc = 'createdAt_DESC',
    DescriptionAsc = 'description_ASC',
    DescriptionDesc = 'description_DESC',
    ErrorMessageAsc = 'errorMessage_ASC',
    ErrorMessageDesc = 'errorMessage_DESC',
    IdAsc = 'id_ASC',
    IdDesc = 'id_DESC',
    PublishedAtAsc = 'publishedAt_ASC',
    PublishedAtDesc = 'publishedAt_DESC',
    StatusAsc = 'status_ASC',
    StatusDesc = 'status_DESC',
    UpdatedAtAsc = 'updatedAt_ASC',
    UpdatedAtDesc = 'updatedAt_DESC',
}

/** System Scheduled Operation Status */
export enum ScheduledOperationStatus {
    Canceled = 'CANCELED',
    Completed = 'COMPLETED',
    Failed = 'FAILED',
    InProgress = 'IN_PROGRESS',
    Pending = 'PENDING',
}

export type ScheduledOperationUpdateManyInlineInput = {
    /** Connect multiple existing ScheduledOperation documents */
    connect?: Maybe<Array<ScheduledOperationConnectInput>>;
    /** Disconnect multiple ScheduledOperation documents */
    disconnect?: Maybe<Array<ScheduledOperationWhereUniqueInput>>;
    /** Override currently-connected documents with multiple existing ScheduledOperation documents */
    set?: Maybe<Array<ScheduledOperationWhereUniqueInput>>;
};

export type ScheduledOperationUpdateOneInlineInput = {
    /** Connect existing ScheduledOperation document */
    connect?: Maybe<ScheduledOperationWhereUniqueInput>;
    /** Disconnect currently connected ScheduledOperation document */
    disconnect?: Maybe<Scalars['Boolean']>;
};

/** Identifies documents */
export type ScheduledOperationWhereInput = {
    /** Logical AND on all given filters. */
    AND?: Maybe<Array<ScheduledOperationWhereInput>>;
    /** Logical NOT on all given filters combined by AND. */
    NOT?: Maybe<Array<ScheduledOperationWhereInput>>;
    /** Logical OR on all given filters. */
    OR?: Maybe<Array<ScheduledOperationWhereInput>>;
    /** Contains search across all appropriate fields. */
    _search?: Maybe<Scalars['String']>;
    createdAt?: Maybe<Scalars['DateTime']>;
    /** All values greater than the given value. */
    createdAt_gt?: Maybe<Scalars['DateTime']>;
    /** All values greater than or equal the given value. */
    createdAt_gte?: Maybe<Scalars['DateTime']>;
    /** All values that are contained in given list. */
    createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
    /** All values less than the given value. */
    createdAt_lt?: Maybe<Scalars['DateTime']>;
    /** All values less than or equal the given value. */
    createdAt_lte?: Maybe<Scalars['DateTime']>;
    /** All values that are not equal to given value. */
    createdAt_not?: Maybe<Scalars['DateTime']>;
    /** All values that are not contained in given list. */
    createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
    createdBy?: Maybe<UserWhereInput>;
    description?: Maybe<Scalars['String']>;
    /** All values containing the given string. */
    description_contains?: Maybe<Scalars['String']>;
    /** All values ending with the given string. */
    description_ends_with?: Maybe<Scalars['String']>;
    /** All values that are contained in given list. */
    description_in?: Maybe<Array<Scalars['String']>>;
    /** All values that are not equal to given value. */
    description_not?: Maybe<Scalars['String']>;
    /** All values not containing the given string. */
    description_not_contains?: Maybe<Scalars['String']>;
    /** All values not ending with the given string */
    description_not_ends_with?: Maybe<Scalars['String']>;
    /** All values that are not contained in given list. */
    description_not_in?: Maybe<Array<Scalars['String']>>;
    /** All values not starting with the given string. */
    description_not_starts_with?: Maybe<Scalars['String']>;
    /** All values starting with the given string. */
    description_starts_with?: Maybe<Scalars['String']>;
    errorMessage?: Maybe<Scalars['String']>;
    /** All values containing the given string. */
    errorMessage_contains?: Maybe<Scalars['String']>;
    /** All values ending with the given string. */
    errorMessage_ends_with?: Maybe<Scalars['String']>;
    /** All values that are contained in given list. */
    errorMessage_in?: Maybe<Array<Scalars['String']>>;
    /** All values that are not equal to given value. */
    errorMessage_not?: Maybe<Scalars['String']>;
    /** All values not containing the given string. */
    errorMessage_not_contains?: Maybe<Scalars['String']>;
    /** All values not ending with the given string */
    errorMessage_not_ends_with?: Maybe<Scalars['String']>;
    /** All values that are not contained in given list. */
    errorMessage_not_in?: Maybe<Array<Scalars['String']>>;
    /** All values not starting with the given string. */
    errorMessage_not_starts_with?: Maybe<Scalars['String']>;
    /** All values starting with the given string. */
    errorMessage_starts_with?: Maybe<Scalars['String']>;
    id?: Maybe<Scalars['ID']>;
    /** All values containing the given string. */
    id_contains?: Maybe<Scalars['ID']>;
    /** All values ending with the given string. */
    id_ends_with?: Maybe<Scalars['ID']>;
    /** All values that are contained in given list. */
    id_in?: Maybe<Array<Scalars['ID']>>;
    /** All values that are not equal to given value. */
    id_not?: Maybe<Scalars['ID']>;
    /** All values not containing the given string. */
    id_not_contains?: Maybe<Scalars['ID']>;
    /** All values not ending with the given string */
    id_not_ends_with?: Maybe<Scalars['ID']>;
    /** All values that are not contained in given list. */
    id_not_in?: Maybe<Array<Scalars['ID']>>;
    /** All values not starting with the given string. */
    id_not_starts_with?: Maybe<Scalars['ID']>;
    /** All values starting with the given string. */
    id_starts_with?: Maybe<Scalars['ID']>;
    publishedAt?: Maybe<Scalars['DateTime']>;
    /** All values greater than the given value. */
    publishedAt_gt?: Maybe<Scalars['DateTime']>;
    /** All values greater than or equal the given value. */
    publishedAt_gte?: Maybe<Scalars['DateTime']>;
    /** All values that are contained in given list. */
    publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
    /** All values less than the given value. */
    publishedAt_lt?: Maybe<Scalars['DateTime']>;
    /** All values less than or equal the given value. */
    publishedAt_lte?: Maybe<Scalars['DateTime']>;
    /** All values that are not equal to given value. */
    publishedAt_not?: Maybe<Scalars['DateTime']>;
    /** All values that are not contained in given list. */
    publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
    publishedBy?: Maybe<UserWhereInput>;
    release?: Maybe<ScheduledReleaseWhereInput>;
    status?: Maybe<ScheduledOperationStatus>;
    /** All values that are contained in given list. */
    status_in?: Maybe<Array<ScheduledOperationStatus>>;
    /** All values that are not equal to given value. */
    status_not?: Maybe<ScheduledOperationStatus>;
    /** All values that are not contained in given list. */
    status_not_in?: Maybe<Array<ScheduledOperationStatus>>;
    updatedAt?: Maybe<Scalars['DateTime']>;
    /** All values greater than the given value. */
    updatedAt_gt?: Maybe<Scalars['DateTime']>;
    /** All values greater than or equal the given value. */
    updatedAt_gte?: Maybe<Scalars['DateTime']>;
    /** All values that are contained in given list. */
    updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
    /** All values less than the given value. */
    updatedAt_lt?: Maybe<Scalars['DateTime']>;
    /** All values less than or equal the given value. */
    updatedAt_lte?: Maybe<Scalars['DateTime']>;
    /** All values that are not equal to given value. */
    updatedAt_not?: Maybe<Scalars['DateTime']>;
    /** All values that are not contained in given list. */
    updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
    updatedBy?: Maybe<UserWhereInput>;
};

/** References ScheduledOperation record uniquely */
export type ScheduledOperationWhereUniqueInput = {
    id?: Maybe<Scalars['ID']>;
};

/** Scheduled Release system model */
export type ScheduledRelease = Node & {
    __typename?: 'ScheduledRelease';
    /** The time the document was created */
    createdAt: Scalars['DateTime'];
    /** User that created this document */
    createdBy?: Maybe<User>;
    /** Release description */
    description?: Maybe<Scalars['String']>;
    /** Get the document in other stages */
    documentInStages: Array<ScheduledRelease>;
    /** Release error message */
    errorMessage?: Maybe<Scalars['String']>;
    /** The unique identifier */
    id: Scalars['ID'];
    /** Whether scheduled release should be run */
    isActive: Scalars['Boolean'];
    /** Whether scheduled release is implicit */
    isImplicit: Scalars['Boolean'];
    /** Operations to run with this release */
    operations: Array<ScheduledOperation>;
    /** The time the document was published. Null on documents in draft stage. */
    publishedAt?: Maybe<Scalars['DateTime']>;
    /** User that last published this document */
    publishedBy?: Maybe<User>;
    /** Release date and time */
    releaseAt?: Maybe<Scalars['DateTime']>;
    /** System stage field */
    stage: Stage;
    /** Release Status */
    status: ScheduledReleaseStatus;
    /** Release Title */
    title?: Maybe<Scalars['String']>;
    /** The time the document was updated */
    updatedAt: Scalars['DateTime'];
    /** User that last updated this document */
    updatedBy?: Maybe<User>;
};

/** Scheduled Release system model */
export type ScheduledReleaseCreatedByArgs = {
    locales?: Maybe<Array<Locale>>;
};

/** Scheduled Release system model */
export type ScheduledReleaseDocumentInStagesArgs = {
    includeCurrent?: Scalars['Boolean'];
    inheritLocale?: Scalars['Boolean'];
    stages?: Array<Stage>;
};

/** Scheduled Release system model */
export type ScheduledReleaseOperationsArgs = {
    after?: Maybe<Scalars['String']>;
    before?: Maybe<Scalars['String']>;
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    locales?: Maybe<Array<Locale>>;
    orderBy?: Maybe<ScheduledOperationOrderByInput>;
    skip?: Maybe<Scalars['Int']>;
    where?: Maybe<ScheduledOperationWhereInput>;
};

/** Scheduled Release system model */
export type ScheduledReleasePublishedByArgs = {
    locales?: Maybe<Array<Locale>>;
};

/** Scheduled Release system model */
export type ScheduledReleaseUpdatedByArgs = {
    locales?: Maybe<Array<Locale>>;
};

export type ScheduledReleaseConnectInput = {
    /** Allow to specify document position in list of connected documents, will default to appending at end of list */
    position?: Maybe<ConnectPositionInput>;
    /** Document to connect */
    where: ScheduledReleaseWhereUniqueInput;
};

/** A connection to a list of items. */
export type ScheduledReleaseConnection = {
    __typename?: 'ScheduledReleaseConnection';
    aggregate: Aggregate;
    /** A list of edges. */
    edges: Array<ScheduledReleaseEdge>;
    /** Information to aid in pagination. */
    pageInfo: PageInfo;
};

export type ScheduledReleaseCreateInput = {
    createdAt?: Maybe<Scalars['DateTime']>;
    description?: Maybe<Scalars['String']>;
    errorMessage?: Maybe<Scalars['String']>;
    isActive?: Maybe<Scalars['Boolean']>;
    releaseAt?: Maybe<Scalars['DateTime']>;
    title?: Maybe<Scalars['String']>;
    updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ScheduledReleaseCreateManyInlineInput = {
    /** Connect multiple existing ScheduledRelease documents */
    connect?: Maybe<Array<ScheduledReleaseWhereUniqueInput>>;
    /** Create and connect multiple existing ScheduledRelease documents */
    create?: Maybe<Array<ScheduledReleaseCreateInput>>;
};

export type ScheduledReleaseCreateOneInlineInput = {
    /** Connect one existing ScheduledRelease document */
    connect?: Maybe<ScheduledReleaseWhereUniqueInput>;
    /** Create and connect one ScheduledRelease document */
    create?: Maybe<ScheduledReleaseCreateInput>;
};

/** An edge in a connection. */
export type ScheduledReleaseEdge = {
    __typename?: 'ScheduledReleaseEdge';
    /** A cursor for use in pagination. */
    cursor: Scalars['String'];
    /** The item at the end of the edge. */
    node: ScheduledRelease;
};

/** Identifies documents */
export type ScheduledReleaseManyWhereInput = {
    /** Logical AND on all given filters. */
    AND?: Maybe<Array<ScheduledReleaseWhereInput>>;
    /** Logical NOT on all given filters combined by AND. */
    NOT?: Maybe<Array<ScheduledReleaseWhereInput>>;
    /** Logical OR on all given filters. */
    OR?: Maybe<Array<ScheduledReleaseWhereInput>>;
    /** Contains search across all appropriate fields. */
    _search?: Maybe<Scalars['String']>;
    createdAt?: Maybe<Scalars['DateTime']>;
    /** All values greater than the given value. */
    createdAt_gt?: Maybe<Scalars['DateTime']>;
    /** All values greater than or equal the given value. */
    createdAt_gte?: Maybe<Scalars['DateTime']>;
    /** All values that are contained in given list. */
    createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
    /** All values less than the given value. */
    createdAt_lt?: Maybe<Scalars['DateTime']>;
    /** All values less than or equal the given value. */
    createdAt_lte?: Maybe<Scalars['DateTime']>;
    /** All values that are not equal to given value. */
    createdAt_not?: Maybe<Scalars['DateTime']>;
    /** All values that are not contained in given list. */
    createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
    createdBy?: Maybe<UserWhereInput>;
    description?: Maybe<Scalars['String']>;
    /** All values containing the given string. */
    description_contains?: Maybe<Scalars['String']>;
    /** All values ending with the given string. */
    description_ends_with?: Maybe<Scalars['String']>;
    /** All values that are contained in given list. */
    description_in?: Maybe<Array<Scalars['String']>>;
    /** All values that are not equal to given value. */
    description_not?: Maybe<Scalars['String']>;
    /** All values not containing the given string. */
    description_not_contains?: Maybe<Scalars['String']>;
    /** All values not ending with the given string */
    description_not_ends_with?: Maybe<Scalars['String']>;
    /** All values that are not contained in given list. */
    description_not_in?: Maybe<Array<Scalars['String']>>;
    /** All values not starting with the given string. */
    description_not_starts_with?: Maybe<Scalars['String']>;
    /** All values starting with the given string. */
    description_starts_with?: Maybe<Scalars['String']>;
    errorMessage?: Maybe<Scalars['String']>;
    /** All values containing the given string. */
    errorMessage_contains?: Maybe<Scalars['String']>;
    /** All values ending with the given string. */
    errorMessage_ends_with?: Maybe<Scalars['String']>;
    /** All values that are contained in given list. */
    errorMessage_in?: Maybe<Array<Scalars['String']>>;
    /** All values that are not equal to given value. */
    errorMessage_not?: Maybe<Scalars['String']>;
    /** All values not containing the given string. */
    errorMessage_not_contains?: Maybe<Scalars['String']>;
    /** All values not ending with the given string */
    errorMessage_not_ends_with?: Maybe<Scalars['String']>;
    /** All values that are not contained in given list. */
    errorMessage_not_in?: Maybe<Array<Scalars['String']>>;
    /** All values not starting with the given string. */
    errorMessage_not_starts_with?: Maybe<Scalars['String']>;
    /** All values starting with the given string. */
    errorMessage_starts_with?: Maybe<Scalars['String']>;
    id?: Maybe<Scalars['ID']>;
    /** All values containing the given string. */
    id_contains?: Maybe<Scalars['ID']>;
    /** All values ending with the given string. */
    id_ends_with?: Maybe<Scalars['ID']>;
    /** All values that are contained in given list. */
    id_in?: Maybe<Array<Scalars['ID']>>;
    /** All values that are not equal to given value. */
    id_not?: Maybe<Scalars['ID']>;
    /** All values not containing the given string. */
    id_not_contains?: Maybe<Scalars['ID']>;
    /** All values not ending with the given string */
    id_not_ends_with?: Maybe<Scalars['ID']>;
    /** All values that are not contained in given list. */
    id_not_in?: Maybe<Array<Scalars['ID']>>;
    /** All values not starting with the given string. */
    id_not_starts_with?: Maybe<Scalars['ID']>;
    /** All values starting with the given string. */
    id_starts_with?: Maybe<Scalars['ID']>;
    isActive?: Maybe<Scalars['Boolean']>;
    /** All values that are not equal to given value. */
    isActive_not?: Maybe<Scalars['Boolean']>;
    isImplicit?: Maybe<Scalars['Boolean']>;
    /** All values that are not equal to given value. */
    isImplicit_not?: Maybe<Scalars['Boolean']>;
    operations_every?: Maybe<ScheduledOperationWhereInput>;
    operations_none?: Maybe<ScheduledOperationWhereInput>;
    operations_some?: Maybe<ScheduledOperationWhereInput>;
    publishedAt?: Maybe<Scalars['DateTime']>;
    /** All values greater than the given value. */
    publishedAt_gt?: Maybe<Scalars['DateTime']>;
    /** All values greater than or equal the given value. */
    publishedAt_gte?: Maybe<Scalars['DateTime']>;
    /** All values that are contained in given list. */
    publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
    /** All values less than the given value. */
    publishedAt_lt?: Maybe<Scalars['DateTime']>;
    /** All values less than or equal the given value. */
    publishedAt_lte?: Maybe<Scalars['DateTime']>;
    /** All values that are not equal to given value. */
    publishedAt_not?: Maybe<Scalars['DateTime']>;
    /** All values that are not contained in given list. */
    publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
    publishedBy?: Maybe<UserWhereInput>;
    releaseAt?: Maybe<Scalars['DateTime']>;
    /** All values greater than the given value. */
    releaseAt_gt?: Maybe<Scalars['DateTime']>;
    /** All values greater than or equal the given value. */
    releaseAt_gte?: Maybe<Scalars['DateTime']>;
    /** All values that are contained in given list. */
    releaseAt_in?: Maybe<Array<Scalars['DateTime']>>;
    /** All values less than the given value. */
    releaseAt_lt?: Maybe<Scalars['DateTime']>;
    /** All values less than or equal the given value. */
    releaseAt_lte?: Maybe<Scalars['DateTime']>;
    /** All values that are not equal to given value. */
    releaseAt_not?: Maybe<Scalars['DateTime']>;
    /** All values that are not contained in given list. */
    releaseAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
    status?: Maybe<ScheduledReleaseStatus>;
    /** All values that are contained in given list. */
    status_in?: Maybe<Array<ScheduledReleaseStatus>>;
    /** All values that are not equal to given value. */
    status_not?: Maybe<ScheduledReleaseStatus>;
    /** All values that are not contained in given list. */
    status_not_in?: Maybe<Array<ScheduledReleaseStatus>>;
    title?: Maybe<Scalars['String']>;
    /** All values containing the given string. */
    title_contains?: Maybe<Scalars['String']>;
    /** All values ending with the given string. */
    title_ends_with?: Maybe<Scalars['String']>;
    /** All values that are contained in given list. */
    title_in?: Maybe<Array<Scalars['String']>>;
    /** All values that are not equal to given value. */
    title_not?: Maybe<Scalars['String']>;
    /** All values not containing the given string. */
    title_not_contains?: Maybe<Scalars['String']>;
    /** All values not ending with the given string */
    title_not_ends_with?: Maybe<Scalars['String']>;
    /** All values that are not contained in given list. */
    title_not_in?: Maybe<Array<Scalars['String']>>;
    /** All values not starting with the given string. */
    title_not_starts_with?: Maybe<Scalars['String']>;
    /** All values starting with the given string. */
    title_starts_with?: Maybe<Scalars['String']>;
    updatedAt?: Maybe<Scalars['DateTime']>;
    /** All values greater than the given value. */
    updatedAt_gt?: Maybe<Scalars['DateTime']>;
    /** All values greater than or equal the given value. */
    updatedAt_gte?: Maybe<Scalars['DateTime']>;
    /** All values that are contained in given list. */
    updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
    /** All values less than the given value. */
    updatedAt_lt?: Maybe<Scalars['DateTime']>;
    /** All values less than or equal the given value. */
    updatedAt_lte?: Maybe<Scalars['DateTime']>;
    /** All values that are not equal to given value. */
    updatedAt_not?: Maybe<Scalars['DateTime']>;
    /** All values that are not contained in given list. */
    updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
    updatedBy?: Maybe<UserWhereInput>;
};

export enum ScheduledReleaseOrderByInput {
    CreatedAtAsc = 'createdAt_ASC',
    CreatedAtDesc = 'createdAt_DESC',
    DescriptionAsc = 'description_ASC',
    DescriptionDesc = 'description_DESC',
    ErrorMessageAsc = 'errorMessage_ASC',
    ErrorMessageDesc = 'errorMessage_DESC',
    IdAsc = 'id_ASC',
    IdDesc = 'id_DESC',
    IsActiveAsc = 'isActive_ASC',
    IsActiveDesc = 'isActive_DESC',
    IsImplicitAsc = 'isImplicit_ASC',
    IsImplicitDesc = 'isImplicit_DESC',
    PublishedAtAsc = 'publishedAt_ASC',
    PublishedAtDesc = 'publishedAt_DESC',
    ReleaseAtAsc = 'releaseAt_ASC',
    ReleaseAtDesc = 'releaseAt_DESC',
    StatusAsc = 'status_ASC',
    StatusDesc = 'status_DESC',
    TitleAsc = 'title_ASC',
    TitleDesc = 'title_DESC',
    UpdatedAtAsc = 'updatedAt_ASC',
    UpdatedAtDesc = 'updatedAt_DESC',
}

/** System Scheduled Release Status */
export enum ScheduledReleaseStatus {
    Completed = 'COMPLETED',
    Failed = 'FAILED',
    InProgress = 'IN_PROGRESS',
    Pending = 'PENDING',
}

export type ScheduledReleaseUpdateInput = {
    description?: Maybe<Scalars['String']>;
    errorMessage?: Maybe<Scalars['String']>;
    isActive?: Maybe<Scalars['Boolean']>;
    releaseAt?: Maybe<Scalars['DateTime']>;
    title?: Maybe<Scalars['String']>;
};

export type ScheduledReleaseUpdateManyInlineInput = {
    /** Connect multiple existing ScheduledRelease documents */
    connect?: Maybe<Array<ScheduledReleaseConnectInput>>;
    /** Create and connect multiple ScheduledRelease documents */
    create?: Maybe<Array<ScheduledReleaseCreateInput>>;
    /** Delete multiple ScheduledRelease documents */
    delete?: Maybe<Array<ScheduledReleaseWhereUniqueInput>>;
    /** Disconnect multiple ScheduledRelease documents */
    disconnect?: Maybe<Array<ScheduledReleaseWhereUniqueInput>>;
    /** Override currently-connected documents with multiple existing ScheduledRelease documents */
    set?: Maybe<Array<ScheduledReleaseWhereUniqueInput>>;
    /** Update multiple ScheduledRelease documents */
    update?: Maybe<Array<ScheduledReleaseUpdateWithNestedWhereUniqueInput>>;
    /** Upsert multiple ScheduledRelease documents */
    upsert?: Maybe<Array<ScheduledReleaseUpsertWithNestedWhereUniqueInput>>;
};

export type ScheduledReleaseUpdateManyInput = {
    description?: Maybe<Scalars['String']>;
    errorMessage?: Maybe<Scalars['String']>;
    isActive?: Maybe<Scalars['Boolean']>;
    releaseAt?: Maybe<Scalars['DateTime']>;
    title?: Maybe<Scalars['String']>;
};

export type ScheduledReleaseUpdateManyWithNestedWhereInput = {
    /** Update many input */
    data: ScheduledReleaseUpdateManyInput;
    /** Document search */
    where: ScheduledReleaseWhereInput;
};

export type ScheduledReleaseUpdateOneInlineInput = {
    /** Connect existing ScheduledRelease document */
    connect?: Maybe<ScheduledReleaseWhereUniqueInput>;
    /** Create and connect one ScheduledRelease document */
    create?: Maybe<ScheduledReleaseCreateInput>;
    /** Delete currently connected ScheduledRelease document */
    delete?: Maybe<Scalars['Boolean']>;
    /** Disconnect currently connected ScheduledRelease document */
    disconnect?: Maybe<Scalars['Boolean']>;
    /** Update single ScheduledRelease document */
    update?: Maybe<ScheduledReleaseUpdateWithNestedWhereUniqueInput>;
    /** Upsert single ScheduledRelease document */
    upsert?: Maybe<ScheduledReleaseUpsertWithNestedWhereUniqueInput>;
};

export type ScheduledReleaseUpdateWithNestedWhereUniqueInput = {
    /** Document to update */
    data: ScheduledReleaseUpdateInput;
    /** Unique document search */
    where: ScheduledReleaseWhereUniqueInput;
};

export type ScheduledReleaseUpsertInput = {
    /** Create document if it didn't exist */
    create: ScheduledReleaseCreateInput;
    /** Update document if it exists */
    update: ScheduledReleaseUpdateInput;
};

export type ScheduledReleaseUpsertWithNestedWhereUniqueInput = {
    /** Upsert data */
    data: ScheduledReleaseUpsertInput;
    /** Unique document search */
    where: ScheduledReleaseWhereUniqueInput;
};

/** Identifies documents */
export type ScheduledReleaseWhereInput = {
    /** Logical AND on all given filters. */
    AND?: Maybe<Array<ScheduledReleaseWhereInput>>;
    /** Logical NOT on all given filters combined by AND. */
    NOT?: Maybe<Array<ScheduledReleaseWhereInput>>;
    /** Logical OR on all given filters. */
    OR?: Maybe<Array<ScheduledReleaseWhereInput>>;
    /** Contains search across all appropriate fields. */
    _search?: Maybe<Scalars['String']>;
    createdAt?: Maybe<Scalars['DateTime']>;
    /** All values greater than the given value. */
    createdAt_gt?: Maybe<Scalars['DateTime']>;
    /** All values greater than or equal the given value. */
    createdAt_gte?: Maybe<Scalars['DateTime']>;
    /** All values that are contained in given list. */
    createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
    /** All values less than the given value. */
    createdAt_lt?: Maybe<Scalars['DateTime']>;
    /** All values less than or equal the given value. */
    createdAt_lte?: Maybe<Scalars['DateTime']>;
    /** All values that are not equal to given value. */
    createdAt_not?: Maybe<Scalars['DateTime']>;
    /** All values that are not contained in given list. */
    createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
    createdBy?: Maybe<UserWhereInput>;
    description?: Maybe<Scalars['String']>;
    /** All values containing the given string. */
    description_contains?: Maybe<Scalars['String']>;
    /** All values ending with the given string. */
    description_ends_with?: Maybe<Scalars['String']>;
    /** All values that are contained in given list. */
    description_in?: Maybe<Array<Scalars['String']>>;
    /** All values that are not equal to given value. */
    description_not?: Maybe<Scalars['String']>;
    /** All values not containing the given string. */
    description_not_contains?: Maybe<Scalars['String']>;
    /** All values not ending with the given string */
    description_not_ends_with?: Maybe<Scalars['String']>;
    /** All values that are not contained in given list. */
    description_not_in?: Maybe<Array<Scalars['String']>>;
    /** All values not starting with the given string. */
    description_not_starts_with?: Maybe<Scalars['String']>;
    /** All values starting with the given string. */
    description_starts_with?: Maybe<Scalars['String']>;
    errorMessage?: Maybe<Scalars['String']>;
    /** All values containing the given string. */
    errorMessage_contains?: Maybe<Scalars['String']>;
    /** All values ending with the given string. */
    errorMessage_ends_with?: Maybe<Scalars['String']>;
    /** All values that are contained in given list. */
    errorMessage_in?: Maybe<Array<Scalars['String']>>;
    /** All values that are not equal to given value. */
    errorMessage_not?: Maybe<Scalars['String']>;
    /** All values not containing the given string. */
    errorMessage_not_contains?: Maybe<Scalars['String']>;
    /** All values not ending with the given string */
    errorMessage_not_ends_with?: Maybe<Scalars['String']>;
    /** All values that are not contained in given list. */
    errorMessage_not_in?: Maybe<Array<Scalars['String']>>;
    /** All values not starting with the given string. */
    errorMessage_not_starts_with?: Maybe<Scalars['String']>;
    /** All values starting with the given string. */
    errorMessage_starts_with?: Maybe<Scalars['String']>;
    id?: Maybe<Scalars['ID']>;
    /** All values containing the given string. */
    id_contains?: Maybe<Scalars['ID']>;
    /** All values ending with the given string. */
    id_ends_with?: Maybe<Scalars['ID']>;
    /** All values that are contained in given list. */
    id_in?: Maybe<Array<Scalars['ID']>>;
    /** All values that are not equal to given value. */
    id_not?: Maybe<Scalars['ID']>;
    /** All values not containing the given string. */
    id_not_contains?: Maybe<Scalars['ID']>;
    /** All values not ending with the given string */
    id_not_ends_with?: Maybe<Scalars['ID']>;
    /** All values that are not contained in given list. */
    id_not_in?: Maybe<Array<Scalars['ID']>>;
    /** All values not starting with the given string. */
    id_not_starts_with?: Maybe<Scalars['ID']>;
    /** All values starting with the given string. */
    id_starts_with?: Maybe<Scalars['ID']>;
    isActive?: Maybe<Scalars['Boolean']>;
    /** All values that are not equal to given value. */
    isActive_not?: Maybe<Scalars['Boolean']>;
    isImplicit?: Maybe<Scalars['Boolean']>;
    /** All values that are not equal to given value. */
    isImplicit_not?: Maybe<Scalars['Boolean']>;
    operations_every?: Maybe<ScheduledOperationWhereInput>;
    operations_none?: Maybe<ScheduledOperationWhereInput>;
    operations_some?: Maybe<ScheduledOperationWhereInput>;
    publishedAt?: Maybe<Scalars['DateTime']>;
    /** All values greater than the given value. */
    publishedAt_gt?: Maybe<Scalars['DateTime']>;
    /** All values greater than or equal the given value. */
    publishedAt_gte?: Maybe<Scalars['DateTime']>;
    /** All values that are contained in given list. */
    publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
    /** All values less than the given value. */
    publishedAt_lt?: Maybe<Scalars['DateTime']>;
    /** All values less than or equal the given value. */
    publishedAt_lte?: Maybe<Scalars['DateTime']>;
    /** All values that are not equal to given value. */
    publishedAt_not?: Maybe<Scalars['DateTime']>;
    /** All values that are not contained in given list. */
    publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
    publishedBy?: Maybe<UserWhereInput>;
    releaseAt?: Maybe<Scalars['DateTime']>;
    /** All values greater than the given value. */
    releaseAt_gt?: Maybe<Scalars['DateTime']>;
    /** All values greater than or equal the given value. */
    releaseAt_gte?: Maybe<Scalars['DateTime']>;
    /** All values that are contained in given list. */
    releaseAt_in?: Maybe<Array<Scalars['DateTime']>>;
    /** All values less than the given value. */
    releaseAt_lt?: Maybe<Scalars['DateTime']>;
    /** All values less than or equal the given value. */
    releaseAt_lte?: Maybe<Scalars['DateTime']>;
    /** All values that are not equal to given value. */
    releaseAt_not?: Maybe<Scalars['DateTime']>;
    /** All values that are not contained in given list. */
    releaseAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
    status?: Maybe<ScheduledReleaseStatus>;
    /** All values that are contained in given list. */
    status_in?: Maybe<Array<ScheduledReleaseStatus>>;
    /** All values that are not equal to given value. */
    status_not?: Maybe<ScheduledReleaseStatus>;
    /** All values that are not contained in given list. */
    status_not_in?: Maybe<Array<ScheduledReleaseStatus>>;
    title?: Maybe<Scalars['String']>;
    /** All values containing the given string. */
    title_contains?: Maybe<Scalars['String']>;
    /** All values ending with the given string. */
    title_ends_with?: Maybe<Scalars['String']>;
    /** All values that are contained in given list. */
    title_in?: Maybe<Array<Scalars['String']>>;
    /** All values that are not equal to given value. */
    title_not?: Maybe<Scalars['String']>;
    /** All values not containing the given string. */
    title_not_contains?: Maybe<Scalars['String']>;
    /** All values not ending with the given string */
    title_not_ends_with?: Maybe<Scalars['String']>;
    /** All values that are not contained in given list. */
    title_not_in?: Maybe<Array<Scalars['String']>>;
    /** All values not starting with the given string. */
    title_not_starts_with?: Maybe<Scalars['String']>;
    /** All values starting with the given string. */
    title_starts_with?: Maybe<Scalars['String']>;
    updatedAt?: Maybe<Scalars['DateTime']>;
    /** All values greater than the given value. */
    updatedAt_gt?: Maybe<Scalars['DateTime']>;
    /** All values greater than or equal the given value. */
    updatedAt_gte?: Maybe<Scalars['DateTime']>;
    /** All values that are contained in given list. */
    updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
    /** All values less than the given value. */
    updatedAt_lt?: Maybe<Scalars['DateTime']>;
    /** All values less than or equal the given value. */
    updatedAt_lte?: Maybe<Scalars['DateTime']>;
    /** All values that are not equal to given value. */
    updatedAt_not?: Maybe<Scalars['DateTime']>;
    /** All values that are not contained in given list. */
    updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
    updatedBy?: Maybe<UserWhereInput>;
};

/** References ScheduledRelease record uniquely */
export type ScheduledReleaseWhereUniqueInput = {
    id?: Maybe<Scalars['ID']>;
};

/** Content for sections */
export type Section = Node & {
    __typename?: 'Section';
    body?: Maybe<RichText>;
    /** The time the document was created */
    createdAt: Scalars['DateTime'];
    /** User that created this document */
    createdBy?: Maybe<User>;
    /** Get the document in other stages */
    documentInStages: Array<Section>;
    heading?: Maybe<Scalars['String']>;
    /** List of Section versions */
    history: Array<Version>;
    /** The unique identifier */
    id: Scalars['ID'];
    /** The time the document was published. Null on documents in draft stage. */
    publishedAt?: Maybe<Scalars['DateTime']>;
    /** User that last published this document */
    publishedBy?: Maybe<User>;
    scheduledIn: Array<ScheduledOperation>;
    sectionId?: Maybe<Scalars['String']>;
    /** System stage field */
    stage: Stage;
    /** The time the document was updated */
    updatedAt: Scalars['DateTime'];
    /** User that last updated this document */
    updatedBy?: Maybe<User>;
};

/** Content for sections */
export type SectionCreatedByArgs = {
    locales?: Maybe<Array<Locale>>;
};

/** Content for sections */
export type SectionDocumentInStagesArgs = {
    includeCurrent?: Scalars['Boolean'];
    inheritLocale?: Scalars['Boolean'];
    stages?: Array<Stage>;
};

/** Content for sections */
export type SectionHistoryArgs = {
    limit?: Scalars['Int'];
    skip?: Scalars['Int'];
    stageOverride?: Maybe<Stage>;
};

/** Content for sections */
export type SectionPublishedByArgs = {
    locales?: Maybe<Array<Locale>>;
};

/** Content for sections */
export type SectionScheduledInArgs = {
    after?: Maybe<Scalars['String']>;
    before?: Maybe<Scalars['String']>;
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    locales?: Maybe<Array<Locale>>;
    skip?: Maybe<Scalars['Int']>;
    where?: Maybe<ScheduledOperationWhereInput>;
};

/** Content for sections */
export type SectionUpdatedByArgs = {
    locales?: Maybe<Array<Locale>>;
};

export type SectionConnectInput = {
    /** Allow to specify document position in list of connected documents, will default to appending at end of list */
    position?: Maybe<ConnectPositionInput>;
    /** Document to connect */
    where: SectionWhereUniqueInput;
};

/** A connection to a list of items. */
export type SectionConnection = {
    __typename?: 'SectionConnection';
    aggregate: Aggregate;
    /** A list of edges. */
    edges: Array<SectionEdge>;
    /** Information to aid in pagination. */
    pageInfo: PageInfo;
};

export type SectionCreateInput = {
    body?: Maybe<Scalars['RichTextAST']>;
    createdAt?: Maybe<Scalars['DateTime']>;
    heading?: Maybe<Scalars['String']>;
    sectionId?: Maybe<Scalars['String']>;
    updatedAt?: Maybe<Scalars['DateTime']>;
};

export type SectionCreateManyInlineInput = {
    /** Connect multiple existing Section documents */
    connect?: Maybe<Array<SectionWhereUniqueInput>>;
    /** Create and connect multiple existing Section documents */
    create?: Maybe<Array<SectionCreateInput>>;
};

export type SectionCreateOneInlineInput = {
    /** Connect one existing Section document */
    connect?: Maybe<SectionWhereUniqueInput>;
    /** Create and connect one Section document */
    create?: Maybe<SectionCreateInput>;
};

/** An edge in a connection. */
export type SectionEdge = {
    __typename?: 'SectionEdge';
    /** A cursor for use in pagination. */
    cursor: Scalars['String'];
    /** The item at the end of the edge. */
    node: Section;
};

/** Identifies documents */
export type SectionManyWhereInput = {
    /** Logical AND on all given filters. */
    AND?: Maybe<Array<SectionWhereInput>>;
    /** Logical NOT on all given filters combined by AND. */
    NOT?: Maybe<Array<SectionWhereInput>>;
    /** Logical OR on all given filters. */
    OR?: Maybe<Array<SectionWhereInput>>;
    /** Contains search across all appropriate fields. */
    _search?: Maybe<Scalars['String']>;
    createdAt?: Maybe<Scalars['DateTime']>;
    /** All values greater than the given value. */
    createdAt_gt?: Maybe<Scalars['DateTime']>;
    /** All values greater than or equal the given value. */
    createdAt_gte?: Maybe<Scalars['DateTime']>;
    /** All values that are contained in given list. */
    createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
    /** All values less than the given value. */
    createdAt_lt?: Maybe<Scalars['DateTime']>;
    /** All values less than or equal the given value. */
    createdAt_lte?: Maybe<Scalars['DateTime']>;
    /** All values that are not equal to given value. */
    createdAt_not?: Maybe<Scalars['DateTime']>;
    /** All values that are not contained in given list. */
    createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
    createdBy?: Maybe<UserWhereInput>;
    heading?: Maybe<Scalars['String']>;
    /** All values containing the given string. */
    heading_contains?: Maybe<Scalars['String']>;
    /** All values ending with the given string. */
    heading_ends_with?: Maybe<Scalars['String']>;
    /** All values that are contained in given list. */
    heading_in?: Maybe<Array<Scalars['String']>>;
    /** All values that are not equal to given value. */
    heading_not?: Maybe<Scalars['String']>;
    /** All values not containing the given string. */
    heading_not_contains?: Maybe<Scalars['String']>;
    /** All values not ending with the given string */
    heading_not_ends_with?: Maybe<Scalars['String']>;
    /** All values that are not contained in given list. */
    heading_not_in?: Maybe<Array<Scalars['String']>>;
    /** All values not starting with the given string. */
    heading_not_starts_with?: Maybe<Scalars['String']>;
    /** All values starting with the given string. */
    heading_starts_with?: Maybe<Scalars['String']>;
    id?: Maybe<Scalars['ID']>;
    /** All values containing the given string. */
    id_contains?: Maybe<Scalars['ID']>;
    /** All values ending with the given string. */
    id_ends_with?: Maybe<Scalars['ID']>;
    /** All values that are contained in given list. */
    id_in?: Maybe<Array<Scalars['ID']>>;
    /** All values that are not equal to given value. */
    id_not?: Maybe<Scalars['ID']>;
    /** All values not containing the given string. */
    id_not_contains?: Maybe<Scalars['ID']>;
    /** All values not ending with the given string */
    id_not_ends_with?: Maybe<Scalars['ID']>;
    /** All values that are not contained in given list. */
    id_not_in?: Maybe<Array<Scalars['ID']>>;
    /** All values not starting with the given string. */
    id_not_starts_with?: Maybe<Scalars['ID']>;
    /** All values starting with the given string. */
    id_starts_with?: Maybe<Scalars['ID']>;
    publishedAt?: Maybe<Scalars['DateTime']>;
    /** All values greater than the given value. */
    publishedAt_gt?: Maybe<Scalars['DateTime']>;
    /** All values greater than or equal the given value. */
    publishedAt_gte?: Maybe<Scalars['DateTime']>;
    /** All values that are contained in given list. */
    publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
    /** All values less than the given value. */
    publishedAt_lt?: Maybe<Scalars['DateTime']>;
    /** All values less than or equal the given value. */
    publishedAt_lte?: Maybe<Scalars['DateTime']>;
    /** All values that are not equal to given value. */
    publishedAt_not?: Maybe<Scalars['DateTime']>;
    /** All values that are not contained in given list. */
    publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
    publishedBy?: Maybe<UserWhereInput>;
    scheduledIn_every?: Maybe<ScheduledOperationWhereInput>;
    scheduledIn_none?: Maybe<ScheduledOperationWhereInput>;
    scheduledIn_some?: Maybe<ScheduledOperationWhereInput>;
    sectionId?: Maybe<Scalars['String']>;
    /** All values containing the given string. */
    sectionId_contains?: Maybe<Scalars['String']>;
    /** All values ending with the given string. */
    sectionId_ends_with?: Maybe<Scalars['String']>;
    /** All values that are contained in given list. */
    sectionId_in?: Maybe<Array<Scalars['String']>>;
    /** All values that are not equal to given value. */
    sectionId_not?: Maybe<Scalars['String']>;
    /** All values not containing the given string. */
    sectionId_not_contains?: Maybe<Scalars['String']>;
    /** All values not ending with the given string */
    sectionId_not_ends_with?: Maybe<Scalars['String']>;
    /** All values that are not contained in given list. */
    sectionId_not_in?: Maybe<Array<Scalars['String']>>;
    /** All values not starting with the given string. */
    sectionId_not_starts_with?: Maybe<Scalars['String']>;
    /** All values starting with the given string. */
    sectionId_starts_with?: Maybe<Scalars['String']>;
    updatedAt?: Maybe<Scalars['DateTime']>;
    /** All values greater than the given value. */
    updatedAt_gt?: Maybe<Scalars['DateTime']>;
    /** All values greater than or equal the given value. */
    updatedAt_gte?: Maybe<Scalars['DateTime']>;
    /** All values that are contained in given list. */
    updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
    /** All values less than the given value. */
    updatedAt_lt?: Maybe<Scalars['DateTime']>;
    /** All values less than or equal the given value. */
    updatedAt_lte?: Maybe<Scalars['DateTime']>;
    /** All values that are not equal to given value. */
    updatedAt_not?: Maybe<Scalars['DateTime']>;
    /** All values that are not contained in given list. */
    updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
    updatedBy?: Maybe<UserWhereInput>;
};

export enum SectionOrderByInput {
    CreatedAtAsc = 'createdAt_ASC',
    CreatedAtDesc = 'createdAt_DESC',
    HeadingAsc = 'heading_ASC',
    HeadingDesc = 'heading_DESC',
    IdAsc = 'id_ASC',
    IdDesc = 'id_DESC',
    PublishedAtAsc = 'publishedAt_ASC',
    PublishedAtDesc = 'publishedAt_DESC',
    SectionIdAsc = 'sectionId_ASC',
    SectionIdDesc = 'sectionId_DESC',
    UpdatedAtAsc = 'updatedAt_ASC',
    UpdatedAtDesc = 'updatedAt_DESC',
}

export type SectionUpdateInput = {
    body?: Maybe<Scalars['RichTextAST']>;
    heading?: Maybe<Scalars['String']>;
    sectionId?: Maybe<Scalars['String']>;
};

export type SectionUpdateManyInlineInput = {
    /** Connect multiple existing Section documents */
    connect?: Maybe<Array<SectionConnectInput>>;
    /** Create and connect multiple Section documents */
    create?: Maybe<Array<SectionCreateInput>>;
    /** Delete multiple Section documents */
    delete?: Maybe<Array<SectionWhereUniqueInput>>;
    /** Disconnect multiple Section documents */
    disconnect?: Maybe<Array<SectionWhereUniqueInput>>;
    /** Override currently-connected documents with multiple existing Section documents */
    set?: Maybe<Array<SectionWhereUniqueInput>>;
    /** Update multiple Section documents */
    update?: Maybe<Array<SectionUpdateWithNestedWhereUniqueInput>>;
    /** Upsert multiple Section documents */
    upsert?: Maybe<Array<SectionUpsertWithNestedWhereUniqueInput>>;
};

export type SectionUpdateManyInput = {
    body?: Maybe<Scalars['RichTextAST']>;
    heading?: Maybe<Scalars['String']>;
};

export type SectionUpdateManyWithNestedWhereInput = {
    /** Update many input */
    data: SectionUpdateManyInput;
    /** Document search */
    where: SectionWhereInput;
};

export type SectionUpdateOneInlineInput = {
    /** Connect existing Section document */
    connect?: Maybe<SectionWhereUniqueInput>;
    /** Create and connect one Section document */
    create?: Maybe<SectionCreateInput>;
    /** Delete currently connected Section document */
    delete?: Maybe<Scalars['Boolean']>;
    /** Disconnect currently connected Section document */
    disconnect?: Maybe<Scalars['Boolean']>;
    /** Update single Section document */
    update?: Maybe<SectionUpdateWithNestedWhereUniqueInput>;
    /** Upsert single Section document */
    upsert?: Maybe<SectionUpsertWithNestedWhereUniqueInput>;
};

export type SectionUpdateWithNestedWhereUniqueInput = {
    /** Document to update */
    data: SectionUpdateInput;
    /** Unique document search */
    where: SectionWhereUniqueInput;
};

export type SectionUpsertInput = {
    /** Create document if it didn't exist */
    create: SectionCreateInput;
    /** Update document if it exists */
    update: SectionUpdateInput;
};

export type SectionUpsertWithNestedWhereUniqueInput = {
    /** Upsert data */
    data: SectionUpsertInput;
    /** Unique document search */
    where: SectionWhereUniqueInput;
};

/** Identifies documents */
export type SectionWhereInput = {
    /** Logical AND on all given filters. */
    AND?: Maybe<Array<SectionWhereInput>>;
    /** Logical NOT on all given filters combined by AND. */
    NOT?: Maybe<Array<SectionWhereInput>>;
    /** Logical OR on all given filters. */
    OR?: Maybe<Array<SectionWhereInput>>;
    /** Contains search across all appropriate fields. */
    _search?: Maybe<Scalars['String']>;
    createdAt?: Maybe<Scalars['DateTime']>;
    /** All values greater than the given value. */
    createdAt_gt?: Maybe<Scalars['DateTime']>;
    /** All values greater than or equal the given value. */
    createdAt_gte?: Maybe<Scalars['DateTime']>;
    /** All values that are contained in given list. */
    createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
    /** All values less than the given value. */
    createdAt_lt?: Maybe<Scalars['DateTime']>;
    /** All values less than or equal the given value. */
    createdAt_lte?: Maybe<Scalars['DateTime']>;
    /** All values that are not equal to given value. */
    createdAt_not?: Maybe<Scalars['DateTime']>;
    /** All values that are not contained in given list. */
    createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
    createdBy?: Maybe<UserWhereInput>;
    heading?: Maybe<Scalars['String']>;
    /** All values containing the given string. */
    heading_contains?: Maybe<Scalars['String']>;
    /** All values ending with the given string. */
    heading_ends_with?: Maybe<Scalars['String']>;
    /** All values that are contained in given list. */
    heading_in?: Maybe<Array<Scalars['String']>>;
    /** All values that are not equal to given value. */
    heading_not?: Maybe<Scalars['String']>;
    /** All values not containing the given string. */
    heading_not_contains?: Maybe<Scalars['String']>;
    /** All values not ending with the given string */
    heading_not_ends_with?: Maybe<Scalars['String']>;
    /** All values that are not contained in given list. */
    heading_not_in?: Maybe<Array<Scalars['String']>>;
    /** All values not starting with the given string. */
    heading_not_starts_with?: Maybe<Scalars['String']>;
    /** All values starting with the given string. */
    heading_starts_with?: Maybe<Scalars['String']>;
    id?: Maybe<Scalars['ID']>;
    /** All values containing the given string. */
    id_contains?: Maybe<Scalars['ID']>;
    /** All values ending with the given string. */
    id_ends_with?: Maybe<Scalars['ID']>;
    /** All values that are contained in given list. */
    id_in?: Maybe<Array<Scalars['ID']>>;
    /** All values that are not equal to given value. */
    id_not?: Maybe<Scalars['ID']>;
    /** All values not containing the given string. */
    id_not_contains?: Maybe<Scalars['ID']>;
    /** All values not ending with the given string */
    id_not_ends_with?: Maybe<Scalars['ID']>;
    /** All values that are not contained in given list. */
    id_not_in?: Maybe<Array<Scalars['ID']>>;
    /** All values not starting with the given string. */
    id_not_starts_with?: Maybe<Scalars['ID']>;
    /** All values starting with the given string. */
    id_starts_with?: Maybe<Scalars['ID']>;
    publishedAt?: Maybe<Scalars['DateTime']>;
    /** All values greater than the given value. */
    publishedAt_gt?: Maybe<Scalars['DateTime']>;
    /** All values greater than or equal the given value. */
    publishedAt_gte?: Maybe<Scalars['DateTime']>;
    /** All values that are contained in given list. */
    publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
    /** All values less than the given value. */
    publishedAt_lt?: Maybe<Scalars['DateTime']>;
    /** All values less than or equal the given value. */
    publishedAt_lte?: Maybe<Scalars['DateTime']>;
    /** All values that are not equal to given value. */
    publishedAt_not?: Maybe<Scalars['DateTime']>;
    /** All values that are not contained in given list. */
    publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
    publishedBy?: Maybe<UserWhereInput>;
    scheduledIn_every?: Maybe<ScheduledOperationWhereInput>;
    scheduledIn_none?: Maybe<ScheduledOperationWhereInput>;
    scheduledIn_some?: Maybe<ScheduledOperationWhereInput>;
    sectionId?: Maybe<Scalars['String']>;
    /** All values containing the given string. */
    sectionId_contains?: Maybe<Scalars['String']>;
    /** All values ending with the given string. */
    sectionId_ends_with?: Maybe<Scalars['String']>;
    /** All values that are contained in given list. */
    sectionId_in?: Maybe<Array<Scalars['String']>>;
    /** All values that are not equal to given value. */
    sectionId_not?: Maybe<Scalars['String']>;
    /** All values not containing the given string. */
    sectionId_not_contains?: Maybe<Scalars['String']>;
    /** All values not ending with the given string */
    sectionId_not_ends_with?: Maybe<Scalars['String']>;
    /** All values that are not contained in given list. */
    sectionId_not_in?: Maybe<Array<Scalars['String']>>;
    /** All values not starting with the given string. */
    sectionId_not_starts_with?: Maybe<Scalars['String']>;
    /** All values starting with the given string. */
    sectionId_starts_with?: Maybe<Scalars['String']>;
    updatedAt?: Maybe<Scalars['DateTime']>;
    /** All values greater than the given value. */
    updatedAt_gt?: Maybe<Scalars['DateTime']>;
    /** All values greater than or equal the given value. */
    updatedAt_gte?: Maybe<Scalars['DateTime']>;
    /** All values that are contained in given list. */
    updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
    /** All values less than the given value. */
    updatedAt_lt?: Maybe<Scalars['DateTime']>;
    /** All values less than or equal the given value. */
    updatedAt_lte?: Maybe<Scalars['DateTime']>;
    /** All values that are not equal to given value. */
    updatedAt_not?: Maybe<Scalars['DateTime']>;
    /** All values that are not contained in given list. */
    updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
    updatedBy?: Maybe<UserWhereInput>;
};

/** References Section record uniquely */
export type SectionWhereUniqueInput = {
    id?: Maybe<Scalars['ID']>;
    sectionId?: Maybe<Scalars['String']>;
};

/** Skills model */
export type Skill = Node & {
    __typename?: 'Skill';
    /** The time the document was created */
    createdAt: Scalars['DateTime'];
    /** User that created this document */
    createdBy?: Maybe<User>;
    directionDesktop?: Maybe<SkillsDirection>;
    directionMobile?: Maybe<SkillsDirection>;
    /** Get the document in other stages */
    documentInStages: Array<Skill>;
    /** List of Skill versions */
    history: Array<Version>;
    /** The unique identifier */
    id: Scalars['ID'];
    label: Scalars['String'];
    /** The time the document was published. Null on documents in draft stage. */
    publishedAt?: Maybe<Scalars['DateTime']>;
    /** User that last published this document */
    publishedBy?: Maybe<User>;
    scheduledIn: Array<ScheduledOperation>;
    /** System stage field */
    stage: Stage;
    /** The time the document was updated */
    updatedAt: Scalars['DateTime'];
    /** User that last updated this document */
    updatedBy?: Maybe<User>;
    xAxisDesktop?: Maybe<Scalars['Int']>;
    xAxisMobile?: Maybe<Scalars['Int']>;
    yAxisDesktop?: Maybe<Scalars['Int']>;
    yAxisMobile?: Maybe<Scalars['Int']>;
};

/** Skills model */
export type SkillCreatedByArgs = {
    locales?: Maybe<Array<Locale>>;
};

/** Skills model */
export type SkillDocumentInStagesArgs = {
    includeCurrent?: Scalars['Boolean'];
    inheritLocale?: Scalars['Boolean'];
    stages?: Array<Stage>;
};

/** Skills model */
export type SkillHistoryArgs = {
    limit?: Scalars['Int'];
    skip?: Scalars['Int'];
    stageOverride?: Maybe<Stage>;
};

/** Skills model */
export type SkillPublishedByArgs = {
    locales?: Maybe<Array<Locale>>;
};

/** Skills model */
export type SkillScheduledInArgs = {
    after?: Maybe<Scalars['String']>;
    before?: Maybe<Scalars['String']>;
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    locales?: Maybe<Array<Locale>>;
    skip?: Maybe<Scalars['Int']>;
    where?: Maybe<ScheduledOperationWhereInput>;
};

/** Skills model */
export type SkillUpdatedByArgs = {
    locales?: Maybe<Array<Locale>>;
};

export type SkillConnectInput = {
    /** Allow to specify document position in list of connected documents, will default to appending at end of list */
    position?: Maybe<ConnectPositionInput>;
    /** Document to connect */
    where: SkillWhereUniqueInput;
};

/** A connection to a list of items. */
export type SkillConnection = {
    __typename?: 'SkillConnection';
    aggregate: Aggregate;
    /** A list of edges. */
    edges: Array<SkillEdge>;
    /** Information to aid in pagination. */
    pageInfo: PageInfo;
};

export type SkillCreateInput = {
    createdAt?: Maybe<Scalars['DateTime']>;
    directionDesktop?: Maybe<SkillsDirection>;
    directionMobile?: Maybe<SkillsDirection>;
    label: Scalars['String'];
    updatedAt?: Maybe<Scalars['DateTime']>;
    xAxisDesktop?: Maybe<Scalars['Int']>;
    xAxisMobile?: Maybe<Scalars['Int']>;
    yAxisDesktop?: Maybe<Scalars['Int']>;
    yAxisMobile?: Maybe<Scalars['Int']>;
};

export type SkillCreateManyInlineInput = {
    /** Connect multiple existing Skill documents */
    connect?: Maybe<Array<SkillWhereUniqueInput>>;
    /** Create and connect multiple existing Skill documents */
    create?: Maybe<Array<SkillCreateInput>>;
};

export type SkillCreateOneInlineInput = {
    /** Connect one existing Skill document */
    connect?: Maybe<SkillWhereUniqueInput>;
    /** Create and connect one Skill document */
    create?: Maybe<SkillCreateInput>;
};

/** An edge in a connection. */
export type SkillEdge = {
    __typename?: 'SkillEdge';
    /** A cursor for use in pagination. */
    cursor: Scalars['String'];
    /** The item at the end of the edge. */
    node: Skill;
};

/** Identifies documents */
export type SkillManyWhereInput = {
    /** Logical AND on all given filters. */
    AND?: Maybe<Array<SkillWhereInput>>;
    /** Logical NOT on all given filters combined by AND. */
    NOT?: Maybe<Array<SkillWhereInput>>;
    /** Logical OR on all given filters. */
    OR?: Maybe<Array<SkillWhereInput>>;
    /** Contains search across all appropriate fields. */
    _search?: Maybe<Scalars['String']>;
    createdAt?: Maybe<Scalars['DateTime']>;
    /** All values greater than the given value. */
    createdAt_gt?: Maybe<Scalars['DateTime']>;
    /** All values greater than or equal the given value. */
    createdAt_gte?: Maybe<Scalars['DateTime']>;
    /** All values that are contained in given list. */
    createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
    /** All values less than the given value. */
    createdAt_lt?: Maybe<Scalars['DateTime']>;
    /** All values less than or equal the given value. */
    createdAt_lte?: Maybe<Scalars['DateTime']>;
    /** All values that are not equal to given value. */
    createdAt_not?: Maybe<Scalars['DateTime']>;
    /** All values that are not contained in given list. */
    createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
    createdBy?: Maybe<UserWhereInput>;
    directionDesktop?: Maybe<SkillsDirection>;
    /** All values that are contained in given list. */
    directionDesktop_in?: Maybe<Array<SkillsDirection>>;
    /** All values that are not equal to given value. */
    directionDesktop_not?: Maybe<SkillsDirection>;
    /** All values that are not contained in given list. */
    directionDesktop_not_in?: Maybe<Array<SkillsDirection>>;
    directionMobile?: Maybe<SkillsDirection>;
    /** All values that are contained in given list. */
    directionMobile_in?: Maybe<Array<SkillsDirection>>;
    /** All values that are not equal to given value. */
    directionMobile_not?: Maybe<SkillsDirection>;
    /** All values that are not contained in given list. */
    directionMobile_not_in?: Maybe<Array<SkillsDirection>>;
    id?: Maybe<Scalars['ID']>;
    /** All values containing the given string. */
    id_contains?: Maybe<Scalars['ID']>;
    /** All values ending with the given string. */
    id_ends_with?: Maybe<Scalars['ID']>;
    /** All values that are contained in given list. */
    id_in?: Maybe<Array<Scalars['ID']>>;
    /** All values that are not equal to given value. */
    id_not?: Maybe<Scalars['ID']>;
    /** All values not containing the given string. */
    id_not_contains?: Maybe<Scalars['ID']>;
    /** All values not ending with the given string */
    id_not_ends_with?: Maybe<Scalars['ID']>;
    /** All values that are not contained in given list. */
    id_not_in?: Maybe<Array<Scalars['ID']>>;
    /** All values not starting with the given string. */
    id_not_starts_with?: Maybe<Scalars['ID']>;
    /** All values starting with the given string. */
    id_starts_with?: Maybe<Scalars['ID']>;
    label?: Maybe<Scalars['String']>;
    /** All values containing the given string. */
    label_contains?: Maybe<Scalars['String']>;
    /** All values ending with the given string. */
    label_ends_with?: Maybe<Scalars['String']>;
    /** All values that are contained in given list. */
    label_in?: Maybe<Array<Scalars['String']>>;
    /** All values that are not equal to given value. */
    label_not?: Maybe<Scalars['String']>;
    /** All values not containing the given string. */
    label_not_contains?: Maybe<Scalars['String']>;
    /** All values not ending with the given string */
    label_not_ends_with?: Maybe<Scalars['String']>;
    /** All values that are not contained in given list. */
    label_not_in?: Maybe<Array<Scalars['String']>>;
    /** All values not starting with the given string. */
    label_not_starts_with?: Maybe<Scalars['String']>;
    /** All values starting with the given string. */
    label_starts_with?: Maybe<Scalars['String']>;
    publishedAt?: Maybe<Scalars['DateTime']>;
    /** All values greater than the given value. */
    publishedAt_gt?: Maybe<Scalars['DateTime']>;
    /** All values greater than or equal the given value. */
    publishedAt_gte?: Maybe<Scalars['DateTime']>;
    /** All values that are contained in given list. */
    publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
    /** All values less than the given value. */
    publishedAt_lt?: Maybe<Scalars['DateTime']>;
    /** All values less than or equal the given value. */
    publishedAt_lte?: Maybe<Scalars['DateTime']>;
    /** All values that are not equal to given value. */
    publishedAt_not?: Maybe<Scalars['DateTime']>;
    /** All values that are not contained in given list. */
    publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
    publishedBy?: Maybe<UserWhereInput>;
    scheduledIn_every?: Maybe<ScheduledOperationWhereInput>;
    scheduledIn_none?: Maybe<ScheduledOperationWhereInput>;
    scheduledIn_some?: Maybe<ScheduledOperationWhereInput>;
    updatedAt?: Maybe<Scalars['DateTime']>;
    /** All values greater than the given value. */
    updatedAt_gt?: Maybe<Scalars['DateTime']>;
    /** All values greater than or equal the given value. */
    updatedAt_gte?: Maybe<Scalars['DateTime']>;
    /** All values that are contained in given list. */
    updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
    /** All values less than the given value. */
    updatedAt_lt?: Maybe<Scalars['DateTime']>;
    /** All values less than or equal the given value. */
    updatedAt_lte?: Maybe<Scalars['DateTime']>;
    /** All values that are not equal to given value. */
    updatedAt_not?: Maybe<Scalars['DateTime']>;
    /** All values that are not contained in given list. */
    updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
    updatedBy?: Maybe<UserWhereInput>;
    xAxisDesktop?: Maybe<Scalars['Int']>;
    /** All values greater than the given value. */
    xAxisDesktop_gt?: Maybe<Scalars['Int']>;
    /** All values greater than or equal the given value. */
    xAxisDesktop_gte?: Maybe<Scalars['Int']>;
    /** All values that are contained in given list. */
    xAxisDesktop_in?: Maybe<Array<Scalars['Int']>>;
    /** All values less than the given value. */
    xAxisDesktop_lt?: Maybe<Scalars['Int']>;
    /** All values less than or equal the given value. */
    xAxisDesktop_lte?: Maybe<Scalars['Int']>;
    /** All values that are not equal to given value. */
    xAxisDesktop_not?: Maybe<Scalars['Int']>;
    /** All values that are not contained in given list. */
    xAxisDesktop_not_in?: Maybe<Array<Scalars['Int']>>;
    xAxisMobile?: Maybe<Scalars['Int']>;
    /** All values greater than the given value. */
    xAxisMobile_gt?: Maybe<Scalars['Int']>;
    /** All values greater than or equal the given value. */
    xAxisMobile_gte?: Maybe<Scalars['Int']>;
    /** All values that are contained in given list. */
    xAxisMobile_in?: Maybe<Array<Scalars['Int']>>;
    /** All values less than the given value. */
    xAxisMobile_lt?: Maybe<Scalars['Int']>;
    /** All values less than or equal the given value. */
    xAxisMobile_lte?: Maybe<Scalars['Int']>;
    /** All values that are not equal to given value. */
    xAxisMobile_not?: Maybe<Scalars['Int']>;
    /** All values that are not contained in given list. */
    xAxisMobile_not_in?: Maybe<Array<Scalars['Int']>>;
    yAxisDesktop?: Maybe<Scalars['Int']>;
    /** All values greater than the given value. */
    yAxisDesktop_gt?: Maybe<Scalars['Int']>;
    /** All values greater than or equal the given value. */
    yAxisDesktop_gte?: Maybe<Scalars['Int']>;
    /** All values that are contained in given list. */
    yAxisDesktop_in?: Maybe<Array<Scalars['Int']>>;
    /** All values less than the given value. */
    yAxisDesktop_lt?: Maybe<Scalars['Int']>;
    /** All values less than or equal the given value. */
    yAxisDesktop_lte?: Maybe<Scalars['Int']>;
    /** All values that are not equal to given value. */
    yAxisDesktop_not?: Maybe<Scalars['Int']>;
    /** All values that are not contained in given list. */
    yAxisDesktop_not_in?: Maybe<Array<Scalars['Int']>>;
    yAxisMobile?: Maybe<Scalars['Int']>;
    /** All values greater than the given value. */
    yAxisMobile_gt?: Maybe<Scalars['Int']>;
    /** All values greater than or equal the given value. */
    yAxisMobile_gte?: Maybe<Scalars['Int']>;
    /** All values that are contained in given list. */
    yAxisMobile_in?: Maybe<Array<Scalars['Int']>>;
    /** All values less than the given value. */
    yAxisMobile_lt?: Maybe<Scalars['Int']>;
    /** All values less than or equal the given value. */
    yAxisMobile_lte?: Maybe<Scalars['Int']>;
    /** All values that are not equal to given value. */
    yAxisMobile_not?: Maybe<Scalars['Int']>;
    /** All values that are not contained in given list. */
    yAxisMobile_not_in?: Maybe<Array<Scalars['Int']>>;
};

export enum SkillOrderByInput {
    CreatedAtAsc = 'createdAt_ASC',
    CreatedAtDesc = 'createdAt_DESC',
    DirectionDesktopAsc = 'directionDesktop_ASC',
    DirectionDesktopDesc = 'directionDesktop_DESC',
    DirectionMobileAsc = 'directionMobile_ASC',
    DirectionMobileDesc = 'directionMobile_DESC',
    IdAsc = 'id_ASC',
    IdDesc = 'id_DESC',
    LabelAsc = 'label_ASC',
    LabelDesc = 'label_DESC',
    PublishedAtAsc = 'publishedAt_ASC',
    PublishedAtDesc = 'publishedAt_DESC',
    UpdatedAtAsc = 'updatedAt_ASC',
    UpdatedAtDesc = 'updatedAt_DESC',
    XAxisDesktopAsc = 'xAxisDesktop_ASC',
    XAxisDesktopDesc = 'xAxisDesktop_DESC',
    XAxisMobileAsc = 'xAxisMobile_ASC',
    XAxisMobileDesc = 'xAxisMobile_DESC',
    YAxisDesktopAsc = 'yAxisDesktop_ASC',
    YAxisDesktopDesc = 'yAxisDesktop_DESC',
    YAxisMobileAsc = 'yAxisMobile_ASC',
    YAxisMobileDesc = 'yAxisMobile_DESC',
}

export type SkillUpdateInput = {
    directionDesktop?: Maybe<SkillsDirection>;
    directionMobile?: Maybe<SkillsDirection>;
    label?: Maybe<Scalars['String']>;
    xAxisDesktop?: Maybe<Scalars['Int']>;
    xAxisMobile?: Maybe<Scalars['Int']>;
    yAxisDesktop?: Maybe<Scalars['Int']>;
    yAxisMobile?: Maybe<Scalars['Int']>;
};

export type SkillUpdateManyInlineInput = {
    /** Connect multiple existing Skill documents */
    connect?: Maybe<Array<SkillConnectInput>>;
    /** Create and connect multiple Skill documents */
    create?: Maybe<Array<SkillCreateInput>>;
    /** Delete multiple Skill documents */
    delete?: Maybe<Array<SkillWhereUniqueInput>>;
    /** Disconnect multiple Skill documents */
    disconnect?: Maybe<Array<SkillWhereUniqueInput>>;
    /** Override currently-connected documents with multiple existing Skill documents */
    set?: Maybe<Array<SkillWhereUniqueInput>>;
    /** Update multiple Skill documents */
    update?: Maybe<Array<SkillUpdateWithNestedWhereUniqueInput>>;
    /** Upsert multiple Skill documents */
    upsert?: Maybe<Array<SkillUpsertWithNestedWhereUniqueInput>>;
};

export type SkillUpdateManyInput = {
    directionDesktop?: Maybe<SkillsDirection>;
    directionMobile?: Maybe<SkillsDirection>;
    label?: Maybe<Scalars['String']>;
    xAxisDesktop?: Maybe<Scalars['Int']>;
    xAxisMobile?: Maybe<Scalars['Int']>;
    yAxisDesktop?: Maybe<Scalars['Int']>;
    yAxisMobile?: Maybe<Scalars['Int']>;
};

export type SkillUpdateManyWithNestedWhereInput = {
    /** Update many input */
    data: SkillUpdateManyInput;
    /** Document search */
    where: SkillWhereInput;
};

export type SkillUpdateOneInlineInput = {
    /** Connect existing Skill document */
    connect?: Maybe<SkillWhereUniqueInput>;
    /** Create and connect one Skill document */
    create?: Maybe<SkillCreateInput>;
    /** Delete currently connected Skill document */
    delete?: Maybe<Scalars['Boolean']>;
    /** Disconnect currently connected Skill document */
    disconnect?: Maybe<Scalars['Boolean']>;
    /** Update single Skill document */
    update?: Maybe<SkillUpdateWithNestedWhereUniqueInput>;
    /** Upsert single Skill document */
    upsert?: Maybe<SkillUpsertWithNestedWhereUniqueInput>;
};

export type SkillUpdateWithNestedWhereUniqueInput = {
    /** Document to update */
    data: SkillUpdateInput;
    /** Unique document search */
    where: SkillWhereUniqueInput;
};

export type SkillUpsertInput = {
    /** Create document if it didn't exist */
    create: SkillCreateInput;
    /** Update document if it exists */
    update: SkillUpdateInput;
};

export type SkillUpsertWithNestedWhereUniqueInput = {
    /** Upsert data */
    data: SkillUpsertInput;
    /** Unique document search */
    where: SkillWhereUniqueInput;
};

/** Identifies documents */
export type SkillWhereInput = {
    /** Logical AND on all given filters. */
    AND?: Maybe<Array<SkillWhereInput>>;
    /** Logical NOT on all given filters combined by AND. */
    NOT?: Maybe<Array<SkillWhereInput>>;
    /** Logical OR on all given filters. */
    OR?: Maybe<Array<SkillWhereInput>>;
    /** Contains search across all appropriate fields. */
    _search?: Maybe<Scalars['String']>;
    createdAt?: Maybe<Scalars['DateTime']>;
    /** All values greater than the given value. */
    createdAt_gt?: Maybe<Scalars['DateTime']>;
    /** All values greater than or equal the given value. */
    createdAt_gte?: Maybe<Scalars['DateTime']>;
    /** All values that are contained in given list. */
    createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
    /** All values less than the given value. */
    createdAt_lt?: Maybe<Scalars['DateTime']>;
    /** All values less than or equal the given value. */
    createdAt_lte?: Maybe<Scalars['DateTime']>;
    /** All values that are not equal to given value. */
    createdAt_not?: Maybe<Scalars['DateTime']>;
    /** All values that are not contained in given list. */
    createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
    createdBy?: Maybe<UserWhereInput>;
    directionDesktop?: Maybe<SkillsDirection>;
    /** All values that are contained in given list. */
    directionDesktop_in?: Maybe<Array<SkillsDirection>>;
    /** All values that are not equal to given value. */
    directionDesktop_not?: Maybe<SkillsDirection>;
    /** All values that are not contained in given list. */
    directionDesktop_not_in?: Maybe<Array<SkillsDirection>>;
    directionMobile?: Maybe<SkillsDirection>;
    /** All values that are contained in given list. */
    directionMobile_in?: Maybe<Array<SkillsDirection>>;
    /** All values that are not equal to given value. */
    directionMobile_not?: Maybe<SkillsDirection>;
    /** All values that are not contained in given list. */
    directionMobile_not_in?: Maybe<Array<SkillsDirection>>;
    id?: Maybe<Scalars['ID']>;
    /** All values containing the given string. */
    id_contains?: Maybe<Scalars['ID']>;
    /** All values ending with the given string. */
    id_ends_with?: Maybe<Scalars['ID']>;
    /** All values that are contained in given list. */
    id_in?: Maybe<Array<Scalars['ID']>>;
    /** All values that are not equal to given value. */
    id_not?: Maybe<Scalars['ID']>;
    /** All values not containing the given string. */
    id_not_contains?: Maybe<Scalars['ID']>;
    /** All values not ending with the given string */
    id_not_ends_with?: Maybe<Scalars['ID']>;
    /** All values that are not contained in given list. */
    id_not_in?: Maybe<Array<Scalars['ID']>>;
    /** All values not starting with the given string. */
    id_not_starts_with?: Maybe<Scalars['ID']>;
    /** All values starting with the given string. */
    id_starts_with?: Maybe<Scalars['ID']>;
    label?: Maybe<Scalars['String']>;
    /** All values containing the given string. */
    label_contains?: Maybe<Scalars['String']>;
    /** All values ending with the given string. */
    label_ends_with?: Maybe<Scalars['String']>;
    /** All values that are contained in given list. */
    label_in?: Maybe<Array<Scalars['String']>>;
    /** All values that are not equal to given value. */
    label_not?: Maybe<Scalars['String']>;
    /** All values not containing the given string. */
    label_not_contains?: Maybe<Scalars['String']>;
    /** All values not ending with the given string */
    label_not_ends_with?: Maybe<Scalars['String']>;
    /** All values that are not contained in given list. */
    label_not_in?: Maybe<Array<Scalars['String']>>;
    /** All values not starting with the given string. */
    label_not_starts_with?: Maybe<Scalars['String']>;
    /** All values starting with the given string. */
    label_starts_with?: Maybe<Scalars['String']>;
    publishedAt?: Maybe<Scalars['DateTime']>;
    /** All values greater than the given value. */
    publishedAt_gt?: Maybe<Scalars['DateTime']>;
    /** All values greater than or equal the given value. */
    publishedAt_gte?: Maybe<Scalars['DateTime']>;
    /** All values that are contained in given list. */
    publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
    /** All values less than the given value. */
    publishedAt_lt?: Maybe<Scalars['DateTime']>;
    /** All values less than or equal the given value. */
    publishedAt_lte?: Maybe<Scalars['DateTime']>;
    /** All values that are not equal to given value. */
    publishedAt_not?: Maybe<Scalars['DateTime']>;
    /** All values that are not contained in given list. */
    publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
    publishedBy?: Maybe<UserWhereInput>;
    scheduledIn_every?: Maybe<ScheduledOperationWhereInput>;
    scheduledIn_none?: Maybe<ScheduledOperationWhereInput>;
    scheduledIn_some?: Maybe<ScheduledOperationWhereInput>;
    updatedAt?: Maybe<Scalars['DateTime']>;
    /** All values greater than the given value. */
    updatedAt_gt?: Maybe<Scalars['DateTime']>;
    /** All values greater than or equal the given value. */
    updatedAt_gte?: Maybe<Scalars['DateTime']>;
    /** All values that are contained in given list. */
    updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
    /** All values less than the given value. */
    updatedAt_lt?: Maybe<Scalars['DateTime']>;
    /** All values less than or equal the given value. */
    updatedAt_lte?: Maybe<Scalars['DateTime']>;
    /** All values that are not equal to given value. */
    updatedAt_not?: Maybe<Scalars['DateTime']>;
    /** All values that are not contained in given list. */
    updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
    updatedBy?: Maybe<UserWhereInput>;
    xAxisDesktop?: Maybe<Scalars['Int']>;
    /** All values greater than the given value. */
    xAxisDesktop_gt?: Maybe<Scalars['Int']>;
    /** All values greater than or equal the given value. */
    xAxisDesktop_gte?: Maybe<Scalars['Int']>;
    /** All values that are contained in given list. */
    xAxisDesktop_in?: Maybe<Array<Scalars['Int']>>;
    /** All values less than the given value. */
    xAxisDesktop_lt?: Maybe<Scalars['Int']>;
    /** All values less than or equal the given value. */
    xAxisDesktop_lte?: Maybe<Scalars['Int']>;
    /** All values that are not equal to given value. */
    xAxisDesktop_not?: Maybe<Scalars['Int']>;
    /** All values that are not contained in given list. */
    xAxisDesktop_not_in?: Maybe<Array<Scalars['Int']>>;
    xAxisMobile?: Maybe<Scalars['Int']>;
    /** All values greater than the given value. */
    xAxisMobile_gt?: Maybe<Scalars['Int']>;
    /** All values greater than or equal the given value. */
    xAxisMobile_gte?: Maybe<Scalars['Int']>;
    /** All values that are contained in given list. */
    xAxisMobile_in?: Maybe<Array<Scalars['Int']>>;
    /** All values less than the given value. */
    xAxisMobile_lt?: Maybe<Scalars['Int']>;
    /** All values less than or equal the given value. */
    xAxisMobile_lte?: Maybe<Scalars['Int']>;
    /** All values that are not equal to given value. */
    xAxisMobile_not?: Maybe<Scalars['Int']>;
    /** All values that are not contained in given list. */
    xAxisMobile_not_in?: Maybe<Array<Scalars['Int']>>;
    yAxisDesktop?: Maybe<Scalars['Int']>;
    /** All values greater than the given value. */
    yAxisDesktop_gt?: Maybe<Scalars['Int']>;
    /** All values greater than or equal the given value. */
    yAxisDesktop_gte?: Maybe<Scalars['Int']>;
    /** All values that are contained in given list. */
    yAxisDesktop_in?: Maybe<Array<Scalars['Int']>>;
    /** All values less than the given value. */
    yAxisDesktop_lt?: Maybe<Scalars['Int']>;
    /** All values less than or equal the given value. */
    yAxisDesktop_lte?: Maybe<Scalars['Int']>;
    /** All values that are not equal to given value. */
    yAxisDesktop_not?: Maybe<Scalars['Int']>;
    /** All values that are not contained in given list. */
    yAxisDesktop_not_in?: Maybe<Array<Scalars['Int']>>;
    yAxisMobile?: Maybe<Scalars['Int']>;
    /** All values greater than the given value. */
    yAxisMobile_gt?: Maybe<Scalars['Int']>;
    /** All values greater than or equal the given value. */
    yAxisMobile_gte?: Maybe<Scalars['Int']>;
    /** All values that are contained in given list. */
    yAxisMobile_in?: Maybe<Array<Scalars['Int']>>;
    /** All values less than the given value. */
    yAxisMobile_lt?: Maybe<Scalars['Int']>;
    /** All values less than or equal the given value. */
    yAxisMobile_lte?: Maybe<Scalars['Int']>;
    /** All values that are not equal to given value. */
    yAxisMobile_not?: Maybe<Scalars['Int']>;
    /** All values that are not contained in given list. */
    yAxisMobile_not_in?: Maybe<Array<Scalars['Int']>>;
};

/** References Skill record uniquely */
export type SkillWhereUniqueInput = {
    id?: Maybe<Scalars['ID']>;
};

/** Direction values for skills. */
export enum SkillsDirection {
    Down = 'Down',
    Right = 'Right',
    Up = 'Up',
}

/** Social media links */
export type SocialLink = Node & {
    __typename?: 'SocialLink';
    /** The time the document was created */
    createdAt: Scalars['DateTime'];
    /** User that created this document */
    createdBy?: Maybe<User>;
    /** Get the document in other stages */
    documentInStages: Array<SocialLink>;
    /** List of SocialLink versions */
    history: Array<Version>;
    /** The unique identifier */
    id: Scalars['ID'];
    label: Scalars['String'];
    /** The time the document was published. Null on documents in draft stage. */
    publishedAt?: Maybe<Scalars['DateTime']>;
    /** User that last published this document */
    publishedBy?: Maybe<User>;
    scheduledIn: Array<ScheduledOperation>;
    /** System stage field */
    stage: Stage;
    /** The time the document was updated */
    updatedAt: Scalars['DateTime'];
    /** User that last updated this document */
    updatedBy?: Maybe<User>;
    url?: Maybe<Scalars['String']>;
};

/** Social media links */
export type SocialLinkCreatedByArgs = {
    locales?: Maybe<Array<Locale>>;
};

/** Social media links */
export type SocialLinkDocumentInStagesArgs = {
    includeCurrent?: Scalars['Boolean'];
    inheritLocale?: Scalars['Boolean'];
    stages?: Array<Stage>;
};

/** Social media links */
export type SocialLinkHistoryArgs = {
    limit?: Scalars['Int'];
    skip?: Scalars['Int'];
    stageOverride?: Maybe<Stage>;
};

/** Social media links */
export type SocialLinkPublishedByArgs = {
    locales?: Maybe<Array<Locale>>;
};

/** Social media links */
export type SocialLinkScheduledInArgs = {
    after?: Maybe<Scalars['String']>;
    before?: Maybe<Scalars['String']>;
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    locales?: Maybe<Array<Locale>>;
    skip?: Maybe<Scalars['Int']>;
    where?: Maybe<ScheduledOperationWhereInput>;
};

/** Social media links */
export type SocialLinkUpdatedByArgs = {
    locales?: Maybe<Array<Locale>>;
};

export type SocialLinkConnectInput = {
    /** Allow to specify document position in list of connected documents, will default to appending at end of list */
    position?: Maybe<ConnectPositionInput>;
    /** Document to connect */
    where: SocialLinkWhereUniqueInput;
};

/** A connection to a list of items. */
export type SocialLinkConnection = {
    __typename?: 'SocialLinkConnection';
    aggregate: Aggregate;
    /** A list of edges. */
    edges: Array<SocialLinkEdge>;
    /** Information to aid in pagination. */
    pageInfo: PageInfo;
};

export type SocialLinkCreateInput = {
    createdAt?: Maybe<Scalars['DateTime']>;
    label: Scalars['String'];
    updatedAt?: Maybe<Scalars['DateTime']>;
    url?: Maybe<Scalars['String']>;
};

export type SocialLinkCreateManyInlineInput = {
    /** Connect multiple existing SocialLink documents */
    connect?: Maybe<Array<SocialLinkWhereUniqueInput>>;
    /** Create and connect multiple existing SocialLink documents */
    create?: Maybe<Array<SocialLinkCreateInput>>;
};

export type SocialLinkCreateOneInlineInput = {
    /** Connect one existing SocialLink document */
    connect?: Maybe<SocialLinkWhereUniqueInput>;
    /** Create and connect one SocialLink document */
    create?: Maybe<SocialLinkCreateInput>;
};

/** An edge in a connection. */
export type SocialLinkEdge = {
    __typename?: 'SocialLinkEdge';
    /** A cursor for use in pagination. */
    cursor: Scalars['String'];
    /** The item at the end of the edge. */
    node: SocialLink;
};

/** Identifies documents */
export type SocialLinkManyWhereInput = {
    /** Logical AND on all given filters. */
    AND?: Maybe<Array<SocialLinkWhereInput>>;
    /** Logical NOT on all given filters combined by AND. */
    NOT?: Maybe<Array<SocialLinkWhereInput>>;
    /** Logical OR on all given filters. */
    OR?: Maybe<Array<SocialLinkWhereInput>>;
    /** Contains search across all appropriate fields. */
    _search?: Maybe<Scalars['String']>;
    createdAt?: Maybe<Scalars['DateTime']>;
    /** All values greater than the given value. */
    createdAt_gt?: Maybe<Scalars['DateTime']>;
    /** All values greater than or equal the given value. */
    createdAt_gte?: Maybe<Scalars['DateTime']>;
    /** All values that are contained in given list. */
    createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
    /** All values less than the given value. */
    createdAt_lt?: Maybe<Scalars['DateTime']>;
    /** All values less than or equal the given value. */
    createdAt_lte?: Maybe<Scalars['DateTime']>;
    /** All values that are not equal to given value. */
    createdAt_not?: Maybe<Scalars['DateTime']>;
    /** All values that are not contained in given list. */
    createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
    createdBy?: Maybe<UserWhereInput>;
    id?: Maybe<Scalars['ID']>;
    /** All values containing the given string. */
    id_contains?: Maybe<Scalars['ID']>;
    /** All values ending with the given string. */
    id_ends_with?: Maybe<Scalars['ID']>;
    /** All values that are contained in given list. */
    id_in?: Maybe<Array<Scalars['ID']>>;
    /** All values that are not equal to given value. */
    id_not?: Maybe<Scalars['ID']>;
    /** All values not containing the given string. */
    id_not_contains?: Maybe<Scalars['ID']>;
    /** All values not ending with the given string */
    id_not_ends_with?: Maybe<Scalars['ID']>;
    /** All values that are not contained in given list. */
    id_not_in?: Maybe<Array<Scalars['ID']>>;
    /** All values not starting with the given string. */
    id_not_starts_with?: Maybe<Scalars['ID']>;
    /** All values starting with the given string. */
    id_starts_with?: Maybe<Scalars['ID']>;
    label?: Maybe<Scalars['String']>;
    /** All values containing the given string. */
    label_contains?: Maybe<Scalars['String']>;
    /** All values ending with the given string. */
    label_ends_with?: Maybe<Scalars['String']>;
    /** All values that are contained in given list. */
    label_in?: Maybe<Array<Scalars['String']>>;
    /** All values that are not equal to given value. */
    label_not?: Maybe<Scalars['String']>;
    /** All values not containing the given string. */
    label_not_contains?: Maybe<Scalars['String']>;
    /** All values not ending with the given string */
    label_not_ends_with?: Maybe<Scalars['String']>;
    /** All values that are not contained in given list. */
    label_not_in?: Maybe<Array<Scalars['String']>>;
    /** All values not starting with the given string. */
    label_not_starts_with?: Maybe<Scalars['String']>;
    /** All values starting with the given string. */
    label_starts_with?: Maybe<Scalars['String']>;
    publishedAt?: Maybe<Scalars['DateTime']>;
    /** All values greater than the given value. */
    publishedAt_gt?: Maybe<Scalars['DateTime']>;
    /** All values greater than or equal the given value. */
    publishedAt_gte?: Maybe<Scalars['DateTime']>;
    /** All values that are contained in given list. */
    publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
    /** All values less than the given value. */
    publishedAt_lt?: Maybe<Scalars['DateTime']>;
    /** All values less than or equal the given value. */
    publishedAt_lte?: Maybe<Scalars['DateTime']>;
    /** All values that are not equal to given value. */
    publishedAt_not?: Maybe<Scalars['DateTime']>;
    /** All values that are not contained in given list. */
    publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
    publishedBy?: Maybe<UserWhereInput>;
    scheduledIn_every?: Maybe<ScheduledOperationWhereInput>;
    scheduledIn_none?: Maybe<ScheduledOperationWhereInput>;
    scheduledIn_some?: Maybe<ScheduledOperationWhereInput>;
    updatedAt?: Maybe<Scalars['DateTime']>;
    /** All values greater than the given value. */
    updatedAt_gt?: Maybe<Scalars['DateTime']>;
    /** All values greater than or equal the given value. */
    updatedAt_gte?: Maybe<Scalars['DateTime']>;
    /** All values that are contained in given list. */
    updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
    /** All values less than the given value. */
    updatedAt_lt?: Maybe<Scalars['DateTime']>;
    /** All values less than or equal the given value. */
    updatedAt_lte?: Maybe<Scalars['DateTime']>;
    /** All values that are not equal to given value. */
    updatedAt_not?: Maybe<Scalars['DateTime']>;
    /** All values that are not contained in given list. */
    updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
    updatedBy?: Maybe<UserWhereInput>;
    url?: Maybe<Scalars['String']>;
    /** All values containing the given string. */
    url_contains?: Maybe<Scalars['String']>;
    /** All values ending with the given string. */
    url_ends_with?: Maybe<Scalars['String']>;
    /** All values that are contained in given list. */
    url_in?: Maybe<Array<Scalars['String']>>;
    /** All values that are not equal to given value. */
    url_not?: Maybe<Scalars['String']>;
    /** All values not containing the given string. */
    url_not_contains?: Maybe<Scalars['String']>;
    /** All values not ending with the given string */
    url_not_ends_with?: Maybe<Scalars['String']>;
    /** All values that are not contained in given list. */
    url_not_in?: Maybe<Array<Scalars['String']>>;
    /** All values not starting with the given string. */
    url_not_starts_with?: Maybe<Scalars['String']>;
    /** All values starting with the given string. */
    url_starts_with?: Maybe<Scalars['String']>;
};

export enum SocialLinkOrderByInput {
    CreatedAtAsc = 'createdAt_ASC',
    CreatedAtDesc = 'createdAt_DESC',
    IdAsc = 'id_ASC',
    IdDesc = 'id_DESC',
    LabelAsc = 'label_ASC',
    LabelDesc = 'label_DESC',
    PublishedAtAsc = 'publishedAt_ASC',
    PublishedAtDesc = 'publishedAt_DESC',
    UpdatedAtAsc = 'updatedAt_ASC',
    UpdatedAtDesc = 'updatedAt_DESC',
    UrlAsc = 'url_ASC',
    UrlDesc = 'url_DESC',
}

export type SocialLinkUpdateInput = {
    label?: Maybe<Scalars['String']>;
    url?: Maybe<Scalars['String']>;
};

export type SocialLinkUpdateManyInlineInput = {
    /** Connect multiple existing SocialLink documents */
    connect?: Maybe<Array<SocialLinkConnectInput>>;
    /** Create and connect multiple SocialLink documents */
    create?: Maybe<Array<SocialLinkCreateInput>>;
    /** Delete multiple SocialLink documents */
    delete?: Maybe<Array<SocialLinkWhereUniqueInput>>;
    /** Disconnect multiple SocialLink documents */
    disconnect?: Maybe<Array<SocialLinkWhereUniqueInput>>;
    /** Override currently-connected documents with multiple existing SocialLink documents */
    set?: Maybe<Array<SocialLinkWhereUniqueInput>>;
    /** Update multiple SocialLink documents */
    update?: Maybe<Array<SocialLinkUpdateWithNestedWhereUniqueInput>>;
    /** Upsert multiple SocialLink documents */
    upsert?: Maybe<Array<SocialLinkUpsertWithNestedWhereUniqueInput>>;
};

export type SocialLinkUpdateManyInput = {
    label?: Maybe<Scalars['String']>;
    url?: Maybe<Scalars['String']>;
};

export type SocialLinkUpdateManyWithNestedWhereInput = {
    /** Update many input */
    data: SocialLinkUpdateManyInput;
    /** Document search */
    where: SocialLinkWhereInput;
};

export type SocialLinkUpdateOneInlineInput = {
    /** Connect existing SocialLink document */
    connect?: Maybe<SocialLinkWhereUniqueInput>;
    /** Create and connect one SocialLink document */
    create?: Maybe<SocialLinkCreateInput>;
    /** Delete currently connected SocialLink document */
    delete?: Maybe<Scalars['Boolean']>;
    /** Disconnect currently connected SocialLink document */
    disconnect?: Maybe<Scalars['Boolean']>;
    /** Update single SocialLink document */
    update?: Maybe<SocialLinkUpdateWithNestedWhereUniqueInput>;
    /** Upsert single SocialLink document */
    upsert?: Maybe<SocialLinkUpsertWithNestedWhereUniqueInput>;
};

export type SocialLinkUpdateWithNestedWhereUniqueInput = {
    /** Document to update */
    data: SocialLinkUpdateInput;
    /** Unique document search */
    where: SocialLinkWhereUniqueInput;
};

export type SocialLinkUpsertInput = {
    /** Create document if it didn't exist */
    create: SocialLinkCreateInput;
    /** Update document if it exists */
    update: SocialLinkUpdateInput;
};

export type SocialLinkUpsertWithNestedWhereUniqueInput = {
    /** Upsert data */
    data: SocialLinkUpsertInput;
    /** Unique document search */
    where: SocialLinkWhereUniqueInput;
};

/** Identifies documents */
export type SocialLinkWhereInput = {
    /** Logical AND on all given filters. */
    AND?: Maybe<Array<SocialLinkWhereInput>>;
    /** Logical NOT on all given filters combined by AND. */
    NOT?: Maybe<Array<SocialLinkWhereInput>>;
    /** Logical OR on all given filters. */
    OR?: Maybe<Array<SocialLinkWhereInput>>;
    /** Contains search across all appropriate fields. */
    _search?: Maybe<Scalars['String']>;
    createdAt?: Maybe<Scalars['DateTime']>;
    /** All values greater than the given value. */
    createdAt_gt?: Maybe<Scalars['DateTime']>;
    /** All values greater than or equal the given value. */
    createdAt_gte?: Maybe<Scalars['DateTime']>;
    /** All values that are contained in given list. */
    createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
    /** All values less than the given value. */
    createdAt_lt?: Maybe<Scalars['DateTime']>;
    /** All values less than or equal the given value. */
    createdAt_lte?: Maybe<Scalars['DateTime']>;
    /** All values that are not equal to given value. */
    createdAt_not?: Maybe<Scalars['DateTime']>;
    /** All values that are not contained in given list. */
    createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
    createdBy?: Maybe<UserWhereInput>;
    id?: Maybe<Scalars['ID']>;
    /** All values containing the given string. */
    id_contains?: Maybe<Scalars['ID']>;
    /** All values ending with the given string. */
    id_ends_with?: Maybe<Scalars['ID']>;
    /** All values that are contained in given list. */
    id_in?: Maybe<Array<Scalars['ID']>>;
    /** All values that are not equal to given value. */
    id_not?: Maybe<Scalars['ID']>;
    /** All values not containing the given string. */
    id_not_contains?: Maybe<Scalars['ID']>;
    /** All values not ending with the given string */
    id_not_ends_with?: Maybe<Scalars['ID']>;
    /** All values that are not contained in given list. */
    id_not_in?: Maybe<Array<Scalars['ID']>>;
    /** All values not starting with the given string. */
    id_not_starts_with?: Maybe<Scalars['ID']>;
    /** All values starting with the given string. */
    id_starts_with?: Maybe<Scalars['ID']>;
    label?: Maybe<Scalars['String']>;
    /** All values containing the given string. */
    label_contains?: Maybe<Scalars['String']>;
    /** All values ending with the given string. */
    label_ends_with?: Maybe<Scalars['String']>;
    /** All values that are contained in given list. */
    label_in?: Maybe<Array<Scalars['String']>>;
    /** All values that are not equal to given value. */
    label_not?: Maybe<Scalars['String']>;
    /** All values not containing the given string. */
    label_not_contains?: Maybe<Scalars['String']>;
    /** All values not ending with the given string */
    label_not_ends_with?: Maybe<Scalars['String']>;
    /** All values that are not contained in given list. */
    label_not_in?: Maybe<Array<Scalars['String']>>;
    /** All values not starting with the given string. */
    label_not_starts_with?: Maybe<Scalars['String']>;
    /** All values starting with the given string. */
    label_starts_with?: Maybe<Scalars['String']>;
    publishedAt?: Maybe<Scalars['DateTime']>;
    /** All values greater than the given value. */
    publishedAt_gt?: Maybe<Scalars['DateTime']>;
    /** All values greater than or equal the given value. */
    publishedAt_gte?: Maybe<Scalars['DateTime']>;
    /** All values that are contained in given list. */
    publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
    /** All values less than the given value. */
    publishedAt_lt?: Maybe<Scalars['DateTime']>;
    /** All values less than or equal the given value. */
    publishedAt_lte?: Maybe<Scalars['DateTime']>;
    /** All values that are not equal to given value. */
    publishedAt_not?: Maybe<Scalars['DateTime']>;
    /** All values that are not contained in given list. */
    publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
    publishedBy?: Maybe<UserWhereInput>;
    scheduledIn_every?: Maybe<ScheduledOperationWhereInput>;
    scheduledIn_none?: Maybe<ScheduledOperationWhereInput>;
    scheduledIn_some?: Maybe<ScheduledOperationWhereInput>;
    updatedAt?: Maybe<Scalars['DateTime']>;
    /** All values greater than the given value. */
    updatedAt_gt?: Maybe<Scalars['DateTime']>;
    /** All values greater than or equal the given value. */
    updatedAt_gte?: Maybe<Scalars['DateTime']>;
    /** All values that are contained in given list. */
    updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
    /** All values less than the given value. */
    updatedAt_lt?: Maybe<Scalars['DateTime']>;
    /** All values less than or equal the given value. */
    updatedAt_lte?: Maybe<Scalars['DateTime']>;
    /** All values that are not equal to given value. */
    updatedAt_not?: Maybe<Scalars['DateTime']>;
    /** All values that are not contained in given list. */
    updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
    updatedBy?: Maybe<UserWhereInput>;
    url?: Maybe<Scalars['String']>;
    /** All values containing the given string. */
    url_contains?: Maybe<Scalars['String']>;
    /** All values ending with the given string. */
    url_ends_with?: Maybe<Scalars['String']>;
    /** All values that are contained in given list. */
    url_in?: Maybe<Array<Scalars['String']>>;
    /** All values that are not equal to given value. */
    url_not?: Maybe<Scalars['String']>;
    /** All values not containing the given string. */
    url_not_contains?: Maybe<Scalars['String']>;
    /** All values not ending with the given string */
    url_not_ends_with?: Maybe<Scalars['String']>;
    /** All values that are not contained in given list. */
    url_not_in?: Maybe<Array<Scalars['String']>>;
    /** All values not starting with the given string. */
    url_not_starts_with?: Maybe<Scalars['String']>;
    /** All values starting with the given string. */
    url_starts_with?: Maybe<Scalars['String']>;
};

/** References SocialLink record uniquely */
export type SocialLinkWhereUniqueInput = {
    id?: Maybe<Scalars['ID']>;
};

/** Stage system enumeration */
export enum Stage {
    /** The Draft is the default stage for all your content. */
    Draft = 'DRAFT',
    /** The Published stage is where you can publish your content to. */
    Published = 'PUBLISHED',
}

export enum SystemDateTimeFieldVariation {
    Base = 'BASE',
    Combined = 'COMBINED',
    Localization = 'LOCALIZATION',
}

export type UnpublishLocaleInput = {
    /** Locales to unpublish */
    locale: Locale;
    /** Stages to unpublish selected locales from */
    stages: Array<Stage>;
};

/** User system model */
export type User = Node & {
    __typename?: 'User';
    /** The time the document was created */
    createdAt: Scalars['DateTime'];
    /** Get the document in other stages */
    documentInStages: Array<User>;
    /** The unique identifier */
    id: Scalars['ID'];
    /** Flag to determine if user is active or not */
    isActive: Scalars['Boolean'];
    /** User Kind. Can be either MEMBER, PAT or PUBLIC */
    kind: UserKind;
    /** The username */
    name: Scalars['String'];
    /** Profile Picture url */
    picture?: Maybe<Scalars['String']>;
    /** The time the document was published. Null on documents in draft stage. */
    publishedAt?: Maybe<Scalars['DateTime']>;
    /** System stage field */
    stage: Stage;
    /** The time the document was updated */
    updatedAt: Scalars['DateTime'];
};

/** User system model */
export type UserDocumentInStagesArgs = {
    includeCurrent?: Scalars['Boolean'];
    inheritLocale?: Scalars['Boolean'];
    stages?: Array<Stage>;
};

export type UserConnectInput = {
    /** Allow to specify document position in list of connected documents, will default to appending at end of list */
    position?: Maybe<ConnectPositionInput>;
    /** Document to connect */
    where: UserWhereUniqueInput;
};

/** A connection to a list of items. */
export type UserConnection = {
    __typename?: 'UserConnection';
    aggregate: Aggregate;
    /** A list of edges. */
    edges: Array<UserEdge>;
    /** Information to aid in pagination. */
    pageInfo: PageInfo;
};

export type UserCreateManyInlineInput = {
    /** Connect multiple existing User documents */
    connect?: Maybe<Array<UserWhereUniqueInput>>;
};

export type UserCreateOneInlineInput = {
    /** Connect one existing User document */
    connect?: Maybe<UserWhereUniqueInput>;
};

/** An edge in a connection. */
export type UserEdge = {
    __typename?: 'UserEdge';
    /** A cursor for use in pagination. */
    cursor: Scalars['String'];
    /** The item at the end of the edge. */
    node: User;
};

/** System User Kind */
export enum UserKind {
    Member = 'MEMBER',
    Pat = 'PAT',
    Public = 'PUBLIC',
    Webhook = 'WEBHOOK',
}

/** Identifies documents */
export type UserManyWhereInput = {
    /** Logical AND on all given filters. */
    AND?: Maybe<Array<UserWhereInput>>;
    /** Logical NOT on all given filters combined by AND. */
    NOT?: Maybe<Array<UserWhereInput>>;
    /** Logical OR on all given filters. */
    OR?: Maybe<Array<UserWhereInput>>;
    /** Contains search across all appropriate fields. */
    _search?: Maybe<Scalars['String']>;
    createdAt?: Maybe<Scalars['DateTime']>;
    /** All values greater than the given value. */
    createdAt_gt?: Maybe<Scalars['DateTime']>;
    /** All values greater than or equal the given value. */
    createdAt_gte?: Maybe<Scalars['DateTime']>;
    /** All values that are contained in given list. */
    createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
    /** All values less than the given value. */
    createdAt_lt?: Maybe<Scalars['DateTime']>;
    /** All values less than or equal the given value. */
    createdAt_lte?: Maybe<Scalars['DateTime']>;
    /** All values that are not equal to given value. */
    createdAt_not?: Maybe<Scalars['DateTime']>;
    /** All values that are not contained in given list. */
    createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
    id?: Maybe<Scalars['ID']>;
    /** All values containing the given string. */
    id_contains?: Maybe<Scalars['ID']>;
    /** All values ending with the given string. */
    id_ends_with?: Maybe<Scalars['ID']>;
    /** All values that are contained in given list. */
    id_in?: Maybe<Array<Scalars['ID']>>;
    /** All values that are not equal to given value. */
    id_not?: Maybe<Scalars['ID']>;
    /** All values not containing the given string. */
    id_not_contains?: Maybe<Scalars['ID']>;
    /** All values not ending with the given string */
    id_not_ends_with?: Maybe<Scalars['ID']>;
    /** All values that are not contained in given list. */
    id_not_in?: Maybe<Array<Scalars['ID']>>;
    /** All values not starting with the given string. */
    id_not_starts_with?: Maybe<Scalars['ID']>;
    /** All values starting with the given string. */
    id_starts_with?: Maybe<Scalars['ID']>;
    isActive?: Maybe<Scalars['Boolean']>;
    /** All values that are not equal to given value. */
    isActive_not?: Maybe<Scalars['Boolean']>;
    kind?: Maybe<UserKind>;
    /** All values that are contained in given list. */
    kind_in?: Maybe<Array<UserKind>>;
    /** All values that are not equal to given value. */
    kind_not?: Maybe<UserKind>;
    /** All values that are not contained in given list. */
    kind_not_in?: Maybe<Array<UserKind>>;
    name?: Maybe<Scalars['String']>;
    /** All values containing the given string. */
    name_contains?: Maybe<Scalars['String']>;
    /** All values ending with the given string. */
    name_ends_with?: Maybe<Scalars['String']>;
    /** All values that are contained in given list. */
    name_in?: Maybe<Array<Scalars['String']>>;
    /** All values that are not equal to given value. */
    name_not?: Maybe<Scalars['String']>;
    /** All values not containing the given string. */
    name_not_contains?: Maybe<Scalars['String']>;
    /** All values not ending with the given string */
    name_not_ends_with?: Maybe<Scalars['String']>;
    /** All values that are not contained in given list. */
    name_not_in?: Maybe<Array<Scalars['String']>>;
    /** All values not starting with the given string. */
    name_not_starts_with?: Maybe<Scalars['String']>;
    /** All values starting with the given string. */
    name_starts_with?: Maybe<Scalars['String']>;
    picture?: Maybe<Scalars['String']>;
    /** All values containing the given string. */
    picture_contains?: Maybe<Scalars['String']>;
    /** All values ending with the given string. */
    picture_ends_with?: Maybe<Scalars['String']>;
    /** All values that are contained in given list. */
    picture_in?: Maybe<Array<Scalars['String']>>;
    /** All values that are not equal to given value. */
    picture_not?: Maybe<Scalars['String']>;
    /** All values not containing the given string. */
    picture_not_contains?: Maybe<Scalars['String']>;
    /** All values not ending with the given string */
    picture_not_ends_with?: Maybe<Scalars['String']>;
    /** All values that are not contained in given list. */
    picture_not_in?: Maybe<Array<Scalars['String']>>;
    /** All values not starting with the given string. */
    picture_not_starts_with?: Maybe<Scalars['String']>;
    /** All values starting with the given string. */
    picture_starts_with?: Maybe<Scalars['String']>;
    publishedAt?: Maybe<Scalars['DateTime']>;
    /** All values greater than the given value. */
    publishedAt_gt?: Maybe<Scalars['DateTime']>;
    /** All values greater than or equal the given value. */
    publishedAt_gte?: Maybe<Scalars['DateTime']>;
    /** All values that are contained in given list. */
    publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
    /** All values less than the given value. */
    publishedAt_lt?: Maybe<Scalars['DateTime']>;
    /** All values less than or equal the given value. */
    publishedAt_lte?: Maybe<Scalars['DateTime']>;
    /** All values that are not equal to given value. */
    publishedAt_not?: Maybe<Scalars['DateTime']>;
    /** All values that are not contained in given list. */
    publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
    updatedAt?: Maybe<Scalars['DateTime']>;
    /** All values greater than the given value. */
    updatedAt_gt?: Maybe<Scalars['DateTime']>;
    /** All values greater than or equal the given value. */
    updatedAt_gte?: Maybe<Scalars['DateTime']>;
    /** All values that are contained in given list. */
    updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
    /** All values less than the given value. */
    updatedAt_lt?: Maybe<Scalars['DateTime']>;
    /** All values less than or equal the given value. */
    updatedAt_lte?: Maybe<Scalars['DateTime']>;
    /** All values that are not equal to given value. */
    updatedAt_not?: Maybe<Scalars['DateTime']>;
    /** All values that are not contained in given list. */
    updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
};

export enum UserOrderByInput {
    CreatedAtAsc = 'createdAt_ASC',
    CreatedAtDesc = 'createdAt_DESC',
    IdAsc = 'id_ASC',
    IdDesc = 'id_DESC',
    IsActiveAsc = 'isActive_ASC',
    IsActiveDesc = 'isActive_DESC',
    KindAsc = 'kind_ASC',
    KindDesc = 'kind_DESC',
    NameAsc = 'name_ASC',
    NameDesc = 'name_DESC',
    PictureAsc = 'picture_ASC',
    PictureDesc = 'picture_DESC',
    PublishedAtAsc = 'publishedAt_ASC',
    PublishedAtDesc = 'publishedAt_DESC',
    UpdatedAtAsc = 'updatedAt_ASC',
    UpdatedAtDesc = 'updatedAt_DESC',
}

export type UserUpdateManyInlineInput = {
    /** Connect multiple existing User documents */
    connect?: Maybe<Array<UserConnectInput>>;
    /** Disconnect multiple User documents */
    disconnect?: Maybe<Array<UserWhereUniqueInput>>;
    /** Override currently-connected documents with multiple existing User documents */
    set?: Maybe<Array<UserWhereUniqueInput>>;
};

export type UserUpdateOneInlineInput = {
    /** Connect existing User document */
    connect?: Maybe<UserWhereUniqueInput>;
    /** Disconnect currently connected User document */
    disconnect?: Maybe<Scalars['Boolean']>;
};

/** Identifies documents */
export type UserWhereInput = {
    /** Logical AND on all given filters. */
    AND?: Maybe<Array<UserWhereInput>>;
    /** Logical NOT on all given filters combined by AND. */
    NOT?: Maybe<Array<UserWhereInput>>;
    /** Logical OR on all given filters. */
    OR?: Maybe<Array<UserWhereInput>>;
    /** Contains search across all appropriate fields. */
    _search?: Maybe<Scalars['String']>;
    createdAt?: Maybe<Scalars['DateTime']>;
    /** All values greater than the given value. */
    createdAt_gt?: Maybe<Scalars['DateTime']>;
    /** All values greater than or equal the given value. */
    createdAt_gte?: Maybe<Scalars['DateTime']>;
    /** All values that are contained in given list. */
    createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
    /** All values less than the given value. */
    createdAt_lt?: Maybe<Scalars['DateTime']>;
    /** All values less than or equal the given value. */
    createdAt_lte?: Maybe<Scalars['DateTime']>;
    /** All values that are not equal to given value. */
    createdAt_not?: Maybe<Scalars['DateTime']>;
    /** All values that are not contained in given list. */
    createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
    id?: Maybe<Scalars['ID']>;
    /** All values containing the given string. */
    id_contains?: Maybe<Scalars['ID']>;
    /** All values ending with the given string. */
    id_ends_with?: Maybe<Scalars['ID']>;
    /** All values that are contained in given list. */
    id_in?: Maybe<Array<Scalars['ID']>>;
    /** All values that are not equal to given value. */
    id_not?: Maybe<Scalars['ID']>;
    /** All values not containing the given string. */
    id_not_contains?: Maybe<Scalars['ID']>;
    /** All values not ending with the given string */
    id_not_ends_with?: Maybe<Scalars['ID']>;
    /** All values that are not contained in given list. */
    id_not_in?: Maybe<Array<Scalars['ID']>>;
    /** All values not starting with the given string. */
    id_not_starts_with?: Maybe<Scalars['ID']>;
    /** All values starting with the given string. */
    id_starts_with?: Maybe<Scalars['ID']>;
    isActive?: Maybe<Scalars['Boolean']>;
    /** All values that are not equal to given value. */
    isActive_not?: Maybe<Scalars['Boolean']>;
    kind?: Maybe<UserKind>;
    /** All values that are contained in given list. */
    kind_in?: Maybe<Array<UserKind>>;
    /** All values that are not equal to given value. */
    kind_not?: Maybe<UserKind>;
    /** All values that are not contained in given list. */
    kind_not_in?: Maybe<Array<UserKind>>;
    name?: Maybe<Scalars['String']>;
    /** All values containing the given string. */
    name_contains?: Maybe<Scalars['String']>;
    /** All values ending with the given string. */
    name_ends_with?: Maybe<Scalars['String']>;
    /** All values that are contained in given list. */
    name_in?: Maybe<Array<Scalars['String']>>;
    /** All values that are not equal to given value. */
    name_not?: Maybe<Scalars['String']>;
    /** All values not containing the given string. */
    name_not_contains?: Maybe<Scalars['String']>;
    /** All values not ending with the given string */
    name_not_ends_with?: Maybe<Scalars['String']>;
    /** All values that are not contained in given list. */
    name_not_in?: Maybe<Array<Scalars['String']>>;
    /** All values not starting with the given string. */
    name_not_starts_with?: Maybe<Scalars['String']>;
    /** All values starting with the given string. */
    name_starts_with?: Maybe<Scalars['String']>;
    picture?: Maybe<Scalars['String']>;
    /** All values containing the given string. */
    picture_contains?: Maybe<Scalars['String']>;
    /** All values ending with the given string. */
    picture_ends_with?: Maybe<Scalars['String']>;
    /** All values that are contained in given list. */
    picture_in?: Maybe<Array<Scalars['String']>>;
    /** All values that are not equal to given value. */
    picture_not?: Maybe<Scalars['String']>;
    /** All values not containing the given string. */
    picture_not_contains?: Maybe<Scalars['String']>;
    /** All values not ending with the given string */
    picture_not_ends_with?: Maybe<Scalars['String']>;
    /** All values that are not contained in given list. */
    picture_not_in?: Maybe<Array<Scalars['String']>>;
    /** All values not starting with the given string. */
    picture_not_starts_with?: Maybe<Scalars['String']>;
    /** All values starting with the given string. */
    picture_starts_with?: Maybe<Scalars['String']>;
    publishedAt?: Maybe<Scalars['DateTime']>;
    /** All values greater than the given value. */
    publishedAt_gt?: Maybe<Scalars['DateTime']>;
    /** All values greater than or equal the given value. */
    publishedAt_gte?: Maybe<Scalars['DateTime']>;
    /** All values that are contained in given list. */
    publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
    /** All values less than the given value. */
    publishedAt_lt?: Maybe<Scalars['DateTime']>;
    /** All values less than or equal the given value. */
    publishedAt_lte?: Maybe<Scalars['DateTime']>;
    /** All values that are not equal to given value. */
    publishedAt_not?: Maybe<Scalars['DateTime']>;
    /** All values that are not contained in given list. */
    publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
    updatedAt?: Maybe<Scalars['DateTime']>;
    /** All values greater than the given value. */
    updatedAt_gt?: Maybe<Scalars['DateTime']>;
    /** All values greater than or equal the given value. */
    updatedAt_gte?: Maybe<Scalars['DateTime']>;
    /** All values that are contained in given list. */
    updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
    /** All values less than the given value. */
    updatedAt_lt?: Maybe<Scalars['DateTime']>;
    /** All values less than or equal the given value. */
    updatedAt_lte?: Maybe<Scalars['DateTime']>;
    /** All values that are not equal to given value. */
    updatedAt_not?: Maybe<Scalars['DateTime']>;
    /** All values that are not contained in given list. */
    updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
};

/** References User record uniquely */
export type UserWhereUniqueInput = {
    id?: Maybe<Scalars['ID']>;
};

export type Version = {
    __typename?: 'Version';
    createdAt: Scalars['DateTime'];
    id: Scalars['ID'];
    revision: Scalars['Int'];
    stage: Stage;
};

export type VersionWhereInput = {
    id: Scalars['ID'];
    revision: Scalars['Int'];
    stage: Stage;
};

export enum _FilterKind {
    And = 'AND',
    Not = 'NOT',
    Or = 'OR',
    Contains = 'contains',
    ContainsAll = 'contains_all',
    ContainsNone = 'contains_none',
    ContainsSome = 'contains_some',
    EndsWith = 'ends_with',
    Eq = 'eq',
    EqNot = 'eq_not',
    Gt = 'gt',
    Gte = 'gte',
    In = 'in',
    Lt = 'lt',
    Lte = 'lte',
    NotContains = 'not_contains',
    NotEndsWith = 'not_ends_with',
    NotIn = 'not_in',
    NotStartsWith = 'not_starts_with',
    RelationalEvery = 'relational_every',
    RelationalNone = 'relational_none',
    RelationalSingle = 'relational_single',
    RelationalSome = 'relational_some',
    Search = 'search',
    StartsWith = 'starts_with',
}

export enum _MutationInputFieldKind {
    Enum = 'enum',
    Relation = 'relation',
    RichText = 'richText',
    RichTextWithEmbeds = 'richTextWithEmbeds',
    Scalar = 'scalar',
    Union = 'union',
    Virtual = 'virtual',
}

export enum _MutationKind {
    Create = 'create',
    Delete = 'delete',
    DeleteMany = 'deleteMany',
    Publish = 'publish',
    PublishMany = 'publishMany',
    Unpublish = 'unpublish',
    UnpublishMany = 'unpublishMany',
    Update = 'update',
    UpdateMany = 'updateMany',
    Upsert = 'upsert',
}

export enum _OrderDirection {
    Asc = 'asc',
    Desc = 'desc',
}

export enum _RelationInputCardinality {
    Many = 'many',
    One = 'one',
}

export enum _RelationInputKind {
    Create = 'create',
    Update = 'update',
}

export enum _RelationKind {
    Regular = 'regular',
    Union = 'union',
}

export enum _SystemDateTimeFieldVariation {
    Base = 'base',
    Combined = 'combined',
    Localization = 'localization',
}

export type GetAboutMeSectionQueryVariables = Exact<{ [key: string]: never }>;

export type GetAboutMeSectionQuery = { __typename?: 'Query' } & {
    section?: Maybe<
        { __typename?: 'Section' } & Pick<Section, 'heading'> & {
                body?: Maybe<{ __typename?: 'RichText' } & Pick<RichText, 'html'>>;
            }
    >;
};

export type GetCaseStudyQueryVariables = Exact<{
    projectId: Scalars['String'];
}>;

export type GetCaseStudyQuery = { __typename?: 'Query' } & {
    sections: Array<{ __typename?: 'Section' } & Pick<Section, 'sectionId' | 'heading'>>;
    projects: Array<{ __typename?: 'Project' } & Pick<Project, 'projectId' | 'projectType'>>;
    project?: Maybe<
        { __typename?: 'Project' } & Pick<
            Project,
            | 'updatedAt'
            | 'createdAt'
            | 'id'
            | 'projectId'
            | 'title'
            | 'projectType'
            | 'description'
            | 'techList'
            | 'externalUrl'
            | 'overview'
            | 'lastDeployedOn'
            | 'projectPublishDate'
            | 'storybookUrl'
            | 'order'
            | 'githubRepoUrl'
            | 'team'
        > & {
                imageDesktop?: Maybe<
                    { __typename?: 'Asset' } & Pick<Asset, 'fileName' | 'height' | 'width'>
                >;
                body?: Maybe<{ __typename?: 'RichText' } & Pick<RichText, 'raw'>>;
            }
    >;
};

export type GetRecentWorkQueryVariables = Exact<{ [key: string]: never }>;

export type GetRecentWorkQuery = { __typename?: 'Query' } & {
    section?: Maybe<{ __typename?: 'Section' } & Pick<Section, 'heading'>>;
    projects: Array<
        { __typename?: 'Project' } & Pick<
            Project,
            | 'id'
            | 'projectType'
            | 'title'
            | 'description'
            | 'projectId'
            | 'externalUrl'
            | 'linkType'
            | 'order'
        > & { imageDesktop?: Maybe<{ __typename?: 'Asset' } & Pick<Asset, 'url'>> }
    >;
};

export type GetSkillsQueryVariables = Exact<{ [key: string]: never }>;

export type GetSkillsQuery = { __typename?: 'Query' } & {
    skills: Array<
        { __typename?: 'Skill' } & Pick<
            Skill,
            | 'xAxisDesktop'
            | 'xAxisMobile'
            | 'yAxisDesktop'
            | 'yAxisMobile'
            | 'directionDesktop'
            | 'directionMobile'
            | 'id'
            | 'label'
        >
    >;
};

export type GetSocialLinksQueryVariables = Exact<{ [key: string]: never }>;

export type GetSocialLinksQuery = { __typename?: 'Query' } & {
    socialLinks: Array<{ __typename?: 'SocialLink' } & Pick<SocialLink, 'id' | 'label' | 'url'>>;
};

export const GetAboutMeSectionDocument = gql`
    query getAboutMeSection {
        section(where: { sectionId: "about-me" }) {
            heading
            body {
                html
            }
        }
    }
`;
export const GetCaseStudyDocument = gql`
    query getCaseStudy($projectId: String!) {
        sections(where: { sectionId_contains: "case-study-" }) {
            sectionId
            heading
        }
        projects(where: { linkType: Case_Study }) {
            projectId
            projectType
        }
        project(where: { projectId: $projectId }) {
            updatedAt
            createdAt
            id
            projectId
            title
            projectType
            description
            techList
            externalUrl
            overview
            lastDeployedOn
            projectPublishDate
            storybookUrl
            order
            githubRepoUrl
            team
            imageDesktop {
                fileName
                height
                width
            }
            body {
                raw
            }
        }
    }
`;
export const GetRecentWorkDocument = gql`
    query getRecentWork {
        section(where: { sectionId: "recent-work" }) {
            heading
        }
        projects(orderBy: order_ASC, first: 5, where: { projectType: Work, disabled: false }) {
            id
            projectType
            title
            description
            projectId
            externalUrl
            linkType
            order
            imageDesktop {
                url
            }
        }
    }
`;
export const GetSkillsDocument = gql`
    query getSkills {
        skills {
            xAxisDesktop
            xAxisMobile
            yAxisDesktop
            yAxisMobile
            directionDesktop
            directionMobile
            id
            label
        }
    }
`;
export const GetSocialLinksDocument = gql`
    query getSocialLinks {
        socialLinks {
            id
            label
            url
        }
    }
`;

export type SdkFunctionWrapper = <T>(
    action: (requestHeaders?: Record<string, string>) => Promise<T>,
    operationName: string
) => Promise<T>;

const defaultWrapper: SdkFunctionWrapper = (action, _operationName) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
    return {
        getAboutMeSection(
            variables?: GetAboutMeSectionQueryVariables,
            requestHeaders?: Dom.RequestInit['headers']
        ): Promise<GetAboutMeSectionQuery> {
            return withWrapper(
                wrappedRequestHeaders =>
                    client.request<GetAboutMeSectionQuery>(GetAboutMeSectionDocument, variables, {
                        ...requestHeaders,
                        ...wrappedRequestHeaders,
                    }),
                'getAboutMeSection'
            );
        },
        getCaseStudy(
            variables: GetCaseStudyQueryVariables,
            requestHeaders?: Dom.RequestInit['headers']
        ): Promise<GetCaseStudyQuery> {
            return withWrapper(
                wrappedRequestHeaders =>
                    client.request<GetCaseStudyQuery>(GetCaseStudyDocument, variables, {
                        ...requestHeaders,
                        ...wrappedRequestHeaders,
                    }),
                'getCaseStudy'
            );
        },
        getRecentWork(
            variables?: GetRecentWorkQueryVariables,
            requestHeaders?: Dom.RequestInit['headers']
        ): Promise<GetRecentWorkQuery> {
            return withWrapper(
                wrappedRequestHeaders =>
                    client.request<GetRecentWorkQuery>(GetRecentWorkDocument, variables, {
                        ...requestHeaders,
                        ...wrappedRequestHeaders,
                    }),
                'getRecentWork'
            );
        },
        getSkills(
            variables?: GetSkillsQueryVariables,
            requestHeaders?: Dom.RequestInit['headers']
        ): Promise<GetSkillsQuery> {
            return withWrapper(
                wrappedRequestHeaders =>
                    client.request<GetSkillsQuery>(GetSkillsDocument, variables, {
                        ...requestHeaders,
                        ...wrappedRequestHeaders,
                    }),
                'getSkills'
            );
        },
        getSocialLinks(
            variables?: GetSocialLinksQueryVariables,
            requestHeaders?: Dom.RequestInit['headers']
        ): Promise<GetSocialLinksQuery> {
            return withWrapper(
                wrappedRequestHeaders =>
                    client.request<GetSocialLinksQuery>(GetSocialLinksDocument, variables, {
                        ...requestHeaders,
                        ...wrappedRequestHeaders,
                    }),
                'getSocialLinks'
            );
        },
    };
}
export type Sdk = ReturnType<typeof getSdk>;

export interface PossibleTypesResultData {
    possibleTypes: {
        [key: string]: string[];
    };
}
const result: PossibleTypesResultData = {
    possibleTypes: {
        Node: [
            'Asset',
            'Project',
            'ScheduledOperation',
            'ScheduledRelease',
            'Section',
            'Skill',
            'SocialLink',
            'User',
        ],
        ScheduledOperationAffectedDocument: ['Asset', 'Project', 'Section', 'Skill', 'SocialLink'],
    },
};
export default result;
