function solve(s, k) {
	v = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
	sol = "";
	s = s.split('');
	count = 0;

	for(var l = 0; l < v.length; l++) {
		for(var i = 0; i < s.length; i++) {
			//console.log(s[i].toString() + " == " + v[l].toString() + " => " + (s[i] == v[l]))
			if(count < k && s[i] == v[l]) {
				s.splice(i, 1, '')
				count += 1;
			}
		}
	}

	sol = s.join('');

	return sol;
}