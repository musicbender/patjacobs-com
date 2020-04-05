export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
  /** 
 * A date string, such as 2007-12-03, compliant with the ISO 8601 standard for
   * representation of dates and times using the Gregorian calendar.
 */
  Date: any,
  GCMS_DateTime: any,
  /** Custom scalar representing a Slate rich text AST */
  GCMS_RichTextAST: any,
  /** 
 * The `Long` scalar type represents non-fractional signed whole numeric values.
   * Long can represent values between -(2^63) and 2^63 - 1.
 */
  GCMS_Long: any,
  /** Raw JSON value */
  GCMS_Json: any,
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any,
};











export type BooleanQueryOperatorInput = {
  eq?: Maybe<Scalars['Boolean']>,
  ne?: Maybe<Scalars['Boolean']>,
  in?: Maybe<Array<Maybe<Scalars['Boolean']>>>,
  nin?: Maybe<Array<Maybe<Scalars['Boolean']>>>,
};

export type Configs = Node & {
  id: Scalars['ID'],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
  config?: Maybe<ConfigsConfig>,
  meta?: Maybe<ConfigsMeta>,
  headerConfig?: Maybe<ConfigsHeaderConfig>,
  recentWork?: Maybe<ConfigsRecentWork>,
  content?: Maybe<ConfigsContent>,
  data?: Maybe<ConfigsData>,
};

export type ConfigsConfig = {
  gridLines?: Maybe<Array<Maybe<Scalars['Int']>>>,
  pageLoadTimeout?: Maybe<Scalars['Int']>,
  splashScreenDebug?: Maybe<Scalars['Boolean']>,
  splashScreenTimeout?: Maybe<Scalars['Int']>,
  transportDuration?: Maybe<Scalars['Int']>,
  workItemsAmount?: Maybe<Scalars['Int']>,
  homeBottom?: Maybe<Scalars['Int']>,
  skillsTop?: Maybe<Scalars['Int']>,
  mobileBreakpoint?: Maybe<Scalars['Int']>,
  windowHeightConstant?: Maybe<Scalars['Int']>,
  scrollDebug?: Maybe<Scalars['Boolean']>,
};

export type ConfigsConfigFilterInput = {
  gridLines?: Maybe<IntQueryOperatorInput>,
  pageLoadTimeout?: Maybe<IntQueryOperatorInput>,
  splashScreenDebug?: Maybe<BooleanQueryOperatorInput>,
  splashScreenTimeout?: Maybe<IntQueryOperatorInput>,
  transportDuration?: Maybe<IntQueryOperatorInput>,
  workItemsAmount?: Maybe<IntQueryOperatorInput>,
  homeBottom?: Maybe<IntQueryOperatorInput>,
  skillsTop?: Maybe<IntQueryOperatorInput>,
  mobileBreakpoint?: Maybe<IntQueryOperatorInput>,
  windowHeightConstant?: Maybe<IntQueryOperatorInput>,
  scrollDebug?: Maybe<BooleanQueryOperatorInput>,
};

export type ConfigsConnection = {
  totalCount: Scalars['Int'],
  edges: Array<ConfigsEdge>,
  nodes: Array<Configs>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<ConfigsGroupConnection>,
};


export type ConfigsConnectionDistinctArgs = {
  field: ConfigsFieldsEnum
};


export type ConfigsConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: ConfigsFieldsEnum
};

export type ConfigsContent = {
  home?: Maybe<ConfigsContentHome>,
};

export type ConfigsContentFilterInput = {
  home?: Maybe<ConfigsContentHomeFilterInput>,
};

export type ConfigsContentHome = {
  sections?: Maybe<ConfigsContentHomeSections>,
};

export type ConfigsContentHomeFilterInput = {
  sections?: Maybe<ConfigsContentHomeSectionsFilterInput>,
};

export type ConfigsContentHomeSections = {
  aboutMe?: Maybe<ConfigsContentHomeSectionsAboutMe>,
  recentWork?: Maybe<ConfigsContentHomeSectionsRecentWork>,
};

export type ConfigsContentHomeSectionsAboutMe = {
  heading?: Maybe<Scalars['String']>,
  body?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type ConfigsContentHomeSectionsAboutMeFilterInput = {
  heading?: Maybe<StringQueryOperatorInput>,
  body?: Maybe<StringQueryOperatorInput>,
};

export type ConfigsContentHomeSectionsFilterInput = {
  aboutMe?: Maybe<ConfigsContentHomeSectionsAboutMeFilterInput>,
  recentWork?: Maybe<ConfigsContentHomeSectionsRecentWorkFilterInput>,
};

export type ConfigsContentHomeSectionsRecentWork = {
  heading?: Maybe<Scalars['String']>,
};

export type ConfigsContentHomeSectionsRecentWorkFilterInput = {
  heading?: Maybe<StringQueryOperatorInput>,
};

export type ConfigsData = {
  config?: Maybe<ConfigsDataConfig>,
  meta?: Maybe<ConfigsDataMeta>,
  headerConfig?: Maybe<ConfigsDataHeaderConfig>,
  recentWork?: Maybe<ConfigsDataRecentWork>,
  content?: Maybe<ConfigsDataContent>,
};

export type ConfigsDataConfig = {
  gridLines?: Maybe<Array<Maybe<Scalars['Int']>>>,
  pageLoadTimeout?: Maybe<Scalars['Int']>,
  splashScreenDebug?: Maybe<Scalars['Boolean']>,
  splashScreenTimeout?: Maybe<Scalars['Int']>,
  transportDuration?: Maybe<Scalars['Int']>,
  workItemsAmount?: Maybe<Scalars['Int']>,
  homeBottom?: Maybe<Scalars['Int']>,
  skillsTop?: Maybe<Scalars['Int']>,
  mobileBreakpoint?: Maybe<Scalars['Int']>,
  windowHeightConstant?: Maybe<Scalars['Int']>,
  scrollDebug?: Maybe<Scalars['Boolean']>,
};

export type ConfigsDataConfigFilterInput = {
  gridLines?: Maybe<IntQueryOperatorInput>,
  pageLoadTimeout?: Maybe<IntQueryOperatorInput>,
  splashScreenDebug?: Maybe<BooleanQueryOperatorInput>,
  splashScreenTimeout?: Maybe<IntQueryOperatorInput>,
  transportDuration?: Maybe<IntQueryOperatorInput>,
  workItemsAmount?: Maybe<IntQueryOperatorInput>,
  homeBottom?: Maybe<IntQueryOperatorInput>,
  skillsTop?: Maybe<IntQueryOperatorInput>,
  mobileBreakpoint?: Maybe<IntQueryOperatorInput>,
  windowHeightConstant?: Maybe<IntQueryOperatorInput>,
  scrollDebug?: Maybe<BooleanQueryOperatorInput>,
};

export type ConfigsDataContent = {
  home?: Maybe<ConfigsDataContentHome>,
};

export type ConfigsDataContentFilterInput = {
  home?: Maybe<ConfigsDataContentHomeFilterInput>,
};

export type ConfigsDataContentHome = {
  sections?: Maybe<ConfigsDataContentHomeSections>,
};

export type ConfigsDataContentHomeFilterInput = {
  sections?: Maybe<ConfigsDataContentHomeSectionsFilterInput>,
};

export type ConfigsDataContentHomeSections = {
  aboutMe?: Maybe<ConfigsDataContentHomeSectionsAboutMe>,
  recentWork?: Maybe<ConfigsDataContentHomeSectionsRecentWork>,
};

export type ConfigsDataContentHomeSectionsAboutMe = {
  heading?: Maybe<Scalars['String']>,
  body?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type ConfigsDataContentHomeSectionsAboutMeFilterInput = {
  heading?: Maybe<StringQueryOperatorInput>,
  body?: Maybe<StringQueryOperatorInput>,
};

export type ConfigsDataContentHomeSectionsFilterInput = {
  aboutMe?: Maybe<ConfigsDataContentHomeSectionsAboutMeFilterInput>,
  recentWork?: Maybe<ConfigsDataContentHomeSectionsRecentWorkFilterInput>,
};

export type ConfigsDataContentHomeSectionsRecentWork = {
  heading?: Maybe<Scalars['String']>,
};

export type ConfigsDataContentHomeSectionsRecentWorkFilterInput = {
  heading?: Maybe<StringQueryOperatorInput>,
};

export type ConfigsDataFilterInput = {
  config?: Maybe<ConfigsDataConfigFilterInput>,
  meta?: Maybe<ConfigsDataMetaFilterInput>,
  headerConfig?: Maybe<ConfigsDataHeaderConfigFilterInput>,
  recentWork?: Maybe<ConfigsDataRecentWorkFilterInput>,
  content?: Maybe<ConfigsDataContentFilterInput>,
};

export type ConfigsDataHeaderConfig = {
  triangles?: Maybe<Array<Maybe<ConfigsDataHeaderConfigTriangles>>>,
};

export type ConfigsDataHeaderConfigFilterInput = {
  triangles?: Maybe<ConfigsDataHeaderConfigTrianglesFilterListInput>,
};

export type ConfigsDataHeaderConfigTriangles = {
  id?: Maybe<Scalars['String']>,
  color?: Maybe<Scalars['String']>,
  size?: Maybe<Scalars['String']>,
  plx?: Maybe<Array<Maybe<Scalars['Int']>>>,
  start?: Maybe<Scalars['Int']>,
  end?: Maybe<Scalars['Int']>,
};

export type ConfigsDataHeaderConfigTrianglesFilterInput = {
  id?: Maybe<StringQueryOperatorInput>,
  color?: Maybe<StringQueryOperatorInput>,
  size?: Maybe<StringQueryOperatorInput>,
  plx?: Maybe<IntQueryOperatorInput>,
  start?: Maybe<IntQueryOperatorInput>,
  end?: Maybe<IntQueryOperatorInput>,
};

export type ConfigsDataHeaderConfigTrianglesFilterListInput = {
  elemMatch?: Maybe<ConfigsDataHeaderConfigTrianglesFilterInput>,
};

export type ConfigsDataMeta = {
  role?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  email?: Maybe<Scalars['String']>,
};

export type ConfigsDataMetaFilterInput = {
  role?: Maybe<StringQueryOperatorInput>,
  name?: Maybe<StringQueryOperatorInput>,
  email?: Maybe<StringQueryOperatorInput>,
};

export type ConfigsDataRecentWork = {
  workItemPlx?: Maybe<ConfigsDataRecentWorkWorkItemPlx>,
  particleData?: Maybe<Array<Maybe<ConfigsDataRecentWorkParticleData>>>,
};

export type ConfigsDataRecentWorkFilterInput = {
  workItemPlx?: Maybe<ConfigsDataRecentWorkWorkItemPlxFilterInput>,
  particleData?: Maybe<ConfigsDataRecentWorkParticleDataFilterListInput>,
};

export type ConfigsDataRecentWorkParticleData = {
  name?: Maybe<Scalars['String']>,
  type?: Maybe<Scalars['String']>,
  color?: Maybe<Scalars['String']>,
  size?: Maybe<Scalars['String']>,
  plx?: Maybe<Array<Maybe<Scalars['Int']>>>,
};

export type ConfigsDataRecentWorkParticleDataFilterInput = {
  name?: Maybe<StringQueryOperatorInput>,
  type?: Maybe<StringQueryOperatorInput>,
  color?: Maybe<StringQueryOperatorInput>,
  size?: Maybe<StringQueryOperatorInput>,
  plx?: Maybe<IntQueryOperatorInput>,
};

export type ConfigsDataRecentWorkParticleDataFilterListInput = {
  elemMatch?: Maybe<ConfigsDataRecentWorkParticleDataFilterInput>,
};

export type ConfigsDataRecentWorkWorkItemPlx = {
  image?: Maybe<Array<Maybe<ConfigsDataRecentWorkWorkItemPlxImage>>>,
  info?: Maybe<Array<Maybe<ConfigsDataRecentWorkWorkItemPlxInfo>>>,
  mobileInfo?: Maybe<Array<Maybe<ConfigsDataRecentWorkWorkItemPlxMobileInfo>>>,
};

export type ConfigsDataRecentWorkWorkItemPlxFilterInput = {
  image?: Maybe<ConfigsDataRecentWorkWorkItemPlxImageFilterListInput>,
  info?: Maybe<ConfigsDataRecentWorkWorkItemPlxInfoFilterListInput>,
  mobileInfo?: Maybe<ConfigsDataRecentWorkWorkItemPlxMobileInfoFilterListInput>,
};

export type ConfigsDataRecentWorkWorkItemPlxImage = {
  startValue?: Maybe<Scalars['Int']>,
};

export type ConfigsDataRecentWorkWorkItemPlxImageFilterInput = {
  startValue?: Maybe<IntQueryOperatorInput>,
};

export type ConfigsDataRecentWorkWorkItemPlxImageFilterListInput = {
  elemMatch?: Maybe<ConfigsDataRecentWorkWorkItemPlxImageFilterInput>,
};

export type ConfigsDataRecentWorkWorkItemPlxInfo = {
  startValue?: Maybe<Scalars['Int']>,
};

export type ConfigsDataRecentWorkWorkItemPlxInfoFilterInput = {
  startValue?: Maybe<IntQueryOperatorInput>,
};

export type ConfigsDataRecentWorkWorkItemPlxInfoFilterListInput = {
  elemMatch?: Maybe<ConfigsDataRecentWorkWorkItemPlxInfoFilterInput>,
};

export type ConfigsDataRecentWorkWorkItemPlxMobileInfo = {
  startValue?: Maybe<Scalars['Int']>,
};

export type ConfigsDataRecentWorkWorkItemPlxMobileInfoFilterInput = {
  startValue?: Maybe<IntQueryOperatorInput>,
};

export type ConfigsDataRecentWorkWorkItemPlxMobileInfoFilterListInput = {
  elemMatch?: Maybe<ConfigsDataRecentWorkWorkItemPlxMobileInfoFilterInput>,
};

export type ConfigsEdge = {
  next?: Maybe<Configs>,
  node: Configs,
  previous?: Maybe<Configs>,
};

export type ConfigsFieldsEnum = 
  'id' |
  'parent___id' |
  'parent___parent___id' |
  'parent___parent___parent___id' |
  'parent___parent___parent___children' |
  'parent___parent___children' |
  'parent___parent___children___id' |
  'parent___parent___children___children' |
  'parent___parent___internal___content' |
  'parent___parent___internal___contentDigest' |
  'parent___parent___internal___description' |
  'parent___parent___internal___fieldOwners' |
  'parent___parent___internal___ignoreType' |
  'parent___parent___internal___mediaType' |
  'parent___parent___internal___owner' |
  'parent___parent___internal___type' |
  'parent___children' |
  'parent___children___id' |
  'parent___children___parent___id' |
  'parent___children___parent___children' |
  'parent___children___children' |
  'parent___children___children___id' |
  'parent___children___children___children' |
  'parent___children___internal___content' |
  'parent___children___internal___contentDigest' |
  'parent___children___internal___description' |
  'parent___children___internal___fieldOwners' |
  'parent___children___internal___ignoreType' |
  'parent___children___internal___mediaType' |
  'parent___children___internal___owner' |
  'parent___children___internal___type' |
  'parent___internal___content' |
  'parent___internal___contentDigest' |
  'parent___internal___description' |
  'parent___internal___fieldOwners' |
  'parent___internal___ignoreType' |
  'parent___internal___mediaType' |
  'parent___internal___owner' |
  'parent___internal___type' |
  'children' |
  'children___id' |
  'children___parent___id' |
  'children___parent___parent___id' |
  'children___parent___parent___children' |
  'children___parent___children' |
  'children___parent___children___id' |
  'children___parent___children___children' |
  'children___parent___internal___content' |
  'children___parent___internal___contentDigest' |
  'children___parent___internal___description' |
  'children___parent___internal___fieldOwners' |
  'children___parent___internal___ignoreType' |
  'children___parent___internal___mediaType' |
  'children___parent___internal___owner' |
  'children___parent___internal___type' |
  'children___children' |
  'children___children___id' |
  'children___children___parent___id' |
  'children___children___parent___children' |
  'children___children___children' |
  'children___children___children___id' |
  'children___children___children___children' |
  'children___children___internal___content' |
  'children___children___internal___contentDigest' |
  'children___children___internal___description' |
  'children___children___internal___fieldOwners' |
  'children___children___internal___ignoreType' |
  'children___children___internal___mediaType' |
  'children___children___internal___owner' |
  'children___children___internal___type' |
  'children___internal___content' |
  'children___internal___contentDigest' |
  'children___internal___description' |
  'children___internal___fieldOwners' |
  'children___internal___ignoreType' |
  'children___internal___mediaType' |
  'children___internal___owner' |
  'children___internal___type' |
  'internal___content' |
  'internal___contentDigest' |
  'internal___description' |
  'internal___fieldOwners' |
  'internal___ignoreType' |
  'internal___mediaType' |
  'internal___owner' |
  'internal___type' |
  'config___gridLines' |
  'config___pageLoadTimeout' |
  'config___splashScreenDebug' |
  'config___splashScreenTimeout' |
  'config___transportDuration' |
  'config___workItemsAmount' |
  'config___homeBottom' |
  'config___skillsTop' |
  'config___mobileBreakpoint' |
  'config___windowHeightConstant' |
  'config___scrollDebug' |
  'meta___role' |
  'meta___name' |
  'meta___email' |
  'headerConfig___triangles' |
  'headerConfig___triangles___id' |
  'headerConfig___triangles___color' |
  'headerConfig___triangles___size' |
  'headerConfig___triangles___plx' |
  'headerConfig___triangles___start' |
  'headerConfig___triangles___end' |
  'recentWork___workItemPlx___image' |
  'recentWork___workItemPlx___image___startValue' |
  'recentWork___workItemPlx___info' |
  'recentWork___workItemPlx___info___startValue' |
  'recentWork___workItemPlx___mobileInfo' |
  'recentWork___workItemPlx___mobileInfo___startValue' |
  'recentWork___particleData' |
  'recentWork___particleData___name' |
  'recentWork___particleData___type' |
  'recentWork___particleData___color' |
  'recentWork___particleData___size' |
  'recentWork___particleData___plx' |
  'data___config___gridLines' |
  'data___config___pageLoadTimeout' |
  'data___config___splashScreenDebug' |
  'data___config___splashScreenTimeout' |
  'data___config___transportDuration' |
  'data___config___workItemsAmount' |
  'data___config___homeBottom' |
  'data___config___skillsTop' |
  'data___config___mobileBreakpoint' |
  'data___config___windowHeightConstant' |
  'data___config___scrollDebug' |
  'data___meta___role' |
  'data___meta___name' |
  'data___meta___email' |
  'data___headerConfig___triangles' |
  'data___headerConfig___triangles___id' |
  'data___headerConfig___triangles___color' |
  'data___headerConfig___triangles___size' |
  'data___headerConfig___triangles___plx' |
  'data___headerConfig___triangles___start' |
  'data___headerConfig___triangles___end' |
  'data___recentWork___workItemPlx___image' |
  'data___recentWork___workItemPlx___info' |
  'data___recentWork___workItemPlx___mobileInfo' |
  'data___recentWork___particleData' |
  'data___recentWork___particleData___name' |
  'data___recentWork___particleData___type' |
  'data___recentWork___particleData___color' |
  'data___recentWork___particleData___size' |
  'data___recentWork___particleData___plx';

export type ConfigsFilterInput = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  config?: Maybe<ConfigsConfigFilterInput>,
  meta?: Maybe<ConfigsMetaFilterInput>,
  headerConfig?: Maybe<ConfigsHeaderConfigFilterInput>,
  recentWork?: Maybe<ConfigsRecentWorkFilterInput>,
  content?: Maybe<ConfigsContentFilterInput>,
  data?: Maybe<ConfigsDataFilterInput>,
};

export type ConfigsGroupConnection = {
  totalCount: Scalars['Int'],
  edges: Array<ConfigsEdge>,
  nodes: Array<Configs>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type ConfigsHeaderConfig = {
  triangles?: Maybe<Array<Maybe<ConfigsHeaderConfigTriangles>>>,
};

export type ConfigsHeaderConfigFilterInput = {
  triangles?: Maybe<ConfigsHeaderConfigTrianglesFilterListInput>,
};

export type ConfigsHeaderConfigTriangles = {
  id?: Maybe<Scalars['String']>,
  color?: Maybe<Scalars['String']>,
  size?: Maybe<Scalars['String']>,
  plx?: Maybe<Array<Maybe<Scalars['Int']>>>,
  start?: Maybe<Scalars['Int']>,
  end?: Maybe<Scalars['Int']>,
};

export type ConfigsHeaderConfigTrianglesFilterInput = {
  id?: Maybe<StringQueryOperatorInput>,
  color?: Maybe<StringQueryOperatorInput>,
  size?: Maybe<StringQueryOperatorInput>,
  plx?: Maybe<IntQueryOperatorInput>,
  start?: Maybe<IntQueryOperatorInput>,
  end?: Maybe<IntQueryOperatorInput>,
};

export type ConfigsHeaderConfigTrianglesFilterListInput = {
  elemMatch?: Maybe<ConfigsHeaderConfigTrianglesFilterInput>,
};

export type ConfigsMeta = {
  role?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  email?: Maybe<Scalars['String']>,
};

export type ConfigsMetaFilterInput = {
  role?: Maybe<StringQueryOperatorInput>,
  name?: Maybe<StringQueryOperatorInput>,
  email?: Maybe<StringQueryOperatorInput>,
};

export type ConfigsRecentWork = {
  workItemPlx?: Maybe<ConfigsRecentWorkWorkItemPlx>,
  particleData?: Maybe<Array<Maybe<ConfigsRecentWorkParticleData>>>,
};

export type ConfigsRecentWorkFilterInput = {
  workItemPlx?: Maybe<ConfigsRecentWorkWorkItemPlxFilterInput>,
  particleData?: Maybe<ConfigsRecentWorkParticleDataFilterListInput>,
};

export type ConfigsRecentWorkParticleData = {
  name?: Maybe<Scalars['String']>,
  type?: Maybe<Scalars['String']>,
  color?: Maybe<Scalars['String']>,
  size?: Maybe<Scalars['String']>,
  plx?: Maybe<Array<Maybe<Scalars['Int']>>>,
};

export type ConfigsRecentWorkParticleDataFilterInput = {
  name?: Maybe<StringQueryOperatorInput>,
  type?: Maybe<StringQueryOperatorInput>,
  color?: Maybe<StringQueryOperatorInput>,
  size?: Maybe<StringQueryOperatorInput>,
  plx?: Maybe<IntQueryOperatorInput>,
};

export type ConfigsRecentWorkParticleDataFilterListInput = {
  elemMatch?: Maybe<ConfigsRecentWorkParticleDataFilterInput>,
};

export type ConfigsRecentWorkWorkItemPlx = {
  image?: Maybe<Array<Maybe<ConfigsRecentWorkWorkItemPlxImage>>>,
  info?: Maybe<Array<Maybe<ConfigsRecentWorkWorkItemPlxInfo>>>,
  mobileInfo?: Maybe<Array<Maybe<ConfigsRecentWorkWorkItemPlxMobileInfo>>>,
};

export type ConfigsRecentWorkWorkItemPlxFilterInput = {
  image?: Maybe<ConfigsRecentWorkWorkItemPlxImageFilterListInput>,
  info?: Maybe<ConfigsRecentWorkWorkItemPlxInfoFilterListInput>,
  mobileInfo?: Maybe<ConfigsRecentWorkWorkItemPlxMobileInfoFilterListInput>,
};

export type ConfigsRecentWorkWorkItemPlxImage = {
  startValue?: Maybe<Scalars['Int']>,
};

export type ConfigsRecentWorkWorkItemPlxImageFilterInput = {
  startValue?: Maybe<IntQueryOperatorInput>,
};

export type ConfigsRecentWorkWorkItemPlxImageFilterListInput = {
  elemMatch?: Maybe<ConfigsRecentWorkWorkItemPlxImageFilterInput>,
};

export type ConfigsRecentWorkWorkItemPlxInfo = {
  startValue?: Maybe<Scalars['Int']>,
};

export type ConfigsRecentWorkWorkItemPlxInfoFilterInput = {
  startValue?: Maybe<IntQueryOperatorInput>,
};

export type ConfigsRecentWorkWorkItemPlxInfoFilterListInput = {
  elemMatch?: Maybe<ConfigsRecentWorkWorkItemPlxInfoFilterInput>,
};

export type ConfigsRecentWorkWorkItemPlxMobileInfo = {
  startValue?: Maybe<Scalars['Int']>,
};

export type ConfigsRecentWorkWorkItemPlxMobileInfoFilterInput = {
  startValue?: Maybe<IntQueryOperatorInput>,
};

export type ConfigsRecentWorkWorkItemPlxMobileInfoFilterListInput = {
  elemMatch?: Maybe<ConfigsRecentWorkWorkItemPlxMobileInfoFilterInput>,
};

export type ConfigsSortInput = {
  fields?: Maybe<Array<Maybe<ConfigsFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};


export type DateQueryOperatorInput = {
  eq?: Maybe<Scalars['Date']>,
  ne?: Maybe<Scalars['Date']>,
  gt?: Maybe<Scalars['Date']>,
  gte?: Maybe<Scalars['Date']>,
  lt?: Maybe<Scalars['Date']>,
  lte?: Maybe<Scalars['Date']>,
  in?: Maybe<Array<Maybe<Scalars['Date']>>>,
  nin?: Maybe<Array<Maybe<Scalars['Date']>>>,
};

export type Directory = Node & {
  sourceInstanceName: Scalars['String'],
  absolutePath: Scalars['String'],
  relativePath: Scalars['String'],
  extension: Scalars['String'],
  size: Scalars['Int'],
  prettySize: Scalars['String'],
  modifiedTime: Scalars['Date'],
  accessTime: Scalars['Date'],
  changeTime: Scalars['Date'],
  birthTime: Scalars['Date'],
  root: Scalars['String'],
  dir: Scalars['String'],
  base: Scalars['String'],
  ext: Scalars['String'],
  name: Scalars['String'],
  relativeDirectory: Scalars['String'],
  dev: Scalars['Int'],
  mode: Scalars['Int'],
  nlink: Scalars['Int'],
  uid: Scalars['Int'],
  gid: Scalars['Int'],
  rdev: Scalars['Int'],
  ino: Scalars['Float'],
  atimeMs: Scalars['Float'],
  mtimeMs: Scalars['Float'],
  ctimeMs: Scalars['Float'],
  atime: Scalars['Date'],
  mtime: Scalars['Date'],
  ctime: Scalars['Date'],
  birthtime?: Maybe<Scalars['Date']>,
  birthtimeMs?: Maybe<Scalars['Float']>,
  blksize?: Maybe<Scalars['Int']>,
  blocks?: Maybe<Scalars['Int']>,
  id: Scalars['ID'],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
};


export type DirectoryModifiedTimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type DirectoryAccessTimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type DirectoryChangeTimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type DirectoryBirthTimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type DirectoryAtimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type DirectoryMtimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type DirectoryCtimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};

export type DirectoryConnection = {
  totalCount: Scalars['Int'],
  edges: Array<DirectoryEdge>,
  nodes: Array<Directory>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<DirectoryGroupConnection>,
};


export type DirectoryConnectionDistinctArgs = {
  field: DirectoryFieldsEnum
};


export type DirectoryConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: DirectoryFieldsEnum
};

