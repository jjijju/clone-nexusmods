/** @jsx jsx */
import { Global, css, jsx } from '@emotion/react';
// import theme from './theme';

const resetStyle = css`
	html {
		font-family: 'Montserrat';
		-ms-text-size-adjust: 100%;
		-webkit-text-size-adjust: 100%;
	}
	body {
		margin: 0;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}
	html,
	body,
	div,
	span,
	applet,
	object,
	iframe,
	h1,
	h2,
	h3,
	h4,
	h5,
	h6,
	p,
	blockquote,
	pre,
	a,
	abbr,
	acronym,
	address,
	big,
	cite,
	code,
	del,
	dfn,
	em,
	img,
	ins,
	kbd,
	q,
	s,
	samp,
	small,
	strike,
	strong,
	sub,
	sup,
	tt,
	var,
	b,
	u,
	i,
	center,
	dl,
	dt,
	dd,
	ol,
	ul,
	li,
	fieldset,
	form,
	label,
	legend,
	table,
	caption,
	tbody,
	tfoot,
	thead,
	tr,
	th,
	td,
	article,
	aside,
	canvas,
	details,
	embed,
	figure,
	figcaption,
	footer,
	header,
	hgroup,
	menu,
	nav,
	output,
	ruby,
	section,
	summary,
	time,
	mark,
	audio,
	video {
		margin: 0;
		padding: 0;
		border: 0;
		font-size: 100%;
		font: inherit;
		vertical-align: baseline;
	}
	article,
	aside,
	details,
	summary,
	figcaption,
	figure,
	footer,
	header,
	hgroup,
	menu,
	nav,
	section {
		display: block;
	}
	body {
		line-height: 1;
	}
	ol,
	ul {
		list-style: none;
	}
	blockquote,
	q {
		quotes: none;
	}
	blockquote:before,
	blockquote:after,
	q:before,
	q:after {
		content: '';
		content: none;
	}
	table {
		border-collapse: collapse;
		border-spacing: 0;
	}
	/*  */
	audio,
	canvas,
	progress,
	video {
		display: inline-block;
	}
	audio:not([controls]) {
		display: none;
		height: 0;
	}
	progress {
		vertical-align: baseline;
	}
	[hidden],
	template {
		display: none;
	}
	a {
		background-color: transparent;
		-webkit-text-decoration-skip: objects;
	}
	a:active,
	a:hover {
		outline-width: 0;
	}
	a,
	a:visited {
		color: #000;
		text-decoration: none;
		outline: 0;
		-webkit-transition: color 0.1s linear;
		-moz-transition: color 0.1s linear;
		-o-transition: color 0.1s linear;
		-ms-transition: color 0.1s linear;
		transition: color 0.1s linear;
	}
	abbr[title] {
		border-bottom: none;
		text-decoration: underline;
		text-decoration: underline dotted;
	}
	b,
	strong {
		font-weight: inherit;
		font-weight: bolder;
	}
	dfn {
		font-style: italic;
	}
	mark {
		background-color: #ff0;
		color: #000;
	}
	small {
		font-size: 80%;
	}
	sub,
	sup {
		font-size: 75%;
		line-height: 0;
		position: relative;
		vertical-align: baseline;
	}
	sub {
		bottom: -0.25em;
	}
	sup {
		top: -0.5em;
	}
	img {
		border-style: none;
	}
	svg:not(:root) {
		overflow: hidden;
	}
	code,
	kbd,
	pre,
	samp {
		font-family: monospace, monospace;
		font-size: 1em;
	}
	figure {
		margin: 1em 40px;
	}
	hr {
		box-sizing: content-box;
		height: 0;
		overflow: visible;
	}
	button,
	input,
	optgroup,
	select,
	textarea {
		font: inherit;
		margin: 0;
	}
	optgroup {
		font-weight: 700;
	}
	button,
	input {
		overflow: visible;
	}
	button,
	select {
		text-transform: none;
	}
	[type='reset'],
	[type='submit'],
	button,
	html [type='button'] {
		-webkit-appearance: button;
	}
	[type='button']::-moz-focus-inner,
	[type='reset']::-moz-focus-inner,
	[type='submit']::-moz-focus-inner,
	button::-moz-focus-inner {
		border-style: none;
		padding: 0;
	}
	[type='button']:-moz-focusring,
	[type='reset']:-moz-focusring,
	[type='submit']:-moz-focusring,
	button:-moz-focusring {
		outline: 1px dotted ButtonText;
	}
	fieldset {
		border: 1px soild silver;
		margin: 0 2px;
		padding: 0.35em 0.625em 0.75em;
	}
	legend {
		box-sizing: border-box;
		color: inherit;
		display: table;
		max-width: 100%;
		padding: 0;
		white-space: normarl;
	}
	textarea {
		overflow: none;
	}
	[type='checkbox'],
	[type='radio'] {
		box-sizing: border-box;
		padding: 0;
	}
	[type='number']::-webkit-inner-spin-button,
	[type='number']::-webkit-outer-spin-button {
		height: auto;
	}
	[type='search'] {
		-webkit-appearance: textfield;
		outline-offset: -2px;
	}
	[type='search']::-webkit-search-cancel-button,
	[type='search']::-webkit-search-decoration {
		-webkit-appearance: none;
	}
	::-webkit-input-placeholder {
		color: inherit;
		opacity: 0.54;
	}
	::-webkit-file-upload-button {
		-webkit-appearance: button;
		font: inherit;
	}
	*,
	*:before,
	*:after {
		box-sizing: inherit;
	}
	body {
		color: hsla(0, 0%, 0%, 0.8);
		font-weight: normal;
		word-wrap: break-word;
		font-kerning: normal;
		-moz-font-feature-settings: 'kern', 'liga', 'clig', 'calt';
		-ms-font-feature-settings: 'kern', 'liga', 'clig', 'calt';
		-webkit-font-feature-settings: 'kern', 'liga', 'clig', 'calt';
		font-feature-settings: 'kern', 'liga', 'clig', 'calt';
	}
	img {
		max-width: 100%;
	}
	:root {
		--primary-color: #313234;
		--signature-color: #8a02fb;
	}
`;

const GlobalStyle = () => {
	return <Global styles={resetStyle} />;
};

export default GlobalStyle;

// export const GlobalStyle = () => <Global styles={bodyStyles} />;
