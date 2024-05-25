 document.body.insertAdjacentHTML("afterend", '<style> #window{      display:block;      height:570px;      color: black;      width: 1070px;      min-width: 500px;      background: #f0eded;      border-radius: 5px;      -webkit-box-shadow: 0px 0px 20px rgba(0,0,0,0.75);      -moz-box-shadow: 0px 0px 20px rgba(0,0,0,0.75);     /*-webkit-transition:all 0.5s;      */      overflow: hidden;      font-family: "Geneva", sans-serif; 	 font-weight: bold;      position: absolute;      z-index: 15;      left: 50%;      top: 50%;      transform: translate(-50%, -50%);      -ms-transform: translate(-50%, -50%);     /* for IE 9 */      -webkit-transform: translate(-50%, -50%);     /* for Safari */ 	 } /* TOP BAR */  #topbar{      width: 100%;      height: 21px;      font-size: 16px;      font-family: "Myriad Pro", sans-serif;      text-shadow:0px 1px 0px rgba(255,255,255,0.25);      -webkit-box-shadow:0 1px 0 rgba(0,0,0,0.5);      -moz-box-shadow:0 1px 0 rgba(0,0,0,0.5); }  #topbar ul li {      float: left;      padding:0 10px;      height: 21px;      line-height: 24px; }  #topbar ul li:first-child{      font-size: 20px;      line-height: 26px;      margin-left: 5px; }  #topbar ul li:nth-child(2){      font-family: "Myriad-Semi", sans-serif; }  #topbar ul li:active{      background-image: -webkit-gradient(linear,left bottom,left top,color-stop(1, #4a82ff),color-stop(0, #0052fc));      color: #fff;      text-shadow: none; }  #toolbar{      width: 100%;      height: 25px;      background: grey;      border-radius:5px 5px 0 0;      background: #cfcfcf;     /* Old browsers */      background: -moz-linear-gradient(top, #cfcfcf 0%, #a8a8a8 100%);     /* FF3.6+ */      background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#cfcfcf), color-stop(100%,#a8a8a8));     /* Chrome,Safari4+ */      background: -webkit-linear-gradient(top, #cfcfcf 0%,#a8a8a8 100%);     /* Chrome10+,Safari5.1+ */      background: -o-linear-gradient(top, #cfcfcf 0%,#a8a8a8 100%);     /* Opera 11.10+ */      background: -ms-linear-gradient(top, #cfcfcf 0%,#a8a8a8 100%);     /* IE10+ */      background: linear-gradient(top, #cfcfcf 0%,#a8a8a8 100%);     /* W3C */      -webkit-box-shadow:0px 1px 0px rgba(255,255,255,0.5) inset,0px 1px 0px #515151;      -moz-box-shadow:0px 1px 0px rgba(255,255,255,0.5) inset,0px 1px 0px #515151;      box-shadow:0px 1px 0px rgba(255,255,255,0.5) inset,0px 1px 0px #515151; }  #toolbar .top{      float: left;      width: 100%;      height: 23px; }  #toolbar .bottom{      float: left;      width: 100%;      height: 30px; } /*-----TRAFFIC LIGHTS-----*/  #toolbar #lights{      float: left;      position:relative;      top:4px;      left:7px; }  .light{      float:left;      width:14px;      height:14px;      border-radius:14px;      -webkit-box-shadow:0px 1px 0px rgba(255,255,255,0.5),0px 0px 3px #000 inset;      -moz-box-shadow:0px 1px 0px rgba(255,255,255,0.5),0px 0px 3px #000 inset;      box-shadow:0px 1px 0px rgba(255,255,255,0.5),0px 0px 3px #000 inset;      overflow: hidden; }  #lights:hover .glyph{      opacity: 1;      cursor:default; }  .light .shine{      width: 4px;      height:3px;      border-radius:10px;     /*background-image: -webkit-gradient(radial, center center, 0, center center, 3, from(rgba(255,255,255,1)), to(rgba(255,255,255,0)));      */      background: -moz-radial-gradient(center, ellipse cover, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%);     /* FF3.6+ */      background-image: -webkit-gradient(radial, center center, 0px, center center, 100%, color-stop(0%,rgba(255,255,255,1)), color-stop(100%,rgba(255,255,255,0)));     /* Chrome,Safari4+ */      background: -webkit-radial-gradient(center, ellipse cover, rgba(255,255,255,1) 0%,rgba(255,255,255,0) 100%);     /* Chrome10+,Safari5.1+ */      background: -o-radial-gradient(center, ellipse cover, rgba(255,255,255,1) 0%,rgba(255,255,255,0) 100%);     /* Opera 12+ */      background: -ms-radial-gradient(center, ellipse cover, rgba(255,255,255,1) 0%,rgba(255,255,255,0) 100%);     /* IE10+ */      background: radial-gradient(center, ellipse cover, rgba(255,255,255,1) 0%,rgba(255,255,255,0) 100%);     /* W3C */ }  .light .glow{      width:14px;      height:8px;      background-image: -webkit-gradient(radial, center bottom, 0, center center, 5, from(rgba(255,255,255,0.75)), to(rgba(255,255,255,0)));      background: 0px 0px -moz-radial-gradient(bottom, cover, rgba(255,255,255,0.70) 0%, rgba(255,255,255,0) 80%);     /* FF3.6+ */ } /*--RED--*/  .red{      background: #f41b16;     /* Old browsers */      background: -moz-linear-gradient(top, #f41b16 0%, #fc7471 100%);     /* FF3.6+ */      background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#f41b16), color-stop(100%,#fc7471));     /* Chrome,Safari4+ */      background: -webkit-linear-gradient(top, #f41b16 0%,#fc7471 100%);     /* Chrome10+,Safari5.1+ */      background: -o-linear-gradient(top, #f41b16 0%,#fc7471 100%);     /* Opera 11.10+ */      background: -ms-linear-gradient(top, #f41b16 0%,#fc7471 100%);     /* IE10+ */      background: linear-gradient(top, #f41b16 0%,#fc7471 100%);     /* W3C */ }  .red:active{      background: #972f2e;     /* Old browsers */      background: -moz-linear-gradient(top, #972f2e 0%, #fc7471 100%);     /* FF3.6+ */      background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#972f2e), color-stop(100%,#fc7471));     /* Chrome,Safari4+ */      background: -webkit-linear-gradient(top, #972f2e 0%,#fc7471 100%);     /* Chrome10+,Safari5.1+ */      background: -o-linear-gradient(top, #972f2e 0%,#fc7471 100%);     /* Opera 11.10+ */      background: -ms-linear-gradient(top, #972f2e 0%,#fc7471 100%);     /* IE10+ */      background: linear-gradient(top, #972f2e 0%,#fc7471 100%);     /* W3C */ }  .red .shine{      position: relative;      top: -23px;      left: 5px; }  .red .glow{      position: relative;      top: -22px; }  .red .glyph{      position: relative;      top: -6px;      left: 3px;      font-size: 14px;      font-weight: bold;      color: #9b3a36;      z-index: 50;      opacity: 0; } /*--YELLOW--*/  .yellow{      background: #f4a316;     /* Old browsers */      background: -moz-linear-gradient(left, #f4a316 0%, #fcc371 100%);     /* FF3.6+ */      background: -webkit-gradient(linear, left top, right top, color-stop(0%,#f4a316), color-stop(100%,#fcc371));     /* Chrome,Safari4+ */      background: -webkit-linear-gradient(left, #f4a316 0%,#fcc371 100%);     /* Chrome10+,Safari5.1+ */      background: -o-linear-gradient(left, #f4a316 0%,#fcc371 100%);     /* Opera 11.10+ */      background: -ms-linear-gradient(left, #f4a316 0%,#fcc371 100%);     /* IE10+ */      background: linear-gradient(left, #f4a316 0%,#fcc371 100%);     /* W3C */      margin:0px 7px; }  .yellow:active{      background: #ae4f1e;     /* Old browsers */      background: -moz-linear-gradient(top, #ae4f1e 0%, #fcc371 100%);     /* FF3.6+ */      background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#ae4f1e), color-stop(100%,#fcc371));     /* Chrome,Safari4+ */      background: -webkit-linear-gradient(top, #ae4f1e 0%,#fcc371 100%);     /* Chrome10+,Safari5.1+ */      background: -o-linear-gradient(top, #ae4f1e 0%,#fcc371 100%);     /* Opera 11.10+ */      background: -ms-linear-gradient(top, #ae4f1e 0%,#fcc371 100%);     /* IE10+ */      background: linear-gradient(top, #ae4f1e 0%,#fcc371 100%);     /* W3C */ }  .yellow .shine{      position: relative;      top: -23px;      left: 5px; }  .yellow .glow{      position: relative;      top: -22px; }  .yellow .glyph{      position: relative;      top: -7px;      left: 4px;      font-size: 24px;      color: #854322;      z-index: 50;      opacity: 0;      -webkit-transform: scaleY(1.5) scaleX(1.3); } /*--GREEN--*/  .green{      background: #4cae2e;     /* Old browsers */      background: -moz-linear-gradient(top, #4cae2e 0%, #dafc71 100%);     /* FF3.6+ */      background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#4cae2e), color-stop(100%,#dafc71));     /* Chrome,Safari4+ */      background: -webkit-linear-gradient(top, #4cae2e 0%,#dafc71 100%);     /* Chrome10+,Safari5.1+ */      background: -o-linear-gradient(top, #4cae2e 0%,#dafc71 100%);     /* Opera 11.10+ */      background: -ms-linear-gradient(top, #4cae2e 0%,#dafc71 100%);     /* IE10+ */      background: linear-gradient(top, #4cae2e 0%,#dafc71 100%);     /* W3C */ }  .green:active{      background: #48752b;     /* Old browsers */      background: -moz-linear-gradient(top, #48752b 0%, #dafc71 100%);     /* FF3.6+ */      background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#48752b), color-stop(100%,#dafc71));     /* Chrome,Safari4+ */      background: -webkit-linear-gradient(top, #48752b 0%,#dafc71 100%);     /* Chrome10+,Safari5.1+ */      background: -o-linear-gradient(top, #48752b 0%,#dafc71 100%);     /* Opera 11.10+ */      background: -ms-linear-gradient(top, #48752b 0%,#dafc71 100%);     /* IE10+ */      background: linear-gradient(top, #48752b 0%,#dafc71 100%);     /* W3C */ }  .green .shine{      position: relative;      top: -22px;      left: 5px; }  .green .glow{      position: relative;      top: -22px; }  .green .glyph{      position: relative;      top: -6px;      left: 3px;      font-size: 14px;      font-weight: bold;      color: #25571d;      z-index: 50;      opacity: 0; } /* Horrible to do this for firefox */  @-moz-document url-prefix() {      .red .glyph {          position: relative;          top: -4px;     }      .yellow .glyph {          top: -4px;          left: 3px;     }      .green .glyph{          position: relative;          top: -4px;     } } /*-----TITLE-----*/  #title{      position: relative;      top:4px;      width:40%;      text-align: center;      font-family: "Myriad Pro", sans-serif;      font-size: 14px;      text-shadow: 0px 1px 0px rgba(255,255,255,0.5);      line-height: 14px; }  .folder{      float: left;      margin-right:5px; }  .folder .tab{      width:4px;      height:2px;      background:#a4c5da;      border:1px solid #728ea3;      border-bottom: none;      border-radius:2px 2px 0px 0px;      -webkit-box-shadow:0px -1px 0px #99b5c7 inset;      margin-left: 1px;      z-index: 5000;      margin-bottom: -1px; }  .folder .body{      width: 14px;      height: 10px;      border:1px solid #6e8ba1;      background: #b8cfe0;     /* Old browsers */      background: -moz-linear-gradient(top, #b8cfe0 0%, #86adc8 100%);     /* FF3.6+ */      background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#b8cfe0), color-stop(100%,#86adc8));     /* Chrome,Safari4+ */      background: -webkit-linear-gradient(top, #b8cfe0 0%,#86adc8 100%);     /* Chrome10+,Safari5.1+ */      background: -o-linear-gradient(top, #b8cfe0 0%,#86adc8 100%);     /* Opera 11.10+ */      background: -ms-linear-gradient(top, #b8cfe0 0%,#86adc8 100%);     /* IE10+ */      background: linear-gradient(top, #b8cfe0 0%,#86adc8 100%);     /* W3C */      z-index: -50;      -webkit-box-shadow:0px 1px 0px rgba(255,255,255,0.25) inset,0px 1px 0px rgba(0,0,0,0.2);      -moz-box-shadow:0px 1px 0px rgba(255,255,255,0.25) inset,0px 1px 0px rgba(0,0,0,0.2); }  #nav{      margin: 1px 8px;      float: left; }  #view{      margin: 2px 0 0 110px;      display: inline-block; }  .control_box{      height:20px;      border-radius: 3px;      border: 1px solid #555;      background-image: -webkit-gradient(linear,left bottom,left top,color-stop(1, #fefefe),color-stop(0, #b8b8b8));      box-shadow:0px 1px 0px rgba(255,255,255,0.25); }  .control_box .control{      height:20px;      border-right: 1px solid #2e2e2e;      float: left;      text-align: center;      width: 27px; }  .control:last-child{      border-right: 0px solid !important; }  .control:active{      background: #b0afb0;      -webkit-box-shadow:0px 0px 4px #000 inset; }  .active{      background: #707070 !important;      -webkit-box-shadow:0px 3px 4px rgba(0,0,0,0.6) inset !important; }  #body {      font-family: Andale Mono, monospace;      line-height: 1em;      font-size:13px;      float: left;      width: 100%;      min-height:130px;      background:#f0eded;      padding:10px;      line-height:1.5em;      height: 40%; }  #body p {      color: #000; }  @keyframes blink {      0% {          background:rgba(99,222,0,100);     }      100% {          background:rgba(99,222,0,0);     } }  @-webkit-keyframes blink {      0% {          background:rgba(99,222,0,100);     }      100% {          background:rgba(99,222,0,0);     } }  @-moz-keyframes blink {      0% {          background:rgba(99,222,0,100);     }      100% {          background:rgba(99,222,0,0);     } }  .cursor {      background:#63de00;      display:inline-block;      width:11px;      height:19px;      margin-bottom:-3px; }  .cursor {      -webkit-animation-name: blink;      -webkit-animation-duration: 1.5s;      -webkit-animation-iteration-count: infinite;      -moz-animation-name: blink;      -moz-animation-duration: 1.5s;      -moz-animation-iteration-count: infinite; }  #body p::-webkit-selection {      background:#0b209e; }  #body p::selection {      background:#0b209e; }  #body p::-moz-selection {      background:#0b209e; }  #body p {      margin-top:5px;      margin-bottom:5px;      font-size:13px; }  #content{      float: left;      margin-top: 1px; }  #foot{      height: 23px;      width: 100%;      float: left;      background-image: -webkit-gradient(linear,left bottom,left top,color-stop(1, #cbcbcb),color-stop(0, #fff));      border-top:1px solid #515151;      border-radius:0 0 5px 5px; }  #foot .handle{      width: 11px;      height: 11px;      float: right;      margin: 6px;      overflow: hidden; }  .handle .grip{      -webkit-transform: rotate(45deg) scaley(3);      margin: 2px 0 0 2px;      color: #fff;      text-shadow: 1px 1px 0 #c6c6c6;      font-size: 14px; }  .icon{      width: 86px;      height: 100px;      margin: 20px;      float: left;      font-family: "Myriad Pro", sans-serif;      text-align: center;      font-size: 12px; }  .icon .frame{      width: 82px;      height: 82px;      border-radius: 5px;      border: 2px solid transparent; }  .icon .name{      color: #000;      padding-top: 3px;      border-radius:15px;      width: 55px;      margin: 5px 0 0 15px; }  .icon .folder{      margin:15px 0 0 6px; }  .tbl{      width: 100% }  td {      vertical-align: top;      width:50%; }  .wdb-stats, .wdb-flex-container {      display: flex;      align-items: stretch; }  .wdb-stats div {      flex-grow: 1;      padding: 2px 5px; }  .wdb-stats div li { 	 font-size: 15px; 	 font-weight: bold;      list-style: none; }  .clearfix::after {      content: "";      clear: both;      display: table; }  .float-left {      float: left!important; }  .float-right {      float: right!important; }  .wraph{      width: 100%;      height: 100%;      margin: 0;      padding: 0;      overflow: auto;      overflow-x: auto; }  #wdbWrapHistory {      height: 200px;      padding: 3px; }  #wdbWrapHistory {      overflow-x: auto; }  #wdbWrapHistory table {      border-collapse: collapse;      font-size: 11px!important; }  #wdbWrapHistory table thead tr th {      text-align: left;      padding: 1px;      border: 1px solid #fff; }  #wdbHistory tr {      border-bottom: 1px solid #fff;      color: #000!important; }  #wdbHistory tr:last-child {      border-bottom: 1px solid #ccc; }  #wdbHistory tr td {      all: revert;      white-space: nowrap;      padding: 1.5px;      border-right: 1px solid #fff;      border-left: 1px solid #fff; }  #wdbHistory tr td:first-child {      border-left: 1px solid #ccc; }  #wdbHistory tr td:last-child {      border-right: 1px solid #ccc; }  #wdbHistory tr td input {      all: revert; }  .btn-grad {      all: revert;      cursor: pointer;      background-image: linear-gradient(to right, #00E701 0%, #00E701 51%, #00E701 100%);      text-align: center;      transition: 0.5s;      padding: 3px;      background-size: 100% auto;      border: #ffc107;      border-radius: 3px; 	 font-weight: bold; 	 font-size: 14px; }  .btn-grad:hover {      background-position: right center;      text-decoration: none; }  .btn-grad:active {      opacity: .65; }  .btn-grad:disabled {      cursor: auto;      opacity: .65;      color: #fff; }  .btn-control {      padding-top: 10px!important;      padding-bottom: 10px!important; }  #wdbMenu {      padding: 3px; }  #wdbMenu select, #wdbMenu span input[type=number] {      all: revert;      background: #fff!important;      padding: 3px 5px;      border: 1px solid #ccc;      border-radius: 0; }  #window{      color: black; }  #wdbLog {      overflow-x: auto;      overflow-y: auto;      font-size: 11px;      background: #f0eded; }  #result {      position: relative;      padding-top: 2px;      padding-left: 20px;      padding-bottom: 10px;      height: 40px;      text-align: center;      vertical-align: middle;      font-size: 30px;      font-weight: bold;      font-family: "Geneva", sans-serif; }  html {      font-family: "Geneva", sans-serif; 	 font-weight: bold; }  .switch {      position: relative;      display: inline-block;      width: 40px;      height: 19px; }  .switch input {      opacity: 0;      width: 0;      height: 0; }  .slider {      position: absolute;      cursor: pointer;      top: 0;      left: 0;      right: 0;      bottom: 0;      background-color: #ccc;      -webkit-transition: .4s;      transition: .4s; }  .slider:before {      position: absolute;      content: "";      height: 19px;      width: 19px;      left: 0px;      bottom: 0px;      background-color: black;      -webkit-transition: .4s;      transition: .4s; }  input:checked + .slider {      background-image: linear-gradient(to right, #00E701 0%, #00E701 51%, #00E701 100%); }  input:focus + .slider {      box-shadow: 0 0 1px #2196F3; }  input:checked + .slider:before {      -webkit-transform: translateX(24px);      -ms-transform: translateX(24px);      transform: translateX(24px); } /* Rounded sliders */  .slider.round {      border-radius: 34px; }  .slider.round:before {      border-radius: 50%; }  .fastmode{      float: right; 	 font-weight: bold; }  </style> <div id="window">     <div id="toolbar">         <div class="top">             <div id="lights">                 <div class="light red">                     <div class="glyph">×</div>                     <div class="shine"></div>                     <div class="glow"></div>                 </div>                 <div class="light yellow">                     <div class="glyph">-</div>                     <div class="shine"></div>                     <div class="glow"></div>                 </div>                 <div class="light green">                     <div class="glyph">+</div>                     <div class="shine"></div>                     <div class="glow"></div>                 </div>             </div>             <center>                 <div id="title"> github.com/poky1084 </div>             </center>             <div id="bubble">                 <div class="shine"></div>                 <div class="glow"></div>             </div>         </div>     </div>     <div id="body">         <table class="tbl">             <tr>                 <td>                     <div class="wdb-stats" id="wdbStats">                         <div>                             <li class="clearfix"> <span class="float-left">Balance:</span> <span class="float-right"><span id="wdbBalance">0.00000000</span></span>                             </li>                             <li class="clearfix"> <span class="float-left">Wagered:</span> <span class="float-right">(<span id="wdbPercentWagered">0.00</span>x) <span id="wdbWagered">0.00000000</span></span>                             </li>                             <li class="clearfix"> <span class="float-left">Profit:</span> <span class="float-right" id="wdbWrapPercentProfit">(<span id="wdbPercentProfit">0.00</span>%) <span id="wdbProfit">0.00000000</span></span>                             </li>                             <li class="clearfix"> <span class="float-left">W/L/T:</span> </li>                             <li class="clearfix"> <span class="float-left">H/L/Current:</span> </li>                             <li class="clearfix"> <span class="float-left">Time:</span> </li>                         </div>                         <div>                             <li class="clearfix"> <span class="float-left">MaxBet:</span> <span class="float-right"><span id="wdbHighBet">0.00000000</span></span>                             </li>                             <li class="clearfix"> <span class="float-left">MaxLose:</span> <span class="float-right"><span id="wdbHighLose">0.00000000</span></span>                             </li>                             <li class="clearfix"> <span class="float-left">MaxProfit:</span> <span class="float-right"><span id="wdbHighProfit">0.00000000</span></span>                             </li>                             <li class="clearfix"> <span class="float-right"><span id="wdbBets"><span style="">0</span> / <span style="">0</span> / 0</span>                                 </span>                             </li>                             <li class="clearfix"> <span class="float-right"><span id="wdbHighLowStreak"><span style="">0</span> / <span style="">0</span> / <span id="currentstrk">0</span></span>                                 </span>                             </li>                             <li class="clearfix"> <span class="float-right"><span id="wdbTime">0:0:0:0</span></span>                             </li>                         </div>                     </div>                 </td>                 <td>                     <div class="half" id="chartContainer" style="height: 150px; width: 540px;"></div>                 </td>             </tr>             <tr>                 <td>                     <div style="flex-grow: 1;width: 520px;">                         <div id="result"> </div>                         <div class="wraph" id="wdbWrapHistory">                             <table>                                 <thead>                                     <tr>                                         <th>Bets</th>                                         <th>Game</th>                                         <th>Amount</th>                                         <th>High</th>                                         <th>Multiplier</th>                                         <th>Profit</th>                                         <th>Payout</th>                                         <th>Target</th>                                         <th>Roll</th>                                         <th>Settings</th>                                         <th>BetID</th>                                     </tr>                                 </thead>                                 <tbody id="wdbHistory"></tbody>                             </table>                         </div>                     </div>                     <div id="wdbWrapLog">                         <table id="wdbLog" class="wraph" style="width: 100%; height: 170px;">                             <tr>                                 <td>‏‏‎ ‎</td>                             </tr>                             <tr>                                 <td>‏‏‎ ‎</td>                             </tr>                             <tr>                                 <td>‏‏‎ ‎</td>                             </tr>                             <tr>                                 <td>‏‏‎ ‎</td>                             </tr>                             <tr>                                 <td>‏‏‎ ‎</td>                             </tr>                             <tr>                                 <td>‏‏‎ ‎</td>                             </tr>                             <tr>                                 <td>‏‏‎ ‎</td>                             </tr>                             <tr>                                 <td>‏‏‎ ‎</td>                             </tr>                             <tr>                                 <td>‏‏‎ ‎</td>                             </tr>                         </table>                     </div>                 </td>                 <td>                     <div id="wdbMenu">                         <div style="padding: 5px 2px 5px">                             <button class="btn-grad" id="wdbSaveScriptButton">Save</button>                             <div class="fastmode"> Fast Mode:                                 <label class="switch">                                     <input id="speedChange" type="checkbox"> <span class="slider round"></span> </label>                             </div>                         </div>                     </div>                     <textarea id="editor"></textarea>                     <div id="wdbControlMenu">                         <div id="wdbMenu">                             <button id="wdbStartButton" class="btn-grad btn-control" style="width: 100px;">Start</button>                             <button id="wdbStopButton" class="btn-grad btn-control" style="width: 100px;">Stop</button>                             <select id="wdbMenuCoin" class="wdb-select">                                 <option value="btc">btc</option>                             </select>                             <select id="gameselect" class="gameselect">                                 <option value="dice" selected="selected">dice</option>                                 <option value="limbo">limbo</option>                                 <option value="mines">mines</option>                                 <option value="keno">keno</option>                                 <option value="plinko">plinko</option>                                 <option value="wheel">wheel</option>                                 <option value="roulette">roulette</option> 								<option value="dragontower">dragon</option> 								<option value="baccarat">baccarat</option>                                 <option value="crash">crash</option>                                 <option value="slide">slide</option>                             </select>                             <select id="themebot" class="themebot">                                 <option value="light" selected="selected">light</option>                                 <option value="dark">dark</option>                                 <option value="blue">blue</option>                                 <option value="black">black</option>                             </select>                             <button id="resetall" class="btn-grad">ResetAll</button>                         </div>                     </div>                 </td>             </tr>         </table>         <p> </p>         <div class="cursor"></div>     </div> </div>')
 
 
let currency = "btc"
var token = "";

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
var dobet_run = false;
var crash_bet_placed = false;
var slide_bet_placed = false;
var crash_game_ran = false;
var slide_game_ran = false;
var make_slide_bet = false;
let speedmode = false;