export type DirectoryEdge = {
  next?: Maybe<Directory>,
  node: Directory,
  previous?: Maybe<Directory>,
};

export type DirectoryFieldsEnum = 
  'sourceInstanceName' |
  'absolutePath' |
  'relativePath' |
  'extension' |
  'size' |
  'prettySize' |
  'modifiedTime' |
  'accessTime' |
  'changeTime' |
  'birthTime' |
  'root' |
  'dir' |
  'base' |
  'ext' |
  'name' |
  'relativeDirectory' |
  'dev' |
  'mode' |
  'nlink' |
  'uid' |
  'gid' |
  'rdev' |
  'ino' |
  'atimeMs' |
  'mtimeMs' |
  'ctimeMs' |
  'atime' |
  'mtime' |
  'ctime' |
  'birthtime' |
  'birthtimeMs' |
  'blksize' |
  'blocks' |
  'id' |
  'parent___id' |
  'parent___parent___id' |
  'parent___parent___parent___id' |
  'parent___parent___parent___children' |
  'parent___parent___children' |
  'parent___parent___children___id' |
  'parent___parent___children___children' |
  'parent___parent___internal___content' |
  'parent___parent___internal___contentDigest' |
  'parent___parent___internal___description' |
  'parent___parent___internal___fieldOwners' |
  'parent___parent___internal___ignoreType' |
  'parent___parent___internal___mediaType' |
  'parent___parent___internal___owner' |
  'parent___parent___internal___type' |
  'parent___children' |
  'parent___children___id' |
  'parent___children___parent___id' |
  'parent___children___parent___children' |
  'parent___children___children' |
  'parent___children___children___id' |
  'parent___children___children___children' |
  'parent___children___internal___content' |
  'parent___children___internal___contentDigest' |
  'parent___children___internal___description' |
  'parent___children___internal___fieldOwners' |
  'parent___children___internal___ignoreType' |
  'parent___children___internal___mediaType' |
  'parent___children___internal___owner' |
  'parent___children___internal___type' |
  'parent___internal___content' |
  'parent___internal___contentDigest' |
  'parent___internal___description' |
  'parent___internal___fieldOwners' |
  'parent___internal___ignoreType' |
  'parent___internal___mediaType' |
  'parent___internal___owner' |
  'parent___internal___type' |
  'children' |
  'children___id' |
  'children___parent___id' |
  'children___parent___parent___id' |
  'children___parent___parent___children' |
  'children___parent___children' |
  'children___parent___children___id' |
  'children___parent___children___children' |
  'children___parent___internal___content' |
  'children___parent___internal___contentDigest' |
  'children___parent___internal___description' |
  'children___parent___internal___fieldOwners' |
  'children___parent___internal___ignoreType' |
  'children___parent___internal___mediaType' |
  'children___parent___internal___owner' |
  'children___parent___internal___type' |
  'children___children' |
  'children___children___id' |
  'children___children___parent___id' |
  'children___children___parent___children' |
  'children___children___children' |
  'children___children___children___id' |
  'children___children___children___children' |
  'children___children___internal___content' |
  'children___children___internal___contentDigest' |
  'children___children___internal___description' |
  'children___children___internal___fieldOwners' |
  'children___children___internal___ignoreType' |
  'children___children___internal___mediaType' |
  'children___children___internal___owner' |
  'children___children___internal___type' |
  'children___internal___content' |
  'children___internal___contentDigest' |
  'children___internal___description' |
  'children___internal___fieldOwners' |
  'children___internal___ignoreType' |
  'children___internal___mediaType' |
  'children___internal___owner' |
  'children___internal___type' |
  'internal___content' |
  'internal___contentDigest' |
  'internal___description' |
  'internal___fieldOwners' |
  'internal___ignoreType' |
  'internal___mediaType' |
  'internal___owner' |
  'internal___type';

export type DirectoryFilterInput = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>,
  absolutePath?: Maybe<StringQueryOperatorInput>,
  relativePath?: Maybe<StringQueryOperatorInput>,
  extension?: Maybe<StringQueryOperatorInput>,
  size?: Maybe<IntQueryOperatorInput>,
  prettySize?: Maybe<StringQueryOperatorInput>,
  modifiedTime?: Maybe<DateQueryOperatorInput>,
  accessTime?: Maybe<DateQueryOperatorInput>,
  changeTime?: Maybe<DateQueryOperatorInput>,
  birthTime?: Maybe<DateQueryOperatorInput>,
  root?: Maybe<StringQueryOperatorInput>,
  dir?: Maybe<StringQueryOperatorInput>,
  base?: Maybe<StringQueryOperatorInput>,
  ext?: Maybe<StringQueryOperatorInput>,
  name?: Maybe<StringQueryOperatorInput>,
  relativeDirectory?: Maybe<StringQueryOperatorInput>,
  dev?: Maybe<IntQueryOperatorInput>,
  mode?: Maybe<IntQueryOperatorInput>,
  nlink?: Maybe<IntQueryOperatorInput>,
  uid?: Maybe<IntQueryOperatorInput>,
  gid?: Maybe<IntQueryOperatorInput>,
  rdev?: Maybe<IntQueryOperatorInput>,
  ino?: Maybe<FloatQueryOperatorInput>,
  atimeMs?: Maybe<FloatQueryOperatorInput>,
  mtimeMs?: Maybe<FloatQueryOperatorInput>,
  ctimeMs?: Maybe<FloatQueryOperatorInput>,
  atime?: Maybe<DateQueryOperatorInput>,
  mtime?: Maybe<DateQueryOperatorInput>,
  ctime?: Maybe<DateQueryOperatorInput>,
  birthtime?: Maybe<DateQueryOperatorInput>,
  birthtimeMs?: Maybe<FloatQueryOperatorInput>,
  blksize?: Maybe<IntQueryOperatorInput>,
  blocks?: Maybe<IntQueryOperatorInput>,
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
};

export type DirectoryGroupConnection = {
  totalCount: Scalars['Int'],
  edges: Array<DirectoryEdge>,
  nodes: Array<Directory>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type DirectorySortInput = {
  fields?: Maybe<Array<Maybe<DirectoryFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export type DuotoneGradient = {
  highlight: Scalars['String'],
  shadow: Scalars['String'],
  opacity?: Maybe<Scalars['Int']>,
};

export type File = Node & {
  sourceInstanceName: Scalars['String'],
  absolutePath: Scalars['String'],
  relativePath: Scalars['String'],
  extension: Scalars['String'],
  size: Scalars['Int'],
  prettySize: Scalars['String'],
  modifiedTime: Scalars['Date'],
  accessTime: Scalars['Date'],
  changeTime: Scalars['Date'],
  birthTime: Scalars['Date'],
  root: Scalars['String'],
  dir: Scalars['String'],
  base: Scalars['String'],
  ext: Scalars['String'],
  name: Scalars['String'],
  relativeDirectory: Scalars['String'],
  dev: Scalars['Int'],
  mode: Scalars['Int'],
  nlink: Scalars['Int'],
  uid: Scalars['Int'],
  gid: Scalars['Int'],
  rdev: Scalars['Int'],
  ino: Scalars['Float'],
  atimeMs: Scalars['Float'],
  mtimeMs: Scalars['Float'],
  ctimeMs: Scalars['Float'],
  atime: Scalars['Date'],
  mtime: Scalars['Date'],
  ctime: Scalars['Date'],
  birthtime?: Maybe<Scalars['Date']>,
  birthtimeMs?: Maybe<Scalars['Float']>,
  blksize?: Maybe<Scalars['Int']>,
  blocks?: Maybe<Scalars['Int']>,
  /** Copy file to static directory and return public url to it */
  publicURL?: Maybe<Scalars['String']>,
  childImageSharp?: Maybe<ImageSharp>,
  id: Scalars['ID'],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
};


export type FileModifiedTimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type FileAccessTimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type FileChangeTimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type FileBirthTimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type FileAtimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type FileMtimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type FileCtimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};

export type FileConnection = {
  totalCount: Scalars['Int'],
  edges: Array<FileEdge>,
  nodes: Array<File>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<FileGroupConnection>,
};


export type FileConnectionDistinctArgs = {
  field: FileFieldsEnum
};


export type FileConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: FileFieldsEnum
};

export type FileEdge = {
  next?: Maybe<File>,
  node: File,
  previous?: Maybe<File>,
};

export type FileFieldsEnum = 
  'sourceInstanceName' |
  'absolutePath' |
  'relativePath' |
  'extension' |
  'size' |
  'prettySize' |
  'modifiedTime' |
  'accessTime' |
  'changeTime' |
  'birthTime' |
  'root' |
  'dir' |
  'base' |
  'ext' |
  'name' |
  'relativeDirectory' |
  'dev' |
  'mode' |
  'nlink' |
  'uid' |
  'gid' |
  'rdev' |
  'ino' |
  'atimeMs' |
  'mtimeMs' |
  'ctimeMs' |
  'atime' |
  'mtime' |
  'ctime' |
  'birthtime' |
  'birthtimeMs' |
  'blksize' |
  'blocks' |
  'publicURL' |
  'childImageSharp___fixed___base64' |
  'childImageSharp___fixed___tracedSVG' |
  'childImageSharp___fixed___aspectRatio' |
  'childImageSharp___fixed___width' |
  'childImageSharp___fixed___height' |
  'childImageSharp___fixed___src' |
  'childImageSharp___fixed___srcSet' |
  'childImageSharp___fixed___srcWebp' |
  'childImageSharp___fixed___srcSetWebp' |
  'childImageSharp___fixed___originalName' |
  'childImageSharp___resolutions___base64' |
  'childImageSharp___resolutions___tracedSVG' |
  'childImageSharp___resolutions___aspectRatio' |
  'childImageSharp___resolutions___width' |
  'childImageSharp___resolutions___height' |
  'childImageSharp___resolutions___src' |
  'childImageSharp___resolutions___srcSet' |
  'childImageSharp___resolutions___srcWebp' |
  'childImageSharp___resolutions___srcSetWebp' |
  'childImageSharp___resolutions___originalName' |
  'childImageSharp___fluid___base64' |
  'childImageSharp___fluid___tracedSVG' |
  'childImageSharp___fluid___aspectRatio' |
  'childImageSharp___fluid___src' |
  'childImageSharp___fluid___srcSet' |
  'childImageSharp___fluid___srcWebp' |
  'childImageSharp___fluid___srcSetWebp' |
  'childImageSharp___fluid___sizes' |
  'childImageSharp___fluid___originalImg' |
  'childImageSharp___fluid___originalName' |
  'childImageSharp___fluid___presentationWidth' |
  'childImageSharp___fluid___presentationHeight' |
  'childImageSharp___sizes___base64' |
  'childImageSharp___sizes___tracedSVG' |
  'childImageSharp___sizes___aspectRatio' |
  'childImageSharp___sizes___src' |
  'childImageSharp___sizes___srcSet' |
  'childImageSharp___sizes___srcWebp' |
  'childImageSharp___sizes___srcSetWebp' |
  'childImageSharp___sizes___sizes' |
  'childImageSharp___sizes___originalImg' |
  'childImageSharp___sizes___originalName' |
  'childImageSharp___sizes___presentationWidth' |
  'childImageSharp___sizes___presentationHeight' |
  'childImageSharp___original___width' |
  'childImageSharp___original___height' |
  'childImageSharp___original___src' |
  'childImageSharp___resize___src' |
  'childImageSharp___resize___tracedSVG' |
  'childImageSharp___resize___width' |
  'childImageSharp___resize___height' |
  'childImageSharp___resize___aspectRatio' |
  'childImageSharp___resize___originalName' |
  'childImageSharp___id' |
  'childImageSharp___parent___id' |
  'childImageSharp___parent___parent___id' |
  'childImageSharp___parent___parent___children' |
  'childImageSharp___parent___children' |
  'childImageSharp___parent___children___id' |
  'childImageSharp___parent___children___children' |
  'childImageSharp___parent___internal___content' |
  'childImageSharp___parent___internal___contentDigest' |
  'childImageSharp___parent___internal___description' |
  'childImageSharp___parent___internal___fieldOwners' |
  'childImageSharp___parent___internal___ignoreType' |
  'childImageSharp___parent___internal___mediaType' |
  'childImageSharp___parent___internal___owner' |
  'childImageSharp___parent___internal___type' |
  'childImageSharp___children' |
  'childImageSharp___children___id' |
  'childImageSharp___children___parent___id' |
  'childImageSharp___children___parent___children' |
  'childImageSharp___children___children' |
  'childImageSharp___children___children___id' |
  'childImageSharp___children___children___children' |
  'childImageSharp___children___internal___content' |
  'childImageSharp___children___internal___contentDigest' |
  'childImageSharp___children___internal___description' |
  'childImageSharp___children___internal___fieldOwners' |
  'childImageSharp___children___internal___ignoreType' |
  'childImageSharp___children___internal___mediaType' |
  'childImageSharp___children___internal___owner' |
  'childImageSharp___children___internal___type' |
  'childImageSharp___internal___content' |
  'childImageSharp___internal___contentDigest' |
  'childImageSharp___internal___description' |
  'childImageSharp___internal___fieldOwners' |
  'childImageSharp___internal___ignoreType' |
  'childImageSharp___internal___mediaType' |
  'childImageSharp___internal___owner' |
  'childImageSharp___internal___type' |
  'id' |
  'parent___id' |
  'parent___parent___id' |
  'parent___parent___parent___id' |
  'parent___parent___parent___children' |
  'parent___parent___children' |
  'parent___parent___children___id' |
  'parent___parent___children___children' |
  'parent___parent___internal___content' |
  'parent___parent___internal___contentDigest' |
  'parent___parent___internal___description' |
  'parent___parent___internal___fieldOwners' |
  'parent___parent___internal___ignoreType' |
  'parent___parent___internal___mediaType' |
  'parent___parent___internal___owner' |
  'parent___parent___internal___type' |
  'parent___children' |
  'parent___children___id' |
  'parent___children___parent___id' |
  'parent___children___parent___children' |
  'parent___children___children' |
  'parent___children___children___id' |
  'parent___children___children___children' |
  'parent___children___internal___content' |
  'parent___children___internal___contentDigest' |
  'parent___children___internal___description' |
  'parent___children___internal___fieldOwners' |
  'parent___children___internal___ignoreType' |
  'parent___children___internal___mediaType' |
  'parent___children___internal___owner' |
  'parent___children___internal___type' |
  'parent___internal___content' |
  'parent___internal___contentDigest' |
  'parent___internal___description' |
  'parent___internal___fieldOwners' |
  'parent___internal___ignoreType' |
  'parent___internal___mediaType' |
  'parent___internal___owner' |
  'parent___internal___type' |
  'children' |
  'children___id' |
  'children___parent___id' |
  'children___parent___parent___id' |
  'children___parent___parent___children' |
  'children___parent___children' |
  'children___parent___children___id' |
  'children___parent___children___children' |
  'children___parent___internal___content' |
  'children___parent___internal___contentDigest' |
  'children___parent___internal___description' |
  'children___parent___internal___fieldOwners' |
  'children___parent___internal___ignoreType' |
  'children___parent___internal___mediaType' |
  'children___parent___internal___owner' |
  'children___parent___internal___type' |
  'children___children' |
  'children___children___id' |
  'children___children___parent___id' |
  'children___children___parent___children' |
  'children___children___children' |
  'children___children___children___id' |
  'children___children___children___children' |
  'children___children___internal___content' |
  'children___children___internal___contentDigest' |
  'children___children___internal___description' |
  'children___children___internal___fieldOwners' |
  'children___children___internal___ignoreType' |
  'children___children___internal___mediaType' |
  'children___children___internal___owner' |
  'children___children___internal___type' |
  'children___internal___content' |
  'children___internal___contentDigest' |
  'children___internal___description' |
  'children___internal___fieldOwners' |
  'children___internal___ignoreType' |
  'children___internal___mediaType' |
  'children___internal___owner' |
  'children___internal___type' |
  'internal___content' |
  'internal___contentDigest' |
  'internal___description' |
  'internal___fieldOwners' |
  'internal___ignoreType' |
  'internal___mediaType' |
  'internal___owner' |
  'internal___type';

