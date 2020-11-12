(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{380:function(t,s,e){"use strict";e.r(s);var n=e(42),a=Object(n.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"default-config-yml"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#default-config-yml"}},[t._v("#")]),t._v(" Default config.yml")]),t._v(" "),e("div",{staticClass:"language-yml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-yml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# You can create generators as much as you want.")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# Important: All generators should be named "generator1", "generator2", etc. ')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# You can define the spawnrates of any block in the blocks-section.")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# The spawnrates are in percent, for example 57.3 are 57,3%.")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# All values together should be 100%. If all values together are higher or lower as 100, the plugin would'nt work correctly.")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# The permissions are custom, so you can make a generator for VIPS, and give them the permission "oregen.vip".')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Are you finish with configuring? Just type /customoregen to reload the plugin!")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Note: If the Island's owner is offline, the cobblestone generator would be choose the first Generator-Config.")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("generators")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("generator1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# default generator")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# name of the generator (does not need to be set, just for placeholders)")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("label")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"beginner"')]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("blocks")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Please use Bukkit-Blocknames. List: https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/Material.html")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" STONE"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("50.0")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" SANDSTONE"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("40.0")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" IRON_ORE"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("10.0")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("permission")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# You can also define from what level the generator should be activated. Example: Leave all permissions empty and")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# only work with the island Level. The plugin would only consider the islandLevel then.")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("unlock_islandLevel")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("generator2")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# vip generator, VIPS need generators.vip permission")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("label")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"VIP"')]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("blocks")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" IRON_ORE"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("90.0")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" STONE"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("5.0")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" SANDSTONE"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("5.0")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("permission")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'oregen.vip'")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("unlock_islandLevel")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Here you can define worlds where the generator should not work")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("disabled-worlds")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"world_nether"')]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("enable-stone-generator")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("false")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=a.exports}}]);