var gamelist = {}
var makecount = 0
var id = {}
var betidentifier = "identity01"
var bgChart = "#f0eded"
var betlist = []

let mines = 1
let fields = [1,2,3]
let risk = "low"
let numbers = [1,2,3,4,5,6,7,8,9]
let rows = 8
let segments = 10
let chips = [{"value":"colorBlack", "amount":0.0001}]
let multiplier_start = 1
 
let kenorisk = risk
let	kenoselected = numbers
let	minecount = mines
let	fieldcount = fields
let	plinkorows = rows
let	plinkorisk = risk
let	wheelrisk = risk
let	wheelsegments = segments
let	selection = chips

let eggs = [0]
let difficulty = "easy"
let dragondifficulty = difficulty
let dragoneggs = eggs

let banker = 0
let player = 0
let tie = 0
let baccarattie = tie
let baccaratplayer = player
let baccaratbanker = banker

 function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
}
 
token = getCookie("session")

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
addJs('https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.62.3/codemirror.min.js', () => {	addJs('https://cdnjs.cloudflare.com/ajax/libs/codemirror/6.65.7/mode/javascript/javascript.min.js', () => {	})})
addJs('https://canvasjs.com/assets/script/canvasjs.min.js', () => {  })
var editor = ''
addCss('https://cdnjs.cloudflare.com/ajax/libs/codemirror/6.65.7/theme/darcula.min.css', () => {})
addCss('https://cdnjs.cloudflare.com/ajax/libs/codemirror/6.65.7/codemirror.min.css', () => {})
//addJs('https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js', () => {})

let theme = "light"

setTimeout(() => {
	
	/* if(window.location.host.includes("stake")){
		if(document.querySelectorAll('[data-test="left-sidebar"]')[0] != null){
		document.querySelectorAll('[data-test="left-sidebar"]')[0].remove();
		document.querySelectorAll('[data-test="home-button"]')[0].remove();
		}
	}*/
  
	editor = CodeMirror.fromTextArea(document.getElementById('editor'), {
		mode: "javascript",
		lineNumbers: true,
	});
	
	editor.save();
	editor.setSize(530, 300);
	
drawChart();

if(localStorage.getItem("jscode") != null){
	editor.setValue(localStorage.getItem("jscode"));
} else {
	editor.setValue(`chance=49.5 
bethigh=true
nextbet=0.00001
basebet=nextbet

dobet = function() {   
	if (win) {     
    	nextbet=basebet   
    } else {    
    	nextbet=nextbet*1.5   
    } 
	log("Betting "+nextbet+" on "+chance+" chance.")
}`);
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
	theme = localStorage.getItem("themebot");
	selectElement('themebot', theme);
	if(theme == "dark"){
		bgChart = "#383838"
		drawChart();
		document.getElementById("body").style.background="#383838";
		document.getElementById("window").style.background="#383838";
		document.getElementById("wdbLog").style.background="#383838";
		document.getElementById("window").style.color="white";
		document.getElementsByClassName("CodeMirror")[0].style.background = "white"
		document.getElementsByClassName("CodeMirror")[0].style.color = "black"				
		document.getElementById("result").style.color = "white";
						
	} else if(theme == "light") {
		bgChart = "#f0eded"
		drawChart();
		document.getElementById("body").style.background="#f0eded";
		document.getElementById("window").style.background="#f0eded";
		document.getElementById("wdbLog").style.background="#f0eded";
		document.getElementById("window").style.color="black";
		document.getElementsByClassName("CodeMirror")[0].style.background = "white"
		document.getElementsByClassName("CodeMirror")[0].style.color = "black"
		document.getElementById("result").style.color = "black";
		
	} else if(theme == "blue") {
		bgChart = "#213743"
		drawChart();
		document.getElementById("body").style.background="#213743";
		document.getElementById("window").style.background="#213743";
		document.getElementById("wdbLog").style.background="#213743";
		document.getElementById("window").style.color="white";
		document.getElementsByClassName("CodeMirror")[0].style.background = "white"
		document.getElementsByClassName("CodeMirror")[0].style.color = "black"
		document.getElementById("result").style.color = "white";
	} else if(theme == "black") {
		bgChart = "black"
		drawChart();
		document.getElementById("body").style.background="black";
		document.getElementById("window").style.background="black";
		document.getElementById("wdbLog").style.background="black";
		document.getElementById("window").style.color="#00E701";
		document.getElementsByClassName("CodeMirror")[0].style.background = "white"
		document.getElementsByClassName("CodeMirror")[0].style.color = "black"
		document.getElementById("result").style.color = "white";
	}

}

userBalances();
startScoket();
}, "3000");

