webpackJsonp([5],{"/MHY":function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i,n=s("62+n"),r=(i=n)&&i.__esModule?i:{default:i};e.default={props:{props:{type:Object}},data:function(){return{activeIndex:0}},computed:{activeReview:function(){return this.props.reviews[this.activeIndex]}},methods:{updateIndex:function(t){this.activeIndex=t}},components:{BlockTitle:r.default}}},"5iva":function(t,e,s){"use strict";s.d(e,"a",function(){return i}),s.d(e,"b",function(){return n});var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"custom-why-reviews"},[s("BlockTitle",{staticClass:"custom-why-reviews__title",attrs:{title:t.props.title}}),s("div",{staticClass:"custom-why-reviews__review-container"},[s("div",{staticClass:"custom-why-reviews__name",domProps:{innerHTML:t._s(t.activeReview.name)}}),s("div",{staticClass:"custom-why-reviews__content",domProps:{innerHTML:t._s(t.activeReview.content)}}),s("div",{staticClass:"custom-why-reviews__date",domProps:{innerHTML:t._s(t.activeReview.date)}})]),s("div",{staticClass:"custom-why-reviews__dot-row"},t._l(t.props.reviews,function(e,i){return s("div",{staticClass:"custom-why-reviews__dot",class:{"custom-why-reviews__dot--active":i===t.activeIndex},on:{click:function(e){return t.updateIndex(i)}}})}),0)],1)},n=[]},"6xD5":function(t,e,s){"use strict";s.d(e,"a",function(){return i}),s.d(e,"b",function(){return n});var i=function(){var t=this.$createElement,e=this._self._c||t;return this.props?e("div",{staticClass:"pages-why-us"},[e("HeroPhoto",{attrs:{props:this.props.hero}}),e("WhyValue",{attrs:{props:this.props.value}}),e("WhyResults",{attrs:{props:this.props.results}}),e("WhyReviews",{attrs:{props:this.props.reviews}})],1):this._e()},n=[]},ABqi:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=o(s("twaq")),n=o(s("Y3Nx")),r=o(s("fjfV")),u=o(s("BC6p"));function o(t){return t&&t.__esModule?t:{default:t}}e.default={computed:{props:function(){return this.$store.state.pages["why-us"]}},components:{HeroPhoto:i.default,WhyValue:n.default,WhyResults:r.default,WhyReviews:u.default}}},BC6p:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s("/MHY"),n=s.n(i);for(var r in i)"default"!==r&&function(t){s.d(e,t,function(){return i[t]})}(r);var u=s("5iva"),o=s("XyMi"),a=Object(o.a)(n.a,u.a,u.b,!1,null,null,null);e.default=a.exports},Y3Nx:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s("yEFP"),n=s.n(i);for(var r in i)"default"!==r&&function(t){s.d(e,t,function(){return i[t]})}(r);var u=s("giAc"),o=s("XyMi"),a=Object(o.a)(n.a,u.a,u.b,!1,null,null,null);e.default=a.exports},fjfV:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s("nMv/"),n=s.n(i);for(var r in i)"default"!==r&&function(t){s.d(e,t,function(){return i[t]})}(r);var u=s("pRQF"),o=s("XyMi"),a=Object(o.a)(n.a,u.a,u.b,!1,null,null,null);e.default=a.exports},fqg6:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s("ABqi"),n=s.n(i);for(var r in i)"default"!==r&&function(t){s.d(e,t,function(){return i[t]})}(r);var u=s("6xD5"),o=s("XyMi"),a=Object(o.a)(n.a,u.a,u.b,!1,null,null,null);e.default=a.exports},giAc:function(t,e,s){"use strict";s.d(e,"a",function(){return i}),s.d(e,"b",function(){return n});var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"custom-why-value"},[s("BlockTitle",{staticClass:"custom-why-value__title",attrs:{title:t.props.title}}),s("div",{staticClass:"custom-why-value__container"},t._l(t.props.values,function(e,i){return s("div",{staticClass:"custom-why-value__block"},[s("BaseIcon",{staticClass:"custom-why-value__block-icon",attrs:{name:e.icon}}),s("div",{staticClass:"custom-why-value__block-title",domProps:{innerHTML:t._s(e.section_title)}}),s("div",{staticClass:"custom-why-value__block-description",domProps:{innerHTML:t._s(e.text)}})],1)}),0)],1)},n=[]},"nMv/":function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i,n=s("62+n"),r=(i=n)&&i.__esModule?i:{default:i};e.default={props:{props:{type:Object}},components:{BlockTitle:r.default}}},pRQF:function(t,e,s){"use strict";s.d(e,"a",function(){return i}),s.d(e,"b",function(){return n});var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"custom-why-results"},[s("div",{staticClass:"custom-why-results__container"},[s("div",{staticClass:"custom-why-results__col"},[s("BlockTitle",{staticClass:"custom-why-results__title",attrs:{title:t.props.title}}),s("div",{staticClass:"custom-why-results__results-container"},t._l(t.props.people,function(e,i){return s("div",{staticClass:"custom-why-results__result"},[s("div",{staticClass:"custom-why-results__img",style:{background:"url("+e.img+") no-repeat center / cover"}}),s("div",{staticClass:"custom-why-results__name",domProps:{innerHTML:t._s(e.name)}})])}),0)],1)])])},n=[]},yEFP:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i,n=s("62+n"),r=(i=n)&&i.__esModule?i:{default:i};e.default={props:{props:{type:Object}},components:{BlockTitle:r.default}}}});