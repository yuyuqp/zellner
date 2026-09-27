/**
 * Declarative VS Code Theme Template for the 2026 Light Architecture.
 * Maps workbench UI keys, TextMate token rules, and semantic token rules
 * to abstract semantic expressions resolved by `scripts/expand-theme.js`.
 */

export const REFERENCE_ANCHORS = {
  '$accent.primary': '#0069CC',
  '$status.error': '#AD0707',
  '$status.warning': '#667309',
  '$status.success': '#587C0C',
  '$ui.surface': '#FAFAFD'
};

export const WORKBENCH_COLOR_TEMPLATE = {
  "checkbox.border": "gray(86)",
  "editor.background": "$ui.background",
  "editor.foreground": "$ui.foreground",
  "editorGroupHeader.connectedTabsBackground": "$ui.surfaceElevated",
  "editor.inactiveSelectionBackground": "$accent.primary/1A",
  "editorIndentGuide.background1": "gray(F7)/40",
  "editorIndentGuide.activeBackground1": "gray(EE)",
  "editor.selectionHighlightBackground": "$accent.primary/15",
  "editorSuggestWidget.background": "$ui.surface",
  "activityBarBadge.background": "$accent.primary",
  "browser.border": "$ui.contrast/00",
  "sideBarTitle.foreground": "$ui.foreground",
  "list.hoverBackground": "$ui.contrast/14",
  "menu.border": "$ui.borderDefault",
  "input.placeholderForeground": "$ui.foregroundSubtle",
  "searchEditor.textInputBorder": "gray(CE)",
  "settings.textInputBorder": "gray(CE)",
  "settings.numberInputBorder": "gray(CE)",
  "statusBarItem.remoteForeground": "$ui.background",
  "statusBarItem.remoteBackground": "$accent.secondary",
  "statusBar.inactiveBackground": "$ui.surface",
  "ports.iconRunningProcessForeground": "derive($status.success,#369432)",
  "sideBarSectionHeader.background": "$ui.surface",
  "sideBarSectionHeader.border": "$ui.borderSubtle",
  "tab.selectedForeground": "gray(33)",
  "tab.inactiveForeground": "$ui.foregroundMuted",
  "tab.selectedBackground": "derive($accent.primary,#E4E6F1)",
  "tab.lastPinnedBorder": "$ui.borderSubtle",
  "notebook.cellBorderColor": "gray(E5)",
  "notebook.selectedCellBackground": "derive($accent.primary,#C8DDF1)/50",
  "statusBarItem.errorBackground": "derive($status.error,#C72E0F)",
  "list.activeSelectionIconForeground": "$ui.contrast",
  "list.focusAndSelectionOutline": "$accent.secondary",
  "terminal.inactiveSelectionBackground": "derive($accent.primary,#E5EBF1)",
  "widget.border": "derive($ui.surface,#E2E2E5)",
  "actionBar.toggledBackground": "gray(DD):lower",
  "diffEditor.unchangedRegionBackground": "gray(F8):lower",
  "agentsNewSessionButton.border": "$ui.borderControl",
  "agentsChatInput.border": "$ui.borderControl",
  "agentsPanel.border": "$ui.borderDefault/AA",
  "surface.border": "$ui.borderDefault",
  "modernActivityBarItem.activeBackground": "derive($accent.primary,#E4E6F1):lower",
  "modernActivityBarItem.hoverBackground": "gray(F2)",
  "modernActivityBarItem.activeForeground": "gray(3B)",
  "modernActivityBarItem.hoverForeground": "gray(3B)",
  "modernActivityBar.border": "gray(E5)",
  "titleBar.inactiveBackground": "$ui.surface",
  "activityBar.activeBorder": "$ui.contrast",
  "activityBar.background": "$ui.surface",
  "activityBar.border": "$ui.borderSubtle",
  "activityBar.foreground": "$ui.foreground",
  "activityBar.inactiveForeground": "$ui.foregroundMuted",
  "activityBarBadge.foreground": "$ui.background",
  "badge.background": "$accent.primary",
  "badge.foreground": "$ui.background",
  "button.background": "$accent.primary",
  "button.border": "$accent.primary",
  "button.foreground": "$ui.background",
  "button.hoverBackground": "derive($accent.primary,#0063C1)",
  "button.secondaryBackground": "$ui.surfaceElevated",
  "button.secondaryForeground": "$ui.foreground",
  "button.secondaryHoverBackground": "derive($ui.surface,#F2F3F4)",
  "chat.slashCommandBackground": "derive($accent.primary,#ADCEFF)/7A",
  "chat.slashCommandForeground": "derive($accent.primary,#26569E)",
  "chat.editedFileForeground": "$status.warningIcon",
  "checkbox.background": "$ui.surfaceElevated",
  "descriptionForeground": "$ui.foregroundMuted",
  "dropdown.background": "$ui.background",
  "dropdown.border": "$ui.borderControl",
  "dropdown.foreground": "$ui.foreground",
  "dropdown.listBackground": "$ui.background",
  "editorGroup.border": "gray(E5)",
  "editorGroupHeader.tabsBackground": "$ui.surface",
  "editorGroupHeader.tabsBorder": "$ui.borderSubtle",
  "editorGutter.addedBackground": "$status.success",
  "editorGutter.deletedBackground": "$status.error",
  "editorGutter.modifiedBackground": "$accent.secondary",
  "editorLineNumber.activeForeground": "$ui.foreground",
  "editorLineNumber.foreground": "$ui.foregroundMuted",
  "editorOverviewRuler.border": "$ui.borderSubtle",
  "editorWidget.background": "$ui.surface",
  "errorForeground": "$status.error",
  "focusBorder": "$accent.primary",
  "foreground": "$ui.foreground",
  "icon.foreground": "$ui.foregroundMuted",
  "input.background": "$ui.background",
  "input.border": "$ui.borderControl/66",
  "input.foreground": "$ui.foreground",
  "inputOption.activeBackground": "gray(D6)",
  "inputOption.activeBorder": "$ui.borderSubtle",
  "inputOption.activeForeground": "$ui.foreground",
  "keybindingLabel.foreground": "gray(3B)",
  "list.activeSelectionBackground": "$ui.contrast/25",
  "list.activeSelectionForeground": "$ui.foreground",
  "menu.selectionBackground": "$accent.primary/1A",
  "menu.selectionForeground": "$ui.foreground",
  "notificationCenterHeader.background": "$ui.surface",
  "notificationCenterHeader.foreground": "$ui.foreground",
  "notifications.background": "$ui.surface",
  "notifications.border": "$ui.borderSubtle",
  "notifications.foreground": "$ui.foreground",
  "panel.background": "$ui.surface",
  "panel.border": "$ui.borderSubtle",
  "panelInput.border": "gray(E5)",
  "panelTitle.activeBorder": "$ui.contrast",
  "panelTitle.activeForeground": "$ui.foreground",
  "panelTitle.inactiveForeground": "$ui.foregroundMuted",
  "peekViewEditor.matchHighlightBackground": "$accent.primary/33",
  "peekViewResult.background": "$ui.surface",
  "peekViewResult.matchHighlightBackground": "$accent.primary/33",
  "pickerGroup.border": "derive($ui.surface,#EEEEF1)",
  "pickerGroup.foreground": "$ui.foreground",
  "progressBar.background": "$accent.primary",
  "quickInput.background": "$ui.surface",
  "quickInput.foreground": "$ui.foreground",
  "settings.dropdownBackground": "$ui.background",
  "settings.dropdownBorder": "gray(CE)",
  "settings.headerForeground": "gray(1F)",
  "settings.modifiedItemIndicator": "derive($status.warning,#BB8009)/66",
  "sideBar.background": "$ui.surface",
  "sideBar.border": "$ui.borderSubtle",
  "sideBar.foreground": "$ui.foreground",
  "sideBarSectionHeader.foreground": "$ui.foreground",
  "statusBar.background": "$ui.surface",
  "statusBar.foreground": "$ui.foregroundMuted",
  "statusBar.border": "$ui.borderSubtle",
  "statusBarItem.hoverBackground": "derive($ui.surface,#E3E3E5)",
  "statusBarItem.hoverForeground": "$ui.contrast",
  "statusBarItem.compactHoverBackground": "gray(CC)",
  "statusBar.debuggingBackground": "$accent.primary",
  "statusBar.debuggingForeground": "$ui.background",
  "statusBar.focusBorder": "$accent.primary",
  "statusBar.noFolderBackground": "derive($ui.surface,#F0F0F3)",
  "statusBarItem.focusBorder": "$accent.primary",
  "statusBarItem.prominentBackground": "$accent.primary/DD",
  "tab.activeBackground": "$ui.background",
  "tab.activeBorder": "$ui.background",
  "tab.activeBorderTop": "$ui.contrast",
  "tab.activeForeground": "$ui.foreground",
  "tab.selectedBorderTop": "derive($accent.primary,#68A3DA):lower",
  "tab.border": "$ui.borderSubtle",
  "tab.hoverBackground": "$ui.background",
  "tab.inactiveBackground": "$ui.surface",
  "tab.unfocusedActiveBorder": "gray(F8)",
  "tab.unfocusedActiveBorderTop": "gray(E5)",
  "tab.unfocusedHoverBackground": "gray(F8)",
  "terminalCursor.foreground": "$ui.foreground",
  "terminal.foreground": "gray(3B)",
  "terminal.tab.activeBorder": "$accent.secondary",
  "textBlockQuote.background": "$ui.surfaceElevated",
  "textBlockQuote.border": "$ui.borderSubtle",
  "textCodeBlock.background": "$ui.surfaceElevated",
  "textLink.activeForeground": "$accent.primary",
  "textLink.foreground": "$accent.primary",
  "textPreformat.foreground": "$ui.foregroundMuted",
  "textPreformat.background": "gray(EC)",
  "textSeparator.foreground": "gray(EE)",
  "titleBar.activeBackground": "$ui.surface",
  "titleBar.activeForeground": "$ui.foregroundMuted",
  "titleBar.border": "$ui.borderSubtle",
  "titleBar.inactiveForeground": "$ui.foregroundMuted",
  "welcomePage.tileBackground": "gray(F3)",
  "disabledForeground": "$ui.foregroundDisabled",
  "button.secondaryBorder": "$ui.surfaceElevated",
  "checkbox.foreground": "$ui.foregroundMuted",
  "inputValidation.infoBackground": "derive($accent.primary,#E6F2FA)",
  "inputValidation.infoBorder": "$accent.primary",
  "inputValidation.infoForeground": "$ui.foreground",
  "inputValidation.warningBackground": "derive($status.warning,#FDF6E3)",
  "inputValidation.warningBorder": "derive($status.warning,#B69500)",
  "inputValidation.warningForeground": "$ui.foreground",
  "inputValidation.errorBackground": "derive($status.error,#FDEDED)",
  "inputValidation.errorBorder": "$status.error",
  "inputValidation.errorForeground": "$ui.foreground",
  "scrollbar.shadow": "$ui.contrast/00",
  "widget.shadow": "$ui.contrast/00",
  "editorStickyScroll.shadow": "$ui.contrast/00",
  "editorStickyScrollHover.background": "derive($ui.surface,#F0F0F3)",
  "editorStickyScroll.border": "$ui.borderSubtle",
  "sideBarStickyScroll.shadow": "$ui.contrast/00",
  "panelStickyScroll.shadow": "$ui.contrast/00",
  "listFilterWidget.shadow": "$ui.contrast/00",
  "scrollbarSlider.background": "gray(64)/C0",
  "scrollbarSlider.hoverBackground": "gray(64)/D0",
  "scrollbarSlider.activeBackground": "gray(64)/E0",
  "list.inactiveSelectionBackground": "gray(DA)/99",
  "list.inactiveSelectionForeground": "$ui.foreground",
  "list.hoverForeground": "$ui.foreground",
  "list.dropBackground": "$accent.primary/15",
  "list.focusBackground": "$ui.contrast/25",
  "list.focusForeground": "$ui.foreground",
  "list.focusOutline": "$accent.primary",
  "list.highlightForeground": "$accent.primary",
  "list.invalidItemForeground": "$ui.foregroundDisabled",
  "list.errorForeground": "$status.error",
  "list.warningForeground": "$status.warning",
  "activityBar.activeBackground": "gray(D6)",
  "activityBar.activeFocusBorder": "$accent.primary",
  "activityBarTop.activeBorder": "$ui.contrast",
  "menubar.selectionBackground": "$ui.surfaceElevated",
  "menubar.selectionForeground": "$ui.foreground",
  "menu.background": "$ui.surface",
  "menu.foreground": "$ui.foreground",
  "menu.selectionBorder": "$accent.primary",
  "menu.separatorBackground": "derive($ui.surface,#EEEEF1)",
  "commandCenter.foreground": "$ui.foreground",
  "commandCenter.activeForeground": "$ui.foreground",
  "commandCenter.background": "$ui.background",
  "commandCenter.activeBackground": "gray(DA)/4f",
  "commandCenter.border": "$ui.borderControl/AA",
  "editorCursor.foreground": "$ui.foreground",
  "editor.selectionBackground": "$accent.primary/40",
  "editor.wordHighlightBackground": "$accent.primary/26",
  "editor.wordHighlightStrongBackground": "$accent.primary/26",
  "editor.findMatchBackground": "$accent.primary/40",
  "editor.findMatchHighlightBackground": "$accent.primary/1A",
  "editor.findRangeHighlightBackground": "$ui.contrast/15",
  "editor.hoverHighlightBackground": "$ui.contrast/15",
  "editor.lineHighlightBackground": "$ui.surfaceElevated/40",
  "editor.rangeHighlightBackground": "$ui.contrast/15",
  "editorLink.activeForeground": "$accent.primary",
  "editorWhitespace.foreground": "$ui.foregroundMuted/40",
  "editorRuler.foreground": "gray(F7)",
  "editorCodeLens.foreground": "$ui.foregroundMuted",
  "editorBracketMatch.background": "$accent.primary/40",
  "editorBracketMatch.border": "$ui.borderSubtle",
  "editorWidget.border": "$ui.borderDefault",
  "editorWidget.foreground": "$ui.foreground",
  "editorSuggestWidget.border": "$ui.borderDefault",
  "editorSuggestWidget.foreground": "$ui.foreground",
  "editorSuggestWidget.highlightForeground": "$accent.primary",
  "editorSuggestWidget.selectedBackground": "$ui.contrast/25",
  "editorSuggestWidget.selectedForeground": "$ui.foreground",
  "editorSuggestWidget.selectedIconForeground": "$ui.foreground",
  "editorSuggestWidget.focusOutline": "$accent.primary",
  "editorHoverWidget.background": "$ui.surface",
  "editorHoverWidget.border": "$ui.borderDefault",
  "peekView.border": "$accent.primary",
  "peekViewEditor.background": "$ui.surface",
  "peekViewResult.fileForeground": "$ui.foreground",
  "peekViewResult.lineForeground": "$ui.foregroundMuted",
  "peekViewResult.selectionBackground": "$accent.primary/26",
  "peekViewResult.selectionForeground": "$ui.foreground",
  "peekViewTitle.background": "$ui.surface",
  "peekViewTitleDescription.foreground": "$ui.foregroundMuted",
  "peekViewTitleLabel.foreground": "$ui.foreground",
  "diffEditor.insertedTextBackground": "$status.success/26",
  "diffEditor.removedTextBackground": "$status.error/26",
  "editorOverviewRuler.findMatchForeground": "$accent.primary/99",
  "editorOverviewRuler.modifiedForeground": "$accent.primary",
  "editorOverviewRuler.addedForeground": "$status.success",
  "editorOverviewRuler.deletedForeground": "$status.error",
  "editorOverviewRuler.errorForeground": "$status.error",
  "editorOverviewRuler.warningForeground": "$status.warning",
  "editorGutter.background": "$ui.background",
  "panelSection.border": "$ui.borderDefault",
  "panelSectionHeader.border": "$ui.borderDefault",
  "statusBar.noFolderForeground": "$ui.foregroundMuted",
  "statusBarItem.activeBackground": "gray(EE)",
  "statusBarItem.prominentForeground": "$ui.background",
  "statusBarItem.prominentHoverBackground": "$accent.primary",
  "toolbar.hoverBackground": "$ui.contrast/1F",
  "toolbar.activeBackground": "derive($ui.surface,#D6D6D8)",
  "tab.hoverForeground": "$ui.foreground",
  "tab.unfocusedActiveBackground": "$ui.surface",
  "tab.unfocusedActiveForeground": "$ui.foregroundMuted",
  "tab.unfocusedInactiveBackground": "$ui.surface",
  "tab.unfocusedInactiveForeground": "$ui.foregroundDisabled",
  "breadcrumb.foreground": "$ui.foregroundMuted",
  "breadcrumb.background": "$ui.background",
  "breadcrumb.focusForeground": "$ui.foreground",
  "breadcrumb.activeSelectionForeground": "$ui.foreground",
  "breadcrumbPicker.background": "$ui.surface",
  "notificationCenter.border": "$ui.borderSubtle",
  "notificationToast.border": "$ui.borderSubtle",
  "notificationLink.foreground": "$accent.primary",
  "notificationsWarningIcon.foreground": "derive($status.warning,#B69500)",
  "notificationsErrorIcon.foreground": "$status.error",
  "notificationsInfoIcon.foreground": "$accent.primary",
  "problemsWarningIcon.foreground": "$status.warningIcon",
  "activityWarningBadge.foreground": "$ui.foreground",
  "activityWarningBadge.background": "derive($status.warning,#F2C94C)",
  "activityErrorBadge.foreground": "$ui.background",
  "activityErrorBadge.background": "$status.error",
  "extensionButton.prominentBackground": "$accent.primary",
  "extensionButton.prominentForeground": "$ui.background",
  "extensionButton.prominentHoverBackground": "derive($accent.primary,#0064CC)",
  "quickInputList.focusBackground": "$accent.primary",
  "quickInputList.focusForeground": "$ui.background",
  "quickInputList.focusIconForeground": "$ui.background",
  "quickInputList.focusHighlightForeground": "$ui.background",
  "terminal.selectionBackground": "$accent.primary/26",
  "terminalCursor.background": "$ui.background",
  "gitDecoration.addedResourceForeground": "$status.success",
  "gitDecoration.modifiedResourceForeground": "$status.warning",
  "gitDecoration.deletedResourceForeground": "$status.error",
  "gitDecoration.untrackedResourceForeground": "$status.success",
  "gitDecoration.ignoredResourceForeground": "derive($ui.surface,#8E8E90)",
  "gitDecoration.conflictingResourceForeground": "$status.error",
  "gitDecoration.stageModifiedResourceForeground": "$status.warning",
  "gitDecoration.stageDeletedResourceForeground": "$status.error",
  "commandCenter.activeBorder": "$ui.borderControl",
  "statusBarItem.prominentHoverForeground": "$ui.background",
  "quickInputTitle.background": "$ui.surface",
  "chat.requestBubbleBackground": "$accent.primary/12",
  "chat.requestBubbleHoverBackground": "$accent.primary/19",
  "chat.thinkingShimmer": "$ui.foregroundSubtle",
  "chat.inputWorkingBorderColor1": "$accent.primary",
  "editorCommentsWidget.rangeBackground": "derive($accent.primary,#EEF4FB)",
  "editorCommentsWidget.rangeActiveBackground": "derive($accent.primary,#E6EDFA)",
  "charts.foreground": "$ui.foreground",
  "charts.lines": "$ui.foreground/66",
  "charts.blue": "$status.charts.blue",
  "charts.red": "$status.error",
  "charts.yellow": "$status.warning",
  "charts.orange": "$status.charts.orange",
  "charts.green": "$status.charts.green",
  "charts.purple": "$status.charts.purple",
  "agentStatusIndicator.background": "$ui.background",
  "inlineChat.border": "$ui.contrast/00",
  "minimapSlider.background": "gray(64)/C0",
  "minimapSlider.hoverBackground": "gray(64)/D0",
  "minimapSlider.activeBackground": "gray(64)/E0",
  "agents.background": "$ui.surface",
  "agentsPanel.background": "$ui.background",
  "agentsPanel.foreground": "$ui.foreground",
  "surface.background": "$ui.background",
  "surface.foreground": "$ui.foreground",
  "agentsGradient.tintColor": "$accent.primary",
  "agentsChatInput.background": "derive($ui.surface,#F7F7FA)",
  "agentsChatInput.foreground": "$ui.foreground",
  "agentsChatInput.focusBorder": "$accent.primary",
  "agentsChatInput.placeholderForeground": "$ui.foregroundSubtle",
  "agentsNewSessionButton.background": "$ui.contrast/00",
  "agentsNewSessionButton.foreground": "$ui.foreground",
  "agentsNewSessionButton.hoverBackground": "$ui.contrast/10",
  "agentsBadge.background": "$accent.primary",
  "agentsBadge.foreground": "$ui.background",
  "agentsUnreadBadge.background": "$accent.primary",
  "agentsUnreadBadge.foreground": "$ui.background"
};