// drag and drop bot
var draggin = false
var mydiv = document.getElementById("toolbar");
var mywindow = document.getElementById('window')

function onMouseDrag({ movementX, movementY }) {
    let getContainerStyle = window.getComputedStyle(mywindow);
    let leftValue = parseInt(getContainerStyle.left);
    let topValue = parseInt(getContainerStyle.top);
	
	if(draggin){
    mywindow.style.left = `${leftValue + movementX}px`;
    mywindow.style.top = `${topValue + movementY}px`;
	}
	
}

mydiv.addEventListener("mousedown", () => {
	draggin = false
    mydiv.addEventListener("mousemove", onMouseDrag);
});
mydiv.addEventListener("mouseup", () => {
	draggin = false
    mydiv.removeEventListener("mousemove", onMouseDrag);
});

document.body.addEventListener("mouseup", () => {
	draggin = false
});



/*
var editorSave = document.getElementById("editor");
editorSave.addEventListener('input', function() {localStorage.setItem("jscode", editor.getValue()); }, false);
*/
var downloadBtn = document.getElementById("wdbSaveScriptButton");

downloadBtn.addEventListener('click', function() { downloadFile(); }, false);

var btnReset = document.getElementById("resetall");

btnReset.addEventListener('click', function() { resetAll(); }, false);

var btnStart = document.getElementById("wdbStartButton");

btnStart.addEventListener('click', function() {  start();}, false);

var btnStop = document.getElementById("wdbStopButton");
btnStop.addEventListener('click', function() {  btnStart.disabled = false; run_clicked = false; running = false; dobet = function(){} }, false);


//let websocket = ""

