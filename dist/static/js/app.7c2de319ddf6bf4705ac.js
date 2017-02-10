webpackJsonp([1,0],[function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}var a=n(47),r=o(a),s=n(46),i=o(s),d=n(45),c=o(d),u=n(25),m=o(u),l=n(33),f=o(l),p=n(34),h=o(p);r.default.use(i.default),r.default.use(c.default,{secure:!1,host:"localhost",port:3e3});var v=[{path:"/",component:f.default},{path:"/playlist",component:h.default}],b=new i.default({mode:"history",routes:v});new r.default({router:b,el:"#app",template:"<App/>",components:{App:m.default}})},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"app"}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"about",data:function(){return{}}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"command",props:["description","command"]}},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var a=n(29),r=o(a),s=n(27),i=o(s);e.default={name:"commands",components:{Module:r.default,Command:i.default}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"module",props:["name"]}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"Footer",data:function(){return{}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),n(22),n(11).polyfill(),e.default={name:"hero",data:function(){return{imageSrc:"../assets/logo.png",name:"DISBOTT",tag:"Discord robot for your server",version:{name:"v3",link:"https://github.com/uchuuio/disbott"},build:"",coverage:"0"}},created:function(){this.getCurrentVersion(),this.getBuildData(),this.getCurrentCoverage()},methods:{getCurrentVersion:function(){var t=this;fetch("https://api.github.com/repos/uchuuio/disbott/releases").then(function(t){if(t.status>=400)throw new Error("Bad response from server");return t.json()}).then(function(e){t.version.name=e[0].name,t.version.link=e[0].html_url})},getBuildData:function(){var t=this;fetch("/api/appveyor").then(function(t){if(t.status>=400)throw new Error("Bad response from server");return t.json()}).then(function(e){"success"===e.build.status?t.build="Passing":t.build="Failing"})},getCurrentCoverage:function(){var t=this;fetch("/api/coveralls").then(function(t){if(t.status>=400)throw new Error("Bad response from server");return t.json()}).then(function(e){t.coverage=e.covered_percent.toFixed(2)})}}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"navigation",data:function(){return{}}}},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var a=n(31),r=o(a),s=n(32),i=o(s),d=n(28),c=o(d),u=n(26),m=o(u),l=n(30),f=o(l);e.default={name:"index",components:{Hero:r.default,Navigation:i.default,Commands:c.default,About:m.default,Footer:f.default}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"playlist",data:function(){return{loading:!1,songs:{}}},created:function(){this.getSongs()},watch:{$route:"getSongs"},methods:{getSongs:function(){this.$remote.$on("getSongs",function(t){console.log(t)})},addSong:function(t){console.log(t),this.$remote.$emit("addSong",t)}}}},,function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},,,function(t,e,n){t.exports=n.p+"static/img/disbott.7064d5c.png"},function(t,e,n){var o,a;n(13),o=n(1);var r=n(36);a=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(a=o=o.default),"function"==typeof a&&(a=a.options),a.render=r.render,a.staticRenderFns=r.staticRenderFns,t.exports=o},function(t,e,n){var o,a;n(12),o=n(2);var r=n(35);a=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(a=o=o.default),"function"==typeof a&&(a=a.options),a.render=r.render,a.staticRenderFns=r.staticRenderFns,a._scopeId="data-v-05e1ada0",t.exports=o},function(t,e,n){var o,a;n(17),o=n(3);var r=n(40);a=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(a=o=o.default),"function"==typeof a&&(a=a.options),a.render=r.render,a.staticRenderFns=r.staticRenderFns,a._scopeId="data-v-6c3dd284",t.exports=o},function(t,e,n){var o,a;n(18),o=n(4);var r=n(41);a=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(a=o=o.default),"function"==typeof a&&(a=a.options),a.render=r.render,a.staticRenderFns=r.staticRenderFns,a._scopeId="data-v-83afd66a",t.exports=o},function(t,e,n){var o,a;n(19),o=n(5);var r=n(42);a=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(a=o=o.default),"function"==typeof a&&(a=a.options),a.render=r.render,a.staticRenderFns=r.staticRenderFns,a._scopeId="data-v-add6c67a",t.exports=o},function(t,e,n){var o,a;n(20),o=n(6);var r=n(43);a=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(a=o=o.default),"function"==typeof a&&(a=a.options),a.render=r.render,a.staticRenderFns=r.staticRenderFns,a._scopeId="data-v-b2451af0",t.exports=o},function(t,e,n){var o,a;n(14),o=n(7);var r=n(37);a=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(a=o=o.default),"function"==typeof a&&(a=a.options),a.render=r.render,a.staticRenderFns=r.staticRenderFns,a._scopeId="data-v-27d936a7",t.exports=o},function(t,e,n){var o,a;n(16),o=n(8);var r=n(39);a=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(a=o=o.default),"function"==typeof a&&(a=a.options),a.render=r.render,a.staticRenderFns=r.staticRenderFns,a._scopeId="data-v-5f441ffe",t.exports=o},function(t,e,n){var o,a;n(15),o=n(9);var r=n(38);a=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(a=o=o.default),"function"==typeof a&&(a=a.options),a.render=r.render,a.staticRenderFns=r.staticRenderFns,t.exports=o},function(t,e,n){var o,a;n(21),o=n(10);var r=n(44);a=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(a=o=o.default),"function"==typeof a&&(a=a.options),a.render=r.render,a.staticRenderFns=r.staticRenderFns,t.exports=o},function(t,e){t.exports={render:function(){var t=this;t.$createElement;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement;return e("div",{staticClass:"about mw8 mw9-ns center pa3 ph5-ns",attrs:{id:"about"}},[e("h3",["About"])," ",e("p",["Disbott is a chatbot for Discord, a primarily gaming based text & voice chat software. Created originally by tomo in JS the project switch to using C# so fellow uchuu members could help out and allows us to better learn and help each other. Disbott is still in early days permissions need to be configured manually and it doesn't have persistent memory between versions & downtime but the uchuu team are hard at work making this a great chatbot to use."])," ",e("p",["If you have any feedback we'd love to hear! You can get in touch via our discord server, a Github Issue or via Twitter for those uchuu members that have one."])," ",e("p",["We hope you enjoy Disbott!"])," ",e("p",{staticClass:"tr"},["-- tomo@uchuu"])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return e("div",{attrs:{id:"app"}},[e("router-view")])},staticRenderFns:[]}},function(t,e,n){t.exports={render:function(){var t=this,e=t.$createElement;return e("div",{staticClass:"hero"},[e("img",{staticClass:"logo",attrs:{src:n(24),alt:t.name}})," ",e("div",{staticClass:"info ml2 mt4"},[e("a",{staticClass:"f4 version",attrs:{href:t.version.link,title:"Current Version"}},[t._s(t.version.name)])," ",e("h2",[t._s(t.tag)])," ",e("p",{staticClass:"dev-info"},["\n      Build: ",e("a",{staticClass:"appveyor-build",attrs:{href:"https://ci.appveyor.com/project/uchuu/disbott",title:"Appveyor Latest Build"}},[t._s(t.build)])," |\n      Test Coverage: ",e("a",{staticClass:"coveralls",attrs:{href:"https://coveralls.io/github/uchuuio/disbott",title:"Coveralls Test Coverage"}},[t._s(t.coverage)+"%"])])])," ",e("div",{staticClass:"cf"})])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return e("div",{attrs:{id:"index"}},[e("Hero")," ",e("Navigation")," ",e("Commands")," ",e("About")," ",e("Footer")])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this;t.$createElement;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement;return e("nav",{staticClass:"navigation f6 fw6 ttu tracked dt border-box pa3 w-100"},[e("div",{staticClass:"dtc v-mid w-75"},[e("a",{staticClass:"link dim white dib mr3",attrs:{href:"#about",title:"About"}},["About"])," ",e("a",{staticClass:"link dim white dib mr3",attrs:{href:"#commands",title:"Commands"}},["Commands"])," ",e("a",{staticClass:"link dim white dib mr3",attrs:{href:"#",title:"Add to server"}},["Add to server"])])," ",e("div",{staticClass:"dtc v-mid w-25 tr"},[e("a",{staticClass:"link dim white dib mr3",attrs:{href:"#",title:"Join our server"}},["Join our server"])," ",e("a",{staticClass:"link dim white dib",attrs:{href:"https://github.com/uchuuio/disbott",title:"Github"}},["Github"])])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return e("div",{staticClass:"command"},[e("p",[e("span",{staticClass:"description"},[t._s(t.description)])," ",e("code",["@disbott "+t._s(t.command)])])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return e("div",{staticClass:"commands mw8 mw9-ns center pa3 ph5-ns",attrs:{id:"commands"}},[e("h3",["Commands"])," ",e("module",{attrs:{name:"Coinflip"}},[e("command",{attrs:{description:"Flips a coin!",command:"flip"}})])," ",e("module",{attrs:{name:"giphy"}},[e("command",{attrs:{description:"Gets a random gif",command:"giphy"}})," ",e("command",{attrs:{description:"Gets a random gif with desired searchterm",command:"giphy {searchterm}"}})])," ",e("module",{attrs:{name:"LoL (League of Legends)"}},[e("command",{attrs:{description:"Links the specified summoner to your discord account",command:"setsummoner {username}"}})," ",e("command",{attrs:{description:"Gets the ranked stats for yourself",command:"ranked"}})," ",e("command",{attrs:{description:"Gets the ranked stats for specified discord/league account",command:"ranked {username}"}})," ",e("command",{attrs:{description:"Gets the current game for yourself",command:"currentgame"}})," ",e("command",{attrs:{description:"Gets the current game for specified discord/league account",command:"currentgame {username}"}})])," ",e("module",{attrs:{name:"Message Count"}},[e("command",{attrs:{description:"Displays Current Message Count for yourself",command:"messagecount"}})])," ",e("module",{attrs:{name:"Poll (Yes or No)"}},[e("command",{attrs:{description:"Gets all the current polls",command:"currentpolls"}})," ",e("command",{attrs:{description:"Starts a poll (Only 1 Poll may be active at a time)",command:"newpoll {pollquestion}"}})," ",e("command",{attrs:{description:"Vote on a poll",command:"vote {yes|no}"}})," ",e("command",{attrs:{description:"Delete the current poll (May only be run by user that created poll)",command:"deletepoll {poll id}"}})," ",e("command",{attrs:{description:"Delete all Polls (Admin Only)",command:"deleteallpolls"}})])," ",e("module",{attrs:{name:"Quotes"}},[e("command",{attrs:{description:"Adds a new quote (name must contain no spaces but quote can)",command:"addquote {name} {quote}"}})," ",e("command",{attrs:{description:"Gets a quote from a name",command:"quote {name}"}})," ",e("command",{attrs:{description:"Removes quote from a name",command:"deletequote {quote}"}})])," ",e("module",{attrs:{name:"Remind Me"}},[e("command",{attrs:{description:"Show your current reminders",command:"myreminders"}})," ",e("command",{attrs:{description:"Reminds a user something in a set amount of time",command:"remindmein {h} {m} {s} {reminder}"}})," ",e("command",{attrs:{description:"Reminds all users something in a set amount of time",command:"remindallin {h} {m} {s} {reminder}"}})," ",e("command",{attrs:{description:"Remindes a user something at a set time",command:"remindmethen {date/time (11/01/17 || 20:20:20 || '11/01/17 20:20:20'')} {reminder}"}})," ",e("command",{attrs:{description:"Reminds all users something at a set time",command:"remindmethen {date/time (11/01/17 || 20:20:20 || '11/01/17 20:20:20'')} {reminder}"}})," ",e("command",{attrs:{description:"Deletes one of your current reminders",command:"deletereminder {reminder id}"}})," ",e("command",{attrs:{description:"Deletes a reminder (Admin Only)",command:"admindeletereminder {reminder id}"}})])," ",e("module",{attrs:{name:"Roll"}},[e("command",{attrs:{description:"Rolls a Dice! (Use format 'xdy')",command:"roll {userinput}"}})])," ",e("module",{attrs:{name:"Twitter"}},[e("command",{attrs:{description:"Gets the latest tweet from The Guardian's Twitter Account",command:"headline"}})," ",e("command",{attrs:{description:"Gets the latest tweet from the specified Twitter Account (No @)",command:"tweet {user}"}})," ",e("command",{attrs:{description:"Gets a random tweet from the specified Twitter Account (No @)",command:"randomtweet {user}"}})," ",e("command",{attrs:{description:"NSFW, gets a random image from @idol_gazo Twitter Account",command:"gazo"}})])," ",e("module",{attrs:{name:"Utils"}},[e("command",{attrs:{description:"Responds Pong",command:"ping"}})," ",e("command",{attrs:{description:"Tells user about Disbott",command:"about"}})," ",e("command",{attrs:{description:"Tells user the current Disbott info",command:"info"}})," ",e("command",{attrs:{description:"Lists all the current disbott modules",command:"modules"}})," ",e("command",{attrs:{description:"Gives explanation for all disbott commands",command:"help {module}"}})," ",e("command",{attrs:{description:"Tells user the current Disbott info",command:"info"}})," ",e("command",{attrs:{description:"Kills the Disbott Instance (Admin Only)",command:"kill"}})])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return e("div",{staticClass:"module"},[e("h4",[t._s(t.name)])," ",t._t("default")])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this;t.$createElement;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement;return e("footer",{staticClass:"footer"},[e("a",{attrs:{href:"https://www.uchuu.io",title:"Created by uchuu & friends"}},["-uchuu-"])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return e("div",{attrs:{id:"playlist"}},[e("h1",["Playlist"])," ",e("form",{attrs:{action:""},on:{submit:function(e){e.preventDefault(),t.addSong(e)}}},[e("input",{attrs:{type:"text",name:"url"}})])])},staticRenderFns:[]}},,,,,function(t,e){}]);
//# sourceMappingURL=app.7c2de319ddf6bf4705ac.js.map