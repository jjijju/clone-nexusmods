module.exports = {
	env: {
		browser: true,
		es6: true,
		node: true,
	},
	extends: [
		'airbnb',
		'airbnb/hooks',
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:prettier/recommended',
	],
	globals: {
		Atomics: 'readonly',
		SharedArrayBuffer: 'readonly',
	},
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 12,
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true,
		},
		project: './tsconfig.json',
	},
	plugins: ['react', 'jsx-a11y', 'import', 'prettier', '@typescript-eslint'],
	rules: {
		// prettier
		'prettier/prettier': 'error',
		'no-const-assign': 'warn',
		'no-this-before-super': 'warn',
		'no-undef': 'warn',
		'no-unreachable': 'warn',
		'no-unused-vars': 'off',
		'constructor-super': 'warn',
		'valid-typeof': 'warn',
		'no-extra-semi': 'error',
		'no-use-before-define': 'off',
		'no-console': ['error', { allow: ['log', 'warn', 'error'] }],

		// Typescript
		'@typescript-eslint/no-unused-vars': ['error'],
		'@typescript-eslint/explicit-member-accessibility': 'off',
		'@typescript-eslint/no-object-literal-type-assertion': 'off',
		'@typescript-eslint/prefer-interface': 'off',
		'@typescript-eslint/camelcase': 'off',
		'@typescript-eslint/explicit-function-return-type': 'off',
		'@typescript-eslint/no-use-before-define': ['error'],
		'@typescript-eslint/explicit-module-boundary-types': 'off',
		'@typescript-eslint/no-explicit-any': 'off',
		'@typescript-eslint/naming-convention': [
			'error',
			{
				selector: 'default',
				format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
			},
			{
				selector: 'interface',
				format: ['PascalCase'],
				trailingUnderscore: 'allow',
				prefix: ['I'],
			},
		],

		// React
		'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
		'react/prop-types': ['off', {}],

		// import
		'import/extensions': [
			'error',
			'ignorePackages',
			{
				js: 'never',
				mjs: 'never',
				jsx: 'never',
				ts: 'never',
				tsx: 'never',
			},
		],
		'import/no-extraneous-dependencies': ['error', { devDependencies: ['**/*.stories.tsx'] }],
		'import/no-unresolved': 'off',
	},
	settings: {
		react: {
			version: 'detect',
		},
		'import/resolver': {
			node: {
				extensions: ['.js', '.ts', '.jsx', '.tsx', '.json'],
				moduleDirectory: ['node_modules', 'src/'],
			},
		},
		'import/extensions': ['.js', '.ts', '.mjs', '.jsx', '.tsx'],
	},
	ignorePatterns: ['node_modules/', '*.js'],
};
