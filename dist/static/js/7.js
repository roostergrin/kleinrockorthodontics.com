webpackJsonp([7],{"02d8":function(t,o,s){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var e=c(s("62+n")),a=c(s("AhqM"));function c(t){return t&&t.__esModule?t:{default:t}}o.default={props:{props:{type:Object}},computed:{mission:function(){return this.props.mission},doctors:function(){return this.props.doctors},animationState:function(){return this.$store.state.animationState["about-doctors"]}},components:{BlockTitle:e.default,BlockRows:a.default}}},BNry:function(t,o,s){"use strict";s.d(o,"a",function(){return e}),s.d(o,"b",function(){return a});var e=function(){var t=this,o=t.$createElement,s=t._self._c||o;return s("div",{staticClass:"custom-about-offices"},[s("div",{staticClass:"custom-about-offices__row"},[s("div",{staticClass:"custom-about-offices__col"},[s("BlockTitle",{staticClass:"custom-about-offices__title",attrs:{title:t.props.title}}),s("div",{staticClass:"custom-about-offices__button-col"},t._l(t.props.offices,function(o,e){return s("div",{staticClass:"custom-about-offices__button",class:{"custom-about-offices__button--orange":e%2==1,"custom-about-offices__button--active":t.officeIndex===e},on:{click:function(o){return t.updateOfficeIndex(e)}}},[t._v(t._s(o.title))])}),0)],1),s("div",{staticClass:"custom-about-offices__col",style:{background:"url("+t.activeImage.src+") no-repeat center / cover"}},[s("div",{staticClass:"custom-about-offices__dots-row"},t._l(t.activeOffice.images,function(o,e){return s("div",{staticClass:"custom-about-offices__dot",class:{"custom-about-offices__dot--active":t.imgIndex===e},on:{click:function(o){return t.updateImageIndex(e)}}})}),0)])])])},a=[]},FDXL:function(t,o,s){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var e=s("02d8"),a=s.n(e);for(var c in e)"default"!==c&&function(t){s.d(o,t,function(){return e[t]})}(c);var n=s("TR+6"),u=s("XyMi"),i=Object(u.a)(a.a,n.a,n.b,!1,null,null,null);o.default=i.exports},FX7K:function(t,o,s){"use strict";s.d(o,"a",function(){return e}),s.d(o,"b",function(){return a});var e=function(){var t=this,o=t.$createElement,s=t._self._c||o;return t.props?s("div",{staticClass:"pages-about"},[s("HeroPhoto",{attrs:{props:t.props.hero}}),s("AboutDoctors",{directives:[{name:"waypoint",rawName:"v-waypoint",value:{active:!0,callback:t.activateAnimation,options:t.thresholdOptions},expression:"{ active: true, callback: activateAnimation, options: thresholdOptions }"}],attrs:{id:"about-doctors",props:t.props.doctors}}),s("AboutStaff",{attrs:{props:t.props.staff}}),s("AboutOffices",{attrs:{props:t.props.offices}})],1):t._e()},a=[]},LG26:function(t,o,s){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var e=i(s("twaq")),a=i(s("FDXL")),c=i(s("Yls5")),n=i(s("X3EY")),u=s("kHSb");function i(t){return t&&t.__esModule?t:{default:t}}o.default={mixins:[u.activateAnimation],data:function(){return{thresholdOptions:{threshold:[.1,.9]}}},computed:{props:function(){return this.$store.state.pages.about}},components:{HeroPhoto:e.default,AboutDoctors:a.default,AboutStaff:c.default,AboutOffices:n.default}}},"TR+6":function(t,o,s){"use strict";s.d(o,"a",function(){return e}),s.d(o,"b",function(){return a});var e=function(){var t=this,o=t.$createElement,s=t._self._c||o;return t.props?s("div",{staticClass:"custom-about-doctors"},[s("div",{staticClass:"custom-about-doctors__doctor"},[s("div",{staticClass:"custom-about-doctors__doctor-container"},[s("div",{staticClass:"custom-about-doctors__doctor-col"},[s("div",{staticClass:"custom-about-doctors__announcement-bar custom-about-doctors__announcement-bar--blue"},[s("BlockTitle",{staticClass:"custom-about-doctors__announcement-title custom-about-doctors__announcement-title--orange",class:{"custom-about-doctors__announcement-title--active":t.animationState},attrs:{title:t.mission.title}}),s("div",{staticClass:"custom-about-doctors__announcement-body",class:{"custom-about-doctors__announcement-body--active":t.animationState},domProps:{innerHTML:t._s(t.mission.text)}})],1),s("BlockTitle",{staticClass:"custom-about-doctors__doctor-title",attrs:{title:t.doctors[0].name}}),s("BlockRows",{staticClass:"custom-about-doctors__doctor-rows",attrs:{props:t.doctors[0]}}),s("div",{staticClass:"custom-about-doctors__announcement-bar custom-about-doctors__announcement-bar--orange"},[s("BlockTitle",{staticClass:"custom-about-doctors__announcement-title custom-about-doctors__announcement-title--blue",class:{"custom-about-doctors__announcement-title--active":t.animationState},attrs:{title:"Outside The Office"}}),s("div",{staticClass:"custom-about-doctors__announcement-body custom-about-doctors__announcement-body--extended",class:{"custom-about-doctors__announcement-body--active":t.animationState},domProps:{innerHTML:t._s(t.doctors[0].outside_office)}}),s("div",{staticClass:"custom-about-doctors__logos-row"},[s("BaseIcon",{staticClass:"custom-about-doctors__mets",attrs:{name:"About-DrK-Metslogo"}}),s("BaseIcon",{staticClass:"custom-about-doctors__jets",attrs:{name:"About-DrK-NYJetsLogo"}})],1)],1)],1)])]),s("div",{staticClass:"custom-about-doctors__doctor"},[s("div",{staticClass:"custom-about-doctors__doctor-container"},[s("div",{staticClass:"custom-about-doctors__doctor-col"},[s("BlockTitle",{staticClass:"custom-about-doctors__doctor-title--blue",attrs:{title:t.doctors[1].name}}),s("BlockRows",{staticClass:"custom-about-doctors__doctor-rows--black",attrs:{props:t.doctors[1]}}),s("div",{staticClass:"custom-about-doctors__announcement-bar custom-about-doctors__announcement-bar--gray"},[s("BlockTitle",{staticClass:"custom-about-doctors__announcement-title custom-about-doctors__announcement-title--orange",class:{"custom-about-doctors__announcement-title--active":t.animationState},attrs:{title:"Outside The Office"}}),s("div",{staticClass:"custom-about-doctors__announcement-body",class:{"custom-about-doctors__announcement-body--active":t.animationState},domProps:{innerHTML:t._s(t.doctors[1].outside_office)}}),s("div",{staticClass:"custom-about-doctors__logos-row"})],1)],1)])])]):t._e()},a=[]},Tl0t:function(t,o,s){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var e=s("LG26"),a=s.n(e);for(var c in e)"default"!==c&&function(t){s.d(o,t,function(){return e[t]})}(c);var n=s("FX7K"),u=s("XyMi"),i=Object(u.a)(a.a,n.a,n.b,!1,null,null,null);o.default=i.exports},X3EY:function(t,o,s){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var e=s("jg1r"),a=s.n(e);for(var c in e)"default"!==c&&function(t){s.d(o,t,function(){return e[t]})}(c);var n=s("BNry"),u=s("XyMi"),i=Object(u.a)(a.a,n.a,n.b,!1,null,null,null);o.default=i.exports},Yls5:function(t,o,s){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var e=s("oUFW"),a=s.n(e);for(var c in e)"default"!==c&&function(t){s.d(o,t,function(){return e[t]})}(c);var n=s("qA7X"),u=s("XyMi"),i=Object(u.a)(a.a,n.a,n.b,!1,null,null,null);o.default=i.exports},jg1r:function(t,o,s){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var e,a=s("62+n"),c=(e=a)&&e.__esModule?e:{default:e};o.default={props:{props:{type:Object}},data:function(){return{officeIndex:0,imgIndex:0}},computed:{activeOffice:function(){return this.props.offices[this.officeIndex]},activeImage:function(){return this.activeOffice.images[this.imgIndex]}},methods:{updateOfficeIndex:function(t){this.officeIndex=t},updateImageIndex:function(t){this.imgIndex=t}},watch:{officeIndex:function(t){this.imgIndex=0}},components:{BlockTitle:c.default}}},oUFW:function(t,o,s){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var e,a=s("62+n"),c=(e=a)&&e.__esModule?e:{default:e};o.default={props:{props:{type:Object}},components:{BlockTitle:c.default}}},qA7X:function(t,o,s){"use strict";s.d(o,"a",function(){return e}),s.d(o,"b",function(){return a});var e=function(){var t=this.$createElement,o=this._self._c||t;return o("div",{staticClass:"custom-about-staff"},[o("div",{staticClass:"custom-about-staff__container"},[o("div",{staticClass:"custom-about-staff__col"},[o("BlockTitle",{staticClass:"custom-about-staff__title",attrs:{title:this.props.title}}),o("div",{staticClass:"custom-about-staff__body",domProps:{innerHTML:this._s(this.props.body)}}),o("div",{staticClass:"custom-about-staff__staff-img",style:{background:"url("+this.props.image+") no-repeat center / cover"}})],1)])])},a=[]}});