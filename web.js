 document.body.insertAdjacentHTML("beforebegin", '<style> #window{ 	display:block;     height:570px; 	color: black;     width: 1070px;     margin-top:40px; 	margin-left: auto; 	margin-right: auto;     min-width: 500px;     background: #f0eded;     border-radius: 5px;     -webkit-box-shadow: 0px 0px 20px rgba(0,0,0,0.75);     -moz-box-shadow: 0px 0px 20px rgba(0,0,0,0.75);     /*-webkit-transition:all 0.5s; */     overflow: hidden;	 } /* TOP BAR */ #topbar{     width: 100%;     height: 21px;     font-size: 16px;     font-family: "Myriad Pro", sans-serif;     text-shadow:0px 1px 0px rgba(255,255,255,0.25);     -webkit-box-shadow:0 1px 0 rgba(0,0,0,0.5);     -moz-box-shadow:0 1px 0 rgba(0,0,0,0.5);        } #topbar ul li {     float: left;     padding:0 10px;     height: 21px;     line-height: 24px; } #topbar ul li:first-child{     font-size: 20px;     line-height: 26px;     margin-left: 5px; } #topbar ul li:nth-child(2){     font-family: "Myriad-Semi", sans-serif; } #topbar ul li:active{     background-image: -webkit-gradient(linear,left bottom,left top,color-stop(1, #4a82ff),color-stop(0, #0052fc));     color: #fff;     text-shadow: none; } #toolbar{     width: 100%;     height: 25px;     background: grey;     border-radius:5px 5px 0 0;     background: #cfcfcf; /* Old browsers */     background: -moz-linear-gradient(top,  #cfcfcf 0%, #a8a8a8 100%); /* FF3.6+ */     background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#cfcfcf), color-stop(100%,#a8a8a8)); /* Chrome,Safari4+ */     background: -webkit-linear-gradient(top,  #cfcfcf 0%,#a8a8a8 100%); /* Chrome10+,Safari5.1+ */     background: -o-linear-gradient(top,  #cfcfcf 0%,#a8a8a8 100%); /* Opera 11.10+ */     background: -ms-linear-gradient(top,  #cfcfcf 0%,#a8a8a8 100%); /* IE10+ */     background: linear-gradient(top,  #cfcfcf 0%,#a8a8a8 100%); /* W3C */         -webkit-box-shadow:0px 1px 0px rgba(255,255,255,0.5) inset,0px 1px 0px #515151;     -moz-box-shadow:0px 1px 0px rgba(255,255,255,0.5) inset,0px 1px 0px #515151;     box-shadow:0px 1px 0px rgba(255,255,255,0.5) inset,0px 1px 0px #515151;            } #toolbar .top{     float: left;     width: 100%;     height: 23px; } #toolbar .bottom{     float: left;     width: 100%;     height: 30px; } /*-----TRAFFIC LIGHTS-----*/ #toolbar #lights{     float: left;     position:relative;     top:4px;     left:7px; } .light{     float:left;     width:14px;     height:14px;     border-radius:14px;     -webkit-box-shadow:0px 1px 0px rgba(255,255,255,0.5),0px 0px 3px #000 inset;     -moz-box-shadow:0px 1px 0px rgba(255,255,255,0.5),0px 0px 3px #000 inset;     box-shadow:0px 1px 0px rgba(255,255,255,0.5),0px 0px 3px #000 inset;     overflow: hidden; } #lights:hover .glyph{     opacity: 1;     cursor:default;     } .light .shine{      width: 4px;      height:3px;      border-radius:10px;      /*background-image: -webkit-gradient(radial, center center, 0, center center, 3, from(rgba(255,255,255,1)), to(rgba(255,255,255,0)));*/      background: -moz-radial-gradient(center, ellipse cover,  rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%); /* FF3.6+ */         background-image: -webkit-gradient(radial, center center, 0px, center center, 100%, color-stop(0%,rgba(255,255,255,1)), color-stop(100%,rgba(255,255,255,0))); /* Chrome,Safari4+ */      background: -webkit-radial-gradient(center, ellipse cover,  rgba(255,255,255,1) 0%,rgba(255,255,255,0) 100%); /* Chrome10+,Safari5.1+ */      background: -o-radial-gradient(center, ellipse cover,  rgba(255,255,255,1) 0%,rgba(255,255,255,0) 100%); /* Opera 12+ */      background: -ms-radial-gradient(center, ellipse cover,  rgba(255,255,255,1) 0%,rgba(255,255,255,0) 100%); /* IE10+ */      background: radial-gradient(center, ellipse cover,  rgba(255,255,255,1) 0%,rgba(255,255,255,0) 100%); /* W3C */      } .light .glow{     width:14px;     height:8px;     background-image: -webkit-gradient(radial, center bottom, 0, center center, 5, from(rgba(255,255,255,0.75)), to(rgba(255,255,255,0)));     background: 0px 0px -moz-radial-gradient(bottom, cover,  rgba(255,255,255,0.70) 0%, rgba(255,255,255,0) 80%); /* FF3.6+ */    } /*--RED--*/ .red{    background: #f41b16; /* Old browsers */    background: -moz-linear-gradient(top,  #f41b16 0%, #fc7471 100%); /* FF3.6+ */    background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#f41b16), color-stop(100%,#fc7471)); /* Chrome,Safari4+ */    background: -webkit-linear-gradient(top,  #f41b16 0%,#fc7471 100%); /* Chrome10+,Safari5.1+ */    background: -o-linear-gradient(top,  #f41b16 0%,#fc7471 100%); /* Opera 11.10+ */    background: -ms-linear-gradient(top,  #f41b16 0%,#fc7471 100%); /* IE10+ */    background: linear-gradient(top,  #f41b16 0%,#fc7471 100%); /* W3C */   } .red:active{          background: #972f2e; /* Old browsers */     background: -moz-linear-gradient(top,  #972f2e 0%, #fc7471 100%); /* FF3.6+ */     background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#972f2e), color-stop(100%,#fc7471)); /* Chrome,Safari4+ */     background: -webkit-linear-gradient(top,  #972f2e 0%,#fc7471 100%); /* Chrome10+,Safari5.1+ */     background: -o-linear-gradient(top,  #972f2e 0%,#fc7471 100%); /* Opera 11.10+ */     background: -ms-linear-gradient(top,  #972f2e 0%,#fc7471 100%); /* IE10+ */     background: linear-gradient(top,  #972f2e 0%,#fc7471 100%); /* W3C */    } .red .shine{        position: relative;     top: -23px;     left: 5px;  } .red .glow{     position: relative;     top: -22px; } .red .glyph{     position: relative;     top: -6px;     left: 3px;     font-size: 14px;     font-weight: bold;     color: #9b3a36;     z-index: 50;     opacity: 0; } /*--YELLOW--*/ .yellow{     background: #f4a316; /* Old browsers */     background: -moz-linear-gradient(left,  #f4a316 0%, #fcc371 100%); /* FF3.6+ */     background: -webkit-gradient(linear, left top, right top, color-stop(0%,#f4a316), color-stop(100%,#fcc371)); /* Chrome,Safari4+ */     background: -webkit-linear-gradient(left,  #f4a316 0%,#fcc371 100%); /* Chrome10+,Safari5.1+ */     background: -o-linear-gradient(left,  #f4a316 0%,#fcc371 100%); /* Opera 11.10+ */     background: -ms-linear-gradient(left,  #f4a316 0%,#fcc371 100%); /* IE10+ */     background: linear-gradient(left,  #f4a316 0%,#fcc371 100%); /* W3C */      margin:0px 7px; } .yellow:active{     background: #ae4f1e; /* Old browsers */     background: -moz-linear-gradient(top,  #ae4f1e 0%, #fcc371 100%); /* FF3.6+ */     background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#ae4f1e), color-stop(100%,#fcc371)); /* Chrome,Safari4+ */     background: -webkit-linear-gradient(top,  #ae4f1e 0%,#fcc371 100%); /* Chrome10+,Safari5.1+ */     background: -o-linear-gradient(top,  #ae4f1e 0%,#fcc371 100%); /* Opera 11.10+ */     background: -ms-linear-gradient(top,  #ae4f1e 0%,#fcc371 100%); /* IE10+ */     background: linear-gradient(top,  #ae4f1e 0%,#fcc371 100%); /* W3C */    } .yellow .shine{     position: relative;     top: -23px;     left: 5px;  } .yellow .glow{     position: relative;     top: -22px; } .yellow .glyph{     position: relative;     top: -7px;     left: 4px;     font-size: 24px;     color: #854322;     z-index: 50;     opacity: 0;     -webkit-transform: scaleY(1.5) scaleX(1.3); } /*--GREEN--*/ .green{         background: #4cae2e; /* Old browsers */     background: -moz-linear-gradient(top,  #4cae2e 0%, #dafc71 100%); /* FF3.6+ */     background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#4cae2e), color-stop(100%,#dafc71)); /* Chrome,Safari4+ */     background: -webkit-linear-gradient(top,  #4cae2e 0%,#dafc71 100%); /* Chrome10+,Safari5.1+ */     background: -o-linear-gradient(top,  #4cae2e 0%,#dafc71 100%); /* Opera 11.10+ */     background: -ms-linear-gradient(top,  #4cae2e 0%,#dafc71 100%); /* IE10+ */     background: linear-gradient(top,  #4cae2e 0%,#dafc71 100%); /* W3C */     } .green:active{   background: #48752b; /* Old browsers */   background: -moz-linear-gradient(top,  #48752b 0%, #dafc71 100%); /* FF3.6+ */   background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#48752b), color-stop(100%,#dafc71)); /* Chrome,Safari4+ */   background: -webkit-linear-gradient(top,  #48752b 0%,#dafc71 100%); /* Chrome10+,Safari5.1+ */   background: -o-linear-gradient(top,  #48752b 0%,#dafc71 100%); /* Opera 11.10+ */   background: -ms-linear-gradient(top,  #48752b 0%,#dafc71 100%); /* IE10+ */   background: linear-gradient(top,  #48752b 0%,#dafc71 100%); /* W3C */   } .green .shine{      position: relative;     top: -22px;     left: 5px; } .green .glow{     position: relative;     top: -22px; } .green .glyph{     position: relative;     top: -6px;     left: 3px;     font-size: 14px;     font-weight: bold;     color: #25571d;     z-index: 50;     opacity: 0; } /* Horrible to do this for firefox */ @-moz-document url-prefix() {     .red .glyph {       position: relative;       top: -4px;   }    .yellow .glyph {       top: -4px;       left: 3px;   }       .green .glyph{       position: relative;       top: -4px;   }   } /*-----TITLE-----*/ #title{     float: left;     position: relative;     top:4px;     width:40%;     left: 30%;     font-family: "Myriad Pro", sans-serif;     font-size: 14px;     text-shadow: 0px 1px 0px rgba(255,255,255,0.5);     line-height: 14px; } .folder{     float: left;     margin-right:5px; } .folder .tab{     width:4px;     height:2px;     background:#a4c5da;     border:1px solid #728ea3;     border-bottom: none;     border-radius:2px 2px 0px 0px;     -webkit-box-shadow:0px -1px 0px #99b5c7 inset;     margin-left: 1px;     z-index: 5000;     margin-bottom: -1px; } .folder .body{     width: 14px;     height: 10px;     border:1px solid #6e8ba1;         background: #b8cfe0; /* Old browsers */     background: -moz-linear-gradient(top,  #b8cfe0 0%, #86adc8 100%); /* FF3.6+ */     background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#b8cfe0), color-stop(100%,#86adc8)); /* Chrome,Safari4+ */     background: -webkit-linear-gradient(top,  #b8cfe0 0%,#86adc8 100%); /* Chrome10+,Safari5.1+ */     background: -o-linear-gradient(top,  #b8cfe0 0%,#86adc8 100%); /* Opera 11.10+ */     background: -ms-linear-gradient(top,  #b8cfe0 0%,#86adc8 100%); /* IE10+ */     background: linear-gradient(top,  #b8cfe0 0%,#86adc8 100%); /* W3C */            z-index: -50;         -webkit-box-shadow:0px 1px 0px rgba(255,255,255,0.25) inset,0px 1px 0px rgba(0,0,0,0.2);     -moz-box-shadow:0px 1px 0px rgba(255,255,255,0.25) inset,0px 1px 0px rgba(0,0,0,0.2); } #nav{     margin: 1px 8px;     float: left; } #view{     margin: 2px 0 0 110px;     display: inline-block; } .control_box{     height:20px;     border-radius: 3px;     border: 1px solid #555;     background-image: -webkit-gradient(linear,left bottom,left top,color-stop(1, #fefefe),color-stop(0, #b8b8b8));     box-shadow:0px 1px 0px rgba(255,255,255,0.25); } .control_box .control{     height:20px;     border-right: 1px solid #2e2e2e;     float: left;     text-align: center;     width: 27px; } .control:last-child{     border-right: 0px solid !important; } .control:active{     background: #b0afb0;     -webkit-box-shadow:0px 0px 4px #000 inset; } .active{     background: #707070 !important;     -webkit-box-shadow:0px 3px 4px rgba(0,0,0,0.6) inset !important; } #body {     font-family: Andale Mono, monospace;  line-height: 1em;     font-size:13px;     float: left;     width: 100%;     min-height:130px;     background:#f0eded;     padding:10px;     line-height:1.5em; 	height: 40%; } #body p {    color: #000; } @keyframes blink { 	0%   {  background:rgba(99,222,0,100);  } 	100% {  background:rgba(99,222,0,0);  } } @-webkit-keyframes blink { 	0%   {  background:rgba(99,222,0,100);  } 	100% {  background:rgba(99,222,0,0);  } } @-moz-keyframes blink { 	0%   {  background:rgba(99,222,0,100);  } 	100% {  background:rgba(99,222,0,0);  } } .cursor {   background:#63de00;   display:inline-block;   width:11px;   height:19px;   margin-bottom:-3px; } .cursor {     -webkit-animation-name: blink;     -webkit-animation-duration: 1.5s;     -webkit-animation-iteration-count: infinite;     -moz-animation-name: blink;     -moz-animation-duration: 1.5s;     -moz-animation-iteration-count: infinite; }   #body p::-webkit-selection  {     background:#0b209e; } #body p::selection { background:#0b209e; } #body p::-moz-selection { background:#0b209e; } #body p {   margin-top:5px;   margin-bottom:5px;   font-size:13px; } #content{     float: left;     margin-top: 1px; } #foot{     height: 23px;     width: 100%;     float: left;     background-image: -webkit-gradient(linear,left bottom,left top,color-stop(1, #cbcbcb),color-stop(0, #fff));     border-top:1px solid #515151;     border-radius:0 0 5px 5px; } #foot .handle{     width: 11px;     height: 11px;     float: right;     margin: 6px;     overflow: hidden; } .handle .grip{     -webkit-transform: rotate(45deg) scaley(3);     margin: 2px 0 0 2px;     color: #fff;     text-shadow: 1px 1px 0 #c6c6c6;     font-size: 14px; } .icon{     width: 86px;     height: 100px;     margin: 20px;     float: left;     font-family: "Myriad Pro", sans-serif;     text-align: center;     font-size: 12px; } .icon .frame{     width: 82px;     height: 82px;     border-radius: 5px;     border: 2px solid transparent; } .icon .name{     color: #000;     padding-top: 3px;     border-radius:15px;     width: 55px;     margin: 5px 0 0 15px; } .icon .folder{     margin:15px 0 0 6px; } .tbl{ 	width: 100% } td {      	vertical-align: top;     width:50%; } .wdb-stats, .wdb-flex-container {   display: flex;   align-items: stretch; } .wdb-stats div {   flex-grow: 1;   padding: 2px 32px; } .wdb-stats div li {   list-style: none; } .clearfix::after {   content: "";   clear: both;   display: table; } .float-left {   float: left!important; } .float-right {   float: right!important; } .wraph{  width: 100%;     height: 100%;     margin: 0;     padding: 0;     overflow: auto; 	overflow-x: auto; } #wdbWrapHistory {   height: 200px;   padding: 3px; } #wdbWrapHistory {   overflow-x: auto; } #wdbWrapHistory table {   border-collapse: collapse;   font-size: 11px!important; } #wdbWrapHistory table thead tr th {   text-align: left;   padding: 1px;   border: 1px solid #fff; } #wdbHistory tr {   border-bottom: 1px solid #fff;   color: #000!important; } #wdbHistory tr:last-child {   border-bottom: 1px solid #ccc; } #wdbHistory tr td {   all: revert;   white-space: nowrap;   padding: 1.5px;   border-right: 1px solid #fff;   border-left: 1px solid #fff; } #wdbHistory tr td:first-child {   border-left: 1px solid #ccc; } #wdbHistory tr td:last-child {   border-right: 1px solid #ccc; } #wdbHistory tr td input {   all: revert; } .btn-grad {   all: revert;   cursor: pointer;   background-image: linear-gradient(to right, #00E701 0%, #00E701  51%, #00E701  100%);   text-align: center;   transition: 0.5s;   padding: 3px;   background-size: 200% auto;   border: #ffc107;   border-radius: 3px;   } .btn-grad:hover {   background-position: right center;   text-decoration: none; } .btn-grad:active {   opacity: .65; } .btn-grad:disabled {   cursor: auto;   opacity: .65;   color: #fff; } .btn-control {   padding-top: 10px!important;   padding-bottom: 10px!important; } #wdbMenu {   padding: 3px;   } #wdbMenu select, #wdbMenu span input[type=number] {   all: revert;   background: #fff!important;   padding: 3px 5px;   border: 1px solid #ccc;   border-radius: 0;  }   #window{ 	color: black;	 } #wdbLog { 	overflow-x: auto; 	overflow-y: auto; 	font-size: 11px; 	background: #f0eded; } #result { 	position: relative; 	padding-top: 2px; 	padding-left: 20px; 	padding-bottom: 10px; 	height: 40px; 	text-align: center; 	vertical-align: middle; 	font-size: 30px; 	font-weight: bold; } html { 	font-family: "Geneva", sans-serif; } .switch {   position: relative;   display: inline-block;   width: 40px;   height: 19px; } .switch input {   opacity: 0;   width: 0;   height: 0; } .slider {   position: absolute;   cursor: pointer;   top: 0;   left: 0;   right: 0;   bottom: 0;   background-color: #ccc;   -webkit-transition: .4s;   transition: .4s; } .slider:before {   position: absolute;   content: "";   height: 19px;   width: 19px;   left: 0px;   bottom: 0px;   background-color: black;   -webkit-transition: .4s;   transition: .4s; } input:checked + .slider {   background-image: linear-gradient(to right, #00E701 0%, #00E701  51%, #00E701  100%); } input:focus + .slider {   box-shadow: 0 0 1px #2196F3; } input:checked + .slider:before {   -webkit-transform: translateX(24px);   -ms-transform: translateX(24px);   transform: translateX(24px); } /* Rounded sliders */ .slider.round {   border-radius: 34px; } .slider.round:before {   border-radius: 50%; } .fastmode{ 	float: right; } </style> <div id="window">  	<div id="toolbar"> 		<div class="top"> 			<div id="lights"> 				<div class="light red"> 					<div class="glyph">×</div> 					<div class="shine"></div> 					<div class="glow"></div> 				</div>				 				<div class="light yellow"> 					<div class="glyph">-</div> 					<div class="shine"></div> 					<div class="glow"></div> 				</div> 				<div class="light green"> 					<div class="glyph">+</div> 					<div class="shine"></div> 					<div class="glow"></div> 				</div> 			</div> 			<div id="title"> 				github.com/poky1084 			</div> 			<div id="bubble"> 				<div class="shine"></div> 				<div class="glow"></div> 			</div> 		</div> 	</div> 	<div id="body"> 	<table class="tbl">   <tr>     <td><div class="wdb-stats" id="wdbStats">       <div>         <li class="clearfix">           <span class="float-left">Balance:</span>           <span class="float-right"><span id="wdbBalance">0.00000000</span></span>         </li>         <li class="clearfix">           <span class="float-left">Wagered:</span>           <span class="float-right">(<span id="wdbPercentWagered">0.00</span>x) <span id="wdbWagered">0.00000000</span></span>         </li>         <li class="clearfix">           <span class="float-left">Profit:</span>           <span class="float-right" id="wdbWrapPercentProfit">(<span id="wdbPercentProfit">0.00</span>%) <span id="wdbProfit">0.00000000</span></span>         </li> 		<li class="clearfix">           <span class="float-left">W/L/T:</span>         </li> 		<li class="clearfix">           <span class="float-left">H/L/Current:</span>         </li> 		<li class="clearfix">           <span class="float-left">Time:</span>         </li>       </div>             <div>         <li class="clearfix">           <span class="float-left">MaxBet:</span>           <span class="float-right"><span id="wdbHighBet">0.00000000</span></span>         </li>         <li class="clearfix">           <span class="float-left">MaxLose:</span>           <span class="float-right"><span id="wdbHighLose">0.00000000</span></span>         </li>         <li class="clearfix">           <span class="float-left">MaxProfit:</span>           <span class="float-right"><span id="wdbHighProfit">0.00000000</span></span>         </li>          <li class="clearfix">           <span class="float-right"><span id="wdbBets"><span style="">0</span> / <span style="">0</span> / 0</span></span>         </li> 		<li class="clearfix">            <span class="float-right"><span id="wdbHighLowStreak"><span style="">0</span> / <span style="">0</span> / <span id="currentstrk">0</span></span></span>         </li> 		<li class="clearfix">                 <span class="float-right"><span id="wdbTime">0:0:0:0</span></span>         </li>       </div>     </div></td>     <td><div class="half" id="chartContainer" style="height: 150px; width: 540px;"></div></td>   </tr>   <tr>     <td><div style="flex-grow: 1;width: 520px;"> 		<div id="result"> </div>         <div class="wraph" id="wdbWrapHistory">           <table>             <thead>               <tr>                 <th>Bets</th>                 <th>Amount</th>                 <th>High</th>                 <th>TargetChance</th>                 <th>RollChance</th>                 <th>Profit</th> 				<th>Payout</th>                 <th>TargetNumber</th>                 <th>RollNumber</th>                 <th>Game</th>                 <th>BetID</th>               </tr>             </thead>             <tbody id="wdbHistory"></tbody>           </table>         </div>       </div>        	  <div id="wdbWrapLog"> 	  <table id="wdbLog" class="wraph" style="width: 100%; height: 170px;"> 	  <tr><td>‏‏‎ ‎</td></tr> 	  <tr><td>‏‏‎ ‎</td></tr> 	  <tr><td>‏‏‎ ‎</td></tr> 	  <tr><td>‏‏‎ ‎</td></tr> 	  <tr><td>‏‏‎ ‎</td></tr> 	  <tr><td>‏‏‎ ‎</td></tr> 	  <tr><td>‏‏‎ ‎</td></tr> 	  <tr><td>‏‏‎ ‎</td></tr> 	  <tr><td>‏‏‎ ‎</td></tr> 	  </table>	           </div></td>     <td> 	<div id="wdbMenu"> 		<div style="padding: 5px 2px 5px"> 		<button class="btn-grad" id="wdbSaveScriptButton" onclick="downloadFile()">Save</button> 		<div class="fastmode"> 		Fast Mode: 		<label class="switch"> 		<input id="speedChange" type="checkbox"> 		<span class="slider round"></span> 		</label> 		</div> 		</div> 		</div> 	  <textarea id="editor"></textarea>        <div id="wdbControlMenu">           		  <div id="wdbMenu"> 		  <button id="wdbStartButton" class="btn-grad btn-control" style="width: 100px;">Start</button>           <button id="wdbStopButton" class="btn-grad btn-control" style="width: 100px;">Stop</button> 		  <select id="wdbMenuCoin" class="wdb-select" onchange="leaveChange(this)"> 	  <option value="btc">btc</option>       </select> 	  <select id="gameselect" class="gameselect" onchange="gameChange(this)">         <option value="dice" selected="selected">Dice</option> 		<option value="limbo">Limbo</option> 		<option value="crash">Crash</option> 		<option value="slide">Slide</option>       </select> 	  <select id="themebot" class="themebot" onchange="themeChange(this)">         <option value="light" selected="selected">Light</option> 		<option value="dark">Dark</option>       </select> 	  <button class="btn-grad" onclick="resetAll()">ResetAll</button> 	  </div>         </div> </td>   </tr> </table> 	 	 		<p>  </p>	 		<div class="cursor"></div>	 	</div> 	 </div>')
 
 function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
}
 
