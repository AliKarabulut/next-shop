/**
 * @license Copyright (c) 2014-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
import { ClassicEditor } from '@ckeditor/ckeditor5-editor-classic';
import { Autoformat } from '@ckeditor/ckeditor5-autoformat';
import { Bold, Italic, Subscript, Superscript, Underline } from '@ckeditor/ckeditor5-basic-styles';
import { BlockQuote } from '@ckeditor/ckeditor5-block-quote';
import type { EditorConfig } from '@ckeditor/ckeditor5-core';
import { Essentials } from '@ckeditor/ckeditor5-essentials';
import { FontBackgroundColor, FontColor, FontSize } from '@ckeditor/ckeditor5-font';
import { Heading } from '@ckeditor/ckeditor5-heading';
import { GeneralHtmlSupport } from '@ckeditor/ckeditor5-html-support';
import { Indent } from '@ckeditor/ckeditor5-indent';
import { List } from '@ckeditor/ckeditor5-list';
import { Paragraph } from '@ckeditor/ckeditor5-paragraph';
import { SourceEditing } from '@ckeditor/ckeditor5-source-editing';
import { Style } from '@ckeditor/ckeditor5-style';
import { TextTransformation } from '@ckeditor/ckeditor5-typing';
declare class Editor extends ClassicEditor {
    static builtinPlugins: (typeof Autoformat | typeof BlockQuote | typeof Bold | typeof Essentials | typeof FontBackgroundColor | typeof FontColor | typeof FontSize | typeof GeneralHtmlSupport | typeof Heading | typeof Indent | typeof Italic | typeof List | typeof Paragraph | typeof SourceEditing | typeof Style | typeof Subscript | typeof Superscript | typeof TextTransformation | typeof Underline)[];
    static defaultConfig: EditorConfig;
}
export default Editor;
