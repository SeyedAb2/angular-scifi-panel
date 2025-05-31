import{d as B,e as R,f as Y}from"./chunk-RX6WPD4V.js";import{o as A,p as Z}from"./chunk-IIOERLCL.js";import"./chunk-CUBMPEPT.js";import{A as M,B as z,c as E,d as _,f as d,h as q,i as T,k as F,o as V,s as N,t as P,u as U,v as D,w,x as L,y as O,z as G}from"./chunk-G5XDIBR2.js";import{C as y,q as g}from"./chunk-M2GAKB2R.js";import{Bb as l,Cb as k,Ga as h,Kc as t,Sc as x,Uc as c,Vb as m,Xb as v,cc as r,hc as i,ic as e,jc as o,wc as f,yc as b}from"./chunk-DLPH24CR.js";import"./chunk-X2P3SVT6.js";import"./chunk-2EBTC7QX.js";import"./chunk-FFXK657A.js";var u=a=>({"is-invalid":a});function j(a,s){a&1&&(i(0,"div",17)(1,"div"),t(2,"Looks good!"),e()())}function I(a,s){a&1&&(i(0,"div",18),t(1,"Firstname is required "),e())}function H(a,s){a&1&&(i(0,"div",18),t(1,"lastname is required "),e())}function J(a,s){a&1&&(i(0,"div",18),t(1,"username is required "),e())}function K(a,s){a&1&&(i(0,"div",18),t(1," Please provide a valid city."),e())}function Q(a,s){a&1&&(i(0,"div",18),t(1,"Please select a valid state...."),e())}function W(a,s){a&1&&(i(0,"div",18),t(1,"zip is required"),e())}function X(a,s){a&1&&(i(0,"div",18),t(1," Accept Terms is required "),e())}function $(a,s){a&1&&(i(0,"div",44),t(1," First Name is required. "),e())}function ee(a,s){a&1&&(i(0,"div",44),t(1," Last Name is required. "),e())}function ie(a,s){a&1&&(i(0,"div",44),t(1," User Name is required. "),e())}function te(a,s){a&1&&(i(0,"div",44),t(1," City Name is required. "),e())}function ne(a,s){a&1&&(i(0,"div",44),t(1," State Name is required. "),e())}function ae(a,s){a&1&&(i(0,"div",44),t(1," Zip is required. "),e())}function le(a,s){a&1&&(i(0,"div",44),t(1," City Name is required. "),e())}function oe(a,s){a&1&&(i(0,"div",62),t(1,"Firstname is required "),e())}function re(a,s){a&1&&(i(0,"div",62),t(1,"Firstname is required "),e())}function de(a,s){a&1&&(i(0,"div",62),t(1,"Firstname is required "),e())}function me(a,s){a&1&&(i(0,"div",62),t(1,"Firstname is required "),e())}function se(a,s){a&1&&(i(0,"div",62),t(1,"Firstname is required "),e())}function ve(a,s){a&1&&(i(0,"div",62),t(1,"Firstname is required "),e())}function ce(a,s){a&1&&(i(0,"div"),t(1,"Please enter a message in the textarea. "),e())}function ue(a,s){if(a&1&&(i(0,"div",18),m(1,ce,2,0,"div"),e()),a&2){let p=b();l(),r(1,p.f1.textarea.errors.required?1:-1)}}function pe(a,s){a&1&&(i(0,"div"),t(1,"Example invalid feedback text>"),e())}function fe(a,s){if(a&1&&(i(0,"div",18),m(1,pe,2,0,"div"),e()),a&2){let p=b();l(),r(1,p.f1.checkbox.errors.required?1:-1)}}function be(a,s){a&1&&(i(0,"div"),t(1,"Example invalid select feedback"),e())}function Ce(a,s){if(a&1&&(i(0,"div",18),m(1,be,2,0,"div"),e()),a&2){let p=b();l(),r(1,p.f1.select.errors.required?1:-1)}}function Se(a,s){a&1&&(i(0,"div"),t(1,"Example invalid form file feedback"),e())}function he(a,s){if(a&1&&(i(0,"div",18),m(1,Se,2,0,"div"),e()),a&2){let p=b();l(),r(1,p.f1.feedback.errors.required?1:-1)}}var Ve=(()=>{class a{constructor(p){this.formBuilder=p,this.submitted=!1,this.submitted1=!0,this.submitted3=!1}ngOnInit(){this.form=this.formBuilder.group({fullname:["",d.required],lastname:["",[d.required,d.minLength(6),d.maxLength(20)]],city:["",d.required],state:["",d.required],username:["",d.required],zip:["",d.required],acceptTerms:[!1,d.requiredTrue]}),this.form4=this.formBuilder.group({textarea:["",d.required],checkbox:["",d.required],radiostacked:["",d.required],select:["",d.required],feedback:["",d.required]}),this.form3=this.formBuilder.group({name:["",d.required],lname:["",[d.required,d.minLength(6),d.maxLength(20)]],cit:["",d.required],stat:["",d.required],uname:["",d.required],zip:["",d.required]}),this.form2=this.formBuilder.group({firstname:["",d.required],lastname:["",d.required],username:["",d.required],city:["",d.required],zip:["",d.required],checkbox:[!1,d.requiredTrue],state:["",d.required]})}get f(){return this.form.controls}OnSubmit(){this.submitted=!0,this.form.invalid}get f1(){return this.form4.controls}Submit(){this.submitted=!0,this.form4.invalid}get f3(){return this.form3.controls}Submit3(){this.submitted3=!0,console.log("one"),this.form3.invalid}Submit1(){this.form2.valid?console.log("Form submitted successfully!"):console.log("Form is invalid!")}static{this.\u0275fac=function(C){return new(C||a)(k(G))}}static{this.\u0275cmp=h({type:a,selectors:[["app-validation"]],standalone:!0,features:[x],decls:326,vars:80,consts:[[1,"row"],[1,"col-xl-6"],[1,"card","custom-card"],[1,"top-left"],[1,"top-right"],[1,"bottom-left"],[1,"bottom-right"],[1,"card-header","justify-content-between"],[1,"card-title"],[1,"prism-toggle"],["appShowCode","",1,"btn","btn-sm","btn-primary-light"],[1,"ri-code-line","ms-2","d-inline-block","align-middle"],[1,"card-body"],[1,"row","g-3","needs-validation",3,"ngSubmit","formGroup"],[1,"col-md-4"],["for","validationCustom01",1,"form-label"],["type","text","formControlName","fullname","id","validationCustom01","required","","placeholder","Mark",1,"form-control","is-invalid",3,"ngClass"],[1,"valid-feedback"],[1,"invalid-feedback"],["for","validationCustom02",1,"form-label"],["type","text","id","last","formControlName","lastname","id","validationCustom02","required","","placeholder","Otto",1,"form-control",3,"ngClass"],["for","validationCustomUsername",1,"form-label"],[1,"input-group"],["id","inputGroupPrepend",1,"input-group-text"],["type","text","formControlName","username","id","validationCustomUsername","aria-describedby","inputGroupPrepend","required","",1,"form-control",3,"ngClass"],[1,"col-md-6"],["for","validationCustom03",1,"form-label"],["type","text","formControlName","city","id","validationCustom03","required","",1,"form-control",3,"ngClass"],[1,"col-md-3"],["for","validationCustom04",1,"form-label"],["formControlName","state","id","validationCustom04","required","",1,"",3,"ngClass"],["selected","","disabled","","value",""],["for","validationCustom05",1,"form-label"],["type","text","formControlName","zip","id","validationCustom05","required","",1,"form-control",3,"ngClass"],[1,"col-12"],[1,"form-check"],["type","checkbox","value","","id","invalidCheck","formControlName","acceptTerms","required","",1,"form-check-input",3,"ngClass"],["for","invalidCheck",1,"form-check-label"],["type","submit",1,"btn","btn-primary"],[1,"card-footer","d-none","border-top-0"],[1,"language-html"],["novalidate","",1,"row","g-3",3,"ngSubmit","formGroup"],["for","validationDefault01",1,"form-label"],["type","text","formControlName","firstname","placeholder","Mark","id","validationDefault01",1,"my-auto","ti-form-input","form-control"],[1,"text-danger"],["for","validationDefault02",1,"form-label"],["type","text","formControlName","lastname","id","validationDefault02","placeholder","Otto","value","Otto","required","",1,"form-control"],["for","validationDefaultUsername",1,"form-label"],["id","inputGroupPrepend2",1,"input-group-text"],["type","text","formControlName","username","id","validationDefaultUsername","aria-describedby","inputGroupPrepend2","required","",1,"form-control"],["for","validationDefault03",1,"form-label"],["type","text","formControlName","city","id","validationDefault03","required","",1,"form-control"],["for","validationDefault04",1,"form-label"],["formControlName","state","id","validationDefault04","required","",1,""],["for","validationDefault05",1,"form-label"],["type","text","formControlName","zip","id","validationDefault05","required","",1,"form-control"],["type","checkbox","value","","formControlName","checkbox","id","invalidCheck2","required","",1,"form-check-input"],["for","invalidCheck2",1,"form-check-label"],[1,"col-xl-12"],[1,"col-md-4","position-relative"],["for","validationTooltip01",1,"form-label"],["type","text","formControlName","name","id","validationTooltip01","placeholder","Mark","value","Mark","required","",1,"form-control",3,"ngClass"],[1,"invalid-tooltip"],["for","validationTooltip02",1,"form-label"],["type","text","formControlName","lname","id","validationTooltip02","value","Otto","required","","placeholder","Otto",1,"form-control",3,"ngClass"],["for","validationTooltipUsername",1,"form-label"],[1,"input-group","has-validation"],["id","validationTooltipUsernamePrepend",1,"input-group-text"],["type","text","formControlName","uname","id","validationTooltipUsername","aria-describedby","validationTooltipUsernamePrepend","required","",1,"form-control",3,"ngClass"],[1,"col-md-6","position-relative"],["for","validationTooltip03",1,"form-label"],["type","text","formControlName","cit","id","validationTooltip03","required","",1,"form-control",3,"ngClass"],[1,"col-md-3","position-relative"],["for","validationTooltip04",1,"form-label"],["formControlName","stat","id","validationTooltip04","required","",1,"",3,"ngClass"],["for","validationTooltip05",1,"form-label"],["type","text","formControlName","zip","id","validationTooltip05","required","",1,"form-control",3,"ngClass"],[1,"row","g-3"],["for","validationServer01",1,"form-label"],["type","text","id","validationServer01","value","Mark","required","",1,"form-control","is-valid"],["for","validationServer02",1,"form-label"],["type","text","id","validationServer02","value","Otto","required","",1,"form-control","is-valid"],["for","validationServerUsername",1,"form-label"],["id","inputGroupPrepend3",1,"input-group-text"],["type","text","id","validationServerUsername","aria-describedby","inputGroupPrepend3 validationServerUsernameFeedback","required","",1,"form-control","is-invalid"],["id","validationServerUsernameFeedback",1,"invalid-feedback"],["for","validationServer03",1,"form-label"],["type","text","id","validationServer03","aria-describedby","validationServer03Feedback","required","",1,"form-control","is-invalid"],["id","validationServer03Feedback",1,"invalid-feedback"],["for","validationServer04",1,"form-label"],["placeholder","Choose..","id","validationServer04","aria-describedby","validationServer04Feedback","required","",1,"form-select","is-invalid","form-control","p-0"],["value","0"],["value","1"],["value","2"],["value","3"],["id","validationServer04Feedback",1,"invalid-feedback"],["for","validationServer05",1,"form-label"],["type","text","id","validationServer05","aria-describedby","validationServer05Feedback","required","",1,"form-control","is-invalid"],["id","validationServer05Feedback",1,"invalid-feedback"],["type","checkbox","value","","id","invalidCheck3","aria-describedby","invalidCheck3Feedback","required","",1,"form-check-input","is-invalid"],["for","invalidCheck3",1,"form-check-label"],["id","invalidCheck3Feedback",1,"invalid-feedback"],[1,"was-validated",3,"ngSubmit","formGroup"],[1,"mb-3"],["for","validationTextarea",1,"form-label"],["id","validationTextarea","placeholder","Required example textarea","formControlName","textarea","required","",1,"form-control","is-invalid",3,"ngClass"],[1,"form-check","mb-3"],["type","checkbox","id","validationFormCheck1","formControlName","checkbox","required","",1,"form-check-input",3,"ngClass"],["for","validationFormCheck1",1,"form-check-label"],["type","radio","id","validationFormCheck2","name","radio-stacked","required","",1,"form-check-input"],["for","validationFormCheck2",1,"form-check-label"],["type","radio","id","validationFormCheck3","name","radio-stacked","required","",1,"form-check-input"],["for","validationFormCheck3",1,"form-check-label"],["formControlName","select","required","","aria-label","select example",1,"form-select",3,"ngClass"],["value",""],["type","file","aria-label","file example","formControlName","feedback","required","",1,"form-control",3,"ngClass"],["type","submit","disabled","",1,"btn","btn-primary"]],template:function(C,n){C&1&&(i(0,"div",0)(1,"div",1)(2,"div",2),o(3,"div",3)(4,"div",4)(5,"div",5)(6,"div",6),i(7,"div",7)(8,"div",8),t(9," Custom Validation "),e(),i(10,"div",9)(11,"button",10),t(12,"Show Code"),o(13,"i",11),e()()(),i(14,"div",12)(15,"form",13),f("ngSubmit",function(){return n.OnSubmit()}),i(16,"div",14)(17,"label",15),t(18,"First name"),e(),o(19,"input",16),m(20,j,3,0,"div",17)(21,I,2,0,"div",18),e(),i(22,"div",14)(23,"label",19),t(24,"Last name"),e(),o(25,"input",20),m(26,H,2,0,"div",18),e(),i(27,"div",14)(28,"label",21),t(29,"Username"),e(),i(30,"div",22)(31,"span",23),t(32,"@"),e(),o(33,"input",24),m(34,J,2,0,"div",18),e()(),i(35,"div",25)(36,"label",26),t(37,"City"),e(),o(38,"input",27),m(39,K,2,0,"div",18),e(),i(40,"div",28)(41,"label",29),t(42,"State"),e(),i(43,"ng-select",30)(44,"ng-option",31),t(45,"Choose..."),e(),i(46,"ng-option"),t(47,"..."),e()(),m(48,Q,2,0,"div",18),e(),i(49,"div",28)(50,"label",32),t(51,"Zip"),e(),o(52,"input",33),m(53,W,2,0,"div",18),e(),i(54,"div",34)(55,"div",35),o(56,"input",36),i(57,"label",37),t(58," Agree to terms and conditions "),e(),m(59,X,2,0,"div",18),e()(),i(60,"div",34)(61,"button",38),t(62,"Submit form"),e()()()(),i(63,"div",39)(64,"pre",40)(65,"code",40),t(66,`<form class="row g-3 needs-validation" novalidate>
<div class="col-md-4">
<label for="validationCustom01" class="form-label">First name</label>
<input type="text" class="form-control" id="validationCustom01" value="Mark"
required>
<div class="valid-feedback">
Looks good!
</div>
</div>
<div class="col-md-4">
<label for="validationCustom02" class="form-label">Last name</label>
<input type="text" class="form-control" id="validationCustom02" value="Otto"
required>
<div class="valid-feedback">
Looks good!
</div>
</div>
<div class="col-md-4">
<label for="validationCustomUsername" class="form-label">Username</label>
<div class="input-group has-validation">
<span class="input-group-text" id="inputGroupPrepend">@</span>
<input type="text" class="form-control" id="validationCustomUsername"
aria-describedby="inputGroupPrepend" required>
<div class="invalid-feedback">
Please choose a username.
</div>
</div>
</div>
<div class="col-md-6">
<label for="validationCustom03" class="form-label">City</label>
<input type="text" class="form-control" id="validationCustom03" required>
<div class="invalid-feedback">
Please provide a valid city.
</div>
</div>
<div class="col-md-3">
<label for="validationCustom04" class="form-label">State</label>
<select class="form-select" id="validationCustom04" required>
<option selected disabled value="">Choose...</option>
<option>...</option>
</select>
<div class="invalid-feedback">
Please select a valid state.
</div>
</div>
<div class="col-md-3">
<label for="validationCustom05" class="form-label">Zip</label>
<input type="text" class="form-control" id="validationCustom05" required>
<div class="invalid-feedback">
Please provide a valid zip.
</div>
</div>
<div class="col-12">
<div class="form-check">
<input class="form-check-input" type="checkbox" value=""
id="invalidCheck" required>
<label class="form-check-label" for="invalidCheck">
Agree to terms and conditions
</label>
<div class="invalid-feedback">
You must agree before submitting.
</div>
</div>
</div>
<div class="col-12">
<button class="btn btn-primary" type="submit">Submit form</button>
</div>
</form>`),e()()()()(),i(67,"div",1)(68,"div",2),o(69,"div",3)(70,"div",4)(71,"div",5)(72,"div",6),i(73,"div",7)(74,"div",8),t(75," Browser Default Validation "),e(),i(76,"div",9)(77,"button",10),t(78,"Show Code"),o(79,"i",11),e()()(),i(80,"div",12)(81,"form",41),f("ngSubmit",function(){return n.Submit1()}),i(82,"div",14)(83,"label",42),t(84,"First name"),e(),o(85,"input",43),m(86,$,2,0,"div",44),e(),i(87,"div",14)(88,"label",45),t(89,"Last name"),e(),o(90,"input",46),m(91,ee,2,0,"div",44),e(),i(92,"div",14)(93,"label",47),t(94,"Username"),e(),i(95,"div",22)(96,"span",48),t(97,"@"),e(),o(98,"input",49),e(),m(99,ie,2,0,"div",44),e(),i(100,"div",25)(101,"label",50),t(102,"City"),e(),o(103,"input",51),m(104,te,2,0,"div",44),e(),i(105,"div",28)(106,"label",52),t(107,"State"),e(),i(108,"ng-select",53)(109,"ng-option",31),t(110,"Choose..."),e(),i(111,"ng-option"),t(112,"..."),e()(),m(113,ne,2,0,"div",44),e(),i(114,"div",28)(115,"label",54),t(116,"Zip"),e(),o(117,"input",55),m(118,ae,2,0,"div",44),e(),i(119,"div",34)(120,"div",35),o(121,"input",56),i(122,"label",57),t(123," Agree to terms and conditions "),e(),m(124,le,2,0,"div",44),e()(),i(125,"div",34)(126,"button",38),t(127,"Submit form"),e()()()(),i(128,"div",39)(129,"pre",40)(130,"code",40),t(131,`<form class="row g-3">
<div class="col-md-4">
<label for="validationDefault01" class="form-label">First name</label>
<input type="text" class="form-control" id="validationDefault01"
value="Mark" required>
</div>
<div class="col-md-4">
<label for="validationDefault02" class="form-label">Last name</label>
<input type="text" class="form-control" id="validationDefault02"
value="Otto" required>
</div>
<div class="col-md-4">
<label for="validationDefaultUsername" class="form-label">Username</label>
<div class="input-group">
<span class="input-group-text" id="inputGroupPrepend2">@</span>
<input type="text" class="form-control" id="validationDefaultUsername"
aria-describedby="inputGroupPrepend2" required>
</div>
</div>
<div class="col-md-6">
<label for="validationDefault03" class="form-label">City</label>
<input type="text" class="form-control" id="validationDefault03" required>
</div>
<div class="col-md-3">
<label for="validationDefault04" class="form-label">State</label>
<select class="form-select" id="validationDefault04" required>
<option selected disabled value="">Choose...</option>
<option>...</option>
</select>
</div>
<div class="col-md-3">
<label for="validationDefault05" class="form-label">Zip</label>
<input type="text" class="form-control" id="validationDefault05" required>
</div>
<div class="col-12">
<div class="form-check">
<input class="form-check-input" type="checkbox" value=""
id="invalidCheck2" required>
<label class="form-check-label" for="invalidCheck2">
Agree to terms and conditions
</label>
</div>
</div>
<div class="col-12">
<button class="btn btn-primary" type="submit">Submit form</button>
</div>
</form>`),e()()()()()(),i(132,"div",0)(133,"div",58)(134,"div",2),o(135,"div",3)(136,"div",4)(137,"div",5)(138,"div",6),i(139,"div",7)(140,"div",8),t(141," Tooltips "),e(),i(142,"div",9)(143,"button",10),t(144,"Show Code"),o(145,"i",11),e()()(),i(146,"div",12)(147,"form",13),f("ngSubmit",function(){return n.Submit3()}),i(148,"div",59)(149,"label",60),t(150,"First name"),e(),o(151,"input",61),m(152,oe,2,0,"div",62),e(),i(153,"div",59)(154,"label",63),t(155,"Last name"),e(),o(156,"input",64),m(157,re,2,0,"div",62),e(),i(158,"div",59)(159,"label",65),t(160,"Username"),e(),i(161,"div",66)(162,"span",67),t(163,"@"),e(),o(164,"input",68),i(165,"div",62),t(166," Please choose a unique and valid username. "),e(),m(167,de,2,0,"div",62),e()(),i(168,"div",69)(169,"label",70),t(170,"City"),e(),o(171,"input",71),m(172,me,2,0,"div",62),e(),i(173,"div",72)(174,"label",73),t(175,"State"),e(),i(176,"ng-select",74)(177,"ng-option",31),t(178,"Choose..."),e(),i(179,"ng-option"),t(180,"..."),e()(),m(181,se,2,0,"div",62),e(),i(182,"div",72)(183,"label",75),t(184,"Zip"),e(),o(185,"input",76),m(186,ve,2,0,"div",62),e(),i(187,"div",34)(188,"button",38),t(189,"Submit form"),e()()()(),i(190,"div",39)(191,"pre",40)(192,"code",40),t(193,`<form class="row g-3 needs-validation" novalidate>
<div class="col-md-4 position-relative">
<label for="validationTooltip01" class="form-label">First
name</label>
<input type="text" class="form-control" id="validationTooltip01"
value="Mark" required>
<div class="valid-tooltip">
Looks good!
</div>
</div>
<div class="col-md-4 position-relative">
<label for="validationTooltip02" class="form-label">Last
name</label>
<input type="text" class="form-control" id="validationTooltip02"
value="Otto" required>
<div class="valid-tooltip">
Looks good!
</div>
</div>
<div class="col-md-4 position-relative">
<label for="validationTooltipUsername"
class="form-label">Username</label>
<div class="input-group has-validation">
<span class="input-group-text"
id="validationTooltipUsernamePrepend">@</span>
<input type="text" class="form-control"
id="validationTooltipUsername"
aria-describedby="validationTooltipUsernamePrepend"
required>
<div class="invalid-tooltip">
Please choose a unique and valid username.
</div>
</div>
</div>
<div class="col-md-6 position-relative">
<label for="validationTooltip03" class="form-label">City</label>
<input type="text" class="form-control" id="validationTooltip03"
required>
<div class="invalid-tooltip">
Please provide a valid city.
</div>
</div>
<div class="col-md-3 position-relative">
<label for="validationTooltip04" class="form-label">State</label>
<select class="form-select" id="validationTooltip04" required>
<option selected disabled value="">Choose...</option>
<option>...</option>
</select>
<div class="invalid-tooltip">
Please select a valid state.
</div>
</div>
<div class="col-md-3 position-relative">
<label for="validationTooltip05" class="form-label">Zip</label>
<input type="text" class="form-control" id="validationTooltip05"
required>
<div class="invalid-tooltip">
Please provide a valid zip.
</div>
</div>
<div class="col-12">
<button class="btn btn-primary" type="submit">Submit
form</button>
</div>
</form>`),e()()()()(),i(194,"div",58)(195,"div",2),o(196,"div",3)(197,"div",4)(198,"div",5)(199,"div",6),i(200,"div",7)(201,"div",8),t(202," Server side Validation "),e(),i(203,"div",9)(204,"button",10),t(205,"Show Code"),o(206,"i",11),e()()(),i(207,"div",12)(208,"form",77)(209,"div",14)(210,"label",78),t(211,"First name"),e(),o(212,"input",79),i(213,"div",17),t(214," Looks good! "),e()(),i(215,"div",14)(216,"label",80),t(217,"Last name"),e(),o(218,"input",81),i(219,"div",17),t(220," Looks good! "),e()(),i(221,"div",14)(222,"label",82),t(223,"Username"),e(),i(224,"div",66)(225,"span",83),t(226,"@"),e(),o(227,"input",84),i(228,"div",85),t(229," Please choose a username. "),e()()(),i(230,"div",25)(231,"label",86),t(232,"City"),e(),o(233,"input",87),i(234,"div",88),t(235," Please provide a valid city. "),e()(),i(236,"div",28)(237,"label",89),t(238,"State"),e(),i(239,"ng-select",90)(240,"ng-option",91),t(241,"New york"),e(),i(242,"ng-option",92),t(243,"California"),e(),i(244,"ng-option",93),t(245,"texas"),e(),i(246,"ng-option",94),t(247,"New york"),e()(),i(248,"div",95),t(249," Please select a valid state. "),e()(),i(250,"div",28)(251,"label",96),t(252,"Zip"),e(),o(253,"input",97),i(254,"div",98),t(255," Please provide a valid zip. "),e()(),i(256,"div",34)(257,"div",35),o(258,"input",99),i(259,"label",100),t(260," Agree to terms and conditions "),e(),i(261,"div",101),t(262," You must agree before submitting. "),e()()(),i(263,"div",34)(264,"button",38),t(265,"Submit form"),e()()()(),i(266,"div",39)(267,"pre",40)(268,"code",40),t(269,`<form class="row g-3">
<div class="col-md-4">
<label for="validationServer01" class="form-label">First
name</label>
<input type="text" class="form-control is-valid"
id="validationServer01" value="Mark" required>
<div class="valid-feedback">
Looks good!
</div>
</div>
<div class="col-md-4">
<label for="validationServer02" class="form-label">Last
name</label>
<input type="text" class="form-control is-valid"
id="validationServer02" value="Otto" required>
<div class="valid-feedback">
Looks good!
</div>
</div>
<div class="col-md-4">
<label for="validationServerUsername"
class="form-label">Username</label>
<div class="input-group has-validation">
<span class="input-group-text" id="inputGroupPrepend3">@</span>
<input type="text" class="form-control is-invalid"
id="validationServerUsername"
aria-describedby="inputGroupPrepend3 validationServerUsernameFeedback"
required>
<div id="validationServerUsernameFeedback"
class="invalid-feedback">
Please choose a username.
</div>
</div>
</div>
<div class="col-md-6">
<label for="validationServer03" class="form-label">City</label>
<input type="text" class="form-control is-invalid"
id="validationServer03"
aria-describedby="validationServer03Feedback" required>
<div id="validationServer03Feedback" class="invalid-feedback">
Please provide a valid city.
</div>
</div>
<div class="col-md-3">
<label for="validationServer04" class="form-label">State</label>
<select class="form-select is-invalid" id="validationServer04"
aria-describedby="validationServer04Feedback" required>
<option selected disabled value="">Choose...</option>
<option>...</option>
</select>
<div id="validationServer04Feedback" class="invalid-feedback">
Please select a valid state.
</div>
</div>
<div class="col-md-3">
<label for="validationServer05" class="form-label">Zip</label>
<input type="text" class="form-control is-invalid"
id="validationServer05"
aria-describedby="validationServer05Feedback" required>
<div id="validationServer05Feedback" class="invalid-feedback">
Please provide a valid zip.
</div>
</div>
<div class="col-12">
<div class="form-check">
<input class="form-check-input is-invalid" type="checkbox"
value="" id="invalidCheck3"
aria-describedby="invalidCheck3Feedback" required>
<label class="form-check-label" for="invalidCheck3">
Agree to terms and conditions
</label>
<div id="invalidCheck3Feedback" class="invalid-feedback">
You must agree before submitting.
</div>
</div>
</div>
<div class="col-12">
<button class="btn btn-primary" type="submit">Submit
form</button>
</div>
</form>`),e()()()()(),i(270,"div",58)(271,"div",2),o(272,"div",3)(273,"div",4)(274,"div",5)(275,"div",6),i(276,"div",7)(277,"div",8),t(278," Supported elements "),e(),i(279,"div",9)(280,"button",10),t(281,"Show Code"),o(282,"i",11),e()()(),i(283,"div",12)(284,"form",102),f("ngSubmit",function(){return n.Submit()}),i(285,"div",103)(286,"label",104),t(287,"Textarea"),e(),o(288,"textarea",105),m(289,ue,2,1,"div",18),e(),i(290,"div",106),o(291,"input",107),i(292,"label",108),t(293,"Check this checkbox"),e(),m(294,fe,2,1,"div",18),e(),i(295,"div",35),o(296,"input",109),i(297,"label",110),t(298,"Toggle this radio"),e()(),i(299,"div",106),o(300,"input",111),i(301,"label",112),t(302,"Or toggle this other radio"),e(),i(303,"div",18),t(304,"More example invalid feedback text"),e()(),i(305,"div",103)(306,"select",113)(307,"option",114),t(308,"Open this select menu"),e(),i(309,"option",92),t(310,"One"),e(),i(311,"option",93),t(312,"Two"),e(),i(313,"option",94),t(314,"Three"),e()(),m(315,Ce,2,1,"div",18),e(),i(316,"div",103),o(317,"input",115),m(318,he,2,1,"div",18),e(),i(319,"div",103)(320,"button",116),t(321,"Submit form"),e()()()(),i(322,"div",39)(323,"pre",40)(324,"code",40),t(325,`<form class="was-validated">
<div class="mb-3">
<label for="validationTextarea" class="form-label">Textarea</label>
<textarea class="form-control is-invalid" id="validationTextarea"
placeholder="Required example textarea" required=""></textarea>
<div class="invalid-feedback">
Please enter a message in the textarea.
</div>
</div>

<div class="form-check mb-3">
<input type="checkbox" class="form-check-input" id="validationFormCheck1"
required="">
<label class="form-check-label" for="validationFormCheck1">Check this
checkbox</label>
<div class="invalid-feedback">Example invalid feedback text</div>
</div>

<div class="form-check">
<input type="radio" class="form-check-input" id="validationFormCheck2"
name="radio-stacked" required="">
<label class="form-check-label" for="validationFormCheck2">Toggle this
radio</label>
</div>
<div class="form-check mb-3">
<input type="radio" class="form-check-input" id="validationFormCheck3"
name="radio-stacked" required="">
<label class="form-check-label" for="validationFormCheck3">Or toggle
this
other radio</label>
<div class="invalid-feedback">More example invalid feedback text</div>
</div>

<div class="mb-3">
<select class="form-select" required="" aria-label="select example">
<option value="">Open this select menu</option>
<option value="1">One</option>
<option value="2">Two</option>
<option value="3">Three</option>
</select>
<div class="invalid-feedback">Example invalid select feedback</div>
</div>

<div class="mb-3">
<input type="file" class="form-control" aria-label="file example"
required="">
<div class="invalid-feedback">Example invalid form file feedback</div>
</div>

<div class="mb-3">
<button class="btn btn-primary" type="submit" disabled="">Submit
form</button>
</div>
</form>`),e()()()()()()),C&2&&(l(15),v("formGroup",n.form),l(4),v("ngClass",c(46,u,n.submitted&&n.f.fullname.errors)),l(),r(20,!n.submitted&&n.f.fullname.valid?20:-1),l(),r(21,n.submitted&&n.f.fullname.errors?21:-1),l(4),v("ngClass",c(48,u,n.submitted&&n.f.lastname.errors)),l(),r(26,n.submitted&&n.f.lastname.errors?26:-1),l(7),v("ngClass",c(50,u,n.submitted&&n.f.username.errors)),l(),r(34,n.submitted&&n.f.username.errors?34:-1),l(4),v("ngClass",c(52,u,n.submitted&&n.f.city.errors)),l(),r(39,n.submitted&&n.f.city.errors?39:-1),l(4),v("ngClass",c(54,u,n.submitted&&n.f.state.errors)),l(5),r(48,n.submitted&&n.f.state.errors?48:-1),l(4),v("ngClass",c(56,u,n.submitted&&n.f.zip.errors)),l(),r(53,n.submitted&&n.f.zip.errors?53:-1),l(3),v("ngClass",c(58,u,n.submitted&&n.f.acceptTerms.errors)),l(3),r(59,n.submitted&&n.f.acceptTerms.errors?59:-1),l(22),v("formGroup",n.form2),l(5),r(86,n.form2.controls.firstname.invalid&&(n.form2.controls.firstname.dirty||n.form2.controls.firstname.touched)?86:-1),l(5),r(91,n.form2.controls.lastname.invalid&&(n.form2.controls.lastname.dirty||n.form2.controls.lastname.touched)?91:-1),l(8),r(99,n.form2.controls.username.invalid&&(n.form2.controls.username.dirty||n.form2.controls.username.touched)?99:-1),l(5),r(104,n.form2.controls.city.invalid&&(n.form2.controls.city.dirty||n.form2.controls.city.touched)?104:-1),l(9),r(113,n.form2.controls.state.invalid&&(n.form2.controls.state.dirty||n.form2.controls.state.touched)?113:-1),l(5),r(118,n.form2.controls.zip.invalid&&(n.form2.controls.zip.dirty||n.form2.controls.zip.touched)?118:-1),l(6),r(124,n.form2.controls.checkbox.invalid&&(n.form2.controls.checkbox.dirty||n.form2.controls.checkbox.touched)?124:-1),l(23),v("formGroup",n.form3),l(4),v("ngClass",c(60,u,n.submitted3&&n.f3.name.errors)),l(),r(152,n.submitted3&&n.f3.name.errors?152:-1),l(4),v("ngClass",c(62,u,n.submitted3&&n.f3.lname.errors)),l(),r(157,n.submitted3&&n.f3.lname.errors?157:-1),l(7),v("ngClass",c(64,u,n.submitted3&&n.f3.uname.errors)),l(3),r(167,n.submitted3&&n.f3.uname.errors?167:-1),l(4),v("ngClass",c(66,u,n.submitted3&&n.f3.cit.errors)),l(),r(172,n.submitted3&&n.f3.cit.errors?172:-1),l(4),v("ngClass",c(68,u,n.submitted3&&n.f3.stat.errors)),l(5),r(181,n.submitted3&&n.f3.stat.errors?181:-1),l(4),v("ngClass",c(70,u,n.submitted3&&n.f3.zip.errors)),l(),r(186,n.submitted3&&n.f3.zip.errors?186:-1),l(98),v("formGroup",n.form4),l(4),v("ngClass",c(72,u,n.submitted1&&n.f1.textarea.errors)),l(),r(289,n.submitted1&&n.f1.textarea.errors?289:-1),l(2),v("ngClass",c(74,u,n.submitted1&&n.f1.checkbox.errors)),l(3),r(294,n.submitted1&&n.f1.checkbox.errors?294:-1),l(12),v("ngClass",c(76,u,n.submitted1&&n.f1.select.errors)),l(9),r(315,n.submitted1&&n.f1.select.errors?315:-1),l(2),v("ngClass",c(78,u,n.submitted&&n.f1.feedback.errors)),l(),r(318,n.submitted1&&n.f1.feedback.errors?318:-1))},dependencies:[Z,A,M,V,D,w,_,E,U,q,T,L,O,F,z,N,P,y,g,Y,R,B]})}}return a})();export{Ve as ValidationComponent};