export type FileFilterInput = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>,
  absolutePath?: Maybe<StringQueryOperatorInput>,
  relativePath?: Maybe<StringQueryOperatorInput>,
  extension?: Maybe<StringQueryOperatorInput>,
  size?: Maybe<IntQueryOperatorInput>,
  prettySize?: Maybe<StringQueryOperatorInput>,
  modifiedTime?: Maybe<DateQueryOperatorInput>,
  accessTime?: Maybe<DateQueryOperatorInput>,
  changeTime?: Maybe<DateQueryOperatorInput>,
  birthTime?: Maybe<DateQueryOperatorInput>,
  root?: Maybe<StringQueryOperatorInput>,
  dir?: Maybe<StringQueryOperatorInput>,
  base?: Maybe<StringQueryOperatorInput>,
  ext?: Maybe<StringQueryOperatorInput>,
  name?: Maybe<StringQueryOperatorInput>,
  relativeDirectory?: Maybe<StringQueryOperatorInput>,
  dev?: Maybe<IntQueryOperatorInput>,
  mode?: Maybe<IntQueryOperatorInput>,
  nlink?: Maybe<IntQueryOperatorInput>,
  uid?: Maybe<IntQueryOperatorInput>,
  gid?: Maybe<IntQueryOperatorInput>,
  rdev?: Maybe<IntQueryOperatorInput>,
  ino?: Maybe<FloatQueryOperatorInput>,
  atimeMs?: Maybe<FloatQueryOperatorInput>,
  mtimeMs?: Maybe<FloatQueryOperatorInput>,
  ctimeMs?: Maybe<FloatQueryOperatorInput>,
  atime?: Maybe<DateQueryOperatorInput>,
  mtime?: Maybe<DateQueryOperatorInput>,
  ctime?: Maybe<DateQueryOperatorInput>,
  birthtime?: Maybe<DateQueryOperatorInput>,
  birthtimeMs?: Maybe<FloatQueryOperatorInput>,
  blksize?: Maybe<IntQueryOperatorInput>,
  blocks?: Maybe<IntQueryOperatorInput>,
  publicURL?: Maybe<StringQueryOperatorInput>,
  childImageSharp?: Maybe<ImageSharpFilterInput>,
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
};

