import{I as v,p}from"./chunk-LSPNTEQT.js";import"./chunk-5ZVHWZ6S.js";import{Da as m}from"./chunk-23EAPCQL.js";import"./chunk-2LOGFC5J.js";import{Ga as r,Kc as a,Sc as d,hc as e,ic as i,jc as t}from"./chunk-DLPH24CR.js";import"./chunk-X2P3SVT6.js";import"./chunk-2EBTC7QX.js";import"./chunk-FFXK657A.js";var c=/[^0-9]/g,b=(()=>{class l{constructor(){this.page=2,this.page0=3,this.page1=1,this.page2=3,this.page3=1,this.page5=8,this.page6=6,this.page7=3,this.page8=8,this.page9=5,this.pagef=7,this.pageactive1=2,this.pageactive=2,this.pages2=5,this.pageA=5,this.pagest4=3,this.isDisabled=!0}getPageSymbol(n){return["A","B","C","D","E","F","G"][n-1]}selectPage(n){this.page=parseInt(n,10)||1}toggleDisabled(){this.isDisabled=!this.isDisabled}formatInput(n){n.value=n.value.replace(c,"")}static{this.\u0275fac=function(s){return new(s||l)}}static{this.\u0275cmp=r({type:l,selectors:[["app-pagination"]],standalone:!0,features:[d],decls:376,vars:0,consts:[[1,"row"],[1,"col-xxl-12","col-xl-12"],[1,"card","custom-card"],[1,"top-left"],[1,"top-right"],[1,"bottom-left"],[1,"bottom-right"],[1,"card-header","justify-content-between"],[1,"card-title"],[1,"prism-toggle"],["appShowCode","",1,"btn","btn-sm","btn-primary-light"],[1,"ri-code-line","ms-2","d-inline-block","align-middle"],[1,"card-body"],["aria-label","Page navigation"],[1,"pagination","mb-0"],[1,"page-item","disabled"],["href","javascript:void(0);",1,"page-link"],[1,"page-item"],[1,"card-footer","d-none","border-top-0"],[1,"language-html"],["href","javascript:void(0);","aria-label","Previous",1,"page-link"],["aria-hidden","true"],[1,"bx","bx-chevron-left","align-middle"],["href","javascript:void(0);","aria-label","Next",1,"page-link"],[1,"bx","bx-chevron-right","align-middle"],[1,"card-body","d-flex","flex-wrap","justify-content-between","gap-2"],["aria-label","..."],[1,"pagination","pagination-sm","mb-0"],["aria-current","page",1,"page-item","active"],[1,"page-link"],[1,"pagination","pagination-lg","mb-0"],[1,"col-xl-12"],[1,"pagination","justify-content-center"],[1,"pagination","justify-content-end","mb-0"],[1,"card-body","d-flex","flex-wrap"],["aria-label","...",1,"me-3"],[1,"pagination"],["aria-label","Page navigation",1,"pagination-style-1"],[1,"pagination","mb-0","flex-wrap"],[1,"ri-arrow-left-s-line","align-middle"],[1,"page-item","active"],[1,"bi","bi-three-dots"],[1,"ri-arrow-right-s-line","align-middle"],["aria-label","Page navigation",1,"pagination-style-2"],["href","javascript:void(0);",1,"page-link","text-primary"],["aria-label","Page navigation",1,"pagination-style-3"],["aria-label","Page navigation",1,"pagination-style-4"]],template:function(s,g){s&1&&(e(0,"div",0)(1,"div",1)(2,"div",2),t(3,"div",3)(4,"div",4)(5,"div",5)(6,"div",6),e(7,"div",7)(8,"div",8),a(9," Basic Pagination "),i(),e(10,"div",9)(11,"button",10),a(12,"Show Code"),t(13,"i",11),i()()(),e(14,"div",12)(15,"nav",13)(16,"ul",14)(17,"li",15)(18,"a",16),a(19,"Previous"),i()(),e(20,"li",17)(21,"a",16),a(22,"1"),i()(),e(23,"li",17)(24,"a",16),a(25,"2"),i()(),e(26,"li",17)(27,"a",16),a(28,"Next"),i()()()()(),e(29,"div",18)(30,"pre",19)(31,"code",19),a(32,`<nav aria-label="Page navigation">
<ul class="pagination mb-0">
<li class="page-item disabled"><a class="page-link" href="javascript:void(0);">Previous</a></li>
<li class="page-item"><a class="page-link" href="javascript:void(0);">1</a></li>
<li class="page-item"><a class="page-link" href="javascript:void(0);">2</a></li>
<li class="page-item"><a class="page-link" href="javascript:void(0);">Next</a></li>
</ul>
</nav>`),i()()()()(),e(33,"div",1)(34,"div",2),t(35,"div",3)(36,"div",4)(37,"div",5)(38,"div",6),e(39,"div",7)(40,"div",8),a(41," Pagination With Icons "),i(),e(42,"div",9)(43,"button",10),a(44,"Show Code"),t(45,"i",11),i()()(),e(46,"div",12)(47,"nav",13)(48,"ul",14)(49,"li",17)(50,"a",20)(51,"span",21),t(52,"i",22),i()()(),e(53,"li",17)(54,"a",16),a(55,"1"),i()(),e(56,"li",17)(57,"a",16),a(58,"2"),i()(),e(59,"li",17)(60,"a",16),a(61,"3"),i()(),e(62,"li",17)(63,"a",23)(64,"span",21),t(65,"i",24),i()()()()()(),e(66,"div",18)(67,"pre",19)(68,"code",19),a(69,`<nav aria-label="Page navigation">
<ul class="pagination mb-0">
<li class="page-item">
<a class="page-link" href="javascript:void(0);" aria-label="Previous">
<span aria-hidden="true"><i class="bx bx-chevron-left align-middle"></i></span>
</a>
</li>
<li class="page-item"><a class="page-link" href="javascript:void(0);">1</a></li>
<li class="page-item"><a class="page-link" href="javascript:void(0);">2</a></li>
<li class="page-item"><a class="page-link" href="javascript:void(0);">3</a></li>
<li class="page-item">
<a class="page-link" href="javascript:void(0);" aria-label="Next">
<span aria-hidden="true"><i class="bx bx-chevron-right align-middle"></i></span>
</a>
</li>
</ul>
</nav>`),i()()()()(),e(70,"div",1)(71,"div",2),t(72,"div",3)(73,"div",4)(74,"div",5)(75,"div",6),e(76,"div",7)(77,"div",8),a(78," Pagination Sizing "),i(),e(79,"div",9)(80,"button",10),a(81,"Show Code"),t(82,"i",11),i()()(),e(83,"div",25)(84,"nav",26)(85,"ul",27)(86,"li",28)(87,"span",29),a(88,"1"),i()(),e(89,"li",17)(90,"a",16),a(91,"2"),i()(),e(92,"li",17)(93,"a",16),a(94,"3"),i()()()(),e(95,"nav",26)(96,"ul",14)(97,"li",28)(98,"span",29),a(99,"1"),i()(),e(100,"li",17)(101,"a",16),a(102,"2"),i()(),e(103,"li",17)(104,"a",16),a(105,"3"),i()()()(),e(106,"nav",26)(107,"ul",30)(108,"li",28)(109,"span",29),a(110,"1"),i()(),e(111,"li",17)(112,"a",16),a(113,"2"),i()(),e(114,"li",17)(115,"a",16),a(116,"3"),i()()()()(),e(117,"div",18)(118,"pre",19)(119,"code",19),a(120,`<nav aria-label="...">
<ul class="pagination pagination-sm mb-0">
<li class="page-item active" aria-current="page">
<span class="page-link">1</span>
</li>
<li class="page-item"><a class="page-link" href="javascript:void(0);">2</a></li>
<li class="page-item"><a class="page-link" href="javascript:void(0);">3</a></li>
</ul>
</nav>
<nav aria-label="...">
<ul class="pagination mb-0">
<li class="page-item active" aria-current="page">
<span class="page-link">1</span>
</li>
<li class="page-item"><a class="page-link" href="javascript:void(0);">2</a></li>
<li class="page-item"><a class="page-link" href="javascript:void(0);">3</a></li>
</ul>
</nav>
<nav aria-label="...">
<ul class="pagination pagination-lg mb-0">
<li class="page-item active" aria-current="page">
<span class="page-link">1</span>
</li>
<li class="page-item"><a class="page-link" href="javascript:void(0);">2</a></li>
<li class="page-item"><a class="page-link" href="javascript:void(0);">3</a></li>
</ul>
</nav>`),i()()()()()(),e(121,"div",0)(122,"div",31)(123,"div",2),t(124,"div",3)(125,"div",4)(126,"div",5)(127,"div",6),e(128,"div",7)(129,"div",8),a(130," Center & Right Aligned Pagination "),i(),e(131,"div",9)(132,"button",10),a(133,"Show Code"),t(134,"i",11),i()()(),e(135,"div",12)(136,"nav",13)(137,"ul",32)(138,"li",15)(139,"a",29),a(140,"Previous"),i()(),e(141,"li",17)(142,"a",16),a(143,"1"),i()(),e(144,"li",17)(145,"a",16),a(146,"2"),i()(),e(147,"li",17)(148,"a",16),a(149,"3"),i()(),e(150,"li",17)(151,"a",16),a(152,"Next"),i()()()(),e(153,"nav",13)(154,"ul",33)(155,"li",15)(156,"a",29),a(157,"Previous"),i()(),e(158,"li",17)(159,"a",16),a(160,"1"),i()(),e(161,"li",17)(162,"a",16),a(163,"2"),i()(),e(164,"li",17)(165,"a",16),a(166,"3"),i()(),e(167,"li",17)(168,"a",16),a(169,"Next"),i()()()()(),e(170,"div",18)(171,"pre",19)(172,"code",19),a(173,`<nav aria-label="Page navigation">
<ul class="pagination justify-content-center">
<li class="page-item disabled">
<a class="page-link">Previous</a>
</li>
<li class="page-item"><a class="page-link" href="javascript:void(0);">1</a></li>
<li class="page-item"><a class="page-link" href="javascript:void(0);">2</a></li>
<li class="page-item"><a class="page-link" href="javascript:void(0);">3</a></li>
<li class="page-item">
<a class="page-link" href="javascript:void(0);">Next</a>
</li>
</ul>
</nav>
<nav aria-label="Page navigation">
<ul class="pagination justify-content-end mb-0">
<li class="page-item disabled">
<a class="page-link">Previous</a>
</li>
<li class="page-item"><a class="page-link" href="javascript:void(0);">1</a></li>
<li class="page-item"><a class="page-link" href="javascript:void(0);">2</a></li>
<li class="page-item"><a class="page-link" href="javascript:void(0);">3</a></li>
<li class="page-item">
<a class="page-link" href="javascript:void(0);">Next</a>
</li>
</ul>
</nav>`),i()()()()(),e(174,"div",31)(175,"div",2),t(176,"div",3)(177,"div",4)(178,"div",5)(179,"div",6),e(180,"div",7)(181,"div",8),a(182," Active and disabled states "),i(),e(183,"div",9)(184,"button",10),a(185,"Show Code"),t(186,"i",11),i()()(),e(187,"div",34)(188,"nav",35)(189,"ul",36)(190,"li",15)(191,"a",29),a(192,"Previous"),i()(),e(193,"li",17)(194,"a",16),a(195,"1"),i()(),e(196,"li",28)(197,"a",16),a(198,"2"),i()(),e(199,"li",17)(200,"a",16),a(201,"Next"),i()()()(),e(202,"nav",26)(203,"ul",36)(204,"li",15)(205,"span",29),a(206,"Previous"),i()(),e(207,"li",17)(208,"a",16),a(209,"1"),i()(),e(210,"li",28)(211,"span",29),a(212,"2"),i()(),e(213,"li",17)(214,"a",16),a(215,"Next"),i()()()()(),e(216,"div",18)(217,"pre",19)(218,"code",19),a(219,`<nav aria-label="..." class="me-3">
<ul class="pagination">
<li class="page-item disabled">
<a class="page-link">Previous</a>
</li>
<li class="page-item"><a class="page-link" href="javascript:void(0);">1</a></li>
<li class="page-item active" aria-current="page">
<a class="page-link" href="javascript:void(0);">2</a>
</li>
<li class="page-item">
<a class="page-link" href="javascript:void(0);">Next</a>
</li>
</ul>
</nav>
<nav aria-label="...">
<ul class="pagination">
<li class="page-item disabled">
<span class="page-link">Previous</span>
</li>
<li class="page-item"><a class="page-link" href="javascript:void(0);">1</a></li>
<li class="page-item active" aria-current="page">
<span class="page-link">2</span>
</li>
<li class="page-item">
<a class="page-link" href="javascript:void(0);">Next</a>
</li>
</ul>
</nav>`),i()()()()()(),e(220,"div",0)(221,"div",31)(222,"div",2),t(223,"div",3)(224,"div",4)(225,"div",5)(226,"div",6),e(227,"div",7)(228,"div",8),a(229," Pagination Style-1 "),i(),e(230,"div",9)(231,"button",10),a(232,"Show Code"),t(233,"i",11),i()()(),e(234,"div",12)(235,"nav",37)(236,"ul",38)(237,"li",15)(238,"a",16),t(239,"i",39),i()(),e(240,"li",17)(241,"a",16),a(242,"1"),i()(),e(243,"li",40)(244,"a",16),a(245,"2"),i()(),e(246,"li",17)(247,"a",16),t(248,"i",41),i()(),e(249,"li",17)(250,"a",16),a(251,"21"),i()(),e(252,"li",17)(253,"a",16),t(254,"i",42),i()()()()(),e(255,"div",18)(256,"pre",19)(257,"code",19),a(258,`<nav aria-label="Page navigation" class="pagination-style-1">
<ul class="pagination mb-0">
<li class="page-item disabled">
<a class="page-link" href="javascript:void(0);">
<i class="ri-arrow-left-s-line align-middle"></i>
</a>
</li>
<li class="page-item"><a class="page-link" href="javascript:void(0);">1</a></li>
<li class="page-item active"><a class="page-link" href="javascript:void(0);">2</a></li>
<li class="page-item">
<a class="page-link" href="javascript:void(0);">
<i class="bi bi-three-dots"></i>
</a>
</li>
<li class="page-item"><a class="page-link" href="javascript:void(0);">21</a></li>
<li class="page-item">
<a class="page-link" href="javascript:void(0);">
<i class="ri-arrow-right-s-line align-middle"></i>
</a>
</li>
</ul>
</nav>`),i()()()()(),e(259,"div",31)(260,"div",2),t(261,"div",3)(262,"div",4)(263,"div",5)(264,"div",6),e(265,"div",7)(266,"div",8),a(267," Pagination Style-2 "),i(),e(268,"div",9)(269,"button",10),a(270,"Show Code"),t(271,"i",11),i()()(),e(272,"div",12)(273,"nav",43)(274,"ul",38)(275,"li",15)(276,"a",16),a(277," Prev "),i()(),e(278,"li",40)(279,"a",16),a(280,"1"),i()(),e(281,"li",17)(282,"a",16),a(283,"2"),i()(),e(284,"li",17)(285,"a",16),t(286,"i",41),i()(),e(287,"li",17)(288,"a",16),a(289,"17"),i()(),e(290,"li",17)(291,"a",44),a(292," next "),i()()()()(),e(293,"div",18)(294,"pre",19)(295,"code",19),a(296,`<nav aria-label="Page navigation" class="pagination-style-2">
<ul class="pagination mb-0 flex-wrap">
<li class="page-item disabled">
<a class="page-link" href="javascript:void(0);">
Prev
</a>
</li>
<li class="page-item active"><a class="page-link" href="javascript:void(0);">1</a></li>
<li class="page-item"><a class="page-link" href="javascript:void(0);">2</a></li>
<li class="page-item">
<a class="page-link" href="javascript:void(0);">
<i class="bi bi-three-dots"></i>
</a>
</li>
<li class="page-item"><a class="page-link" href="javascript:void(0);">17</a></li>
<li class="page-item">
<a class="page-link text-primary" href="javascript:void(0);">
next
</a>
</li>
</ul>
</nav>`),i()()()()(),e(297,"div",31)(298,"div",2),t(299,"div",3)(300,"div",4)(301,"div",5)(302,"div",6),e(303,"div",7)(304,"div",8),a(305," Pagination Style-3 "),i(),e(306,"div",9)(307,"button",10),a(308,"Show Code"),t(309,"i",11),i()()(),e(310,"div",12)(311,"nav",45)(312,"ul",38)(313,"li",15)(314,"a",16),a(315," Prev "),i()(),e(316,"li",40)(317,"a",16),a(318,"1"),i()(),e(319,"li",17)(320,"a",16),a(321,"2"),i()(),e(322,"li",17)(323,"a",16),t(324,"i",41),i()(),e(325,"li",17)(326,"a",16),a(327,"16"),i()(),e(328,"li",17)(329,"a",44),a(330," next "),i()()()()(),e(331,"div",18)(332,"pre",19)(333,"code",19),a(334,`<nav aria-label="Page navigation" class="pagination-style-3">
<ul class="pagination mb-0 flex-wrap">
<li class="page-item disabled">
<a class="page-link" href="javascript:void(0);">
Prev
</a>
</li>
<li class="page-item active"><a class="page-link" href="javascript:void(0);">1</a></li>
<li class="page-item"><a class="page-link" href="javascript:void(0);">2</a></li>
<li class="page-item">
<a class="page-link" href="javascript:void(0);">
<i class="bi bi-three-dots"></i>
</a>
</li>
<li class="page-item"><a class="page-link" href="javascript:void(0);">16</a></li>
<li class="page-item">
<a class="page-link text-primary" href="javascript:void(0);">
next
</a>
</li>
</ul>
</nav>`),i()()()()(),e(335,"div",31)(336,"div",2),t(337,"div",3)(338,"div",4)(339,"div",5)(340,"div",6),e(341,"div",7)(342,"div",8),a(343," Pagination Style-4 "),i(),e(344,"div",9)(345,"button",10),a(346,"Show Code"),t(347,"i",11),i()()(),e(348,"div",12)(349,"nav",46)(350,"ul",38)(351,"li",15)(352,"a",16),a(353," Prev "),i()(),e(354,"li",40)(355,"a",16),a(356,"1"),i()(),e(357,"li",17)(358,"a",16),a(359,"2"),i()(),e(360,"li",17)(361,"a",16),t(362,"i",41),i()(),e(363,"li",17)(364,"a",16),a(365,"16"),i()(),e(366,"li",17)(367,"a",16),a(368,"17"),i()(),e(369,"li",17)(370,"a",44),a(371," next "),i()()()()(),e(372,"div",18)(373,"pre",19)(374,"code",19),a(375,`<nav aria-label="Page navigation" class="pagination-style-4">
<ul class="pagination mb-0 flex-wrap">
<li class="page-item disabled">
<a class="page-link" href="javascript:void(0);">
Prev
</a>
</li>
<li class="page-item active"><a class="page-link" href="javascript:void(0);">1</a></li>
<li class="page-item"><a class="page-link" href="javascript:void(0);">2</a></li>
<li class="page-item">
<a class="page-link" href="javascript:void(0);">
<i class="bi bi-three-dots"></i>
</a>
</li>
<li class="page-item"><a class="page-link" href="javascript:void(0);">16</a></li>
<li class="page-item"><a class="page-link" href="javascript:void(0);">17</a></li>
<li class="page-item">
<a class="page-link text-primary" href="javascript:void(0);">
next
</a>
</li>
</ul>
</nav>`),i()()()()()())},dependencies:[v,p,m]})}}return l})();export{b as PaginationComponent};
