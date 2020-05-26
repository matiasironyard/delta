const truncator = (string, n) => {
	return string.split(' ').splice(0, n).join(' ') + '...';
};
export default truncator;
