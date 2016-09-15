AFRAME.registerComponent('svrbutton', {
    schema:{
        width:{default:3},
        height:{default:1.5},
        depth:{default:0.3},
        color:{default:'#8450ff'},
        opacity:{default:0.6},
    },
    init: function(){
        var obj3D = this.el.object3D;
        var data = this.data;
        //body of the button
        var g = new THREE.BoxGeometry(data.width, data.height, data.depth);
        var m = new THREE.MeshPhongMaterial({color:data.color, transparent:true, opacity:data.opacity, side:THREE.DoubleSide});
        var mesh = new THREE.Mesh( g, m );
        obj3D.add(mesh);

        ////
        var loader = new THREE.FontLoader();
        loader.load('f/mk3_normal.json', function(font){
            var textGeo = new THREE.TextGeometry("hola", {
                font: font,
                size: 200,
                height: 50,
                curveSegments: 12,
                bevelThickness: 2,
                bevelSize: 5,
                bevelEnabled: true
            } );

        textGeo.computeBoundingBox();
        var centerOffset = - 0.5 * ( textGeo.boundingBox.max.x - textGeo.boundingBox.min.x );

        var textMaterial = new THREE.MeshPhongMaterial( { color: 0xff0000, specular: 0xffffff } );

        var mesh = new THREE.Mesh( textGeo, textMaterial );
        mesh.position.x = centerOffset;
        mesh.position.y = FLOOR + 67;

        mesh.castShadow = true;
        mesh.receiveShadow = true;
        obj3D.add( mesh );

    } );
    }
});