export type FileGroupConnection = {
  totalCount: Scalars['Int'],
  edges: Array<FileEdge>,
  nodes: Array<File>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type FileSortInput = {
  fields?: Maybe<Array<Maybe<FileFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export type FloatQueryOperatorInput = {
  eq?: Maybe<Scalars['Float']>,
  ne?: Maybe<Scalars['Float']>,
  gt?: Maybe<Scalars['Float']>,
  gte?: Maybe<Scalars['Float']>,
  lt?: Maybe<Scalars['Float']>,
  lte?: Maybe<Scalars['Float']>,
  in?: Maybe<Array<Maybe<Scalars['Float']>>>,
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>,
};

export type Gcms = {
  assets: Array<Maybe<Gcms_Asset>>,
  skills: Array<Maybe<Gcms_Skill>>,
  projects: Array<Maybe<Gcms_Project>>,
  socialLinks: Array<Maybe<Gcms_SocialLink>>,
  sections: Array<Maybe<Gcms_Section>>,
  asset?: Maybe<Gcms_Asset>,
  skill?: Maybe<Gcms_Skill>,
  project?: Maybe<Gcms_Project>,
  socialLink?: Maybe<Gcms_SocialLink>,
  section?: Maybe<Gcms_Section>,
  assetsConnection: Gcms_AssetConnection,
  skillsConnection: Gcms_SkillConnection,
  projectsConnection: Gcms_ProjectConnection,
  socialLinksConnection: Gcms_SocialLinkConnection,
  sectionsConnection: Gcms_SectionConnection,
  /** Fetches an object given its ID */
  node?: Maybe<Gcms_Node>,
};


export type GcmsAssetsArgs = {
  where?: Maybe<Gcms_AssetWhereInput>,
  orderBy?: Maybe<Gcms_AssetOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type GcmsSkillsArgs = {
  where?: Maybe<Gcms_SkillWhereInput>,
  orderBy?: Maybe<Gcms_SkillOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type GcmsProjectsArgs = {
  where?: Maybe<Gcms_ProjectWhereInput>,
  orderBy?: Maybe<Gcms_ProjectOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type GcmsSocialLinksArgs = {
  where?: Maybe<Gcms_SocialLinkWhereInput>,
  orderBy?: Maybe<Gcms_SocialLinkOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type GcmsSectionsArgs = {
  where?: Maybe<Gcms_SectionWhereInput>,
  orderBy?: Maybe<Gcms_SectionOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type GcmsAssetArgs = {
  where: Gcms_AssetWhereUniqueInput
};


export type GcmsSkillArgs = {
  where: Gcms_SkillWhereUniqueInput
};


export type GcmsProjectArgs = {
  where: Gcms_ProjectWhereUniqueInput
};


export type GcmsSocialLinkArgs = {
  where: Gcms_SocialLinkWhereUniqueInput
};


export type GcmsSectionArgs = {
  where: Gcms_SectionWhereUniqueInput
};


export type GcmsAssetsConnectionArgs = {
  where?: Maybe<Gcms_AssetWhereInput>,
  orderBy?: Maybe<Gcms_AssetOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type GcmsSkillsConnectionArgs = {
  where?: Maybe<Gcms_SkillWhereInput>,
  orderBy?: Maybe<Gcms_SkillOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type GcmsProjectsConnectionArgs = {
  where?: Maybe<Gcms_ProjectWhereInput>,
  orderBy?: Maybe<Gcms_ProjectOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type GcmsSocialLinksConnectionArgs = {
  where?: Maybe<Gcms_SocialLinkWhereInput>,
  orderBy?: Maybe<Gcms_SocialLinkOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type GcmsSectionsConnectionArgs = {
  where?: Maybe<Gcms_SectionWhereInput>,
  orderBy?: Maybe<Gcms_SectionOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type GcmsNodeArgs = {
  id: Scalars['ID']
};

export type Gcms_AggregateAsset = {
  count: Scalars['Int'],
};

export type Gcms_AggregateProject = {
  count: Scalars['Int'],
};

export type Gcms_AggregateSection = {
  count: Scalars['Int'],
};

export type Gcms_AggregateSkill = {
  count: Scalars['Int'],
};

export type Gcms_AggregateSocialLink = {
  count: Scalars['Int'],
};

export type Gcms_Asset = Gcms_Node & {
  status: Gcms_Status,
  updatedAt: Scalars['GCMS_DateTime'],
  createdAt: Scalars['GCMS_DateTime'],
  id: Scalars['ID'],
  handle: Scalars['String'],
  fileName: Scalars['String'],
  height?: Maybe<Scalars['Float']>,
  width?: Maybe<Scalars['Float']>,
  size?: Maybe<Scalars['Float']>,
  mimeType?: Maybe<Scalars['String']>,
  imageDesktopProject?: Maybe<Array<Gcms_Project>>,
  /** Get the url for the asset with provided transformations applied. */
  url: Scalars['String'],
};


export type Gcms_AssetImageDesktopProjectArgs = {
  where?: Maybe<Gcms_ProjectWhereInput>,
  orderBy?: Maybe<Gcms_ProjectOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type Gcms_AssetUrlArgs = {
  transformation?: Maybe<Gcms_AssetTransformationInput>
};

/** A connection to a list of items. */
export type Gcms_AssetConnection = {
  /** Information to aid in pagination. */
  pageInfo: Gcms_PageInfo,
  /** A list of edges. */
  edges: Array<Maybe<Gcms_AssetEdge>>,
  aggregate: Gcms_AggregateAsset,
};

export type Gcms_AssetCreateInput = {
  status?: Maybe<Gcms_Status>,
  handle: Scalars['String'],
  fileName: Scalars['String'],
  height?: Maybe<Scalars['Float']>,
  width?: Maybe<Scalars['Float']>,
  size?: Maybe<Scalars['Float']>,
  mimeType?: Maybe<Scalars['String']>,
  imageDesktopProject?: Maybe<Gcms_ProjectCreateManyWithoutImageDesktopInput>,
};

export type Gcms_AssetCreateOneWithoutImageDesktopProjectInput = {
  upload?: Maybe<Gcms_AssetUploadWithoutImageDesktopProjectInput>,
  create?: Maybe<Gcms_AssetCreateWithoutImageDesktopProjectInput>,
  connect?: Maybe<Gcms_AssetWhereUniqueInput>,
};

export type Gcms_AssetCreateWithoutImageDesktopProjectInput = {
  status?: Maybe<Gcms_Status>,
  handle: Scalars['String'],
  fileName: Scalars['String'],
  height?: Maybe<Scalars['Float']>,
  width?: Maybe<Scalars['Float']>,
  size?: Maybe<Scalars['Float']>,
  mimeType?: Maybe<Scalars['String']>,
};

/** An edge in a connection. */
export type Gcms_AssetEdge = {
  /** The item at the end of the edge. */
  node: Gcms_Asset,
  /** A cursor for use in pagination. */
  cursor: Scalars['String'],
};

export type Gcms_AssetOrderByInput = 
  'status_ASC' |
  'status_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'id_ASC' |
  'id_DESC' |
  'handle_ASC' |
  'handle_DESC' |
  'fileName_ASC' |
  'fileName_DESC' |
  'height_ASC' |
  'height_DESC' |
  'width_ASC' |
  'width_DESC' |
  'size_ASC' |
  'size_DESC' |
  'mimeType_ASC' |
  'mimeType_DESC';

export type Gcms_AssetPreviousValues = {
  status: Gcms_Status,
  updatedAt: Scalars['GCMS_DateTime'],
  createdAt: Scalars['GCMS_DateTime'],
  id: Scalars['ID'],
  handle: Scalars['String'],
  fileName: Scalars['String'],
  height?: Maybe<Scalars['Float']>,
  width?: Maybe<Scalars['Float']>,
  size?: Maybe<Scalars['Float']>,
  mimeType?: Maybe<Scalars['String']>,
};

export type Gcms_AssetSubscriptionPayload = {
  mutation: Gcms_MutationType,
  node?: Maybe<Gcms_Asset>,
  updatedFields?: Maybe<Array<Scalars['String']>>,
  previousValues?: Maybe<Gcms_AssetPreviousValues>,
};

export type Gcms_AssetSubscriptionWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<Gcms_AssetSubscriptionWhereInput>>,
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<Gcms_AssetSubscriptionWhereInput>>,
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<Gcms_AssetSubscriptionWhereInput>>,
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<Array<Gcms_MutationType>>,
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<Scalars['String']>,
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>,
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>,
  node?: Maybe<Gcms_AssetWhereInput>,
};

/** Transformations for Assets */
export type Gcms_AssetTransformationInput = {
  image?: Maybe<Gcms_ImageTransformationInput>,
  document?: Maybe<Gcms_DocumentTransformationInput>,
  /** Pass `true` if you want to validate the passed transformation parameters */
  validateOptions?: Maybe<Scalars['Boolean']>,
};

export type Gcms_AssetUpdateInput = {
  status?: Maybe<Gcms_Status>,
  handle?: Maybe<Scalars['String']>,
  fileName?: Maybe<Scalars['String']>,
  height?: Maybe<Scalars['Float']>,
  width?: Maybe<Scalars['Float']>,
  size?: Maybe<Scalars['Float']>,
  mimeType?: Maybe<Scalars['String']>,
  imageDesktopProject?: Maybe<Gcms_ProjectUpdateManyWithoutImageDesktopInput>,
};

export type Gcms_AssetUpdateManyMutationInput = {
  status?: Maybe<Gcms_Status>,
  handle?: Maybe<Scalars['String']>,
  fileName?: Maybe<Scalars['String']>,
  height?: Maybe<Scalars['Float']>,
  width?: Maybe<Scalars['Float']>,
  size?: Maybe<Scalars['Float']>,
  mimeType?: Maybe<Scalars['String']>,
};

export type Gcms_AssetUpdateOneWithoutImageDesktopProjectInput = {
  create?: Maybe<Gcms_AssetCreateWithoutImageDesktopProjectInput>,
  connect?: Maybe<Gcms_AssetWhereUniqueInput>,
  disconnect?: Maybe<Scalars['Boolean']>,
  delete?: Maybe<Scalars['Boolean']>,
  update?: Maybe<Gcms_AssetUpdateWithoutImageDesktopProjectDataInput>,
  upsert?: Maybe<Gcms_AssetUpsertWithoutImageDesktopProjectInput>,
};

export type Gcms_AssetUpdateWithoutImageDesktopProjectDataInput = {
  status?: Maybe<Gcms_Status>,
  handle?: Maybe<Scalars['String']>,
  fileName?: Maybe<Scalars['String']>,
  height?: Maybe<Scalars['Float']>,
  width?: Maybe<Scalars['Float']>,
  size?: Maybe<Scalars['Float']>,
  mimeType?: Maybe<Scalars['String']>,
};

export type Gcms_AssetUploadInput = {
  url: Scalars['String'],
  status?: Maybe<Gcms_Status>,
  imageDesktopProject?: Maybe<Gcms_ProjectCreateManyWithoutImageDesktopInput>,
};

export type Gcms_AssetUploadWithoutImageDesktopProjectInput = {
  url: Scalars['String'],
  status?: Maybe<Gcms_Status>,
};

export type Gcms_AssetUpsertWithoutImageDesktopProjectInput = {
  update: Gcms_AssetUpdateWithoutImageDesktopProjectDataInput,
  create: Gcms_AssetCreateWithoutImageDesktopProjectInput,
};

export type Gcms_AssetWhereInput = {
  _search?: Maybe<Scalars['String']>,
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<Gcms_AssetWhereInput>>,
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<Gcms_AssetWhereInput>>,
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<Gcms_AssetWhereInput>>,
  status?: Maybe<Gcms_Status>,
  /** All values that are not equal to given value. */
  status_not?: Maybe<Gcms_Status>,
  /** All values that are contained in given list. */
  status_in?: Maybe<Array<Gcms_Status>>,
  /** All values that are not contained in given list. */
  status_not_in?: Maybe<Array<Gcms_Status>>,
  updatedAt?: Maybe<Scalars['GCMS_DateTime']>,
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['GCMS_DateTime']>,
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['GCMS_DateTime']>>,
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['GCMS_DateTime']>>,
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['GCMS_DateTime']>,
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['GCMS_DateTime']>,
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['GCMS_DateTime']>,
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['GCMS_DateTime']>,
  createdAt?: Maybe<Scalars['GCMS_DateTime']>,
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['GCMS_DateTime']>,
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['GCMS_DateTime']>>,
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['GCMS_DateTime']>>,
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['GCMS_DateTime']>,
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['GCMS_DateTime']>,
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['GCMS_DateTime']>,
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['GCMS_DateTime']>,
  id?: Maybe<Scalars['ID']>,
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>,
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>,
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>,
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>,
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>,
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>,
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>,
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>,
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>,
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>,
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>,
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>,
  handle?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  handle_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  handle_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  handle_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  handle_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  handle_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  handle_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  handle_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  handle_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  handle_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  handle_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  handle_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  handle_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  handle_not_ends_with?: Maybe<Scalars['String']>,
  fileName?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  fileName_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  fileName_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  fileName_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  fileName_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  fileName_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  fileName_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  fileName_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  fileName_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  fileName_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  fileName_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  fileName_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  fileName_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  fileName_not_ends_with?: Maybe<Scalars['String']>,
  height?: Maybe<Scalars['Float']>,
  /** All values that are not equal to given value. */
  height_not?: Maybe<Scalars['Float']>,
  /** All values that are contained in given list. */
  height_in?: Maybe<Array<Scalars['Float']>>,
  /** All values that are not contained in given list. */
  height_not_in?: Maybe<Array<Scalars['Float']>>,
  /** All values less than the given value. */
  height_lt?: Maybe<Scalars['Float']>,
  /** All values less than or equal the given value. */
  height_lte?: Maybe<Scalars['Float']>,
  /** All values greater than the given value. */
  height_gt?: Maybe<Scalars['Float']>,
  /** All values greater than or equal the given value. */
  height_gte?: Maybe<Scalars['Float']>,
  width?: Maybe<Scalars['Float']>,
  /** All values that are not equal to given value. */
  width_not?: Maybe<Scalars['Float']>,
  /** All values that are contained in given list. */
  width_in?: Maybe<Array<Scalars['Float']>>,
  /** All values that are not contained in given list. */
  width_not_in?: Maybe<Array<Scalars['Float']>>,
  /** All values less than the given value. */
  width_lt?: Maybe<Scalars['Float']>,
  /** All values less than or equal the given value. */
  width_lte?: Maybe<Scalars['Float']>,
  /** All values greater than the given value. */
  width_gt?: Maybe<Scalars['Float']>,
  /** All values greater than or equal the given value. */
  width_gte?: Maybe<Scalars['Float']>,
  size?: Maybe<Scalars['Float']>,
  /** All values that are not equal to given value. */
  size_not?: Maybe<Scalars['Float']>,
  /** All values that are contained in given list. */
  size_in?: Maybe<Array<Scalars['Float']>>,
  /** All values that are not contained in given list. */
  size_not_in?: Maybe<Array<Scalars['Float']>>,
  /** All values less than the given value. */
  size_lt?: Maybe<Scalars['Float']>,
  /** All values less than or equal the given value. */
  size_lte?: Maybe<Scalars['Float']>,
  /** All values greater than the given value. */
  size_gt?: Maybe<Scalars['Float']>,
  /** All values greater than or equal the given value. */
  size_gte?: Maybe<Scalars['Float']>,
  mimeType?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  mimeType_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  mimeType_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  mimeType_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  mimeType_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  mimeType_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  mimeType_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  mimeType_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  mimeType_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  mimeType_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  mimeType_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  mimeType_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  mimeType_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  mimeType_not_ends_with?: Maybe<Scalars['String']>,
  imageDesktopProject_every?: Maybe<Gcms_ProjectWhereInput>,
  imageDesktopProject_some?: Maybe<Gcms_ProjectWhereInput>,
  imageDesktopProject_none?: Maybe<Gcms_ProjectWhereInput>,
};

export type Gcms_AssetWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>,
  handle?: Maybe<Scalars['String']>,
};

export type Gcms_BatchPayload = {
  /** The number of nodes that have been affected by the Batch operation. */
  count: Scalars['GCMS_Long'],
};


export type Gcms_DocumentFileTypes = 
  'jpg' |
  'odp' |
  'ods' |
  'odt' |
  'png' |
  'svg' |
  'txt' |
  'webp' |
  'docx' |
  'html' |
  'pdf' |
  'doc' |
  'xlsx' |
  'xls' |
  'pptx' |
  'ppt';

export type Gcms_DocumentOutputInput = {
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
  format?: Maybe<Gcms_DocumentFileTypes>,
};

/** Transformations for Documents */
export type Gcms_DocumentTransformationInput = {
  /** Changes the output for the file. */
  output?: Maybe<Gcms_DocumentOutputInput>,
};

export type Gcms_ImageFit = 
  /** Resizes the image to fit within the specified parameters without distorting, cropping, or changing the aspect ratio. */
  'clip' |
  /** 
 * Resizes the image to fit the specified parameters exactly by removing any
   * parts of the image that don't fit within the boundaries.
 */
  'crop' |
  /** 
 * Resizes the image to fit the specified parameters exactly by scaling the image
   * to the desired size. The aspect ratio of the image is not respected and the
   * image can be distorted using this method.
 */
  'scale' |
  /** 
 * Resizes the image to fit within the parameters, but as opposed to 'fit:clip'
   * will not scale the image if the image is smaller than the output size.
 */
  'max';

export type Gcms_ImageResizeInput = {
  /** The width in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  width?: Maybe<Scalars['Int']>,
  /** The height in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  height?: Maybe<Scalars['Int']>,
  /** The default value for the fit parameter is fit:clip. */
  fit?: Maybe<Gcms_ImageFit>,
};

/** Transformations for Images */
export type Gcms_ImageTransformationInput = {
  /** Resizes the image */
  resize?: Maybe<Gcms_ImageResizeInput>,
};


export type Gcms_Locale = 
  'EN';


export type Gcms_MutationType = 
  'CREATED' |
  'UPDATED' |
  'DELETED';

/** An object with an ID */
export type Gcms_Node = {
  /** The id of the object. */
  id: Scalars['ID'],
};

/** Information about pagination in a connection. */
export type Gcms_PageInfo = {
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'],
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'],
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>,
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>,
};

export type Gcms_Project = Gcms_Node & {
  status: Gcms_Status,
  updatedAt: Scalars['GCMS_DateTime'],
  createdAt: Scalars['GCMS_DateTime'],
  id: Scalars['ID'],
  projectId: Scalars['String'],
  title: Scalars['String'],
  projectType: Gcms_ProjectType,
  imageDesktop?: Maybe<Gcms_Asset>,
  description?: Maybe<Scalars['String']>,
  disabled?: Maybe<Scalars['Boolean']>,
  techList: Array<Scalars['String']>,
  externalUrl?: Maybe<Scalars['String']>,
  body?: Maybe<Gcms_RichText>,
};

/** A connection to a list of items. */
export type Gcms_ProjectConnection = {
  /** Information to aid in pagination. */
  pageInfo: Gcms_PageInfo,
  /** A list of edges. */
  edges: Array<Maybe<Gcms_ProjectEdge>>,
  aggregate: Gcms_AggregateProject,
};

export type Gcms_ProjectCreateInput = {
  status?: Maybe<Gcms_Status>,
  projectId: Scalars['String'],
  title: Scalars['String'],
  projectType: Gcms_ProjectType,
  description?: Maybe<Scalars['String']>,
  disabled?: Maybe<Scalars['Boolean']>,
  externalUrl?: Maybe<Scalars['String']>,
  body?: Maybe<Scalars['GCMS_RichTextAST']>,
  techList?: Maybe<Gcms_ProjectCreatetechListInput>,
  imageDesktop?: Maybe<Gcms_AssetCreateOneWithoutImageDesktopProjectInput>,
};

export type Gcms_ProjectCreateManyWithoutImageDesktopInput = {
  create?: Maybe<Array<Gcms_ProjectCreateWithoutImageDesktopInput>>,
  connect?: Maybe<Array<Gcms_ProjectWhereUniqueInput>>,
};

export type Gcms_ProjectCreatetechListInput = {
  set?: Maybe<Array<Scalars['String']>>,
};

export type Gcms_ProjectCreateWithoutImageDesktopInput = {
  status?: Maybe<Gcms_Status>,
  projectId: Scalars['String'],
  title: Scalars['String'],
  projectType: Gcms_ProjectType,
  description?: Maybe<Scalars['String']>,
  disabled?: Maybe<Scalars['Boolean']>,
  externalUrl?: Maybe<Scalars['String']>,
  body?: Maybe<Scalars['GCMS_RichTextAST']>,
  techList?: Maybe<Gcms_ProjectCreatetechListInput>,
};

/** An edge in a connection. */
export type Gcms_ProjectEdge = {
  /** The item at the end of the edge. */
  node: Gcms_Project,
  /** A cursor for use in pagination. */
  cursor: Scalars['String'],
};

export type Gcms_ProjectOrderByInput = 
  'status_ASC' |
  'status_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'id_ASC' |
  'id_DESC' |
  'projectId_ASC' |
  'projectId_DESC' |
  'title_ASC' |
  'title_DESC' |
  'projectType_ASC' |
  'projectType_DESC' |
  'description_ASC' |
  'description_DESC' |
  'disabled_ASC' |
  'disabled_DESC' |
  'externalUrl_ASC' |
  'externalUrl_DESC' |
  'body_ASC' |
  'body_DESC';

export type Gcms_ProjectPreviousValues = {
  status: Gcms_Status,
  updatedAt: Scalars['GCMS_DateTime'],
  createdAt: Scalars['GCMS_DateTime'],
  id: Scalars['ID'],
  projectId: Scalars['String'],
  title: Scalars['String'],
  projectType: Gcms_ProjectType,
  description?: Maybe<Scalars['String']>,
  disabled?: Maybe<Scalars['Boolean']>,
  techList: Array<Scalars['String']>,
  externalUrl?: Maybe<Scalars['String']>,
  body?: Maybe<Gcms_RichText>,
};

export type Gcms_ProjectScalarWhereInput = {
  _search?: Maybe<Scalars['String']>,
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<Gcms_ProjectScalarWhereInput>>,
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<Gcms_ProjectScalarWhereInput>>,
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<Gcms_ProjectScalarWhereInput>>,
  status?: Maybe<Gcms_Status>,
  /** All values that are not equal to given value. */
  status_not?: Maybe<Gcms_Status>,
  /** All values that are contained in given list. */
  status_in?: Maybe<Array<Gcms_Status>>,
  /** All values that are not contained in given list. */
  status_not_in?: Maybe<Array<Gcms_Status>>,
  updatedAt?: Maybe<Scalars['GCMS_DateTime']>,
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['GCMS_DateTime']>,
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['GCMS_DateTime']>>,
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['GCMS_DateTime']>>,
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['GCMS_DateTime']>,
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['GCMS_DateTime']>,
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['GCMS_DateTime']>,
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['GCMS_DateTime']>,
  createdAt?: Maybe<Scalars['GCMS_DateTime']>,
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['GCMS_DateTime']>,
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['GCMS_DateTime']>>,
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['GCMS_DateTime']>>,
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['GCMS_DateTime']>,
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['GCMS_DateTime']>,
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['GCMS_DateTime']>,
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['GCMS_DateTime']>,
  id?: Maybe<Scalars['ID']>,
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>,
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>,
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>,
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>,
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>,
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>,
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>,
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>,
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>,
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>,
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>,
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>,
  projectId?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  projectId_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  projectId_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  projectId_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  projectId_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  projectId_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  projectId_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  projectId_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  projectId_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  projectId_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  projectId_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  projectId_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  projectId_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  projectId_not_ends_with?: Maybe<Scalars['String']>,
  title?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  title_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  title_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  title_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  title_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  title_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  title_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  title_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  title_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  title_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  title_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  title_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  title_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  title_not_ends_with?: Maybe<Scalars['String']>,
  projectType?: Maybe<Gcms_ProjectType>,
  /** All values that are not equal to given value. */
  projectType_not?: Maybe<Gcms_ProjectType>,
  /** All values that are contained in given list. */
  projectType_in?: Maybe<Array<Gcms_ProjectType>>,
  /** All values that are not contained in given list. */
  projectType_not_in?: Maybe<Array<Gcms_ProjectType>>,
  description?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  description_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  description_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  description_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  description_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  description_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  description_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  description_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  description_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  description_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  description_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  description_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  description_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  description_not_ends_with?: Maybe<Scalars['String']>,
  disabled?: Maybe<Scalars['Boolean']>,
  /** All values that are not equal to given value. */
  disabled_not?: Maybe<Scalars['Boolean']>,
  externalUrl?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  externalUrl_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  externalUrl_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  externalUrl_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  externalUrl_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  externalUrl_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  externalUrl_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  externalUrl_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  externalUrl_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  externalUrl_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  externalUrl_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  externalUrl_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  externalUrl_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  externalUrl_not_ends_with?: Maybe<Scalars['String']>,
};

export type Gcms_ProjectSubscriptionPayload = {
  mutation: Gcms_MutationType,
  node?: Maybe<Gcms_Project>,
  updatedFields?: Maybe<Array<Scalars['String']>>,
  previousValues?: Maybe<Gcms_ProjectPreviousValues>,
};

export type Gcms_ProjectSubscriptionWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<Gcms_ProjectSubscriptionWhereInput>>,
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<Gcms_ProjectSubscriptionWhereInput>>,
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<Gcms_ProjectSubscriptionWhereInput>>,
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<Array<Gcms_MutationType>>,
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<Scalars['String']>,
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>,
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>,
  node?: Maybe<Gcms_ProjectWhereInput>,
};

export type Gcms_ProjectType = 
  'Work' |
  'Experiment';

export type Gcms_ProjectUpdateInput = {
  status?: Maybe<Gcms_Status>,
  projectId?: Maybe<Scalars['String']>,
  title?: Maybe<Scalars['String']>,
  projectType?: Maybe<Gcms_ProjectType>,
  description?: Maybe<Scalars['String']>,
  disabled?: Maybe<Scalars['Boolean']>,
  externalUrl?: Maybe<Scalars['String']>,
  body?: Maybe<Scalars['GCMS_RichTextAST']>,
  techList?: Maybe<Gcms_ProjectUpdatetechListInput>,
  imageDesktop?: Maybe<Gcms_AssetUpdateOneWithoutImageDesktopProjectInput>,
};

export type Gcms_ProjectUpdateManyDataInput = {
  status?: Maybe<Gcms_Status>,
  projectId?: Maybe<Scalars['String']>,
  title?: Maybe<Scalars['String']>,
  projectType?: Maybe<Gcms_ProjectType>,
  description?: Maybe<Scalars['String']>,
  disabled?: Maybe<Scalars['Boolean']>,
  externalUrl?: Maybe<Scalars['String']>,
  body?: Maybe<Scalars['GCMS_RichTextAST']>,
  techList?: Maybe<Gcms_ProjectUpdatetechListInput>,
};

export type Gcms_ProjectUpdateManyMutationInput = {
  status?: Maybe<Gcms_Status>,
  projectId?: Maybe<Scalars['String']>,
  title?: Maybe<Scalars['String']>,
  projectType?: Maybe<Gcms_ProjectType>,
  description?: Maybe<Scalars['String']>,
  disabled?: Maybe<Scalars['Boolean']>,
  externalUrl?: Maybe<Scalars['String']>,
  body?: Maybe<Scalars['GCMS_RichTextAST']>,
  techList?: Maybe<Gcms_ProjectUpdatetechListInput>,
};

export type Gcms_ProjectUpdateManyWithoutImageDesktopInput = {
  create?: Maybe<Array<Gcms_ProjectCreateWithoutImageDesktopInput>>,
  connect?: Maybe<Array<Gcms_ProjectWhereUniqueInput>>,
  set?: Maybe<Array<Gcms_ProjectWhereUniqueInput>>,
  disconnect?: Maybe<Array<Gcms_ProjectWhereUniqueInput>>,
  delete?: Maybe<Array<Gcms_ProjectWhereUniqueInput>>,
  update?: Maybe<Array<Gcms_ProjectUpdateWithWhereUniqueWithoutImageDesktopInput>>,
  updateMany?: Maybe<Array<Gcms_ProjectUpdateManyWithWhereNestedInput>>,
  deleteMany?: Maybe<Array<Gcms_ProjectScalarWhereInput>>,
  upsert?: Maybe<Array<Gcms_ProjectUpsertWithWhereUniqueWithoutImageDesktopInput>>,
};

export type Gcms_ProjectUpdateManyWithWhereNestedInput = {
  where: Gcms_ProjectScalarWhereInput,
  data: Gcms_ProjectUpdateManyDataInput,
};

export type Gcms_ProjectUpdatetechListInput = {
  set?: Maybe<Array<Scalars['String']>>,
};

export type Gcms_ProjectUpdateWithoutImageDesktopDataInput = {
  status?: Maybe<Gcms_Status>,
  projectId?: Maybe<Scalars['String']>,
  title?: Maybe<Scalars['String']>,
  projectType?: Maybe<Gcms_ProjectType>,
  description?: Maybe<Scalars['String']>,
  disabled?: Maybe<Scalars['Boolean']>,
  externalUrl?: Maybe<Scalars['String']>,
  body?: Maybe<Scalars['GCMS_RichTextAST']>,
  techList?: Maybe<Gcms_ProjectUpdatetechListInput>,
};

export type Gcms_ProjectUpdateWithWhereUniqueWithoutImageDesktopInput = {
  where: Gcms_ProjectWhereUniqueInput,
  data: Gcms_ProjectUpdateWithoutImageDesktopDataInput,
};

export type Gcms_ProjectUpsertWithWhereUniqueWithoutImageDesktopInput = {
  where: Gcms_ProjectWhereUniqueInput,
  update: Gcms_ProjectUpdateWithoutImageDesktopDataInput,
  create: Gcms_ProjectCreateWithoutImageDesktopInput,
};

export type Gcms_ProjectWhereInput = {
  _search?: Maybe<Scalars['String']>,
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<Gcms_ProjectWhereInput>>,
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<Gcms_ProjectWhereInput>>,
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<Gcms_ProjectWhereInput>>,
  status?: Maybe<Gcms_Status>,
  /** All values that are not equal to given value. */
  status_not?: Maybe<Gcms_Status>,
  /** All values that are contained in given list. */
  status_in?: Maybe<Array<Gcms_Status>>,
  /** All values that are not contained in given list. */
  status_not_in?: Maybe<Array<Gcms_Status>>,
  updatedAt?: Maybe<Scalars['GCMS_DateTime']>,
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['GCMS_DateTime']>,
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['GCMS_DateTime']>>,
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['GCMS_DateTime']>>,
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['GCMS_DateTime']>,
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['GCMS_DateTime']>,
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['GCMS_DateTime']>,
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['GCMS_DateTime']>,
  createdAt?: Maybe<Scalars['GCMS_DateTime']>,
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['GCMS_DateTime']>,
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['GCMS_DateTime']>>,
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['GCMS_DateTime']>>,
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['GCMS_DateTime']>,
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['GCMS_DateTime']>,
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['GCMS_DateTime']>,
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['GCMS_DateTime']>,
  id?: Maybe<Scalars['ID']>,
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>,
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>,
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>,
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>,
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>,
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>,
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>,
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>,
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>,
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>,
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>,
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>,
  projectId?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  projectId_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  projectId_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  projectId_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  projectId_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  projectId_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  projectId_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  projectId_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  projectId_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  projectId_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  projectId_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  projectId_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  projectId_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  projectId_not_ends_with?: Maybe<Scalars['String']>,
  title?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  title_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  title_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  title_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  title_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  title_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  title_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  title_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  title_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  title_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  title_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  title_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  title_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  title_not_ends_with?: Maybe<Scalars['String']>,
  projectType?: Maybe<Gcms_ProjectType>,
  /** All values that are not equal to given value. */
  projectType_not?: Maybe<Gcms_ProjectType>,
  /** All values that are contained in given list. */
  projectType_in?: Maybe<Array<Gcms_ProjectType>>,
  /** All values that are not contained in given list. */
  projectType_not_in?: Maybe<Array<Gcms_ProjectType>>,
  description?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  description_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  description_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  description_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  description_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  description_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  description_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  description_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  description_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  description_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  description_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  description_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  description_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  description_not_ends_with?: Maybe<Scalars['String']>,
  disabled?: Maybe<Scalars['Boolean']>,
  /** All values that are not equal to given value. */
  disabled_not?: Maybe<Scalars['Boolean']>,
  externalUrl?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  externalUrl_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  externalUrl_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  externalUrl_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  externalUrl_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  externalUrl_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  externalUrl_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  externalUrl_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  externalUrl_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  externalUrl_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  externalUrl_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  externalUrl_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  externalUrl_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  externalUrl_not_ends_with?: Maybe<Scalars['String']>,
  imageDesktop?: Maybe<Gcms_AssetWhereInput>,
};

export type Gcms_ProjectWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>,
  projectId?: Maybe<Scalars['String']>,
};

/** Custom type representing a rich text value comprising of raw rich text ast, html, markdown and text values */
export type Gcms_RichText = {
  raw?: Maybe<Scalars['GCMS_RichTextAST']>,
  html?: Maybe<Scalars['String']>,
  markdown?: Maybe<Scalars['String']>,
  text?: Maybe<Scalars['String']>,
};


export type Gcms_Section = Gcms_Node & {
  status: Gcms_Status,
  updatedAt: Scalars['GCMS_DateTime'],
  createdAt: Scalars['GCMS_DateTime'],
  id: Scalars['ID'],
  body?: Maybe<Gcms_RichText>,
  sectionId?: Maybe<Scalars['String']>,
  heading?: Maybe<Scalars['String']>,
};

/** A connection to a list of items. */
export type Gcms_SectionConnection = {
  /** Information to aid in pagination. */
  pageInfo: Gcms_PageInfo,
  /** A list of edges. */
  edges: Array<Maybe<Gcms_SectionEdge>>,
  aggregate: Gcms_AggregateSection,
};

export type Gcms_SectionCreateInput = {
  status?: Maybe<Gcms_Status>,
  body?: Maybe<Scalars['GCMS_RichTextAST']>,
  sectionId?: Maybe<Scalars['String']>,
  heading?: Maybe<Scalars['String']>,
};

/** An edge in a connection. */
export type Gcms_SectionEdge = {
  /** The item at the end of the edge. */
  node: Gcms_Section,
  /** A cursor for use in pagination. */
  cursor: Scalars['String'],
};

export type Gcms_SectionOrderByInput = 
  'status_ASC' |
  'status_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'id_ASC' |
  'id_DESC' |
  'body_ASC' |
  'body_DESC' |
  'sectionId_ASC' |
  'sectionId_DESC' |
  'heading_ASC' |
  'heading_DESC';

export type Gcms_SectionPreviousValues = {
  status: Gcms_Status,
  updatedAt: Scalars['GCMS_DateTime'],
  createdAt: Scalars['GCMS_DateTime'],
  id: Scalars['ID'],
  body?: Maybe<Gcms_RichText>,
  sectionId?: Maybe<Scalars['String']>,
  heading?: Maybe<Scalars['String']>,
};

export type Gcms_SectionSubscriptionPayload = {
  mutation: Gcms_MutationType,
  node?: Maybe<Gcms_Section>,
  updatedFields?: Maybe<Array<Scalars['String']>>,
  previousValues?: Maybe<Gcms_SectionPreviousValues>,
};

export type Gcms_SectionSubscriptionWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<Gcms_SectionSubscriptionWhereInput>>,
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<Gcms_SectionSubscriptionWhereInput>>,
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<Gcms_SectionSubscriptionWhereInput>>,
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<Array<Gcms_MutationType>>,
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<Scalars['String']>,
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>,
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>,
  node?: Maybe<Gcms_SectionWhereInput>,
};

export type Gcms_SectionUpdateInput = {
  status?: Maybe<Gcms_Status>,
  body?: Maybe<Scalars['GCMS_RichTextAST']>,
  sectionId?: Maybe<Scalars['String']>,
  heading?: Maybe<Scalars['String']>,
};

export type Gcms_SectionUpdateManyMutationInput = {
  status?: Maybe<Gcms_Status>,
  body?: Maybe<Scalars['GCMS_RichTextAST']>,
  sectionId?: Maybe<Scalars['String']>,
  heading?: Maybe<Scalars['String']>,
};

export type Gcms_SectionWhereInput = {
  _search?: Maybe<Scalars['String']>,
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<Gcms_SectionWhereInput>>,
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<Gcms_SectionWhereInput>>,
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<Gcms_SectionWhereInput>>,
  status?: Maybe<Gcms_Status>,
  /** All values that are not equal to given value. */
  status_not?: Maybe<Gcms_Status>,
  /** All values that are contained in given list. */
  status_in?: Maybe<Array<Gcms_Status>>,
  /** All values that are not contained in given list. */
  status_not_in?: Maybe<Array<Gcms_Status>>,
  updatedAt?: Maybe<Scalars['GCMS_DateTime']>,
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['GCMS_DateTime']>,
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['GCMS_DateTime']>>,
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['GCMS_DateTime']>>,
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['GCMS_DateTime']>,
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['GCMS_DateTime']>,
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['GCMS_DateTime']>,
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['GCMS_DateTime']>,
  createdAt?: Maybe<Scalars['GCMS_DateTime']>,
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['GCMS_DateTime']>,
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['GCMS_DateTime']>>,
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['GCMS_DateTime']>>,
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['GCMS_DateTime']>,
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['GCMS_DateTime']>,
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['GCMS_DateTime']>,
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['GCMS_DateTime']>,
  id?: Maybe<Scalars['ID']>,
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>,
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>,
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>,
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>,
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>,
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>,
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>,
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>,
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>,
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>,
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>,
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>,
  sectionId?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  sectionId_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  sectionId_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  sectionId_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  sectionId_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  sectionId_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  sectionId_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  sectionId_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  sectionId_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  sectionId_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  sectionId_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  sectionId_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  sectionId_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  sectionId_not_ends_with?: Maybe<Scalars['String']>,
  heading?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  heading_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  heading_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  heading_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  heading_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  heading_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  heading_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  heading_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  heading_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  heading_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  heading_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  heading_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  heading_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  heading_not_ends_with?: Maybe<Scalars['String']>,
};

export type Gcms_SectionWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>,
  sectionId?: Maybe<Scalars['String']>,
};

export type Gcms_Skill = Gcms_Node & {
  status: Gcms_Status,
  updatedAt: Scalars['GCMS_DateTime'],
  createdAt: Scalars['GCMS_DateTime'],
  id: Scalars['ID'],
  directionMobile?: Maybe<Gcms_SkillsDirection>,
  label: Scalars['String'],
  xAxisMobile?: Maybe<Scalars['Int']>,
  yAxisMobile?: Maybe<Scalars['Int']>,
  directionDesktop?: Maybe<Gcms_SkillsDirection>,
  xAxisDesktop?: Maybe<Scalars['Int']>,
  yAxisDesktop?: Maybe<Scalars['Int']>,
};

/** A connection to a list of items. */
export type Gcms_SkillConnection = {
  /** Information to aid in pagination. */
  pageInfo: Gcms_PageInfo,
  /** A list of edges. */
  edges: Array<Maybe<Gcms_SkillEdge>>,
  aggregate: Gcms_AggregateSkill,
};

export type Gcms_SkillCreateInput = {
  status?: Maybe<Gcms_Status>,
  directionMobile?: Maybe<Gcms_SkillsDirection>,
  label: Scalars['String'],
  xAxisMobile?: Maybe<Scalars['Int']>,
  yAxisMobile?: Maybe<Scalars['Int']>,
  directionDesktop?: Maybe<Gcms_SkillsDirection>,
  xAxisDesktop?: Maybe<Scalars['Int']>,
  yAxisDesktop?: Maybe<Scalars['Int']>,
};

/** An edge in a connection. */
export type Gcms_SkillEdge = {
  /** The item at the end of the edge. */
  node: Gcms_Skill,
  /** A cursor for use in pagination. */
  cursor: Scalars['String'],
};

export type Gcms_SkillOrderByInput = 
  'status_ASC' |
  'status_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'id_ASC' |
  'id_DESC' |
  'directionMobile_ASC' |
  'directionMobile_DESC' |
  'label_ASC' |
  'label_DESC' |
  'xAxisMobile_ASC' |
  'xAxisMobile_DESC' |
  'yAxisMobile_ASC' |
  'yAxisMobile_DESC' |
  'directionDesktop_ASC' |
  'directionDesktop_DESC' |
  'xAxisDesktop_ASC' |
  'xAxisDesktop_DESC' |
  'yAxisDesktop_ASC' |
  'yAxisDesktop_DESC';

export type Gcms_SkillPreviousValues = {
  status: Gcms_Status,
  updatedAt: Scalars['GCMS_DateTime'],
  createdAt: Scalars['GCMS_DateTime'],
  id: Scalars['ID'],
  directionMobile?: Maybe<Gcms_SkillsDirection>,
  label: Scalars['String'],
  xAxisMobile?: Maybe<Scalars['Int']>,
  yAxisMobile?: Maybe<Scalars['Int']>,
  directionDesktop?: Maybe<Gcms_SkillsDirection>,
  xAxisDesktop?: Maybe<Scalars['Int']>,
  yAxisDesktop?: Maybe<Scalars['Int']>,
};

export type Gcms_SkillsDirection = 
  'Right' |
  'Up' |
  'Down';

export type Gcms_SkillSubscriptionPayload = {
  mutation: Gcms_MutationType,
  node?: Maybe<Gcms_Skill>,
  updatedFields?: Maybe<Array<Scalars['String']>>,
  previousValues?: Maybe<Gcms_SkillPreviousValues>,
};

export type Gcms_SkillSubscriptionWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<Gcms_SkillSubscriptionWhereInput>>,
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<Gcms_SkillSubscriptionWhereInput>>,
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<Gcms_SkillSubscriptionWhereInput>>,
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<Array<Gcms_MutationType>>,
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<Scalars['String']>,
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>,
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>,
  node?: Maybe<Gcms_SkillWhereInput>,
};

export type Gcms_SkillUpdateInput = {
  status?: Maybe<Gcms_Status>,
  directionMobile?: Maybe<Gcms_SkillsDirection>,
  label?: Maybe<Scalars['String']>,
  xAxisMobile?: Maybe<Scalars['Int']>,
  yAxisMobile?: Maybe<Scalars['Int']>,
  directionDesktop?: Maybe<Gcms_SkillsDirection>,
  xAxisDesktop?: Maybe<Scalars['Int']>,
  yAxisDesktop?: Maybe<Scalars['Int']>,
};

export type Gcms_SkillUpdateManyMutationInput = {
  status?: Maybe<Gcms_Status>,
  directionMobile?: Maybe<Gcms_SkillsDirection>,
  label?: Maybe<Scalars['String']>,
  xAxisMobile?: Maybe<Scalars['Int']>,
  yAxisMobile?: Maybe<Scalars['Int']>,
  directionDesktop?: Maybe<Gcms_SkillsDirection>,
  xAxisDesktop?: Maybe<Scalars['Int']>,
  yAxisDesktop?: Maybe<Scalars['Int']>,
};

export type Gcms_SkillWhereInput = {
  _search?: Maybe<Scalars['String']>,
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<Gcms_SkillWhereInput>>,
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<Gcms_SkillWhereInput>>,
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<Gcms_SkillWhereInput>>,
  status?: Maybe<Gcms_Status>,
  /** All values that are not equal to given value. */
  status_not?: Maybe<Gcms_Status>,
  /** All values that are contained in given list. */
  status_in?: Maybe<Array<Gcms_Status>>,
  /** All values that are not contained in given list. */
  status_not_in?: Maybe<Array<Gcms_Status>>,
  updatedAt?: Maybe<Scalars['GCMS_DateTime']>,
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['GCMS_DateTime']>,
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['GCMS_DateTime']>>,
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['GCMS_DateTime']>>,
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['GCMS_DateTime']>,
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['GCMS_DateTime']>,
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['GCMS_DateTime']>,
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['GCMS_DateTime']>,
  createdAt?: Maybe<Scalars['GCMS_DateTime']>,
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['GCMS_DateTime']>,
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['GCMS_DateTime']>>,
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['GCMS_DateTime']>>,
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['GCMS_DateTime']>,
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['GCMS_DateTime']>,
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['GCMS_DateTime']>,
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['GCMS_DateTime']>,
  id?: Maybe<Scalars['ID']>,
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>,
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>,
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>,
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>,
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>,
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>,
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>,
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>,
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>,
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>,
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>,
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>,
  directionMobile?: Maybe<Gcms_SkillsDirection>,
  /** All values that are not equal to given value. */
  directionMobile_not?: Maybe<Gcms_SkillsDirection>,
  /** All values that are contained in given list. */
  directionMobile_in?: Maybe<Array<Gcms_SkillsDirection>>,
  /** All values that are not contained in given list. */
  directionMobile_not_in?: Maybe<Array<Gcms_SkillsDirection>>,
  label?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  label_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  label_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  label_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  label_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  label_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  label_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  label_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  label_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  label_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  label_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  label_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  label_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  label_not_ends_with?: Maybe<Scalars['String']>,
  xAxisMobile?: Maybe<Scalars['Int']>,
  /** All values that are not equal to given value. */
  xAxisMobile_not?: Maybe<Scalars['Int']>,
  /** All values that are contained in given list. */
  xAxisMobile_in?: Maybe<Array<Scalars['Int']>>,
  /** All values that are not contained in given list. */
  xAxisMobile_not_in?: Maybe<Array<Scalars['Int']>>,
  /** All values less than the given value. */
  xAxisMobile_lt?: Maybe<Scalars['Int']>,
  /** All values less than or equal the given value. */
  xAxisMobile_lte?: Maybe<Scalars['Int']>,
  /** All values greater than the given value. */
  xAxisMobile_gt?: Maybe<Scalars['Int']>,
  /** All values greater than or equal the given value. */
  xAxisMobile_gte?: Maybe<Scalars['Int']>,
  yAxisMobile?: Maybe<Scalars['Int']>,
  /** All values that are not equal to given value. */
  yAxisMobile_not?: Maybe<Scalars['Int']>,
  /** All values that are contained in given list. */
  yAxisMobile_in?: Maybe<Array<Scalars['Int']>>,
  /** All values that are not contained in given list. */
  yAxisMobile_not_in?: Maybe<Array<Scalars['Int']>>,
  /** All values less than the given value. */
  yAxisMobile_lt?: Maybe<Scalars['Int']>,
  /** All values less than or equal the given value. */
  yAxisMobile_lte?: Maybe<Scalars['Int']>,
  /** All values greater than the given value. */
  yAxisMobile_gt?: Maybe<Scalars['Int']>,
  /** All values greater than or equal the given value. */
  yAxisMobile_gte?: Maybe<Scalars['Int']>,
  directionDesktop?: Maybe<Gcms_SkillsDirection>,
  /** All values that are not equal to given value. */
  directionDesktop_not?: Maybe<Gcms_SkillsDirection>,
  /** All values that are contained in given list. */
  directionDesktop_in?: Maybe<Array<Gcms_SkillsDirection>>,
  /** All values that are not contained in given list. */
  directionDesktop_not_in?: Maybe<Array<Gcms_SkillsDirection>>,
  xAxisDesktop?: Maybe<Scalars['Int']>,
  /** All values that are not equal to given value. */
  xAxisDesktop_not?: Maybe<Scalars['Int']>,
  /** All values that are contained in given list. */
  xAxisDesktop_in?: Maybe<Array<Scalars['Int']>>,
  /** All values that are not contained in given list. */
  xAxisDesktop_not_in?: Maybe<Array<Scalars['Int']>>,
  /** All values less than the given value. */
  xAxisDesktop_lt?: Maybe<Scalars['Int']>,
  /** All values less than or equal the given value. */
  xAxisDesktop_lte?: Maybe<Scalars['Int']>,
  /** All values greater than the given value. */
  xAxisDesktop_gt?: Maybe<Scalars['Int']>,
  /** All values greater than or equal the given value. */
  xAxisDesktop_gte?: Maybe<Scalars['Int']>,
  yAxisDesktop?: Maybe<Scalars['Int']>,
  /** All values that are not equal to given value. */
  yAxisDesktop_not?: Maybe<Scalars['Int']>,
  /** All values that are contained in given list. */
  yAxisDesktop_in?: Maybe<Array<Scalars['Int']>>,
  /** All values that are not contained in given list. */
  yAxisDesktop_not_in?: Maybe<Array<Scalars['Int']>>,
  /** All values less than the given value. */
  yAxisDesktop_lt?: Maybe<Scalars['Int']>,
  /** All values less than or equal the given value. */
  yAxisDesktop_lte?: Maybe<Scalars['Int']>,
  /** All values greater than the given value. */
  yAxisDesktop_gt?: Maybe<Scalars['Int']>,
  /** All values greater than or equal the given value. */
  yAxisDesktop_gte?: Maybe<Scalars['Int']>,
};

export type Gcms_SkillWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>,
};

export type Gcms_SocialLink = Gcms_Node & {
  status: Gcms_Status,
  updatedAt: Scalars['GCMS_DateTime'],
  createdAt: Scalars['GCMS_DateTime'],
  id: Scalars['ID'],
  label: Scalars['String'],
  url?: Maybe<Scalars['String']>,
};

/** A connection to a list of items. */
export type Gcms_SocialLinkConnection = {
  /** Information to aid in pagination. */
  pageInfo: Gcms_PageInfo,
  /** A list of edges. */
  edges: Array<Maybe<Gcms_SocialLinkEdge>>,
  aggregate: Gcms_AggregateSocialLink,
};

export type Gcms_SocialLinkCreateInput = {
  status?: Maybe<Gcms_Status>,
  label: Scalars['String'],
  url?: Maybe<Scalars['String']>,
};

/** An edge in a connection. */
export type Gcms_SocialLinkEdge = {
  /** The item at the end of the edge. */
  node: Gcms_SocialLink,
  /** A cursor for use in pagination. */
  cursor: Scalars['String'],
};

export type Gcms_SocialLinkOrderByInput = 
  'status_ASC' |
  'status_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'id_ASC' |
  'id_DESC' |
  'label_ASC' |
  'label_DESC' |
  'url_ASC' |
  'url_DESC';

export type Gcms_SocialLinkPreviousValues = {
  status: Gcms_Status,
  updatedAt: Scalars['GCMS_DateTime'],
  createdAt: Scalars['GCMS_DateTime'],
  id: Scalars['ID'],
  label: Scalars['String'],
  url?: Maybe<Scalars['String']>,
};

export type Gcms_SocialLinkSubscriptionPayload = {
  mutation: Gcms_MutationType,
  node?: Maybe<Gcms_SocialLink>,
  updatedFields?: Maybe<Array<Scalars['String']>>,
  previousValues?: Maybe<Gcms_SocialLinkPreviousValues>,
};

export type Gcms_SocialLinkSubscriptionWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<Gcms_SocialLinkSubscriptionWhereInput>>,
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<Gcms_SocialLinkSubscriptionWhereInput>>,
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<Gcms_SocialLinkSubscriptionWhereInput>>,
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<Array<Gcms_MutationType>>,
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<Scalars['String']>,
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>,
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>,
  node?: Maybe<Gcms_SocialLinkWhereInput>,
};

export type Gcms_SocialLinkUpdateInput = {
  status?: Maybe<Gcms_Status>,
  label?: Maybe<Scalars['String']>,
  url?: Maybe<Scalars['String']>,
};

export type Gcms_SocialLinkUpdateManyMutationInput = {
  status?: Maybe<Gcms_Status>,
  label?: Maybe<Scalars['String']>,
  url?: Maybe<Scalars['String']>,
};

export type Gcms_SocialLinkWhereInput = {
  _search?: Maybe<Scalars['String']>,
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<Gcms_SocialLinkWhereInput>>,
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<Gcms_SocialLinkWhereInput>>,
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<Gcms_SocialLinkWhereInput>>,
  status?: Maybe<Gcms_Status>,
  /** All values that are not equal to given value. */
  status_not?: Maybe<Gcms_Status>,
  /** All values that are contained in given list. */
  status_in?: Maybe<Array<Gcms_Status>>,
  /** All values that are not contained in given list. */
  status_not_in?: Maybe<Array<Gcms_Status>>,
  updatedAt?: Maybe<Scalars['GCMS_DateTime']>,
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['GCMS_DateTime']>,
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['GCMS_DateTime']>>,
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['GCMS_DateTime']>>,
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['GCMS_DateTime']>,
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['GCMS_DateTime']>,
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['GCMS_DateTime']>,
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['GCMS_DateTime']>,
  createdAt?: Maybe<Scalars['GCMS_DateTime']>,
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['GCMS_DateTime']>,
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['GCMS_DateTime']>>,
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['GCMS_DateTime']>>,
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['GCMS_DateTime']>,
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['GCMS_DateTime']>,
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['GCMS_DateTime']>,
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['GCMS_DateTime']>,
  id?: Maybe<Scalars['ID']>,
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>,
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>,
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>,
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>,
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>,
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>,
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>,
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>,
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>,
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>,
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>,
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>,
  label?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  label_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  label_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  label_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  label_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  label_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  label_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  label_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  label_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  label_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  label_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  label_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  label_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  label_not_ends_with?: Maybe<Scalars['String']>,
  url?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  url_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  url_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  url_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  url_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  url_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  url_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  url_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  url_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  url_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  url_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  url_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  url_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  url_not_ends_with?: Maybe<Scalars['String']>,
};

export type Gcms_SocialLinkWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>,
};

export type Gcms_Status = 
  'DRAFT' |
  'PUBLISHED' |
  'ARCHIVED';

export type GraphQlSource = Node & {
  id: Scalars['ID'],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
  typeName?: Maybe<Scalars['String']>,
  fieldName?: Maybe<Scalars['String']>,
};

export type GraphQlSourceConnection = {
  totalCount: Scalars['Int'],
  edges: Array<GraphQlSourceEdge>,
  nodes: Array<GraphQlSource>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<GraphQlSourceGroupConnection>,
};


export type GraphQlSourceConnectionDistinctArgs = {
  field: GraphQlSourceFieldsEnum
};


export type GraphQlSourceConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: GraphQlSourceFieldsEnum
};

export type GraphQlSourceEdge = {
  next?: Maybe<GraphQlSource>,
  node: GraphQlSource,
  previous?: Maybe<GraphQlSource>,
};

export type GraphQlSourceFieldsEnum = 
  'id' |
  'parent___id' |
  'parent___parent___id' |
  'parent___parent___parent___id' |
  'parent___parent___parent___children' |
  'parent___parent___children' |
  'parent___parent___children___id' |
  'parent___parent___children___children' |
  'parent___parent___internal___content' |
  'parent___parent___internal___contentDigest' |
  'parent___parent___internal___description' |
  'parent___parent___internal___fieldOwners' |
  'parent___parent___internal___ignoreType' |
  'parent___parent___internal___mediaType' |
  'parent___parent___internal___owner' |
  'parent___parent___internal___type' |
  'parent___children' |
  'parent___children___id' |
  'parent___children___parent___id' |
  'parent___children___parent___children' |
  'parent___children___children' |
  'parent___children___children___id' |
  'parent___children___children___children' |
  'parent___children___internal___content' |
  'parent___children___internal___contentDigest' |
  'parent___children___internal___description' |
  'parent___children___internal___fieldOwners' |
  'parent___children___internal___ignoreType' |
  'parent___children___internal___mediaType' |
  'parent___children___internal___owner' |
  'parent___children___internal___type' |
  'parent___internal___content' |
  'parent___internal___contentDigest' |
  'parent___internal___description' |
  'parent___internal___fieldOwners' |
  'parent___internal___ignoreType' |
  'parent___internal___mediaType' |
  'parent___internal___owner' |
  'parent___internal___type' |
  'children' |
  'children___id' |
  'children___parent___id' |
  'children___parent___parent___id' |
  'children___parent___parent___children' |
  'children___parent___children' |
  'children___parent___children___id' |
  'children___parent___children___children' |
  'children___parent___internal___content' |
  'children___parent___internal___contentDigest' |
  'children___parent___internal___description' |
  'children___parent___internal___fieldOwners' |
  'children___parent___internal___ignoreType' |
  'children___parent___internal___mediaType' |
  'children___parent___internal___owner' |
  'children___parent___internal___type' |
  'children___children' |
  'children___children___id' |
  'children___children___parent___id' |
  'children___children___parent___children' |
  'children___children___children' |
  'children___children___children___id' |
  'children___children___children___children' |
  'children___children___internal___content' |
  'children___children___internal___contentDigest' |
  'children___children___internal___description' |
  'children___children___internal___fieldOwners' |
  'children___children___internal___ignoreType' |
  'children___children___internal___mediaType' |
  'children___children___internal___owner' |
  'children___children___internal___type' |
  'children___internal___content' |
  'children___internal___contentDigest' |
  'children___internal___description' |
  'children___internal___fieldOwners' |
  'children___internal___ignoreType' |
  'children___internal___mediaType' |
  'children___internal___owner' |
  'children___internal___type' |
  'internal___content' |
  'internal___contentDigest' |
  'internal___description' |
  'internal___fieldOwners' |
  'internal___ignoreType' |
  'internal___mediaType' |
  'internal___owner' |
  'internal___type' |
  'typeName' |
  'fieldName';

export type GraphQlSourceFilterInput = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  typeName?: Maybe<StringQueryOperatorInput>,
  fieldName?: Maybe<StringQueryOperatorInput>,
};

export type GraphQlSourceGroupConnection = {
  totalCount: Scalars['Int'],
  edges: Array<GraphQlSourceEdge>,
  nodes: Array<GraphQlSource>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type GraphQlSourceSortInput = {
  fields?: Maybe<Array<Maybe<GraphQlSourceFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export type ImageCropFocus = 
  'CENTER' |
  'NORTH' |
  'NORTHEAST' |
  'EAST' |
  'SOUTHEAST' |
  'SOUTH' |
  'SOUTHWEST' |
  'WEST' |
  'NORTHWEST' |
  'ENTROPY' |
  'ATTENTION';

export type ImageFit = 
  'COVER' |
  'CONTAIN' |
  'FILL';

export type ImageFormat = 
  'NO_CHANGE' |
  'JPG' |
  'PNG' |
  'WEBP';

export type ImageSharp = Node & {
  fixed?: Maybe<ImageSharpFixed>,
  resolutions?: Maybe<ImageSharpResolutions>,
  fluid?: Maybe<ImageSharpFluid>,
  sizes?: Maybe<ImageSharpSizes>,
  original?: Maybe<ImageSharpOriginal>,
  resize?: Maybe<ImageSharpResize>,
  id: Scalars['ID'],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
};


export type ImageSharpFixedArgs = {
  width?: Maybe<Scalars['Int']>,
  height?: Maybe<Scalars['Int']>,
  base64Width?: Maybe<Scalars['Int']>,
  jpegProgressive?: Maybe<Scalars['Boolean']>,
  pngCompressionSpeed?: Maybe<Scalars['Int']>,
  grayscale?: Maybe<Scalars['Boolean']>,
  duotone?: Maybe<DuotoneGradient>,
  traceSVG?: Maybe<Potrace>,
  quality?: Maybe<Scalars['Int']>,
  jpegQuality?: Maybe<Scalars['Int']>,
  pngQuality?: Maybe<Scalars['Int']>,
  webpQuality?: Maybe<Scalars['Int']>,
  toFormat?: Maybe<ImageFormat>,
  toFormatBase64?: Maybe<ImageFormat>,
  cropFocus?: Maybe<ImageCropFocus>,
  fit?: Maybe<ImageFit>,
  background?: Maybe<Scalars['String']>,
  rotate?: Maybe<Scalars['Int']>,
  trim?: Maybe<Scalars['Float']>
};


export type ImageSharpResolutionsArgs = {
  width?: Maybe<Scalars['Int']>,
  height?: Maybe<Scalars['Int']>,
  base64Width?: Maybe<Scalars['Int']>,
  jpegProgressive?: Maybe<Scalars['Boolean']>,
  pngCompressionSpeed?: Maybe<Scalars['Int']>,
  grayscale?: Maybe<Scalars['Boolean']>,
  duotone?: Maybe<DuotoneGradient>,
  traceSVG?: Maybe<Potrace>,
  quality?: Maybe<Scalars['Int']>,
  jpegQuality?: Maybe<Scalars['Int']>,
  pngQuality?: Maybe<Scalars['Int']>,
  webpQuality?: Maybe<Scalars['Int']>,
  toFormat?: Maybe<ImageFormat>,
  toFormatBase64?: Maybe<ImageFormat>,
  cropFocus?: Maybe<ImageCropFocus>,
  fit?: Maybe<ImageFit>,
  background?: Maybe<Scalars['String']>,
  rotate?: Maybe<Scalars['Int']>,
  trim?: Maybe<Scalars['Float']>
};


export type ImageSharpFluidArgs = {
  maxWidth?: Maybe<Scalars['Int']>,
  maxHeight?: Maybe<Scalars['Int']>,
  base64Width?: Maybe<Scalars['Int']>,
  grayscale?: Maybe<Scalars['Boolean']>,
  jpegProgressive?: Maybe<Scalars['Boolean']>,
  pngCompressionSpeed?: Maybe<Scalars['Int']>,
  duotone?: Maybe<DuotoneGradient>,
  traceSVG?: Maybe<Potrace>,
  quality?: Maybe<Scalars['Int']>,
  jpegQuality?: Maybe<Scalars['Int']>,
  pngQuality?: Maybe<Scalars['Int']>,
  webpQuality?: Maybe<Scalars['Int']>,
  toFormat?: Maybe<ImageFormat>,
  toFormatBase64?: Maybe<ImageFormat>,
  cropFocus?: Maybe<ImageCropFocus>,
  fit?: Maybe<ImageFit>,
  background?: Maybe<Scalars['String']>,
  rotate?: Maybe<Scalars['Int']>,
  trim?: Maybe<Scalars['Float']>,
  sizes?: Maybe<Scalars['String']>,
  srcSetBreakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>
};


export type ImageSharpSizesArgs = {
  maxWidth?: Maybe<Scalars['Int']>,
  maxHeight?: Maybe<Scalars['Int']>,
  base64Width?: Maybe<Scalars['Int']>,
  grayscale?: Maybe<Scalars['Boolean']>,
  jpegProgressive?: Maybe<Scalars['Boolean']>,
  pngCompressionSpeed?: Maybe<Scalars['Int']>,
  duotone?: Maybe<DuotoneGradient>,
  traceSVG?: Maybe<Potrace>,
  quality?: Maybe<Scalars['Int']>,
  jpegQuality?: Maybe<Scalars['Int']>,
  pngQuality?: Maybe<Scalars['Int']>,
  webpQuality?: Maybe<Scalars['Int']>,
  toFormat?: Maybe<ImageFormat>,
  toFormatBase64?: Maybe<ImageFormat>,
  cropFocus?: Maybe<ImageCropFocus>,
  fit?: Maybe<ImageFit>,
  background?: Maybe<Scalars['String']>,
  rotate?: Maybe<Scalars['Int']>,
  trim?: Maybe<Scalars['Float']>,
  sizes?: Maybe<Scalars['String']>,
  srcSetBreakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>
};


export type ImageSharpResizeArgs = {
  width?: Maybe<Scalars['Int']>,
  height?: Maybe<Scalars['Int']>,
  quality?: Maybe<Scalars['Int']>,
  jpegQuality?: Maybe<Scalars['Int']>,
  pngQuality?: Maybe<Scalars['Int']>,
  webpQuality?: Maybe<Scalars['Int']>,
  jpegProgressive?: Maybe<Scalars['Boolean']>,
  pngCompressionLevel?: Maybe<Scalars['Int']>,
  pngCompressionSpeed?: Maybe<Scalars['Int']>,
  grayscale?: Maybe<Scalars['Boolean']>,
  duotone?: Maybe<DuotoneGradient>,
  base64?: Maybe<Scalars['Boolean']>,
  traceSVG?: Maybe<Potrace>,
  toFormat?: Maybe<ImageFormat>,
  cropFocus?: Maybe<ImageCropFocus>,
  fit?: Maybe<ImageFit>,
  background?: Maybe<Scalars['String']>,
  rotate?: Maybe<Scalars['Int']>,
  trim?: Maybe<Scalars['Float']>
};

export type ImageSharpConnection = {
  totalCount: Scalars['Int'],
  edges: Array<ImageSharpEdge>,
  nodes: Array<ImageSharp>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<ImageSharpGroupConnection>,
};


export type ImageSharpConnectionDistinctArgs = {
  field: ImageSharpFieldsEnum
};


export type ImageSharpConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: ImageSharpFieldsEnum
};

export type ImageSharpEdge = {
  next?: Maybe<ImageSharp>,
  node: ImageSharp,
  previous?: Maybe<ImageSharp>,
};

export type ImageSharpFieldsEnum = 
  'fixed___base64' |
  'fixed___tracedSVG' |
  'fixed___aspectRatio' |
  'fixed___width' |
  'fixed___height' |
  'fixed___src' |
  'fixed___srcSet' |
  'fixed___srcWebp' |
  'fixed___srcSetWebp' |
  'fixed___originalName' |
  'resolutions___base64' |
  'resolutions___tracedSVG' |
  'resolutions___aspectRatio' |
  'resolutions___width' |
  'resolutions___height' |
  'resolutions___src' |
  'resolutions___srcSet' |
  'resolutions___srcWebp' |
  'resolutions___srcSetWebp' |
  'resolutions___originalName' |
  'fluid___base64' |
  'fluid___tracedSVG' |
  'fluid___aspectRatio' |
  'fluid___src' |
  'fluid___srcSet' |
  'fluid___srcWebp' |
  'fluid___srcSetWebp' |
  'fluid___sizes' |
  'fluid___originalImg' |
  'fluid___originalName' |
  'fluid___presentationWidth' |
  'fluid___presentationHeight' |
  'sizes___base64' |
  'sizes___tracedSVG' |
  'sizes___aspectRatio' |
  'sizes___src' |
  'sizes___srcSet' |
  'sizes___srcWebp' |
  'sizes___srcSetWebp' |
  'sizes___sizes' |
  'sizes___originalImg' |
  'sizes___originalName' |
  'sizes___presentationWidth' |
  'sizes___presentationHeight' |
  'original___width' |
  'original___height' |
  'original___src' |
  'resize___src' |
  'resize___tracedSVG' |
  'resize___width' |
  'resize___height' |
  'resize___aspectRatio' |
  'resize___originalName' |
  'id' |
  'parent___id' |
  'parent___parent___id' |
  'parent___parent___parent___id' |
  'parent___parent___parent___children' |
  'parent___parent___children' |
  'parent___parent___children___id' |
  'parent___parent___children___children' |
  'parent___parent___internal___content' |
  'parent___parent___internal___contentDigest' |
  'parent___parent___internal___description' |
  'parent___parent___internal___fieldOwners' |
  'parent___parent___internal___ignoreType' |
  'parent___parent___internal___mediaType' |
  'parent___parent___internal___owner' |
  'parent___parent___internal___type' |
  'parent___children' |
  'parent___children___id' |
  'parent___children___parent___id' |
  'parent___children___parent___children' |
  'parent___children___children' |
  'parent___children___children___id' |
  'parent___children___children___children' |
  'parent___children___internal___content' |
  'parent___children___internal___contentDigest' |
  'parent___children___internal___description' |
  'parent___children___internal___fieldOwners' |
  'parent___children___internal___ignoreType' |
  'parent___children___internal___mediaType' |
  'parent___children___internal___owner' |
  'parent___children___internal___type' |
  'parent___internal___content' |
  'parent___internal___contentDigest' |
  'parent___internal___description' |
  'parent___internal___fieldOwners' |
  'parent___internal___ignoreType' |
  'parent___internal___mediaType' |
  'parent___internal___owner' |
  'parent___internal___type' |
  'children' |
  'children___id' |
  'children___parent___id' |
  'children___parent___parent___id' |
  'children___parent___parent___children' |
  'children___parent___children' |
  'children___parent___children___id' |
  'children___parent___children___children' |
  'children___parent___internal___content' |
  'children___parent___internal___contentDigest' |
  'children___parent___internal___description' |
  'children___parent___internal___fieldOwners' |
  'children___parent___internal___ignoreType' |
  'children___parent___internal___mediaType' |
  'children___parent___internal___owner' |
  'children___parent___internal___type' |
  'children___children' |
  'children___children___id' |
  'children___children___parent___id' |
  'children___children___parent___children' |
  'children___children___children' |
  'children___children___children___id' |
  'children___children___children___children' |
  'children___children___internal___content' |
  'children___children___internal___contentDigest' |
  'children___children___internal___description' |
  'children___children___internal___fieldOwners' |
  'children___children___internal___ignoreType' |
  'children___children___internal___mediaType' |
  'children___children___internal___owner' |
  'children___children___internal___type' |
  'children___internal___content' |
  'children___internal___contentDigest' |
  'children___internal___description' |
  'children___internal___fieldOwners' |
  'children___internal___ignoreType' |
  'children___internal___mediaType' |
  'children___internal___owner' |
  'children___internal___type' |
  'internal___content' |
  'internal___contentDigest' |
  'internal___description' |
  'internal___fieldOwners' |
  'internal___ignoreType' |
  'internal___mediaType' |
  'internal___owner' |
  'internal___type';

export type ImageSharpFilterInput = {
  fixed?: Maybe<ImageSharpFixedFilterInput>,
  resolutions?: Maybe<ImageSharpResolutionsFilterInput>,
  fluid?: Maybe<ImageSharpFluidFilterInput>,
  sizes?: Maybe<ImageSharpSizesFilterInput>,
  original?: Maybe<ImageSharpOriginalFilterInput>,
  resize?: Maybe<ImageSharpResizeFilterInput>,
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
};

export type ImageSharpFixed = {
  base64?: Maybe<Scalars['String']>,
  tracedSVG?: Maybe<Scalars['String']>,
  aspectRatio?: Maybe<Scalars['Float']>,
  width: Scalars['Float'],
  height: Scalars['Float'],
  src: Scalars['String'],
  srcSet: Scalars['String'],
  srcWebp?: Maybe<Scalars['String']>,
  srcSetWebp?: Maybe<Scalars['String']>,
  originalName?: Maybe<Scalars['String']>,
};

export type ImageSharpFixedFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>,
  tracedSVG?: Maybe<StringQueryOperatorInput>,
  aspectRatio?: Maybe<FloatQueryOperatorInput>,
  width?: Maybe<FloatQueryOperatorInput>,
  height?: Maybe<FloatQueryOperatorInput>,
  src?: Maybe<StringQueryOperatorInput>,
  srcSet?: Maybe<StringQueryOperatorInput>,
  srcWebp?: Maybe<StringQueryOperatorInput>,
  srcSetWebp?: Maybe<StringQueryOperatorInput>,
  originalName?: Maybe<StringQueryOperatorInput>,
};

export type ImageSharpFluid = {
  base64?: Maybe<Scalars['String']>,
  tracedSVG?: Maybe<Scalars['String']>,
  aspectRatio: Scalars['Float'],
  src: Scalars['String'],
  srcSet: Scalars['String'],
  srcWebp?: Maybe<Scalars['String']>,
  srcSetWebp?: Maybe<Scalars['String']>,
  sizes: Scalars['String'],
  originalImg?: Maybe<Scalars['String']>,
  originalName?: Maybe<Scalars['String']>,
  presentationWidth?: Maybe<Scalars['Int']>,
  presentationHeight?: Maybe<Scalars['Int']>,
};

export type ImageSharpFluidFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>,
  tracedSVG?: Maybe<StringQueryOperatorInput>,
  aspectRatio?: Maybe<FloatQueryOperatorInput>,
  src?: Maybe<StringQueryOperatorInput>,
  srcSet?: Maybe<StringQueryOperatorInput>,
  srcWebp?: Maybe<StringQueryOperatorInput>,
  srcSetWebp?: Maybe<StringQueryOperatorInput>,
  sizes?: Maybe<StringQueryOperatorInput>,
  originalImg?: Maybe<StringQueryOperatorInput>,
  originalName?: Maybe<StringQueryOperatorInput>,
  presentationWidth?: Maybe<IntQueryOperatorInput>,
  presentationHeight?: Maybe<IntQueryOperatorInput>,
};

