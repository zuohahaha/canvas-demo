(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{RH81:function(e,t,s){"use strict";s.r(t);t.default=class{constructor(e,t,s){this.x=e,this.y=t,this.radius=s,this.rotate=0,this.offset=0,this.moveSpeed=0,this.rotateSpeed=0,this.behaviors=[]}setMoveSpeed(e){this.moveSpeed=e,this.setRotateSpeed(e/this.radius)}setRotateSpeed(e){this.rotateSpeed=e}addBehavior(e){Array.isArray(e)?this.behaviors=[...this.behaviors,...e]:this.behaviors=[...this.behaviors,e]}update(e){for(let t of this.behaviors)t.call(null,this,e)}render(e){let{x:t,y:s,radius:o,rotate:i,offset:a}=this;e.save(),e.translate(t+a,s),e.rotate(i),e.beginPath(),e.arc(0,0,o,0,2*Math.PI,!1),e.moveTo(-o,0),e.lineTo(o,0),e.moveTo(0,-o),e.lineTo(0,o),e.fill(),e.stroke(),e.restore()}reset(){this.rotate=0,this.offset=0}static rotate(e,t){let s=e.rotateSpeed*t;s%=2*Math.PI,e.rotate=s}static move(e,t){let{moveSpeed:s}=e,o=e.moveSpeed*t;e.offset=o}}}}]);