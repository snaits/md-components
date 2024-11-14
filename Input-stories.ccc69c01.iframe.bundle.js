/*! For license information please see Input-stories.ccc69c01.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_miljodirektoratet_md_components=self.webpackChunk_miljodirektoratet_md_components||[]).push([[7661],{"./node_modules/@storybook/addon-docs/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{H2:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.H2,Pd:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Pd,Tn:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Tn,VY:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.VY,W8:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.W8,hE:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.hE,oz:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.oz});__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs")},"./stories/Input.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Input:()=>Input,InputWithPrefix:()=>InputWithPrefix,InputWithSuffix:()=>InputWithSuffix,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Input_stories});var dist=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),external_STORYBOOK_MODULE_CLIENT_API_=__webpack_require__("@storybook/client-api"),react=__webpack_require__("./node_modules/react/index.js");var classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),MdHelpButton=__webpack_require__("./packages/react/src/help/MdHelpButton.tsx"),MdHelpText=__webpack_require__("./packages/react/src/help/MdHelpText.tsx"),MdWarningIcon=__webpack_require__("./packages/react/src/icons/MdWarningIcon.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const MdInput=react.forwardRef((({label,id,error=!1,errorText,hideErrorIcon=!1,helpText,outerWrapperClass="",suffix,prefixIcon=null,hideNumberArrows=!1,disabled=!1,readOnly=!1,mode="normal",...otherProps},ref)=>{const[helpOpen,setHelpOpen]=(0,react.useState)(!1),uuid=(0,react.useId)(),inputId=id&&""!==id?id:uuid,classNames=classnames_default()("md-input",{"md-input--small":"small"===mode,"md-input--disabled":!!disabled,"md-input--readonly":!!readOnly,"md-input--error":!!error,"md-input--has-suffix":suffix&&""!==suffix,"md-input--has-prefix":null!==prefixIcon&&""!==prefixIcon,"md-input--hide-number-arrows":!!hideNumberArrows}),wrapperClassNames=classnames_default()("md-input__wrapper",{"md-input__wrapper--small":"small"===mode}),outerWrapperClasses=classnames_default()("md-input__outer-wrapper",{"md-input__outer-wrapper--small":"small"===mode},outerWrapperClass);let ariaDescribedBy=helpText&&""!==helpText?`md-input_help-text_${inputId}`:void 0;return ariaDescribedBy=error&&errorText&&""!==errorText?`md-input_error_${inputId}`:ariaDescribedBy,(0,jsx_runtime.jsxs)("div",{className:outerWrapperClasses,children:[(0,jsx_runtime.jsxs)("div",{className:"md-input__label",children:[label&&""!==label&&(0,jsx_runtime.jsx)("label",{htmlFor:inputId,children:label}),helpText&&""!==helpText&&(0,jsx_runtime.jsx)("div",{className:"md-input__help-button",children:(0,jsx_runtime.jsx)(MdHelpButton.A,{"aria-label":`Hjelpetekst for ${label}`,id:`md-input_help-button_${inputId}`,"aria-expanded":helpOpen,"aria-controls":`md-input_help-text_${inputId}`,onClick:()=>setHelpOpen(!helpOpen),expanded:helpOpen})})]}),helpText&&""!==helpText&&(0,jsx_runtime.jsx)("div",{className:"md-input__help-text "+(helpOpen?"md-input__help-text--open":""),children:(0,jsx_runtime.jsx)(MdHelpText.A,{id:`md-input_help-text_${inputId}`,"aria-labelledby":helpText&&""!==helpText?`md-input_help-button_${inputId}`:void 0,children:helpText})}),(0,jsx_runtime.jsxs)("div",{className:wrapperClassNames,children:[prefixIcon&&(0,jsx_runtime.jsx)("div",{"aria-hidden":"true",className:`${classnames_default()("md-input__prefix",{"md-input__prefix--disabled":!!disabled})}`,children:prefixIcon}),(0,jsx_runtime.jsx)("input",{id:inputId,"aria-describedby":ariaDescribedBy,className:classNames,ref,disabled:!!disabled,readOnly:!!readOnly,...otherProps}),(0,jsx_runtime.jsxs)("div",{className:"md-input__suffix",children:[suffix,error&&!hideErrorIcon&&(0,jsx_runtime.jsx)("div",{className:"md-input__error-icon",children:(0,jsx_runtime.jsx)(MdWarningIcon.A,{"aria-hidden":"true"})})]})]}),error&&errorText&&""!==errorText&&(0,jsx_runtime.jsx)("div",{id:`md-input_error_${inputId}`,className:"md-input__error",children:errorText})]})}));MdInput.displayName="MdInput";const formElements_MdInput=MdInput;var MdUserIcon=__webpack_require__("./packages/react/src/icons/MdUserIcon.tsx");const Input_stories={title:"Form/Input",component:formElements_MdInput,parameters:{docs:{page:()=>(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.hE,{}),(0,jsx_runtime.jsx)(dist.Pd,{}),(0,jsx_runtime.jsx)(dist.VY,{}),(0,jsx_runtime.jsx)(dist.Tn,{}),(0,jsx_runtime.jsx)(dist.H2,{}),(0,jsx_runtime.jsx)(dist.oz,{children:'# Structure\n\nTo use the `Input` css in `@miljodirektoratet/md-css` as a standalone, without the accompanying React component, please use the following HTML structure.\n\nClass names in brackets [] are optional-/togglable-/decorator- or state dependant classes.\n\nSee [Storybook](https://miljodir.github.io/md-components) for examples and more info.\n\n```html\n<div className="md-input__outer-wrapper">\n  <div className="md-input__label">\n    <label> {label} </label>\n\n    \x3c!-- Optional button for handling help text --\x3e\n    <div className="md-input__help-button">\n      <MdHelpButton />\n    </div>\n    }\n  </div>\n\n  \x3c!-- Optional container for displaying helpt text --\x3e\n  <div className="md-input__help-text [md-input__help-text--open]">\n    <MdHelpText>{ helpText }</MdHelpText>\n  </div>\n\n  <div className="md-input__wrapper [md-input__wrapper--small]">\n    \x3c!-- Optional prefix-icon --\x3e\n    <div className="md-input__prefix [md-input__prefix--disabled]">{prefixIcon}</div>\n\n    <input\n      id=""\n      className="md-input [md-input--small, md-input--disabled, md-input--readonly, md-input--error, md-input--has-suffix, md-input--has-prefix]"\n      value="{value}"\n      ...\n    />\n\n    \x3c!-- Optional container for suffix --\x3e\n    <div className="md-input__suffix">\n      <div className="md-input__suffix-content">{suffix}</div>\n\n      <div className="md-input__error-icon">\n        <MdWarningIcon />\n        \x3c!-- Warning icon --\x3e\n      </div>\n    </div>\n  </div>\n\n  \x3c!-- Optional container for error text --\x3e\n  <div className="md-input__error">{errorText}</div>\n</div>\n```\n'.toString()})]}),description:{component:"Input field used in forms. In addition to the properties presented here, the component accepts all standard attributes of a HTML Input element.<br/><br/>`import { MdInput } from '@miljodirektoratet/md-react'`"}}},argTypes:{label:{type:{name:"string"},description:"The label for the input field.",table:{defaultValue:{summary:"null"},type:{summary:"string"}},control:{type:"text"}},value:{type:{name:"string"},description:"Inputs value",table:{defaultValue:{summary:"null"},type:{summary:"string"}},control:{type:"text"}},type:{type:{name:"string"},description:"Inputs type",options:["text","email","number","date","datetime-local","hidden","password","tel","url"],table:{defaultValue:{summary:"text"},type:{summary:"string"}},control:{type:"inline-radio"}},placeholder:{type:{name:"string"},description:"Inputs placeholder value when not no value is given",table:{defaultValue:{summary:"null"},type:{summary:"string"}},control:{type:"text"}},mode:{description:'Set input field width, possible values are "normal" and "small"',options:["normal","small"],table:{defaultValue:{summary:"normal"},type:{summary:"string"}},control:{type:"inline-radio"}},disabled:{description:"Is the input field disabled or not",table:{defaultValue:{summary:"false"},type:{summary:"boolean"}},control:{type:"boolean"}},readOnly:{description:"Is the input field readonly or not",table:{defaultValue:{summary:"false"},type:{summary:"boolean"}},control:{type:"boolean"}},error:{description:"Has validation for input field failed?",table:{defaultValue:{summary:"false"},type:{summary:"boolean"}},control:{type:"boolean"}},errorText:{type:{name:"string"},description:"Optional text to display if error. Will only display if error is `true`",table:{defaultValue:{summary:"null"},type:{summary:"string"}},control:{type:"text"}},hideErrorIcon:{description:"Show or hide the error icon if error = `true`",table:{defaultValue:{summary:"false"},type:{summary:"boolean"}},control:{type:"boolean"}},helpText:{type:{name:"string"},description:"Optional helper text, will also add a help icon which toggles help text box.",table:{defaultValue:{summary:"null"},type:{summary:"string"}},control:{type:"text"}},outerWrapperClass:{type:{name:"string"},description:"Class names to apply to the inputs outer most wrapper.",table:{defaultValue:{summary:"null"},type:{summary:"string"}},control:{type:"text"}},id:{type:{name:"string"},description:"Id for the input field. If not set, uses a random uuid",table:{defaultValue:{summary:"useId()"},type:{summary:"string"}},control:{type:"text"}},suffix:{type:{name:"string"},description:"Suffix to apply to end of input field",table:{defaultValue:{summary:"null"},type:{summary:"string | DomElement | image | ReactNode"}},control:{type:"text"}},prefixIcon:{type:{name:"ReactNode"},description:"Prefix to apply to start of input field. Will render a 16px x 16px container with icon passed.",table:{defaultValue:{summary:"null"},type:{summary:"DomElement | image | ReactNode"}},control:{type:"html"}},hideNumberArrows:{description:'If type = "number", hide or show browsers default arrows',table:{defaultValue:{summary:"false"},type:{summary:"boolean"}},control:{type:"boolean"}},ref:{type:{name:"Ref<HTMLInputElement>"},description:"Ref to the inner input element, use for example to bring focus to the input when there's an error."}}},Template=args=>{const[,updateArgs]=(0,external_STORYBOOK_MODULE_CLIENT_API_.useArgs)();return(0,jsx_runtime.jsx)(formElements_MdInput,{...args,onChange:e=>{updateArgs({...args,value:e?.target?.value})}})};Template.displayName="Template";const Input=Template.bind({});Input.args={value:"",label:"Label",type:"text",mode:"normal",disabled:!1,readOnly:!1,error:!1,errorText:"",hideErrorIcon:!1,helpText:"",outerWrapperClass:"",placeholder:"Placeholder...",suffix:"",hideNumberArrows:!1};const InputWithPrefix=Template.bind({});InputWithPrefix.args={value:"",label:"Label",type:"text",mode:"normal",disabled:!1,readOnly:!1,error:!1,errorText:"",hideErrorIcon:!1,helpText:"",outerWrapperClass:"",placeholder:"Placeholder...",suffix:"",prefixIcon:(0,jsx_runtime.jsx)(MdUserIcon.A,{}),hideNumberArrows:!1};const InputWithSuffix=Template.bind({});InputWithSuffix.args={value:"",label:"Label",type:"text",mode:"normal",disabled:!1,readOnly:!1,error:!1,errorText:"",hideErrorIcon:!1,helpText:"",outerWrapperClass:"",placeholder:"Placeholder...",suffix:(0,jsx_runtime.jsx)("button",{children:"Clear"}),prefixIcon:(0,jsx_runtime.jsx)(MdUserIcon.A,{}),hideNumberArrows:!1},Input.parameters={...Input.parameters,docs:{...Input.parameters?.docs,source:{originalSource:"(args: Args) => {\n  const [, updateArgs] = useArgs();\n  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {\n    updateArgs({\n      ...args,\n      value: e?.target?.value\n    });\n  };\n  return <MdInput {...args} onChange={handleChange} />;\n}",...Input.parameters?.docs?.source}}},InputWithPrefix.parameters={...InputWithPrefix.parameters,docs:{...InputWithPrefix.parameters?.docs,source:{originalSource:"(args: Args) => {\n  const [, updateArgs] = useArgs();\n  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {\n    updateArgs({\n      ...args,\n      value: e?.target?.value\n    });\n  };\n  return <MdInput {...args} onChange={handleChange} />;\n}",...InputWithPrefix.parameters?.docs?.source}}},InputWithSuffix.parameters={...InputWithSuffix.parameters,docs:{...InputWithSuffix.parameters?.docs,source:{originalSource:"(args: Args) => {\n  const [, updateArgs] = useArgs();\n  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {\n    updateArgs({\n      ...args,\n      value: e?.target?.value\n    });\n  };\n  return <MdInput {...args} onChange={handleChange} />;\n}",...InputWithSuffix.parameters?.docs?.source}}};const __namedExportsOrder=["Input","InputWithPrefix","InputWithSuffix"]},"./packages/react/src/help/MdHelpButton.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var classnames__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__),_icons_MdHelpIcon64__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./packages/react/src/icons/MdHelpIcon64.tsx")),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");const MdHelpButton=({className,expanded=!1,hideArrow=!1,...otherProps})=>{const buttonClasses=classnames__WEBPACK_IMPORTED_MODULE_0___default()("md-helpbutton",className,{"md-helpbutton--expanded":!!expanded,"md-helpbutton--noarrow":!!hideArrow});return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button",{"aria-label":"Hjelpetekst",className:buttonClasses,type:"button",...otherProps,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_icons_MdHelpIcon64__WEBPACK_IMPORTED_MODULE_2__.A,{"aria-hidden":"true",className:"md-helpbutton__icon"})})};MdHelpButton.displayName="MdHelpButton";const __WEBPACK_DEFAULT_EXPORT__=MdHelpButton},"./packages/react/src/help/MdHelpText.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var classnames__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./node_modules/react/jsx-runtime.js"));const MdHelpText=({children,className,...otherProps})=>{const combinedClasses=classnames__WEBPACK_IMPORTED_MODULE_0___default()("md-helptext",className);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{className:combinedClasses,...otherProps,children})};MdHelpText.displayName="MdHelpText";const __WEBPACK_DEFAULT_EXPORT__=MdHelpText},"./packages/react/src/icons/MdHelpIcon64.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const MdHelpIcon64=({className="",...otherProps})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("svg",{viewBox:"0 0 64 64",fill:"none",xmlns:"http://www.w3.org/2000/svg",className,...otherProps,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("circle",{cx:"32",cy:"32",r:"26"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path",{d:"M32 8C27.2533 8 22.6131 9.40757 18.6663 12.0447C14.7195 14.6819 11.6434 18.4302 9.8269 22.8156C8.0104 27.201 7.53512 32.0266 8.46116 36.6822C9.38721 41.3377 11.673 45.6141 15.0294 48.9706C18.3859 52.327 22.6623 54.6128 27.3178 55.5388C31.9734 56.4649 36.799 55.9896 41.1844 54.1731C45.5698 52.3566 49.3181 49.2805 51.9553 45.3337C54.5924 41.3869 56 36.7468 56 32C56 25.6348 53.4714 19.5303 48.9706 15.0294C44.4697 10.5286 38.3652 8 32 8V8ZM32 54.038C27.6413 54.038 23.3805 52.7455 19.7564 50.3239C16.1322 47.9024 13.3076 44.4605 11.6396 40.4336C9.97155 36.4067 9.53512 31.9756 10.3855 27.7006C11.2358 23.4256 13.3347 19.4989 16.4168 16.4168C19.4989 13.3347 23.4257 11.2358 27.7006 10.3855C31.9756 9.53511 36.4067 9.97154 40.4336 11.6395C44.4605 13.3075 47.9024 16.1322 50.3239 19.7563C52.7455 23.3805 54.038 27.6413 54.038 32C54.038 37.8448 51.7162 43.4503 47.5832 47.5832C43.4503 51.7161 37.8449 54.038 32 54.038V54.038Z",fill:"currentColor"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path",{d:"M30.5572 39.8088C30.1495 39.8292 29.7566 39.9687 29.4273 40.21C29.0981 40.4514 28.8468 40.7841 28.7047 41.1668C28.5626 41.5496 28.5359 41.9656 28.6279 42.3634C28.7198 42.7611 28.9265 43.1232 29.2221 43.4047C29.5178 43.6862 29.8896 43.8749 30.2914 43.9472C30.6932 44.0195 31.1074 43.9724 31.4827 43.8117C31.8581 43.651 32.178 43.3837 32.4029 43.043C32.6279 42.7023 32.7479 42.3031 32.7482 41.8948C32.7439 41.6132 32.6834 41.3353 32.5705 41.0773C32.4575 40.8193 32.2943 40.5864 32.0903 40.3922C31.8863 40.198 31.6457 40.0464 31.3825 39.9462C31.1192 39.8461 30.8387 39.7993 30.5572 39.8088V39.8088Z",fill:"currentColor"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path",{d:"M32.7424 19.9838C31.8074 19.968 30.8788 20.1411 30.0123 20.4927C29.1458 20.8444 28.3592 21.3674 27.6996 22.0304C27.0401 22.6934 26.5212 23.4827 26.1741 24.351C25.827 25.2194 25.6587 26.1489 25.6794 27.0838H28.5274C28.5198 26.5231 28.6228 25.9664 28.8306 25.4455C29.0384 24.9247 29.3469 24.4499 29.7384 24.0485C30.1299 23.647 30.5968 23.3267 31.1123 23.1059C31.6277 22.8851 32.1817 22.7682 32.7424 22.7618C33.251 22.7389 33.7587 22.8247 34.2316 23.0133C34.7044 23.2019 35.1317 23.489 35.485 23.8556C35.8383 24.2222 36.1094 24.6599 36.2803 25.1394C36.4513 25.619 36.5181 26.1294 36.4764 26.6368C36.449 27.4859 36.1609 28.306 35.6514 28.9858C35.142 29.6655 34.4357 30.1721 33.6284 30.4368L32.4694 30.8508C30.4404 31.6038 28.9754 32.7388 29.0414 35.8188V37.1928H31.9894V35.8148C31.9894 34.1588 33.0164 33.6948 34.4734 33.2478C35.9019 32.822 37.1558 31.9485 38.0503 30.7561C38.9447 29.5636 39.4324 28.1154 39.4414 26.6248C39.4695 25.7401 39.315 24.8591 38.9874 24.0367C38.6599 23.2144 38.1663 22.4684 37.5377 21.8452C36.909 21.2221 36.1587 20.7352 35.3334 20.4149C34.5082 20.0947 33.6259 19.9479 32.7414 19.9838H32.7424Z",fill:"currentColor"})]});MdHelpIcon64.displayName="MdHelpIcon64";const __WEBPACK_DEFAULT_EXPORT__=MdHelpIcon64},"./packages/react/src/icons/MdUserIcon.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const MdUserIcon=({className="",...otherProps})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg",{viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",className,...otherProps,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path",{d:"M15.5682 3.2002C13.122 3.2002 10.7308 3.92557 8.69691 5.28458C6.663 6.64359 5.07776 8.57521 4.14166 10.8352C3.20555 13.0951 2.96063 15.5819 3.43785 17.9811C3.91507 20.3802 5.09301 22.584 6.8227 24.3137C8.5524 26.0434 10.7562 27.2213 13.1553 27.6985C15.5545 28.1758 18.0413 27.9308 20.3012 26.9947C22.5612 26.0586 24.4928 24.4734 25.8518 22.4395C27.2108 20.4056 27.9362 18.0144 27.9362 15.5682C27.9362 12.288 26.6331 9.14215 24.3137 6.8227C21.9942 4.50325 18.8484 3.2002 15.5682 3.2002ZM8.9122 24.0002V23.8882C9.29829 22.4529 10.1649 21.1933 11.3675 20.3198C12.5701 19.4463 14.0358 19.0115 15.5202 19.0882C17.0046 19.0115 18.4703 19.4463 19.6729 20.3198C20.8755 21.1933 21.7421 22.4529 22.1282 23.8882C22.1312 23.9255 22.1312 23.9629 22.1282 24.0002C20.2588 25.4807 17.9526 26.302 15.5682 26.3362C13.1504 26.3416 10.8028 25.5233 8.9122 24.0162V24.0002ZM12.6722 13.3602C12.6735 12.6945 12.9053 12.0498 13.3283 11.5357C13.7513 11.0217 14.3393 10.6701 14.9923 10.5406C15.6453 10.4112 16.3229 10.512 16.91 10.8258C17.4971 11.1397 17.9573 11.6472 18.2124 12.2621C18.4675 12.877 18.5017 13.5613 18.3091 14.1985C18.1166 14.8358 17.7093 15.3867 17.1564 15.7575C16.6036 16.1283 15.9393 16.2961 15.2767 16.2325C14.614 16.1688 13.9939 15.8775 13.5218 15.4082C13.2526 15.1394 13.039 14.8201 12.8932 14.4687C12.7475 14.1173 12.6724 13.7406 12.6722 13.3602ZM23.5682 22.8322C23.0604 21.4345 22.173 20.2061 21.0058 19.2847C19.8385 18.3633 18.4376 17.7855 16.9602 17.6162C17.9882 17.2984 18.8682 16.6224 19.4402 15.711C20.0123 14.7996 20.2385 13.7132 20.0778 12.6493C19.917 11.5853 19.3801 10.6142 18.5643 9.91248C17.7486 9.21072 16.7082 8.8248 15.6322 8.8248C14.5562 8.8248 13.5158 9.21072 12.7001 9.91248C11.8843 10.6142 11.3474 11.5853 11.1866 12.6493C11.0259 13.7132 11.2521 14.7996 11.8242 15.711C12.3962 16.6224 13.2762 17.2984 14.3042 17.6162C12.8082 17.7755 11.3859 18.3476 10.1963 19.2687C9.0068 20.1899 8.09685 21.4236 7.5682 22.8322C6.15552 21.2918 5.22167 19.3736 4.88057 17.3115C4.53946 15.2494 4.80585 13.1327 5.64723 11.2194C6.48861 9.30617 7.86862 7.67913 9.61891 6.53678C11.3692 5.39444 13.4141 4.78616 15.5042 4.78616C17.5943 4.78616 19.6392 5.39444 21.3895 6.53678C23.1398 7.67913 24.5198 9.30617 25.3612 11.2194C26.2025 13.1327 26.4689 15.2494 26.1278 17.3115C25.7867 19.3736 24.8529 21.2918 23.4402 22.8322H23.5682Z",fill:"currentColor"})});MdUserIcon.displayName="MdUserIcon";const __WEBPACK_DEFAULT_EXPORT__=MdUserIcon},"./packages/react/src/icons/MdWarningIcon.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const MdWarningIcon=({className="",...otherProps})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("svg",{viewBox:"0 0 32 32",className,...otherProps,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path",{d:"M16.7371 5.53484C16.6075 5.3103 16.4208 5.12398 16.1961 4.99474C15.9713 4.8655 15.7164 4.79792 15.4571 4.79884C15.2006 4.80072 14.9489 4.86963 14.7272 4.99873C14.5055 5.12783 14.3214 5.31264 14.1931 5.53484L3.39312 24.8788C3.26673 25.0977 3.2002 25.3461 3.2002 25.5988C3.2002 25.8516 3.26673 26.0999 3.39312 26.3188C3.51964 26.5414 3.7038 26.7257 3.92624 26.8524C4.14868 26.9791 4.40117 27.0435 4.65712 27.0388H26.3051C26.5611 27.0435 26.8136 26.9791 27.036 26.8524C27.2584 26.7257 27.4426 26.5414 27.5691 26.3188C27.6954 26.097 27.7617 25.8461 27.7617 25.5908C27.7617 25.3356 27.6954 25.0847 27.5691 24.8628L16.7371 5.53484ZM4.91312 25.5188L15.4891 6.54284L26.0651 25.5188H4.91312Z",fill:"currentColor"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path",{d:"M15.4894 19.8703C15.3517 19.8766 15.2188 19.9231 15.1074 20.0042C14.9959 20.0853 14.9106 20.1973 14.8622 20.3263C14.8138 20.4554 14.8044 20.5958 14.835 20.7302C14.8657 20.8646 14.9352 20.987 15.0348 21.0823C15.1344 21.1776 15.2598 21.2415 15.3954 21.2662C15.531 21.2909 15.6709 21.2752 15.7977 21.2211C15.9245 21.167 16.0326 21.0769 16.1086 20.9619C16.1846 20.8469 16.2252 20.7121 16.2254 20.5743C16.2233 20.4797 16.2026 20.3865 16.1645 20.3C16.1264 20.2134 16.0716 20.1352 16.0032 20.0698C15.9349 20.0044 15.8543 19.9532 15.7662 19.9189C15.678 19.8847 15.5839 19.8682 15.4894 19.8703Z",fill:"currentColor"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path",{d:"M16.0658 12.8643H15.0098V18.4963H16.0658V12.8643Z",fill:"currentColor"})]});MdWarningIcon.displayName="MdWarningIcon";const __WEBPACK_DEFAULT_EXPORT__=MdWarningIcon},"./node_modules/classnames/index.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg)){if(arg.length){var inner=classNames.apply(null,arg);inner&&classes.push(inner)}}else if("object"===argType){if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]")){classes.push(arg.toString());continue}for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key)}}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()},"./node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext}}]);