export type ImageSharpGroupConnection = {
  totalCount: Scalars['Int'],
  edges: Array<ImageSharpEdge>,
  nodes: Array<ImageSharp>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type ImageSharpOriginal = {
  width?: Maybe<Scalars['Float']>,
  height?: Maybe<Scalars['Float']>,
  src?: Maybe<Scalars['String']>,
};

export type ImageSharpOriginalFilterInput = {
  width?: Maybe<FloatQueryOperatorInput>,
  height?: Maybe<FloatQueryOperatorInput>,
  src?: Maybe<StringQueryOperatorInput>,
};

export type ImageSharpResize = {
  src?: Maybe<Scalars['String']>,
  tracedSVG?: Maybe<Scalars['String']>,
  width?: Maybe<Scalars['Int']>,
  height?: Maybe<Scalars['Int']>,
  aspectRatio?: Maybe<Scalars['Float']>,
  originalName?: Maybe<Scalars['String']>,
};

export type ImageSharpResizeFilterInput = {
  src?: Maybe<StringQueryOperatorInput>,
  tracedSVG?: Maybe<StringQueryOperatorInput>,
  width?: Maybe<IntQueryOperatorInput>,
  height?: Maybe<IntQueryOperatorInput>,
  aspectRatio?: Maybe<FloatQueryOperatorInput>,
  originalName?: Maybe<StringQueryOperatorInput>,
};

export type ImageSharpResolutions = {
  base64?: Maybe<Scalars['String']>,
  tracedSVG?: Maybe<Scalars['String']>,
  aspectRatio?: Maybe<Scalars['Float']>,
  width: Scalars['Float'],
  height: Scalars['Float'],
  src: Scalars['String'],
  srcSet: Scalars['String'],
  srcWebp?: Maybe<Scalars['String']>,
  srcSetWebp?: Maybe<Scalars['String']>,
  originalName?: Maybe<Scalars['String']>,
};

export type ImageSharpResolutionsFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>,
  tracedSVG?: Maybe<StringQueryOperatorInput>,
  aspectRatio?: Maybe<FloatQueryOperatorInput>,
  width?: Maybe<FloatQueryOperatorInput>,
  height?: Maybe<FloatQueryOperatorInput>,
  src?: Maybe<StringQueryOperatorInput>,
  srcSet?: Maybe<StringQueryOperatorInput>,
  srcWebp?: Maybe<StringQueryOperatorInput>,
  srcSetWebp?: Maybe<StringQueryOperatorInput>,
  originalName?: Maybe<StringQueryOperatorInput>,
};

