/**
 * @param {string} param
 * @return {param is ('pessoas' | 'eventos' | 'rituais' | 'crencas' | 'lugares')}
 * @satisfies {import('@sveltejs/kit').ParamMatcher}
 */
export function match(param) {
	return param ==='pessoas' || param ==='eventos' || param ==='rituais' || param ==='crencas' || param ==='lugares';
}