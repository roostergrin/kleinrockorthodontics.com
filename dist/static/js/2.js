webpackJsonp([2],{"/00b":function(t,o,s){"use strict";s.d(o,"a",function(){return e}),s.d(o,"b",function(){return c});var e=function(){var t=this,o=t.$createElement,s=t._self._c||o;return s("div",{staticClass:"custom-about-offices"},[s("div",{staticClass:"custom-about-offices__row"},[s("div",{staticClass:"custom-about-offices__col"},[s("BlockTitle",{staticClass:"custom-about-offices__title",attrs:{title:t.props.title}}),s("div",{staticClass:"custom-about-offices__button-col"},t._l(t.props.offices,function(o,e){return s("div",{staticClass:"custom-about-offices__button",class:{"custom-about-offices__button--orange":e%2==1,"custom-about-offices__button--active":t.officeIndex===e},on:{click:function(o){return t.updateOfficeIndex(e)}}},[t._v(t._s(o.title))])}),0)],1),s("div",{staticClass:"custom-about-offices__col",style:{background:"url("+t.activeImage.src+") no-repeat center / cover"}},[s("div",{staticClass:"custom-about-offices__dots-row"},t._l(t.activeOffice.images,function(o,e){return s("div",{staticClass:"custom-about-offices__dot",class:{"custom-about-offices__dot--active":t.imgIndex===e},on:{click:function(o){return t.updateImageIndex(e)}}})}),0)])])])},c=[]},"02d8":function(t,o,s){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var e=n(s("62+n")),c=n(s("AhqM"));function n(t){return t&&t.__esModule?t:{default:t}}o.default={props:{props:{type:Object}},computed:{mission:function(){return this.props.mission},doctors:function(){return this.props.doctors}},components:{BlockTitle:e.default,BlockRows:c.default}}},"3CLH":function(t,o,s){"use strict";s.d(o,"a",function(){return e}),s.d(o,"b",function(){return c});var e=function(){var t=this.$createElement,o=this._self._c||t;return o("div",{staticClass:"block-content-rows"},[o("div",{staticClass:"block-content-rows__container"},[o("div",{staticClass:"block-content-rows__col"},[o("div",{staticClass:"block-content-rows__img",style:{background:"url("+this.images[0].img+") no-repeat center / cover"}})]),o("div",{staticClass:"block-content-rows__col"},[o("div",{staticClass:"block-content-rows__text",domProps:{innerHTML:this._s(this.paragraphs[0].text)}})])]),o("div",{staticClass:"block-content-rows__container"},[o("div",{staticClass:"block-content-rows__col"},[o("div",{staticClass:"block-content-rows__text",domProps:{innerHTML:this._s(this.paragraphs[1].text)}})]),o("div",{staticClass:"block-content-rows__col"},[o("div",{staticClass:"block-content-rows__img",style:{background:"url("+this.images[1].img+") no-repeat center / cover"}})])])])},c=[]},AhqM:function(t,o,s){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var e=s("Jjx0"),c=s.n(e);for(var n in e)"default"!==n&&function(t){s.d(o,t,function(){return e[t]})}(n);var a=s("3CLH"),r=s("XyMi"),i=Object(r.a)(c.a,a.a,a.b,!1,null,null,null);o.default=i.exports},FDXL:function(t,o,s){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var e=s("02d8"),c=s.n(e);for(var n in e)"default"!==n&&function(t){s.d(o,t,function(){return e[t]})}(n);var a=s("bBg6"),r=s("XyMi"),i=Object(r.a)(c.a,a.a,a.b,!1,null,null,null);o.default=i.exports},Jjx0:function(t,o,s){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o.default={props:{props:{type:Object}},computed:{images:function(){return this.props.images},paragraphs:function(){return this.props.paragraphs}}}},LG26:function(t,o,s){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var e=r(s("twaq")),c=r(s("FDXL")),n=r(s("Yls5")),a=r(s("X3EY"));function r(t){return t&&t.__esModule?t:{default:t}}o.default={computed:{props:function(){return this.$store.state.pages.about}},components:{HeroPhoto:e.default,AboutDoctors:c.default,AboutStaff:n.default,AboutOffices:a.default}}},Tl0t:function(t,o,s){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var e=s("LG26"),c=s.n(e);for(var n in e)"default"!==n&&function(t){s.d(o,t,function(){return e[t]})}(n);var a=s("U10N"),r=s("XyMi"),i=Object(r.a)(c.a,a.a,a.b,!1,null,null,null);o.default=i.exports},U10N:function(t,o,s){"use strict";s.d(o,"a",function(){return e}),s.d(o,"b",function(){return c});var e=function(){var t=this.$createElement,o=this._self._c||t;return this.props?o("div",{staticClass:"pages-about"},[o("HeroPhoto",{attrs:{props:this.props.hero}}),o("AboutDoctors",{attrs:{props:this.props.doctors}}),o("AboutStaff",{attrs:{props:this.props.staff}}),o("AboutOffices",{attrs:{props:this.props.offices}})],1):this._e()},c=[]},X3EY:function(t,o,s){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var e=s("jg1r"),c=s.n(e);for(var n in e)"default"!==n&&function(t){s.d(o,t,function(){return e[t]})}(n);var a=s("/00b"),r=s("XyMi"),i=Object(r.a)(c.a,a.a,a.b,!1,null,null,null);o.default=i.exports},Yls5:function(t,o,s){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var e=s("oUFW"),c=s.n(e);for(var n in e)"default"!==n&&function(t){s.d(o,t,function(){return e[t]})}(n);var a=s("qA7X"),r=s("XyMi"),i=Object(r.a)(c.a,a.a,a.b,!1,null,null,null);o.default=i.exports},bBg6:function(t,o,s){"use strict";s.d(o,"a",function(){return e}),s.d(o,"b",function(){return c});var e=function(){var t=this,o=t.$createElement,s=t._self._c||o;return t.props?s("div",{staticClass:"custom-about-doctors"},[s("div",{staticClass:"custom-about-doctors__doctor"},[s("div",{staticClass:"custom-about-doctors__doctor-container"},[s("div",{staticClass:"custom-about-doctors__doctor-col"},[s("div",{staticClass:"custom-about-doctors__announcement-bar custom-about-doctors__announcement-bar--blue"},[s("BlockTitle",{staticClass:"custom-about-doctors__announcement-title custom-about-doctors__announcement-title--orange",attrs:{title:t.mission.title}}),s("div",{staticClass:"custom-about-doctors__announcement-body",domProps:{innerHTML:t._s(t.mission.text)}})],1),s("BlockTitle",{staticClass:"custom-about-doctors__doctor-title",attrs:{title:t.doctors[0].name}}),s("BlockRows",{staticClass:"custom-about-doctors__doctor-rows",attrs:{props:t.doctors[0]}}),s("div",{staticClass:"custom-about-doctors__announcement-bar custom-about-doctors__announcement-bar--orange"},[s("BlockTitle",{staticClass:"custom-about-doctors__announcement-title custom-about-doctors__announcement-title--blue",attrs:{title:"Outside The Office"}}),s("div",{staticClass:"custom-about-doctors__announcement-body custom-about-doctors__announcement-body--extended",domProps:{innerHTML:t._s(t.doctors[0].outside_office)}}),s("div",{staticClass:"custom-about-doctors__logos-row"},[s("BaseIcon",{staticClass:"custom-about-doctors__mets",attrs:{name:"About-DrK-Metslogo"}}),s("BaseIcon",{staticClass:"custom-about-doctors__jets",attrs:{name:"About-DrK-NYJetsLogo"}})],1)],1)],1)])]),s("div",{staticClass:"custom-about-doctors__doctor"},[s("div",{staticClass:"custom-about-doctors__doctor-container"},[s("div",{staticClass:"custom-about-doctors__doctor-col"},[s("BlockTitle",{staticClass:"custom-about-doctors__doctor-title--blue",attrs:{title:t.doctors[1].name}}),s("BlockRows",{staticClass:"custom-about-doctors__doctor-rows--black",attrs:{props:t.doctors[1]}}),s("div",{staticClass:"custom-about-doctors__announcement-bar custom-about-doctors__announcement-bar--gray"},[s("BlockTitle",{staticClass:"custom-about-doctors__announcement-title custom-about-doctors__announcement-title--orange",attrs:{title:"Outside The Office"}}),s("div",{staticClass:"custom-about-doctors__announcement-body",domProps:{innerHTML:t._s(t.doctors[1].outside_office)}}),s("div",{staticClass:"custom-about-doctors__logos-row"})],1)],1)])])]):t._e()},c=[]},iAaL:function(t,o,s){"use strict";s.d(o,"a",function(){return e}),s.d(o,"b",function(){return c});var e=function(){var t=this.$createElement,o=this._self._c||t;return this.props?o("section",{staticClass:"block-hero-photo",style:{background:"url("+this.img+") no-repeat center / cover"}},[o("div",{staticClass:"block-hero-photo__overlay"}),o("div",{staticClass:"block-hero-photo__title"},[this._v(this._s(this.title))])]):this._e()},c=[]},jg1r:function(t,o,s){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var e,c=s("62+n"),n=(e=c)&&e.__esModule?e:{default:e};o.default={props:{props:{type:Object}},data:function(){return{officeIndex:0,imgIndex:0}},computed:{activeOffice:function(){return this.props.offices[this.officeIndex]},activeImage:function(){return this.activeOffice.images[this.imgIndex]}},methods:{updateOfficeIndex:function(t){this.officeIndex=t},updateImageIndex:function(t){this.imgIndex=t}},components:{BlockTitle:n.default}}},nWXr:function(t,o,s){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o.default={props:{props:{type:Object}},computed:{title:function(){return this.props.title},img:function(){return this.props.img}}}},oUFW:function(t,o,s){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var e,c=s("62+n"),n=(e=c)&&e.__esModule?e:{default:e};o.default={props:{props:{type:Object}},components:{BlockTitle:n.default}}},qA7X:function(t,o,s){"use strict";s.d(o,"a",function(){return e}),s.d(o,"b",function(){return c});var e=function(){var t=this.$createElement,o=this._self._c||t;return o("div",{staticClass:"custom-about-staff"},[o("div",{staticClass:"custom-about-staff__container"},[o("div",{staticClass:"custom-about-staff__col"},[o("BlockTitle",{staticClass:"custom-about-staff__title",attrs:{title:this.props.title}}),o("div",{staticClass:"custom-about-staff__body",domProps:{innerHTML:this._s(this.props.body)}}),o("div",{staticClass:"custom-about-staff__staff-img",style:{background:"url("+this.props.image+") no-repeat center / cover"}})],1)])])},c=[]},twaq:function(t,o,s){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var e=s("nWXr"),c=s.n(e);for(var n in e)"default"!==n&&function(t){s.d(o,t,function(){return e[t]})}(n);var a=s("iAaL"),r=s("XyMi"),i=Object(r.a)(c.a,a.a,a.b,!1,null,null,null);o.default=i.exports}});