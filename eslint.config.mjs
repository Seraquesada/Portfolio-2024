import nextCoreWebVitals from 'eslint-config-next/core-web-vitals'
import nextTypeScript from 'eslint-config-next/typescript'
import prettier from 'eslint-config-prettier/flat'

const config = [
	{
		ignores: ['.next/**', 'out/**', 'build/**', 'node_modules/**'],
	},
	...nextCoreWebVitals,
	...nextTypeScript,
	prettier,
]

export default config