function startScoket(){
	let websocket = new WebSocket('wss://' + window.location.host + '/_api/websockets', 'graphql-transport-ws');
    
  websocket.onopen = () => {
 
    websocket.send(JSON.stringify({"type":"connection_init","payload":{"accessToken":token,"language":"en","lockdownToken":"s5MNWtjTM5TvCMkAzxov"}}));
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
				if(obj.payload.data.hasOwnProperty("crash") && game == "crash" ){
					previousbet = amount;
					
					if(obj.payload.data.crash.event.status == "in_progress"){
						
						multiplier_start = obj.payload.data.crash.event.multiplier
						document.getElementById("result").innerHTML = obj.payload.data.crash.event.multiplier.toFixed(2) + 'x'
					} 
					
					if(obj.payload.data.crash.event.result == "autocashout")
					{
						cashedoutauto = true;
						//bet_has_been_made = false;
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
						betcount++;
						bets = betcount;
						
					
						current_profit = parseFloat(amount * target_multi) - parseFloat(amount);
						profit_total += parseFloat(amount * target_multi) - parseFloat(amount);
						wagered += parseFloat(amount);
						
						var row = document.createElement("tr");
					
					
					
						row.style.background = "#91F190";
					
					
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
						
						tdbets.innerHTML = betcount;
						tdamount.innerHTML = amount.toFixed(8)
						
						var tdcheck = document.createElement("input");
						tdcheck.type = "checkbox";
						tdcheck.name = "checked";
						tdcheck.checked = "checked";
						tdcheck.id = "checked";
						
						tdhigh.appendChild(tdcheck);
						tdTargetChance.innerHTML = target_multi.toFixed(4) + ""
						tdRollChance.innerHTML = ""
						tdProfit.innerHTML = current_profit.toFixed(8)
						tdTargetNumber.innerHTML = ">" + target_multi.toFixed(4)
						//lastBet.targetNumber = obj.payload.data.crash.event.cashoutAt;
						tdRollNumber.innerHTML = ""
						tdNonce.innerHTML = game;
						tdBetID.innerHTML = obj.payload.data.crash.event.id;
						tdPayout.innerHTML = parseFloat(amount * target_multi).toFixed(8);
						

						
						row.appendChild(tdbets);
						row.appendChild(tdNonce);
						row.appendChild(tdamount);
						row.appendChild(tdhigh);
						row.appendChild(tdTargetChance);
						row.appendChild(tdProfit);
						row.appendChild(tdPayout);
						row.appendChild(tdTargetNumber);
						row.appendChild(tdRollNumber);
						row.appendChild(tdRollChance);
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
								if(document.getElementById("themebot").value == "dark" || document.getElementById("themebot").value == "blue" || document.getElementById("themebot").value == "black"){
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
							
						
						
					}
					if(obj.payload.data.crash.event.result == "busted"){
						
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
						
						betcount++;
						bets = betcount;
						
						var row = document.createElement("tr");
					
						
						row.style.background = "#FFC0CB";
			
						
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
						
						tdbets.innerHTML = betcount;
						tdamount.innerHTML = amount.toFixed(8)
						
						var tdcheck = document.createElement("input");
						tdcheck.type = "checkbox";
						tdcheck.name = "checked";
						tdcheck.checked = "checked";
						tdcheck.id = "checked";
						
						tdhigh.appendChild(tdcheck);
						tdTargetChance.innerHTML = (0).toFixed(4) + ""
						tdRollChance.innerHTML = ""
						tdProfit.innerHTML = current_profit.toFixed(8)
						tdTargetNumber.innerHTML = ">" + target_multi.toFixed(4)
						lastBet.targetNumber = target_multi;
						tdRollNumber.innerHTML = ""
						tdNonce.innerHTML = game;
						tdBetID.innerHTML = "";
						tdPayout.innerHTML = ""
						
						
						
						row.appendChild(tdbets);
						row.appendChild(tdNonce);
						row.appendChild(tdamount);
						row.appendChild(tdhigh);
						row.appendChild(tdTargetChance);
						row.appendChild(tdProfit);
						row.appendChild(tdPayout);
						row.appendChild(tdTargetNumber);
						row.appendChild(tdRollNumber);
						row.appendChild(tdRollChance);
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
							if(document.getElementById("themebot").value == "dark" || document.getElementById("themebot").value == "blue" || document.getElementById("themebot").value == "black"){
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
				
					}
					if(obj.payload.data.crash.event.status == "crash"){
							crash_bet_placed = false;
							slide_bet_placed = false;
							make_slide_bet = false;
							if(theme == "light"){
								document.getElementById("result").style.color = "black";
							} else {
								document.getElementById("result").style.color = "white";
							}
							document.getElementById("result").innerHTML = "Crash at " + obj.payload.data.crash.event.multiplier.toFixed(2);
							//var prog = document.getElementById("progress");
							//var elem = document.getElementById("myBar");
							//prog.style.display = "none";
							//elem.style.width = "0%";
							//betcount++;
							//bets = betcount;
							lastBet.crashAt = obj.payload.data.crash.event.multiplier;
							
							
							var row = document.createElement("tr");
							//betcount++;
							row.style.background = "#e8e9eb";
							//win = null
							//lastBet.win = null
							
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
							
							tdbets.innerHTML = ""
							tdamount.innerHTML = "CrashAt"
							
							var tdcheck = document.createElement("input");
							tdcheck.type = "checkbox";
							tdcheck.name = "checked";
							tdcheck.checked = "checked";
							tdcheck.id = "checked";
							
							tdhigh.appendChild(tdcheck);
							tdTargetChance.innerHTML = lastBet.crashAt.toFixed(4) + "";
							tdRollChance.innerHTML = ""
							tdProfit.innerHTML = ""
							tdTargetNumber.innerHTML = ""
							//lastBet.targetNumber = target_multi;
							tdRollNumber.innerHTML = lastBet.crashAt.toFixed(4) + "";
							tdNonce.innerHTML = game;
							tdBetID.innerHTML = "";
							tdPayout.innerHTML = "";
							
							
							row.appendChild(tdbets);
							row.appendChild(tdNonce);
							row.appendChild(tdamount);
							row.appendChild(tdhigh);
							row.appendChild(tdTargetChance);
							row.appendChild(tdProfit);
							row.appendChild(tdPayout);
							row.appendChild(tdTargetNumber);
							row.appendChild(tdRollNumber);
							row.appendChild(tdRollChance);
							row.appendChild(tdBetID);
							var table = document.getElementById("wdbHistory");							
							table.prepend(row);
			
							if (table.rows.length > 50)
							{
								table.deleteRow(table.rows.length - 1);
							}
							
							if(cashedoutauto == false){
								
								
							}
							
							
	
						} 
					
						
						/*if(obj.payload.data.crash.event.result == "autocashout")
						{
							cashedoutauto = true;
						}*/
						
						if(obj.payload.data.crash.event.nextRoundIn < 5000 && obj.payload.data.crash.event.nextRoundIn > 200){
								slide_game_ran = false
								crash_game_ran = false
								if(run_clicked){
								
									if(game == "crash" && crash_bet_placed == false){
										crash_bet_placed = true
		
										crashbet(amount, target_multi);
									} 
									if(game == "slide" && slide_bet_placed == false){
										id = {}
										gamelist = {}
										slide_bet_placed = true									
										betlist.forEach(function(value){
											slidebet(value[0], value[1], value[2])
										});
										betlist = []
										
										
										
									}
								}
							
							//win = false;
							//lastBet.win = false;
							//document.getElementById("listed").innerHTML = "";
							

							
							
						} 
						if(obj.payload.data.crash.event.status == "pending"){
							
							////lastBet.win = null;
							cashedoutauto = false;
							//bet_has_been_made = false
							//dobet_run = false
							//win = null;
							
						}
						
					 
			
								
			} else if(obj.payload.data.hasOwnProperty("slide") && game == "slide"){
			
					if(obj.payload.data.slide.event.status == "result" ){
							slide_bet_placed = false
							crash_bet_placed = false
							make_slide_bet = false;
							betlist = []
							previousbet = amount;
							if(theme == "light"){
								document.getElementById("result").style.color = "black";
							} else {
								document.getElementById("result").style.color = "white";
							}
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
							//win = null
							//lastBet.win = null
							
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
							
							tdbets.innerHTML = "";
							tdamount.innerHTML = "SlideAt"
							
							var tdcheck = document.createElement("input");
							tdcheck.type = "checkbox";
							tdcheck.name = "checked";
							tdcheck.checked = "checked";
							tdcheck.id = "checked";
							
							tdhigh.appendChild(tdcheck);
							tdTargetChance.innerHTML = lastBet.crashAt.toFixed(4) + "";
							tdRollChance.innerHTML = ""
							tdProfit.innerHTML = ""
							tdTargetNumber.innerHTML = ""
							//lastBet.targetNumber = target_multi;
							tdRollNumber.innerHTML = lastBet.crashAt.toFixed(4) + "";
							tdNonce.innerHTML = game;
							tdBetID.innerHTML = "";
							tdPayout.innerHTML = "";
							
							
							row.appendChild(tdbets);
							row.appendChild(tdNonce);
							row.appendChild(tdamount);
							row.appendChild(tdhigh);
							row.appendChild(tdTargetChance);
							row.appendChild(tdProfit);
							row.appendChild(tdPayout);
							row.appendChild(tdTargetNumber);
							row.appendChild(tdRollNumber);
							row.appendChild(tdRollChance);
							row.appendChild(tdBetID);
							var table = document.getElementById("wdbHistory");							
							table.prepend(row);
			
							if (table.rows.length > 50)
							{
								table.deleteRow(table.rows.length - 1);
							}
							
							setTimeout(() => {
								dobet();
								amount = nextbet;
								target_multi = 99 / chance;
							}, "5000");
					
					}
			
					
			
					
						
					
						if(obj.payload.data.slide.event.__typename == "MultiplayerSlideBet"){
						
							if(obj.payload.data.slide.event.result == "autocashout"){
								betlist = []
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
								var tdhigh = document.createElement("td");
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
								
								var tdcheck = document.createElement("input");
								tdcheck.type = "checkbox";
								tdcheck.name = "checked";
								tdcheck.checked = "checked";
								tdcheck.id = "checked";
								
								tdhigh.appendChild(tdcheck);
								tdTargetChance.innerHTML = obj.payload.data.slide.event.cashoutAt.toFixed(4) + ""
								tdRollChance.innerHTML = ""
								tdProfit.innerHTML = current_profit.toFixed(8)
								tdTargetNumber.innerHTML = ">" + obj.payload.data.slide.event.cashoutAt.toFixed(4) + "";
								//lastBet.targetNumber = target_multi;
								tdRollNumber.innerHTML = lastBet.crashAt.toFixed(4) + "";
								tdNonce.innerHTML = game;
								tdBetID.innerHTML = obj.payload.data.slide.event.gameId;
								tdPayout.innerHTML = obj.payload.data.slide.event.payout.toFixed(8);

			
								row.appendChild(tdbets);
								row.appendChild(tdNonce);
								row.appendChild(tdamount);
								row.appendChild(tdhigh);
								row.appendChild(tdTargetChance);
								row.appendChild(tdProfit);
								row.appendChild(tdPayout);
								row.appendChild(tdTargetNumber);
								row.appendChild(tdRollNumber);
								row.appendChild(tdRollChance);
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
										if(document.getElementById("themebot").value == "dark" || document.getElementById("themebot").value == "blue" || document.getElementById("themebot").value == "black"){
										document.getElementById("wdbProfit").style.color = "#05f711"
										document.getElementById("wdbPercentProfit").style.color = "#05f711"
									} else {
										document.getElementById("wdbProfit").style.color = "green"
										document.getElementById("wdbPercentProfit").style.color = "green"
									}
								}
								/*
								dobet();
					
								amount = nextbet;
								target_multi = 99 / chance;
								*/
							}
						
							
							if (obj.payload.data.slide.event.result == "busted"){
								betlist = []
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
								var tdhigh = document.createElement("td");
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
								
								var tdcheck = document.createElement("input");
								tdcheck.type = "checkbox";
								tdcheck.name = "checked";
								tdcheck.checked = "checked";
								tdcheck.id = "checked";
								
								tdhigh.appendChild(tdcheck);
								tdTargetChance.innerHTML = (0).toFixed(4) + "";
								tdRollChance.innerHTML = ""
								tdProfit.innerHTML = current_profit.toFixed(8)
								tdTargetNumber.innerHTML = ">" + obj.payload.data.slide.event.cashoutAt.toFixed(4) + "";
								//lastBet.targetNumber = target_multi;
								tdRollNumber.innerHTML = lastBet.crashAt.toFixed(4) + "";
								tdNonce.innerHTML = game;
								tdBetID.innerHTML = obj.payload.data.slide.event.gameId;
								tdPayout.innerHTML = obj.payload.data.slide.event.payout.toFixed(8);
								
								
								row.appendChild(tdbets);
								row.appendChild(tdNonce);
								row.appendChild(tdamount);
								row.appendChild(tdhigh);
								row.appendChild(tdTargetChance);
								row.appendChild(tdProfit);
								row.appendChild(tdPayout);
								row.appendChild(tdTargetNumber);
								row.appendChild(tdRollNumber);
								row.appendChild(tdRollChance);
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
										if(document.getElementById("themebot").value == "dark" || document.getElementById("themebot").value == "blue" || document.getElementById("themebot").value == "black"){
										document.getElementById("wdbProfit").style.color = "#05f711"
										document.getElementById("wdbPercentProfit").style.color = "#05f711"
									} else {
										document.getElementById("wdbProfit").style.color = "green"
										document.getElementById("wdbPercentProfit").style.color = "green"
									}
								}
								
								/*
								dobet();
					
								amount = nextbet;
								target_multi = 99 / chance;
								*/
								
							}
						}
						
							

	
							
	
				
						
						
					
						if(obj.payload.data.slide.event.nextRoundIn < 15000 && obj.payload.data.slide.event.nextRoundIn > 1000){
							
							document.getElementById("result").innerHTML = ""
							

								
								/*if(win == null){
									win = true;
									lastBet.win = true;
								}*/
								
								
								
								
								lastBet.amount = previousbet;
								lastBet.target = target_multi;
								amount = nextbet;
								target_multi = 99 / chance;
								
								
								slide_game_ran = false
								crash_game_ran = false
								
								if(run_clicked){
									if(game == "crash" && crash_bet_placed == false){
										crash_bet_placed = true

										crashbet(amount, target_multi);
									}
									if(game == "slide" && slide_bet_placed == false){
										slide_bet_placed = true
										id = {}
										gamelist = {}
										betlist.forEach(function(value){
											slidebet(value[0], value[1], value[2])
										});
										betlist = []
										
										
									}
									
									
								}
								

						}
					
					
						if(obj.payload.data.slide.event.status == "pending"){
										
							//lastBet.win = null;
							//win = null;
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
	if(game == "slide"){
		makecount++;
		betlist.push([n, y, betidentifier])
		
	}
}
function dataslide(json, betidentifier){
	if(json.data.hasOwnProperty("multiplayerSlideBet")){
		//console.log(json.data.multiplayerSlideBet.id)
		gamelist[json.data.multiplayerSlideBet.id] = betidentifier
		log("Slide bet placed. ID:" + betidentifier)
		slide_bet_placed = true;
		if(json.data.multiplayerCrashBet.hasOwnProperty("slideResult")){
			if(json.data.multiplayerCrashBet.slideResult == "pending"){
					slide_bet_placed = true;	
										
			}
		}
	}
}


function datacrash(json){
	if(json.data.hasOwnProperty("multiplayerCrashBet")){
		
		if(json.data.multiplayerCrashBet.hasOwnProperty("result")){
			if(json.data.multiplayerCrashBet.result == "pending"){
				crash_bet_placed = true;
				log("Crash bet placed.")
				
			}
		}
	}
}



function crashbet(betsize, target_multi){
	
	
	var body = {
		variables:{
        "cashoutAt": target_multi,
        "amount": betsize,
        "currency": currency
		},
		query:"mutation MultiplayerCrashBet($amount: Float!, $currency: CurrencyEnum!, $cashoutAt: Float!) {\n  multiplayerCrashBet(amount: $amount, currency: $currency, cashoutAt: $cashoutAt) {\n    ...MultiplayerCrashBet\n    user {\n      id\n      activeCrashBet {\n        ...MultiplayerCrashBet\n      }\n    }\n  }\n}\n\nfragment MultiplayerCrashBet on MultiplayerCrashBet {\n  id\n  user {\n    id\n    name\n  }\n  payoutMultiplier\n  gameId\n  amount\n  payout\n  currency\n  result\n  updatedAt\n  cashoutAt\n  btcAmount: amount(currency: btc)\n}\n"		}
		
	fetch('https://' +  window.location.host + '/_api/graphql', {
		method: 'post',
		body:    JSON.stringify(body),
		headers: { 'Content-Type': 'application/json','x-access-token': token},
	})
	.then(res => res.json())
	.then(json => datacrash(json))
	.catch(function(err, json) {
		//console.log(err);
		if(running == true)
		{
			setTimeout(() => {
				//crashbet(betsize, target_multi)							
			}, "2000");
			
		}
	});
	
}

function slidebet(betsize, chance, betidentifier){
	var body = {
		variables:{
        "identifier": randomString(21),
        "cashoutAt": (99 / chance),
        "amount": betsize,
        "currency": currency
		},
		query:"mutation MultiplayerSlideBet($amount: Float!, $currency: CurrencyEnum!, $cashoutAt: Float!, $identifier: String!) {\n  multiplayerSlideBet(\n    amount: $amount\n    currency: $currency\n    cashoutAt: $cashoutAt\n    identifier: $identifier\n  ) {\n    __typename\n    ...MultiplayerSlideBet\n    user {\n      id\n      activeSlideBet {\n        ...MultiplayerSlideBet\n      }\n    }\n  }\n}\n\nfragment MultiplayerSlideBet on MultiplayerSlideBet {\n  id\n  user {\n    id\n    name\n    preferenceHideBets\n  }\n  payoutMultiplier\n  gameId\n  amount\n  payout\n  currency\n  slideResult: result\n  updatedAt\n  cashoutAt\n  btcAmount: amount(currency: btc)\n  active\n  createdAt\n}\n"		}
		
	
	fetch('https://' +  window.location.host + '/_api/graphql', {
		method: 'post',
		body:    JSON.stringify(body),
		headers: { 'Content-Type': 'application/json','x-access-token': token},
	})
	.then(res => res.json())
	.then(json => dataslide(json, betidentifier))
	.catch(function(err, json) {
		//console.log(err);
		if(running == true)
		{
			setTimeout(() => {
				//slidebet(betsize, target_multi)							
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
        "currency": currency,
        "amount": e
		},
		query:"mutation CreateVaultDeposit($currency: CurrencyEnum!, $amount: Float!) {\n  createVaultDeposit(currency: $currency, amount: $amount) {\n    id\n    amount\n    currency\n    user {\n      id\n      balances {\n        available {\n          amount\n          currency\n          __typename\n        }\n        vault {\n          amount\n          currency\n          __typename\n        }\n        __typename\n      }\n      __typename\n    }\n    __typename\n  }\n}\n"		}
	
	fetch('https://' +   window.location.host + '/_api/graphql', {
		method: 'post',
		body:    JSON.stringify(body),
		headers: { 'Content-Type': 'application/json','x-access-token': token},
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



var gameselection = document.getElementById("gameselect");

gameselection.addEventListener('change', function(e) {  
	let gamevalue = document.getElementById("gameselect").value
    localStorage.setItem("gameselect", gamevalue);
	game = document.getElementById("gameselect").value;
	stop();
	document.getElementById("result").innerHTML = ""
	if(theme == "light"){
		document.getElementById("result").style.color = "black";
	} else {
		document.getElementById("result").style.color = "white";
	}
}, false);

var themebots = document.getElementById("themebot");

themebots.addEventListener('change', function(e) {  
	theme = document.getElementById("themebot").value
    localStorage.setItem("themebot", theme);
	if(theme == "dark"){
		bgChart = "#383838"
		drawChart();
		document.getElementById("body").style.background="#383838";
		document.getElementById("window").style.background="#383838";
		document.getElementById("wdbLog").style.background="#383838";
		document.getElementById("window").style.color="white";
		document.getElementsByClassName("CodeMirror")[0].style.background = "white"
		document.getElementsByClassName("CodeMirror")[0].style.color = "black"				
		document.getElementById("result").style.color = "white";
						
	} else if(theme == "light") {
		bgChart = "#f0eded"
		drawChart();
		document.getElementById("body").style.background="#f0eded";
		document.getElementById("window").style.background="#f0eded";
		document.getElementById("wdbLog").style.background="#f0eded";
		document.getElementById("window").style.color="black";
		document.getElementsByClassName("CodeMirror")[0].style.background = "white"
		document.getElementsByClassName("CodeMirror")[0].style.color = "black"
		document.getElementById("result").style.color = "black";
		
	} else if(theme == "blue") {
		bgChart = "#213743"
		drawChart();
		document.getElementById("body").style.background="#213743";
		document.getElementById("window").style.background="#213743";
		document.getElementById("wdbLog").style.background="#213743";
		document.getElementById("window").style.color="white";
		document.getElementsByClassName("CodeMirror")[0].style.background = "white"
		document.getElementsByClassName("CodeMirror")[0].style.color = "black"
		document.getElementById("result").style.color = "white";
	} else if(theme == "black") {
		bgChart = "black"
		drawChart();
		document.getElementById("body").style.background="black";
		document.getElementById("window").style.background="black";
		document.getElementById("wdbLog").style.background="black";
		document.getElementById("window").style.color="#00E701";
		document.getElementsByClassName("CodeMirror")[0].style.background = "white"
		document.getElementsByClassName("CodeMirror")[0].style.color = "black"
		document.getElementById("result").style.color = "white";
	}
	if(theme == "light"){
		document.getElementById("result").style.color = "black";
	} else {
		document.getElementById("result").style.color = "white";
	}
}, false);

var wdbMenuCoins = document.getElementById("wdbMenuCoin");

wdbMenuCoins.addEventListener('change', function(e) {  
	currency = document.getElementById("wdbMenuCoin").value
    localStorage.setItem("currenc", currency);
	userBalances();

}, false);

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
	document.getElementById("result").innerHTML = "";
	if(theme == "light"){
		document.getElementById("result").style.color = "black";
	} else {
		document.getElementById("result").style.color = "white";
	}
	
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
	if(theme == "light"){
		document.getElementById("result").style.color = "black";
	} else {
		document.getElementById("result").style.color = "white";
	}
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
		headers: { 'Content-Type': 'application/json','x-access-token': token},
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
		headers: { 'Content-Type': 'application/json','x-access-token': token},
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

function LimboBet(betsize, target_multi){
	var body = {
		variables:{
		"multiplierTarget": target_multi,
        "identifier": randomString(21),
        "amount": betsize,
        "currency": currency
		},
		query:"mutation LimboBet($amount: Float!, $multiplierTarget: Float!, $currency: CurrencyEnum!, $identifier: String!) {\n  limboBet(\n    amount: $amount\n    currency: $currency\n    multiplierTarget: $multiplierTarget\n    identifier: $identifier\n  ) {\n    ...CasinoBet\n    state {\n      ...CasinoGameLimbo\n    }\n  }\n}\n\nfragment CasinoBet on CasinoBet {\n  id\n  active\n  payoutMultiplier\n  amountMultiplier\n  amount\n  payout\n  updatedAt\n  currency\n  game\n  user {\n    id\n    name\n  }\n}\n\nfragment CasinoGameLimbo on CasinoGameLimbo {\n  result\n  multiplierTarget\n}\n"	}
		
	fetch('https://' +  window.location.host + '/_api/graphql', {
		method: 'post',
		body:    JSON.stringify(body),
		headers: { 'Content-Type': 'application/json','x-access-token': token},
	})
	.then(res => res.json())
	.then(json => data(json))
	.catch(function(err, json) {
		//console.log(err, json);
		if(running == true)
		{
			setTimeout(() => {
				if(running){
				LimboBet(betsize, target_multi)
				}				
			}, "2000");
			
		}
	});
	
}

function DiceBet(betsize, chance, bethigh){
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
			"amount": betsize,
			"currency": currency
			},
			operationName: "PrimediceRoll",
			query:"mutation PrimediceRoll($amount: Float!, $target: Float!, $condition: CasinoGamePrimediceConditionEnum!, $currency: CurrencyEnum!) {\n  primediceRoll(amount: $amount, target: $target, condition: $condition, currency: $currency) {\n    ...CasinoBetFragment\n    state {\n      ...PrimediceStateFragment\n      __typename\n    }\n    __typename\n  }\n}\n\nfragment CasinoBetFragment on CasinoBet {\n  id\n  active\n  payoutMultiplier\n  amountMultiplier\n  amount\n  payout\n  updatedAt\n  currency\n  game\n  user {\n    id\n    name\n    __typename\n  }\n  __typename\n}\n\nfragment PrimediceStateFragment on CasinoGamePrimedice {\n  result\n  target\n  condition\n  __typename\n}\n"	}
			
		fetch('https://' +  window.location.host + '/_api/graphql', {
			method: 'post',
			body:    JSON.stringify(body),
			headers: { 'Content-Type': 'application/json','x-access-token': token},
		})
		.then(res => res.json())
		.then(json => data(json))
		.catch(function(err, json) {
			//console.log(err, json);
			if(running == true)
			{
				setTimeout(() => {
					if(running){
					 DiceBet(betsize, chance, bethigh)	
					}					 
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
        "amount": betsize,
        "currency": currency
		},
		query:"mutation DiceRoll($amount: Float!, $target: Float!, $condition: CasinoGameDiceConditionEnum!, $currency: CurrencyEnum!, $identifier: String!) {\n  diceRoll(\n    amount: $amount\n    target: $target\n    condition: $condition\n    currency: $currency\n    identifier: $identifier\n  ) {\n    ...CasinoBet\n    state {\n      ...CasinoGameDice\n    }\n  }\n}\n\nfragment CasinoBet on CasinoBet {\n  id\n  active\n  payoutMultiplier\n  amountMultiplier\n  amount\n  payout\n  updatedAt\n  currency\n  game\n  user {\n    id\n    name\n  }\n}\n\nfragment CasinoGameDice on CasinoGameDice {\n  result\n  target\n  condition\n}\n"	}
		
	fetch('https://' +  window.location.host + '/_api/graphql', {
		method: 'post',
		body:    JSON.stringify(body),
		headers: { 'Content-Type': 'application/json','x-access-token': token},
	})
	.then(res => res.json())
	.then(json => data(json))
	.catch(function(err, json) {
		//console.log(err, json);
		if(running == true)
		{
			setTimeout(() => {
				if(running){
				 DiceBet(betsize, chance, bethigh)		
				}				 
			}, "2000");
			
		}
	});
	}
	
}

function minebet(betsize, fieldcount, minecount){
	var body = {
		variables:{
        "amount": betsize,
        "currency": currency,
        "identifier": randomString(21),
        "minesCount": minecount,
        "fields": fieldcount
		},
		query:"mutation MinesBet($amount: Float!, $currency: CurrencyEnum!, $minesCount: Int!, $fields: [Int!], $identifier: String) {\n  minesBet(\n    amount: $amount\n    currency: $currency\n    minesCount: $minesCount\n    fields: $fields\n    identifier: $identifier\n  ) {\n    ...CasinoBet\n    state {\n      ...CasinoGameMines\n    }\n  }\n}\n\nfragment CasinoBet on CasinoBet {\n  id\n  active\n  payoutMultiplier\n  amountMultiplier\n  amount\n  payout\n  updatedAt\n  currency\n  game\n  user {\n    id\n    name\n  }\n}\n\nfragment CasinoGameMines on CasinoGameMines {\n  mines\n  minesCount\n  rounds {\n    field\n    payoutMultiplier\n  }\n}\n"		}
		

	fetch('https://' + window.location.host + '/_api/graphql', {
		method: 'post',
		body:    JSON.stringify(body),
		headers: { 'Content-Type': 'application/json','x-access-token': token},
	})
	.then(res => res.json())
	.then(json => data(json))
	.catch(function(err, json) {
		//console.log(err);
		if(running == true)
		{
			setTimeout(() => {
				if(running){
				minebet(betsize, fieldcount, minecount)	
				}				
			}, "1000");
			
		}
	});
	
}

function kenobet(betsize, kenoselected, kenorisk){
	var body = {
		variables:{
        "amount": betsize,
        "currency": currency,
        "identifier": randomString(21),
        "risk": kenorisk,
        "numbers": kenoselected
		},
		query:"mutation KenoBet($amount: Float!, $currency: CurrencyEnum!, $numbers: [Int!]!, $identifier: String!, $risk: CasinoGameKenoRiskEnum) {\n  kenoBet(\n    amount: $amount\n    currency: $currency\n    numbers: $numbers\n    risk: $risk\n    identifier: $identifier\n  ) {\n    ...CasinoBet\n    state {\n      ...CasinoGameKeno\n    }\n  }\n}\n\nfragment CasinoBet on CasinoBet {\n  id\n  active\n  payoutMultiplier\n  amountMultiplier\n  amount\n  payout\n  updatedAt\n  currency\n  game\n  user {\n    id\n    name\n  }\n}\n\nfragment CasinoGameKeno on CasinoGameKeno {\n  drawnNumbers\n  selectedNumbers\n  risk\n}\n"	}
		

	fetch('https://' + window.location.host + '/_api/graphql', {
		method: 'post',
		body:    JSON.stringify(body),
		headers: { 'Content-Type': 'application/json','x-access-token': token},
	})
	.then(res => res.json())
	.then(json => data(json))
	.catch(function(err, json) {
		//console.log(err);
		if(running == true)
		{
			setTimeout(() => {
				if(running){
				kenobet(betsize, kenoselected, kenorisk)	
				}				
			}, "1000");
			
		}
	});
	
}

function plinkobet(betsize, plinkorows, plinkorisk){
	var body = {
		variables:{
        "amount": betsize,
        "currency": currency,
        "identifier": randomString(21),
        "risk": plinkorisk,
        "rows": plinkorows
		},
		query:"mutation PlinkoBet($amount: Float!, $currency: CurrencyEnum!, $risk: CasinoGamePlinkoRiskEnum!, $rows: Int!, $identifier: String!) {\n  plinkoBet(\n    amount: $amount\n    currency: $currency\n    risk: $risk\n    rows: $rows\n    identifier: $identifier\n  ) {\n    ...CasinoBet\n    state {\n      ...CasinoGamePlinko\n    }\n  }\n}\n\nfragment CasinoBet on CasinoBet {\n  id\n  active\n  payoutMultiplier\n  amountMultiplier\n  amount\n  payout\n  updatedAt\n  currency\n  game\n  user {\n    id\n    name\n  }\n}\n\nfragment CasinoGamePlinko on CasinoGamePlinko {\n  risk\n  rows\n  point\n  path\n}\n"	}
		

	fetch('https://' + window.location.host + '/_api/graphql', {
		method: 'post',
		body:    JSON.stringify(body),
		headers: { 'Content-Type': 'application/json','x-access-token': token},
	})
	.then(res => res.json())
	.then(json => data(json))
	.catch(function(err, json) {
		//console.log(err);
		if(running == true)
		{
			setTimeout(() => {
				if(running){
				plinkobet(betsize, plinkorows, plinkorisk)	
				}				
			}, "1000");
			
		}
	});
	
}

function wheelbet(betsize, wheelsegments, wheelrisk){
	var body = {
		variables:{
        "amount": betsize,
        "currency": currency,
        "identifier": randomString(21),
        "risk": wheelrisk,
        "segments": wheelsegments
		},
		query:"mutation WheelSpin($amount: Float!, $currency: CurrencyEnum!, $risk: CasinoGameWheelRiskEnum!, $segments: Int!, $identifier: String!) {\n  wheelSpin(\n    amount: $amount\n    currency: $currency\n    risk: $risk\n    segments: $segments\n    identifier: $identifier\n  ) {\n    ...CasinoBet\n    state {\n      ...CasinoGameWheel\n    }\n  }\n}\n\nfragment CasinoBet on CasinoBet {\n  id\n  active\n  payoutMultiplier\n  amountMultiplier\n  amount\n  payout\n  updatedAt\n  currency\n  game\n  user {\n    id\n    name\n  }\n}\n\nfragment CasinoGameWheel on CasinoGameWheel {\n  result\n  segments\n  risk\n}\n"	}
		

	fetch('https://' + window.location.host + '/_api/graphql', {
		method: 'post',
		body:    JSON.stringify(body),
		headers: { 'Content-Type': 'application/json','x-access-token': token},
	})
	.then(res => res.json())
	.then(json => data(json))
	.catch(function(err, json) {
		//console.log(err);
		if(running == true)
		{
			setTimeout(() => {
				if(running){
				wheelbet(betsize, wheelsegments, wheelrisk)	
				}				
			}, "1000");
			
		}
	});
	
}

function roulettebet(selection){
	
	let roulette_row = []
	let roulette_parity = []
	let roulette_range = []
	let roulette_color = []
	let roulette_number = []
	
	selection.forEach(function(obj){
		if(obj.value.indexOf("row") >= 0){
			roulette_row.push(obj)
		}
		if(obj.value.indexOf("parity") >= 0){
			roulette_parity.push(obj)
		}
		if(obj.value.indexOf("range") >= 0){
			roulette_range.push(obj)
		}
		if(obj.value.indexOf("color") >= 0){
			roulette_color.push(obj)
		}
		if(obj.value.indexOf("number") >= 0){
			roulette_number.push(obj)
		}
	});
	
	var body = {
		variables:{
        "currency": currency,
        "identifier": randomString(21),
        "numbers": roulette_number,
		"colors": roulette_color,
		"ranges": roulette_range,
		"rows": roulette_row,
		"parities": roulette_parity
		},
		query:"mutation RouletteBet($currency: CurrencyEnum!, $colors: [RouletteBetColorsInput!], $numbers: [RouletteBetNumbersInput!], $parities: [RouletteBetParitiesInput!], $ranges: [RouletteBetRangesInput!], $rows: [RouletteBetRowsInput!], $identifier: String!) {\n  rouletteBet(\n    currency: $currency\n    colors: $colors\n    numbers: $numbers\n    parities: $parities\n    ranges: $ranges\n    rows: $rows\n    identifier: $identifier\n  ) {\n    ...CasinoBet\n    state {\n      ...RouletteStateFragment\n    }\n  }\n}\n\nfragment CasinoBet on CasinoBet {\n  id\n  active\n  payoutMultiplier\n  amountMultiplier\n  amount\n  payout\n  updatedAt\n  currency\n  game\n  user {\n    id\n    name\n  }\n}\n\nfragment RouletteStateFragment on CasinoGameRoulette {\n  result\n  colors {\n    amount\n    value\n  }\n  numbers {\n    amount\n    value\n  }\n  parities {\n    amount\n    value\n  }\n  ranges {\n    amount\n    value\n  }\n  rows {\n    amount\n    value\n  }\n}\n"		}
		
	
	fetch('https://' +  window.location.host + '/_api/graphql', {
		method: 'post',
		body:    JSON.stringify(body),
		headers: { 'Content-Type': 'application/json','x-access-token': token},
	})
	.then(res => res.json())
	.then(json => data(json))
	.catch(function(err, json) {
		//console.log(err);
		if(running == true)
		{	
			setTimeout(() => {
				if(running){
				roulettebet(selection)		
				}				
			}, "1000");
			
		}
	});
	
}


function dragontowerBet(betsize, dragondifficulty, dragoneggs){
	var body = {
		variables:{
        "amount": betsize,
        "currency": currency,
        "identifier": randomString(21),
        "difficulty": dragondifficulty,
        "eggs": dragoneggs
		},
		query:"mutation DragonTowerBet($amount: Float!, $currency: CurrencyEnum!, $difficulty: DragonTowerDifficultyEnum!, $eggs: [Int!]!, $identifier: String) {\n  dragonTowerBet(\n    amount: $amount\n    currency: $currency\n    difficulty: $difficulty\n    eggs: $eggs\n    identifier: $identifier\n  ) {\n    ...CasinoBet\n    state {\n      ...CasinoGameDragonTower\n    }\n  }\n}\n\nfragment CasinoBet on CasinoBet {\n  id\n  active\n  payoutMultiplier\n  amountMultiplier\n  amount\n  payout\n  updatedAt\n  currency\n  game\n  user {\n    id\n    name\n  }\n}\n\nfragment CasinoGameDragonTower on CasinoGameDragonTower {\n  currentRound\n  playedRounds\n  difficulty\n  rounds\n  tilesSelected\n}\n"	}
		

	fetch('https://' + window.location.host + '/_api/graphql', {
		method: 'post',
		body:    JSON.stringify(body),
		headers: { 'Content-Type': 'application/json','x-access-token': token},
	})
	.then(res => res.json())
	.then(json => data(json))
	.catch(function(err, json) {
		//console.log(err);
		if(running == true)
		{
			setTimeout(() => {
				if(running){
				dragontowerBet(betsize, dragondifficulty, dragoneggs)
				}				
			}, "1000");
			
		}
	});
	
}

function baccaratbet(baccarattie, baccaratplayer, baccaratbanker){
	var body = {
		variables:{
        "currency": currency,
        "identifier": randomString(21),
        "tie": baccarattie,
        "banker": baccaratbanker,
		"player": baccaratplayer
		},
		query:"mutation BaccaratBet($tie: Float, $player: Float, $banker: Float, $currency: CurrencyEnum!, $identifier: String!) {\n  baccaratBet(\n    tie: $tie\n    player: $player\n    banker: $banker\n    currency: $currency\n    identifier: $identifier\n  ) {\n    ...CasinoBet\n    state {\n      ...CasinoGameBaccarat\n    }\n  }\n}\n\nfragment CasinoBet on CasinoBet {\n  id\n  active\n  payoutMultiplier\n  amountMultiplier\n  amount\n  payout\n  updatedAt\n  currency\n  game\n  user {\n    id\n    name\n  }\n}\n\nfragment CasinoGameBaccarat on CasinoGameBaccarat {\n  ... on CasinoGameBaccarat {\n    playerCards {\n      suit\n      rank\n    }\n    bankerCards {\n      suit\n      rank\n    }\n    tie\n    player\n    banker\n    result\n  }\n}\n"	}
		

	fetch('https://' + window.location.host + '/_api/graphql', {
		method: 'post',
		body:    JSON.stringify(body),
		headers: { 'Content-Type': 'application/json','x-access-token': token},
	})
	.then(res => res.json())
	.then(json => data(json))
	.catch(function(err, json) {
		//console.log(err);
		if(running == true)
		{
			setTimeout(() => {
				if(running){
				baccaratbet(baccarattie, baccaratplayer, baccaratbanker)
				}				
			}, "1000");
			
		}
	});
	
}


function data(json){
	
	
		if(json.errors != null){
			if(!json.errors[0].errorType.includes("parallelCasinoBet")){
			log(json.errors[0].errorType + ". " +json.errors[0].message )
			}
			//return;
		}
		if(json.data.hasOwnProperty("baccaratBet"))
		{
			
			var table = document.getElementById("wdbHistory");
			var multiplierOut = json.data.baccaratBet.payoutMultiplier;
			var nicname = "";
			var crpamount = json.data.baccaratBet.amount;
			var payout = json.data.baccaratBet.payout;
			
			var str_amount = crpamount;
			var str_payout = payout.toFixed(8);
			var str_payoutMultiplier = multiplierOut.toFixed(2);
			var str_currency = currency;
			var str_game = "limbo";
			var str_user = "poky1084";
			var str_updatedAt = "2023"
			var current_result = ""
			var multiplierTarget = ""
			
			lastBet.amount = json.data.baccaratBet.amount;
			lastBet.payoutMultiplier = json.data.baccaratBet.payoutMultiplier;
			lastBet.Roll = json.data.baccaratBet.state.result;
			lastBet.payout = json.data.baccaratBet.payout;
			//lastBet.target = json.data.primediceRoll.state.target;
			
		
			
			if(json.data.baccaratBet.payoutMultiplier >= 1){
				win = true;
				lastBet.win = true;
				color = "#05f711"
				//win
				winstreak++;
				wins++;
				losestreak = 0;
				document.getElementById("result").innerHTML = json.data.baccaratBet.payoutMultiplier.toFixed(2) + "x"
				document.getElementById("result").style.color = color
			} else {

				win = false;
				lastBet.win = false;
				color = "#f72a42"
				losses++;
				losestreak++;
				winstreak = 0;
				document.getElementById("result").innerHTML = json.data.baccaratBet.payoutMultiplier.toFixed(2) + "x"
				document.getElementById("result").style.color = color
											
			} 
		
			current_profit = parseFloat(json.data.baccaratBet.payout) - parseFloat(json.data.baccaratBet.amount);
			profit_total += parseFloat(json.data.baccaratBet.payout) - parseFloat(json.data.baccaratBet.amount);
			wagered += parseFloat(json.data.baccaratBet.amount)
			
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
			tdamount.innerHTML = json.data.baccaratBet.amount.toFixed(8)
			
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
			tdTargetChance.innerHTML = multiplierOut.toFixed(2) + "x"
			
			//json.data.baccaratBet.state.risk + "|" + json.data.baccaratBet.state.rows

	
			tdRollChance.innerHTML = ""
			
			tdProfit.innerHTML = current_profit.toFixed(8)
				
			let bettext = "";
			let bettie = json.data.baccaratBet.state.tie
			let betbanker = json.data.baccaratBet.state.banker
			let betplayer = json.data.baccaratBet.state.player
			if(bettie > 0){
				bettext += "|"
			}
			if(betbanker > 0){
				bettext += "b|"
			}
			if(betplayer > 0){
				bettext += "p"
			}
			tdTargetNumber.innerHTML = bettext;

			tdRollNumber.innerHTML = json.data.baccaratBet.state.result;
			tdNonce.innerHTML = json.data.baccaratBet.game;
			tdBetID.innerHTML = json.data.baccaratBet.id;
			tdPayout.innerHTML = json.data.baccaratBet.payout.toFixed(8);
			
			row.appendChild(tdbets);
			row.appendChild(tdNonce);
			row.appendChild(tdamount);
			row.appendChild(tdhigh);
			row.appendChild(tdTargetChance);
			row.appendChild(tdProfit);
			row.appendChild(tdPayout);
			row.appendChild(tdTargetNumber);
			row.appendChild(tdRollNumber);
			row.appendChild(tdRollChance);
			row.appendChild(tdBetID);
					
			

				
			
			
					
			if(win){
				row.style.background = "#91F190";
				if(theme=="black"){
					row.style.background = "#00e701";
					row.style.color = "white";
				}
			} else {
				row.style.background = "#FFC0CB";
				if(theme=="black"){
					row.style.background = "#ed7a68";
					row.style.color = "white";
				}
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
		
			if(highest_bet[highest_bet.length-1] < json.data.baccaratBet.amount){
				highest_bet.pop();
				highest_bet.push(json.data.baccaratBet.amount);
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
			previousbet = json.data.baccaratBet.amount;
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
										if(document.getElementById("themebot").value == "dark" || document.getElementById("themebot").value == "blue" || document.getElementById("themebot").value == "black"){
										document.getElementById("wdbProfit").style.color = "#05f711"
										document.getElementById("wdbPercentProfit").style.color = "#05f711"
									} else {
										document.getElementById("wdbProfit").style.color = "green"
										document.getElementById("wdbPercentProfit").style.color = "green"
									}
								}
			
			
			lastBet.percent = (profit_total / started_bal * 100)
			


			
			lastBet.amount = json.data.baccaratBet.amount;
			
			
			
		}
		if(json.data.hasOwnProperty("dragonTowerBet"))
		{
			
			var table = document.getElementById("wdbHistory");
			var multiplierOut = json.data.dragonTowerBet.payoutMultiplier;
			var nicname = "";
			var crpamount = json.data.dragonTowerBet.amount;
			var payout = json.data.dragonTowerBet.payout;
			
			var str_amount = crpamount;
			var str_payout = payout.toFixed(8);
			var str_payoutMultiplier = multiplierOut.toFixed(2);
			var str_currency = currency;
			var str_game = "limbo";
			var str_user = "poky1084";
			var str_updatedAt = "2023"
			var current_result = ""
			var multiplierTarget = ""
			
			lastBet.amount = json.data.dragonTowerBet.amount;
			lastBet.payoutMultiplier = json.data.dragonTowerBet.payoutMultiplier;
			lastBet.Roll = json.data.dragonTowerBet.state.result;
			lastBet.payout = json.data.dragonTowerBet.payout;
			//lastBet.target = json.data.primediceRoll.state.target;
			
		
			
			if(json.data.dragonTowerBet.payoutMultiplier >= 1){
				win = true;
				lastBet.win = true;
				color = "#05f711"
				//win
				winstreak++;
				wins++;
				losestreak = 0;
				document.getElementById("result").innerHTML = json.data.dragonTowerBet.payoutMultiplier.toFixed(2) + "x"
				document.getElementById("result").style.color = color
			} else {

				win = false;
				lastBet.win = false;
				color = "#f72a42"
				losses++;
				losestreak++;
				winstreak = 0;
				document.getElementById("result").innerHTML = json.data.dragonTowerBet.payoutMultiplier.toFixed(2) + "x"
				document.getElementById("result").style.color = color
											
			} 
		
			current_profit = parseFloat(json.data.dragonTowerBet.payout) - parseFloat(json.data.dragonTowerBet.amount);
			profit_total += parseFloat(json.data.dragonTowerBet.payout) - parseFloat(json.data.dragonTowerBet.amount);
			wagered += parseFloat(json.data.dragonTowerBet.amount)
			
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
			tdamount.innerHTML = json.data.dragonTowerBet.amount.toFixed(8)
			
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
			tdTargetChance.innerHTML = multiplierOut.toFixed(2) + "x"
			
			//json.data.dragonTowerBet.state.risk + "|" + json.data.dragonTowerBet.state.rows

	
			tdRollChance.innerHTML = ""
			
			tdProfit.innerHTML = current_profit.toFixed(8)

			tdTargetNumber.innerHTML = json.data.dragonTowerBet.state.difficulty + "|" + json.data.dragonTowerBet.state.tilesSelected.length

			tdRollNumber.innerHTML = json.data.dragonTowerBet.payoutMultiplier.toFixed(2);
			tdNonce.innerHTML = json.data.dragonTowerBet.game;
			tdBetID.innerHTML = json.data.dragonTowerBet.id;
			tdPayout.innerHTML = json.data.dragonTowerBet.payout.toFixed(8);
			
			row.appendChild(tdbets);
			row.appendChild(tdNonce);
			row.appendChild(tdamount);
			row.appendChild(tdhigh);
			row.appendChild(tdTargetChance);
			row.appendChild(tdProfit);
			row.appendChild(tdPayout);
			row.appendChild(tdTargetNumber);
			row.appendChild(tdRollNumber);
			row.appendChild(tdRollChance);
			row.appendChild(tdBetID);
					
			

				
			
			
					
			if(win){
				row.style.background = "#91F190";
				if(theme=="black"){
					row.style.background = "#00e701";
					row.style.color = "white";
				}
			} else {
				row.style.background = "#FFC0CB";
				if(theme=="black"){
					row.style.background = "#ed7a68";
					row.style.color = "white";
				}
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
		
			if(highest_bet[highest_bet.length-1] < json.data.dragonTowerBet.amount){
				highest_bet.pop();
				highest_bet.push(json.data.dragonTowerBet.amount);
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
			previousbet = json.data.dragonTowerBet.amount;
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
										if(document.getElementById("themebot").value == "dark" || document.getElementById("themebot").value == "blue" || document.getElementById("themebot").value == "black"){
										document.getElementById("wdbProfit").style.color = "#05f711"
										document.getElementById("wdbPercentProfit").style.color = "#05f711"
									} else {
										document.getElementById("wdbProfit").style.color = "green"
										document.getElementById("wdbPercentProfit").style.color = "green"
									}
								}
			
			
			lastBet.percent = (profit_total / started_bal * 100)
			


			
			lastBet.amount = json.data.dragonTowerBet.amount;
			
			
			
		}
		if(json.data.hasOwnProperty("rouletteBet"))
		{
			
			var table = document.getElementById("wdbHistory");
			var multiplierOut = json.data.rouletteBet.payoutMultiplier;
			var nicname = "";
			var crpamount = json.data.rouletteBet.amount;
			var payout = json.data.rouletteBet.payout;
			
			var str_amount = crpamount;
			var str_payout = payout.toFixed(8);
			var str_payoutMultiplier = multiplierOut.toFixed(2);
			var str_currency = currency;
			var str_game = "limbo";
			var str_user = "poky1084";
			var str_updatedAt = "2023"
			var current_result = ""
			var multiplierTarget = ""
			
			lastBet.amount = json.data.rouletteBet.amount;
			lastBet.payoutMultiplier = json.data.rouletteBet.payoutMultiplier;
			lastBet.Roll = json.data.rouletteBet.state.result;
			lastBet.payout = json.data.rouletteBet.payout;
			//lastBet.target = json.data.primediceRoll.state.target;
			
		
			
			if(json.data.rouletteBet.payoutMultiplier >= 1){
				win = true;
				lastBet.win = true;
				color = "#05f711"
				//win
				winstreak++;
				wins++;
				losestreak = 0;
				document.getElementById("result").innerHTML = json.data.rouletteBet.payoutMultiplier.toFixed(2) + "x"
				document.getElementById("result").style.color = color
			} else {

				win = false;
				lastBet.win = false;
				color = "#f72a42"
				losses++;
				losestreak++;
				winstreak = 0;
				document.getElementById("result").innerHTML = json.data.rouletteBet.payoutMultiplier.toFixed(2) + "x"
				document.getElementById("result").style.color = color
											
			} 
		
			current_profit = parseFloat(json.data.rouletteBet.payout) - parseFloat(json.data.rouletteBet.amount);
			profit_total += parseFloat(json.data.rouletteBet.payout) - parseFloat(json.data.rouletteBet.amount);
			wagered +=  parseFloat(json.data.rouletteBet.amount);
			
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
			tdamount.innerHTML = json.data.rouletteBet.amount.toFixed(8)
			
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
			tdTargetChance.innerHTML = multiplierOut.toFixed(2) + "x"
			
			//json.data.rouletteBet.state.risk + "|" + json.data.rouletteBet.state.rows

	
			tdRollChance.innerHTML = ""
			
			tdProfit.innerHTML = current_profit.toFixed(8)

			tdTargetNumber.innerHTML = json.data.rouletteBet.state.numbers.length

			tdRollNumber.innerHTML = json.data.rouletteBet.state.result;
			tdNonce.innerHTML = json.data.rouletteBet.game;
			tdBetID.innerHTML = json.data.rouletteBet.id;
			tdPayout.innerHTML = json.data.rouletteBet.payout.toFixed(8);
			
			row.appendChild(tdbets);
			row.appendChild(tdNonce);
			row.appendChild(tdamount);
			row.appendChild(tdhigh);
			row.appendChild(tdTargetChance);
			row.appendChild(tdProfit);
			row.appendChild(tdPayout);
			row.appendChild(tdTargetNumber);
			row.appendChild(tdRollNumber);
			row.appendChild(tdRollChance);
			row.appendChild(tdBetID);
					
			

				
			
			
					
			if(win){
				row.style.background = "#91F190";
				if(theme=="black"){
					row.style.background = "#00e701";
					row.style.color = "white";
				}
			} else {
				row.style.background = "#FFC0CB";
				if(theme=="black"){
					row.style.background = "#ed7a68";
					row.style.color = "white";
				}
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
		
			if(highest_bet[highest_bet.length-1] < json.data.rouletteBet.amount){
				highest_bet.pop();
				highest_bet.push(json.data.rouletteBet.amount);
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
			previousbet = json.data.rouletteBet.amount;
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
										if(document.getElementById("themebot").value == "dark" || document.getElementById("themebot").value == "blue" || document.getElementById("themebot").value == "black"){
										document.getElementById("wdbProfit").style.color = "#05f711"
										document.getElementById("wdbPercentProfit").style.color = "#05f711"
									} else {
										document.getElementById("wdbProfit").style.color = "green"
										document.getElementById("wdbPercentProfit").style.color = "green"
									}
								}
			
			
			lastBet.percent = (profit_total / started_bal * 100)
			


			
			lastBet.amount = json.data.rouletteBet.amount;
			
			
			
		}
		if(json.data.hasOwnProperty("wheelSpin"))
		{
			
			var table = document.getElementById("wdbHistory");
			var multiplierOut = json.data.wheelSpin.payoutMultiplier;
			var nicname = "";
			var crpamount = json.data.wheelSpin.amount;
			var payout = json.data.wheelSpin.payout;
			
			var str_amount = crpamount;
			var str_payout = payout.toFixed(8);
			var str_payoutMultiplier = multiplierOut.toFixed(2);
			var str_currency = currency;
			var str_game = "limbo";
			var str_user = "poky1084";
			var str_updatedAt = "2023"
			var current_result = ""
			var multiplierTarget = ""
			
			lastBet.amount = json.data.wheelSpin.amount;
			lastBet.payoutMultiplier = json.data.wheelSpin.payoutMultiplier;
			lastBet.Roll = json.data.wheelSpin.state.result;
			lastBet.payout = json.data.wheelSpin.payout;
			//lastBet.target = json.data.primediceRoll.state.target;
			
		
			
			if(json.data.wheelSpin.payoutMultiplier >= 1){
				win = true;
				lastBet.win = true;
				color = "#05f711"
				//win
				winstreak++;
				wins++;
				losestreak = 0;
				document.getElementById("result").innerHTML = json.data.wheelSpin.payoutMultiplier.toFixed(2) + "x"
				document.getElementById("result").style.color = color
			} else {

				win = false;
				lastBet.win = false;
				color = "#f72a42"
				losses++;
				losestreak++;
				winstreak = 0;
				document.getElementById("result").innerHTML = json.data.wheelSpin.payoutMultiplier.toFixed(2) + "x"
				document.getElementById("result").style.color = color
											
			} 
		
			current_profit = parseFloat(json.data.wheelSpin.payout) - parseFloat(json.data.wheelSpin.amount);
			profit_total += parseFloat(json.data.wheelSpin.payout) - parseFloat(json.data.wheelSpin.amount);
			wagered += parseFloat(json.data.wheelSpin.amount)
			
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
			tdamount.innerHTML = json.data.wheelSpin.amount.toFixed(8)
			
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
			tdTargetChance.innerHTML = multiplierOut.toFixed(2) + "x"
			
			//json.data.wheelSpin.state.risk + "|" + json.data.wheelSpin.state.rows

	
			tdRollChance.innerHTML = ""
			
			tdProfit.innerHTML = current_profit.toFixed(8)

			tdTargetNumber.innerHTML = json.data.wheelSpin.state.risk + "|" + json.data.wheelSpin.state.segments

			tdRollNumber.innerHTML = json.data.wheelSpin.state.result;
			tdNonce.innerHTML = json.data.wheelSpin.game;
			tdBetID.innerHTML = json.data.wheelSpin.id;
			tdPayout.innerHTML = json.data.wheelSpin.payout.toFixed(8);
			
			row.appendChild(tdbets);
			row.appendChild(tdNonce);
			row.appendChild(tdamount);
			row.appendChild(tdhigh);
			row.appendChild(tdTargetChance);
			row.appendChild(tdProfit);
			row.appendChild(tdPayout);
			row.appendChild(tdTargetNumber);
			row.appendChild(tdRollNumber);
			row.appendChild(tdRollChance);
			row.appendChild(tdBetID);
					
			

				
			
			
					
			if(win){
				row.style.background = "#91F190";
				if(theme=="black"){
					row.style.background = "#00e701";
					row.style.color = "white";
				}
			} else {
				row.style.background = "#FFC0CB";
				if(theme=="black"){
					row.style.background = "#ed7a68";
					row.style.color = "white";
				}
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
		
			if(highest_bet[highest_bet.length-1] < json.data.wheelSpin.amount){
				highest_bet.pop();
				highest_bet.push(json.data.wheelSpin.amount);
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
			previousbet = json.data.wheelSpin.amount;
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
										if(document.getElementById("themebot").value == "dark" || document.getElementById("themebot").value == "blue" || document.getElementById("themebot").value == "black"){
										document.getElementById("wdbProfit").style.color = "#05f711"
										document.getElementById("wdbPercentProfit").style.color = "#05f711"
									} else {
										document.getElementById("wdbProfit").style.color = "green"
										document.getElementById("wdbPercentProfit").style.color = "green"
									}
								}
			
			
			lastBet.percent = (profit_total / started_bal * 100)
			


			
			lastBet.amount = json.data.wheelSpin.amount;
			
			
			
		}
		if(json.data.hasOwnProperty("plinkoBet"))
		{
			
			var table = document.getElementById("wdbHistory");
			var multiplierOut = json.data.plinkoBet.payoutMultiplier;
			var nicname = "";
			var crpamount = json.data.plinkoBet.amount;
			var payout = json.data.plinkoBet.payout;
			
			var str_amount = crpamount;
			var str_payout = payout.toFixed(8);
			var str_payoutMultiplier = multiplierOut.toFixed(2);
			var str_currency = currency;
			var str_game = "limbo";
			var str_user = "poky1084";
			var str_updatedAt = "2023"
			var current_result = ""
			var multiplierTarget = ""
			
			lastBet.amount = json.data.plinkoBet.amount;
			lastBet.payoutMultiplier = json.data.plinkoBet.payoutMultiplier;
			//lastBet.Roll = json.data.plinkoBet.state.result;
			lastBet.payout = json.data.plinkoBet.payout;
			//lastBet.target = json.data.primediceRoll.state.target;
			
		
			
			if(json.data.plinkoBet.payoutMultiplier >= 1){
				win = true;
				lastBet.win = true;
				color = "#05f711"
				//win
				winstreak++;
				wins++;
				losestreak = 0;
				document.getElementById("result").innerHTML = json.data.plinkoBet.payoutMultiplier.toFixed(2) + "x"
				document.getElementById("result").style.color = color
			} else {

				win = false;
				lastBet.win = false;
				color = "#f72a42"
				losses++;
				losestreak++;
				winstreak = 0;
				document.getElementById("result").innerHTML = json.data.plinkoBet.payoutMultiplier.toFixed(2) + "x"
				document.getElementById("result").style.color = color
											
			} 
		
			current_profit = parseFloat(json.data.plinkoBet.payout) - parseFloat(json.data.plinkoBet.amount);
			profit_total += parseFloat(json.data.plinkoBet.payout) - parseFloat(json.data.plinkoBet.amount);
			wagered += parseFloat(json.data.plinkoBet.amount);
			
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
			tdamount.innerHTML = json.data.plinkoBet.amount.toFixed(8)
			
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
			tdTargetChance.innerHTML = multiplierOut.toFixed(2) + "x"
			
			//json.data.plinkoBet.state.risk + "|" + json.data.plinkoBet.state.rows

	
			tdRollChance.innerHTML = ""
			
			tdProfit.innerHTML = current_profit.toFixed(8)

			tdTargetNumber.innerHTML = json.data.plinkoBet.state.risk + "|" + json.data.plinkoBet.state.rows

			tdRollNumber.innerHTML = multiplierOut.toFixed(2)
			tdNonce.innerHTML = json.data.plinkoBet.game;
			tdBetID.innerHTML = json.data.plinkoBet.id;
			tdPayout.innerHTML = json.data.plinkoBet.payout.toFixed(8);
			
			row.appendChild(tdbets);
			row.appendChild(tdNonce);
			row.appendChild(tdamount);
			row.appendChild(tdhigh);
			row.appendChild(tdTargetChance);
			row.appendChild(tdProfit);
			row.appendChild(tdPayout);
			row.appendChild(tdTargetNumber);
			row.appendChild(tdRollNumber);
			row.appendChild(tdRollChance);
			row.appendChild(tdBetID);
					
			

				
			
			
			
			if(win){
				row.style.background = "#91F190";
				if(theme=="black"){
					row.style.background = "#00e701";
					row.style.color = "white";
				}
			} else {
				row.style.background = "#FFC0CB";
				if(theme=="black"){
					row.style.background = "#ed7a68";
					row.style.color = "white";
				}
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
		
			if(highest_bet[highest_bet.length-1] < json.data.plinkoBet.amount){
				highest_bet.pop();
				highest_bet.push(json.data.plinkoBet.amount);
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
			previousbet = json.data.plinkoBet.amount;
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
										if(document.getElementById("themebot").value == "dark" || document.getElementById("themebot").value == "blue" || document.getElementById("themebot").value == "black"){
										document.getElementById("wdbProfit").style.color = "#05f711"
										document.getElementById("wdbPercentProfit").style.color = "#05f711"
									} else {
										document.getElementById("wdbProfit").style.color = "green"
										document.getElementById("wdbPercentProfit").style.color = "green"
									}
								}
			
			
			lastBet.percent = (profit_total / started_bal * 100)
			


			
			lastBet.amount = json.data.plinkoBet.amount;
			
			
			
		}
		if(json.data.hasOwnProperty("kenoBet"))
		{
			
			var table = document.getElementById("wdbHistory");
			var multiplierOut = json.data.kenoBet.payoutMultiplier;
			var nicname = "";
			var crpamount = json.data.kenoBet.amount;
			var payout = json.data.kenoBet.payout;
			
			var str_amount = crpamount;
			var str_payout = payout.toFixed(8);
			var str_payoutMultiplier = multiplierOut.toFixed(2);
			var str_currency = currency;
			var str_game = "limbo";
			var str_user = "poky1084";
			var str_updatedAt = "2023"
			var current_result = ""
			var multiplierTarget = ""
			
			lastBet.amount = json.data.kenoBet.amount;
			lastBet.payoutMultiplier = json.data.kenoBet.payoutMultiplier;
			//lastBet.Roll = json.data.kenoBet.state.result;
			lastBet.payout = json.data.kenoBet.payout;
			//lastBet.target = json.data.primediceRoll.state.target;
			
		
			var rounds = json.data.kenoBet.state.drawnNumbers;
			var kenofield =  json.data.kenoBet.state.selectedNumbers;
			
			
			var hitkeno = kenofield.filter(function(n) {
				return rounds.indexOf(n) !== -1;
			});
			
			if(json.data.kenoBet.payoutMultiplier >= 1){
				win = true;
				lastBet.win = true;
				color = "#05f711"
				//win
				winstreak++;
				wins++;
				losestreak = 0;
				document.getElementById("result").innerHTML = json.data.kenoBet.payoutMultiplier.toFixed(2) + "x"
				document.getElementById("result").style.color = color
			} else {

				win = false;
				lastBet.win = false;
				color = "#f72a42"
				losses++;
				losestreak++;
				winstreak = 0;
				document.getElementById("result").innerHTML = json.data.kenoBet.payoutMultiplier.toFixed(2) + "x"
				document.getElementById("result").style.color = color
											
			} 
		
			current_profit = parseFloat(json.data.kenoBet.payout) - parseFloat(json.data.kenoBet.amount);
			profit_total += parseFloat(json.data.kenoBet.payout) - parseFloat(json.data.kenoBet.amount);
			wagered += parseFloat(json.data.kenoBet.amount);
			
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
			tdamount.innerHTML = json.data.kenoBet.amount.toFixed(8)
			
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
			tdTargetChance.innerHTML = multiplierOut.toFixed(2) + "x"

			let hitnumbers = hitkeno
			if(hitnumbers == "undefined") {
				hitnumbers = ""
			} else {
				hitnumbers = hitkeno
			}
			tdRollChance.innerHTML = ""
			
			tdProfit.innerHTML = current_profit.toFixed(8)

			tdTargetNumber.innerHTML = risk + "|" + kenofield.length

			tdRollNumber.innerHTML = hitkeno.length + "x"
			tdNonce.innerHTML = json.data.kenoBet.game;
			tdBetID.innerHTML = json.data.kenoBet.id;
			tdPayout.innerHTML = json.data.kenoBet.payout.toFixed(8);
			
			row.appendChild(tdbets);
			row.appendChild(tdNonce);
			row.appendChild(tdamount);
			row.appendChild(tdhigh);
			row.appendChild(tdTargetChance);
			row.appendChild(tdProfit);
			row.appendChild(tdPayout);
			row.appendChild(tdTargetNumber);
			row.appendChild(tdRollNumber);
			row.appendChild(tdRollChance);
			row.appendChild(tdBetID);
					
			

				
			
			
			
			if(win){
				row.style.background = "#91F190";
				if(theme=="black"){
					row.style.background = "#00e701";
					row.style.color = "white";
				}
			} else {
				row.style.background = "#FFC0CB";
				if(theme=="black"){
					row.style.background = "#ed7a68";
					row.style.color = "white";
				}
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
		
			if(highest_bet[highest_bet.length-1] < json.data.kenoBet.amount){
				highest_bet.pop();
				highest_bet.push(json.data.kenoBet.amount);
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
			previousbet = json.data.kenoBet.amount;
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
										if(document.getElementById("themebot").value == "dark" || document.getElementById("themebot").value == "blue" || document.getElementById("themebot").value == "black"){
										document.getElementById("wdbProfit").style.color = "#05f711"
										document.getElementById("wdbPercentProfit").style.color = "#05f711"
									} else {
										document.getElementById("wdbProfit").style.color = "green"
										document.getElementById("wdbPercentProfit").style.color = "green"
									}
								}
			
			
			lastBet.percent = (profit_total / started_bal * 100)
			


			
			lastBet.amount = json.data.kenoBet.amount;
			
			
			
		}
		if(json.data.hasOwnProperty("minesBet"))
		{
			
			var table = document.getElementById("wdbHistory");
			var multiplierOut = json.data.minesBet.payoutMultiplier;
			var nicname = "";
			var crpamount = json.data.minesBet.amount;
			var payout = json.data.minesBet.payout;
			
			var str_amount = crpamount;
			var str_payout = payout.toFixed(8);
			var str_payoutMultiplier = multiplierOut.toFixed(2);
			var str_currency = currency;
			var str_game = "limbo";
			var str_user = "poky1084";
			var str_updatedAt = "2023"
			var current_result = ""
			var multiplierTarget = ""
			
			lastBet.amount = json.data.minesBet.amount;
			lastBet.payoutMultiplier = json.data.minesBet.payoutMultiplier;
			//lastBet.Roll = json.data.minesBet.state.result;
			lastBet.payout = json.data.minesBet.payout;
			//lastBet.target = json.data.primediceRoll.state.target;
			
		
			var rounds = json.data.minesBet.state.rounds;
			var minefield =  json.data.minesBet.state.mines;
			var str_field = [];
			rounds.forEach(function(round){
				str_field.push(round.field)
			});
			
			var hitmines = str_field.filter(function(n) {
				return minefield.indexOf(n) !== -1;
			});
			
			if(json.data.minesBet.payoutMultiplier > 0){
				win = true;
				lastBet.win = true;
				color = "#05f711"
				//win
				winstreak++;
				wins++;
				losestreak = 0;
				document.getElementById("result").innerHTML = json.data.minesBet.payoutMultiplier.toFixed(2) + "x"
				document.getElementById("result").style.color = color
			} else {

				win = false;
				lastBet.win = false;
				color = "#f72a42"
				losses++;
				losestreak++;
				winstreak = 0;
				document.getElementById("result").innerHTML = json.data.minesBet.payoutMultiplier.toFixed(2) + "x"
				document.getElementById("result").style.color = color
											
			} 
		
			current_profit = parseFloat(json.data.minesBet.payout) - parseFloat(json.data.minesBet.amount);
			profit_total += parseFloat(json.data.minesBet.payout) - parseFloat(json.data.minesBet.amount);
			wagered += parseFloat(json.data.minesBet.amount);
			
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
			tdamount.innerHTML = json.data.minesBet.amount.toFixed(8)
			
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
			tdTargetChance.innerHTML = multiplierOut.toFixed(2) + "x"

			tdRollChance.innerHTML = ""
			
			tdProfit.innerHTML = current_profit.toFixed(8)

			tdTargetNumber.innerHTML = minefield.length + "|" + str_field.length

			tdRollNumber.innerHTML = hitmines
			tdNonce.innerHTML = json.data.minesBet.game;
			tdBetID.innerHTML = json.data.minesBet.id;
			tdPayout.innerHTML = json.data.minesBet.payout.toFixed(8);
			
			row.appendChild(tdbets);
			row.appendChild(tdNonce);
			row.appendChild(tdamount);
			row.appendChild(tdhigh);
			row.appendChild(tdTargetChance);
			row.appendChild(tdProfit);
			row.appendChild(tdPayout);
			row.appendChild(tdTargetNumber);
			row.appendChild(tdRollNumber);
			row.appendChild(tdRollChance);
			row.appendChild(tdBetID);
					
			

				
			
			
			
			if(win){
				row.style.background = "#91F190";
				if(theme=="black"){
					row.style.background = "#00e701";
					row.style.color = "white";
				}
			} else {
				row.style.background = "#FFC0CB";
				if(theme=="black"){
					row.style.background = "#ed7a68";
					row.style.color = "white";
				}
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
		
			if(highest_bet[highest_bet.length-1] < json.data.minesBet.amount){
				highest_bet.pop();
				highest_bet.push(json.data.minesBet.amount);
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
			previousbet = json.data.minesBet.amount;
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
										if(document.getElementById("themebot").value == "dark" || document.getElementById("themebot").value == "blue" || document.getElementById("themebot").value == "black"){
										document.getElementById("wdbProfit").style.color = "#05f711"
										document.getElementById("wdbPercentProfit").style.color = "#05f711"
									} else {
										document.getElementById("wdbProfit").style.color = "green"
										document.getElementById("wdbPercentProfit").style.color = "green"
									}
								}
			
			
			lastBet.percent = (profit_total / started_bal * 100)
			


			
			lastBet.amount = json.data.minesBet.amount;
			
			
			
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
				document.getElementById("result").innerHTML = json.data.primediceRoll.state.result.toFixed(2)
				document.getElementById("result").style.color = color
			} else {

				win = false;
				lastBet.win = false;
				color = "#f72a42"
				losses++;
				losestreak++;
				winstreak = 0;
				document.getElementById("result").innerHTML = json.data.primediceRoll.state.result.toFixed(2)
				document.getElementById("result").style.color = color
											
			} 
		
			current_profit = parseFloat(json.data.primediceRoll.payout) - parseFloat(json.data.primediceRoll.amount);
			profit_total += parseFloat(json.data.primediceRoll.payout) - parseFloat(json.data.primediceRoll.amount);
			wagered += parseFloat(json.data.primediceRoll.amount);
			
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
			tdTargetChance.innerHTML = multiplierOut.toFixed(2) + "x"
			if(bethigh == false){
				//tdRollChance.innerHTML = json.data.primediceRoll.state.result.toFixed(4)
			} else {
				//tdRollChance.innerHTML = (100 - 0.01 - json.data.primediceRoll.state.result).toFixed(4)
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
			row.appendChild(tdNonce);
			row.appendChild(tdamount);
			row.appendChild(tdhigh);
			row.appendChild(tdTargetChance);
			row.appendChild(tdProfit);
			row.appendChild(tdPayout);
			row.appendChild(tdTargetNumber);
			row.appendChild(tdRollNumber);
			row.appendChild(tdRollChance);
			row.appendChild(tdBetID);
					
			

				
			
			
			
			if(win){
				row.style.background = "#91F190";
				if(theme=="black"){
					row.style.background = "#00e701";
					row.style.color = "white";
				}
			} else {
				row.style.background = "#FFC0CB";
				if(theme=="black"){
					row.style.background = "#ed7a68";
					row.style.color = "white";
				}
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
										if(document.getElementById("themebot").value == "dark" || document.getElementById("themebot").value == "blue" || document.getElementById("themebot").value == "black"){
										document.getElementById("wdbProfit").style.color = "#05f711"
										document.getElementById("wdbPercentProfit").style.color = "#05f711"
									} else {
										document.getElementById("wdbProfit").style.color = "green"
										document.getElementById("wdbPercentProfit").style.color = "green"
									}
								}
			
			
			lastBet.percent = (profit_total / started_bal * 100)
			

			//dobet();


			lastBet.amount = json.data.primediceRoll.amount;
			lastBet.target = json.data.primediceRoll.state.target;
			
			
			
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
				document.getElementById("result").innerHTML = json.data.diceRoll.state.result.toFixed(2)
				document.getElementById("result").style.color = color	
			} else {

				win = false;
				lastBet.win = false;
				color = "#f72a42"
				losses++;
				losestreak++;
				winstreak = 0;
				document.getElementById("result").innerHTML = json.data.diceRoll.state.result.toFixed(2)
				document.getElementById("result").style.color = color
											
			} 
		
			current_profit = parseFloat(json.data.diceRoll.payout) - parseFloat(json.data.diceRoll.amount);
			profit_total += parseFloat(json.data.diceRoll.payout) - parseFloat(json.data.diceRoll.amount);
			wagered += parseFloat(json.data.diceRoll.amount);
			
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
			tdTargetChance.innerHTML = multiplierOut.toFixed(2) + "x"
			if(bethigh == false){
				//tdRollChance.innerHTML = json.data.diceRoll.state.result.toFixed(4)
			} else {
				//tdRollChance.innerHTML = (100 - json.data.diceRoll.state.result).toFixed(4)
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
			row.appendChild(tdNonce);
			row.appendChild(tdamount);
			row.appendChild(tdhigh);
			row.appendChild(tdTargetChance);
			row.appendChild(tdProfit);
			row.appendChild(tdPayout);
			row.appendChild(tdTargetNumber);
			row.appendChild(tdRollNumber);
			row.appendChild(tdRollChance);
			row.appendChild(tdBetID);			
					
			

				
			
			
			if(win){
				row.style.background = "#91F190";
				if(theme=="black"){
					row.style.background = "#00e701";
					row.style.color = "white";
				}
			} else {
				row.style.background = "#FFC0CB";
				if(theme=="black"){
					row.style.background = "#ed7a68";
					row.style.color = "white";
				}
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
										if(document.getElementById("themebot").value == "dark" || document.getElementById("themebot").value == "blue" || document.getElementById("themebot").value == "black"){
										document.getElementById("wdbProfit").style.color = "#05f711"
										document.getElementById("wdbPercentProfit").style.color = "#05f711"
									} else {
										document.getElementById("wdbProfit").style.color = "green"
										document.getElementById("wdbPercentProfit").style.color = "green"
									}
								}
								
			
			lastBet.percent = (profit_total / started_bal * 100)

			lastBet.amount = json.data.diceRoll.amount;
			lastBet.target = json.data.diceRoll.state.target;
			
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
				document.getElementById("result").innerHTML = json.data.limboBet.state.result.toFixed(2) + "x"
				document.getElementById("result").style.color = color
			} else {

				win = false;
				lastBet.win = false;
				color = "#f72a42"
				losses++;
				losestreak++;
				winstreak = 0;
				document.getElementById("result").innerHTML = json.data.limboBet.state.result.toFixed(2) + "x"
				document.getElementById("result").style.color = color
											
			} 
		
			current_profit = parseFloat(json.data.limboBet.payout) - parseFloat(json.data.limboBet.amount);
			profit_total += parseFloat(json.data.limboBet.payout) - parseFloat(json.data.limboBet.amount);
			wagered += parseFloat(json.data.limboBet.amount);
			
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
			tdTargetChance.innerHTML = multiplierOut.toFixed(2) + "x"
			//tdRollChance.innerHTML = (99 / json.data.limboBet.state.result).toFixed(4)
			tdProfit.innerHTML = current_profit.toFixed(8)
			tdTargetNumber.innerHTML = ">" + json.data.limboBet.state.multiplierTarget.toFixed(4)
			lastBet.targetNumber = json.data.limboBet.state.multiplierTarget;
			tdRollNumber.innerHTML = json.data.limboBet.state.result.toFixed(2)
			tdNonce.innerHTML = json.data.limboBet.game;
			tdBetID.innerHTML = json.data.limboBet.id;
			tdPayout.innerHTML = json.data.limboBet.payout.toFixed(8);
			
			row.appendChild(tdbets);
			row.appendChild(tdNonce);
			row.appendChild(tdamount);
			row.appendChild(tdhigh);
			row.appendChild(tdTargetChance);
			row.appendChild(tdProfit);
			row.appendChild(tdPayout);
			row.appendChild(tdTargetNumber);
			row.appendChild(tdRollNumber);
			row.appendChild(tdRollChance);
			row.appendChild(tdBetID);	
					
			

				
			
			
			
			if(win){
				row.style.background = "#91F190";
				if(theme=="black"){
					row.style.background = "#00e701";
					row.style.color = "white";
				}
			} else {
				row.style.background = "#FFC0CB";
				if(theme=="black"){
					row.style.background = "#ed7a68";
					row.style.color = "white";
				}
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
										if(document.getElementById("themebot").value == "dark" || document.getElementById("themebot").value == "blue" || document.getElementById("themebot").value == "black"){
										document.getElementById("wdbProfit").style.color = "#05f711"
										document.getElementById("wdbPercentProfit").style.color = "#05f711"
									} else {
										document.getElementById("wdbProfit").style.color = "green"
										document.getElementById("wdbPercentProfit").style.color = "green"
									}
								}
								
			
			lastBet.percent = (profit_total / started_bal * 100)
			

			
			lastBet.amount = json.data.limboBet.amount;
			lastBet.target = json.data.limboBet.state.multiplierTarget;
			
		}
		
		dobet();
		
		amount = nextbet;
		target_multi = 99 / chance;
					
		minecount = mines
		fieldcount = fields
		
		kenorisk = risk
		kenoselected = numbers

		plinkorisk = risk
		plinkorows = rows	
		
		wheelrisk = risk
		wheelsegments = segments
		
		selection = chips
		
		dragondifficulty = difficulty
		dragoneggs = eggs
		
		baccarattie = tie
		baccaratplayer = player
		baccaratbanker = banker
		
		if(running){
			if(game == "baccarat"){
			baccaratbet(baccarattie, baccaratplayer, baccaratbanker)
			} 
			if(game == "dragontower"){
			dragontowerBet(nextbet, dragondifficulty, dragoneggs)
			} 			
			if(game == "roulette"){
			roulettebet(selection)
			} 
			if(game == "wheel"){
			wheelbet(nextbet, wheelsegments, wheelrisk)
			} 		
			if(game == "plinko"){
			plinkobet(nextbet, plinkorows, plinkorisk)
			} 
			if(game == "mines"){
			minebet(nextbet, fieldcount, minecount)
			}
			if(game == "keno"){
			kenobet(nextbet, kenoselected, kenorisk)
			}
			if(game == "dice"){
			DiceBet(nextbet, chance, bethigh)
			}
			if(game == "limbo"){
			LimboBet(nextbet, target_multi);
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



//setInterval(function () {localStorage.setItem("jscode", editor.getValue());}, 5000);


function start(){
		running = true; countTime(); 
		run_clicked = true;
		btnStart.disabled = true;  
		localStorage.setItem("jscode", editor.getValue());
		currency = document.getElementById('wdbMenuCoin').value;
		document.getElementById("result").innerHTML = "";
		if(theme == "light"){
			document.getElementById("result").style.color = "black";
		} else {
			document.getElementById("result").style.color = "white";
		}
		
		tie = 0
		banker = 0
		player = 0
		game = document.getElementById("gameselect").value;
		var evalcode = editor.getValue();
		setTimeout(evalcode + `;kenorisk = risk
	kenoselected = numbers
	minecount = mines
	fieldcount = fields
	plinkorows = rows
	plinkorisk = risk
	wheelrisk = risk
	wheelsegments = segments
	selection = chips
	dragondifficulty = difficulty
	dragoneggs = eggs
 	baccarattie = tie
	baccaratplayer = player
	baccaratbanker = banker
 

 started_bal = balance; 
 amount = nextbet;
 target_multi = 99 / chance
 //return
	var selectedGame = game;
	if(selectedGame == "dice"){
		if(speedmode == false){
			DiceBet(nextbet, chance, bethigh)
		} else {
			setTimeout(function () {
            DiceBet(nextbet, chance, bethigh)
          }, 200);

          setTimeout(function () {
            DiceBet(nextbet, chance, bethigh)
          }, 400);

		}
	} else if(selectedGame == "limbo"){
		if(speedmode == false){
			LimboBet(nextbet, 99 / chance);
		} else {
			setTimeout(function () {
            LimboBet(nextbet, 99 / chance); 
          }, 200);

          setTimeout(function () {
            LimboBet(nextbet, 99 / chance); 
          }, 400);
          
		}
	} else if(selectedGame == "mines"){
		if(speedmode == false){
			minebet(nextbet, fieldcount, minecount)
		} else {
			setTimeout(function () {
             minebet(nextbet, fieldcount, minecount)
          }, 200);

          setTimeout(function () {
             minebet(nextbet, fieldcount, minecount)
          }, 400);
          
		}
	} else if(selectedGame == "keno"){
		if(speedmode == false){
			kenobet(nextbet, kenoselected, kenorisk)
		} else {
			setTimeout(function () {
             kenobet(nextbet, kenoselected, kenorisk)
          }, 200);

          setTimeout(function () {
             kenobet(nextbet, kenoselected, kenorisk)
          }, 400);
          
		}
	} else if(selectedGame == "plinko"){
		if(speedmode == false){
			plinkobet(nextbet, plinkorows, plinkorisk)
		} else {
			setTimeout(function () {
             plinkobet(nextbet, plinkorows, plinkorisk)
          }, 200);

          setTimeout(function () {
             plinkobet(nextbet, plinkorows, plinkorisk)
          }, 400);
          
		}
	} else if(selectedGame == "wheel"){
		if(speedmode == false){
			wheelbet(nextbet, wheelsegments, wheelrisk)
		} else {
			setTimeout(function () {
             wheelbet(nextbet, wheelsegments, wheelrisk)
          }, 200);

          setTimeout(function () {
             wheelbet(nextbet, wheelsegments, wheelrisk)
          }, 400);
		}
	} else if(selectedGame == "roulette"){
		if(speedmode == false){
			roulettebet(selection)
		} else {
			setTimeout(function () {
             roulettebet(selection)
          }, 200);

          setTimeout(function () {
             roulettebet(selection)
          }, 400);
		}
	} else if(selectedGame == "dragontower"){
		if(speedmode == false){
			dragontowerBet(nextbet, dragondifficulty, dragoneggs)
		} else {
			setTimeout(function () {
             dragontowerBet(nextbet, dragondifficulty, dragoneggs)
          }, 200);

          setTimeout(function () {
             dragontowerBet(nextbet, dragondifficulty, dragoneggs)
          }, 400);
		}
	} else if(selectedGame == "baccarat"){
		if(speedmode == false){
			baccaratbet(baccarattie, baccaratplayer, baccaratbanker)
		} else {
			setTimeout(function () {
             baccaratbet(baccarattie, baccaratplayer, baccaratbanker)
          }, 200);

          setTimeout(function () {
             baccaratbet(baccarattie, baccaratplayer, baccaratbanker)
          }, 400);
		}
	} else if(selectedGame == "crash"){
		
	} else if(selectedGame == "slide"){
		
	}
		
	`, 0);
		

 
 drawChart();

}


  