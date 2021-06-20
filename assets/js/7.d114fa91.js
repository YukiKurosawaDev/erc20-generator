(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{309:function(e,t,a){"use strict";t.a={data:function(){return{tokenDetails:[{name:"SimpleERC20",version:"4.0.0",standard:!0,verified:!0,detailed:!0,customizeDecimals:!1,supplyType:"Fixed",accessType:"None",transferType:"Unstoppable",mintable:!1,burnable:!1,erc1363:!1,tokenRecover:!1,removeCopyright:!1,originalPrice:0,price:0,gas:1163434},{name:"StandardERC20",version:"4.0.1",standard:!0,verified:!0,detailed:!0,customizeDecimals:!0,supplyType:"Fixed",accessType:"None",transferType:"Unstoppable",mintable:!1,burnable:!1,erc1363:!1,tokenRecover:!1,removeCopyright:!0,originalPrice:.15,price:0,gas:1123801},{name:"BurnableERC20",version:"4.2.0",standard:!0,verified:!0,detailed:!0,customizeDecimals:!0,supplyType:"Fixed",accessType:"None",transferType:"Unstoppable",mintable:!1,burnable:!0,erc1363:!1,tokenRecover:!1,removeCopyright:!0,originalPrice:.2,price:0,gas:1330812},{name:"MintableERC20",version:"4.5.0",standard:!0,verified:!0,detailed:!0,customizeDecimals:!0,supplyType:"Capped",accessType:"Ownable",transferType:"Unstoppable",mintable:!0,burnable:!1,erc1363:!1,tokenRecover:!1,removeCopyright:!0,originalPrice:.25,price:0,gas:1502638},{name:"PausableERC20",version:"4.6.0",standard:!0,verified:!0,detailed:!0,customizeDecimals:!0,supplyType:"Fixed",accessType:"Ownable",transferType:"Pausable",mintable:!1,burnable:!1,erc1363:!1,tokenRecover:!1,removeCopyright:!0,originalPrice:.3,price:0,gas:1367134},{name:"CommonERC20",version:"4.0.1",standard:!0,verified:!0,detailed:!0,customizeDecimals:!0,supplyType:"Capped",accessType:"Ownable",transferType:"Unstoppable",mintable:!0,burnable:!0,erc1363:!1,tokenRecover:!1,removeCopyright:!0,originalPrice:.35,price:0,gas:1919665},{name:"UnlimitedERC20",version:"4.4.0",standard:!0,verified:!0,detailed:!0,customizeDecimals:!0,supplyType:"Unlimited",accessType:"Role Based",transferType:"Unstoppable",mintable:!0,burnable:!0,erc1363:!1,tokenRecover:!1,removeCopyright:!0,originalPrice:.45,price:0,gas:2615887},{name:"AmazingERC20",version:"4.4.0",standard:!0,verified:!0,detailed:!0,customizeDecimals:!0,supplyType:"Unlimited",accessType:"Ownable",transferType:"Unstoppable",mintable:!0,burnable:!0,erc1363:!0,tokenRecover:!0,removeCopyright:!0,originalPrice:.85,price:0,gas:2665131},{name:"PowerfulERC20",version:"4.3.0",standard:!0,verified:!0,detailed:!0,customizeDecimals:!0,supplyType:"Capped",accessType:"Role Based",transferType:"Unstoppable",mintable:!0,burnable:!0,erc1363:!0,tokenRecover:!0,removeCopyright:!0,originalPrice:.95,price:0,gas:3525945}]}}}},345:function(e,t,a){"use strict";a.r(t);a(10),a(12),a(15);var i={name:"PricingTable",mixins:[a(309).a],data:function(){return{carousel:null,slide:null}},mounted:function(){var e=this;a.e(19).then(a.t.bind(null,334,7)).then((function(t){e.carousel=t.Carousel,e.slide=t.Slide})).catch((function(e){console.log(e)}))}},s=a(43),n=Object(s.a)(i,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"pricing-table"},[a("b-row",{staticClass:"mb-5"},[a("b-col",{attrs:{lg:"10","offset-lg":"1"}},[a("h4",{staticClass:"text-center font-weight-light text-light"},[e._v("\n                Choose between "+e._s(e.tokenDetails.length)+" different Token types.\n            ")]),e._v(" "),a("p",{staticClass:"text-center font-weight-light text-light"},[e._v("\n                What are your Token requirements?\n            ")])])],1),e._v(" "),e.carousel?a(e.carousel,{tag:"component",attrs:{perPageCustom:[[0,1],[576,2],[992,3],[1536,4]],paginationColor:"#343a40",paginationActiveColor:"#f8f9fa"}},e._l(e.tokenDetails,(function(t,i){return e.slide?a(e.slide,{tag:"component"},[a("b-card",{staticClass:"mb-3 mx-3",attrs:{"no-body":"",itemscope:"",itemtype:"http://schema.org/Product"}},[a("b-card-title",{staticClass:"pt-5 font-weight-light text-center",attrs:{itemprop:"name"}},[e._v("\n                    "+e._s(t.name)+"\n                ")]),e._v(" "),a("p",{staticClass:"card-price text-center"},[t.originalPrice!==t.price?a("b-badge",{attrs:{variant:"danger"}},[a("s",[e._v(e._s(t.originalPrice)+" "),a("small",[e._v("ETH")])])]):e._e(),e._v(" "),a("span",{staticClass:"align-middle",attrs:{itemprop:"offers",itemscope:"",itemtype:"http://schema.org/Offer"}},[a("span",{attrs:{itemprop:"price"}},[e._v(e._s(t.price))]),e._v(" "),a("small",{staticClass:"term",attrs:{itemprop:"priceCurrency"}},[e._v("ETH")])])],1),e._v(" "),a("b-list-group",{attrs:{flush:""}},[a("b-list-group-item",{staticClass:"d-flex justify-content-between align-items-center"},[e._v("\n                        ERC20 Compliant "),a("ui--checkmark",{attrs:{value:t.standard}})],1),e._v(" "),a("b-list-group-item",{staticClass:"d-flex justify-content-between align-items-center"},[e._v("\n                        Verified Source Code "),a("ui--checkmark",{attrs:{value:t.verified}})],1),e._v(" "),a("b-list-group-item",{staticClass:"d-flex justify-content-between align-items-center"},[e._v("\n                        Detailed "),a("ui--checkmark",{attrs:{value:t.detailed}})],1),e._v(" "),a("b-list-group-item",{staticClass:"d-flex justify-content-between align-items-center"},[e._v("\n                        Customizable Decimals "),a("ui--checkmark",{attrs:{value:t.customizeDecimals}})],1),e._v(" "),a("b-list-group-item",{staticClass:"d-flex justify-content-between align-items-center"},[e._v("\n                        Remove Copyright "),a("ui--checkmark",{attrs:{value:t.removeCopyright}})],1),e._v(" "),a("b-list-group-item",{staticClass:"d-flex justify-content-between align-items-center"},[e._v("\n                        Supply Type\n                        "),a("b-badge",{attrs:{variant:"Capped"===t.supplyType?"success":"Unlimited"===t.supplyType?"info":"warning"}},[e._v("\n                            "+e._s(t.supplyType)+"\n                        ")])],1),e._v(" "),a("b-list-group-item",{staticClass:"d-flex justify-content-between align-items-center"},[e._v("\n                        Access Type\n                        "),a("b-badge",{attrs:{variant:"Role Based"===t.accessType?"success":"Ownable"===t.accessType?"info":"warning"}},[e._v("\n                            "+e._s(t.accessType)+"\n                        ")])],1),e._v(" "),a("b-list-group-item",{staticClass:"d-flex justify-content-between align-items-center"},[e._v("\n                        Transfer Type\n                        "),a("b-badge",{attrs:{variant:"Unstoppable"===t.transferType?"success":"warning"}},[e._v("\n                            "+e._s(t.transferType)+"\n                        ")])],1),e._v(" "),a("b-list-group-item",{staticClass:"d-flex justify-content-between align-items-center"},[e._v("\n                        Burnable "),a("ui--checkmark",{attrs:{value:t.burnable}})],1),e._v(" "),a("b-list-group-item",{staticClass:"d-flex justify-content-between align-items-center"},[e._v("\n                        Mintable "),a("ui--checkmark",{attrs:{value:t.mintable}})],1),e._v(" "),a("b-list-group-item",{staticClass:"d-flex justify-content-between align-items-center"},[e._v("\n                        ERC1363 "),a("ui--checkmark",{attrs:{value:t.erc1363}})],1),e._v(" "),a("b-list-group-item",{staticClass:"d-flex justify-content-between align-items-center"},[e._v("\n                        Token Recover "),a("ui--checkmark",{attrs:{value:t.tokenRecover}})],1),e._v(" "),a("b-list-group-item",{staticClass:"justify-content-between align-items-center text-center py-3",attrs:{variant:"warning",to:{path:"/create-token/",query:{tokenType:t.name}},itemprop:"url"}},[e._v("\n                        Create\n                    ")])],1)],1)],1):e._e()})),1):e._e(),e._v(" "),a("b-row",[a("b-col",{staticClass:"mt-4",attrs:{lg:"6","offset-lg":"3"}},[a("p",{staticClass:"text-center text-light"},[e._v("\n                * GAS fee will be added to final amount\n            ")])])],1)],1)}),[],!1,null,null,null);t.default=n.exports}}]);