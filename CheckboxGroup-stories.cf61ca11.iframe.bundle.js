/*! For license information please see CheckboxGroup-stories.cf61ca11.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_miljodirektoratet_md_components=self.webpackChunk_miljodirektoratet_md_components||[]).push([[8317],{"./node_modules/@storybook/addon-docs/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{H2:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.H2,Pd:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Pd,Tn:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Tn,VY:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.VY,W8:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.W8,hE:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.hE,oz:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.oz});__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs")},"./stories/CheckboxGroup.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CheckboxGroup:()=>CheckboxGroup,__namedExportsOrder:()=>__namedExportsOrder,default:()=>CheckboxGroup_stories});var dist=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),external_STORYBOOK_MODULE_CLIENT_API_=__webpack_require__("@storybook/client-api"),react=__webpack_require__("./node_modules/react/index.js");var classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),MdHelpButton=__webpack_require__("./packages/react/src/help/MdHelpButton.tsx"),MdHelpText=__webpack_require__("./packages/react/src/help/MdHelpText.tsx"),MdCheckbox=__webpack_require__("./packages/react/src/formElements/MdCheckbox.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const MdCheckboxGroup=({options=[],selectedOptions,label,id,disabled=!1,direction,columns=2,className="",error,helpText,onChange,onFocus,onBlur,...otherProps})=>{const uuid=(0,react.useId)(),checkboxGroupId=id||uuid,[helpOpen,setHelpOpen]=(0,react.useState)(!1),classNames=classnames_default()("md-checkboxgroup",{"md-checkboxgroup--disabled":!!disabled},className),optionsClassNames=classnames_default()("md-checkboxgroup__options",{"md-checkboxgroup__options--vertical":"vertical"===direction,"md-checkboxgroup__options--grid":"grid"===direction}),optionIsSelected=option=>{if(selectedOptions){return void 0!==selectedOptions.find((item=>item.value===option.value))}return!1},handleChange=e=>{onChange&&onChange(e)},handleFocus=e=>{onFocus&&onFocus(e)},handleBlur=e=>{onBlur&&onBlur(e)};return(0,jsx_runtime.jsxs)("fieldset",{className:classNames,...otherProps,children:[(0,jsx_runtime.jsxs)("legend",{className:"md-checkboxgroup__label",children:[label&&""!==label&&(0,jsx_runtime.jsx)("div",{children:label}),helpText&&""!==helpText&&(0,jsx_runtime.jsx)(MdHelpButton.A,{"aria-label":`Hjelpetekst for ${label}`,id:`md-checkboxgroup_help-button_${checkboxGroupId}`,"aria-expanded":helpOpen,"aria-controls":`md-checkboxgroup_help-text_${checkboxGroupId}`,onClick:()=>setHelpOpen(!helpOpen),expanded:helpOpen})]}),helpText&&""!==helpText&&(0,jsx_runtime.jsx)("div",{className:"md-checkboxgroup__help-text "+(helpOpen?"md-checkboxgroup__help-text--open":""),children:(0,jsx_runtime.jsx)(MdHelpText.A,{id:`md-checkboxgroup_help-text_${checkboxGroupId}`,"aria-labelledby":helpText&&""!==helpText?`md-checkboxgroup_help-button_${checkboxGroupId}`:void 0,children:helpText})}),(0,jsx_runtime.jsx)("div",{id:checkboxGroupId,"aria-describedby":helpText&&""!==helpText?`md-checkboxgroup_help-text_${checkboxGroupId}`:void 0,className:optionsClassNames,style:{gridTemplateColumns:`repeat(${columns}, minmax(max-content, 1fr))`},children:options.map((option=>(0,jsx_runtime.jsx)(MdCheckbox.A,{id:`md-checkboxgroup_${checkboxGroupId}_${option.value}`,label:option.text,disabled,checked:optionIsSelected(option),value:option.value,"data-value":option.value,"data-text":option.text,onChange:handleChange,onFocus:handleFocus,onBlur:handleBlur},`key_${checkboxGroupId}_${option.value}`)))}),error&&""!==error&&(0,jsx_runtime.jsx)("div",{className:"md-checkboxgroup__error",children:error})]})};MdCheckboxGroup.displayName="MdCheckboxGroup";const formElements_MdCheckboxGroup=MdCheckboxGroup,CheckboxGroup_stories={title:"Form/Checkbox/CheckboxGroup",component:formElements_MdCheckboxGroup,parameters:{docs:{page:()=>(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.hE,{}),(0,jsx_runtime.jsx)(dist.Pd,{}),(0,jsx_runtime.jsx)(dist.VY,{}),(0,jsx_runtime.jsx)(dist.Tn,{}),(0,jsx_runtime.jsx)(dist.H2,{}),(0,jsx_runtime.jsx)(dist.oz,{children:'# Structure\n\nTo use the `CheckboxGroup` css in `@miljodirektoratet/md-css` as a standalone, without the accompanying React component, please use the following HTML structure.\n\nClass names in brackets [] are optional-/togglable-/decorator- or state dependant classes.\n\nSee [Storybook](https://miljodir.github.io/md-components) for examples and more info.\n\n```html\n<div class="md-checkboxgroup [md-checkboxgroup--disabled]">\n  <div class="md-checkboxgroup__label">\n    <div>{label}</div>\n\n    \x3c!-- Optional button for handling help text --\x3e\n    <MdHelpButton />\n  </div>\n\n  \x3c!-- Optional container for displaying helpt text --\x3e\n  <div class="md-checkboxgroup__help-text [md-checkboxgroup__help-text--open]">\n    <MdHelpText>{helpText}</MdHelpText>\n  </div>\n\n  <div class="md-checkboxgroup__options [md-checkboxgroup__options--vertical] [md-checkboxgroup__options--grid]">\n    \x3c!-- Here we use the designsystem react components for checkbox, see structure for these separately --\x3e\n    <MdCheckbox />\n    <MdCheckbox />\n    <MdCheckbox />\n    ... ))}\n  </div>\n\n  <div class="md-radiogroup__error">{error}</div>\n</div>\n```\n'.toString()})]}),description:{component:"A component for grouped checkboxes.<br/><br/>`import { MdCheckboxGroup } from '@miljodirektoratet/md-react'`"}}},argTypes:{label:{type:{name:"string"},description:"The label for the checkbox group.",table:{defaultValue:{summary:"null"},type:{summary:"string"}},control:{type:"text"}},options:{type:{name:"array",required:!0},description:"Array with data for radio checkboxes in group",table:{type:{summary:"[{ value: string, text: string }, { value: string, text: string }, ...]"}}},selectedOptions:{type:{name:"array",required:!0},description:"Array with selected options. Corresponds with element from options-array.",table:{type:{summary:"[{ value: string, text: string }, { value: string, text: string }, ...]"}}},disabled:{table:{defaultValue:{summary:"false"},type:{summary:"boolean"}},control:{type:"boolean"}},id:{type:{name:"string"},description:"Id for the  checkbox group. If not set, uses a random uuid",table:{defaultValue:{summary:"useId()"},type:{summary:"string"}},control:{type:"text"}},direction:{type:{name:"string"},description:"The direction for checkboxes in group.",options:["horizontal","vertical","grid"],table:{defaultValue:{summary:"horizontal"},type:{summary:"string"}},control:{type:"inline-radio"}},helpText:{type:{name:"string"},description:"Help text for the checkbox group",table:{defaultValue:{summary:"null"},type:{summary:"string"}},control:{type:"text"}},error:{type:{name:"string"},description:"Error text for the checkbox group",table:{defaultValue:{summary:"null"},type:{summary:"string"}},control:{type:"text"}},onChange:{type:{name:"function"},description:"The onChange handler for change events. Returns the `ChangeEvent` from clicked checkbox.",table:{type:{summary:"function"}},action:"Change"},columns:{type:{name:"number"},description:"Number of columns in options grid",table:{defaultValue:{summary:2},type:{summary:"number"}},control:{type:"number"}}}},Template=args=>{const[,updateArgs]=(0,external_STORYBOOK_MODULE_CLIENT_API_.useArgs)();return(0,jsx_runtime.jsx)(formElements_MdCheckboxGroup,{...args,onChange:e=>{const dataset=e.target?.dataset;let newSelected=args.selectedOptions;newSelected.find((item=>item.value.toString()===dataset.value))?newSelected=newSelected.filter((item=>item.value.toString()!==dataset.value)):newSelected.push({...dataset}),updateArgs({...args,selectedOptions:newSelected})}})};Template.displayName="Template";const CheckboxGroup=Template.bind({});CheckboxGroup.args={options:[{value:"1",text:"Option 1"},{value:"2",text:"Option 2"},{value:"3",text:"Option 3"}],selectedOptions:[{value:"2",text:"Option 2"}],label:"Example checkbox group",disabled:!1,direction:"horizontal",helpText:"This is a help text!",error:"",columns:3},CheckboxGroup.parameters={...CheckboxGroup.parameters,docs:{...CheckboxGroup.parameters?.docs,source:{originalSource:"(args: Args) => {\n  const [, updateArgs] = useArgs();\n  const handleCheck = (e: React.ChangeEvent<HTMLElement>) => {\n    const dataset = e.target?.dataset;\n    let newSelected = args.selectedOptions;\n    const found = newSelected.find((item: MdCheckboxGroupOption) => {\n      return item.value.toString() === (dataset.value as string);\n    });\n    if (found) {\n      newSelected = newSelected.filter((item: MdCheckboxGroupOption) => {\n        return item.value.toString() !== (dataset.value as string);\n      });\n    } else {\n      newSelected.push({\n        ...dataset\n      });\n    }\n    updateArgs({\n      ...args,\n      selectedOptions: newSelected\n    });\n  };\n  return <MdCheckboxGroup {...args} onChange={handleCheck} />;\n}",...CheckboxGroup.parameters?.docs?.source}}};const __namedExportsOrder=["CheckboxGroup"]},"./packages/react/src/formElements/MdCheckbox.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var classnames__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const MdCheckbox=({label,id,disabled,className="",...otherProps})=>{const classNames=classnames__WEBPACK_IMPORTED_MODULE_0___default()("md-checkbox",{"md-checkbox--disabled":!!disabled},className),uuid=(0,react__WEBPACK_IMPORTED_MODULE_1__.useId)(),checkboxId=id||uuid;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{className:classNames,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("input",{id:id||checkboxId||void 0,className:"md-checkbox__input",type:"checkbox",...otherProps}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("label",{className:"md-checkbox__label",htmlFor:checkboxId||void 0,children:label&&""!==label&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span",{className:"md-checkbox__labelText",children:label})})]})};MdCheckbox.displayName="MdCheckbox";const __WEBPACK_DEFAULT_EXPORT__=MdCheckbox},"./packages/react/src/help/MdHelpButton.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var classnames__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__),_icons_MdHelpIcon64__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./packages/react/src/icons/MdHelpIcon64.tsx")),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");const MdHelpButton=({className,expanded=!1,hideArrow=!1,...otherProps})=>{const buttonClasses=classnames__WEBPACK_IMPORTED_MODULE_0___default()("md-helpbutton",className,{"md-helpbutton--expanded":!!expanded,"md-helpbutton--noarrow":!!hideArrow});return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button",{"aria-label":"Hjelpetekst",className:buttonClasses,type:"button",...otherProps,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_icons_MdHelpIcon64__WEBPACK_IMPORTED_MODULE_2__.A,{"aria-hidden":"true",className:"md-helpbutton__icon"})})};MdHelpButton.displayName="MdHelpButton";const __WEBPACK_DEFAULT_EXPORT__=MdHelpButton},"./packages/react/src/help/MdHelpText.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var classnames__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./node_modules/react/jsx-runtime.js"));const MdHelpText=({children,className,...otherProps})=>{const combinedClasses=classnames__WEBPACK_IMPORTED_MODULE_0___default()("md-helptext",className);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{className:combinedClasses,...otherProps,children})};MdHelpText.displayName="MdHelpText";const __WEBPACK_DEFAULT_EXPORT__=MdHelpText},"./packages/react/src/icons/MdHelpIcon64.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const MdHelpIcon64=({className="",...otherProps})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("svg",{viewBox:"0 0 64 64",fill:"none",xmlns:"http://www.w3.org/2000/svg",className,...otherProps,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("circle",{cx:"32",cy:"32",r:"26"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path",{d:"M32 8C27.2533 8 22.6131 9.40757 18.6663 12.0447C14.7195 14.6819 11.6434 18.4302 9.8269 22.8156C8.0104 27.201 7.53512 32.0266 8.46116 36.6822C9.38721 41.3377 11.673 45.6141 15.0294 48.9706C18.3859 52.327 22.6623 54.6128 27.3178 55.5388C31.9734 56.4649 36.799 55.9896 41.1844 54.1731C45.5698 52.3566 49.3181 49.2805 51.9553 45.3337C54.5924 41.3869 56 36.7468 56 32C56 25.6348 53.4714 19.5303 48.9706 15.0294C44.4697 10.5286 38.3652 8 32 8V8ZM32 54.038C27.6413 54.038 23.3805 52.7455 19.7564 50.3239C16.1322 47.9024 13.3076 44.4605 11.6396 40.4336C9.97155 36.4067 9.53512 31.9756 10.3855 27.7006C11.2358 23.4256 13.3347 19.4989 16.4168 16.4168C19.4989 13.3347 23.4257 11.2358 27.7006 10.3855C31.9756 9.53511 36.4067 9.97154 40.4336 11.6395C44.4605 13.3075 47.9024 16.1322 50.3239 19.7563C52.7455 23.3805 54.038 27.6413 54.038 32C54.038 37.8448 51.7162 43.4503 47.5832 47.5832C43.4503 51.7161 37.8449 54.038 32 54.038V54.038Z",fill:"currentColor"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path",{d:"M30.5572 39.8088C30.1495 39.8292 29.7566 39.9687 29.4273 40.21C29.0981 40.4514 28.8468 40.7841 28.7047 41.1668C28.5626 41.5496 28.5359 41.9656 28.6279 42.3634C28.7198 42.7611 28.9265 43.1232 29.2221 43.4047C29.5178 43.6862 29.8896 43.8749 30.2914 43.9472C30.6932 44.0195 31.1074 43.9724 31.4827 43.8117C31.8581 43.651 32.178 43.3837 32.4029 43.043C32.6279 42.7023 32.7479 42.3031 32.7482 41.8948C32.7439 41.6132 32.6834 41.3353 32.5705 41.0773C32.4575 40.8193 32.2943 40.5864 32.0903 40.3922C31.8863 40.198 31.6457 40.0464 31.3825 39.9462C31.1192 39.8461 30.8387 39.7993 30.5572 39.8088V39.8088Z",fill:"currentColor"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path",{d:"M32.7424 19.9838C31.8074 19.968 30.8788 20.1411 30.0123 20.4927C29.1458 20.8444 28.3592 21.3674 27.6996 22.0304C27.0401 22.6934 26.5212 23.4827 26.1741 24.351C25.827 25.2194 25.6587 26.1489 25.6794 27.0838H28.5274C28.5198 26.5231 28.6228 25.9664 28.8306 25.4455C29.0384 24.9247 29.3469 24.4499 29.7384 24.0485C30.1299 23.647 30.5968 23.3267 31.1123 23.1059C31.6277 22.8851 32.1817 22.7682 32.7424 22.7618C33.251 22.7389 33.7587 22.8247 34.2316 23.0133C34.7044 23.2019 35.1317 23.489 35.485 23.8556C35.8383 24.2222 36.1094 24.6599 36.2803 25.1394C36.4513 25.619 36.5181 26.1294 36.4764 26.6368C36.449 27.4859 36.1609 28.306 35.6514 28.9858C35.142 29.6655 34.4357 30.1721 33.6284 30.4368L32.4694 30.8508C30.4404 31.6038 28.9754 32.7388 29.0414 35.8188V37.1928H31.9894V35.8148C31.9894 34.1588 33.0164 33.6948 34.4734 33.2478C35.9019 32.822 37.1558 31.9485 38.0503 30.7561C38.9447 29.5636 39.4324 28.1154 39.4414 26.6248C39.4695 25.7401 39.315 24.8591 38.9874 24.0367C38.6599 23.2144 38.1663 22.4684 37.5377 21.8452C36.909 21.2221 36.1587 20.7352 35.3334 20.4149C34.5082 20.0947 33.6259 19.9479 32.7414 19.9838H32.7424Z",fill:"currentColor"})]});MdHelpIcon64.displayName="MdHelpIcon64";const __WEBPACK_DEFAULT_EXPORT__=MdHelpIcon64},"./node_modules/classnames/index.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg)){if(arg.length){var inner=classNames.apply(null,arg);inner&&classes.push(inner)}}else if("object"===argType){if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]")){classes.push(arg.toString());continue}for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key)}}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()},"./node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext}}]);