export type ImageSharpSizes = {
  base64?: Maybe<Scalars['String']>,
  tracedSVG?: Maybe<Scalars['String']>,
  aspectRatio: Scalars['Float'],
  src: Scalars['String'],
  srcSet: Scalars['String'],
  srcWebp?: Maybe<Scalars['String']>,
  srcSetWebp?: Maybe<Scalars['String']>,
  sizes: Scalars['String'],
  originalImg?: Maybe<Scalars['String']>,
  originalName?: Maybe<Scalars['String']>,
  presentationWidth?: Maybe<Scalars['Int']>,
  presentationHeight?: Maybe<Scalars['Int']>,
};

export type ImageSharpSizesFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>,
  tracedSVG?: Maybe<StringQueryOperatorInput>,
  aspectRatio?: Maybe<FloatQueryOperatorInput>,
  src?: Maybe<StringQueryOperatorInput>,
  srcSet?: Maybe<StringQueryOperatorInput>,
  srcWebp?: Maybe<StringQueryOperatorInput>,
  srcSetWebp?: Maybe<StringQueryOperatorInput>,
  sizes?: Maybe<StringQueryOperatorInput>,
  originalImg?: Maybe<StringQueryOperatorInput>,
  originalName?: Maybe<StringQueryOperatorInput>,
  presentationWidth?: Maybe<IntQueryOperatorInput>,
  presentationHeight?: Maybe<IntQueryOperatorInput>,
};

export type ImageSharpSortInput = {
  fields?: Maybe<Array<Maybe<ImageSharpFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export type Internal = {
  content?: Maybe<Scalars['String']>,
  contentDigest: Scalars['String'],
  description?: Maybe<Scalars['String']>,
  fieldOwners?: Maybe<Array<Maybe<Scalars['String']>>>,
  ignoreType?: Maybe<Scalars['Boolean']>,
  mediaType?: Maybe<Scalars['String']>,
  owner: Scalars['String'],
  type: Scalars['String'],
};

export type InternalFilterInput = {
  content?: Maybe<StringQueryOperatorInput>,
  contentDigest?: Maybe<StringQueryOperatorInput>,
  description?: Maybe<StringQueryOperatorInput>,
  fieldOwners?: Maybe<StringQueryOperatorInput>,
  ignoreType?: Maybe<BooleanQueryOperatorInput>,
  mediaType?: Maybe<StringQueryOperatorInput>,
  owner?: Maybe<StringQueryOperatorInput>,
  type?: Maybe<StringQueryOperatorInput>,
};

export type IntQueryOperatorInput = {
  eq?: Maybe<Scalars['Int']>,
  ne?: Maybe<Scalars['Int']>,
  gt?: Maybe<Scalars['Int']>,
  gte?: Maybe<Scalars['Int']>,
  lt?: Maybe<Scalars['Int']>,
  lte?: Maybe<Scalars['Int']>,
  in?: Maybe<Array<Maybe<Scalars['Int']>>>,
  nin?: Maybe<Array<Maybe<Scalars['Int']>>>,
};


/** Node Interface */
export type Node = {
  id: Scalars['ID'],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
};

export type NodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
};

