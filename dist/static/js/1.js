webpackJsonp([1],{"06z1":function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n,a=s("62+n"),i=(n=a)&&n.__esModule?n:{default:n};e.default={props:{props:{type:Object}},created:function(){var t=this;this.counter=setInterval(function(){t.updateIndex("increment")},this.timeout)},data:function(){return{counter:null,timeout:6e3,activeIndex:0}},computed:{activeProblem:function(){return this.props.problems[this.activeIndex]}},methods:{jumpToIndex:function(t){var e=this;clearInterval(this.counter),this.counter=setInterval(function(){e.updateIndex("increment")},this.timeout),this.activeIndex=t},updateIndex:function(t){var e=this;"increment"===t?e.activeIndex===e.props.problems.length-1?e.activeIndex=0:e.activeIndex++:0===e.activeIndex?e.activeIndex=e.props.problems.length-1:e.activeIndex--}},components:{BlockTitle:i.default}}},"59cP":function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s("m4Da"),a=s.n(n);for(var i in n)"default"!==i&&function(t){s.d(e,t,function(){return n[t]})}(i);var r=s("8j1z"),o=s("XyMi"),c=Object(o.a)(a.a,r.a,r.b,!1,null,null,null);e.default=c.exports},"8j1z":function(t,e,s){"use strict";s.d(e,"a",function(){return n}),s.d(e,"b",function(){return a});var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"custom-treatments-braces"},[s("BlockTitle",{staticClass:"custom-treatments-braces__title",attrs:{title:t.props.title}}),s("div",{staticClass:"custom-treatments-braces__row"},[s("div",{staticClass:"custom-treatments-braces__image-col"},[s("div",{staticClass:"custom-treatments-braces__image",style:{background:"url("+t.activeImages[0].img+") no-repeat center / cover"}})]),s("div",{staticClass:"custom-treatments-braces__center-col"},[s("div",{staticClass:"custom-treatments-braces__options-row"},t._l(t.props.types,function(e,n){return s("div",{staticClass:"custom-treatments-braces__option",class:{"custom-treatments-braces__option--active":t.activeIndex===n},domProps:{innerHTML:t._s(e.title)},on:{click:function(e){return t.updateIndex(n)}}})}),0),s("div",{staticClass:"custom-treatments-braces__content",domProps:{innerHTML:t._s(t.activeSection.content)}})]),s("div",{staticClass:"custom-treatments-braces__image-col"},[s("div",{staticClass:"custom-treatments-braces__image",style:{background:"url("+t.activeImages[1].img+") no-repeat center / cover"}})])])],1)},a=[]},"8wAb":function(t,e,s){"use strict";s.d(e,"a",function(){return n}),s.d(e,"b",function(){return a});var n=function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"custom-treatments-itero"},[e("div",{staticClass:"custom-treatments-itero__container"},[e("div",{staticClass:"custom-treatments-itero__col"},[e("BlockTitle",{staticClass:"custom-treatments-itero__title",attrs:{title:"Itero Element"}})],1)]),e("div",{staticClass:"custom-treatments-itero__row-container"},[e("div",{staticClass:"custom-treatments-itero__container"},[e("div",{staticClass:"custom-treatments-itero__photo",style:{background:"url("+this.props.img+") no-repeat center / cover"}}),e("div",{staticClass:"custom-treatments-itero__col-half"},[e("div",{staticClass:"custom-treatments-itero__content",domProps:{innerHTML:this._s(this.props.content)}})])]),e("div",{staticClass:"custom-treatments-itero__photo-half",style:{background:"url("+this.props.img+") no-repeat center / cover"}})])])},a=[]},ALno:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s("R/dZ"),a=s.n(n);for(var i in n)"default"!==i&&function(t){s.d(e,t,function(){return n[t]})}(i);var r=s("8wAb"),o=s("XyMi"),c=Object(o.a)(a.a,r.a,r.b,!1,null,null,null);e.default=c.exports},"BE/i":function(t,e,s){"use strict";s.d(e,"a",function(){return n}),s.d(e,"b",function(){return a});var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"custom-treatments-problems"},[s("BlockTitle",{staticClass:"custom-treatments-problems__title",attrs:{title:t.props.title}}),s("div",{staticClass:"custom-treatments-problems__wrapper"},[s("div",{staticClass:"custom-treatments-problems__col"},[s("div",{staticClass:"custom-treatments-problems__problem-title",domProps:{innerHTML:t._s(t.activeProblem.title)}}),s("div",{staticClass:"custom-treatments-problems__problem-text",domProps:{innerHTML:t._s(t.activeProblem.text)}}),s("div",{staticClass:"custom-treatments-problems__dot-row"},t._l(t.props.problems,function(e,n){return s("div",{staticClass:"custom-treatments-problems__dot",class:{"custom-treatments-problems__dot--active":n===t.activeIndex},on:{click:function(e){return t.jumpToIndex(n)}}})}),0)]),s("div",{staticClass:"custom-treatments-problems__col"},[s("BaseIcon",{staticClass:"custom-treatments-problems__problem-icon",attrs:{name:t.activeProblem.graphic_name}})],1)])],1)},a=[]},GNrJ:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n,a=s("62+n"),i=(n=a)&&n.__esModule?n:{default:n};e.default={props:{props:{type:Object}},computed:{animationState:function(){return this.$store.state.animationState["treatments-phase"]}},components:{BlockTitle:i.default}}},Gp96:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s("06z1"),a=s.n(n);for(var i in n)"default"!==i&&function(t){s.d(e,t,function(){return n[t]})}(i);var r=s("BE/i"),o=s("XyMi"),c=Object(o.a)(a.a,r.a,r.b,!1,null,null,null);e.default=c.exports},IaxJ:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n,a=s("AhqM"),i=(n=a)&&n.__esModule?n:{default:n};e.default={props:{props:{type:Object}},data:function(){return{activeIndex:0}},computed:{activeSection:function(){return this.props.invisalign_types[this.activeIndex]}},methods:{updateIndex:function(t){this.activeIndex=t}},components:{BlockRows:i.default}}},M8ZZ:function(t,e,s){"use strict";s.d(e,"a",function(){return n}),s.d(e,"b",function(){return a});var n=function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"custom-treatments-brushing"},[e("div",{staticClass:"custom-treatments-brushing__container"},[e("div",{staticClass:"custom-treatments-brushing__col"},[e("BlockTitle",{staticClass:"custom-treatments-brushing__title",attrs:{title:this.props.title}}),e("BlockRows",{attrs:{props:this.props}}),e("div",{staticClass:"custom-treatments-brushing__announcement"},[e("BaseIcon",{staticClass:"custom-treatments-brushing__announcement-icon",attrs:{name:"Exclamation"}}),e("div",{staticClass:"custom-treatments-brushing__announcement-text",domProps:{innerHTML:this._s(this.props.announcement)}}),e("BaseIcon",{staticClass:"custom-treatments-brushing__announcement-icon",attrs:{name:"Exclamation"}})],1)],1)])])},a=[]},MDqq:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s("tGAG"),a=s.n(n);for(var i in n)"default"!==i&&function(t){s.d(e,t,function(){return n[t]})}(i);var r=s("M8ZZ"),o=s("XyMi"),c=Object(o.a)(a.a,r.a,r.b,!1,null,null,null);e.default=c.exports},"OWY/":function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s("GNrJ"),a=s.n(n);for(var i in n)"default"!==i&&function(t){s.d(e,t,function(){return n[t]})}(i);var r=s("n0nR"),o=s("XyMi"),c=Object(o.a)(a.a,r.a,r.b,!1,null,null,null);e.default=c.exports},"R/dZ":function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n,a=s("62+n"),i=(n=a)&&n.__esModule?n:{default:n};e.default={props:{props:{type:Object}},components:{BlockTitle:i.default}}},cZN6:function(t,e,s){"use strict";s.d(e,"a",function(){return n}),s.d(e,"b",function(){return a});var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.props?s("div",{staticClass:"custom-treatments-invisalign"},[s("div",{staticClass:"custom-treatments-invisalign__container"},[s("div",{staticClass:"custom-treatments-invisalign__col"},[t._m(0),s("div",{staticClass:"custom-treatments-invisalign__invisalign-container"},[s("div",{staticClass:"custom-treatments-invisalign__invisalign-title-row"},t._l(t.props.invisalign_types,function(e,n){return s("div",{staticClass:"custom-treatments-invisalign__invisalign-title",class:{"custom-treatments-invisalign__invisalign-title--active":t.activeIndex===n},domProps:{innerHTML:t._s(e.title)},on:{click:function(e){return t.updateIndex(n)}}})}),0),s("BlockRows",{attrs:{props:t.activeSection}})],1)])])]):t._e()},a=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"custom-treatments-invisalign__title"},[e("span",[this._v("Invis")]),e("span",[this._v("Align")])])}]},hKcT:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s("IaxJ"),a=s.n(n);for(var i in n)"default"!==i&&function(t){s.d(e,t,function(){return n[t]})}(i);var r=s("cZN6"),o=s("XyMi"),c=Object(o.a)(a.a,r.a,r.b,!1,null,null,null);e.default=c.exports},iKdN:function(t,e,s){"use strict";s.d(e,"a",function(){return n}),s.d(e,"b",function(){return a});var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.props?s("div",{staticClass:"pages-treatments"},[s("HeroPhoto",{attrs:{props:t.props.hero}}),s("TreatmentsInvisalign",{attrs:{id:"invisalign",props:t.props.invisalign}}),s("TreatmentsItero",{attrs:{props:t.props.itero}}),s("TreatmentsBraces",{directives:[{name:"waypoint",rawName:"v-waypoint",value:{active:!0,callback:t.activateAnimation,options:t.thresholdOptions},expression:"{ active: true, callback: activateAnimation, options: thresholdOptions }"}],attrs:{props:t.props.braces}}),s("TreatmentsPhase",{directives:[{name:"waypoint",rawName:"v-waypoint",value:{active:!0,callback:t.activateAnimation,options:t.thresholdOptions},expression:"{ active: true, callback: activateAnimation, options: thresholdOptions }"}],attrs:{id:"treatments-phase",props:t.props.phase}}),s("TreatmentsBrushing",{attrs:{props:t.props.brushing}}),s("TreatmentsProblems",{attrs:{props:t.props.problems}})],1):t._e()},a=[]},m4Da:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n,a=s("62+n"),i=(n=a)&&n.__esModule?n:{default:n};e.default={props:{props:{type:Object}},data:function(){return{activeIndex:0}},computed:{activeSection:function(){return this.props.types[this.activeIndex]},activeImages:function(){return this.activeSection.images}},methods:{updateIndex:function(t){this.activeIndex=t}},components:{BlockTitle:i.default}}},n0nR:function(t,e,s){"use strict";s.d(e,"a",function(){return n}),s.d(e,"b",function(){return a});var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"custom-treatments-phase"},[s("div",{staticClass:"custom-treatments-phase__container"},[s("div",{staticClass:"custom-treatments-phase__col"},[s("BlockTitle",{staticClass:"custom-treatments-phase__title",attrs:{title:t.props.title}})],1)]),t._l(t.props.sections,function(e,n){return s("div",{staticClass:"custom-treatments-phase__section-container",class:{"custom-treatments-phase__section-container--reverse":n%2==1}},[s("div",{staticClass:"custom-treatments-phase__section-title",class:{"custom-treatments-phase__section-title--active":t.animationState},domProps:{innerHTML:t._s(e.section_heading)}}),s("div",{staticClass:"custom-treatments-phase__section"},[s("div",{staticClass:"custom-treatments-phase__col"},[s("div",{staticClass:"custom-treatments-phase__img",style:{background:"url("+e.img+") no-repeat center / cover"}})]),s("div",{staticClass:"custom-treatments-phase__col"},[s("div",{staticClass:"custom-treatments-phase__content",domProps:{innerHTML:t._s(e.content)}})])])])})],2)},a=[]},nX0G:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=m(s("twaq")),a=m(s("hKcT")),i=m(s("ALno")),r=m(s("59cP")),o=m(s("OWY/")),c=m(s("MDqq")),u=m(s("Gp96")),l=s("kHSb");function m(t){return t&&t.__esModule?t:{default:t}}e.default={mixins:[l.activateAnimation,l.thresholdOptions],computed:{props:function(){return this.$store.state.pages.treatments}},components:{HeroPhoto:n.default,TreatmentsInvisalign:a.default,TreatmentsItero:i.default,TreatmentsBraces:r.default,TreatmentsPhase:o.default,TreatmentsBrushing:c.default,TreatmentsProblems:u.default}}},szJu:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s("nX0G"),a=s.n(n);for(var i in n)"default"!==i&&function(t){s.d(e,t,function(){return n[t]})}(i);var r=s("iKdN"),o=s("XyMi"),c=Object(o.a)(a.a,r.a,r.b,!1,null,null,null);e.default=c.exports},tGAG:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(s("62+n")),a=i(s("AhqM"));function i(t){return t&&t.__esModule?t:{default:t}}e.default={props:{props:{type:Object}},components:{BlockTitle:n.default,BlockRows:a.default}}}});