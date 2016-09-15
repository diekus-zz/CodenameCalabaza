AFRAME.registerComponent('svrframe', {
    schema:{
        width:{default:4},
        height:{default:3},
        color:{default:'#ffffff'},
        opacity:{default:0.3},
        bgImage:{default:null}
    },
    init: function(){
        var obj3D = this.el.object3D;
        var data = this.data;
        //create a plane
        var g = new THREE.CylinderGeometry(data.width/2, data.width/2,  data.height, 50, 2, true, Math.PI/3, 4*Math.PI/3);
        g.applyMatrix(new THREE.Matrix4().makeScale(-1,1,1));
        var m = new THREE.MeshBasicMaterial( {color: new THREE.Color(data.color), side:THREE.DoubleSide, transparent:true, opacity:data.opacity, map:(data.bgImage==null)?null:new THREE.TextureLoader().load(data.bgImage)} );
        var mesh = new THREE.Mesh( g, m );
        obj3D.add(mesh);
    },
    maximize: function(){
        var maxHeightValue = this.data.height*2;
        var maxWidthValue = this.data.width*2;

        this.el.object3D.scale.set(maxWidthValue, maxHeightValue, 1);
    },
    minimize: function(){

    },
    rotate: function(deg){
        this.el.object3D.rotateY(deg*Math.PI/180);
    }
});