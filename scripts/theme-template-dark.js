/**
 * Declarative VS Code Theme Template for the 2026 Dark Architecture.
 * Maps workbench UI keys, TextMate token rules, and semantic token rules
 * to abstract semantic expressions resolved by `scripts/expand-theme.js`.
 */

export const REFERENCE_ANCHORS = {
  "$accent.primary": "#3994BC",
  "$status.error": "#F48771",
  "$status.warning": "#E5BA7D",
  "$status.success": "#73C991",
  "$ui.surface": "#191A1B",
  "$ui.background": "#121314",
  "$ui.contrast": "#FFFFFF",
  "$ui.foreground": "#BFBFBF",
  "$ui.foregroundMuted": "#8C8C8C"
};

export const WORKBENCH_COLOR_TEMPLATE = {
  "checkbox.border": "gray(70)",
  "editor.background": "$ui.background",
  "editor.foreground": "derive($ui.foreground,#BBBEBF)",
  "editorGroupHeader.connectedTabsBackground": "$ui.surfaceElevated",
  "editor.inactiveSelectionBackground": "derive($accent.primary,#276782)/60",
  "editorIndentGuide.background1": "derive($ui.foregroundMuted,#838485)/4D",
  "editorIndentGuide.activeBackground1": "derive($ui.foregroundMuted,#838485)",
  "editor.selectionHighlightBackground": "derive($accent.primary,#276782)/60",
  "list.dropBackground": "$accent.primary/1A",
  "activityBarBadge.background": "derive($accent.primary,#307E9F)",
  "browser.border": "gray(00)/00",
  "sideBarTitle.foreground": "$ui.foreground",
  "input.placeholderForeground": "$ui.foregroundSubtle",
  "menu.background": "$ui.surfaceElevated",
  "menu.foreground": "$ui.foreground",
  "menu.separatorBackground": "$ui.borderSubtle",
  "menu.border": "$ui.borderDefault",
  "menu.selectionBackground": "$accent.primary/26",
  "statusBarItem.remoteForeground": "$ui.contrast",
  "statusBarItem.remoteBackground": "derive($accent.primary,#0078D4)",
  "statusBar.inactiveBackground": "$ui.background",
  "titleBar.inactiveBackground": "$ui.background",
  "ports.iconRunningProcessForeground": "derive($status.success,#369432)",
  "sideBarSectionHeader.background": "$ui.surface",
  "sideBarSectionHeader.border": "$ui.borderSubtle",
  "tab.selectedBackground": "derive($ui.surface,#37373D)",
  "tab.inactiveForeground": "$ui.foregroundMuted",
  "tab.selectedForeground": "$ui.contrast",
  "tab.lastPinnedBorder": "$ui.borderSubtle",
  "list.activeSelectionIconForeground": "$ui.contrast:short",
  "terminal.inactiveSelectionBackground": "derive($ui.surface,#3A3D41)",
  "widget.border": "$ui.borderSubtle",
  "actionBar.toggledBackground": "derive($accent.primary,#383A49):lower",
  "agentsPanel.border": "$ui.borderDefault",
  "agentsCard.border": "gray(00)/00",
  "agentsChatInput.border": "$ui.borderControl",
  "agentsChatInput.focusBorder": "$accent.primary/B3",
  "agentsNewSessionButton.border": "$ui.borderControl",
  "surface.border": "$ui.borderDefault",
  "modernActivityBarItem.activeBackground": "$ui.contrast/22",
  "modernActivityBarItem.hoverBackground": "$ui.contrast/11",
  "modernActivityBar.border": "derive($ui.surface,#252526)",
  "activityBar.activeBorder": "$ui.foreground",
  "activityBar.background": "$ui.surface",
  "activityBar.border": "$ui.borderSubtle",
  "activityBar.foreground": "$ui.foreground",
  "activityBar.inactiveForeground": "$ui.foregroundMuted",
  "activityBarBadge.foreground": "$ui.contrast",
  "badge.background": "derive($accent.primary,#307E9F)",
  "badge.foreground": "$ui.contrast",
  "button.background": "$accent.secondary",
  "button.border": "$accent.secondary",
  "button.foreground": "$ui.contrast",
  "button.hoverBackground": "derive($accent.primary,#2B7DA3)",
  "button.secondaryBackground": "gray(00)/00",
  "button.secondaryForeground": "gray(CC)",
  "button.secondaryHoverBackground": "$ui.contrast/10",
  "chat.slashCommandBackground": "derive($accent.primary,#264778)/66",
  "chat.slashCommandForeground": "derive($accent.primary,#85B6FF)",
  "chat.editedFileForeground": "derive($status.warning,#E2C08D)",
  "checkbox.background": "derive($ui.surface,#242526)",
  "debugToolBar.background": "gray(18)",
  "descriptionForeground": "$ui.foregroundMuted",
  "dropdown.background": "$ui.surface",
  "dropdown.border": "$ui.borderControl",
  "dropdown.foreground": "$ui.foreground",
  "dropdown.listBackground": "$ui.surface",
  "editor.findMatchBackground": "derive($accent.primary,#276782)/90",
  "editorGroup.border": "$ui.contrast/17",
  "editorGroupHeader.tabsBackground": "$ui.surface",
  "editorGroupHeader.tabsBorder": "$ui.borderSubtle",
  "editorGutter.addedBackground": "derive($status.success,#72C892)",
  "editorGutter.deletedBackground": "derive($status.error,#F28772)",
  "editorGutter.modifiedBackground": "derive($accent.primary,#0078D4)",
  "editorLineNumber.activeForeground": "derive($ui.foreground,#BBBEBF)",
  "editorLineNumber.foreground": "derive($ui.foregroundMuted,#858889)",
  "editorOverviewRuler.border": "$ui.borderSubtle",
  "editorWidget.background": "$ui.surfaceElevated",
  "errorForeground": "$status.error",
  "focusBorder": "$accent.primary/B3",
  "foreground": "$ui.foreground",
  "icon.foreground": "$ui.foregroundMuted",
  "input.background": "$ui.surface",
  "input.border": "$ui.borderControl",
  "input.foreground": "$ui.foreground",
  "inputOption.activeBackground": "derive($ui.surface,#313233)",
  "inputOption.activeBorder": "$ui.borderSubtle",
  "keybindingLabel.foreground": "gray(CC)",
  "notificationCenterHeader.background": "derive($ui.surface,#242526)",
  "notificationCenterHeader.foreground": "$ui.foreground",
  "notifications.background": "$ui.surfaceElevated",
  "notifications.border": "$ui.borderSubtle",
  "notifications.foreground": "$ui.foreground",
  "panel.background": "$ui.surface",
  "panel.border": "$ui.borderSubtle",
  "panelInput.border": "gray(2B)",
  "panelTitle.activeBorder": "$accent.primary",
  "panelTitle.activeForeground": "$ui.foreground",
  "panelTitle.inactiveForeground": "$ui.foregroundMuted",
  "peekViewEditor.background": "$ui.surface",
  "peekViewEditor.matchHighlightBackground": "$accent.primary/33",
  "peekViewResult.background": "$ui.surface",
  "peekViewResult.matchHighlightBackground": "$accent.primary/33",
  "pickerGroup.border": "$ui.borderSubtle",
  "progressBar.background": "derive($ui.foregroundMuted,#878889)",
  "quickInput.background": "$ui.surfaceElevated",
  "quickInput.foreground": "$ui.foreground",
  "settings.dropdownBackground": "gray(31)",
  "settings.dropdownBorder": "gray(3C)",
  "settings.headerForeground": "$ui.contrast",
  "settings.modifiedItemIndicator": "derive($status.warning,#BB8009)/66",
  "sideBar.background": "$ui.surface",
  "sideBar.border": "$ui.borderSubtle",
  "sideBar.foreground": "$ui.foreground",
  "sideBarSectionHeader.foreground": "$ui.foreground",
  "statusBar.background": "$ui.surface",
  "statusBar.border": "$ui.borderSubtle",
  "statusBarItem.hoverBackground": "derive($ui.surface,#323233)",
  "statusBarItem.hoverForeground": "$ui.contrast",
  "statusBar.debuggingBackground": "$accent.primary",
  "statusBar.debuggingForeground": "$ui.contrast",
  "statusBar.focusBorder": "$accent.primary/B3",
  "statusBar.foreground": "$ui.foregroundMuted",
  "statusBar.noFolderBackground": "$ui.surface",
  "statusBarItem.focusBorder": "$accent.primary/B3",
  "statusBarItem.prominentBackground": "$accent.primary",
  "tab.activeBackground": "$ui.background",
  "tab.activeBorder": "$ui.background",
  "tab.activeBorderTop": "$accent.primary",
  "tab.activeForeground": "$ui.foreground",
  "tab.selectedBorderTop": "derive($accent.primary,#6CADDF):lower",
  "tab.border": "$ui.borderSubtle",
  "tab.hoverBackground": "$ui.background",
  "tab.inactiveBackground": "$ui.surface",
  "tab.unfocusedActiveBorder": "gray(1F)",
  "tab.unfocusedActiveBorderTop": "gray(2B)",
  "tab.unfocusedHoverBackground": "gray(1F)",
  "terminal.foreground": "gray(CC)",
  "terminal.tab.activeBorder": "$accent.primary/00",
  "textBlockQuote.background": "derive($ui.surface,#242526)",
  "textBlockQuote.border": "$ui.borderSubtle",
  "textCodeBlock.background": "derive($ui.surface,#242526)",
  "textLink.activeForeground": "derive($accent.primary,#53A5CA)",
  "textLink.foreground": "derive($accent.primary,#48A0C7)",
  "textPreformat.foreground": "$ui.foregroundMuted",
  "textPreformat.background": "gray(26)",
  "textSeparator.foreground": "gray(2A):lower",
  "titleBar.activeBackground": "$ui.surface",
  "titleBar.activeForeground": "$ui.foregroundMuted",
  "titleBar.border": "$ui.borderSubtle",
  "titleBar.inactiveForeground": "$ui.foregroundMuted",
  "welcomePage.tileBackground": "gray(2B)",
  "welcomePage.progress.foreground": "derive($accent.primary,#0078D4)",
  "disabledForeground": "$ui.foregroundDisabled",
  "button.secondaryBorder": "$ui.borderControl",
  "checkbox.foreground": "$ui.foregroundMuted",
  "inputOption.activeForeground": "$ui.foreground",
  "inputValidation.infoBackground": "derive($accent.primary,#1E3A47)",
  "inputValidation.infoBorder": "$accent.primary",
  "inputValidation.infoForeground": "$ui.foreground",
  "inputValidation.warningBackground": "derive($status.warning,#352A05)",
  "inputValidation.warningBorder": "derive($status.warning,#B89500)",
  "inputValidation.warningForeground": "$ui.foreground",
  "inputValidation.errorBackground": "derive($status.error,#3A1D1D)",
  "inputValidation.errorBorder": "derive($status.error,#BE1100)",
  "inputValidation.errorForeground": "$ui.foreground",
  "scrollbar.shadow": "derive($ui.surface,#191B1D)/4D",
  "scrollbarSlider.background": "derive($ui.foregroundMuted,#A8A9AA)/85",
  "scrollbarSlider.hoverBackground": "derive($ui.foregroundMuted,#A8A9AA)/90",
  "scrollbarSlider.activeBackground": "derive($ui.foregroundMuted,#A8A9AA)/9C",
  "list.activeSelectionBackground": "$ui.contrast/22",
  "list.activeSelectionForeground": "gray(ED):lower",
  "list.inactiveSelectionBackground": "derive($ui.surface,#2C2D2E)",
  "list.inactiveSelectionForeground": "gray(ED):lower",
  "list.hoverBackground": "$ui.contrast/14",
  "list.hoverForeground": "$ui.foreground",
  "toolbar.activeBackground": "$ui.contrast/33",
  "list.focusBackground": "$ui.contrast/22",
  "list.focusForeground": "$ui.foreground",
  "list.focusOutline": "$accent.primary/B3",
  "list.highlightForeground": "derive($accent.primary,#48A0C7)",
  "list.invalidItemForeground": "gray(44)",
  "list.errorForeground": "$status.error",
  "list.warningForeground": "$status.warning",
  "activityBar.activeBackground": "derive($ui.surface,#313233)",
  "activityBar.activeFocusBorder": "$accent.primary/B3",
  "activityBarTop.activeBorder": "$ui.foreground",
  "menubar.selectionBackground": "derive($ui.surface,#242526)",
  "menubar.selectionForeground": "$ui.foreground",
  "menu.selectionForeground": "$ui.foreground",
  "menu.selectionBorder": "$accent.primary",
  "commandCenter.foreground": "$ui.foreground",
  "commandCenter.activeForeground": "$ui.foreground",
  "commandCenter.background": "$ui.surface",
  "commandCenter.activeBackground": "$ui.contrast/0F",
  "commandCenter.border": "derive($ui.surface,#2E3031)",
  "editorStickyScroll.background": "$ui.background",
  "editorStickyScrollHover.background": "$ui.surfaceElevated",
  "editorStickyScroll.border": "$ui.borderSubtle",
  "editorCursor.foreground": "derive($ui.foreground,#BBBEBF)",
  "editor.selectionBackground": "derive($accent.primary,#276782)/dd",
  "editor.wordHighlightBackground": "derive($accent.primary,#276782)/50",
  "editor.wordHighlightStrongBackground": "derive($accent.primary,#276782)/80",
  "editor.findMatchHighlightBackground": "derive($accent.primary,#276782)/80",
  "editor.findRangeHighlightBackground": "$ui.contrast/13",
  "editor.hoverHighlightBackground": "$ui.contrast/13",
  "editor.lineHighlightBackground": "derive($ui.surface,#242526)",
  "editor.rangeHighlightBackground": "$ui.contrast/13",
  "editorLink.activeForeground": "derive($accent.primary,#3A94BC):lower",
  "editorWhitespace.foreground": "$ui.foregroundMuted/4D",
  "editorRuler.foreground": "gray(84)",
  "editorCodeLens.foreground": "$ui.foregroundMuted",
  "editorBracketMatch.background": "$accent.primary/55",
  "editorBracketMatch.border": "$ui.borderSubtle",
  "editorWidget.border": "$ui.borderDefault",
  "editorWidget.foreground": "$ui.foreground",
  "editorSuggestWidget.background": "$ui.surfaceElevated",
  "editorSuggestWidget.border": "$ui.borderDefault",
  "editorSuggestWidget.foreground": "$ui.foreground",
  "editorSuggestWidget.highlightForeground": "$ui.foreground",
  "editorSuggestWidget.selectedBackground": "$ui.contrast/26",
  "editorSuggestWidget.focusOutline": "$accent.primary/B3",
  "editorHoverWidget.background": "$ui.surfaceElevated",
  "editorHoverWidget.border": "$ui.borderDefault",
  "peekView.border": "$ui.borderSubtle",
  "peekViewResult.fileForeground": "$ui.foreground",
  "peekViewResult.lineForeground": "$ui.foregroundMuted",
  "peekViewResult.selectionBackground": "$accent.primary/26",
  "peekViewResult.selectionForeground": "$ui.foreground",
  "peekViewTitle.background": "derive($ui.surface,#242526)",
  "peekViewTitleDescription.foreground": "$ui.foregroundMuted",
  "peekViewTitleLabel.foreground": "$ui.foreground",
  "editorGutter.background": "$ui.background",
  "diffEditor.insertedLineBackground": "derive($status.success,#347D39):lower/26",
  "diffEditor.insertedTextBackground": "derive($status.success,#57AB5A):lower/4d",
  "diffEditor.removedLineBackground": "derive($status.error,#C93C37):lower/26",
  "diffEditor.removedTextBackground": "derive($status.error,#F47067):lower/4d",
  "editorOverviewRuler.findMatchForeground": "derive($accent.primary,#3A94BC):lower/99",
  "editorOverviewRuler.modifiedForeground": "derive($status.success,#6AB890):lower",
  "editorOverviewRuler.addedForeground": "$status.success",
  "editorOverviewRuler.deletedForeground": "$status.error",
  "editorOverviewRuler.errorForeground": "$status.error",
  "editorOverviewRuler.warningForeground": "$status.warning",
  "panelSection.border": "$ui.borderDefault",
  "panelSectionHeader.border": "$ui.borderDefault",
  "statusBar.noFolderForeground": "$ui.foregroundMuted",
  "statusBarItem.activeBackground": "derive($ui.surface,#4B4C4D)",
  "statusBarItem.prominentForeground": "$ui.contrast",
  "statusBarItem.prominentHoverBackground": "$accent.primary",
  "tab.hoverForeground": "$ui.foreground",
  "tab.unfocusedActiveBackground": "$ui.background",
  "tab.unfocusedActiveForeground": "$ui.foregroundMuted",
  "tab.unfocusedInactiveBackground": "$ui.surface",
  "tab.unfocusedInactiveForeground": "gray(44)",
  "breadcrumb.foreground": "$ui.foregroundMuted",
  "breadcrumb.background": "$ui.background",
  "breadcrumb.focusForeground": "$ui.foreground",
  "breadcrumb.activeSelectionForeground": "$ui.foreground",
  "breadcrumbPicker.background": "$ui.surfaceElevated",
  "notificationCenter.border": "$ui.borderSubtle",
  "notificationToast.border": "$ui.borderSubtle",
  "notificationLink.foreground": "derive($accent.primary,#3A94BC):lower",
  "notificationsWarningIcon.foreground": "$status.warningIcon",
  "notificationsErrorIcon.foreground": "$status.error",
  "notificationsInfoIcon.foreground": "derive($accent.primary,#3A94BC):lower",
  "activityWarningBadge.foreground": "gray(20)",
  "activityWarningBadge.background": "$status.warningIcon",
  "activityErrorBadge.foreground": "$ui.contrast",
  "activityErrorBadge.background": "$status.error",
  "extensionButton.prominentBackground": "$accent.secondary",
  "extensionButton.prominentForeground": "$ui.contrast",
  "extensionButton.prominentHoverBackground": "derive($accent.primary,#2B7DA3)",
  "pickerGroup.foreground": "$ui.foreground",
  "quickInputList.focusBackground": "$accent.secondary",
  "quickInputList.focusForeground": "$ui.contrast",
  "quickInputList.focusIconForeground": "$ui.contrast",
  "quickInputList.focusHighlightForeground": "$ui.contrast",
  "terminal.selectionBackground": "$accent.primary/33",
  "terminal.background": "$ui.surface",
  "terminal.border": "$ui.borderSubtle",
  "terminalCursor.foreground": "$ui.foreground",
  "terminalCursor.background": "$ui.surface",
  "gitDecoration.addedResourceForeground": "$status.success",
  "gitDecoration.modifiedResourceForeground": "$status.warning",
  "gitDecoration.deletedResourceForeground": "$status.error",
  "gitDecoration.untrackedResourceForeground": "$status.success",
  "gitDecoration.ignoredResourceForeground": "$ui.foregroundMuted",
  "gitDecoration.conflictingResourceForeground": "$status.error",
  "gitDecoration.stageModifiedResourceForeground": "$status.warning",
  "gitDecoration.stageDeletedResourceForeground": "$status.error",
  "quickInputTitle.background": "$ui.surfaceElevated",
  "commandCenter.activeBorder": "$ui.borderControl",
  "chat.requestBubbleBackground": "$ui.contrast:lower/13",
  "chat.requestBubbleHoverBackground": "$ui.contrast:lower/22",
  "chat.inputWorkingBorderColor1": "$accent.secondary",
  "editorCommentsWidget.rangeBackground": "derive($accent.primary,#488FAE)/26",
  "editorCommentsWidget.rangeActiveBackground": "derive($accent.primary,#488FAE)/46",
  "charts.foreground": "gray(CC)",
  "charts.lines": "derive($ui.foreground,#C8CACC)/80",
  "charts.blue": "$status.charts.blue",
  "charts.red": "derive($status.error,#EF8773)",
  "charts.yellow": "derive($status.warning,#E0B97F)",
  "charts.orange": "$status.charts.orange",
  "charts.green": "$status.charts.green",
  "charts.purple": "$status.charts.purple",
  "inlineChat.border": "gray(00)/00",
  "minimapSlider.background": "derive($ui.foregroundMuted,#A8A9AA)/85",
  "minimapSlider.hoverBackground": "derive($ui.foregroundMuted,#A8A9AA)/90",
  "minimapSlider.activeBackground": "derive($ui.foregroundMuted,#A8A9AA)/9C",
  "agents.background": "$ui.background",
  "agentsPanel.background": "$ui.surface",
  "agentsPanel.foreground": "$ui.foreground",
  "surface.background": "$ui.surface",
  "surface.foreground": "$ui.foreground",
  "agentsGradient.tintColor": "$accent.secondary",
  "agentsChatInput.background": "$ui.surfaceElevated",
  "agentsChatInput.foreground": "$ui.foreground",
  "agentsChatInput.placeholderForeground": "$ui.foregroundSubtle",
  "agentsNewSessionButton.background": "gray(00)/00",
  "agentsNewSessionButton.foreground": "$ui.foreground",
  "agentsNewSessionButton.hoverBackground": "$ui.contrast/18",
  "agentsBadge.background": "derive($accent.primary,#307E9F)",
  "agentsBadge.foreground": "$ui.contrast",
  "agentsUnreadBadge.background": "derive($accent.primary,#307E9F)",
  "agentsUnreadBadge.foreground": "$ui.contrast",
  "agentsBottomPanel.border": "gray(00)/00"
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
      "foreground": "gray(D4)"
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
    "scope": "header",
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
      "foreground": "derive($accent.primary,#646695)"
    }
  },
  {
    "scope": "entity.name.tag",
    "settings": {
      "foreground": "$syntax.base.keyword"
    }
  },
  {
    "scope": [
      "entity.name.tag.css",
      "entity.name.tag.less"
    ],
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
      "foreground": "$syntax.base.keyword"
    }
  },
  {
    "scope": "markup.heading",
    "settings": {
      "fontStyle": "bold",
      "foreground": "$syntax.base.keyword"
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
      "foreground": "$syntax.base.keyword"
    }
  },
  {
    "scope": "punctuation.definition.quote.begin.markdown",
    "settings": {
      "foreground": "$syntax.base.comment"
    }
  },
  {
    "scope": "punctuation.definition.list.begin.markdown",
    "settings": {
      "foreground": "derive($accent.primary,#6796E6):lower"
    }
  },
  {
    "scope": "markup.inline.raw",
    "settings": {
      "foreground": "$syntax.base.string"
    }
  },
  {
    "name": "brackets of XML/HTML tags",
    "scope": "punctuation.definition.tag",
    "settings": {
      "foreground": "gray(80)"
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
    "scope": "meta.diff.header",
    "settings": {
      "foreground": "$syntax.base.keyword"
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
    "scope": "string.tag",
    "settings": {
      "foreground": "$syntax.base.string"
    }
  },
  {
    "scope": "string.value",
    "settings": {
      "foreground": "$syntax.base.string"
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
      "foreground": "gray(D4):lower"
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
      "foreground": "gray(D4):lower"
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
      "foreground": "$syntax.base.keyword"
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
      "foreground": "gray(D4):lower"
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
      "keyword.operator.delete",
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
      "foreground": "$syntax.plus.regexpGroup"
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
    "scope": [
      "keyword.operator.or.regexp",
      "keyword.control.anchor.regexp"
    ],
    "settings": {
      "foreground": "$syntax.plus.function"
    }
  },
  {
    "scope": "keyword.operator.quantifier.regexp",
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
      "foreground": "gray(C8)"
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
      "foreground": "$syntax.primary.invalid",
      "fontStyle": "italic"
    }
  },
  {
    "scope": "invalid.deprecated",
    "settings": {
      "foreground": "$syntax.primary.invalid",
      "fontStyle": "italic"
    }
  },
  {
    "scope": "invalid.illegal",
    "settings": {
      "foreground": "$syntax.primary.invalid",
      "fontStyle": "italic"
    }
  },
  {
    "scope": "invalid.unimplemented",
    "settings": {
      "foreground": "$syntax.primary.invalid",
      "fontStyle": "italic"
    }
  },
  {
    "scope": "carriage-return",
    "settings": {
      "foreground": "$syntax.primary.carriageReturnBg",
      "fontStyle": "italic underline"
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
      "foreground": "$syntax.primary.tag",
      "fontStyle": "bold"
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
      "foreground": "$syntax.primary.constant",
      "fontStyle": "bold"
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
      "foreground": "$syntax.primary.foreground",
      "fontStyle": "italic"
    }
  },
  {
    "scope": "markup.bold",
    "settings": {
      "foreground": "$syntax.primary.foreground",
      "fontStyle": "bold"
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
      "foreground": "$syntax.primary.constant",
      "fontStyle": "bold"
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
  },
  {
    "scope": "token.info-token",
    "settings": {
      "foreground": "derive($accent.primary,#6796E6)"
    }
  },
  {
    "scope": "token.warn-token",
    "settings": {
      "foreground": "derive($status.warning,#CD9731)"
    }
  },
  {
    "scope": "token.error-token",
    "settings": {
      "foreground": "$syntax.base.invalid:upper"
    }
  },
  {
    "scope": "token.debug-token",
    "settings": {
      "foreground": "derive($accent.primary,#B267E6)"
    }
  }
];

export const SEMANTIC_TOKEN_COLOR_TEMPLATE = {
  "newOperator": "$syntax.plus.controlKeyword",
  "stringLiteral": "$syntax.base.string",
  "customLiteral": "$syntax.plus.function",
  "numberLiteral": "$syntax.base.number"
};