export type NodeFilterListInput = {
  elemMatch?: Maybe<NodeFilterInput>,
};

export type PageInfo = {
  currentPage: Scalars['Int'],
  hasPreviousPage: Scalars['Boolean'],
  hasNextPage: Scalars['Boolean'],
  itemCount: Scalars['Int'],
  pageCount: Scalars['Int'],
  perPage?: Maybe<Scalars['Int']>,
};

export type Potrace = {
  turnPolicy?: Maybe<PotraceTurnPolicy>,
  turdSize?: Maybe<Scalars['Float']>,
  alphaMax?: Maybe<Scalars['Float']>,
  optCurve?: Maybe<Scalars['Boolean']>,
  optTolerance?: Maybe<Scalars['Float']>,
  threshold?: Maybe<Scalars['Int']>,
  blackOnWhite?: Maybe<Scalars['Boolean']>,
  color?: Maybe<Scalars['String']>,
  background?: Maybe<Scalars['String']>,
};

export type PotraceTurnPolicy = 
  'TURNPOLICY_BLACK' |
  'TURNPOLICY_WHITE' |
  'TURNPOLICY_LEFT' |
  'TURNPOLICY_RIGHT' |
  'TURNPOLICY_MINORITY' |
  'TURNPOLICY_MAJORITY';

export type Query = {
  file?: Maybe<File>,
  allFile: FileConnection,
  directory?: Maybe<Directory>,
  allDirectory: DirectoryConnection,
  sitePage?: Maybe<SitePage>,
  allSitePage: SitePageConnection,
  imageSharp?: Maybe<ImageSharp>,
  allImageSharp: ImageSharpConnection,
  configs?: Maybe<Configs>,
  allConfigs: ConfigsConnection,
  graphQlSource?: Maybe<GraphQlSource>,
  allGraphQlSource: GraphQlSourceConnection,
  site?: Maybe<Site>,
  allSite: SiteConnection,
  sitePlugin?: Maybe<SitePlugin>,
  allSitePlugin: SitePluginConnection,
  gcms: Gcms,
};


export type QueryFileArgs = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>,
  absolutePath?: Maybe<StringQueryOperatorInput>,
  relativePath?: Maybe<StringQueryOperatorInput>,
  extension?: Maybe<StringQueryOperatorInput>,
  size?: Maybe<IntQueryOperatorInput>,
  prettySize?: Maybe<StringQueryOperatorInput>,
  modifiedTime?: Maybe<DateQueryOperatorInput>,
  accessTime?: Maybe<DateQueryOperatorInput>,
  changeTime?: Maybe<DateQueryOperatorInput>,
  birthTime?: Maybe<DateQueryOperatorInput>,
  root?: Maybe<StringQueryOperatorInput>,
  dir?: Maybe<StringQueryOperatorInput>,
  base?: Maybe<StringQueryOperatorInput>,
  ext?: Maybe<StringQueryOperatorInput>,
  name?: Maybe<StringQueryOperatorInput>,
  relativeDirectory?: Maybe<StringQueryOperatorInput>,
  dev?: Maybe<IntQueryOperatorInput>,
  mode?: Maybe<IntQueryOperatorInput>,
  nlink?: Maybe<IntQueryOperatorInput>,
  uid?: Maybe<IntQueryOperatorInput>,
  gid?: Maybe<IntQueryOperatorInput>,
  rdev?: Maybe<IntQueryOperatorInput>,
  ino?: Maybe<FloatQueryOperatorInput>,
  atimeMs?: Maybe<FloatQueryOperatorInput>,
  mtimeMs?: Maybe<FloatQueryOperatorInput>,
  ctimeMs?: Maybe<FloatQueryOperatorInput>,
  atime?: Maybe<DateQueryOperatorInput>,
  mtime?: Maybe<DateQueryOperatorInput>,
  ctime?: Maybe<DateQueryOperatorInput>,
  birthtime?: Maybe<DateQueryOperatorInput>,
  birthtimeMs?: Maybe<FloatQueryOperatorInput>,
  blksize?: Maybe<IntQueryOperatorInput>,
  blocks?: Maybe<IntQueryOperatorInput>,
  publicURL?: Maybe<StringQueryOperatorInput>,
  childImageSharp?: Maybe<ImageSharpFilterInput>,
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>
};


export type QueryAllFileArgs = {
  filter?: Maybe<FileFilterInput>,
  sort?: Maybe<FileSortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};


export type QueryDirectoryArgs = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>,
  absolutePath?: Maybe<StringQueryOperatorInput>,
  relativePath?: Maybe<StringQueryOperatorInput>,
  extension?: Maybe<StringQueryOperatorInput>,
  size?: Maybe<IntQueryOperatorInput>,
  prettySize?: Maybe<StringQueryOperatorInput>,
  modifiedTime?: Maybe<DateQueryOperatorInput>,
  accessTime?: Maybe<DateQueryOperatorInput>,
  changeTime?: Maybe<DateQueryOperatorInput>,
  birthTime?: Maybe<DateQueryOperatorInput>,
  root?: Maybe<StringQueryOperatorInput>,
  dir?: Maybe<StringQueryOperatorInput>,
  base?: Maybe<StringQueryOperatorInput>,
  ext?: Maybe<StringQueryOperatorInput>,
  name?: Maybe<StringQueryOperatorInput>,
  relativeDirectory?: Maybe<StringQueryOperatorInput>,
  dev?: Maybe<IntQueryOperatorInput>,
  mode?: Maybe<IntQueryOperatorInput>,
  nlink?: Maybe<IntQueryOperatorInput>,
  uid?: Maybe<IntQueryOperatorInput>,
  gid?: Maybe<IntQueryOperatorInput>,
  rdev?: Maybe<IntQueryOperatorInput>,
  ino?: Maybe<FloatQueryOperatorInput>,
  atimeMs?: Maybe<FloatQueryOperatorInput>,
  mtimeMs?: Maybe<FloatQueryOperatorInput>,
  ctimeMs?: Maybe<FloatQueryOperatorInput>,
  atime?: Maybe<DateQueryOperatorInput>,
  mtime?: Maybe<DateQueryOperatorInput>,
  ctime?: Maybe<DateQueryOperatorInput>,
  birthtime?: Maybe<DateQueryOperatorInput>,
  birthtimeMs?: Maybe<FloatQueryOperatorInput>,
  blksize?: Maybe<IntQueryOperatorInput>,
  blocks?: Maybe<IntQueryOperatorInput>,
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>
};


export type QueryAllDirectoryArgs = {
  filter?: Maybe<DirectoryFilterInput>,
  sort?: Maybe<DirectorySortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};


export type QuerySitePageArgs = {
  path?: Maybe<StringQueryOperatorInput>,
  component?: Maybe<StringQueryOperatorInput>,
  internalComponentName?: Maybe<StringQueryOperatorInput>,
  componentChunkName?: Maybe<StringQueryOperatorInput>,
  matchPath?: Maybe<StringQueryOperatorInput>,
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>,
  pluginCreator?: Maybe<SitePluginFilterInput>,
  pluginCreatorId?: Maybe<StringQueryOperatorInput>,
  componentPath?: Maybe<StringQueryOperatorInput>
};


export type QueryAllSitePageArgs = {
  filter?: Maybe<SitePageFilterInput>,
  sort?: Maybe<SitePageSortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};


export type QueryImageSharpArgs = {
  fixed?: Maybe<ImageSharpFixedFilterInput>,
  resolutions?: Maybe<ImageSharpResolutionsFilterInput>,
  fluid?: Maybe<ImageSharpFluidFilterInput>,
  sizes?: Maybe<ImageSharpSizesFilterInput>,
  original?: Maybe<ImageSharpOriginalFilterInput>,
  resize?: Maybe<ImageSharpResizeFilterInput>,
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>
};


export type QueryAllImageSharpArgs = {
  filter?: Maybe<ImageSharpFilterInput>,
  sort?: Maybe<ImageSharpSortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};


export type QueryConfigsArgs = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  config?: Maybe<ConfigsConfigFilterInput>,
  meta?: Maybe<ConfigsMetaFilterInput>,
  headerConfig?: Maybe<ConfigsHeaderConfigFilterInput>,
  recentWork?: Maybe<ConfigsRecentWorkFilterInput>,
  content?: Maybe<ConfigsContentFilterInput>,
  data?: Maybe<ConfigsDataFilterInput>
};


export type QueryAllConfigsArgs = {
  filter?: Maybe<ConfigsFilterInput>,
  sort?: Maybe<ConfigsSortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};


export type QueryGraphQlSourceArgs = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  typeName?: Maybe<StringQueryOperatorInput>,
  fieldName?: Maybe<StringQueryOperatorInput>
};


export type QueryAllGraphQlSourceArgs = {
  filter?: Maybe<GraphQlSourceFilterInput>,
  sort?: Maybe<GraphQlSourceSortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};


export type QuerySiteArgs = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>,
  port?: Maybe<IntQueryOperatorInput>,
  host?: Maybe<StringQueryOperatorInput>,
  polyfill?: Maybe<BooleanQueryOperatorInput>,
  pathPrefix?: Maybe<StringQueryOperatorInput>,
  buildTime?: Maybe<DateQueryOperatorInput>
};


export type QueryAllSiteArgs = {
  filter?: Maybe<SiteFilterInput>,
  sort?: Maybe<SiteSortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};


export type QuerySitePluginArgs = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  resolve?: Maybe<StringQueryOperatorInput>,
  name?: Maybe<StringQueryOperatorInput>,
  version?: Maybe<StringQueryOperatorInput>,
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>,
  nodeAPIs?: Maybe<StringQueryOperatorInput>,
  browserAPIs?: Maybe<StringQueryOperatorInput>,
  ssrAPIs?: Maybe<StringQueryOperatorInput>,
  pluginFilepath?: Maybe<StringQueryOperatorInput>,
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>
};


export type QueryAllSitePluginArgs = {
  filter?: Maybe<SitePluginFilterInput>,
  sort?: Maybe<SitePluginSortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};

export type Site = Node & {
  id: Scalars['ID'],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
  siteMetadata?: Maybe<SiteSiteMetadata>,
  port?: Maybe<Scalars['Int']>,
  host?: Maybe<Scalars['String']>,
  polyfill?: Maybe<Scalars['Boolean']>,
  pathPrefix?: Maybe<Scalars['String']>,
  buildTime?: Maybe<Scalars['Date']>,
};


export type SiteBuildTimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};

export type SiteConnection = {
  totalCount: Scalars['Int'],
  edges: Array<SiteEdge>,
  nodes: Array<Site>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<SiteGroupConnection>,
};


export type SiteConnectionDistinctArgs = {
  field: SiteFieldsEnum
};


export type SiteConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: SiteFieldsEnum
};

export type SiteEdge = {
  next?: Maybe<Site>,
  node: Site,
  previous?: Maybe<Site>,
};

export type SiteFieldsEnum = 
  'id' |
  'parent___id' |
  'parent___parent___id' |
  'parent___parent___parent___id' |
  'parent___parent___parent___children' |
  'parent___parent___children' |
  'parent___parent___children___id' |
  'parent___parent___children___children' |
  'parent___parent___internal___content' |
  'parent___parent___internal___contentDigest' |
  'parent___parent___internal___description' |
  'parent___parent___internal___fieldOwners' |
  'parent___parent___internal___ignoreType' |
  'parent___parent___internal___mediaType' |
  'parent___parent___internal___owner' |
  'parent___parent___internal___type' |
  'parent___children' |
  'parent___children___id' |
  'parent___children___parent___id' |
  'parent___children___parent___children' |
  'parent___children___children' |
  'parent___children___children___id' |
  'parent___children___children___children' |
  'parent___children___internal___content' |
  'parent___children___internal___contentDigest' |
  'parent___children___internal___description' |
  'parent___children___internal___fieldOwners' |
  'parent___children___internal___ignoreType' |
  'parent___children___internal___mediaType' |
  'parent___children___internal___owner' |
  'parent___children___internal___type' |
  'parent___internal___content' |
  'parent___internal___contentDigest' |
  'parent___internal___description' |
  'parent___internal___fieldOwners' |
  'parent___internal___ignoreType' |
  'parent___internal___mediaType' |
  'parent___internal___owner' |
  'parent___internal___type' |
  'children' |
  'children___id' |
  'children___parent___id' |
  'children___parent___parent___id' |
  'children___parent___parent___children' |
  'children___parent___children' |
  'children___parent___children___id' |
  'children___parent___children___children' |
  'children___parent___internal___content' |
  'children___parent___internal___contentDigest' |
  'children___parent___internal___description' |
  'children___parent___internal___fieldOwners' |
  'children___parent___internal___ignoreType' |
  'children___parent___internal___mediaType' |
  'children___parent___internal___owner' |
  'children___parent___internal___type' |
  'children___children' |
  'children___children___id' |
  'children___children___parent___id' |
  'children___children___parent___children' |
  'children___children___children' |
  'children___children___children___id' |
  'children___children___children___children' |
  'children___children___internal___content' |
  'children___children___internal___contentDigest' |
  'children___children___internal___description' |
  'children___children___internal___fieldOwners' |
  'children___children___internal___ignoreType' |
  'children___children___internal___mediaType' |
  'children___children___internal___owner' |
  'children___children___internal___type' |
  'children___internal___content' |
  'children___internal___contentDigest' |
  'children___internal___description' |
  'children___internal___fieldOwners' |
  'children___internal___ignoreType' |
  'children___internal___mediaType' |
  'children___internal___owner' |
  'children___internal___type' |
  'internal___content' |
  'internal___contentDigest' |
  'internal___description' |
  'internal___fieldOwners' |
  'internal___ignoreType' |
  'internal___mediaType' |
  'internal___owner' |
  'internal___type' |
  'siteMetadata___site' |
  'siteMetadata___title' |
  'siteMetadata___titleTemplate' |
  'siteMetadata___description' |
  'siteMetadata___siteUrl' |
  'siteMetadata___language' |
  'siteMetadata___color' |
  'siteMetadata___twitter' |
  'port' |
  'host' |
  'polyfill' |
  'pathPrefix' |
  'buildTime';

export type SiteFilterInput = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>,
  port?: Maybe<IntQueryOperatorInput>,
  host?: Maybe<StringQueryOperatorInput>,
  polyfill?: Maybe<BooleanQueryOperatorInput>,
  pathPrefix?: Maybe<StringQueryOperatorInput>,
  buildTime?: Maybe<DateQueryOperatorInput>,
};

export type SiteGroupConnection = {
  totalCount: Scalars['Int'],
  edges: Array<SiteEdge>,
  nodes: Array<Site>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type SitePage = Node & {
  path: Scalars['String'],
  component: Scalars['String'],
  internalComponentName: Scalars['String'],
  componentChunkName: Scalars['String'],
  matchPath?: Maybe<Scalars['String']>,
  id: Scalars['ID'],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
  isCreatedByStatefulCreatePages?: Maybe<Scalars['Boolean']>,
  pluginCreator?: Maybe<SitePlugin>,
  pluginCreatorId?: Maybe<Scalars['String']>,
  componentPath?: Maybe<Scalars['String']>,
};

export type SitePageConnection = {
  totalCount: Scalars['Int'],
  edges: Array<SitePageEdge>,
  nodes: Array<SitePage>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<SitePageGroupConnection>,
};


export type SitePageConnectionDistinctArgs = {
  field: SitePageFieldsEnum
};


export type SitePageConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: SitePageFieldsEnum
};

export type SitePageEdge = {
  next?: Maybe<SitePage>,
  node: SitePage,
  previous?: Maybe<SitePage>,
};

export type SitePageFieldsEnum = 
  'path' |
  'component' |
  'internalComponentName' |
  'componentChunkName' |
  'matchPath' |
  'id' |
  'parent___id' |
  'parent___parent___id' |
  'parent___parent___parent___id' |
  'parent___parent___parent___children' |
  'parent___parent___children' |
  'parent___parent___children___id' |
  'parent___parent___children___children' |
  'parent___parent___internal___content' |
  'parent___parent___internal___contentDigest' |
  'parent___parent___internal___description' |
  'parent___parent___internal___fieldOwners' |
  'parent___parent___internal___ignoreType' |
  'parent___parent___internal___mediaType' |
  'parent___parent___internal___owner' |
  'parent___parent___internal___type' |
  'parent___children' |
  'parent___children___id' |
  'parent___children___parent___id' |
  'parent___children___parent___children' |
  'parent___children___children' |
  'parent___children___children___id' |
  'parent___children___children___children' |
  'parent___children___internal___content' |
  'parent___children___internal___contentDigest' |
  'parent___children___internal___description' |
  'parent___children___internal___fieldOwners' |
  'parent___children___internal___ignoreType' |
  'parent___children___internal___mediaType' |
  'parent___children___internal___owner' |
  'parent___children___internal___type' |
  'parent___internal___content' |
  'parent___internal___contentDigest' |
  'parent___internal___description' |
  'parent___internal___fieldOwners' |
  'parent___internal___ignoreType' |
  'parent___internal___mediaType' |
  'parent___internal___owner' |
  'parent___internal___type' |
  'children' |
  'children___id' |
  'children___parent___id' |
  'children___parent___parent___id' |
  'children___parent___parent___children' |
  'children___parent___children' |
  'children___parent___children___id' |
  'children___parent___children___children' |
  'children___parent___internal___content' |
  'children___parent___internal___contentDigest' |
  'children___parent___internal___description' |
  'children___parent___internal___fieldOwners' |
  'children___parent___internal___ignoreType' |
  'children___parent___internal___mediaType' |
  'children___parent___internal___owner' |
  'children___parent___internal___type' |
  'children___children' |
  'children___children___id' |
  'children___children___parent___id' |
  'children___children___parent___children' |
  'children___children___children' |
  'children___children___children___id' |
  'children___children___children___children' |
  'children___children___internal___content' |
  'children___children___internal___contentDigest' |
  'children___children___internal___description' |
  'children___children___internal___fieldOwners' |
  'children___children___internal___ignoreType' |
  'children___children___internal___mediaType' |
  'children___children___internal___owner' |
  'children___children___internal___type' |
  'children___internal___content' |
  'children___internal___contentDigest' |
  'children___internal___description' |
  'children___internal___fieldOwners' |
  'children___internal___ignoreType' |
  'children___internal___mediaType' |
  'children___internal___owner' |
  'children___internal___type' |
  'internal___content' |
  'internal___contentDigest' |
  'internal___description' |
  'internal___fieldOwners' |
  'internal___ignoreType' |
  'internal___mediaType' |
  'internal___owner' |
  'internal___type' |
  'isCreatedByStatefulCreatePages' |
  'pluginCreator___id' |
  'pluginCreator___parent___id' |
  'pluginCreator___parent___parent___id' |
  'pluginCreator___parent___parent___children' |
  'pluginCreator___parent___children' |
  'pluginCreator___parent___children___id' |
  'pluginCreator___parent___children___children' |
  'pluginCreator___parent___internal___content' |
  'pluginCreator___parent___internal___contentDigest' |
  'pluginCreator___parent___internal___description' |
  'pluginCreator___parent___internal___fieldOwners' |
  'pluginCreator___parent___internal___ignoreType' |
  'pluginCreator___parent___internal___mediaType' |
  'pluginCreator___parent___internal___owner' |
  'pluginCreator___parent___internal___type' |
  'pluginCreator___children' |
  'pluginCreator___children___id' |
  'pluginCreator___children___parent___id' |
  'pluginCreator___children___parent___children' |
  'pluginCreator___children___children' |
  'pluginCreator___children___children___id' |
  'pluginCreator___children___children___children' |
  'pluginCreator___children___internal___content' |
  'pluginCreator___children___internal___contentDigest' |
  'pluginCreator___children___internal___description' |
  'pluginCreator___children___internal___fieldOwners' |
  'pluginCreator___children___internal___ignoreType' |
  'pluginCreator___children___internal___mediaType' |
  'pluginCreator___children___internal___owner' |
  'pluginCreator___children___internal___type' |
  'pluginCreator___internal___content' |
  'pluginCreator___internal___contentDigest' |
  'pluginCreator___internal___description' |
  'pluginCreator___internal___fieldOwners' |
  'pluginCreator___internal___ignoreType' |
  'pluginCreator___internal___mediaType' |
  'pluginCreator___internal___owner' |
  'pluginCreator___internal___type' |
  'pluginCreator___resolve' |
  'pluginCreator___name' |
  'pluginCreator___version' |
  'pluginCreator___pluginOptions___name' |
  'pluginCreator___pluginOptions___path' |
  'pluginCreator___pluginOptions___short_name' |
  'pluginCreator___pluginOptions___start_url' |
  'pluginCreator___pluginOptions___background_color' |
  'pluginCreator___pluginOptions___theme_color' |
  'pluginCreator___pluginOptions___display' |
  'pluginCreator___pluginOptions___icon' |
  'pluginCreator___pluginOptions___include_favicon' |
  'pluginCreator___pluginOptions___typeName' |
  'pluginCreator___pluginOptions___fieldName' |
  'pluginCreator___pluginOptions___url' |
  'pluginCreator___pluginOptions___headers___Authorization' |
  'pluginCreator___pluginOptions___fileName' |
  'pluginCreator___pluginOptions___codegen' |
  'pluginCreator___pluginOptions___pathCheck' |
  'pluginCreator___nodeAPIs' |
  'pluginCreator___browserAPIs' |
  'pluginCreator___ssrAPIs' |
  'pluginCreator___pluginFilepath' |
  'pluginCreator___packageJson___name' |
  'pluginCreator___packageJson___description' |
  'pluginCreator___packageJson___version' |
  'pluginCreator___packageJson___main' |
  'pluginCreator___packageJson___author' |
  'pluginCreator___packageJson___license' |
  'pluginCreator___packageJson___dependencies' |
  'pluginCreator___packageJson___dependencies___name' |
  'pluginCreator___packageJson___dependencies___version' |
  'pluginCreator___packageJson___devDependencies' |
  'pluginCreator___packageJson___devDependencies___name' |
  'pluginCreator___packageJson___devDependencies___version' |
  'pluginCreator___packageJson___peerDependencies' |
  'pluginCreator___packageJson___peerDependencies___name' |
  'pluginCreator___packageJson___peerDependencies___version' |
  'pluginCreator___packageJson___keywords' |
  'pluginCreatorId' |
  'componentPath';

