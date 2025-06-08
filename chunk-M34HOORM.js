import{I as P,p as W}from"./chunk-LSPNTEQT.js";import"./chunk-5ZVHWZ6S.js";import{A as z,B as _,Da as L}from"./chunk-23EAPCQL.js";import{l as R,m as D,x as I}from"./chunk-2LOGFC5J.js";import{Bb as o,Ga as u,Kc as t,Lc as w,Mc as C,Ra as k,Sa as b,Sc as E,Vb as v,Xb as m,bc as g,dc as x,fc as S,gc as y,hc as e,ic as i,jc as c,nc as f,wc as p,yc as s}from"./chunk-DLPH24CR.js";import"./chunk-X2P3SVT6.js";import"./chunk-2EBTC7QX.js";import"./chunk-FFXK657A.js";function M(n,r){if(n&1){let l=f();e(0,"div",208)(1,"div",242),p("click",function(){let d=k(l).index,h=s();return b(h.clickEvent(d))}),c(2,"span"),i()()}if(n&2){let l=r.$implicit,a=r.index,d=s();o(),m("ngClass",l.class+(d.statuses[a]?" on":""))}}function O(n,r){if(n&1){let l=f();e(0,"div",227)(1,"div")(2,"p",230),t(3),e(4,"code"),t(5),i()()(),e(6,"div",242),p("click",function(){let d=k(l).$implicit,h=s();return b(h.clickEvent1(d))}),c(7,"span"),i()()}if(n&2){let l=r.$implicit;o(3),C("",l.label," "),o(2),w(l.code),o(),g("toggle mb-0 ",l.code," ",l.bg,""),m("ngClass",l.status?"on":"")}}var A=(()=>{class n{constructor(){this.toggles=[{class:"toggle radio-first"},{class:"toggle toggle-secondary"},{class:"toggle toggle-warning"},{class:"toggle toggle-info"},{class:"toggle toggle-success"},{class:"toggle toggle-danger"},{class:"toggle toggle-light"},{class:"toggle toggle-dark"}],this.statuses=Array(this.toggles.length).fill(!0),this.toggleSwitches=[{label:"Small size toggle switch",code:"toggle-sm",status:!0},{label:"Default toggle switch",code:"toggle",status:!0,bg:"toggle-secondary "},{label:"Large size toggle switch",code:"toggle-lg",status:!0,bg:"toggle-success"}]}clickEvent(l){document.querySelector(`.${this.toggles[l].class}`)?.classList.toggle("on"),this.statuses[l]=!this.statuses[l]}clickEvent1(l){let a=l.code?`toggle ${l.code}`:"toggle";document.querySelector(`.${a}`)?.classList.toggle("on"),l.status=!l.status}static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=u({type:n,selectors:[["app-checksradios"]],standalone:!0,features:[E],decls:832,vars:1,consts:[[1,"row"],[1,"col-xl-6","col-lg-6","col-md-6","col-sm-12"],[1,"card","custom-card"],[1,"top-left"],[1,"top-right"],[1,"bottom-left"],[1,"bottom-right"],[1,"card-header","justify-content-between"],[1,"card-title"],[1,"prism-toggle"],["appShowCode","",1,"btn","btn-sm","btn-primary-light"],[1,"ri-code-line","ms-2","d-inline-block","align-middle"],[1,"card-body"],[1,"form-check"],["type","checkbox","value","","id","flexCheckDefault",1,"form-check-input"],["for","flexCheckDefault",1,"form-check-label"],["type","checkbox","value","","id","flexCheckChecked","checked","",1,"form-check-input"],["for","flexCheckChecked",1,"form-check-label"],[1,"card-footer","d-none","border-top-0"],[1,"language-html"],["type","checkbox","value","","id","flexCheckDisabled","disabled","",1,"form-check-input"],["for","flexCheckDisabled",1,"form-check-label"],["type","checkbox","value","","id","flexCheckCheckedDisabled","checked","","disabled","",1,"form-check-input"],["for","flexCheckCheckedDisabled",1,"form-check-label"],["type","radio","name","flexRadioDefault","id","flexRadioDefault1",1,"form-check-input"],["for","flexRadioDefault1",1,"form-check-label"],["type","radio","name","flexRadioDefault","id","flexRadioDefault2","checked","",1,"form-check-input"],["for","flexRadioDefault2",1,"form-check-label"],["type","radio","name","flexRadioDisabled","id","flexRadioDisabled","disabled","",1,"form-check-input"],["for","flexRadioDisabled",1,"form-check-label"],["type","radio","name","flexRadioDisabled","id","flexRadioCheckedDisabled","checked","","disabled","",1,"form-check-input"],["for","flexRadioCheckedDisabled",1,"form-check-label"],[1,"col-xxl-4","col-xl-12","col-lg-12","col-md-12","col-sm-12"],[1,"card-body","d-sm-flex","align-items-center","justify-content-between"],["type","checkbox","value","","id","checkebox-sm","checked","",1,"form-check-input"],["for","checkebox-sm",1,"form-check-label"],[1,"form-check","form-check-md","d-flex","align-items-center"],["type","checkbox","value","","id","checkebox-md","checked","",1,"form-check-input"],["for","checkebox-md",1,"form-check-label"],[1,"form-check","form-check-lg","d-flex","align-items-center"],["type","checkbox","value","","id","checkebox-lg","checked","",1,"form-check-input"],["for","checkebox-lg",1,"form-check-label"],["type","radio","name","Radio","id","Radio-sm",1,"form-check-input"],["for","Radio-sm",1,"form-check-label"],[1,"form-check","form-check-md"],["type","radio","name","Radio","id","Radio-md",1,"form-check-input"],["for","Radio-md",1,"form-check-label"],[1,"form-check","form-check-lg"],["type","radio","name","Radio","id","Radio-lg","checked","",1,"form-check-input"],["for","Radio-lg",1,"form-check-label"],[1,"card-body","d-sm-flex","align-item-center","justify-content-between"],[1,"form-check","form-switch"],["type","checkbox","role","switch","id","switch-sm",1,"form-check-input"],["for","switch-sm",1,"form-check-label"],[1,"form-check","form-check-md","form-switch"],["type","checkbox","role","switch","id","switch-md",1,"form-check-input"],["for","switch-md",1,"form-check-label"],[1,"form-check","form-check-lg","form-switch"],["type","checkbox","role","switch","id","switch-lg",1,"form-check-input"],["for","switch-lg",1,"form-check-label"],[1,"col-xl-12","col-lg-6","col-md-12","col-sm-12"],["type","checkbox","value","","id","defaultCheck1",1,"form-check-input"],["for","defaultCheck1",1,"form-check-label"],["type","checkbox","value","","id","defaultCheck2","disabled","",1,"form-check-input"],["for","defaultCheck2",1,"form-check-label"],["type","radio","name","exampleRadios","id","exampleRadios1","value","option1","checked","",1,"form-check-input"],["for","exampleRadios1",1,"form-check-label"],[1,"form-check","mb-0"],["type","radio","name","exampleRadios","id","exampleRadios3","value","option3","disabled","",1,"form-check-input"],["for","exampleRadios3",1,"form-check-label"],["type","checkbox","role","switch","id","flexSwitchCheckDefault",1,"form-check-input"],["for","flexSwitchCheckDefault",1,"form-check-label"],["type","checkbox","role","switch","id","flexSwitchCheckChecked","checked","",1,"form-check-input"],["for","flexSwitchCheckChecked",1,"form-check-label"],["type","checkbox","role","switch","id","flexSwitchCheckDisabled","disabled","",1,"form-check-input"],["for","flexSwitchCheckDisabled",1,"form-check-label"],[1,"form-check","form-switch","mb-0"],["type","checkbox","role","switch","id","flexSwitchCheckCheckedDisabled","checked","","disabled","",1,"form-check-input"],["for","flexSwitchCheckCheckedDisabled",1,"form-check-label"],[1,"col-xl-5","col-lg-12","col-md-12","col-sm-12"],[1,"form-check","form-check-inline"],["type","checkbox","id","inlineCheckbox1","value","option1",1,"form-check-input"],["for","inlineCheckbox1",1,"form-check-label"],["type","checkbox","id","inlineCheckbox2","value","option2",1,"form-check-input"],["for","inlineCheckbox2",1,"form-check-label"],["type","checkbox","id","inlineCheckbox3","value","option3","disabled","",1,"form-check-input"],["for","inlineCheckbox3",1,"form-check-label"],["type","radio","name","inlineRadioOptions","id","inlineRadio1","value","option1",1,"form-check-input"],["for","inlineRadio1",1,"form-check-label"],["type","radio","name","inlineRadioOptions","id","inlineRadio2","value","option2",1,"form-check-input"],["for","inlineRadio2",1,"form-check-label"],["type","radio","name","inlineRadioOptions","id","inlineRadio3","value","option3","disabled","",1,"form-check-input"],["for","inlineRadio3",1,"form-check-label"],[1,"me-3"],["type","checkbox","id","checkboxNoLabel","value","","aria-label","...",1,"form-check-input"],["type","radio","name","radioNoLabel","id","radioNoLabel1","value","","aria-label","...",1,"form-check-input"],[1,"col-xl-3","col-lg-12","col-md-12","col-sm-12"],[1,"form-check","form-check-reverse","mb-3"],["type","checkbox","value","","id","reverseCheck1",1,"form-check-input"],["for","reverseCheck1",1,"form-check-label"],["type","checkbox","value","","id","reverseCheck2","disabled","",1,"form-check-input"],["for","reverseCheck2",1,"form-check-label"],[1,"form-check","form-switch","form-check-reverse"],["type","checkbox","id","flexSwitchCheckReverse",1,"form-check-input"],["for","flexSwitchCheckReverse",1,"form-check-label"],[1,"col-xl-4","col-lg-12","col-md-12","col-sm-12"],["type","checkbox","id","btn-check-outlined",1,"btn-check"],["for","btn-check-outlined",1,"btn","btn-outline-primary","mb-3"],["type","checkbox","id","btn-check-2-outlined","checked","",1,"btn-check"],["for","btn-check-2-outlined",1,"btn","btn-outline-secondary","mb-3"],["type","radio","name","options-outlined","id","success-outlined","checked","",1,"btn-check"],["for","success-outlined",1,"btn","btn-outline-success","m-1"],["type","radio","name","options-outlined","id","danger-outlined",1,"btn-check"],["for","danger-outlined",1,"btn","btn-outline-danger","m-1"],[1,"col-xl-6","col-lg-12","col-md-12","col-sm-12"],["type","radio","name","options","id","option1","checked","",1,"btn-check"],["for","option1",1,"btn","btn-primary","m-1"],["type","radio","name","options","id","option2",1,"btn-check"],["for","option2",1,"btn","btn-primary","m-1"],["type","radio","name","options","id","option3","disabled","",1,"btn-check"],["for","option3",1,"btn","btn-primary","m-1"],["type","radio","name","options","id","option4",1,"btn-check"],["for","option4",1,"btn","btn-primary","m-1"],["type","checkbox","id","btn-check",1,"btn-check"],["for","btn-check",1,"btn","btn-primary","m-1"],["type","checkbox","id","btn-check-2","checked","",1,"btn-check"],["for","btn-check-2",1,"btn","btn-primary","m-1"],["type","checkbox","id","btn-check-3","disabled","",1,"btn-check"],["for","btn-check-3",1,"btn","btn-primary","m-1"],[1,"row","row-cols-12"],[1,"col-md-6","col-lg-6","col-xxl-6"],[1,"form-check","mb-2"],["type","checkbox","value","","id","primaryChecked","checked","",1,"form-check-input"],["for","primaryChecked",1,"form-check-label"],["type","checkbox","value","","id","secondaryChecked","checked","",1,"form-check-input","form-checked-secondary"],["for","secondaryChecked",1,"form-check-label"],["type","checkbox","value","","id","warningChecked","checked","",1,"form-check-input","form-checked-warning"],["for","warningChecked",1,"form-check-label"],["type","checkbox","value","","id","infoChecked","checked","",1,"form-check-input","form-checked-info"],["for","infoChecked",1,"form-check-label"],["type","checkbox","value","","id","successChecked","checked","",1,"form-check-input","form-checked-success"],["for","successChecked",1,"form-check-label"],["type","checkbox","value","","id","dangerChecked","checked","",1,"form-check-input","form-checked-danger"],["for","dangerChecked",1,"form-check-label"],["type","checkbox","value","","id","darkChecked","checked","",1,"form-check-input","form-checked-dark"],["for","darkChecked",1,"form-check-label"],["type","checkbox","value","","id","primaryoutlineChecked","checked","",1,"form-check-input","form-checked-outline"],["for","primaryoutlineChecked",1,"form-check-label"],["type","checkbox","value","","id","secondaryoutlineChecked","checked","",1,"form-check-input","form-checked-outline","form-checked-secondary"],["for","secondaryoutlineChecked",1,"form-check-label"],["type","checkbox","value","","id","warningoutlineChecked","checked","",1,"form-check-input","form-checked-outline","form-checked-warning"],["for","warningoutlineChecked",1,"form-check-label"],["type","checkbox","value","","id","infooutlineChecked","checked","",1,"form-check-input","form-checked-outline","form-checked-info"],["for","infooutlineChecked",1,"form-check-label"],["type","checkbox","value","","id","successoutlineChecked","checked","",1,"form-check-input","form-checked-outline","form-checked-success"],["for","successoutlineChecked",1,"form-check-label"],["type","checkbox","value","","id","dangeroutlineChecked","checked","",1,"form-check-input","form-checked-outline","form-checked-danger"],["for","dangeroutlineChecked",1,"form-check-label"],["type","checkbox","value","","id","darkoutlineChecked","checked","",1,"form-check-input","form-checked-outline","form-checked-dark"],["for","darkoutlineChecked",1,"form-check-label"],[1,"col-xxl-4","col-md-12"],["type","radio","name","primaryRadio","id","primaryRadio","checked","",1,"form-check-input"],["for","primaryRadio",1,"form-check-label"],["type","radio","name","secondaryRadio","id","secondaryRadio","checked","",1,"form-check-input","form-checked-secondary"],["for","secondaryRadio",1,"form-check-label"],["type","radio","name","warningRadio","id","warningRadio","checked","",1,"form-check-input","form-checked-warning"],["for","warningRadio",1,"form-check-label"],["type","radio","name","InfoRadio","id","InfoRadio","checked","",1,"form-check-input","form-checked-info"],["for","InfoRadio",1,"form-check-label"],["type","radio","name","successRadio","id","successRadio","checked","",1,"form-check-input","form-checked-success"],["for","successRadio",1,"form-check-label"],["type","radio","name","dangerRadio","id","dangerRadio","checked","",1,"form-check-input","form-checked-danger"],["for","dangerRadio",1,"form-check-label"],["type","radio","name","darkRadio","id","darkRadio","checked","",1,"form-check-input","form-checked-dark"],["for","darkRadio",1,"form-check-label"],[1,"col-xxl-4","col-sm-6"],["type","radio","name","primaryoutlineRadio","id","primaryoutlineRadio","checked","",1,"form-check-input","form-checked-outline"],["for","primaryoutlineRadio",1,"form-check-label"],["type","radio","name","secondaryoutlineRadio","id","secondaryoutlineRadio","checked","",1,"form-check-input","form-checked-outline","form-checked-secondary"],["for","secondaryoutlineRadio",1,"form-check-label"],["type","radio","name","warningoutlineRadio","id","warningoutlineRadio","checked","",1,"form-check-input","form-checked-outline","form-checked-warning"],["for","warningoutlineRadio",1,"form-check-label"],["type","radio","name","InfooutlineRadio","id","InfooutlineRadio","checked","",1,"form-check-input","form-checked-outline","form-checked-info"],["for","InfooutlineRadio",1,"form-check-label"],["type","radio","name","successoutlineRadio","id","successoutlineRadio","checked","",1,"form-check-input","form-checked-outline","form-checked-success"],["for","successoutlineRadio",1,"form-check-label"],["type","radio","name","dangeroutlineRadio","id","dangeroutlineRadio","checked","",1,"form-check-input","form-checked-outline","form-checked-danger"],["for","dangeroutlineRadio",1,"form-check-label"],["type","radio","name","darkoutlineRadio","id","darkoutlineRadio","checked","",1,"form-check-input","form-checked-outline","form-checked-dark"],["for","darkoutlineRadio",1,"form-check-label"],[1,"form-check","form-switch","mb-2"],["type","checkbox","role","switch","id","switch-primary","checked","",1,"form-check-input"],["for","switch-primary",1,"form-check-label"],["type","checkbox","role","switch","id","switch-secondary","checked","",1,"form-check-input","form-checked-secondary"],["for","switch-secondary",1,"form-check-label"],["type","checkbox","role","switch","id","switch-warning","checked","",1,"form-check-input","form-checked-warning"],["for","switch-warning",1,"form-check-label"],["type","checkbox","role","switch","id","switch-info","checked","",1,"form-check-input","form-checked-info"],["for","switch-info",1,"form-check-label"],["type","checkbox","role","switch","id","switch-success","checked","",1,"form-check-input","form-checked-success"],["for","switch-success",1,"form-check-label"],["type","checkbox","role","switch","id","switch-danger","checked","",1,"form-check-input","form-checked-danger"],["for","switch-danger",1,"form-check-label"],["type","checkbox","role","switch","id","switch-dark","checked","",1,"form-check-input","form-checked-dark"],["for","switch-dark",1,"form-check-label"],[1,"col-xl-12","col-lg-12","col-md-12","col-sm-12"],[1,"row","gy-1"],["class","col-xl-4",4,"ngFor","ngForOf"],[1,"col-xl-4"],[1,"custom-toggle-switch","d-flex","align-items-center","mb-4"],["id","toggleswitchPrimary","name","toggleswitch001","type","checkbox","checked",""],["for","toggleswitchPrimary",1,"label-primary"],[1,"ms-3"],["id","toggleswitchSecondary","name","toggleswitch001","type","checkbox","checked",""],["for","toggleswitchSecondary",1,"label-secondary"],["id","toggleswitchWarning","name","toggleswitch001","type","checkbox","checked",""],["for","toggleswitchWarning",1,"label-warning"],["id","toggleswitchInfo","name","toggleswitch001","type","checkbox","checked",""],["for","toggleswitchInfo",1,"label-info"],["id","toggleswitchSuccess","name","toggleswitch001","type","checkbox","checked",""],["for","toggleswitchSuccess",1,"label-success"],["id","toggleswitchDanger","name","toggleswitch001","type","checkbox","checked",""],["for","toggleswitchDanger",1,"label-danger"],["id","toggleswitchLight","name","toggleswitch001","type","checkbox","checked",""],["for","toggleswitchLight",1,"label-light"],["id","toggleswitchDark","name","toggleswitch001","type","checkbox","checked",""],["for","toggleswitchDark",1,"label-dark"],[1,"d-flex","align-items-center","flex-wrap","mb-3"],[1,"d-flex","align-items-center","flex-wrap","mb-4"],[1,""],[1,"text-muted","m-0"],[1,"custom-toggle-switch","toggle-sm","ms-2"],["id","size-sm","name","toggleswitchsize","type","checkbox","checked",""],["for","size-sm",1,"label-primary"],[1,"custom-toggle-switch","ms-2"],["id","size-default","name","toggleswitchsize","type","checkbox","checked",""],["for","size-default",1,"label-secondary","mb-1"],[1,"d-sm-flex","d-block","align-items-center","flex-wrap"],[1,"mb-sm-0","mb-2"],[1,"custom-toggle-switch","toggle-lg","ms-sm-2","ms-0"],["id","size-lg","name","toggleswitchsize","type","checkbox","checked",""],["for","size-lg",1,"label-success","mb-2"],[3,"click","ngClass"]],template:function(a,d){a&1&&(e(0,"div",0)(1,"div",1)(2,"div",2),c(3,"div",3)(4,"div",4)(5,"div",5)(6,"div",6),e(7,"div",7)(8,"div",8),t(9," Checks "),i(),e(10,"div",9)(11,"button",10),t(12,"Show Code"),c(13,"i",11),i()()(),e(14,"div",12)(15,"div",13),c(16,"input",14),e(17,"label",15),t(18," Default checkbox "),i()(),e(19,"div",13),c(20,"input",16),e(21,"label",17),t(22," Checked checkbox "),i()()(),e(23,"div",18)(24,"pre",19)(25,"code",19),t(26,`<div class="form-check">
<input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
<label class="form-check-label" for="flexCheckDefault">
Default checkbox
</label>
</div>
<div class="form-check">
<input class="form-check-input" type="checkbox" value="" id="flexCheckChecked"
checked>
<label class="form-check-label" for="flexCheckChecked">
Checked checkbox
</label>
</div>`),i()()()()(),e(27,"div",1)(28,"div",2),c(29,"div",3)(30,"div",4)(31,"div",5)(32,"div",6),e(33,"div",7)(34,"div",8),t(35," Disabled "),i(),e(36,"div",9)(37,"button",10),t(38,"Show Code"),c(39,"i",11),i()()(),e(40,"div",12)(41,"div",13),c(42,"input",20),e(43,"label",21),t(44," Disabled checkbox "),i()(),e(45,"div",13),c(46,"input",22),e(47,"label",23),t(48," Disabled checked checkbox "),i()()(),e(49,"div",18)(50,"pre",19)(51,"code",19),t(52,`<div class="form-check">
<input class="form-check-input" type="checkbox" value="" id="flexCheckDisabled"
disabled="">
<label class="form-check-label" for="flexCheckDisabled">
Disabled checkbox
</label>
</div>
<div class="form-check">
<input class="form-check-input" type="checkbox" value=""
id="flexCheckCheckedDisabled" checked="" disabled="">
<label class="form-check-label" for="flexCheckCheckedDisabled">
Disabled checked checkbox
</label>
</div>`),i()()()()(),e(53,"div",1)(54,"div",2),c(55,"div",3)(56,"div",4)(57,"div",5)(58,"div",6),e(59,"div",7)(60,"div",8),t(61," Radios "),i(),e(62,"div",9)(63,"button",10),t(64,"Show Code"),c(65,"i",11),i()()(),e(66,"div",12)(67,"div",13),c(68,"input",24),e(69,"label",25),t(70," Default radio "),i()(),e(71,"div",13),c(72,"input",26),e(73,"label",27),t(74," Default checked radio "),i()()(),e(75,"div",18)(76,"pre",19)(77,"code",19),t(78,`<div class="form-check">
<input class="form-check-input" type="radio" name="flexRadioDefault"
id="flexRadioDefault1">
<label class="form-check-label" for="flexRadioDefault1">
Default radio
</label>
</div>
<div class="form-check">
<input class="form-check-input" type="radio" name="flexRadioDefault"
id="flexRadioDefault2" checked="">
<label class="form-check-label" for="flexRadioDefault2">
Default checked radio
</label>
</div>`),i()()()()(),e(79,"div",1)(80,"div",2),c(81,"div",3)(82,"div",4)(83,"div",5)(84,"div",6),e(85,"div",7)(86,"div",8),t(87," Disabled "),i(),e(88,"div",9)(89,"button",10),t(90,"Show Code"),c(91,"i",11),i()()(),e(92,"div",12)(93,"div",13),c(94,"input",28),e(95,"label",29),t(96," Disabled radio "),i()(),e(97,"div",13),c(98,"input",30),e(99,"label",31),t(100," Disabled checked radio "),i()()(),e(101,"div",18)(102,"pre",19)(103,"code",19),t(104,`<div class="form-check">
<input class="form-check-input" type="radio" name="flexRadioDisabled"
id="flexRadioDisabled" disabled="">
<label class="form-check-label" for="flexRadioDisabled">
Disabled radio
</label>
</div>
<div class="form-check">
<input class="form-check-input" type="radio" name="flexRadioDisabled"
id="flexRadioCheckedDisabled" checked="" disabled="">
<label class="form-check-label" for="flexRadioCheckedDisabled">
Disabled checked radio
</label>
</div>`),i()()()()()(),e(105,"div",0)(106,"div",32)(107,"div",2),c(108,"div",3)(109,"div",4)(110,"div",5)(111,"div",6),e(112,"div",7)(113,"div",8),t(114," Checkbox Sizes "),i(),e(115,"div",9)(116,"button",10),t(117,"Show Code"),c(118,"i",11),i()()(),e(119,"div",33)(120,"div",13),c(121,"input",34),e(122,"label",35),t(123," Default "),i()(),e(124,"div",36),c(125,"input",37),e(126,"label",38),t(127," Medium "),i()(),e(128,"div",39),c(129,"input",40),e(130,"label",41),t(131," Large "),i()()(),e(132,"div",18)(133,"pre",19)(134,"code",19),t(135,`<div class="form-check">
<input class="form-check-input" type="checkbox" value="" id="checkebox-sm" checked="">
<label class="form-check-label" for="checkebox-sm">
Default
</label>
</div>
<div class="form-check form-check-md d-flex align-items-center">
<input class="form-check-input" type="checkbox" value="" id="checkebox-md" checked="">
<label class="form-check-label" for="checkebox-md">
Medium
</label>
</div>
<div class="form-check form-check-lg d-flex align-items-center">
<input class="form-check-input" type="checkbox" value="" id="checkebox-lg" checked="">
<label class="form-check-label" for="checkebox-lg">
Large
</label>
</div>`),i()()()()(),e(136,"div",32)(137,"div",2),c(138,"div",3)(139,"div",4)(140,"div",5)(141,"div",6),e(142,"div",7)(143,"div",8),t(144," Radio Sizes "),i(),e(145,"div",9)(146,"button",10),t(147,"Show Code"),c(148,"i",11),i()()(),e(149,"div",33)(150,"div",13),c(151,"input",42),e(152,"label",43),t(153," default "),i()(),e(154,"div",44),c(155,"input",45),e(156,"label",46),t(157," Medium "),i()(),e(158,"div",47),c(159,"input",48),e(160,"label",49),t(161," Large "),i()()(),e(162,"div",18)(163,"pre",19)(164,"code",19),t(165,`<div class="form-check">
<input class="form-check-input" type="radio" name="Radio" id="Radio-sm">
<label class="form-check-label" for="Radio-sm">
default
</label>
</div>
<div class="form-check form-check-md">
<input class="form-check-input" type="radio" name="Radio" id="Radio-md">
<label class="form-check-label" for="Radio-md">
Medium
</label>
</div>
<div class="form-check form-check-lg">
<input class="form-check-input" type="radio" name="Radio" id="Radio-lg" checked="">
<label class="form-check-label" for="Radio-lg">
Large
</label>
</div>`),i()()()()(),e(166,"div",32)(167,"div",2),c(168,"div",3)(169,"div",4)(170,"div",5)(171,"div",6),e(172,"div",7)(173,"div",8),t(174," Switch Sizes "),i(),e(175,"div",9)(176,"button",10),t(177,"Show Code"),c(178,"i",11),i()()(),e(179,"div",50)(180,"div",51),c(181,"input",52),e(182,"label",53),t(183,"Default"),i()(),e(184,"div",54),c(185,"input",55),e(186,"label",56),t(187,"Medium"),i()(),e(188,"div",57),c(189,"input",58),e(190,"label",59),t(191,"Large"),i()()(),e(192,"div",18)(193,"pre",19)(194,"code",19),t(195,`<div class="form-check form-switch">
<input class="form-check-input" type="checkbox" role="switch"
id="switch-sm">
<label class="form-check-label" for="switch-sm">Default</label>
</div>
<div class="form-check form-check-md form-switch">
<input class="form-check-input" type="checkbox" role="switch"
id="switch-md">
<label class="form-check-label" for="switch-md">Medium</label>
</div>
<div class="form-check form-check-lg form-switch">
<input class="form-check-input" type="checkbox" role="switch"
id="switch-lg">
<label class="form-check-label" for="switch-lg">Large</label>
</div>`),i()()()()()(),e(196,"div",0)(197,"div",60)(198,"div",2),c(199,"div",3)(200,"div",4)(201,"div",5)(202,"div",6),e(203,"div",7)(204,"div",8),t(205," Default (stacked) "),i(),e(206,"div",9)(207,"button",10),t(208,"Show Code"),c(209,"i",11),i()()(),e(210,"div",12)(211,"div",13),c(212,"input",61),e(213,"label",62),t(214," Default checkbox "),i()(),e(215,"div",13),c(216,"input",63),e(217,"label",64),t(218," Disabled checkbox "),i()(),e(219,"div",13),c(220,"input",65),e(221,"label",66),t(222," Default radio "),i()(),e(223,"div",67),c(224,"input",68),e(225,"label",69),t(226," Disabled radio "),i()()(),e(227,"div",18)(228,"pre",19)(229,"code",19),t(230,`<div class="form-check">
<input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
<label class="form-check-label" for="defaultCheck1">
Default checkbox
</label>
</div>
<div class="form-check">
<input class="form-check-input" type="checkbox" value="" id="defaultCheck2"
disabled="">
<label class="form-check-label" for="defaultCheck2">
Disabled checkbox
</label>
</div>
<div class="form-check">
<input class="form-check-input" type="radio" name="exampleRadios"
id="exampleRadios1" value="option1" checked="">
<label class="form-check-label" for="exampleRadios1">
Default radio
</label>
</div>
<div class="form-check mb-0">
<input class="form-check-input" type="radio" name="exampleRadios"
id="exampleRadios3" value="option3" disabled="">
<label class="form-check-label" for="exampleRadios3">
Disabled radio
</label>
</div>`),i()()()()(),e(231,"div",60)(232,"div",2),c(233,"div",3)(234,"div",4)(235,"div",5)(236,"div",6),e(237,"div",7)(238,"div",8),t(239," Switches "),i(),e(240,"div",9)(241,"button",10),t(242,"Show Code"),c(243,"i",11),i()()(),e(244,"div",12)(245,"div",51),c(246,"input",70),e(247,"label",71),t(248,"Default switch checkbox input"),i()(),e(249,"div",51),c(250,"input",72),e(251,"label",73),t(252,"Checked switch checkbox input"),i()(),e(253,"div",51),c(254,"input",74),e(255,"label",75),t(256,"Disabled switch checkbox input"),i()(),e(257,"div",76),c(258,"input",77),e(259,"label",78),t(260,"Disabled checked switch checkbox input"),i()()(),e(261,"div",18)(262,"pre",19)(263,"code",19),t(264,`<div class="form-check form-switch">
<input class="form-check-input" type="checkbox" role="switch"
id="flexSwitchCheckDefault">
<label class="form-check-label" for="flexSwitchCheckDefault">Default switch
checkbox input</label>
</div>
<div class="form-check form-switch">
<input class="form-check-input" type="checkbox" role="switch"
id="flexSwitchCheckChecked" checked="">
<label class="form-check-label" for="flexSwitchCheckChecked">Checked switch
checkbox input</label>
</div>
<div class="form-check form-switch">
<input class="form-check-input" type="checkbox" role="switch"
id="flexSwitchCheckDisabled" disabled="">
<label class="form-check-label" for="flexSwitchCheckDisabled">Disabled
switch
checkbox input</label>
</div>
<div class="form-check form-switch mb-0">
<input class="form-check-input" type="checkbox" role="switch"
id="flexSwitchCheckCheckedDisabled" checked="" disabled="">
<label class="form-check-label" for="flexSwitchCheckCheckedDisabled">Disabled
checked switch checkbox input</label>
</div>`),i()()()()()(),e(265,"div",0)(266,"div",79)(267,"div",2),c(268,"div",3)(269,"div",4)(270,"div",5)(271,"div",6),e(272,"div",7)(273,"div",8),t(274," Inline "),i(),e(275,"div",9)(276,"button",10),t(277,"Show Code"),c(278,"i",11),i()()(),e(279,"div",12)(280,"div",80),c(281,"input",81),e(282,"label",82),t(283,"1"),i()(),e(284,"div",80),c(285,"input",83),e(286,"label",84),t(287,"2"),i()(),e(288,"div",80),c(289,"input",85),e(290,"label",86),t(291,"3 (disabled)"),i()(),e(292,"div",80),c(293,"input",87),e(294,"label",88),t(295,"1"),i()(),e(296,"div",80),c(297,"input",89),e(298,"label",90),t(299,"2"),i()(),e(300,"div",80),c(301,"input",91),e(302,"label",92),t(303,"3 (disabled)"),i()()(),e(304,"div",18)(305,"pre",19)(306,"code",19),t(307,`<div class="form-check form-check-inline">
<input class="form-check-input" type="checkbox" id="inlineCheckbox1"
value="option1">
<label class="form-check-label" for="inlineCheckbox1">1</label>
</div>
<div class="form-check form-check-inline">
<input class="form-check-input" type="checkbox" id="inlineCheckbox2"
value="option2">
<label class="form-check-label" for="inlineCheckbox2">2</label>
</div>
<div class="form-check form-check-inline">
<input class="form-check-input" type="checkbox" id="inlineCheckbox3"
value="option3" disabled>
<label class="form-check-label" for="inlineCheckbox3">3 (disabled)</label>
</div>
<div class="form-check form-check-inline">
<input class="form-check-input" type="radio" name="inlineRadioOptions"
id="inlineRadio1" value="option1">
<label class="form-check-label" for="inlineRadio1">1</label>
</div>
<div class="form-check form-check-inline">
<input class="form-check-input" type="radio" name="inlineRadioOptions"
id="inlineRadio2" value="option2">
<label class="form-check-label" for="inlineRadio2">2</label>
</div>
<div class="form-check form-check-inline">
<input class="form-check-input" type="radio" name="inlineRadioOptions"
id="inlineRadio3" value="option3" disabled>
<label class="form-check-label" for="inlineRadio3">3 (disabled)</label>
</div>`),i()()()(),e(308,"div",2),c(309,"div",3)(310,"div",4)(311,"div",5)(312,"div",6),e(313,"div",7)(314,"div",8),t(315," Without labels "),i(),e(316,"div",9)(317,"button",10),t(318,"Show Code"),c(319,"i",11),i()()(),e(320,"div",12)(321,"span",93),c(322,"input",94),i(),e(323,"span"),c(324,"input",95),i()(),e(325,"div",18)(326,"pre",19)(327,"code",19),t(328,`<span class="me-3">
<input class="form-check-input" type="checkbox" id="checkboxNoLabel" value=""
aria-label="...">
</span>
<span>
<input class="form-check-input" type="radio" name="radioNoLabel"
id="radioNoLabel1" value="" aria-label="...">
</span>`),i()()()()(),e(329,"div",96)(330,"div",2),c(331,"div",3)(332,"div",4)(333,"div",5)(334,"div",6),e(335,"div",7)(336,"div",8),t(337," Reverse "),i(),e(338,"div",9)(339,"button",10),t(340,"Show Code"),c(341,"i",11),i()()(),e(342,"div",12)(343,"div",97),c(344,"input",98),e(345,"label",99),t(346," Reverse checkbox "),i()(),e(347,"div",97),c(348,"input",100),e(349,"label",101),t(350," Disabled reverse checkbox "),i()(),e(351,"div",102),c(352,"input",103),e(353,"label",104),t(354,"Reverse switch checkbox input"),i()()(),e(355,"div",18)(356,"pre",19)(357,"code",19),t(358,`<div class="form-check form-check-reverse mb-3">
<input class="form-check-input" type="checkbox" value=""
id="reverseCheck1">
<label class="form-check-label" for="reverseCheck1">
Reverse checkbox
</label>
</div>
<div class="form-check form-check-reverse mb-3">
<input class="form-check-input" type="checkbox" value=""
id="reverseCheck2" disabled="">
<label class="form-check-label" for="reverseCheck2">
Disabled reverse checkbox
</label>
</div>

<div class="form-check form-switch form-check-reverse">
<input class="form-check-input" type="checkbox"
id="flexSwitchCheckReverse">
<label class="form-check-label" for="flexSwitchCheckReverse">Reverse
switch
checkbox input</label>
</div>`),i()()()()(),e(359,"div",105)(360,"div",2),c(361,"div",3)(362,"div",4)(363,"div",5)(364,"div",6),e(365,"div",7)(366,"div",8),t(367," Outlined styles "),i(),e(368,"div",9)(369,"button",10),t(370,"Show Code"),c(371,"i",11),i()()(),e(372,"div",12),c(373,"input",106),e(374,"label",107),t(375,"Single toggle"),i(),c(376,"br")(377,"input",108),e(378,"label",109),t(379,"Checked"),i(),c(380,"br")(381,"input",110),e(382,"label",111),t(383,"Checked success radio"),i(),c(384,"input",112),e(385,"label",113),t(386,"Danger radio"),i()(),e(387,"div",18)(388,"pre",19)(389,"code",19),t(390,`<input type="checkbox" class="btn-check" id="btn-check-outlined">
<label class="btn btn-outline-primary mb-3" for="btn-check-outlined">Single
toggle</label><br>

<input type="checkbox" class="btn-check" id="btn-check-2-outlined" checked
>
<label class="btn btn-outline-secondary mb-3"
for="btn-check-2-outlined">Checked</label><br>

<input type="radio" class="btn-check" name="options-outlined" id="success-outlined"
checked>
<label class="btn btn-outline-success m-1" for="success-outlined">Checked success
radio</label>

<input type="radio" class="btn-check" name="options-outlined" id="danger-outlined"
>
<label class="btn btn-outline-danger m-1" for="danger-outlined">Danger radio</label>`),i()()()()()(),e(391,"div",0)(392,"div",114)(393,"div",2),c(394,"div",3)(395,"div",4)(396,"div",5)(397,"div",6),e(398,"div",7)(399,"div",8),t(400," Radio toggle buttons "),i(),e(401,"div",9)(402,"button",10),t(403,"Show Code"),c(404,"i",11),i()()(),e(405,"div",12),c(406,"input",115),e(407,"label",116),t(408,"Checked"),i(),c(409,"input",117),e(410,"label",118),t(411,"Radio"),i(),c(412,"input",119),e(413,"label",120),t(414,"Disabled"),i(),c(415,"input",121),e(416,"label",122),t(417,"Radio"),i()(),e(418,"div",18)(419,"pre",19)(420,"code",19),t(421,`<input type="radio" class="btn-check" name="options" id="option1"
checked="">
<label class="btn btn-primary m-1" for="option1">Checked</label>

<input type="radio" class="btn-check" name="options" id="option2"
>
<label class="btn btn-primary m-1" for="option2">Radio</label>

<input type="radio" class="btn-check" name="options" id="option3"
disabled="">
<label class="btn btn-primary m-1" for="option3">Disabled</label>

<input type="radio" class="btn-check" name="options" id="option4"
>
<label class="btn btn-primary m-1" for="option4">Radio</label>`),i()()()()(),e(422,"div",114)(423,"div",2),c(424,"div",3)(425,"div",4)(426,"div",5)(427,"div",6),e(428,"div",7)(429,"div",8),t(430," Checkbox toggle buttons "),i(),e(431,"div",9)(432,"button",10),t(433,"Show Code"),c(434,"i",11),i()()(),e(435,"div",12),c(436,"input",123),e(437,"label",124),t(438,"Single toggle"),i(),c(439,"input",125),e(440,"label",126),t(441,"Checked"),i(),c(442,"input",127),e(443,"label",128),t(444,"Disabled"),i()(),e(445,"div",18)(446,"pre",19)(447,"code",19),t(448,`<input type="checkbox" class="btn-check" id="btn-check">
<label class="btn btn-primary m-1" for="btn-check">Single toggle</label>
<input type="checkbox" class="btn-check" id="btn-check-2" checked
>
<label class="btn btn-primary m-1" for="btn-check-2">Checked</label>
<input type="checkbox" class="btn-check" id="btn-check-3"
disabled>
<label class="btn btn-primary m-1" for="btn-check-3">Disabled</label>`),i()()()()()(),e(449,"div",129)(450,"div",130)(451,"div",2),c(452,"div",3)(453,"div",4)(454,"div",5)(455,"div",6),e(456,"div",7)(457,"div",8),t(458," Colored Checkboxes "),i(),e(459,"div",9)(460,"button",10),t(461,"Show Code"),c(462,"i",11),i()()(),e(463,"div",12)(464,"div",131),c(465,"input",132),e(466,"label",133),t(467," Primary "),i()(),e(468,"div",131),c(469,"input",134),e(470,"label",135),t(471," Secondary "),i()(),e(472,"div",131),c(473,"input",136),e(474,"label",137),t(475," Warning "),i()(),e(476,"div",131),c(477,"input",138),e(478,"label",139),t(479," Info "),i()(),e(480,"div",131),c(481,"input",140),e(482,"label",141),t(483," Success "),i()(),e(484,"div",131),c(485,"input",142),e(486,"label",143),t(487," Danger "),i()(),e(488,"div",67),c(489,"input",144),e(490,"label",145),t(491," Dark "),i()()(),e(492,"div",18)(493,"pre",19)(494,"code",19),t(495,`<div class="form-check mb-2">
<input class="form-check-input" type="checkbox" value="" id="primaryChecked" checked="">
<label class="form-check-label" for="primaryChecked">
Primary
</label>
</div>
<div class="form-check mb-2">
<input class="form-check-input form-checked-secondary" type="checkbox" value="" id="secondaryChecked" checked="">
<label class="form-check-label" for="secondaryChecked">
Secondary
</label>
</div>
<div class="form-check mb-2">
<input class="form-check-input form-checked-warning" type="checkbox" value="" id="warningChecked" checked="">
<label class="form-check-label" for="warningChecked">
Warning
</label>
</div>
<div class="form-check mb-2">
<input class="form-check-input form-checked-info" type="checkbox" value="" id="infoChecked" checked="">
<label class="form-check-label" for="infoChecked">
Info
</label>
</div>
<div class="form-check mb-2">
<input class="form-check-input form-checked-success" type="checkbox" value="" id="successChecked" checked="">
<label class="form-check-label" for="successChecked">
Success
</label>
</div>
<div class="form-check mb-2">
<input class="form-check-input form-checked-danger" type="checkbox" value="" id="dangerChecked" checked="">
<label class="form-check-label" for="dangerChecked">
Danger
</label>
</div>
<div class="form-check mb-0">
<input class="form-check-input form-checked-dark" type="checkbox" value="" id="darkChecked" checked="">
<label class="form-check-label" for="darkChecked">
Dark
</label>
</div>`),i()()()()(),e(496,"div",130)(497,"div",2),c(498,"div",3)(499,"div",4)(500,"div",5)(501,"div",6),e(502,"div",7)(503,"div",8),t(504," Outline Checkboxes "),i(),e(505,"div",9)(506,"button",10),t(507,"Show Code"),c(508,"i",11),i()()(),e(509,"div",12)(510,"div",131),c(511,"input",146),e(512,"label",147),t(513," Primary "),i()(),e(514,"div",131),c(515,"input",148),e(516,"label",149),t(517," Secondary "),i()(),e(518,"div",131),c(519,"input",150),e(520,"label",151),t(521," Warning "),i()(),e(522,"div",131),c(523,"input",152),e(524,"label",153),t(525," Info "),i()(),e(526,"div",131),c(527,"input",154),e(528,"label",155),t(529," Success "),i()(),e(530,"div",131),c(531,"input",156),e(532,"label",157),t(533," Danger "),i()(),e(534,"div",67),c(535,"input",158),e(536,"label",159),t(537," Dark "),i()()(),e(538,"div",18)(539,"pre",19)(540,"code",19),t(541,`<div class="form-check mb-2">
<input class="form-check-input form-checked-outline" type="checkbox" value="" id="primaryoutlineChecked" checked="">
<label class="form-check-label" for="primaryoutlineChecked">
Primary
</label>
</div>
<div class="form-check mb-2">
<input class="form-check-input form-checked-outline form-checked-secondary" type="checkbox" value="" id="secondaryoutlineChecked" checked="">
<label class="form-check-label" for="secondaryoutlineChecked">
Secondary
</label>
</div>
<div class="form-check mb-2">
<input class="form-check-input form-checked-outline form-checked-warning" type="checkbox" value="" id="warningoutlineChecked" checked="">
<label class="form-check-label" for="warningoutlineChecked">
Warning
</label>
</div>
<div class="form-check mb-2">
<input class="form-check-input form-checked-outline form-checked-info" type="checkbox" value="" id="infooutlineChecked" checked="">
<label class="form-check-label" for="infooutlineChecked">
Info
</label>
</div>
<div class="form-check mb-2">
<input class="form-check-input form-checked-outline form-checked-success" type="checkbox" value="" id="successoutlineChecked" checked="">
<label class="form-check-label" for="successoutlineChecked">
Success
</label>
</div>
<div class="form-check mb-2">
<input class="form-check-input form-checked-outline form-checked-danger" type="checkbox" value="" id="dangeroutlineChecked" checked="">
<label class="form-check-label" for="dangeroutlineChecked">
Danger
</label>
</div>
<div class="form-check mb-0">
<input class="form-check-input form-checked-outline form-checked-dark" type="checkbox" value="" id="darkoutlineChecked" checked="">
<label class="form-check-label" for="darkoutlineChecked">
Dark
</label>
</div>`),i()()()()(),e(542,"div",160)(543,"div",2),c(544,"div",3)(545,"div",4)(546,"div",5)(547,"div",6),e(548,"div",7)(549,"div",8),t(550," Colored Radios "),i(),e(551,"div",9)(552,"button",10),t(553,"Show Code"),c(554,"i",11),i()()(),e(555,"div",12)(556,"div",131),c(557,"input",161),e(558,"label",162),t(559," Primary "),i()(),e(560,"div",131),c(561,"input",163),e(562,"label",164),t(563," Secondary "),i()(),e(564,"div",131),c(565,"input",165),e(566,"label",166),t(567," Warning "),i()(),e(568,"div",131),c(569,"input",167),e(570,"label",168),t(571," Info "),i()(),e(572,"div",131),c(573,"input",169),e(574,"label",170),t(575," Success "),i()(),e(576,"div",131),c(577,"input",171),e(578,"label",172),t(579," Danger "),i()(),e(580,"div",67),c(581,"input",173),e(582,"label",174),t(583," Dark "),i()()(),e(584,"div",18)(585,"pre",19)(586,"code",19),t(587,`<div class="form-check mb-2">
<input class="form-check-input" type="radio" name="primaryRadio" id="primaryRadio" checked="">
<label class="form-check-label" for="primaryRadio">
Primary
</label>
</div>
<div class="form-check mb-2">
<input class="form-check-input form-checked-secondary" type="radio" name="secondaryRadio" id="secondaryRadio" checked="">
<label class="form-check-label" for="secondaryRadio">
Secondary
</label>
</div>
<div class="form-check mb-2">
<input class="form-check-input form-checked-warning" type="radio" name="warningRadio" id="warningRadio" checked="">
<label class="form-check-label" for="warningRadio">
Warning
</label>
</div>
<div class="form-check mb-2">
<input class="form-check-input form-checked-info" type="radio" name="InfoRadio" id="InfoRadio" checked="">
<label class="form-check-label" for="InfoRadio">
Info
</label>
</div>
<div class="form-check mb-2">
<input class="form-check-input form-checked-success" type="radio" name="successRadio" id="successRadio" checked="">
<label class="form-check-label" for="successRadio">
Success
</label>
</div>
<div class="form-check mb-2">
<input class="form-check-input form-checked-danger" type="radio" name="dangerRadio" id="dangerRadio" checked="">
<label class="form-check-label" for="dangerRadio">
Danger
</label>
</div>
<div class="form-check mb-0">
<input class="form-check-input form-checked-dark" type="radio" name="darkRadio" id="darkRadio" checked="">
<label class="form-check-label" for="darkRadio">
Dark
</label>
</div>`),i()()()()(),e(588,"div",175)(589,"div",2),c(590,"div",3)(591,"div",4)(592,"div",5)(593,"div",6),e(594,"div",7)(595,"div",8),t(596," Outline Radios "),i(),e(597,"div",9)(598,"button",10),t(599,"Show Code"),c(600,"i",11),i()()(),e(601,"div",12)(602,"div",131),c(603,"input",176),e(604,"label",177),t(605," Primary "),i()(),e(606,"div",131),c(607,"input",178),e(608,"label",179),t(609," Secondary "),i()(),e(610,"div",131),c(611,"input",180),e(612,"label",181),t(613," Warning "),i()(),e(614,"div",131),c(615,"input",182),e(616,"label",183),t(617," Info "),i()(),e(618,"div",131),c(619,"input",184),e(620,"label",185),t(621," Success "),i()(),e(622,"div",131),c(623,"input",186),e(624,"label",187),t(625," Danger "),i()(),e(626,"div",67),c(627,"input",188),e(628,"label",189),t(629," Dark "),i()()(),e(630,"div",18)(631,"pre",19)(632,"code",19),t(633,`<div class="form-check mb-2">
<input class="form-check-input form-checked-outline" type="radio" name="primaryoutlineRadio" id="primaryoutlineRadio" checked="">
<label class="form-check-label" for="primaryoutlineRadio">
Primary
</label>
</div>
<div class="form-check mb-2">
<input class="form-check-input form-checked-outline form-checked-secondary" type="radio" name="secondaryoutlineRadio" id="secondaryoutlineRadio" checked="">
<label class="form-check-label" for="secondaryoutlineRadio">
Secondary
</label>
</div>
<div class="form-check mb-2">
<input class="form-check-input form-checked-outline form-checked-warning" type="radio" name="warningoutlineRadio" id="warningoutlineRadio" checked="">
<label class="form-check-label" for="warningoutlineRadio">
Warning
</label>
</div>
<div class="form-check mb-2">
<input class="form-check-input form-checked-outline form-checked-info" type="radio" name="InfooutlineRadio" id="InfooutlineRadio" checked="">
<label class="form-check-label" for="InfooutlineRadio">
Info
</label>
</div>
<div class="form-check mb-2">
<input class="form-check-input form-checked-outline form-checked-success" type="radio" name="successoutlineRadio" id="successoutlineRadio" checked="">
<label class="form-check-label" for="successoutlineRadio">
Success
</label>
</div>
<div class="form-check mb-2">
<input class="form-check-input form-checked-outline form-checked-danger" type="radio" name="dangeroutlineRadio" id="dangeroutlineRadio" checked="">
<label class="form-check-label" for="dangeroutlineRadio">
Danger
</label>
</div>
<div class="form-check mb-0">
<input class="form-check-input form-checked-outline form-checked-dark" type="radio" name="darkoutlineRadio" id="darkoutlineRadio" checked="">
<label class="form-check-label" for="darkoutlineRadio">
Dark
</label>
</div>`),i()()()()(),e(634,"div",175)(635,"div",2),c(636,"div",3)(637,"div",4)(638,"div",5)(639,"div",6),e(640,"div",7)(641,"div",8),t(642," Switches Colors "),i(),e(643,"div",9)(644,"button",10),t(645,"Show Code"),c(646,"i",11),i()()(),e(647,"div",12)(648,"div",190),c(649,"input",191),e(650,"label",192),t(651,"Primary"),i()(),e(652,"div",190),c(653,"input",193),e(654,"label",194),t(655,"Secondary"),i()(),e(656,"div",190),c(657,"input",195),e(658,"label",196),t(659,"Warning"),i()(),e(660,"div",190),c(661,"input",197),e(662,"label",198),t(663,"Info"),i()(),e(664,"div",190),c(665,"input",199),e(666,"label",200),t(667,"Success"),i()(),e(668,"div",190),c(669,"input",201),e(670,"label",202),t(671,"Danger"),i()(),e(672,"div",76),c(673,"input",203),e(674,"label",204),t(675,"Dark"),i()()(),e(676,"div",18)(677,"pre",19)(678,"code",19),t(679,`<div class="form-check form-switch mb-2">
<input class="form-check-input" type="checkbox" role="switch"
id="switch-primary" checked="">
<label class="form-check-label" for="switch-primary">Primary</label>
</div>
<div class="form-check form-switch mb-2">
<input class="form-check-input form-checked-secondary" type="checkbox" role="switch"
id="switch-secondary" checked="">
<label class="form-check-label" for="switch-secondary">Secondary</label>
</div>
<div class="form-check form-switch mb-2">
<input class="form-check-input form-checked-warning" type="checkbox" role="switch"
id="switch-warning" checked="">
<label class="form-check-label" for="switch-warning">Warning</label>
</div>
<div class="form-check form-switch mb-2">
<input class="form-check-input form-checked-info" type="checkbox" role="switch"
id="switch-info" checked="">
<label class="form-check-label" for="switch-info">Info</label>
</div>
<div class="form-check form-switch mb-2">
<input class="form-check-input form-checked-success" type="checkbox" role="switch"
id="switch-success" checked="">
<label class="form-check-label" for="switch-success">Success</label>
</div>
<div class="form-check form-switch mb-2">
<input class="form-check-input form-checked-danger" type="checkbox" role="switch"
id="switch-danger" checked="">
<label class="form-check-label" for="switch-danger">Danger</label>
</div>
<div class="form-check form-switch mb-0">
<input class="form-check-input form-checked-dark" type="checkbox" role="switch"
id="switch-dark" checked="">
<label class="form-check-label" for="switch-dark">Dark</label>
</div>`),i()()()()()(),e(680,"div",0)(681,"div",205)(682,"div",2),c(683,"div",3)(684,"div",4)(685,"div",5)(686,"div",6),e(687,"div",7)(688,"div",8),t(689," Toggle Switches Style-1 "),i(),e(690,"div",9)(691,"button",10),t(692,"Show Code"),c(693,"i",11),i()()(),e(694,"div",12)(695,"div",206),v(696,M,3,1,"div",207),i()(),e(697,"div",18)(698,"pre",19)(699,"code",19),t(700,`<div class="row gy-1">
<div class="col-xl-4">
<div class="toggle on mb-3">
<span></span>
</div>
</div>
<div class="col-xl-4">
<div class="toggle toggle-secondary on mb-3">
<span></span>
</div>
</div>
<div class="col-xl-4">
<div class="toggle toggle-warning on mb-3">
<span></span>
</div>
</div>
<div class="col-xl-4">
<div class="toggle toggle-info on mb-3">
<span></span>
</div>
</div>
<div class="col-xl-4">
<div class="toggle toggle-success on mb-3">
<span></span>
</div>
</div>
<div class="col-xl-4">
<div class="toggle toggle-danger on mb-3">
<span></span>
</div>
</div>
<div class="col-xl-4">
<div class="toggle toggle-light on mb-3">
<span></span>
</div>
</div>
<div class="col-xl-4">
<div class="toggle toggle-dark on mb-3">
<span></span>
</div>
</div>
</div>`),i()()()()(),e(701,"div",205)(702,"div",2),c(703,"div",3)(704,"div",4)(705,"div",5)(706,"div",6),e(707,"div",7)(708,"div",8),t(709," Toggle Switches Style-2 "),i(),e(710,"div",9)(711,"button",10),t(712,"Show Code"),c(713,"i",11),i()()(),e(714,"div",12)(715,"div",206)(716,"div",208)(717,"div",209),c(718,"input",210)(719,"label",211),e(720,"span",212),t(721,"Primary"),i()()(),e(722,"div",208)(723,"div",209),c(724,"input",213)(725,"label",214),e(726,"span",212),t(727,"Secondary"),i()()(),e(728,"div",208)(729,"div",209),c(730,"input",215)(731,"label",216),e(732,"span",212),t(733,"Warning"),i()()(),e(734,"div",208)(735,"div",209),c(736,"input",217)(737,"label",218),e(738,"span",212),t(739,"Info"),i()()(),e(740,"div",208)(741,"div",209),c(742,"input",219)(743,"label",220),e(744,"span",212),t(745,"Success"),i()()(),e(746,"div",208)(747,"div",209),c(748,"input",221)(749,"label",222),e(750,"span",212),t(751,"Danger"),i()()(),e(752,"div",208)(753,"div",209),c(754,"input",223)(755,"label",224),e(756,"span",212),t(757,"Light"),i()()(),e(758,"div",208)(759,"div",209),c(760,"input",225)(761,"label",226),e(762,"span",212),t(763,"Dark"),i()()()()(),e(764,"div",18)(765,"pre",19)(766,"code",19),t(767,`<div class="row gy-1">
<div class="col-xl-4 px-0">
<div class="custom-toggle-switch d-flex align-items-center mb-4">
<input id="toggleswitchPrimary" name="toggleswitch001" type="checkbox" checked="">
<label for="toggleswitchPrimary" class="label-primary"></label><span class="ms-3">Primary</span>
</div>
</div>
<div class="col-xl-4 px-0">
<div class="custom-toggle-switch d-flex align-items-center mb-4">
<input id="toggleswitchSecondary" name="toggleswitch001" type="checkbox" checked="">
<label for="toggleswitchSecondary" class="label-secondary"></label><span class="ms-3">Secondary</span>
</div>
</div>
<div class="col-xl-4 px-0">
<div class="custom-toggle-switch d-flex align-items-center mb-4">
<input id="toggleswitchWarning" name="toggleswitch001" type="checkbox" checked="">
<label for="toggleswitchWarning" class="label-warning"></label><span class="ms-3">Warning</span>
</div>
</div>
<div class="col-xl-4 px-0">
<div class="custom-toggle-switch d-flex align-items-center mb-4">
<input id="toggleswitchInfo" name="toggleswitch001" type="checkbox" checked="">
<label for="toggleswitchInfo" class="label-info"></label><span class="ms-3">Info</span>
</div>
</div>
<div class="col-xl-4 px-0">
<div class="custom-toggle-switch d-flex align-items-center mb-4">
<input id="toggleswitchSuccess" name="toggleswitch001" type="checkbox" checked="">
<label for="toggleswitchSuccess" class="label-success"></label><span class="ms-3">Success</span>
</div>
</div>
<div class="col-xl-4 px-0">
<div class="custom-toggle-switch d-flex align-items-center mb-4">
<input id="toggleswitchDanger" name="toggleswitch001" type="checkbox" checked="">
<label for="toggleswitchDanger" class="label-danger"></label><span class="ms-3">Danger</span>
</div>
</div>
<div class="col-xl-4 px-0">
<div class="custom-toggle-switch d-flex align-items-center mb-4">
<input id="toggleswitchLight" name="toggleswitch001" type="checkbox" checked="">
<label for="toggleswitchLight" class="label-light"></label><span class="ms-3">Light</span>
</div>
</div>
<div class="col-xl-4 px-0">
<div class="custom-toggle-switch d-flex align-items-center mb-4">
<input id="toggleswitchDark" name="toggleswitch001" type="checkbox" checked="">
<label for="toggleswitchDark" class="label-dark"></label><span class="ms-3">Dark</span>
</div>
</div>
</div>`),i()()()()()(),e(768,"div",0)(769,"div",114)(770,"div",2),c(771,"div",3)(772,"div",4)(773,"div",5)(774,"div",6),e(775,"div",7)(776,"div",8),t(777," Toggle Switch-1 Sizes "),i(),e(778,"div",9)(779,"button",10),t(780,"Show Code"),c(781,"i",11),i()()(),e(782,"div",12),S(783,O,8,7,"div",227,x),i(),e(785,"div",18)(786,"pre",19)(787,"code",19),t(788,`<div class="d-flex align-items-center flex-wrap mb-3">
<div class=""> <p class="text-muted m-0">Small size toggle switch <code>toggle-sm</code></p></div>
<div class="toggle toggle-sm on mb-0">
<span></span>
</div>
</div>
<div class="d-flex align-items-center flex-wrap mb-3">
<div class=""> <p class="text-muted m-0">Default toggle switch <code></code></p></div>
<div class="toggle toggle-secondary on mb-0">
<span></span>
</div>
</div>
<div class="d-flex align-items-center flex-wrap">
<div class=""> <p class="text-muted m-0">Large size toggle switch <code>toggle-lg</code></p></div>
<div class="toggle toggle-lg toggle-success on mb-0">
<span></span>
</div>
</div>`),i()()()()(),e(789,"div",114)(790,"div",2),c(791,"div",3)(792,"div",4)(793,"div",5)(794,"div",6),e(795,"div",7)(796,"div",8),t(797," Toggle Switch-2 Sizes "),i(),e(798,"div",9)(799,"button",10),t(800,"Show Code"),c(801,"i",11),i()()(),e(802,"div",12)(803,"div",228)(804,"div",229)(805,"p",230),t(806,"Small size toggle switch "),e(807,"code"),t(808,"toggle-sm"),i()()(),e(809,"div",231),c(810,"input",232)(811,"label",233),i()(),e(812,"div",228)(813,"div",229)(814,"p",230),t(815,"Default toggle switch"),i()(),e(816,"div",234),c(817,"input",235)(818,"label",236),i()(),e(819,"div",237)(820,"div",238)(821,"p",230),t(822,"Large size toggle switch "),e(823,"code"),t(824,"toggle-lg"),i()()(),e(825,"div",239),c(826,"input",240)(827,"label",241),i()()(),e(828,"div",18)(829,"pre",19)(830,"code",19),t(831,`<div class="d-flex align-items-center flex-wrap mb-4">
<div class=""><p class="text-muted m-0">Small size toggle switch <code>toggle-sm</code></p></div>
<div class="custom-toggle-switch toggle-sm ms-2">
<input id="size-sm" name="toggleswitchsize" type="checkbox" checked="">
<label for="size-sm" class="label-primary"></label>
</div>
</div>
<div class="d-flex align-items-center flex-wrap mb-4">
<div class=""><p class="text-muted m-0">Default toggle switch</p></div>
<div class="custom-toggle-switch ms-2">
<input id="size-default" name="toggleswitchsize" type="checkbox" checked="">
<label for="size-default" class="label-secondary mb-1"></label>
</div>
</div>
<div class="d-flex align-items-center flex-wrap">
<div class=""><p class="text-muted m-0">Large size toggle switch <code>toggle-lg</code></p></div>
<div class="custom-toggle-switch toggle-lg ms-2">
<input id="size-lg" name="toggleswitchsize" type="checkbox" checked="">
<label for="size-lg" class="label-success mb-2"></label>
</div>
</div>`),i()()()()()()),a&2&&(o(696),m("ngForOf",d.toggles),o(87),y(d.toggleSwitches))},dependencies:[P,W,z,_,L,I,R,D]})}}return n})();export{A as ChecksradiosComponent};