export const TOKEN_COLOR_TEMPLATE = [
  {
    "scope": [
      "meta.embedded",
      "source.groovy.embedded",
      "string meta.image.inline.markdown",
      "variable.legacy.builtin.python"
    ],
    "settings": {
      "foreground": "$ui.contrast/ff"
    }
  },
  {
    "scope": "emphasis",
    "settings": {
      "fontStyle": "italic"
    }
  },
  {
    "scope": "strong",
    "settings": {
      "fontStyle": "bold"
    }
  },
  {
    "scope": "meta.diff.header",
    "settings": {
      "foreground": "$syntax.base.header"
    }
  },
  {
    "scope": "comment",
    "settings": {
      "foreground": "$syntax.base.comment"
    }
  },
  {
    "scope": "constant.language",
    "settings": {
      "foreground": "$syntax.base.keyword"
    }
  },
  {
    "scope": [
      "constant.numeric",
      "variable.other.enummember",
      "keyword.operator.plus.exponent",
      "keyword.operator.minus.exponent"
    ],
    "settings": {
      "foreground": "$syntax.base.number"
    }
  },
  {
    "scope": "constant.regexp",
    "settings": {
      "foreground": "$syntax.base.regexp"
    }
  },
  {
    "name": "css tags in selectors, xml tags",
    "scope": "entity.name.tag",
    "settings": {
      "foreground": "$syntax.base.tag"
    }
  },
  {
    "scope": "entity.name.selector",
    "settings": {
      "foreground": "$syntax.base.tag"
    }
  },
  {
    "scope": "entity.other.attribute-name",
    "settings": {
      "foreground": "$syntax.base.attribute"
    }
  },
  {
    "scope": [
      "entity.other.attribute-name.class.css",
      "source.css entity.other.attribute-name.class",
      "entity.other.attribute-name.id.css",
      "entity.other.attribute-name.parent-selector.css",
      "entity.other.attribute-name.parent.less",
      "source.css entity.other.attribute-name.pseudo-class",
      "entity.other.attribute-name.pseudo-element.css",
      "source.css.less entity.other.attribute-name.id",
      "entity.other.attribute-name.scss"
    ],
    "settings": {
      "foreground": "$syntax.base.tag"
    }
  },
  {
    "scope": "invalid",
    "settings": {
      "foreground": "$syntax.base.invalid"
    }
  },
  {
    "scope": "markup.underline",
    "settings": {
      "fontStyle": "underline"
    }
  },
  {
    "scope": "markup.bold",
    "settings": {
      "fontStyle": "bold",
      "foreground": "$syntax.base.header"
    }
  },
  {
    "scope": "markup.heading",
    "settings": {
      "fontStyle": "bold",
      "foreground": "$syntax.base.tag"
    }
  },
  {
    "scope": "markup.italic",
    "settings": {
      "fontStyle": "italic",
      "foreground": "$syntax.base.italic"
    }
  },
  {
    "scope": "markup.strikethrough",
    "settings": {
      "fontStyle": "strikethrough"
    }
  },
  {
    "scope": "markup.inserted",
    "settings": {
      "foreground": "$syntax.base.number"
    }
  },
  {
    "scope": "markup.deleted",
    "settings": {
      "foreground": "$syntax.base.string"
    }
  },
  {
    "scope": "markup.changed",
    "settings": {
      "foreground": "$syntax.base.property"
    }
  },
  {
    "scope": [
      "punctuation.definition.quote.begin.markdown",
      "punctuation.definition.list.begin.markdown"
    ],
    "settings": {
      "foreground": "$syntax.base.property"
    }
  },
  {
    "scope": "markup.inline.raw",
    "settings": {
      "foreground": "$syntax.base.tag"
    }
  },
  {
    "name": "brackets of XML/HTML tags",
    "scope": "punctuation.definition.tag",
    "settings": {
      "foreground": "$syntax.base.tag"
    }
  },
  {
    "scope": [
      "meta.preprocessor",
      "entity.name.function.preprocessor"
    ],
    "settings": {
      "foreground": "$syntax.base.keyword"
    }
  },
  {
    "scope": "meta.preprocessor.string",
    "settings": {
      "foreground": "$syntax.base.string"
    }
  },
  {
    "scope": "meta.preprocessor.numeric",
    "settings": {
      "foreground": "$syntax.base.number"
    }
  },
  {
    "scope": "meta.structure.dictionary.key.python",
    "settings": {
      "foreground": "$syntax.base.property"
    }
  },
  {
    "scope": "storage",
    "settings": {
      "foreground": "$syntax.base.keyword"
    }
  },
  {
    "scope": "storage.type",
    "settings": {
      "foreground": "$syntax.base.keyword"
    }
  },
  {
    "scope": [
      "storage.modifier",
      "keyword.operator.noexcept"
    ],
    "settings": {
      "foreground": "$syntax.base.keyword"
    }
  },
  {
    "scope": [
      "string",
      "meta.embedded.assembly"
    ],
    "settings": {
      "foreground": "$syntax.base.string"
    }
  },
  {
    "scope": [
      "string.comment.buffered.block.pug",
      "string.quoted.pug",
      "string.interpolated.pug",
      "string.unquoted.plain.in.yaml",
      "string.unquoted.plain.out.yaml",
      "string.unquoted.block.yaml",
      "string.quoted.single.yaml",
      "string.quoted.double.xml",
      "string.quoted.single.xml",
      "string.unquoted.cdata.xml",
      "string.quoted.double.html",
      "string.quoted.single.html",
      "string.unquoted.html",
      "string.quoted.single.handlebars",
      "string.quoted.double.handlebars"
    ],
    "settings": {
      "foreground": "$syntax.base.keyword"
    }
  },
  {
    "scope": "string.regexp",
    "settings": {
      "foreground": "$syntax.base.regexp"
    }
  },
  {
    "name": "String interpolation",
    "scope": [
      "punctuation.definition.template-expression.begin",
      "punctuation.definition.template-expression.end",
      "punctuation.section.embedded"
    ],
    "settings": {
      "foreground": "$syntax.base.keyword"
    }
  },
  {
    "name": "Reset JavaScript string interpolation expression",
    "scope": [
      "meta.template.expression"
    ],
    "settings": {
      "foreground": "$ui.contrast"
    }
  },
  {
    "scope": [
      "support.constant.property-value",
      "support.constant.font-name",
      "support.constant.media-type",
      "support.constant.media",
      "constant.other.color.rgb-value",
      "constant.other.rgb-value",
      "support.constant.color"
    ],
    "settings": {
      "foreground": "$syntax.base.property"
    }
  },
  {
    "scope": [
      "support.type.vendored.property-name",
      "support.type.property-name",
      "source.css variable",
      "source.coffee.embedded"
    ],
    "settings": {
      "foreground": "$syntax.base.attribute"
    }
  },
  {
    "scope": [
      "support.type.property-name.json"
    ],
    "settings": {
      "foreground": "$syntax.base.property"
    }
  },
  {
    "scope": "keyword",
    "settings": {
      "foreground": "$syntax.base.keyword"
    }
  },
  {
    "scope": "keyword.control",
    "settings": {
      "foreground": "$syntax.base.keyword"
    }
  },
  {
    "scope": "keyword.operator",
    "settings": {
      "foreground": "$ui.contrast"
    }
  },
  {
    "scope": [
      "keyword.operator.new",
      "keyword.operator.expression",
      "keyword.operator.cast",
      "keyword.operator.sizeof",
      "keyword.operator.alignof",
      "keyword.operator.typeid",
      "keyword.operator.alignas",
      "keyword.operator.instanceof",
      "keyword.operator.logical.python",
      "keyword.operator.wordlike"
    ],
    "settings": {
      "foreground": "$syntax.base.keyword"
    }
  },
  {
    "scope": "keyword.other.unit",
    "settings": {
      "foreground": "$syntax.base.number"
    }
  },
  {
    "scope": [
      "punctuation.section.embedded.begin.php",
      "punctuation.section.embedded.end.php"
    ],
    "settings": {
      "foreground": "$syntax.base.tag"
    }
  },
  {
    "scope": "support.function.git-rebase",
    "settings": {
      "foreground": "$syntax.base.property"
    }
  },
  {
    "scope": "constant.sha.git-rebase",
    "settings": {
      "foreground": "$syntax.base.number"
    }
  },
  {
    "name": "coloring of the Java import and package identifiers",
    "scope": [
      "storage.modifier.import.java",
      "variable.language.wildcard.java",
      "storage.modifier.package.java"
    ],
    "settings": {
      "foreground": "$ui.contrast"
    }
  },
  {
    "name": "this.self",
    "scope": "variable.language",
    "settings": {
      "foreground": "$syntax.base.keyword"
    }
  },
  {
    "name": "Function declarations",
    "scope": [
      "entity.name.function",
      "support.function",
      "support.constant.handlebars",
      "source.powershell variable.other.member",
      "entity.name.operator.custom-literal"
    ],
    "settings": {
      "foreground": "$syntax.plus.function"
    }
  },
  {
    "name": "Types declaration and references",
    "scope": [
      "support.class",
      "support.type",
      "entity.name.type",
      "entity.name.namespace",
      "entity.other.attribute",
      "entity.name.scope-resolution",
      "entity.name.class",
      "storage.type.numeric.go",
      "storage.type.byte.go",
      "storage.type.boolean.go",
      "storage.type.string.go",
      "storage.type.uintptr.go",
      "storage.type.error.go",
      "storage.type.rune.go",
      "storage.type.cs",
      "storage.type.generic.cs",
      "storage.type.modifier.cs",
      "storage.type.variable.cs",
      "storage.type.annotation.java",
      "storage.type.generic.java",
      "storage.type.java",
      "storage.type.object.array.java",
      "storage.type.primitive.array.java",
      "storage.type.primitive.java",
      "storage.type.token.java",
      "storage.type.groovy",
      "storage.type.annotation.groovy",
      "storage.type.parameters.groovy",
      "storage.type.generic.groovy",
      "storage.type.object.array.groovy",
      "storage.type.primitive.array.groovy",
      "storage.type.primitive.groovy"
    ],
    "settings": {
      "foreground": "$syntax.plus.type"
    }
  },
  {
    "name": "Types declaration and references, TS grammar specific",
    "scope": [
      "meta.type.cast.expr",
      "meta.type.new.expr",
      "support.constant.math",
      "support.constant.dom",
      "support.constant.json",
      "entity.other.inherited-class",
      "punctuation.separator.namespace.ruby"
    ],
    "settings": {
      "foreground": "$syntax.plus.type"
    }
  },
  {
    "name": "Control flow / Special keywords",
    "scope": [
      "keyword.control",
      "source.cpp keyword.operator.new",
      "source.cpp keyword.operator.delete",
      "keyword.other.using",
      "keyword.other.directive.using",
      "keyword.other.operator",
      "entity.name.operator"
    ],
    "settings": {
      "foreground": "$syntax.plus.controlKeyword"
    }
  },
  {
    "name": "Variable and parameter name",
    "scope": [
      "variable",
      "meta.definition.variable.name",
      "support.variable",
      "entity.name.variable",
      "constant.other.placeholder"
    ],
    "settings": {
      "foreground": "$syntax.plus.variable"
    }
  },
  {
    "name": "Constants and enums",
    "scope": [
      "variable.other.constant",
      "variable.other.enummember"
    ],
    "settings": {
      "foreground": "$syntax.plus.constant"
    }
  },
  {
    "name": "Object keys, TS grammar specific",
    "scope": [
      "meta.object-literal.key"
    ],
    "settings": {
      "foreground": "$syntax.plus.variable"
    }
  },
  {
    "name": "CSS property value",
    "scope": [
      "support.constant.property-value",
      "support.constant.font-name",
      "support.constant.media-type",
      "support.constant.media",
      "constant.other.color.rgb-value",
      "constant.other.rgb-value",
      "support.constant.color"
    ],
    "settings": {
      "foreground": "$syntax.base.property"
    }
  },
  {
    "name": "Regular expression groups",
    "scope": [
      "punctuation.definition.group.regexp",
      "punctuation.definition.group.assertion.regexp",
      "punctuation.definition.character-class.regexp",
      "punctuation.character.set.begin.regexp",
      "punctuation.character.set.end.regexp",
      "keyword.operator.negation.regexp",
      "support.other.parenthesis.regexp"
    ],
    "settings": {
      "foreground": "$syntax.plus.regexpGroup"
    }
  },
  {
    "scope": [
      "constant.character.character-class.regexp",
      "constant.other.character-class.set.regexp",
      "constant.other.character-class.regexp",
      "constant.character.set.regexp"
    ],
    "settings": {
      "foreground": "$syntax.base.regexp"
    }
  },
  {
    "scope": "keyword.operator.quantifier.regexp",
    "settings": {
      "foreground": "$ui.contrast"
    }
  },
  {
    "scope": [
      "keyword.operator.or.regexp",
      "keyword.control.anchor.regexp"
    ],
    "settings": {
      "foreground": "$syntax.plus.regexpEscape"
    }
  },
  {
    "scope": [
      "constant.character",
      "constant.other.option"
    ],
    "settings": {
      "foreground": "$syntax.base.keyword"
    }
  },
  {
    "scope": "constant.character.escape",
    "settings": {
      "foreground": "$syntax.plus.regexpEscape"
    }
  },
  {
    "scope": "entity.name.label",
    "settings": {
      "foreground": "$ui.contrast"
    }
  },
  {
    "scope": [
      "comment",
      "punctuation.definition.comment",
      "string.comment"
    ],
    "settings": {
      "foreground": "$syntax.primary.comment"
    }
  },
  {
    "scope": [
      "constant.other.placeholder",
      "constant.character"
    ],
    "settings": {
      "foreground": "$syntax.primary.keyword"
    }
  },
  {
    "scope": [
      "constant",
      "entity.name.constant",
      "variable.other.constant",
      "variable.other.enummember",
      "variable.language",
      "entity"
    ],
    "settings": {
      "foreground": "$syntax.primary.constant"
    }
  },
  {
    "scope": [
      "entity.name",
      "meta.export.default",
      "meta.definition.variable"
    ],
    "settings": {
      "foreground": "$syntax.primary.entity"
    }
  },
  {
    "scope": [
      "variable.parameter.function",
      "meta.jsx.children",
      "meta.block",
      "meta.tag.attributes",
      "entity.name.constant",
      "meta.object.member",
      "meta.embedded.expression"
    ],
    "settings": {
      "foreground": "$syntax.primary.foreground"
    }
  },
  {
    "scope": "entity.name.function",
    "settings": {
      "foreground": "$syntax.primary.function"
    }
  },
  {
    "scope": [
      "entity.name.tag",
      "support.class.component"
    ],
    "settings": {
      "foreground": "$syntax.primary.tag"
    }
  },
  {
    "scope": "keyword",
    "settings": {
      "foreground": "$syntax.primary.keyword"
    }
  },
  {
    "scope": [
      "storage",
      "storage.type"
    ],
    "settings": {
      "foreground": "$syntax.primary.keyword"
    }
  },
  {
    "scope": [
      "storage.modifier.package",
      "storage.modifier.import",
      "storage.type.java"
    ],
    "settings": {
      "foreground": "$syntax.primary.foreground"
    }
  },
  {
    "scope": [
      "string",
      "string punctuation.section.embedded source"
    ],
    "settings": {
      "foreground": "$syntax.primary.string"
    }
  },
  {
    "scope": "support",
    "settings": {
      "foreground": "$syntax.primary.constant"
    }
  },
  {
    "scope": "meta.property-name",
    "settings": {
      "foreground": "$syntax.primary.constant"
    }
  },
  {
    "scope": "variable",
    "settings": {
      "foreground": "$syntax.primary.entity"
    }
  },
  {
    "scope": "variable.other",
    "settings": {
      "foreground": "$syntax.primary.foreground"
    }
  },
  {
    "scope": "invalid.broken",
    "settings": {
      "fontStyle": "italic",
      "foreground": "$syntax.primary.invalid"
    }
  },
  {
    "scope": "invalid.deprecated",
    "settings": {
      "fontStyle": "italic",
      "foreground": "$syntax.primary.invalid"
    }
  },
  {
    "scope": "invalid.illegal",
    "settings": {
      "fontStyle": "italic",
      "foreground": "$syntax.primary.invalid"
    }
  },
  {
    "scope": "invalid.unimplemented",
    "settings": {
      "fontStyle": "italic",
      "foreground": "$syntax.primary.invalid"
    }
  },
  {
    "scope": "carriage-return",
    "settings": {
      "fontStyle": "italic underline",
      "foreground": "$syntax.primary.carriageReturnBg"
    }
  },
  {
    "scope": "message.error",
    "settings": {
      "foreground": "$syntax.primary.invalid"
    }
  },
  {
    "scope": "string variable",
    "settings": {
      "foreground": "$syntax.primary.constant"
    }
  },
  {
    "scope": [
      "source.regexp",
      "string.regexp"
    ],
    "settings": {
      "foreground": "$syntax.primary.string"
    }
  },
  {
    "scope": [
      "string.regexp.character-class",
      "string.regexp constant.character.escape",
      "string.regexp source.ruby.embedded",
      "string.regexp string.regexp.arbitrary-repitition"
    ],
    "settings": {
      "foreground": "$syntax.primary.string"
    }
  },
  {
    "scope": "string.regexp constant.character.escape",
    "settings": {
      "fontStyle": "bold",
      "foreground": "$syntax.primary.tag"
    }
  },
  {
    "scope": "support.constant",
    "settings": {
      "foreground": "$syntax.primary.constant"
    }
  },
  {
    "scope": "support.variable",
    "settings": {
      "foreground": "$syntax.primary.constant"
    }
  },
  {
    "scope": "support.type.property-name.json",
    "settings": {
      "foreground": "$syntax.primary.tag"
    }
  },
  {
    "scope": "meta.module-reference",
    "settings": {
      "foreground": "$syntax.primary.constant"
    }
  },
  {
    "scope": "punctuation.definition.list.begin.markdown",
    "settings": {
      "foreground": "$syntax.primary.entity"
    }
  },
  {
    "scope": [
      "markup.heading",
      "markup.heading entity.name"
    ],
    "settings": {
      "fontStyle": "bold",
      "foreground": "$syntax.primary.constant"
    }
  },
  {
    "scope": "markup.quote",
    "settings": {
      "foreground": "$syntax.primary.tag"
    }
  },
  {
    "scope": "markup.italic",
    "settings": {
      "fontStyle": "italic",
      "foreground": "$syntax.primary.foreground"
    }
  },
  {
    "scope": "markup.bold",
    "settings": {
      "fontStyle": "bold",
      "foreground": "$syntax.primary.foreground"
    }
  },
  {
    "scope": [
      "markup.underline"
    ],
    "settings": {
      "fontStyle": "underline"
    }
  },
  {
    "scope": [
      "markup.strikethrough"
    ],
    "settings": {
      "fontStyle": "strikethrough"
    }
  },
  {
    "scope": "markup.inline.raw",
    "settings": {
      "foreground": "$syntax.primary.constant"
    }
  },
  {
    "scope": [
      "markup.deleted",
      "meta.diff.header.from-file",
      "punctuation.definition.deleted"
    ],
    "settings": {
      "foreground": "$syntax.primary.invalid"
    }
  },
  {
    "scope": [
      "punctuation.section.embedded"
    ],
    "settings": {
      "foreground": "$syntax.primary.keyword"
    }
  },
  {
    "scope": [
      "markup.inserted",
      "meta.diff.header.to-file",
      "punctuation.definition.inserted"
    ],
    "settings": {
      "foreground": "$syntax.primary.tag"
    }
  },
  {
    "scope": [
      "markup.changed",
      "punctuation.definition.changed"
    ],
    "settings": {
      "foreground": "$syntax.primary.entity"
    }
  },
  {
    "scope": [
      "markup.ignored",
      "markup.untracked"
    ],
    "settings": {
      "foreground": "$syntax.primary.ignoredBg"
    }
  },
  {
    "scope": "meta.diff.range",
    "settings": {
      "foreground": "$syntax.primary.function",
      "fontStyle": "bold"
    }
  },
  {
    "scope": "meta.diff.header",
    "settings": {
      "foreground": "$syntax.primary.constant"
    }
  },
  {
    "scope": "meta.separator",
    "settings": {
      "fontStyle": "bold",
      "foreground": "$syntax.primary.constant"
    }
  },
  {
    "scope": "meta.output",
    "settings": {
      "foreground": "$syntax.primary.constant"
    }
  },
  {
    "scope": [
      "brackethighlighter.tag",
      "brackethighlighter.curly",
      "brackethighlighter.round",
      "brackethighlighter.square",
      "brackethighlighter.angle",
      "brackethighlighter.quote"
    ],
    "settings": {
      "foreground": "$syntax.primary.bracket"
    }
  },
  {
    "scope": "brackethighlighter.unmatched",
    "settings": {
      "foreground": "$syntax.primary.invalid"
    }
  },
  {
    "scope": [
      "constant.other.reference.link",
      "string.other.link"
    ],
    "settings": {
      "foreground": "$syntax.primary.string"
    }
  }
];

export const SEMANTIC_TOKEN_COLOR_TEMPLATE = {
  "newOperator": "$syntax.plus.controlKeyword",
  "stringLiteral": "$syntax.base.string",
  "customLiteral": "$syntax.plus.function",
  "numberLiteral": "$syntax.base.number"
};