export type SitePageFilterInput = {
  path?: Maybe<StringQueryOperatorInput>,
  component?: Maybe<StringQueryOperatorInput>,
  internalComponentName?: Maybe<StringQueryOperatorInput>,
  componentChunkName?: Maybe<StringQueryOperatorInput>,
  matchPath?: Maybe<StringQueryOperatorInput>,
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>,
  pluginCreator?: Maybe<SitePluginFilterInput>,
  pluginCreatorId?: Maybe<StringQueryOperatorInput>,
  componentPath?: Maybe<StringQueryOperatorInput>,
};

export type SitePageGroupConnection = {
  totalCount: Scalars['Int'],
  edges: Array<SitePageEdge>,
  nodes: Array<SitePage>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type SitePageSortInput = {
  fields?: Maybe<Array<Maybe<SitePageFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export type SitePlugin = Node & {
  id: Scalars['ID'],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
  resolve?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  version?: Maybe<Scalars['String']>,
  pluginOptions?: Maybe<SitePluginPluginOptions>,
  nodeAPIs?: Maybe<Array<Maybe<Scalars['String']>>>,
  browserAPIs?: Maybe<Array<Maybe<Scalars['String']>>>,
  ssrAPIs?: Maybe<Array<Maybe<Scalars['String']>>>,
  pluginFilepath?: Maybe<Scalars['String']>,
  packageJson?: Maybe<SitePluginPackageJson>,
};

export type SitePluginConnection = {
  totalCount: Scalars['Int'],
  edges: Array<SitePluginEdge>,
  nodes: Array<SitePlugin>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<SitePluginGroupConnection>,
};


export type SitePluginConnectionDistinctArgs = {
  field: SitePluginFieldsEnum
};


export type SitePluginConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: SitePluginFieldsEnum
};

export type SitePluginEdge = {
  next?: Maybe<SitePlugin>,
  node: SitePlugin,
  previous?: Maybe<SitePlugin>,
};

export type SitePluginFieldsEnum = 
  'id' |
  'parent___id' |
  'parent___parent___id' |
  'parent___parent___parent___id' |
  'parent___parent___parent___children' |
  'parent___parent___children' |
  'parent___parent___children___id' |
  'parent___parent___children___children' |
  'parent___parent___internal___content' |
  'parent___parent___internal___contentDigest' |
  'parent___parent___internal___description' |
  'parent___parent___internal___fieldOwners' |
  'parent___parent___internal___ignoreType' |
  'parent___parent___internal___mediaType' |
  'parent___parent___internal___owner' |
  'parent___parent___internal___type' |
  'parent___children' |
  'parent___children___id' |
  'parent___children___parent___id' |
  'parent___children___parent___children' |
  'parent___children___children' |
  'parent___children___children___id' |
  'parent___children___children___children' |
  'parent___children___internal___content' |
  'parent___children___internal___contentDigest' |
  'parent___children___internal___description' |
  'parent___children___internal___fieldOwners' |
  'parent___children___internal___ignoreType' |
  'parent___children___internal___mediaType' |
  'parent___children___internal___owner' |
  'parent___children___internal___type' |
  'parent___internal___content' |
  'parent___internal___contentDigest' |
  'parent___internal___description' |
  'parent___internal___fieldOwners' |
  'parent___internal___ignoreType' |
  'parent___internal___mediaType' |
  'parent___internal___owner' |
  'parent___internal___type' |
  'children' |
  'children___id' |
  'children___parent___id' |
  'children___parent___parent___id' |
  'children___parent___parent___children' |
  'children___parent___children' |
  'children___parent___children___id' |
  'children___parent___children___children' |
  'children___parent___internal___content' |
  'children___parent___internal___contentDigest' |
  'children___parent___internal___description' |
  'children___parent___internal___fieldOwners' |
  'children___parent___internal___ignoreType' |
  'children___parent___internal___mediaType' |
  'children___parent___internal___owner' |
  'children___parent___internal___type' |
  'children___children' |
  'children___children___id' |
  'children___children___parent___id' |
  'children___children___parent___children' |
  'children___children___children' |
  'children___children___children___id' |
  'children___children___children___children' |
  'children___children___internal___content' |
  'children___children___internal___contentDigest' |
  'children___children___internal___description' |
  'children___children___internal___fieldOwners' |
  'children___children___internal___ignoreType' |
  'children___children___internal___mediaType' |
  'children___children___internal___owner' |
  'children___children___internal___type' |
  'children___internal___content' |
  'children___internal___contentDigest' |
  'children___internal___description' |
  'children___internal___fieldOwners' |
  'children___internal___ignoreType' |
  'children___internal___mediaType' |
  'children___internal___owner' |
  'children___internal___type' |
  'internal___content' |
  'internal___contentDigest' |
  'internal___description' |
  'internal___fieldOwners' |
  'internal___ignoreType' |
  'internal___mediaType' |
  'internal___owner' |
  'internal___type' |
  'resolve' |
  'name' |
  'version' |
  'pluginOptions___name' |
  'pluginOptions___path' |
  'pluginOptions___short_name' |
  'pluginOptions___start_url' |
  'pluginOptions___background_color' |
  'pluginOptions___theme_color' |
  'pluginOptions___display' |
  'pluginOptions___icon' |
  'pluginOptions___include_favicon' |
  'pluginOptions___typeName' |
  'pluginOptions___fieldName' |
  'pluginOptions___url' |
  'pluginOptions___headers___Authorization' |
  'pluginOptions___fileName' |
  'pluginOptions___codegen' |
  'pluginOptions___pathCheck' |
  'nodeAPIs' |
  'browserAPIs' |
  'ssrAPIs' |
  'pluginFilepath' |
  'packageJson___name' |
  'packageJson___description' |
  'packageJson___version' |
  'packageJson___main' |
  'packageJson___author' |
  'packageJson___license' |
  'packageJson___dependencies' |
  'packageJson___dependencies___name' |
  'packageJson___dependencies___version' |
  'packageJson___devDependencies' |
  'packageJson___devDependencies___name' |
  'packageJson___devDependencies___version' |
  'packageJson___peerDependencies' |
  'packageJson___peerDependencies___name' |
  'packageJson___peerDependencies___version' |
  'packageJson___keywords';

export type SitePluginFilterInput = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  resolve?: Maybe<StringQueryOperatorInput>,
  name?: Maybe<StringQueryOperatorInput>,
  version?: Maybe<StringQueryOperatorInput>,
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>,
  nodeAPIs?: Maybe<StringQueryOperatorInput>,
  browserAPIs?: Maybe<StringQueryOperatorInput>,
  ssrAPIs?: Maybe<StringQueryOperatorInput>,
  pluginFilepath?: Maybe<StringQueryOperatorInput>,
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>,
};

export type SitePluginGroupConnection = {
  totalCount: Scalars['Int'],
  edges: Array<SitePluginEdge>,
  nodes: Array<SitePlugin>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type SitePluginPackageJson = {
  name?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  version?: Maybe<Scalars['String']>,
  main?: Maybe<Scalars['String']>,
  author?: Maybe<Scalars['String']>,
  license?: Maybe<Scalars['String']>,
  dependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDependencies>>>,
  devDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDevDependencies>>>,
  peerDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonPeerDependencies>>>,
  keywords?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type SitePluginPackageJsonDependencies = {
  name?: Maybe<Scalars['String']>,
  version?: Maybe<Scalars['String']>,
};

export type SitePluginPackageJsonDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>,
  version?: Maybe<StringQueryOperatorInput>,
};

export type SitePluginPackageJsonDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDependenciesFilterInput>,
};

export type SitePluginPackageJsonDevDependencies = {
  name?: Maybe<Scalars['String']>,
  version?: Maybe<Scalars['String']>,
};

export type SitePluginPackageJsonDevDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>,
  version?: Maybe<StringQueryOperatorInput>,
};

export type SitePluginPackageJsonDevDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDevDependenciesFilterInput>,
};

export type SitePluginPackageJsonFilterInput = {
  name?: Maybe<StringQueryOperatorInput>,
  description?: Maybe<StringQueryOperatorInput>,
  version?: Maybe<StringQueryOperatorInput>,
  main?: Maybe<StringQueryOperatorInput>,
  author?: Maybe<StringQueryOperatorInput>,
  license?: Maybe<StringQueryOperatorInput>,
  dependencies?: Maybe<SitePluginPackageJsonDependenciesFilterListInput>,
  devDependencies?: Maybe<SitePluginPackageJsonDevDependenciesFilterListInput>,
  peerDependencies?: Maybe<SitePluginPackageJsonPeerDependenciesFilterListInput>,
  keywords?: Maybe<StringQueryOperatorInput>,
};

export type SitePluginPackageJsonPeerDependencies = {
  name?: Maybe<Scalars['String']>,
  version?: Maybe<Scalars['String']>,
};

export type SitePluginPackageJsonPeerDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>,
  version?: Maybe<StringQueryOperatorInput>,
};

export type SitePluginPackageJsonPeerDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonPeerDependenciesFilterInput>,
};

export type SitePluginPluginOptions = {
  name?: Maybe<Scalars['String']>,
  path?: Maybe<Scalars['String']>,
  short_name?: Maybe<Scalars['String']>,
  start_url?: Maybe<Scalars['String']>,
  background_color?: Maybe<Scalars['String']>,
  theme_color?: Maybe<Scalars['String']>,
  display?: Maybe<Scalars['String']>,
  icon?: Maybe<Scalars['String']>,
  include_favicon?: Maybe<Scalars['Boolean']>,
  typeName?: Maybe<Scalars['String']>,
  fieldName?: Maybe<Scalars['String']>,
  url?: Maybe<Scalars['String']>,
  headers?: Maybe<SitePluginPluginOptionsHeaders>,
  fileName?: Maybe<Scalars['String']>,
  codegen?: Maybe<Scalars['Boolean']>,
  pathCheck?: Maybe<Scalars['Boolean']>,
};

export type SitePluginPluginOptionsFilterInput = {
  name?: Maybe<StringQueryOperatorInput>,
  path?: Maybe<StringQueryOperatorInput>,
  short_name?: Maybe<StringQueryOperatorInput>,
  start_url?: Maybe<StringQueryOperatorInput>,
  background_color?: Maybe<StringQueryOperatorInput>,
  theme_color?: Maybe<StringQueryOperatorInput>,
  display?: Maybe<StringQueryOperatorInput>,
  icon?: Maybe<StringQueryOperatorInput>,
  include_favicon?: Maybe<BooleanQueryOperatorInput>,
  typeName?: Maybe<StringQueryOperatorInput>,
  fieldName?: Maybe<StringQueryOperatorInput>,
  url?: Maybe<StringQueryOperatorInput>,
  headers?: Maybe<SitePluginPluginOptionsHeadersFilterInput>,
  fileName?: Maybe<StringQueryOperatorInput>,
  codegen?: Maybe<BooleanQueryOperatorInput>,
  pathCheck?: Maybe<BooleanQueryOperatorInput>,
};

export type SitePluginPluginOptionsHeaders = {
  Authorization?: Maybe<Scalars['String']>,
};

export type SitePluginPluginOptionsHeadersFilterInput = {
  Authorization?: Maybe<StringQueryOperatorInput>,
};

export type SitePluginSortInput = {
  fields?: Maybe<Array<Maybe<SitePluginFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export type SiteSiteMetadata = {
  site?: Maybe<Scalars['String']>,
  title?: Maybe<Scalars['String']>,
  titleTemplate?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  siteUrl?: Maybe<Scalars['String']>,
  language?: Maybe<Scalars['String']>,
  color?: Maybe<Scalars['String']>,
  twitter?: Maybe<Scalars['String']>,
};

export type SiteSiteMetadataFilterInput = {
  site?: Maybe<StringQueryOperatorInput>,
  title?: Maybe<StringQueryOperatorInput>,
  titleTemplate?: Maybe<StringQueryOperatorInput>,
  description?: Maybe<StringQueryOperatorInput>,
  siteUrl?: Maybe<StringQueryOperatorInput>,
  language?: Maybe<StringQueryOperatorInput>,
  color?: Maybe<StringQueryOperatorInput>,
  twitter?: Maybe<StringQueryOperatorInput>,
};

export type SiteSortInput = {
  fields?: Maybe<Array<Maybe<SiteFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export type SortOrderEnum = 
  'ASC' |
  'DESC';

export type StringQueryOperatorInput = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
};

export type Unnamed_1_QueryVariables = {};


export type Unnamed_1_Query = { configs: Maybe<{ config: Maybe<Pick<ConfigsConfig, 'gridLines'>> }> };

export type Unnamed_2_QueryVariables = {};


export type Unnamed_2_Query = { site: Maybe<{ siteMetadata: Maybe<Pick<SiteSiteMetadata, 'site' | 'title' | 'titleTemplate' | 'description' | 'siteUrl' | 'language' | 'color' | 'twitter'>> }> };

export type Unnamed_3_QueryVariables = {};


export type Unnamed_3_Query = { gcms: { socialLinks: Array<Maybe<Pick<Gcms_SocialLink, 'id' | 'label' | 'url'>>> } };

export type Unnamed_4_QueryVariables = {};


export type Unnamed_4_Query = { configs: Maybe<{ recentWork: Maybe<{ workItemPlx: Maybe<{ image: Maybe<Array<Maybe<Pick<ConfigsRecentWorkWorkItemPlxImage, 'startValue'>>>>, info: Maybe<Array<Maybe<Pick<ConfigsRecentWorkWorkItemPlxInfo, 'startValue'>>>>, mobileInfo: Maybe<Array<Maybe<Pick<ConfigsRecentWorkWorkItemPlxMobileInfo, 'startValue'>>>> }> }> }> };

export type Unnamed_5_QueryVariables = {};


export type Unnamed_5_Query = { gcms: { section: Maybe<(
      Pick<Gcms_Section, 'heading'>
      & { body: Maybe<Pick<Gcms_RichText, 'html'>> }
    )> } };

export type Unnamed_6_QueryVariables = {};


export type Unnamed_6_Query = { configs: Maybe<{ config: Maybe<Pick<ConfigsConfig, 'homeBottom'>> }> };

export type Unnamed_7_QueryVariables = {};


export type Unnamed_7_Query = { configs: Maybe<{ meta: Maybe<Pick<ConfigsMeta, 'name' | 'role'>>, headerConfig: Maybe<{ triangles: Maybe<Array<Maybe<Pick<ConfigsHeaderConfigTriangles, 'id' | 'color' | 'size' | 'plx' | 'start' | 'end'>>>> }>, config: Maybe<Pick<ConfigsConfig, 'gridLines'>> }> };

export type Unnamed_8_QueryVariables = {};


export type Unnamed_8_Query = { configs: Maybe<{ recentWork: Maybe<{ particleData: Maybe<Array<Maybe<Pick<ConfigsRecentWorkParticleData, 'name' | 'type' | 'color' | 'size' | 'plx'>>>> }>, config: Maybe<Pick<ConfigsConfig, 'gridLines'>> }> };

export type Unnamed_9_QueryVariables = {};


export type Unnamed_9_Query = { configs: Maybe<{ config: Maybe<Pick<ConfigsConfig, 'workItemsAmount'>> }>, gcms: { section: Maybe<Pick<Gcms_Section, 'heading'>>, projects: Array<Maybe<(
      Pick<Gcms_Project, 'id' | 'projectType' | 'title' | 'description' | 'projectId' | 'externalUrl'>
      & { imageDesktop: Maybe<Pick<Gcms_Asset, 'url'>> }
    )>> } };

export type Unnamed_10_QueryVariables = {};


export type Unnamed_10_Query = { configs: Maybe<{ meta: Maybe<Pick<ConfigsMeta, 'email'>>, config: Maybe<Pick<ConfigsConfig, 'skillsTop'>> }>, gcms: { skills: Array<Maybe<Pick<Gcms_Skill, 'xAxisDesktop' | 'xAxisMobile' | 'yAxisDesktop' | 'yAxisMobile' | 'directionDesktop' | 'directionMobile' | 'id' | 'label'>>> } };

export type Unnamed_11_QueryVariables = {};


export type Unnamed_11_Query = { configs: Maybe<{ config: Maybe<Pick<ConfigsConfig, 'splashScreenDebug'>> }> };

export type Unnamed_12_QueryVariables = {};


export type Unnamed_12_Query = { site: Maybe<{ siteMetadata: Maybe<Pick<SiteSiteMetadata, 'site'>> }>, configs: Maybe<{ config: Maybe<Pick<ConfigsConfig, 'gridLines' | 'transportDuration' | 'mobileBreakpoint' | 'splashScreenDebug' | 'splashScreenTimeout'>> }> };

export type GatsbyImageSharpFixedFragment = Pick<ImageSharpFixed, 'base64' | 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyImageSharpFixed_TracedSvgFragment = Pick<ImageSharpFixed, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyImageSharpFixed_WithWebpFragment = Pick<ImageSharpFixed, 'base64' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

export type GatsbyImageSharpFixed_WithWebp_TracedSvgFragment = Pick<ImageSharpFixed, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

export type GatsbyImageSharpFixed_NoBase64Fragment = Pick<ImageSharpFixed, 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyImageSharpFixed_WithWebp_NoBase64Fragment = Pick<ImageSharpFixed, 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

export type GatsbyImageSharpFluidFragment = Pick<ImageSharpFluid, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyImageSharpFluid_TracedSvgFragment = Pick<ImageSharpFluid, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyImageSharpFluid_WithWebpFragment = Pick<ImageSharpFluid, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

export type GatsbyImageSharpFluid_WithWebp_TracedSvgFragment = Pick<ImageSharpFluid, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

export type GatsbyImageSharpFluid_NoBase64Fragment = Pick<ImageSharpFluid, 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyImageSharpFluid_WithWebp_NoBase64Fragment = Pick<ImageSharpFluid, 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

export type GatsbyImageSharpResolutionsFragment = Pick<ImageSharpResolutions, 'base64' | 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyImageSharpResolutions_TracedSvgFragment = Pick<ImageSharpResolutions, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyImageSharpResolutions_WithWebpFragment = Pick<ImageSharpResolutions, 'base64' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

export type GatsbyImageSharpResolutions_WithWebp_TracedSvgFragment = Pick<ImageSharpResolutions, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

export type GatsbyImageSharpResolutions_NoBase64Fragment = Pick<ImageSharpResolutions, 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyImageSharpResolutions_WithWebp_NoBase64Fragment = Pick<ImageSharpResolutions, 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

export type GatsbyImageSharpSizesFragment = Pick<ImageSharpSizes, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyImageSharpSizes_TracedSvgFragment = Pick<ImageSharpSizes, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyImageSharpSizes_WithWebpFragment = Pick<ImageSharpSizes, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

export type GatsbyImageSharpSizes_WithWebp_TracedSvgFragment = Pick<ImageSharpSizes, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

export type GatsbyImageSharpSizes_NoBase64Fragment = Pick<ImageSharpSizes, 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyImageSharpSizes_WithWebp_NoBase64Fragment = Pick<ImageSharpSizes, 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;
