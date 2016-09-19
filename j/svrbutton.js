//button primitive
AFRAME.registerPrimitive('a-svrbutton', {
	defaultComponents: {
		geometry: {
			primitive:'box',
			height:1.5,
			depth:0.2,
			width:3.5
		},
		material: {
			opacity:1.0,
			transparent:true,
			side:'Double',
			color:'#8450ff'
		},
		'bmfont-text':{
			text:'button',
			color: 'white',
            align: 'left',
			width:500
		},
		btnTweaks: {
			textPosition: '0 0 0.5',
			textScale: '4 4 1',
			textOffset: 0.2
		}
	},
	mappings:{
		height:'geometry.height',
		width:'geometry.width',
		depth:'geometry.depth',
		color:'material.color',
		opacity:'material.opacity',
		text: 'bmfont-text.text',
		"text-offset": 'btnTweaks.textOffset',
		"text-position": 'svrbutton.textPosition',
		"text-scale": 'svrbutton.textScale'
	}
});