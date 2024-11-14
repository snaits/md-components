/*! For license information please see Tooltip-stories.b3b31db1.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_miljodirektoratet_md_components=self.webpackChunk_miljodirektoratet_md_components||[]).push([[7712],{"./node_modules/@storybook/addon-docs/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{H2:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.H2,Pd:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Pd,Tn:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Tn,VY:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.VY,W8:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.W8,hE:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.hE,oz:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.oz});__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs")},"./stories/Tooltip.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Tooltip:()=>Tooltip,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Tooltip_stories});var dist=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs");__webpack_require__("./node_modules/react/index.js");var MdCloseIcon=__webpack_require__("./packages/react/src/icons/MdCloseIcon.tsx"),MdTooltip=__webpack_require__("./packages/react/src/tooltip/MdTooltip.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Tooltip_stories={title:"Components/Tooltip",component:MdTooltip.A,parameters:{docs:{page:()=>(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.hE,{}),(0,jsx_runtime.jsx)(dist.Pd,{}),(0,jsx_runtime.jsx)(dist.VY,{}),(0,jsx_runtime.jsx)(dist.Tn,{}),(0,jsx_runtime.jsx)(dist.H2,{}),(0,jsx_runtime.jsx)(dist.oz,{children:'# Structure\n\nTo use the `Tooltip` css in `@miljodirektoratet/md-css` as a standalone, without the accompanying React component, please use the following HTML structure.\n\nClass names in brackets [] are optional-/togglable-/decorator- or state dependant classes.\n\nSee [Storybook](https://miljodir.github.io/md-components) for examples and more info.\n\n```html\n<div>\n  <div className="md-tooltip__child">{children}</div>\n  <div\n    className="md-tooltip [md-tooltip--show,\n                          md-tooltip--bottom,\n                          md-tooltip--top,\n                          md-tooltip--right,\n                          md-tooltip--left]"\n  >\n    {label}\n  </div>\n</div>\n```\n'.toString()})]}),description:{component:"A component for tooltip. Hover over to display/expand text. In addition to the properties presented here, the component accepts all standard attributes of a HTML Div element.<br/><br/>`import { MdTooltip } from '@miljodirektoratet/md-react'`"}}},argTypes:{tooltipContent:{description:"The content to display on hover",table:{type:{summary:"ReactNode"}},control:{type:"text"}},"aria-label":{description:"The aria label for the tooltip",table:{type:{summary:"string"}},control:{type:"text"}},position:{description:"Selected position for the tooltip",table:{type:{summary:"text"}},options:["right","top","bottom","left"],control:{type:"inline-radio"},if:{arg:"position",exists:!0}}}},Template=args=>(0,jsx_runtime.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:(0,jsx_runtime.jsx)(MdTooltip.A,{...args,children:(0,jsx_runtime.jsx)(MdCloseIcon.A,{width:20,height:20})})});Template.displayName="Template";const Tooltip=Template.bind({});Tooltip.args={tooltipContent:"This is some info",position:"bottom","aria-label":"This is some info"},Tooltip.parameters={...Tooltip.parameters,docs:{...Tooltip.parameters?.docs,source:{originalSource:"(args: MdTooltipProps) => {\n  return <div style={{\n    display: 'flex',\n    justifyContent: 'center'\n  }}>\n      <MdTooltip {...args}>\n        <MdCloseIcon width={20} height={20} />\n      </MdTooltip>\n    </div>;\n}",...Tooltip.parameters?.docs?.source}}};const __namedExportsOrder=["Tooltip"]},"./packages/react/src/icons/MdCloseIcon.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const MdCloseIcon=({className,...otherProps})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("svg",{viewBox:"0 0 20 20",version:"1.1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",className,...otherProps,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("polygon",{points:"12.91 6.36 10 9.28 7.09 6.36 6.38 7.07 9.29 9.98 6.38 12.9 7.09 13.6 10 10.69 12.91 13.6 13.62 12.9 10.71 9.98 13.62 7.07 12.91 6.36",fill:"currentColor"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path",{d:"M2.17,17.81H17.83V2.16H2.17Zm1-14.65H16.83V16.81H3.17Z",fill:"currentColor"})]});MdCloseIcon.displayName="MdCloseIcon";const __WEBPACK_DEFAULT_EXPORT__=MdCloseIcon},"./packages/react/src/tooltip/MdTooltip.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var classnames__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const MdTooltip=({tooltipContent,position="bottom",children,"aria-label":ariaLabel,tooltipClass,...otherProps})=>{const[hover,setHover]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1),classNames=classnames__WEBPACK_IMPORTED_MODULE_0___default()("md-tooltip",{"md-tooltip--show":hover,"md-tooltip--bottom":"bottom"===position,"md-tooltip--top":"top"===position,"md-tooltip--right":"right"===position,"md-tooltip--left":"left"===position,tooltipClass}),keydown=event=>{"Escape"===event.key&&setHoverFalse()},setHoverFalse=()=>{document.removeEventListener("keydown",keydown),setHover(!1)};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{role:"tooltip","aria-label":ariaLabel,...otherProps,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{onMouseLeave:setHoverFalse,onMouseEnter:()=>{document.addEventListener("keydown",keydown),setHover(!0)},className:"md-tooltip__child",children}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{"aria-hidden":"true",className:classNames,children:tooltipContent})]})};MdTooltip.displayName="MdTooltip";const __WEBPACK_DEFAULT_EXPORT__=MdTooltip},"./node_modules/classnames/index.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg)){if(arg.length){var inner=classNames.apply(null,arg);inner&&classes.push(inner)}}else if("object"===argType){if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]")){classes.push(arg.toString());continue}for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key)}}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()},"./node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext}}]);