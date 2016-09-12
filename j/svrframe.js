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
        var g = new THREE.CylinderGeometry(data.width/2, data.width/2,  data.height, 50, 2, true, 0, Math.PI);
        g.applyMatrix(new THREE.Matrix4().makeScale(-1,1,1));
        var m = new THREE.MeshBasicMaterial( {color: new THREE.Color(data.color), side:THREE.DoubleSide, transparent:true, opacity:data.opacity, map:(data.bgImage==null)?null:new THREE.TextureLoader().load(data.bgImage)} );
        var mesh = new THREE.Mesh( g, m );
        obj3D.add(mesh);
    }/*,
    maximize: function(){
        AFRAME.TWEEN.
    }*/
});