function randomString(length) {
	var chars = '_-0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-';
	var result = '';
	for (var i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
	return result;
}

function selectElement(id, valueToSelect) {    
    let element = document.getElementById(id);
    element.value = valueToSelect;
} 


function addJs(src, cb) {
    var s = document.createElement('script');
    s.type = 'text/javascript';
    s.src = src;
    s.onload = cb;
    document.head.appendChild(s);
}

function addCss(src, cb) {
    var s = document.createElement('link');
    s.rel = 'stylesheet';
    s.href = src;
    s.onload = cb;
    document.head.appendChild(s);
}

function getMyJS(url, callback){
	var xhr = new XMLHttpRequest();
	xhr.open('GET', url, true);
	xhr.onreadystatechange = function() {
		if (xhr.readyState !== 4) {
			return
		}
		if (xhr.status === 200) { 
			var s = document.createElement('script');
			s.text = xhr.responseText;
			document.body.appendChild(s);
		} else {
			console.log('Error', xhr.responseText);
		}
	};
	xhr.onload = callback;
	xhr.send();
}

addJs('https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.62.3/codemirror.min.js', () => {	})
addJs('https://canvasjs.com/assets/script/canvasjs.min.js', () => {  })
var editor = ''
addCss('https://cdnjs.cloudflare.com/ajax/libs/codemirror/6.65.7/codemirror.min.css', () => {})
addJs('https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js', () => {})


setTimeout(() => {
	
	if(window.location.host.includes("stake")){
		if(document.querySelectorAll('[data-test="left-sidebar"]')[0] != null){
		document.querySelectorAll('[data-test="left-sidebar"]')[0].remove();
		document.querySelectorAll('[data-test="home-button"]')[0].remove();
		}
	}
  
	editor = CodeMirror.fromTextArea(document.getElementById('editor'), {
		mode: "javascript",
		lineNumbers: true,
	});
	
	editor.save();
	editor.setSize(530, 300);
drawChart();

if(localStorage.getItem("jscode") != null){
	editor.setValue(localStorage.getItem("jscode"));
} 

if(localStorage.getItem("currenc") != null){
	currency = localStorage.getItem("currenc");
	selectElement('wdbMenuCoin', currency);
	
} 

if (localStorage.getItem("gameselect") != null) {
	document.getElementById("gameselect").value = localStorage.getItem("gameselect");
	game = document.getElementById("gameselect").value;
}

if (localStorage.getItem("themebot") != null) {
	let theme = localStorage.getItem("themebot");
	selectElement('themebot', theme);
	if(theme == "dark"){
		bgChart = "#383838"
		drawChart();
		document.getElementById("body").style.background="#383838";
		document.getElementById("window").style.background="#383838";
		document.getElementById("wdbLog").style.background="#383838";
		document.getElementById("window").style.color="white";
	} else {
		bgChart = "#f0eded"
		drawChart();
		document.getElementById("body").style.background="#f0eded";
		document.getElementById("window").style.background="#f0eded";
		document.getElementById("wdbLog").style.background="#f0eded";
		document.getElementById("window").style.color="black";
	}
}

userBalances();
startScoket();
}, "1000");


let currency = "btc"


var tokenapi = "";

var target_multi = 1.01;
var basebet = 0;
var amount = basebet;
var running = true;
var nextbet = 0;
var win = false;

var bethigh = false;
var chance = 49.5

var losestreak = 0;
var winstreak  = 0;
var highest_streak = [0];
var lowest_streak = [0];
var current_balance = 0;
var balance = 0;
var betcount = 0;
var bets = 0
var wins = 0;
var losses = 0;
var wagered = 0;
var profit_total = 0;
var highest_profit = [0];
var lowest_profit = [0];
var highest_bet = [0];
var currentstreak = 0;
var profit = 0;
var previousbet = 0;
var currentprofit = 0;
var current_profit = 0;
var game = "dice";

var lastBet = {'amount': 0, 'win': false, 'Roll': 0, 'payoutMultiplier': 0, 'chance': 0, 'target': 0, 'payout': 0, 'percent': 0, 'targetNumber': 0}

var dps = []
var chart = ''
var color = "#f72a42"

var started_bal = 0;

var condition = "below";

dobet = function(){}

var stopped = true;
var bet_found = false;
var run_clicked = false;
var bet_placed = false;
var starting_done = false;
var cashedoutauto = false;
var bet_has_been_made = false;

let speedmode = false;

gamelist = {}
makecount = 0
id = {}
betidentifier = "identity01"
bgChart = "#f0eded"

//let websocket = ""

function startScoket(){
	let websocket = new WebSocket('wss://' + window.location.host + '/_api/websockets', 'graphql-transport-ws');
    
  websocket.onopen = () => {
 
    websocket.send(JSON.stringify({"type":"connection_init","payload":{"accessToken":getCookie("session"),"language":"en","lockdownToken":"s5MNWtjTM5TvCMkAzxov"}}));
  };

  
  websocket.onmessage = (event) => {
    
			const obj = JSON.parse(event.data);		
			if (obj.hasOwnProperty("payload")) {
				if (obj.payload.data.hasOwnProperty("availableBalances")) {
					if(obj.payload.data.availableBalances.balance.currency == currency){
						var balan = document.getElementById("wdbBalance");
						balan.innerHTML = obj.payload.data.availableBalances.balance.amount.toFixed(8);
						current_balance = obj.payload.data.availableBalances.balance.amount;
						balance = current_balance;
					}
				} 
				if(obj.payload.data.hasOwnProperty("crash") && document.getElementById("gameselect").value == "crash" ){
					previousbet = amount;
					
					if(obj.payload.data.crash.event.status == "in_progress"){
							document.getElementById("result").innerHTML = obj.payload.data.crash.event.multiplier.toFixed(2) + 'x'
					}
					
					
						if(obj.payload.data.crash.event.status == "crash"){
							document.getElementById("result").innerHTML = "Crash at " + obj.payload.data.crash.event.multiplier.toFixed(2);
							//var prog = document.getElementById("progress");
							//var elem = document.getElementById("myBar");
							//prog.style.display = "none";
							//elem.style.width = "0%";
							betcount++;
							bets = betcount;
							lastBet.crashAt = obj.payload.data.crash.event.multiplier;
							if(cashedoutauto == false && bet_has_been_made){
								bet_has_been_made = false;
								color = "#f72a42"
								current_profit = -parseFloat(amount);
								profit_total += -parseFloat(amount);
								wagered += parseFloat(amount);
								losses++;
								losestreak++
								winstreak = 0;
								lastBet.payoutMultiplier = 0;
								win = false;
								lastBet.win = false;
								lastBet.amount = previousbet;
								lastBet.payoutMultiplier = 0;
								
								var row = document.createElement("tr");
							
								
								row.style.background = "#FFC0CB";
					
								
								var tdbets = document.createElement("td");
								var tdamount = document.createElement("td");
								//var tdhigh = document.createElement("td");
								var tdTargetChance = document.createElement("td");
								var tdRollChance= document.createElement("td");
								var tdProfit = document.createElement("td");
								var tdPayout = document.createElement("td");
								var tdTargetNumber = document.createElement("td");
								var tdRollNumber = document.createElement("td");
								var tdNonce = document.createElement("td");
								var tdBetID = document.createElement("td");
								
								tdbets.innerHTML = wins + losses;
								tdamount.innerHTML = amount.toFixed(8)
								
								/*var tdcheck = document.createElement("input");
								tdcheck.type = "checkbox";
								tdcheck.name = "checked";
								tdcheck.checked = "checked";
								tdcheck.id = "checked";*/
								
								//tdhigh.appendChild(tdcheck);
								tdTargetChance.innerHTML = (99 / target_multi).toFixed(4)
								tdRollChance.innerHTML = (99 / lastBet.crashAt).toFixed(4)
								tdProfit.innerHTML = current_profit.toFixed(8)
								tdTargetNumber.innerHTML = ">" + target_multi.toFixed(4)
								lastBet.targetNumber = target_multi;
								tdRollNumber.innerHTML = lastBet.crashAt.toFixed(4);
								tdNonce.innerHTML = localStorage.getItem("gameselect");
								tdBetID.innerHTML = "-";
								tdPayout.innerHTML = (0).toFixed(8);
								
								row.appendChild(tdbets);
								row.appendChild(tdamount);
								//row.appendChild(tdhigh);
								row.appendChild(tdTargetNumber);
								row.appendChild(tdRollNumber);
								row.appendChild(tdTargetChance);
								row.appendChild(tdRollChance);
								row.appendChild(tdProfit);
								row.appendChild(tdPayout);
								row.appendChild(tdNonce);
								row.appendChild(tdBetID);
								var table = document.getElementById("wdbHistory");							
								table.prepend(row);
				
								if (table.rows.length > 50)
								{
									table.deleteRow(table.rows.length - 1);
								}
							
								if(winstreak > losestreak){
									currentstreak = winstreak;
								} else {
									currentstreak = -losestreak;
								}
							
								if(highest_bet[highest_bet.length-1] < amount){
									highest_bet.pop();
									highest_bet.push(amount);
								}
								if(highest_profit[highest_profit.length-1] < profit_total){
									highest_profit.pop();
									highest_profit.push(profit_total);
								}
								if(lowest_profit[lowest_profit.length-1] > profit_total){
									lowest_profit.pop();
									lowest_profit.push(profit_total);
								}
								if(highest_streak[highest_streak.length-1] < currentstreak){
									highest_streak.pop();
									highest_streak.push(currentstreak);
								}
								if(lowest_streak[lowest_streak.length-1] > currentstreak){
									lowest_streak.pop();
									lowest_streak.push(currentstreak);
								}

								balance = current_balance;
								profit = profit_total;
								previousbet = amount;
								currentprofit = current_profit;
								
								
								
								updateChart();
								
								document.getElementById("wdbProfit").innerHTML = profit_total.toFixed(8);
								document.getElementById("wdbWagered").innerHTML = wagered.toFixed(8);
								document.getElementById("wdbHighProfit").innerHTML = Math.max.apply(null, highest_profit).toFixed(8);
								document.getElementById("wdbHighLose").innerHTML = Math.min.apply(null, lowest_profit).toFixed(8);
								document.getElementById("wdbHighBet").innerHTML = Math.max.apply(null, highest_bet).toFixed(8);
								document.getElementById("wdbBets").innerHTML = wins + " / " + losses + " / " + bets;
								document.getElementById("wdbHighLowStreak").innerHTML = Math.max.apply(null, highest_streak) + " / " + Math.min.apply(null, lowest_streak) + " / " + currentstreak;
								document.getElementById("wdbPercentProfit").innerHTML = (profit_total / started_bal * 100).toFixed(2);
								document.getElementById("wdbPercentWagered").innerHTML = (wagered / started_bal).toFixed(2);
								
								if(profit_total < 0){
										document.getElementById("wdbProfit").style.color = "#f72a42"
										document.getElementById("wdbPercentProfit").style.color = "#f72a42"
								} else {
									if(document.getElementById("themebot").value == "dark"){
										document.getElementById("wdbProfit").style.color = "#05f711"
										document.getElementById("wdbPercentProfit").style.color = "#05f711"
									} else {
										document.getElementById("wdbProfit").style.color = "green"
										document.getElementById("wdbPercentProfit").style.color = "green"
									}
								}
								
								
								//amount = nextbet;
								
								lastBet.amount = previousbet;
								lastBet.target = target_multi;
								
								
								dobet();
								amount = nextbet;
								target_multi = 99 / chance;
												
								crashbet(amount, target_multi);
								
							} else if (cashedoutauto && bet_has_been_made){
								bet_has_been_made = false;
								color = "#05f711";
								bet_found = true;
								win = true;
								lastBet.win = true;
								lastBet.amount = previousbet;
								lastBet.payoutMultiplier = target_multi;
								
								//win
								winstreak++;
								wins++;
								losestreak = 0;
							
								current_profit = parseFloat(amount * target_multi) - parseFloat(amount);
								profit_total += parseFloat(amount * target_multi) - parseFloat(amount);
								wagered += parseFloat(amount);
								
								var row = document.createElement("tr");
							
							
							
								row.style.background = "#91F190";
							
							
								var tdbets = document.createElement("td");
								var tdamount = document.createElement("td");
								//var tdhigh = document.createElement("td");
								var tdTargetChance = document.createElement("td");
								var tdRollChance= document.createElement("td");
								var tdProfit = document.createElement("td");
								var tdPayout = document.createElement("td");
								var tdTargetNumber = document.createElement("td");
								var tdRollNumber = document.createElement("td");
								var tdNonce = document.createElement("td");
								var tdBetID = document.createElement("td");
								
								tdbets.innerHTML = wins + losses;
								tdamount.innerHTML = amount.toFixed(8)
								
								/*var tdcheck = document.createElement("input");
								tdcheck.type = "checkbox";
								tdcheck.name = "checked";
								tdcheck.checked = "checked";
								tdcheck.id = "checked";*/
								
								//tdhigh.appendChild(tdcheck);
								tdTargetChance.innerHTML = (99 / target_multi).toFixed(4)
								tdRollChance.innerHTML = (99 / lastBet.crashAt).toFixed(4)
								tdProfit.innerHTML = current_profit.toFixed(8)
								tdTargetNumber.innerHTML = ">" + target_multi.toFixed(4)
								//lastBet.targetNumber = obj.payload.data.crash.event.cashoutAt;
								tdRollNumber.innerHTML = lastBet.crashAt.toFixed(4);
								tdNonce.innerHTML = localStorage.getItem("gameselect");
								tdBetID.innerHTML = obj.payload.data.crash.event.id;
								tdPayout.innerHTML = parseFloat(amount * target_multi).toFixed(8);
								
								row.appendChild(tdbets);
								row.appendChild(tdamount);
								//row.appendChild(tdhigh);
								row.appendChild(tdTargetNumber);
								row.appendChild(tdRollNumber);
								row.appendChild(tdTargetChance);
								row.appendChild(tdRollChance);
								row.appendChild(tdProfit);
								row.appendChild(tdPayout);
								row.appendChild(tdNonce);
								row.appendChild(tdBetID);
								var table = document.getElementById("wdbHistory");							
								table.prepend(row);
				
								if (table.rows.length > 50)
								{
									table.deleteRow(table.rows.length - 1);
								}
							
								if(winstreak > losestreak){
									currentstreak = winstreak;
								} else {
									currentstreak = -losestreak;
								}
							
								if(highest_bet[highest_bet.length-1] < amount){
									highest_bet.pop();
									highest_bet.push(amount);
								}
								if(highest_profit[highest_profit.length-1] < profit_total){
									highest_profit.pop();
									highest_profit.push(profit_total);
								}
								if(lowest_profit[lowest_profit.length-1] > profit_total){
									lowest_profit.pop();
									lowest_profit.push(profit_total);
								}
								if(highest_streak[highest_streak.length-1] < currentstreak){
									highest_streak.pop();
									highest_streak.push(currentstreak);
								}
								if(lowest_streak[lowest_streak.length-1] > currentstreak){
									lowest_streak.pop();
									lowest_streak.push(currentstreak);
								}

								balance = current_balance;
								profit = profit_total;
								previousbet = amount;
								currentprofit = current_profit;
								
								
								
								updateChart();
								
								document.getElementById("wdbProfit").innerHTML = profit_total.toFixed(8);
								document.getElementById("wdbWagered").innerHTML = wagered.toFixed(8);
								document.getElementById("wdbHighProfit").innerHTML = Math.max.apply(null, highest_profit).toFixed(8);
								document.getElementById("wdbHighLose").innerHTML = Math.min.apply(null, lowest_profit).toFixed(8);
								document.getElementById("wdbHighBet").innerHTML = Math.max.apply(null, highest_bet).toFixed(8);
								document.getElementById("wdbBets").innerHTML = wins + " / " + losses + " / " + bets;
								document.getElementById("wdbHighLowStreak").innerHTML = Math.max.apply(null, highest_streak) + " / " + Math.min.apply(null, lowest_streak) + " / " + currentstreak;
								document.getElementById("wdbPercentProfit").innerHTML = (profit_total / started_bal * 100).toFixed(2);
								document.getElementById("wdbPercentWagered").innerHTML = (wagered / started_bal).toFixed(2);
							
							
								if(profit_total < 0){
										document.getElementById("wdbProfit").style.color = "#f72a42"
										document.getElementById("wdbPercentProfit").style.color = "#f72a42"
								} else {
										if(document.getElementById("themebot").value == "dark"){
										document.getElementById("wdbProfit").style.color = "#05f711"
										document.getElementById("wdbPercentProfit").style.color = "#05f711"
									} else {
										document.getElementById("wdbProfit").style.color = "green"
										document.getElementById("wdbPercentProfit").style.color = "green"
									}
								}
								
								//amount = nextbet;
								
								lastBet.amount = previousbet;
								lastBet.target = target_multi;

								dobet();
	
								amount = nextbet;
								target_multi = 99 / chance;
								
								crashbet(amount, target_multi);
							
							}
	
						}
					
					
					
				
						if(obj.payload.data.crash.event.result == "autocashout")
						{
							cashedoutauto = true;
						} 

									

						if(obj.payload.data.crash.event.status == "starting" && bet_placed == false){

							bet_placed = true;
							
							
							//win = false;
							//lastBet.win = false;
							//document.getElementById("listed").innerHTML = "";
							

							
							
						}						
														
						
					
					
						if(obj.payload.data.crash.event.status == "pending"){
							
							bet_placed = false;
							bet_found = false;
							starting_done = false;
							lastBet.win = false;
							cashedoutauto = false;
							win = false;
							
						}
			
								
			}
			if(obj.payload.data.hasOwnProperty("slide") && document.getElementById("gameselect").value == "slide"){
			
					if(obj.payload.data.slide.event.status == "result" ){
							previousbet = amount;
							document.getElementById("result").innerHTML = "Slide at " + obj.payload.data.slide.event.multiplier.toFixed(2);
							//var prog = document.getElementById("progress");
							//var elem = document.getElementById("myBar");
							//prog.style.display = "none";
							//elem.style.width = "0%";
							if(run_clicked == true){
								betcount++;
								bets = betcount;
							}
							
							lastBet.crashAt = obj.payload.data.slide.event.multiplier;
							var row = document.createElement("tr");
							//betcount++;
							row.style.background = "#e8e9eb";
							win = null
							lastBet.win = null
							
							var tdbets = document.createElement("td");
							var tdamount = document.createElement("td");
							//var tdhigh = document.createElement("td");
							var tdTargetChance = document.createElement("td");
							var tdRollChance= document.createElement("td");
							var tdProfit = document.createElement("td");
							var tdPayout = document.createElement("td");
							var tdTargetNumber = document.createElement("td");
							var tdRollNumber = document.createElement("td");
							var tdNonce = document.createElement("td");
							var tdBetID = document.createElement("td");
							
							tdbets.innerHTML = betcount;
							tdamount.innerHTML = "SlideAt"
							
							/*var tdcheck = document.createElement("input");
							tdcheck.type = "checkbox";
							tdcheck.name = "checked";
							tdcheck.checked = "checked";
							tdcheck.id = "checked";*/
							
							//tdhigh.appendChild(tdcheck);
							tdTargetChance.innerHTML = ""
							tdRollChance.innerHTML = (99 / lastBet.crashAt).toFixed(4);
							tdProfit.innerHTML = "-"
							tdTargetNumber.innerHTML = "-"
							//lastBet.targetNumber = target_multi;
							tdRollNumber.innerHTML = lastBet.crashAt;
							tdNonce.innerHTML = localStorage.getItem("gameselect");
							tdBetID.innerHTML = "-";
							tdPayout.innerHTML = "-";
							
							row.appendChild(tdbets);
							row.appendChild(tdamount);
							//row.appendChild(tdhigh);
							row.appendChild(tdTargetNumber);
							row.appendChild(tdRollNumber);
							row.appendChild(tdTargetChance);
							row.appendChild(tdRollChance);
							row.appendChild(tdProfit);
							row.appendChild(tdPayout);
							row.appendChild(tdNonce);
							row.appendChild(tdBetID);
							var table = document.getElementById("wdbHistory");							
							table.prepend(row);
			
							if (table.rows.length > 50)
							{
								table.deleteRow(table.rows.length - 1);
							}
						
					}
					
					
					
					
						if(obj.payload.data.slide.event.status == "result"){
							var multiplierOut = 0;
							var nicname = "";
							var crpamount = 0;
							var payout = 0;
							
							var str_amount = crpamount;
							var str_payout = payout.toFixed(8);
							var str_payoutMultiplier = multiplierOut.toFixed(2);
							var str_currency = currency;
							var str_game = "";
							var str_user = "poky1084";
							var str_updatedAt = "2023"
							var current_result = multiplierOut.toFixed(2);
							var multiplierTarget = multiplierOut.toFixed(2);
							
							
							

							
							
														
						} 
					
						
					
						if(obj.payload.data.slide.event.__typename == "MultiplayerSlideBet"){
						
							if(obj.payload.data.slide.event.result == "autocashout"){
								color = "#05f711";
								bet_found = true;
								win = true;
								lastBet.win = true;
								lastBet.amount = previousbet;
								lastBet.payoutMultiplier = obj.payload.data.slide.event.payoutMultiplier;
								
								//obj2 = (99 / obj.payload.data.slide.event.cashoutAt)
								//object1 = { obj2: win }
								
								id[gamelist[obj.payload.data.slide.event.id]] = win
								//win
								winstreak++;
								wins++;
								losestreak = 0;
							    //starting_done = true;
								current_profit = parseFloat(obj.payload.data.slide.event.payout) - parseFloat(obj.payload.data.slide.event.amount);
								profit_total += parseFloat(obj.payload.data.slide.event.payout) - parseFloat(obj.payload.data.slide.event.amount);
								wagered += parseFloat(obj.payload.data.slide.event.amount);
								
								var row = document.createElement("tr");

								row.style.background = "#91F190";

								var tdbets = document.createElement("td");
								var tdamount = document.createElement("td");
								//var tdhigh = document.createElement("td");
								var tdTargetChance = document.createElement("td");
								var tdRollChance= document.createElement("td");
								var tdProfit = document.createElement("td");
								var tdPayout = document.createElement("td");
								var tdTargetNumber = document.createElement("td");
								var tdRollNumber = document.createElement("td");
								var tdNonce = document.createElement("td");
								var tdBetID = document.createElement("td");
								
								tdbets.innerHTML = betcount;
								tdamount.innerHTML = obj.payload.data.slide.event.amount.toFixed(8)
								
								/*var tdcheck = document.createElement("input");
								tdcheck.type = "checkbox";
								tdcheck.name = "checked";
								tdcheck.checked = "checked";
								tdcheck.id = "checked";*/
								
								//tdhigh.appendChild(tdcheck);
								tdTargetChance.innerHTML = (99 / obj.payload.data.slide.event.cashoutAt).toFixed(4)
								tdRollChance.innerHTML = (99 / lastBet.crashAt).toFixed(4);
								tdProfit.innerHTML = current_profit.toFixed(8)
								tdTargetNumber.innerHTML = ">" + obj.payload.data.slide.event.cashoutAt.toFixed(4)
								//lastBet.targetNumber = target_multi;
								tdRollNumber.innerHTML = lastBet.crashAt;
								tdNonce.innerHTML = localStorage.getItem("gameselect");
								tdBetID.innerHTML = obj.payload.data.slide.event.gameId;
								tdPayout.innerHTML = obj.payload.data.slide.event.payout.toFixed(8);
								
								row.appendChild(tdbets);
								row.appendChild(tdamount);
								//row.appendChild(tdhigh);
								row.appendChild(tdTargetNumber);
								row.appendChild(tdRollNumber);
								row.appendChild(tdTargetChance);
								row.appendChild(tdRollChance);
								row.appendChild(tdProfit);
								row.appendChild(tdPayout);
								row.appendChild(tdNonce);
								row.appendChild(tdBetID);
								var table = document.getElementById("wdbHistory");							
								
								
								table.prepend(row);
								
				
								if (table.rows.length > 50)
								{
									table.deleteRow(table.rows.length - 1);
								}
							
								if(winstreak > losestreak){
									currentstreak = winstreak;
								} else {
									currentstreak = -losestreak;
								}
							
								if(highest_bet[highest_bet.length-1] < amount){
									highest_bet.pop();
									highest_bet.push(amount);
								}
								if(highest_profit[highest_profit.length-1] < profit_total){
									highest_profit.pop();
									highest_profit.push(profit_total);
								}
								if(lowest_profit[lowest_profit.length-1] > profit_total){
									lowest_profit.pop();
									lowest_profit.push(profit_total);
								}
								if(highest_streak[highest_streak.length-1] < currentstreak){
									highest_streak.pop();
									highest_streak.push(currentstreak);
								}
								if(lowest_streak[lowest_streak.length-1] > currentstreak){
									lowest_streak.pop();
									lowest_streak.push(currentstreak);
								}

								balance = current_balance;
								profit = profit_total;
								previousbet = amount;
								currentprofit = current_profit;
		
								
								
								updateChart();
													
								document.getElementById("wdbProfit").innerHTML = profit_total.toFixed(8);
								document.getElementById("wdbWagered").innerHTML = wagered.toFixed(8);
								document.getElementById("wdbHighProfit").innerHTML = Math.max.apply(null, highest_profit).toFixed(8);
								document.getElementById("wdbHighLose").innerHTML = Math.min.apply(null, lowest_profit).toFixed(8);
								document.getElementById("wdbHighBet").innerHTML = Math.max.apply(null, highest_bet).toFixed(8);
								document.getElementById("wdbBets").innerHTML = wins + " / " + losses + " / " + bets;
								document.getElementById("wdbHighLowStreak").innerHTML = Math.max.apply(null, highest_streak) + " / " + Math.min.apply(null, lowest_streak) + " / " + currentstreak;
								document.getElementById("wdbPercentProfit").innerHTML = (profit_total / started_bal * 100).toFixed(2);
								document.getElementById("wdbPercentWagered").innerHTML = (wagered / started_bal).toFixed(2);
								
								if(profit_total < 0){
										document.getElementById("wdbProfit").style.color = "#f72a42"
										document.getElementById("wdbPercentProfit").style.color = "#f72a42"
								} else {
										if(document.getElementById("themebot").value == "dark"){
										document.getElementById("wdbProfit").style.color = "#05f711"
										document.getElementById("wdbPercentProfit").style.color = "#05f711"
									} else {
										document.getElementById("wdbProfit").style.color = "green"
										document.getElementById("wdbPercentProfit").style.color = "green"
									}
								}
								
								
							} else if (obj.payload.data.slide.event.result == "busted"){
								color = "#f72a42"
								losses++;
								losestreak++
								winstreak = 0;
								lastBet.amount = previousbet;
								win = false;
								lastBet.win = false;
								id[gamelist[obj.payload.data.slide.event.id]] = win
								//obj2 = (99 / obj.payload.data.slide.event.cashoutAt)
								//object1 = { obj2: win }
								
							
								current_profit = parseFloat(obj.payload.data.slide.event.payout) - parseFloat(obj.payload.data.slide.event.amount);
								profit_total += parseFloat(obj.payload.data.slide.event.payout) - parseFloat(obj.payload.data.slide.event.amount);
								wagered += parseFloat(obj.payload.data.slide.event.amount);
								
								var row = document.createElement("tr");
								
								
								row.style.background = "#FFC0CB";
								
								var tdbets = document.createElement("td");
								var tdamount = document.createElement("td");
								//var tdhigh = document.createElement("td");
								var tdTargetChance = document.createElement("td");
								var tdRollChance= document.createElement("td");
								var tdProfit = document.createElement("td");
								var tdPayout = document.createElement("td");
								var tdTargetNumber = document.createElement("td");
								var tdRollNumber = document.createElement("td");
								var tdNonce = document.createElement("td");
								var tdBetID = document.createElement("td");
								
								tdbets.innerHTML = betcount;
								tdamount.innerHTML = obj.payload.data.slide.event.amount.toFixed(8)
								
								/*var tdcheck = document.createElement("input");
								tdcheck.type = "checkbox";
								tdcheck.name = "checked";
								tdcheck.checked = "checked";
								tdcheck.id = "checked";*/
								
								//tdhigh.appendChild(tdcheck);
								tdTargetChance.innerHTML = (99 / obj.payload.data.slide.event.cashoutAt).toFixed(4)
								tdRollChance.innerHTML = (99 / lastBet.crashAt).toFixed(4);
								tdProfit.innerHTML = current_profit.toFixed(8)
								tdTargetNumber.innerHTML = ">" + obj.payload.data.slide.event.cashoutAt.toFixed(4)
								//lastBet.targetNumber = target_multi;
								tdRollNumber.innerHTML = lastBet.crashAt;
								tdNonce.innerHTML = localStorage.getItem("gameselect");
								tdBetID.innerHTML = obj.payload.data.slide.event.gameId;
								tdPayout.innerHTML = obj.payload.data.slide.event.payout.toFixed(8);
								
								row.appendChild(tdbets);
								row.appendChild(tdamount);
								//row.appendChild(tdhigh);
								row.appendChild(tdTargetNumber);
								row.appendChild(tdRollNumber);
								row.appendChild(tdTargetChance);
								row.appendChild(tdRollChance);
								row.appendChild(tdProfit);
								row.appendChild(tdPayout);
								row.appendChild(tdNonce);
								row.appendChild(tdBetID);
								var table = document.getElementById("wdbHistory");							
								
								
								table.prepend(row);
								
				
								if (table.rows.length > 50)
								{
									table.deleteRow(table.rows.length - 1);
								}
							
								if(winstreak > losestreak){
									currentstreak = winstreak;
								} else {
									currentstreak = -losestreak;
								}
							
								if(highest_bet[highest_bet.length-1] < amount){
									highest_bet.pop();
									highest_bet.push(amount);
								}
								if(highest_profit[highest_profit.length-1] < profit_total){
									highest_profit.pop();
									highest_profit.push(profit_total);
								}
								if(lowest_profit[lowest_profit.length-1] > profit_total){
									lowest_profit.pop();
									lowest_profit.push(profit_total);
								}
								if(highest_streak[highest_streak.length-1] < currentstreak){
									highest_streak.pop();
									highest_streak.push(currentstreak);
								}
								if(lowest_streak[lowest_streak.length-1] > currentstreak){
									lowest_streak.pop();
									lowest_streak.push(currentstreak);
								}

								balance = current_balance;
								profit = profit_total;
								//previousbet = amount;
								currentprofit = current_profit;
			
								
								
								updateChart();
								
								document.getElementById("wdbProfit").innerHTML = profit_total.toFixed(8);
								document.getElementById("wdbWagered").innerHTML = wagered.toFixed(8);
								document.getElementById("wdbHighProfit").innerHTML = Math.max.apply(null, highest_profit).toFixed(8);
								document.getElementById("wdbHighLose").innerHTML = Math.min.apply(null, lowest_profit).toFixed(8);
								document.getElementById("wdbHighBet").innerHTML = Math.max.apply(null, highest_bet).toFixed(8);
								document.getElementById("wdbBets").innerHTML = wins + " / " + losses + " / " + bets;
								document.getElementById("wdbHighLowStreak").innerHTML = Math.max.apply(null, highest_streak) + " / " + Math.min.apply(null, lowest_streak) + " / " + currentstreak;
								document.getElementById("wdbPercentProfit").innerHTML = (profit_total / started_bal * 100).toFixed(2);
								document.getElementById("wdbPercentWagered").innerHTML = (wagered / started_bal).toFixed(2);
													
								if(profit_total < 0){
										document.getElementById("wdbProfit").style.color = "#f72a42"
										document.getElementById("wdbPercentProfit").style.color = "#f72a42"
								} else {
										if(document.getElementById("themebot").value == "dark"){
										document.getElementById("wdbProfit").style.color = "#05f711"
										document.getElementById("wdbPercentProfit").style.color = "#05f711"
									} else {
										document.getElementById("wdbProfit").style.color = "green"
										document.getElementById("wdbPercentProfit").style.color = "green"
									}
								}
								
							}
						}
						
							

	
							
	
				
						
						
					
						if(obj.payload.data.slide.event.status == "starting" && bet_has_been_made == false){
							document.getElementById("result").innerHTML = ""
							bet_has_been_made = true;
							gamelist = {};
							//starting_done = true;
							if(running == true){
								
								if(win == null){
									win = true;
									lastBet.win = true;
								}
								//document.getElementById("listed").innerHTML = "";
								
		
								
								
								lastBet.amount = previousbet;
								lastBet.target = target_multi;
								amount = nextbet;
								target_multi = 99 / chance;
								
		
								dobet();
								

							}
										
							//slidebet(amount, target_multi);
						}
					
					
						if(obj.payload.data.slide.event.status == "pending"){
							bet_placed = false;
							bet_found = false;
							starting_done = false;
							lastBet.win = false;
							bet_has_been_made = false;
							win = false;
							//winid = {};
							
						}
									
					}
			}
				
  if(event.data.includes("connection_ack")){
  
		websocket.send(JSON.stringify({"id":"e0f09352-0cc1-4485-8acf-ca53caccb5a8","type":"subscribe","payload":{"query":"subscription AvailableBalances {\n  availableBalances {\n    amount\n    identifier\n    balance {\n      amount\n      currency\n    }\n  }\n}\n"}}));
	
	 setTimeout(() => {
  websocket.send(JSON.stringify({"id":"3c099e10-dd7d-4a93-a86c-f2fe0082a6f3","type":"subscribe","payload":{"query":"subscription Crash {\n  crash {\n    event {\n      ... on MultiplayerCrash {\n        ...MultiplayerCrash\n      }\n      ... on MultiplayerCrashBet {\n        ...MultiplayerCrashBet\n      }\n      __typename\n    }\n  }\n}\n\nfragment MultiplayerCrash on MultiplayerCrash {\n  id\n  status\n  multiplier\n  startTime\n  nextRoundIn\n  crashpoint\n  elapsed\n  timestamp\n  cashedIn {\n    id\n    user {\n      id\n      name\n    }\n    payoutMultiplier\n    gameId\n    amount\n    payout\n    currency\n    result\n    updatedAt\n    cashoutAt\n    btcAmount: amount(currency: btc)\n  }\n  cashedOut {\n    id\n    user {\n      id\n      name\n    }\n    payoutMultiplier\n    gameId\n    amount\n    payout\n    currency\n    result\n    updatedAt\n    cashoutAt\n    btcAmount: amount(currency: btc)\n  }\n}\n\nfragment MultiplayerCrashBet on MultiplayerCrashBet {\n  id\n  user {\n    id\n    name\n  }\n  payoutMultiplier\n  gameId\n  amount\n  payout\n  currency\n  result\n  updatedAt\n  cashoutAt\n  btcAmount: amount(currency: btc)\n}\n"}}));
  }, "1000");
  
	setTimeout(() => {
  websocket.send(JSON.stringify({"id":"dfd28075-20ec-455b-b652-27a1a9d93e05","type":"subscribe","payload":{"query":"subscription slide {\n  slide {\n    event {\n      __typename\n      ... on MultiplayerSlide {\n        ...MultiplayerSlide\n      }\n      ... on MultiplayerSlideBet {\n        id\n        user {\n          id\n          name\n        }\n        payoutMultiplier\n        gameId\n        amount\n        payout\n        currency\n        result\n        updatedAt\n        cashoutAt\n        btcAmount: amount(currency: btc)\n      }\n    }\n  }\n}\n\nfragment MultiplayerSlide on MultiplayerSlide {\n  __typename\n  id\n  status\n  multiplier\n  startTime\n  nextRoundIn\n  elapsed\n  timestamp\n  cashedIn {\n    id\n    user {\n      id\n      name\n      preferenceHideBets\n    }\n    payoutMultiplier\n    gameId\n    amount\n    payout\n    currency\n    result\n    updatedAt\n    cashoutAt\n    btcAmount: amount(currency: btc)\n  }\n  numbers\n}\n"}}))
  }, "1000");
  
	}
  
  }
  
  websocket.onerror = (error) => {
    
	startScoket();
	
  };

  
  websocket.onclose = (event) => {

	startScoket();
	
  };
}

function makebet(n, y, betidentifier){
	if(document.getElementById("gameselect").value == "slide"){
		makecount++;
		slidebet(n, y, betidentifier)
	}
}
function dataslide(json, betidentifier){
	if(json.data.hasOwnProperty("multiplayerSlideBet")){
		//console.log(json.data.multiplayerSlideBet.id)
		gamelist[json.data.multiplayerSlideBet.id] = betidentifier
		log("Slide bet placed. ID:" + betidentifier)
		if(json.data.multiplayerCrashBet.hasOwnProperty("slideResult")){
			if(json.data.multiplayerCrashBet.slideResult == "pending"){
				bet_has_been_made = true;				
			}
		}
	}
}


function datacrash(json){
	if(json.data.hasOwnProperty("multiplayerCrashBet")){
		if(json.data.multiplayerCrashBet.hasOwnProperty("result")){
			if(json.data.multiplayerCrashBet.result == "pending"){
				bet_has_been_made = true;
			}
		}
	}
}



function crashbet(amount, target_multi){
	
	
	var body = {
		variables:{
        "cashoutAt": target_multi,
        "amount": amount,
        "currency": document.getElementById('wdbMenuCoin').value
		},
		query:"mutation MultiplayerCrashBet($amount: Float!, $currency: CurrencyEnum!, $cashoutAt: Float!) {\n  multiplayerCrashBet(amount: $amount, currency: $currency, cashoutAt: $cashoutAt) {\n    ...MultiplayerCrashBet\n    user {\n      id\n      activeCrashBet {\n        ...MultiplayerCrashBet\n      }\n    }\n  }\n}\n\nfragment MultiplayerCrashBet on MultiplayerCrashBet {\n  id\n  user {\n    id\n    name\n  }\n  payoutMultiplier\n  gameId\n  amount\n  payout\n  currency\n  result\n  updatedAt\n  cashoutAt\n  btcAmount: amount(currency: btc)\n}\n"		}
		
	fetch('https://' +  window.location.host + '/_api/graphql', {
		method: 'post',
		body:    JSON.stringify(body),
		headers: { 'Content-Type': 'application/json','x-access-token': getCookie("session")},
	})
	.then(res => res.json())
	.then(json => datacrash(json))
	.catch(function(err, json) {
		//console.log(err);
		if(running == true)
		{
			setTimeout(() => {
				crashbet(amount, target_multi)							
			}, "2000");
			
		}
	});
	
}

function slidebet(amount, chance, betidentifier){
	var body = {
		variables:{
        "identifier": randomString(21),
        "cashoutAt": (99 / chance),
        "amount": amount,
        "currency": document.getElementById('wdbMenuCoin').value
		},
		query:"mutation MultiplayerSlideBet($amount: Float!, $currency: CurrencyEnum!, $cashoutAt: Float!, $identifier: String!) {\n  multiplayerSlideBet(\n    amount: $amount\n    currency: $currency\n    cashoutAt: $cashoutAt\n    identifier: $identifier\n  ) {\n    __typename\n    ...MultiplayerSlideBet\n    user {\n      id\n      activeSlideBet {\n        ...MultiplayerSlideBet\n      }\n    }\n  }\n}\n\nfragment MultiplayerSlideBet on MultiplayerSlideBet {\n  id\n  user {\n    id\n    name\n    preferenceHideBets\n  }\n  payoutMultiplier\n  gameId\n  amount\n  payout\n  currency\n  slideResult: result\n  updatedAt\n  cashoutAt\n  btcAmount: amount(currency: btc)\n  active\n  createdAt\n}\n"		}
		
	
	fetch('https://' +  window.location.host + '/_api/graphql', {
		method: 'post',
		body:    JSON.stringify(body),
		headers: { 'Content-Type': 'application/json','x-access-token': getCookie("session")},
	})
	.then(res => res.json())
	.then(json => dataslide(json, betidentifier))
	.catch(function(err, json) {
		//console.log(err);
		if(running == true)
		{
			setTimeout(() => {
				//slidebet(amount, target_multi)							
			}, "2000");
			
		}
	});
	
}

function vault(e){

 var client = e;
 if(client == undefined){
	return log("Please specify vault amount.")
 }
var body = {
		operationName:"CreateVaultDeposit",
		variables:{
        "currency": document.getElementById('wdbMenuCoin').value,
        "amount": e
		},
		query:"mutation CreateVaultDeposit($currency: CurrencyEnum!, $amount: Float!) {\n  createVaultDeposit(currency: $currency, amount: $amount) {\n    id\n    amount\n    currency\n    user {\n      id\n      balances {\n        available {\n          amount\n          currency\n          __typename\n        }\n        vault {\n          amount\n          currency\n          __typename\n        }\n        __typename\n      }\n      __typename\n    }\n    __typename\n  }\n}\n"		}
	
	fetch('https://' +   window.location.host + '/_api/graphql', {
		method: 'post',
		body:    JSON.stringify(body),
		headers: { 'Content-Type': 'application/json','x-access-token': getCookie("session")},
	})
	.then(res => res.json())
	.then(json => outvault(json))
	.catch(function(err, json) {
		//console.log(err);
		setTimeout(() => {
			//initUser();							
		}, "2000");
	});
}

function outvault(json){
	if(json.errors != undefined){
		log(json.errors[0].errorType);
	} else {
		log("Deposited " + json.data.createVaultDeposit.amount.toFixed(10) + " to vault.")
	}

}

function log(val){
	var table2 = document.getElementById("wdbLog");
	var row = document.createElement("tr");
	var tdtext = document.createElement("td");
	tdtext.innerHTML = val
	row.appendChild(tdtext);
	table2.prepend(row);
	
	if (table2.rows.length > 100)
	{
		table2.deleteRow(table2.rows.length - 1);
	}
}

function stop(){
	running = false;
	run_clicked = false;
	stopped = true;
	dobet = function() {}
	btnStart.disabled = false; 
}

function resetAll(){
 resetstats();
 resetChart();
 deleteTable();
 deleteLogs();
}

function deleteLogs(){
	document.getElementById("wdbLog").innerHTML = "";
	for(var i = 0; i < 10; i++){
		var table2 = document.getElementById("wdbLog");
		var row = document.createElement("tr");
		var tdtext = document.createElement("td");
		tdtext.innerHTML = "‏‏‎ ‎"
		row.appendChild(tdtext);
		table2.prepend(row)
	}
}

function leaveChange(control) {
    currency = control.value
    localStorage.setItem("currenc", currency);
	userBalances();
}

function gameChange(control) {
    let gamevalue = control.value
    localStorage.setItem("gameselect", gamevalue);
	game = document.getElementById("gameselect").value;
	stop();
	document.getElementById("result").innerHTML = ""
}

function themeChange(control) {
    let theme = control.value
    localStorage.setItem("themebot", theme);
	if(theme == "dark"){
		bgChart = "#383838"
		drawChart();
		document.getElementById("body").style.background="#383838";
		document.getElementById("window").style.background="#383838";
		document.getElementById("wdbLog").style.background="#383838";
		document.getElementById("window").style.color="white";
	} else {
		bgChart = "#f0eded"
		drawChart();
		document.getElementById("body").style.background="#f0eded";
		document.getElementById("window").style.background="#f0eded";
		document.getElementById("wdbLog").style.background="#f0eded";
		document.getElementById("window").style.color="black";
	}	
}

function resetstats(){
	losestreak = 0;
	winstreak  = 0;
	highest_streak = [0];
	lowest_streak = [0];
	current_balance = 0;
	betcount = 0;
	bets = 0
	wins = 0;
	losses = 0;
	wagered = 0;
	profit_total = 0;
	highest_profit = [0];
	lowest_profit = [0];
	highest_bet = [0];
	currentstreak = 0;
	profit = 0;
	currentprofit = 0;
	current_profit = 0;
	started_bal = balance;

	profit = profit_total;
	currentprofit = current_profit;
	bets = betcount;
	document.getElementById("wdbPercentProfit").innerHTML = (profit_total / started_bal * 100).toFixed(2);
	document.getElementById("wdbPercentWagered").innerHTML = (wagered / started_bal).toFixed(2);
	
	
	resetChart();
	
			document.getElementById("wdbProfit").innerHTML = profit_total.toFixed(8);
			document.getElementById("wdbWagered").innerHTML = wagered.toFixed(8);
			document.getElementById("wdbHighProfit").innerHTML = Math.max.apply(null, highest_profit).toFixed(8);
			document.getElementById("wdbHighLose").innerHTML = Math.min.apply(null, lowest_profit).toFixed(8);
			document.getElementById("wdbHighBet").innerHTML = Math.max.apply(null, highest_bet).toFixed(8);
			document.getElementById("wdbBets").innerHTML = wins + " / " + losses + " / " + bets;
			document.getElementById("wdbHighLowStreak").innerHTML = Math.max.apply(null, highest_streak) + " / " + Math.min.apply(null, lowest_streak) + " / " + currentstreak;
			document.getElementById("wdbPercentProfit").innerHTML = (profit_total / started_bal * 100).toFixed(2);
			document.getElementById("wdbPercentWagered").innerHTML = (wagered / started_bal).toFixed(2);
			
}

function deleteTable(){
		document.getElementById("wdbHistory").innerHTML = "";
}


function drawChart() {
    dps = [{ x: betcount, y: profit_total }]
    chart = new CanvasJS.Chart('chartContainer', {
        backgroundColor: bgChart,
        theme: 'light2',
        title: {
            //text: BOT_URL,
            fontColor: 'white',
            fontSize: 20
        },
        data: [{
            type: 'line',
            markerSize: 0,
            dataPoints: dps
        }]
    })
    chart.render();
}

function updateChart() {
    dps.push({
        x: betcount,
        y: profit_total,
        color: color
    })
    if (dps[dps.length - 2]) dps[dps.length - 2].lineColor = color;
    if (dps.length > 100) dps.shift();
    chart.render();
}


function resetChart() {
    betcount = 0;
    profit_total = 0;
    return drawChart();
}

function resetseed(e){

 var client = e;
 if(client == undefined){
	client = randomString(10);
 }
var body = {
		operationName:"RotateSeedPair",
		variables:{
        "seed": client
		},
		query:"mutation RotateSeedPair($seed: String!) {\n  rotateSeedPair(seed: $seed) {\n    clientSeed {\n      user {\n        id\n        activeClientSeed {\n          id\n          seed\n          __typename\n        }\n        activeServerSeed {\n          id\n          nonce\n          seedHash\n          nextSeedHash\n          __typename\n        }\n        __typename\n      }\n      __typename\n    }\n    __typename\n  }\n}\n"		}
		
	fetch('https://' +  window.location.host + '/_api/graphql', {
		method: 'post',
		body:    JSON.stringify(body),
		headers: { 'Content-Type': 'application/json','x-access-token': getCookie("session")},
	})
	.then(res => res.json())
	.then(json => outseed(json))
	.catch(function(err, json) {
		//console.log(err);
		setTimeout(() => {
			//initUser();							
		}, "2000");
	});
}

function outseed(json){
	if(json.errors != undefined){
		log(json.errors[0].errorType);
	} else {
		log("Seed has been reset.")
	}

}


function userBalances(){

var body = {
		operationName:"UserBalances",
		variables:{},
		query:"query UserBalances {\n  user {\n    id\n    balances {\n      available {\n        amount\n        currency\n        __typename\n      }\n      vault {\n        amount\n        currency\n        __typename\n      }\n      __typename\n    }\n    __typename\n  }\n}\n"		}
		
	
	fetch('https://' +  window.location.host + '/_api/graphql', {
		method: 'post',
		body:    JSON.stringify(body),
		headers: { 'Content-Type': 'application/json','x-access-token': getCookie("session")},
	})
	.then(res => res.json())
	.then(json => outbals(json))
	.catch(function(err, json) {
		//console.log(err);
		setTimeout(() => {
			//initUser();							
		}, "2000");
	});


}

function outbals(json){

	document.getElementById("wdbMenuCoin").innerHTML = "";
	select = document.getElementById('wdbMenuCoin');
	for (var i = 0; i < json.data.user.balances.length; i++)
	{
		var opt = document.createElement('option');
		opt.value = json.data.user.balances[i].available.currency;
		opt.innerHTML = json.data.user.balances[i].available.currency;
		select.appendChild(opt);
		
	}
	selectElement('wdbMenuCoin', currency);
	for (var i = 0; i < json.data.user.balances.length; i++)
	{
		if (json.data.user.balances[i].available.currency == currency)
		{
			current_balance = json.data.user.balances[i].available.amount;
			balance = current_balance;
			var balan = document.getElementById("wdbBalance");
			balan.innerHTML = balance.toFixed(8);

		}
	}
}

function LimboBet(amount, target_multi){
	var body = {
		variables:{
		"multiplierTarget": target_multi,
        "identifier": randomString(21),
        "amount": amount,
        "currency": document.getElementById('wdbMenuCoin').value
		},
		query:"mutation LimboBet($amount: Float!, $multiplierTarget: Float!, $currency: CurrencyEnum!, $identifier: String!) {\n  limboBet(\n    amount: $amount\n    currency: $currency\n    multiplierTarget: $multiplierTarget\n    identifier: $identifier\n  ) {\n    ...CasinoBet\n    state {\n      ...CasinoGameLimbo\n    }\n  }\n}\n\nfragment CasinoBet on CasinoBet {\n  id\n  active\n  payoutMultiplier\n  amountMultiplier\n  amount\n  payout\n  updatedAt\n  currency\n  game\n  user {\n    id\n    name\n  }\n}\n\nfragment CasinoGameLimbo on CasinoGameLimbo {\n  result\n  multiplierTarget\n}\n"	}
		
	fetch('https://' +  window.location.host + '/_api/graphql', {
		method: 'post',
		body:    JSON.stringify(body),
		headers: { 'Content-Type': 'application/json','x-access-token': getCookie("session")},
	})
	.then(res => res.json())
	.then(json => data(json))
	.catch(function(err, json) {
		//console.log(err, json);
		if(running == true)
		{
			setTimeout(() => {
				LimboBet(amount, target_multi)							
			}, "2000");
			
		}
	});
	
}

function DiceBet(amount, chance, bethigh){
	if(window.location.host.includes("primedice")){
	
		var target = 49.5
		if(bethigh == false){
			target = chance
			cond = "below"
		} else {
			target = 100 - 0.01 - chance
			cond = "above"
		}
		

		var body = {
			variables:{ 
			"target": target,
			"condition": cond,
			"amount": amount,
			"currency": document.getElementById('wdbMenuCoin').value
			},
			operationName: "PrimediceRoll",
			query:"mutation PrimediceRoll($amount: Float!, $target: Float!, $condition: CasinoGamePrimediceConditionEnum!, $currency: CurrencyEnum!) {\n  primediceRoll(amount: $amount, target: $target, condition: $condition, currency: $currency) {\n    ...CasinoBetFragment\n    state {\n      ...PrimediceStateFragment\n      __typename\n    }\n    __typename\n  }\n}\n\nfragment CasinoBetFragment on CasinoBet {\n  id\n  active\n  payoutMultiplier\n  amountMultiplier\n  amount\n  payout\n  updatedAt\n  currency\n  game\n  user {\n    id\n    name\n    __typename\n  }\n  __typename\n}\n\nfragment PrimediceStateFragment on CasinoGamePrimedice {\n  result\n  target\n  condition\n  __typename\n}\n"	}
			
		fetch('https://' +  window.location.host + '/_api/graphql', {
			method: 'post',
			body:    JSON.stringify(body),
			headers: { 'Content-Type': 'application/json','x-access-token': getCookie("session")},
		})
		.then(res => res.json())
		.then(json => data(json))
		.catch(function(err, json) {
			//console.log(err, json);
			if(running == true)
			{
				setTimeout(() => {
					 DiceBet(amount, chance, bethigh)							
				}, "2000");
				
			}
		});
	
	} else {
	
	var target = 49.5
	if(bethigh == false){
		target = chance
		cond = "below"
	} else {
		target = 100 - chance
		cond = "above"
	}
	

	var body = {
		variables:{ 
		"target": target,
        "condition": cond,
        "identifier": randomString(21),
        "amount": amount,
        "currency": document.getElementById('wdbMenuCoin').value
		},
		query:"mutation DiceRoll($amount: Float!, $target: Float!, $condition: CasinoGameDiceConditionEnum!, $currency: CurrencyEnum!, $identifier: String!) {\n  diceRoll(\n    amount: $amount\n    target: $target\n    condition: $condition\n    currency: $currency\n    identifier: $identifier\n  ) {\n    ...CasinoBet\n    state {\n      ...CasinoGameDice\n    }\n  }\n}\n\nfragment CasinoBet on CasinoBet {\n  id\n  active\n  payoutMultiplier\n  amountMultiplier\n  amount\n  payout\n  updatedAt\n  currency\n  game\n  user {\n    id\n    name\n  }\n}\n\nfragment CasinoGameDice on CasinoGameDice {\n  result\n  target\n  condition\n}\n"	}
		
	fetch('https://' +  window.location.host + '/_api/graphql', {
		method: 'post',
		body:    JSON.stringify(body),
		headers: { 'Content-Type': 'application/json','x-access-token': getCookie("session")},
	})
	.then(res => res.json())
	.then(json => data(json))
	.catch(function(err, json) {
		//console.log(err, json);
		if(running == true)
		{
			setTimeout(() => {
				 DiceBet(amount, chance, bethigh)							
			}, "2000");
			
		}
	});
	}
	
}

function data(json){
	if(running == true)
	{
		if(json.errors != null){
			if(!json.errors[0].errorType.includes("parallelCasinoBet")){
			log(json.errors[0].errorType + ". " +json.errors[0].message )
			}
			//return;
		}
		if(json.data.hasOwnProperty("primediceRoll"))
		{
			
			var table = document.getElementById("wdbHistory");
			var multiplierOut = json.data.primediceRoll.payoutMultiplier;
			var nicname = "";
			var crpamount = json.data.primediceRoll.amount;
			var payout = json.data.primediceRoll.payout;
			
			var str_amount = crpamount;
			var str_payout = payout.toFixed(8);
			var str_payoutMultiplier = multiplierOut.toFixed(2);
			var str_currency = currency;
			var str_game = "limbo";
			var str_user = "poky1084";
			var str_updatedAt = "2023"
			var current_result = json.data.primediceRoll.state.result.toFixed(2);
			var multiplierTarget = json.data.primediceRoll.state.target.toFixed(2);
			
			lastBet.amount = json.data.primediceRoll.amount;
			lastBet.payoutMultiplier = json.data.primediceRoll.payoutMultiplier;
			lastBet.Roll = json.data.primediceRoll.state.result;
			lastBet.payout = json.data.primediceRoll.payout;
			lastBet.target = json.data.primediceRoll.state.target;
			
			if(json.data.primediceRoll.state.condition == "below"){
				bethigh = false;
			} else {
				bethigh = true;
			}
			
			if(bethigh == false){
				lastBet.chance = json.data.primediceRoll.state.target;
			} else {
				lastBet.chance = 100 - 0.01 - json.data.primediceRoll.state.target;
			}
			
			
			if(json.data.primediceRoll.payoutMultiplier > 0){
				win = true;
				lastBet.win = true;
				color = "#05f711"
				//win
				winstreak++;
				wins++;
				losestreak = 0;
					
			} else {

				win = false;
				lastBet.win = false;
				color = "#f72a42"
				losses++;
				losestreak++;
				winstreak = 0;
				
											
			} 
		
			current_profit = parseFloat(json.data.primediceRoll.payout) - parseFloat(json.data.primediceRoll.amount);
			profit_total += parseFloat(json.data.primediceRoll.payout) - parseFloat(json.data.primediceRoll.amount);
			wagered += parseFloat(amount);
			
			var row = document.createElement("tr");
			
			var tdbets = document.createElement("td");
			var tdamount = document.createElement("td");
			var tdhigh = document.createElement("td");
			var tdTargetChance = document.createElement("td");
			var tdRollChance= document.createElement("td");
			var tdProfit = document.createElement("td");
			var tdPayout = document.createElement("td");
			var tdTargetNumber = document.createElement("td");
			var tdRollNumber = document.createElement("td");
			var tdNonce = document.createElement("td");
			var tdBetID = document.createElement("td");
			
			tdbets.innerHTML = wins + losses;
			tdamount.innerHTML = json.data.primediceRoll.amount.toFixed(8)
			
			var tdcheck = document.createElement("input");
			tdcheck.type = "checkbox";
			tdcheck.name = randomString(21);
			if(bethigh){
				tdcheck.checked = true;
			} else {
				tdcheck.checked = false;
			}
			tdcheck.id = randomString(21);
			
			tdhigh.appendChild(tdcheck);
			tdTargetChance.innerHTML = lastBet.chance.toFixed(4)
			if(bethigh == false){
				tdRollChance.innerHTML = json.data.primediceRoll.state.result.toFixed(4)
			} else {
				tdRollChance.innerHTML = (100 - 0.01 - json.data.primediceRoll.state.result).toFixed(4)
			}
			
			tdProfit.innerHTML = current_profit.toFixed(8)
			if(bethigh){
				lastBet.targetNumber = (99 /  (lastBet.chance - 0.01));
				tdTargetNumber.innerHTML = ">" + (99 /  (lastBet.chance - 0.01)).toFixed(4)
			} else {
				lastBet.targetNumber = (99 / lastBet.chance);
				tdTargetNumber.innerHTML = ">" + (99 / lastBet.chance).toFixed(4)
			}
			tdRollNumber.innerHTML = json.data.primediceRoll.state.result.toFixed(2)
			tdNonce.innerHTML = json.data.primediceRoll.game;
			tdBetID.innerHTML = json.data.primediceRoll.id;
			tdPayout.innerHTML = json.data.primediceRoll.payout.toFixed(8);
			
			row.appendChild(tdbets);
			row.appendChild(tdamount);
			row.appendChild(tdhigh);
			row.appendChild(tdTargetChance);
			row.appendChild(tdRollChance);
			row.appendChild(tdProfit);
			row.appendChild(tdPayout);
			row.appendChild(tdTargetNumber);
			row.appendChild(tdRollNumber);
			row.appendChild(tdNonce);
			row.appendChild(tdBetID);
					
			

				
			
			
			
			if(win){
				row.style.background = "#91F190";
			} else {
				row.style.background = "#FFC0CB";
			}
			
			table.prepend(row);
			
			if (table.rows.length > 50)
			{
				table.deleteRow(table.rows.length - 1);
			}
		
			
			if(winstreak > losestreak){
				currentstreak = winstreak;
			} else {
				currentstreak = -losestreak;
			}
		
			if(highest_bet[highest_bet.length-1] < json.data.primediceRoll.amount){
				highest_bet.pop();
				highest_bet.push(json.data.primediceRoll.amount);
			}
			if(highest_profit[highest_profit.length-1] < profit_total){
				highest_profit.pop();
				highest_profit.push(profit_total);
			}
			if(lowest_profit[lowest_profit.length-1] > profit_total){
				lowest_profit.pop();
				lowest_profit.push(profit_total);
			}
			if(highest_streak[highest_streak.length-1] < currentstreak){
				highest_streak.pop();
				highest_streak.push(currentstreak);
			}
			if(lowest_streak[lowest_streak.length-1] > currentstreak){
				lowest_streak.pop();
				lowest_streak.push(currentstreak);
			}

			balance = current_balance;
			profit = profit_total;
			previousbet = json.data.primediceRoll.amount;
			currentprofit = current_profit;
			betcount++;
			bets = betcount;
		
			
			updateChart();
			
			
			//document.getElementById("multi").innerHTML = toFixedNo(json.data.limboBet.state.result, 2);
			document.getElementById("wdbProfit").innerHTML = profit_total.toFixed(8);
			document.getElementById("wdbWagered").innerHTML = wagered.toFixed(8);
			document.getElementById("wdbHighProfit").innerHTML = Math.max.apply(null, highest_profit).toFixed(8);
			document.getElementById("wdbHighLose").innerHTML = Math.min.apply(null, lowest_profit).toFixed(8);
			document.getElementById("wdbHighBet").innerHTML = Math.max.apply(null, highest_bet).toFixed(8);
			document.getElementById("wdbBets").innerHTML = wins + " / " + losses + " / " + bets;
			document.getElementById("wdbHighLowStreak").innerHTML = Math.max.apply(null, highest_streak) + " / " + Math.min.apply(null, lowest_streak) + " / " + currentstreak;
			document.getElementById("wdbPercentProfit").innerHTML = (profit_total / started_bal * 100).toFixed(2);
			document.getElementById("wdbPercentWagered").innerHTML = (wagered / started_bal).toFixed(2);
			
								if(profit_total < 0){
										document.getElementById("wdbProfit").style.color = "#f72a42"
										document.getElementById("wdbPercentProfit").style.color = "#f72a42"
								} else {
										if(document.getElementById("themebot").value == "dark"){
										document.getElementById("wdbProfit").style.color = "#05f711"
										document.getElementById("wdbPercentProfit").style.color = "#05f711"
									} else {
										document.getElementById("wdbProfit").style.color = "green"
										document.getElementById("wdbPercentProfit").style.color = "green"
									}
								}
			
			
			lastBet.percent = (profit_total / started_bal * 100)
			

			dobet();

			amount = nextbet;
			
			target_multi = 99 / chance;
			lastBet.amount = json.data.primediceRoll.amount;
			lastBet.target = json.data.primediceRoll.state.target;
			
			DiceBet(amount, chance, bethigh)
			
		}
		if(json.data.hasOwnProperty("diceRoll"))
		{
			
			var table = document.getElementById("wdbHistory");
			var multiplierOut = json.data.diceRoll.payoutMultiplier;
			var nicname = "";
			var crpamount = json.data.diceRoll.amount;
			var payout = json.data.diceRoll.payout;
			
			var str_amount = crpamount;
			var str_payout = payout.toFixed(8);
			var str_payoutMultiplier = multiplierOut.toFixed(2);
			var str_currency = currency;
			var str_game = "limbo";
			var str_user = "poky1084";
			var str_updatedAt = "2023"
			var current_result = json.data.diceRoll.state.result.toFixed(2);
			var multiplierTarget = json.data.diceRoll.state.target.toFixed(2);
			
			lastBet.amount = json.data.diceRoll.amount;
			lastBet.payoutMultiplier = json.data.diceRoll.payoutMultiplier;
			lastBet.Roll = json.data.diceRoll.state.result;
			lastBet.payout = json.data.diceRoll.payout;
			lastBet.target = json.data.diceRoll.state.target;
			if(json.data.diceRoll.state.condition == "below"){
				bethigh = false;
			} else {
				bethigh = true;
			}
			
			if(bethigh == false){
				lastBet.chance = json.data.diceRoll.state.target;
			} else {
				lastBet.chance = 100 - json.data.diceRoll.state.target;
			}
			
			
			if(json.data.diceRoll.payoutMultiplier > 0){
				win = true;
				lastBet.win = true;
				color = "#05f711"
				//win
				winstreak++;
				wins++;
				losestreak = 0;
					
			} else {

				win = false;
				lastBet.win = false;
				color = "#f72a42"
				losses++;
				losestreak++;
				winstreak = 0;
				
											
			} 
		
			current_profit = parseFloat(json.data.diceRoll.payout) - parseFloat(json.data.diceRoll.amount);
			profit_total += parseFloat(json.data.diceRoll.payout) - parseFloat(json.data.diceRoll.amount);
			wagered += parseFloat(amount);
			
			var row = document.createElement("tr");
			
			var tdbets = document.createElement("td");
			var tdamount = document.createElement("td");
			var tdhigh = document.createElement("td");
			var tdTargetChance = document.createElement("td");
			var tdRollChance= document.createElement("td");
			var tdProfit = document.createElement("td");
			var tdPayout = document.createElement("td");
			var tdTargetNumber = document.createElement("td");
			var tdRollNumber = document.createElement("td");
			var tdNonce = document.createElement("td");
			var tdBetID = document.createElement("td");
			
			tdbets.innerHTML = wins + losses;
			tdamount.innerHTML = json.data.diceRoll.amount.toFixed(8)
			
			var tdcheck = document.createElement("input");
			tdcheck.type = "checkbox";
			tdcheck.name = randomString(21);
			if(bethigh){
				tdcheck.checked = true;
			} else {
				tdcheck.checked = false;
			}
			tdcheck.id = randomString(21);
			
			tdhigh.appendChild(tdcheck);
			tdTargetChance.innerHTML = lastBet.chance.toFixed(4)
			if(bethigh == false){
				tdRollChance.innerHTML = json.data.diceRoll.state.result.toFixed(4)
			} else {
				tdRollChance.innerHTML = (100 - json.data.diceRoll.state.result).toFixed(4)
			}
			
			tdProfit.innerHTML = current_profit.toFixed(8)
			if(bethigh){
				lastBet.targetNumber = (99 / (lastBet.chance));
				tdTargetNumber.innerHTML = ">" + (99 / (lastBet.chance)).toFixed(4)
			} else {
				lastBet.targetNumber = (99 / lastBet.chance);
				tdTargetNumber.innerHTML = ">" + (99 / lastBet.chance).toFixed(4)
			}
			tdRollNumber.innerHTML = json.data.diceRoll.state.result.toFixed(2)
			tdNonce.innerHTML = json.data.diceRoll.game;
			tdBetID.innerHTML = json.data.diceRoll.id;
			tdPayout.innerHTML = json.data.diceRoll.payout.toFixed(8);
			
			row.appendChild(tdbets);
			row.appendChild(tdamount);
			row.appendChild(tdhigh);
			row.appendChild(tdTargetChance);
			row.appendChild(tdRollChance);
			row.appendChild(tdProfit);
			row.appendChild(tdPayout);
			row.appendChild(tdTargetNumber);
			row.appendChild(tdRollNumber);
			row.appendChild(tdNonce);
			row.appendChild(tdBetID);			
					
			

				
			
			
			
			if(win){
				row.style.background = "#91F190";
			} else {
				row.style.background = "#FFC0CB";
			}
			
			table.prepend(row);
			
			if (table.rows.length > 50)
			{
				table.deleteRow(table.rows.length - 1);
			}
		
			
			if(winstreak > losestreak){
				currentstreak = winstreak;
			} else {
				currentstreak = -losestreak;
			}
		
			if(highest_bet[highest_bet.length-1] < json.data.diceRoll.amount){
				highest_bet.pop();
				highest_bet.push(json.data.diceRoll.amount);
			}
			if(highest_profit[highest_profit.length-1] < profit_total){
				highest_profit.pop();
				highest_profit.push(profit_total);
			}
			if(lowest_profit[lowest_profit.length-1] > profit_total){
				lowest_profit.pop();
				lowest_profit.push(profit_total);
			}
			if(highest_streak[highest_streak.length-1] < currentstreak){
				highest_streak.pop();
				highest_streak.push(currentstreak);
			}
			if(lowest_streak[lowest_streak.length-1] > currentstreak){
				lowest_streak.pop();
				lowest_streak.push(currentstreak);
			}

			balance = current_balance;
			profit = profit_total;
			previousbet = json.data.diceRoll.amount;
			currentprofit = current_profit;
			betcount++;
			bets = betcount;
		
			
			updateChart();
			
			
			//document.getElementById("multi").innerHTML = toFixedNo(json.data.limboBet.state.result, 2);
			document.getElementById("wdbProfit").innerHTML = profit_total.toFixed(8);
			document.getElementById("wdbWagered").innerHTML = wagered.toFixed(8);
			document.getElementById("wdbHighProfit").innerHTML = Math.max.apply(null, highest_profit).toFixed(8);
			document.getElementById("wdbHighLose").innerHTML = Math.min.apply(null, lowest_profit).toFixed(8);
			document.getElementById("wdbHighBet").innerHTML = Math.max.apply(null, highest_bet).toFixed(8);
			document.getElementById("wdbBets").innerHTML = wins + " / " + losses + " / " + bets;
			document.getElementById("wdbHighLowStreak").innerHTML = Math.max.apply(null, highest_streak) + " / " + Math.min.apply(null, lowest_streak) + " / " + currentstreak;
			document.getElementById("wdbPercentProfit").innerHTML = (profit_total / started_bal * 100).toFixed(2);
			document.getElementById("wdbPercentWagered").innerHTML = (wagered / started_bal).toFixed(2);			
			
								if(profit_total < 0){
										document.getElementById("wdbProfit").style.color = "#f72a42"
										document.getElementById("wdbPercentProfit").style.color = "#f72a42"
								} else {
										if(document.getElementById("themebot").value == "dark"){
										document.getElementById("wdbProfit").style.color = "#05f711"
										document.getElementById("wdbPercentProfit").style.color = "#05f711"
									} else {
										document.getElementById("wdbProfit").style.color = "green"
										document.getElementById("wdbPercentProfit").style.color = "green"
									}
								}
								
			
			lastBet.percent = (profit_total / started_bal * 100)
			
			dobet();
			amount = nextbet;
			
			target_multi = 99 / chance;
			lastBet.amount = json.data.diceRoll.amount;
			lastBet.target = json.data.diceRoll.state.target;
			DiceBet(amount, chance, bethigh)
		}
		if(json.data.hasOwnProperty("limboBet"))
		{
			
			var table = document.getElementById("wdbHistory");
			var multiplierOut = json.data.limboBet.payoutMultiplier;
			var nicname = "";
			var crpamount = json.data.limboBet.amount;
			var payout = json.data.limboBet.payout;
			
			var str_amount = crpamount;
			var str_payout = payout.toFixed(8);
			var str_payoutMultiplier = multiplierOut.toFixed(2);
			var str_currency = currency;
			var str_game = "limbo";
			var str_user = "poky1084";
			var str_updatedAt = "2023"
			var current_result = json.data.limboBet.state.result.toFixed(2);
			var multiplierTarget = json.data.limboBet.state.multiplierTarget.toFixed(2);
			
			lastBet.amount = json.data.limboBet.amount;
			lastBet.payoutMultiplier = json.data.limboBet.payoutMultiplier;
			lastBet.Roll = json.data.limboBet.state.result;
			lastBet.chance = 99 / json.data.limboBet.state.multiplierTarget;
			lastBet.payout = json.data.limboBet.payout;
			lastBet.target = json.data.limboBet.state.multiplierTarget;
			
			if(json.data.limboBet.payoutMultiplier > 0){
				win = true;
				lastBet.win = true;
				color = "#05f711"
				//win
				winstreak++;
				wins++;
				losestreak = 0;
					
			} else {

				win = false;
				lastBet.win = false;
				color = "#f72a42"
				losses++;
				losestreak++;
				winstreak = 0;
				
											
			} 
		
			current_profit = parseFloat(json.data.limboBet.payout) - parseFloat(json.data.limboBet.amount);
			profit_total += parseFloat(json.data.limboBet.payout) - parseFloat(json.data.limboBet.amount);
			wagered += parseFloat(amount);
			
			var row = document.createElement("tr");
			
			var tdbets = document.createElement("td");
			var tdamount = document.createElement("td");
			var tdhigh = document.createElement("td");
			var tdTargetChance = document.createElement("td");
			var tdRollChance= document.createElement("td");
			var tdProfit = document.createElement("td");
			var tdPayout = document.createElement("td");
			var tdTargetNumber = document.createElement("td");
			var tdRollNumber = document.createElement("td");
			var tdNonce = document.createElement("td");
			var tdBetID = document.createElement("td");
			
			tdbets.innerHTML = wins + losses;
			tdamount.innerHTML = json.data.limboBet.amount.toFixed(8)
			
			var tdcheck = document.createElement("input");
			tdcheck.type = "checkbox";
			tdcheck.name = randomString(21);
			tdcheck.checked = "checked";
			tdcheck.id = randomString(21);
			
			tdhigh.appendChild(tdcheck);
			tdTargetChance.innerHTML = (99 / json.data.limboBet.state.multiplierTarget).toFixed(4)
			tdRollChance.innerHTML = (99 / json.data.limboBet.state.result).toFixed(4)
			tdProfit.innerHTML = current_profit.toFixed(8)
			tdTargetNumber.innerHTML = ">" + json.data.limboBet.state.multiplierTarget.toFixed(4)
			lastBet.targetNumber = json.data.limboBet.state.multiplierTarget;
			tdRollNumber.innerHTML = json.data.limboBet.state.result.toFixed(2)
			tdNonce.innerHTML = json.data.limboBet.game;
			tdBetID.innerHTML = json.data.limboBet.id;
			tdPayout.innerHTML = json.data.limboBet.payout.toFixed(8);
			
			row.appendChild(tdbets);
			row.appendChild(tdamount);
			row.appendChild(tdhigh);
			row.appendChild(tdTargetChance);
			row.appendChild(tdRollChance);
			row.appendChild(tdProfit);
			row.appendChild(tdPayout);
			row.appendChild(tdTargetNumber);
			row.appendChild(tdRollNumber);
			row.appendChild(tdNonce);
			row.appendChild(tdBetID);	
					
			

				
			
			
			
			if(win){
				row.style.background = "#91F190";
			} else {
				row.style.background = "#FFC0CB";
			}
			
			table.prepend(row);
			
			if (table.rows.length > 50)
			{
				table.deleteRow(table.rows.length - 1);
			}
		
			
			if(winstreak > losestreak){
				currentstreak = winstreak;
			} else {
				currentstreak = -losestreak;
			}
		
			if(highest_bet[highest_bet.length-1] < json.data.limboBet.amount){
				highest_bet.pop();
				highest_bet.push(json.data.limboBet.amount);
			}
			if(highest_profit[highest_profit.length-1] < profit_total){
				highest_profit.pop();
				highest_profit.push(profit_total);
			}
			if(lowest_profit[lowest_profit.length-1] > profit_total){
				lowest_profit.pop();
				lowest_profit.push(profit_total);
			}
			if(highest_streak[highest_streak.length-1] < currentstreak){
				highest_streak.pop();
				highest_streak.push(currentstreak);
			}
			if(lowest_streak[lowest_streak.length-1] > currentstreak){
				lowest_streak.pop();
				lowest_streak.push(currentstreak);
			}

			balance = current_balance;
			profit = profit_total;
			previousbet = json.data.limboBet.amount;
			currentprofit = current_profit;
			betcount++;
			bets = betcount;
			chance = 99 / json.data.limboBet.state.multiplierTarget;

			
			updateChart();
			
			
			//document.getElementById("multi").innerHTML = toFixedNo(json.data.limboBet.state.result, 2);
			document.getElementById("wdbProfit").innerHTML = profit_total.toFixed(8);
			document.getElementById("wdbWagered").innerHTML = wagered.toFixed(8);
			document.getElementById("wdbHighProfit").innerHTML = Math.max.apply(null, highest_profit).toFixed(8);
			document.getElementById("wdbHighLose").innerHTML = Math.min.apply(null, lowest_profit).toFixed(8);
			document.getElementById("wdbHighBet").innerHTML = Math.max.apply(null, highest_bet).toFixed(8);
			document.getElementById("wdbBets").innerHTML = wins + " / " + losses + " / " + bets;
			document.getElementById("wdbHighLowStreak").innerHTML = Math.max.apply(null, highest_streak) + " / " + Math.min.apply(null, lowest_streak) + " / " + currentstreak;
			document.getElementById("wdbPercentProfit").innerHTML = (profit_total / started_bal * 100).toFixed(2);
			document.getElementById("wdbPercentWagered").innerHTML = (wagered / started_bal).toFixed(2);
			
								if(profit_total < 0){
										document.getElementById("wdbProfit").style.color = "#f72a42"
										document.getElementById("wdbPercentProfit").style.color = "#f72a42"
								} else {
										if(document.getElementById("themebot").value == "dark"){
										document.getElementById("wdbProfit").style.color = "#05f711"
										document.getElementById("wdbPercentProfit").style.color = "#05f711"
									} else {
										document.getElementById("wdbProfit").style.color = "green"
										document.getElementById("wdbPercentProfit").style.color = "green"
									}
								}
								
			
			lastBet.percent = (profit_total / started_bal * 100)
			

			dobet();
			amount = nextbet;
			
			target_multi = 99 / chance;
			lastBet.amount = json.data.limboBet.amount;
			lastBet.target = json.data.limboBet.state.multiplierTarget;
			LimboBet(amount, target_multi);
		}

	}
}


function downloadFile() {

	var obj = editor.getValue();
	var filename = "JS_" + new Date(new Date().toString().split('GMT')[0]+' UTC').toISOString().split('.')[0].replace('T','-') + ".js";
	var blob = new Blob([obj], {type: 'text/plain'});
	if (window.navigator && window.navigator.msSaveOrOpenBlob) {
		window.navigator.msSaveOrOpenBlob(blob, filename);
	} else{
		var e = document.createEvent('MouseEvents'),
		a = document.createElement('a');
		a.download = filename;
		a.href = window.URL.createObjectURL(blob);
		a.dataset.downloadurl = ['text/plain', a.download, a.href].join(':');
		e.initEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
		a.dispatchEvent(e);
	}
}

function countTime() {
	startTime = new Date()
    setInterval(() => {
	if(running){
        playTime = (new Date().getTime()) - startTime;
        playDays = Math.floor(playTime / (1e3 * 6e1 * 6e1 * 24));
        playHours = Math.floor((playTime % (1e3 * 6e1 * 6e1 * 24)) / (1e3 * 6e1 * 6e1));
        playMinutes = Math.floor((playTime % (1e3 * 6e1 * 6e1)) / (1e3 * 6e1));
        playSeconds = Math.floor((playTime % (1e3 * 6e1)) / 1e3);
		document.getElementById("wdbTime").innerHTML = playDays + ":" + playHours + ":" + playMinutes + ":" + playSeconds
		}
    }, 1e3)
}

const checkbox = document.getElementById('speedChange')

checkbox.addEventListener('change', (event) => {
  if (event.currentTarget.checked) {
		speedmode = true;
  } else {
		speedmode = false;
  }
})

var btnStart = document.getElementById("wdbStartButton");

btnStart.addEventListener('click', function() {  start();}, false);

var btnStop = document.getElementById("wdbStopButton");
btnStop.addEventListener('click', function() {  btnStart.disabled = false; run_clicked = false; running = false; dobet = function(){} }, false);

function start(){
		running = true; countTime(); 
		run_clicked = true;
		eval(editor.getValue());	

	localStorage.setItem("jscode", editor.getValue());
 currency = document.getElementById('wdbMenuCoin').value;
 game = document.getElementById("gameselect").value;
 btnStart.disabled = true;  
 started_bal = balance; 
 amount = nextbet;
	var selectedGame = document.getElementById("gameselect").value;
	if(selectedGame == "dice"){
		if(speedmode == false){
			DiceBet(amount, chance, bethigh)
		} else {
			setTimeout(function () {
            DiceBet(amount, chance, bethigh)
          }, 200);

          setTimeout(function () {
            DiceBet(amount, chance, bethigh)
          }, 400);

		}
	} else if(selectedGame == "limbo"){
		if(speedmode == false){
			LimboBet(amount, 99 / chance);
		} else {
			setTimeout(function () {
            LimboBet(amount, 99 / chance); 
          }, 200);

          setTimeout(function () {
            LimboBet(amount, 99 / chance); 
          }, 400);
          
		}
	} else if(selectedGame == "crash"){
		crashbet(amount, target_multi);
	} else if(selectedGame == "slide"){
		dobet();
	}
 
 drawChart();

}


  
