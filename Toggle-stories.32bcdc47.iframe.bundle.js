/*! For license information please see Toggle-stories.32bcdc47.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_miljodirektoratet_md_components=self.webpackChunk_miljodirektoratet_md_components||[]).push([[6131],{"./node_modules/@storybook/addon-docs/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{H2:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.H2,Pd:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Pd,Tn:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Tn,VY:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.VY,W8:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.W8,hE:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.hE,oz:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.oz});__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs")},"./stories/Toggle.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Toggle:()=>Toggle,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Toggle_stories});var dist=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),external_STORYBOOK_MODULE_CLIENT_API_=__webpack_require__("@storybook/client-api"),react=__webpack_require__("./node_modules/react/index.js");var classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const MdToggle=({checked=!0,label,id,disabled=!1,error=!1,errorText,wrapperClass="",...otherProps})=>{const uuid=(0,react.useId)(),toggleId=id&&""!==id?id:uuid,classNames=classnames_default()("md-toggle__label",{"md-toggle__label--error":!!error,"md-toggle__label--checked":!!checked,"md-toggle__label--disabled":!!disabled}),labelWrapperClassNames=classnames_default()("md-toggle__label-wrapper",{"md-toggle__label-wrapper--disabled":!!disabled}),outerWrapperClassNames=classnames_default()("md-toggle__wrapper",wrapperClass);return(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsxs)("div",{className:outerWrapperClassNames,children:[(0,jsx_runtime.jsx)("input",{tabIndex:0,className:"md-toggle__checkbox",id:toggleId,type:"checkbox",checked,disabled,...otherProps}),(0,jsx_runtime.jsxs)("label",{className:labelWrapperClassNames,htmlFor:toggleId,children:[(0,jsx_runtime.jsx)("div",{className:"md-toggle__label-text",children:label}),(0,jsx_runtime.jsx)("div",{className:classNames,children:(0,jsx_runtime.jsx)("span",{className:"md-toggle__button"})})]})]}),error&&errorText&&""!==errorText&&(0,jsx_runtime.jsx)("div",{className:"md-toggle__error",children:errorText})]})};MdToggle.displayName="MdToggle";const toggle_MdToggle=MdToggle,Toggle_stories={title:"Components/Toggle",component:toggle_MdToggle,parameters:{docs:{page:()=>(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.hE,{}),(0,jsx_runtime.jsx)(dist.Pd,{}),(0,jsx_runtime.jsx)(dist.VY,{}),(0,jsx_runtime.jsx)(dist.Tn,{}),(0,jsx_runtime.jsx)(dist.H2,{}),(0,jsx_runtime.jsx)(dist.oz,{children:'# Structure\n\nTo use the `Toggle` css in `@miljodirektoratet/md-css` as a standalone, without the accompanying React component, please use the following HTML structure.\n\nClass names in brackets [] are optional-/togglable-/decorator- or state dependant classes.\n\nSee [Storybook](https://miljodir.github.io/md-components) for examples and more info.\n\n```html\n<div>\n  <div className="md-toggle__wrapper">\n    <input className="md-toggle__checkbox" type="checkbox" checked="{true|false}" onChange="{}" />\n    <label className="md-toggle__label-wrapper [md-toggle__label-wrapper--disabled]">\n      <div className="md-toggle__label-text">{label}</div>\n      <div className="md-toggle__label [md-toggle__label--checked, md-toggle__label--disabled]">\n        <span className="md-toggle__button" />\n      </div>\n    </label>\n  </div>\n  <div className="md-toggle__error">{errorText}</div>\n</div>\n```\n'.toString()})]}),description:{component:"Toggle switch. In addition to the properties presented here, the component accepts all standard attributes of a HTML Input element.<br/><br/>`import { MdToggle } from '@miljodirektoratet/md-react'`"}}},argTypes:{checked:{description:"Is the toggle on or off?",table:{defaultValue:{summary:"false"},type:{summary:"boolean"}},control:{type:"boolean"}},id:{type:{name:"string",required:!0},description:"Id for the toggle. If not set, uses a random uuid",table:{type:{defaultValue:{summary:"useId()"},summary:"string"}},control:{type:"text"}},label:{type:{name:"string"},description:"The label for the toggle",table:{defaultValue:{summary:"null"},type:{summary:"string"}},control:{type:"text"}},disabled:{description:"Is the toggle disabled?",table:{defaultValue:{summary:"false"},type:{summary:"boolean"}},control:{type:"boolean"}},error:{description:"Does toggle contain an error?",table:{defaultValue:{summary:"false"},type:{summary:"boolean"}},control:{type:"boolean"}},errorText:{type:{name:"string"},description:"The error text to display",table:{defaultValue:{summary:"null"},type:{summary:"string"}},control:{type:"text"}},onChange:{type:{name:"function"},description:"The onChange handler for change events. Returns a ChangeEvent.",table:{type:{summary:"function"}}}}},Template=args=>{const[,updateArgs]=(0,external_STORYBOOK_MODULE_CLIENT_API_.useArgs)();return(0,jsx_runtime.jsx)(toggle_MdToggle,{...args,onChange:e=>{updateArgs({...args,checked:e?.target?.checked})}})};Template.displayName="Template";const Toggle=Template.bind({});Toggle.args={label:"Label",checked:!1,disabled:!1,error:!1,errorText:""},Toggle.parameters={...Toggle.parameters,docs:{...Toggle.parameters?.docs,source:{originalSource:"(args: MdToggleProps) => {\n  const [, updateArgs] = useArgs();\n  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {\n    updateArgs({\n      ...args,\n      checked: e?.target?.checked\n    });\n  };\n  return <MdToggle {...args} onChange={handleChange} />;\n}",...Toggle.parameters?.docs?.source}}};const __namedExportsOrder=["Toggle"]},"./node_modules/classnames/index.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg)){if(arg.length){var inner=classNames.apply(null,arg);inner&&classes.push(inner)}}else if("object"===argType){if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]")){classes.push(arg.toString());continue}for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key)}}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()},"./node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext}}]);