export default {
  CreateApp: "span[class='bp3-button-text']",
  searchInput: "input[type='text']",
  appEditIcon: ".t--application-edit-link",
  publishButton: ".t--application-publish-btn",
  shareButton: ".t--application-share-btn",
  deployPopupOptionTrigger: ".t--deploy-popup-option-trigger",
  currentDeployedPreviewBtn: ".t--current-deployed-preview-btn",
  publishCrossButton: "span[icon='small-cross']",
  homePageID: "//div[@id='root']",
  appMoreIcon: ".t--application-card .ads-v2-button__content",
  forkAppFromMenu: "[data-testid=t--fork-app]",
  exportAppFromMenu: "[data-testid=t--export-app]",
  forkAppWorkspaceButton: ".t--fork-app-to-workspace-button",
  selectAction: "#Base",
  deleteApp: "[data-testid=t--delete]",
  createNewAppButton: ".t--new-button",
  deleteAppConfirm: "[data-testid=t--delete-confirm]",
  homeIcon: ".t--appsmith-logo",
  inputAppName: "input[name=applicationName]",
  createNew: ".createnew",
  createWorkspace: "[data-testid=t--workspace-new-workspace-auto-create]",
  inputWorkspaceName: "//input[@name='name']",
  submitBtn: "//span[text()='Submit']",
  workspaceMenu: "//span[text()='TestShareWorkspace']",
  members: "//span[contains(text(),'Members')]",
  share: "//span[contains(text(),'Share')]",
  WorkspaceSettings: "//span[contains(text(),'Workspace Settings')]",
  MemberSettings: "//span[contains(text(),'Members')]",
  inviteUser: "//span[text()='Invite Users']",
  inviteUserMembersPage: "[data-testid=t--page-header-input]",
  email: "//input[@type='email']",
  selectRole: "[data-testid='t--invite-role-input']",
  adminRole: `//div[contains(@class, 'rc-select-item-option-content')]//span[1][text()='Administrator']`,
  viewerRole:
    "//div[contains(@class, 'rc-select-item-option-content')]//span[1][text()='App Viewer']",
  developerRole:
    "//div[contains(@class, 'rc-select-item-option-content')]//span[1][text()='Developer']",
  inviteBtn: "//button//span[text()='Invite']",
  manageUsers: ".manageUsers",
  DeleteBtn: "[data-testid=t--deleteUser]",
  ShareBtn: "//button//span[2][text()='Share']",
  launchBtn: "//span[text()='Launch']",
  appView: ".t--application-view-link",
  applicationCard: ".t--application-card",
  appsContainer: ".t--applications-container",
  appHome: "//a[@href='/applications']",
  emailList: "[data-colindex='0']",
  workspaceList: ".t--workspace-section:contains(",
  workspaceSectionBtn: ".t--workspace-section .bp3-button",
  shareWorkspace: ") button:contains('Share')",
  workspaceSection: "a:contains(",
  createAppFrWorkspace: ") .t--new-button",
  shareApp: ".t--application-share-btn",
  enablePublicAccess:
    "//div[contains(@class, 't--share-public-toggle')]//input[@role='switch']",
  enablePublicAccessSettingsPage: "[data-testid=t--embed-settings-application-public]",
  switchLabel: ".ads-v2-switch__label",
  closeBtn: ".ads-v2-modal__content-header-close-button",
  editModeInviteModalCloseBtn: ".ads-v2-modal__content-header-close-button",
  applicationName: ".t--application-name",
  applicationEditMenu: ".ads-v2-menu__menu-item-children",
  editingAppName: "bp3-editable-text-editing",
  portalMenuItem: ".ads-v2-menu__menu-item-children",
  profileMenu: ".t--profile-menu-icon",
  signOutIcon: ".t--sign-out",
  headerAppSmithLogo: ".t--Appsmith-logo-image",
  applicationCardName: "[data-testid=t--app-card-name]",
  applicationIconSelector: ".t--icon-not-selected",
  applicationColorSelector: ".t--color-not-selected",
  applicationBackgroundColor: ".t--application-card-background",
  workspaceSettingOption: "[data-testid=t--workspace-setting]",
  workspaceImportAppOption: "[data-testid=t--workspace-import-app]",
  workspaceImportAppModal: ".t--import-application-modal",
  workspaceImportAppButton: "[data-testid=t--workspace-import-app-button]",
  leaveWorkspaceConfirmModal: ".t--member-delete-confirmation-modal",
  leaveWorkspaceConfirmButton: "[data-testid=t--workspace-leave-button]",
  workspaceNameInput: "[data-testid=t--workspace-name-input]",
  renameWorkspaceInput: ".t--workspace-rename-input",
  workspaceEmailInput: "[data-testid=t--workspace-email-input]",
  workspaceWebsiteInput: "[data-testid=t--workspace-website-input]",
  workspaceHeaderName: "[data-testid='t--page-title']",
  leftPanelContainer: "[data-testid=t--left-panel]",
  themeText: "label div",
  shareUserIcons: ".t--workspace-share-user-icons",
  toastMessage: "div.Toastify__toast",
  uploadLogo: "//div/form/input",
  removeLogo: "[data-testid=t--remove-logo]",
  generalTab: "//li//span[text()='General']",
  membersTab: "//li//span[text()='Members']",
  cancelBtn: "//span[text()='Cancel']",
  submit: "button:contains('Submit')",
  workspaceNamePopover: ".ads-v2-button__content-icon-start",
  workspaceNamePopoverContent: ".ads-v2-menu",
  workspaceCompleteSection: ".t--workspace-section",
  workspaceNameText: ".t--workspace-name-text",
  workspaceHeading: "//span[text()='Workspaces']",
  optionsIcon: ".t--options-icon",
  reconnectDatasourceModal: "[data-testid='reconnect-datasource-modal']",
  importAppProgressWrapper: ".t-import-app-progress-wrapper",
  backtoHome: ".t--app-viewer-back-to-apps-button",
  newButtonCreateApplication: "[data-testid=t--workspace-action-create-app]",
  helpButton:".t--help-menu-option",
  noEntityFound:".no-search-results",
  initialWorkspace:"[data-testid^='Untitled workspace']",
  initialApplication:"[data-testid^='Untitled application']",
  _entitySearchBar:"[data-testid='t--application-search-input']"
};
