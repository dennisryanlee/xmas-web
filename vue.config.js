module.exports = {
	chainWebpack: config => {
		config.plugin('html')
			.tap(args => {
				args[0].title = 'Noël du Doussay';
				return args;
			})
	}
}