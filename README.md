# IF you are looking for a more recent updated bot, get #evilbot below: <br /> 
https://github.com/poky1084/evilbot
<br />
<b>Donate:</b> https://ko-fi.com/poky1084
<br />
# bot4stake  <br /> 
a javascript coded bot for Stake, Primedice, copy-paste in the console. (Dice, Limbo, Crash, Slide, Keno, Plinko, Mines, Roulette, Wheel, Baccarat, Dragontower)<br />
the strategy script must be coded in javascript, and not Lua script. 

# Videos: <br /> 
install extension: https://vimeo.com/954123726 <br />
install console: https://cos.tv/videos/play/52855058251682816 <br />

# Info: <br />
Please favourite the repo in case you liked/used it. Thank you!

<b>Discord</b>: fisk_992 <br />
<b>Stake</b>: poky1084 <br />
<b>Telegram:</b>: @poky_1084


# Use: <br />

<b>functions:</b> `resetseed('clientseed'), resetstats(), vault(amount), log('text'), start(), stop(), resetAll(), resetChart(), deleteLogs()`

!!the strategy must be in `dobet()` method, and `dobet()` must be declared as shown below!!
```javascript
nextbet = 0.00001 //in crypto format, not USD
chance = 98

dobet = function(){
 //strategy code
}

or:

function dobet(){
 //strategy code
}
```


<b>Plinko: </b>
```javascript
game = "plinko"
rows = 8
risk = "low" 
```
<b>Keno:</b>
```javascript
game = "keno"
numbers = [1,2,3,4,5,6,7,8]
risk = "low" 
```
<b>Mines:</b>
```javascript
game = "mines"
fields = [1,2,3,4,5,6,7,8]
mines = 3 
```
<b>Limbo:</b>
```javascript
game = "limbo"
chance = 49.5
nextbet = 0 
```
<b>Dice:</b>
```javascript
game = "dice"
chance = 49.5
nextbet = 0
bethigh = false
 ```
<b>Wheel:</b>
```javascript
game = "wheel"
nextbet = 0
risk = "low"
segments = "10"
 ```
<b>baccarat:</b>
```javascript
game = "baccarat"
player = 0.001
banker = 0
tie = 0
 ```
<b>dragon tower:</b>
```javascript
game = "dragontower"
nextbet = 0
difficulty = "easy"
eggs = [0,1]
 ```
<b>Roulette:</b>
```javascript
game = "roulette"
chips = [{"value": "number0", "amount": 0.001},{"value": "colorBlack", "amount": 0.001}]
 ```
<b>Crash:</b>
```javascript
game = "crash"
target = 1.5
chance = 99 / target
nextbet = 0 
```
<b>Slide:</b>
> use: https://www.youtube.com/watch?v=TkDPeuxEOUM <br />
```javascript
game = "slide"
nextbet = 0.01
target = 1.5
chance = 99 / target

dobet = function(){

 if(id["identifier01"]){
    log("identifier01 won.")
 }

 if(id["identifier02"] == false){
    log("identifier02 lost.")
 }

 makebet(nextbet, chance, "identifier01")
 makebet(nextbet, chance, "identifier02")
 makebet(nextbet, chance, "identifier03")
}
```

