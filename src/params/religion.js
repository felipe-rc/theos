/**
 * @param {string} param
 * @return {param is ('catolicismo' | 'evangelica' | 'judaica' | 'budismo' | 'islamismo')}
 * @satisfies {import('@sveltejs/kit').ParamMatcher}
 */
export function match(param) {
	return param ==='catolicismo' || param ==='evangelica' || param ==='judaica' || param ==='budismo' || param ==='islamismo';
}