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

// You can read more about extending the build with additional plugins in the "Installing plugins" guide.
// See https://ckeditor.com/docs/ckeditor5/latest/installation/plugins/installing-plugins.html for details.

class Editor extends ClassicEditor {
	public static override builtinPlugins = [
		Autoformat,
		BlockQuote,
		Bold,
		Essentials,
		FontBackgroundColor,
		FontColor,
		FontSize,
		GeneralHtmlSupport,
		Heading,
		Indent,
		Italic,
		List,
		Paragraph,
		SourceEditing,
		Style,
		Subscript,
		Superscript,
		TextTransformation,
		Underline
	];

	public static override defaultConfig: EditorConfig = {
		toolbar: {
			items: [
				'bold',
				'italic',
				'underline',
				'subscript',
				'superscript',
				'|',
				'fontColor',
				'fontBackgroundColor',
				'fontSize',
				'sourceEditing',
				'|',
				'bulletedList',
				'numberedList',
				'outdent',
				'indent',
				'|',
				'heading',
				'style',
				'|',
				'blockQuote',
				'undo',
				'redo'
			]
		},
		language: 'en'
	};
}

export default Editor;
