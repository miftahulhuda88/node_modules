"use strict";(self.webpackChunk_strapi_admin=self.webpackChunk_strapi_admin||[]).push([[9497],{84355:function(q,Z,a){a.r(Z),a.d(Z,{default:function(){return ce}});var e=a(32735),c=a(94638),S=a(27649),j=a(82055),x=a(17e3),G=a(41415),h=a(72850),P=a(87933),l=a(19565),M=a(66456),y=a(92802),L=a(74758),C=a(67879),b=a(20108),_=a(20139),ee=a(10328),W=a(8997),Y=a(10369),ae=a(63642),R=a(49372),O=a(15335),u=a(5803),D=a(54894),F=a(60492),te=a(60216),t=a.n(te),$=a(8471);const X=(0,$.ZP)(Y.o)`
  ::-ms-reveal {
    display: none;
  }
`,H=(0,$.ZP)(ae.E)`
  svg {
    height: ${(0,l.Q1)(16)};
    width: ${(0,l.Q1)(16)};
    path {
      fill: ${({theme:s})=>s.colors.neutral600};
    }
  }
`,N=({errors:s,onChange:d,values:m})=>{const{formatMessage:i}=(0,C.Z)(),[r,I]=(0,e.useState)(!1),[n,A]=(0,e.useState)(!1),[T,z]=(0,e.useState)(!1);return e.createElement(h.x,{background:"neutral0",hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7},e.createElement(P.k,{direction:"column",alignItems:"stretch",gap:4},e.createElement(R.Z,{variant:"delta",as:"h2"},i({id:"global.change-password",defaultMessage:"Change password"})),e.createElement(O.r,{gap:5},e.createElement(u.P,{s:12,col:6},e.createElement(Y.o,{error:s.currentPassword?i({id:s.currentPassword,defaultMessage:s.currentPassword}):"",onChange:d,value:m.currentPassword,label:i({id:"Auth.form.currentPassword.label",defaultMessage:"Current Password"}),name:"currentPassword",type:r?"text":"password",endAction:e.createElement(H,{onClick:w=>{w.stopPropagation(),I(v=>!v)},label:i(r?{id:"Auth.form.password.show-password",defaultMessage:"Show password"}:{id:"Auth.form.password.hide-password",defaultMessage:"Hide password"})},r?e.createElement(D.Z,null):e.createElement(F.Z,null))}))),e.createElement(O.r,{gap:5},e.createElement(u.P,{s:12,col:6},e.createElement(X,{error:s.password?i({id:s.password,defaultMessage:s.password}):"",onChange:d,value:m.password,label:i({id:"global.password",defaultMessage:"Password"}),name:"password",type:n?"text":"password",autoComplete:"new-password",endAction:e.createElement(H,{onClick:w=>{w.stopPropagation(),A(v=>!v)},label:i(n?{id:"Auth.form.password.show-password",defaultMessage:"Show password"}:{id:"Auth.form.password.hide-password",defaultMessage:"Hide password"})},n?e.createElement(D.Z,null):e.createElement(F.Z,null))})),e.createElement(u.P,{s:12,col:6},e.createElement(X,{error:s.confirmPassword?i({id:s.confirmPassword,defaultMessage:s.confirmPassword}):"",onChange:d,value:m.confirmPassword,label:i({id:"Auth.form.confirmPassword.label",defaultMessage:"Password confirmation"}),name:"confirmPassword",type:T?"text":"password",autoComplete:"new-password",endAction:e.createElement(H,{onClick:w=>{w.stopPropagation(),z(v=>!v)},label:i(T?{id:"Auth.form.password.show-password",defaultMessage:"Show password"}:{id:"Auth.form.password.hide-password",defaultMessage:"Hide password"})},T?e.createElement(D.Z,null):e.createElement(F.Z,null))})))))};N.propTypes={errors:t().shape({currentPassword:t().string,password:t().string,confirmPassword:t().string}),onChange:t().func,values:t().shape({currentPassword:t().string,password:t().string,confirmPassword:t().string})},N.defaultProps={errors:{},onChange(){},values:{currentPassword:"",password:"",confirmPassword:""}};var se=N,J=a(68465),V=a(84967),re=a(23940),ne=a.n(re);const B=({onChange:s,values:d,localeNames:m,allApplicationThemes:i})=>{const{formatMessage:r}=(0,C.Z)(),I=Object.keys(i).filter(n=>i[n]);return e.createElement(h.x,{background:"neutral0",hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7},e.createElement(P.k,{direction:"column",alignItems:"stretch",gap:4},e.createElement(P.k,{direction:"column",alignItems:"stretch",gap:1},e.createElement(R.Z,{variant:"delta",as:"h2"},r({id:"Settings.profile.form.section.experience.title",defaultMessage:"Experience"})),e.createElement(R.Z,null,r({id:"Settings.profile.form.section.experience.interfaceLanguageHelp",defaultMessage:"Preference changes will apply only to you. More information is available {here}."},{here:e.createElement(h.x,{as:"a",color:"primary600",target:"_blank",rel:"noopener noreferrer",href:"https://docs.strapi.io/developer-docs/latest/development/admin-customization.html#locales"},r({id:"Settings.profile.form.section.experience.here",defaultMessage:"here"}))}))),e.createElement(O.r,{gap:5},e.createElement(u.P,{s:12,col:6},e.createElement(J.P,{label:r({id:"Settings.profile.form.section.experience.interfaceLanguage",defaultMessage:"Interface language"}),placeholder:r({id:"global.select",defaultMessage:"Select"}),hint:r({id:"Settings.profile.form.section.experience.interfaceLanguage.hint",defaultMessage:"This will only display your own interface in the chosen language."}),onClear:()=>{s({target:{name:"preferedLanguage",value:null}})},clearLabel:r({id:"Settings.profile.form.section.experience.clear.select",defaultMessage:"Clear the interface language selected"}),value:d.preferedLanguage,onChange:n=>{s({target:{name:"preferedLanguage",value:n}})}},Object.entries(m).map(([n,A])=>e.createElement(V.W,{value:n,key:n},A)))),e.createElement(u.P,{s:12,col:6},e.createElement(J.P,{label:r({id:"Settings.profile.form.section.experience.mode.label",defaultMessage:"Interface mode"}),placeholder:r({id:"components.Select.placeholder",defaultMessage:"Select"}),hint:r({id:"Settings.profile.form.section.experience.mode.hint",defaultMessage:"Displays your interface in the chosen mode."}),value:d.currentTheme,onChange:n=>{s({target:{name:"currentTheme",value:n}})}},I.map(n=>e.createElement(V.W,{value:n,key:n},r({id:"Settings.profile.form.section.experience.mode.option-label",defaultMessage:"{name} mode"},{name:r({id:n,defaultMessage:ne()(n)})}))))))))};B.propTypes={allApplicationThemes:t().object,onChange:t().func,values:t().shape({preferedLanguage:t().string,currentTheme:t().string}),localeNames:t().object},B.defaultProps={allApplicationThemes:{},onChange(){},values:{preferedLanguage:null,currentTheme:""},localeNames:{}};var oe=B;const Q=({errors:s,onChange:d,values:m})=>{const{formatMessage:i}=(0,C.Z)();return e.createElement(h.x,{background:"neutral0",hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7},e.createElement(P.k,{direction:"column",alignItems:"stretch",gap:4},e.createElement(R.Z,{variant:"delta",as:"h2"},i({id:"global.profile",defaultMessage:"Profile"})),e.createElement(O.r,{gap:5},e.createElement(u.P,{s:12,col:6},e.createElement(l.jm,{intlLabel:{id:"Auth.form.firstname.label",defaultMessage:"First name"},error:s.firstname,onChange:d,value:m.firstname,type:"text",name:"firstname",required:!0})),e.createElement(u.P,{s:12,col:6},e.createElement(l.jm,{intlLabel:{id:"Auth.form.lastname.label",defaultMessage:"Last name"},error:s.lastname,onChange:d,value:m.lastname,type:"text",name:"lastname"})),e.createElement(u.P,{s:12,col:6},e.createElement(l.jm,{intlLabel:{id:"Auth.form.email.label",defaultMessage:"Email"},error:s.email,onChange:d,value:m.email,type:"email",name:"email",required:!0})),e.createElement(u.P,{s:12,col:6},e.createElement(l.jm,{intlLabel:{id:"Auth.form.username.label",defaultMessage:"Username"},error:s.username,onChange:d,value:m.username,type:"text",name:"username"})))))};Q.propTypes={errors:t().shape({firstname:t().string,lastname:t().string,username:t().string,email:t().string}),onChange:t().func,values:t().shape({firstname:t().string,lastname:t().string,username:t().string,email:t().string})},Q.defaultProps={errors:{},onChange(){},values:{firstname:"",lastname:"",username:"",email:""}};var le=Q,ie=a(24346),de=a(1057),me=ie.Ry().shape(de.Rw),ce=()=>{const{changeLocale:s,localeNames:d}=(0,_.Z)(),{setUserDisplayName:m}=(0,l.L7)(),i=(0,b.useQueryClient)(),{formatMessage:r}=(0,C.Z)(),{trackUsage:I}=(0,l.rS)(),n=(0,l.lm)(),{lockApp:A,unlockApp:T}=(0,l.o1)(),{notifyStatus:z}=(0,c.G)(),{currentTheme:w,themes:v,onChangeTheme:ue}=(0,ee.M1)(),{get:K,put:pe}=(0,l.kY)();(0,l.go)();const{isLoading:ge,data:U}=(0,b.useQuery)("user",async()=>{const{data:o}=await K("/admin/users/me");return o.data},{onSuccess(){z(r({id:"Settings.profile.form.notify.data.loaded",defaultMessage:"Your profile data has been loaded"}))},onError(){n({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}})}}),{isLoading:fe,data:he}=(0,b.useQuery)(["providers","isSSOLocked"],async()=>{const{data:{data:o}}=await K("/admin/providers/isSSOLocked");return o},{enabled:window.strapi.isEE&&window.strapi.features.isEnabled("sso"),onError(){n({type:"warning",message:{id:"Settings.permissions.users.sso.provider.error"}})}}),we=ge||fe,k=(0,b.useMutation)(async o=>{const{confirmPassword:p,currentTheme:g,...E}=o,{data:f}=await pe("/admin/users/me",E);return{...f.data,currentTheme:o.currentTheme}},{async onSuccess(o){await i.invalidateQueries("user");const{email:p,firstname:g,lastname:E,username:f,preferedLanguage:Te}=o;l.I8.setUserInfo({email:p,firstname:g,lastname:E,username:f,preferedLanguage:Te});const Ze=o.username||(0,W.Pp)(o.firstname,o.lastname);m(Ze),s(o.preferedLanguage),ue(o.currentTheme),I("didChangeMode",{newMode:o.currentTheme}),n({type:"success",message:{id:"notification.success.saved",defaultMessage:"Saved"}})},onSettled(){T()},refetchActive:!0}),{isLoading:ve}=k,Ee=async(o,{setErrors:p})=>{A();const g=o.username||null;k.mutate({...o,username:g},{onError(E){const f=E?.response?.data;return f?.data?p(f.data):n({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}})}})};if(we)return e.createElement(S.o,{"aria-busy":"true"},e.createElement(L.q,{title:r({id:"Settings.profile.form.section.helmet.title",defaultMessage:"User profile"})}),e.createElement(j.T,{title:r({id:"Settings.profile.form.section.profile.page.title",defaultMessage:"Profile page"})}),e.createElement(x.D,null,e.createElement(l.dO,null)));const Pe=he?.isSSOLocked??!1,{email:ye,firstname:Se,lastname:Me,username:Le,preferedLanguage:Ie}=U,Ae={email:ye,firstname:Se,lastname:Me,username:Le,preferedLanguage:Ie,currentTheme:w};return e.createElement(S.o,{"aria-busy":ve},e.createElement(L.q,{title:r({id:"Settings.profile.form.section.helmet.title",defaultMessage:"User profile"})}),e.createElement(y.J9,{onSubmit:Ee,initialValues:Ae,validateOnChange:!1,validationSchema:me,enableReinitialize:!0},({errors:o,values:p,handleChange:g,isSubmitting:E,dirty:f})=>e.createElement(l.l0,null,e.createElement(j.T,{title:U.username||(0,W.Pp)(U.firstname,U.lastname),primaryAction:e.createElement(G.z,{startIcon:e.createElement(M.Z,null),loading:E,type:"submit",disabled:!f},r({id:"global.save",defaultMessage:"Save"}))}),e.createElement(h.x,{paddingBottom:10},e.createElement(x.D,null,e.createElement(P.k,{direction:"column",alignItems:"stretch",gap:6},e.createElement(le,{errors:o,onChange:g,values:p}),!Pe&&e.createElement(se,{errors:o,onChange:g,values:p}),e.createElement(oe,{allApplicationThemes:v,onChange:g,values:p,localeNames:d})))))))}},1057:function(q,Z,a){a.d(Z,{YM:function(){return l},Rw:function(){return x}});var e=a(24346),c=a(19565);const S={firstname:e.Z_().trim().required(c.I0.required),lastname:e.Z_(),email:e.Z_().email(c.I0.email).lowercase().required(c.I0.required),username:e.Z_().nullable(),password:e.Z_().min(8,c.I0.minLength).matches(/[a-z]/,"components.Input.error.contain.lowercase").matches(/[A-Z]/,"components.Input.error.contain.uppercase").matches(/\d/,"components.Input.error.contain.number"),confirmPassword:e.Z_().min(8,c.I0.minLength).oneOf([e.iH("password"),null],"components.Input.error.password.noMatch").when("password",(M,y)=>M?y.required(c.I0.required):y)};var x={...S,currentPassword:e.Z_().when(["password","confirmPassword"],(M,y,L)=>M||y?L.required(c.I0.required):L),preferedLanguage:e.Z_().nullable()},h={roles:e.IX().min(1,c.I0.required).required(c.I0.required)},l=e.Ry().shape({...S,isActive:e.Xg(),...h})}}]);
