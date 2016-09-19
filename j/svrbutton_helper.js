//svrbutton helper
AFRAME.registerComponent('btnTweaks', {
	schema: {
		textPosition: {
			type: 'vec3',
			default:'0, 0, 0.5'
		},
		textScale:{
			type:'vec3',
			default: '4, 4, 1'
		},
		textOffset:{
			type:'number',
			default:0.2
		}
	},
	init: function(){
		console.log('in btntweaks');
	},
	tick: function () {
		if (
			!this.text ||
			this.text !== this.el.getObject3D('bmfont-text')
		) {
			this.text = this.el.getObject3D('bmfont-text');
			if (this.text) {

				this.text.position.copy(this.data.textPosition);
				this.text.scale.multiply(this.data.textScale);
				
				this.el.object3D.children[0].geometry.computeBoundingBox();
				var text_bbox = this.el.object3D.children[0].geometry.boundingBox;
				var distCenter = (text_bbox['max'].x - text_bbox['min'].x)/2;
				this.text.translateX(distCenter + this.data.textOffset);
			}
		}
	}
});